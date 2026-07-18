import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { englishSourceAnalysis } from "./english-source-analysis.mjs";
import { grammarCategories } from "./english-grammar-guide.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const lessonDirectory = path.join(root, "lessons");
const outputPath = path.join(root, "2027-suneung-english-grammar.html");
const lessonFiles = fs.readdirSync(lessonDirectory).filter((name) => /^2027-suneung-english-.*\.html$/.test(name));
const escape = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const normalizeGrammar = (grammar) => {
  if (Array.isArray(grammar)) {
    const pattern = String(grammar[0] ?? "").trim();
    const explanation = String(grammar[1] ?? "").trim();
    return {
      pattern,
      explanation,
      text: explanation ? `${pattern} — ${explanation}` : pattern,
    };
  }

  const text = String(grammar ?? "").trim();
  const separator = text.indexOf(",");
  if (separator === -1) return { pattern: text, explanation: "", text };
  return {
    pattern: text.slice(0, separator).trim(),
    explanation: text.slice(separator + 1).trim(),
    text,
  };
};

const classify = (text) => {
  const value = text.toLowerCase();
  if (/관계|선행사|\bwho\b|\bwhom\b|\bwhose\b|\bwhich\b|\bwhereby\b|\bin which\b|\bunder which\b|\bto which\b|\bof which\b|\bwhatever\b|\bwhat you\b|those (interested|that|who)/i.test(value)) return "relatives";
  if (/명사절|동격절|간접의문|의문사|\bwhether\b|the (idea|premise|evidence|perception|assumption) that|report that|indicate \+ that|hope that|it (might|may) be that|it is likely that/i.test(value)) return "noun-clauses";
  if (/가정법|과거 반대|if \+ (과거|had)|would|could|should|\bmay\b|\bmight\b|조동사|시제/i.test(value)) return "tense-modals-conditionals";
  if (/수동|수일치|단수 동사|복수 동사|복수 주어|본동사|be p\.?p\.?|be enjoyed|be provided/i.test(value)) return "voice-agreement";
  if (/although|even though|\bwhile \+|\bwhereas\b|\bbecause\b|\bsince\b|so that|in order to be|no matter|\bonce\b|\bwhen (a|offered|assigned|compared)|\bas it would\b|\bas when\b/i.test(value)) return "adverb-clauses";
  if (/형식주어|5형식|사역|지각|find \+ 목적어|make \+ 목적어|cause \+ 목적어|encourage \+ 목적어|require \+ 목적어|convince \+ 목적어|notice \+ 목적어|provide a with b|tell \+ 목적어|목적격 보어/i.test(value)) return "sentence-patterns";
  if (/to부정사|to \+ 동사원형|to \+ 동사|agree to|choose to|decide to|want to|be likely to|capacity to|chance to|way is to|enough to/i.test(value)) return "infinitives";
  if (/동명사|consider \+|involves \+|instead of \+|prior to \+|refer to \+|by \+ 동명사|be above \+|without \+ 동명사/i.test(value)) return "gerunds";
  if (/분사|현재분사|과거분사|축약|when assigned|when offered|accounts written|including \+|once p\.?p\.?|having p\.?p\.?/i.test(value)) return "participles";
  if (/비교|\bthan\b|as \+ .* as|too \+|the more|the .* likely|최상 정도|more powerful/i.test(value)) return "comparison-degree";
  if (/병렬|도치|생략|not a but|not one, but|not because|there is no|명령문 a and b|a, b, and c|대동사|강조|대조/i.test(value)) return "parallel-special";
  return "prepositions-expressions";
};

const checkpoints = [];
for (const lessonId of Object.keys(englishSourceAnalysis).sort((a, b) => Number(a) - Number(b))) {
  const sources = englishSourceAnalysis[lessonId];
  const lessonFile = lessonFiles.find((name) => name.includes(`-${lessonId.toLowerCase()}-`));
  if (!lessonFile) throw new Error(`영문법 링크용 강의 파일을 찾을 수 없음: ${lessonId}`);
  sources.forEach((source, sourceIndex) => {
    source.grammar.forEach((grammar, grammarIndex) => {
      const normalized = normalizeGrammar(grammar);
      checkpoints.push({
        categoryId: classify(`${normalized.pattern} ${normalized.explanation}`),
        lessonId,
        lessonFile,
        sourceIndex,
        grammarIndex,
        ref: source.ref,
        page: source.page,
        code: source.code,
        ...normalized,
      });
    });
  });
}

const categoryIds = new Set(grammarCategories.map((category) => category.id));
for (const checkpoint of checkpoints) {
  if (!categoryIds.has(checkpoint.categoryId)) throw new Error(`알 수 없는 문법 분류: ${checkpoint.categoryId}`);
}

let questionNumber = 0;
const renderQuestion = (question) => {
  const index = questionNumber++;
  const name = `grammar-question-${index + 1}`;
  return `<section class="practice-question" data-practice-question data-correct="${question.answer}">
    <div class="question-heading"><span>CHECK ${String(index + 1).padStart(2, "0")}</span><h3>${question.prompt}</h3></div>
    <div class="practice-options">${question.options.map((option, optionIndex) => `<label class="practice-option"><input type="radio" name="${name}" value="${optionIndex}"><span class="option-number">${["①", "②", "③", "④", "⑤"][optionIndex]}</span><span>${escape(option)}</span></label>`).join("")}</div>
    <div class="question-actions"><button class="button primary small" type="button" data-check-answer>정답 확인</button><p class="answer-result" data-answer-result aria-live="polite">선택지를 고른 뒤 정답을 확인하세요.</p></div>
    <div class="answer-panel" data-answer-panel hidden><strong>정답 ${["①", "②", "③", "④", "⑤"][question.answer]}</strong><p>${escape(question.explanation)}</p></div>
  </section>`;
};

const categoryCards = grammarCategories.map((category) => {
  const count = checkpoints.filter((checkpoint) => checkpoint.categoryId === category.id).length;
  return `<a class="grammar-overview-card" href="#grammar-${category.id}"><span>${category.label}</span><strong>${escape(category.title)}</strong><small>${count}개 교재 포인트</small></a>`;
}).join("");

const categorySections = grammarCategories.map((category, categoryIndex) => {
  const items = checkpoints.filter((checkpoint) => checkpoint.categoryId === category.id);
  const patterns = category.patterns.map(([pattern, explanation]) => `<li><code>${escape(pattern)}</code><p>${escape(explanation)}</p></li>`).join("");
  const examples = category.examples.map(([english, korean]) => `<article class="grammar-example"><p>${escape(english)}</p><span>${escape(korean)}</span></article>`).join("");
  const traps = category.traps.map((trap) => `<li>${escape(trap)}</li>`).join("");
  const sourceItems = items.map((item) => `<article class="grammar-checkpoint" data-search="${escape(`${item.lessonId} ${item.ref} ${item.page} ${item.code} ${item.text} ${category.title}`)}"><a href="lessons/${item.lessonFile}#source-${item.lessonId.toLowerCase()}-${item.sourceIndex + 1}"><span>${item.lessonId}강 · ${escape(item.ref)} · ${item.page}쪽</span><p><b>${item.grammarIndex + 1}</b><span><strong>${escape(item.pattern)}</strong>${item.explanation ? ` — ${escape(item.explanation)}` : ""}</span></p></a></article>`).join("");
  return `<section class="grammar-category" id="grammar-${category.id}">
    <header class="grammar-category-head"><div><p class="section-kicker">${String(categoryIndex + 1).padStart(2, "0")} · ${category.label}</p><h2>${escape(category.title)}</h2><p>${escape(category.description)}</p></div><strong>${items.length}</strong></header>
    <div class="grammar-rule-grid"><div><h3>핵심 구조</h3><ul class="grammar-pattern-list">${patterns}</ul></div><div><h3>새 예문으로 확인</h3><div class="grammar-example-list">${examples}</div><div class="note-box grammar-trap"><strong>자주 틀리는 지점</strong><ul>${traps}</ul></div></div></div>
    <div class="grammar-mini-quiz"><div class="grammar-subhead"><h3>개념 확인문제</h3><span>즉시 채점</span></div><div class="practice-question-list">${category.questions.map(renderQuestion).join("")}</div></div>
    <details class="grammar-source-details"${categoryIndex === 0 ? " open" : ""}><summary>교재 적용 포인트 ${items.length}개 보기 <span>01~30강의 쪽수·문항별 분석으로 이동</span></summary><div class="grammar-checkpoint-grid">${sourceItems}</div></details>
  </section>`;
}).join("");

const html = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>2027 수능특강 영어 영문법 총정리 576개 | 영어시험연구소</title>
  <meta name="description" content="2027 수능특강 영어 01~30강 제시문 144개의 핵심 영문법 576개를 문장 구조, 시제, 태, 준동사, 관계사, 절, 비교, 특수 구문으로 체계화한 무료 학습 페이지입니다.">
  <link rel="canonical" href="https://englishexamlab.kr/2027-suneung-english-grammar.html">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="assets/styles.css">
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "2027 수능특강 영어 영문법 총정리",
    url: "https://englishexamlab.kr/2027-suneung-english-grammar.html",
    description: "수능특강 영어 전 범위 핵심 영문법 576개와 자체 확인문제",
    inLanguage: "ko-KR",
    educationalLevel: "고등학교·수능",
    teaches: grammarCategories.map((category) => category.title),
    isAccessibleForFree: true,
  })}</script>
</head>
<body>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header"><div class="header-inner"><a class="brand" href="index.html"><span class="brand-mark">E</span><span>영어시험연구소</span></a><button class="menu-button" type="button" data-menu-button aria-label="메뉴 열기" aria-expanded="false"><span></span></button><nav class="main-nav" data-main-nav><a href="2027-suneung-english.html">수능특강 영어</a><a href="2027-suneung-reading.html">영어독해연습</a><a href="2027-suneung-listening.html">영어듣기</a><a href="2027-suneung-english-grammar.html" aria-current="page">영문법 총정리</a><a href="guides.html">학습 자료</a></nav></div></header>
  <main id="main">
    <section class="page-hero grammar-hero"><div class="container"><div class="breadcrumb"><a href="index.html">홈</a><span>›</span><a href="2027-suneung-english.html">수능특강 영어</a><span>›</span><span>영문법 총정리</span></div><div class="page-title"><div><p class="section-kicker">COMPLETE GRAMMAR MAP</p><h1>2027 수능특강 영어<br>영문법 총정리</h1><p>교재 원문을 옮기지 않고 01~30강의 144개 제시문에서 확인해야 할 문법 포인트 576개를 12개 영역으로 다시 묶었습니다.</p></div><div class="title-badge"><strong>576</strong><span>교재 문법 포인트</span></div></div></div></section>
    <section class="section"><div class="container"><section class="article-section grammar-intro"><div><p class="section-kicker">HOW TO USE</p><h2>개념 → 예문 → 확인문제 → 교재 적용</h2><p>각 영역의 핵심 구조를 익힌 뒤 자체 예문과 확인문제를 풀고, 필요한 경우 교재 쪽수 링크를 눌러 해당 제시문의 내용·문법·어휘 분석으로 돌아가세요.</p></div><div class="grammar-facts"><span><strong>12</strong>문법 영역</span><span><strong>144</strong>제시문</span><span><strong>24</strong>확인문제</span></div></section><nav class="grammar-overview" aria-label="문법 영역 바로가기">${categoryCards}</nav></div></section>
    <section class="section muted"><div class="container"><section class="article-section grammar-search"><h2>교재 문법 포인트 검색</h2><p>강 번호, 교재 쪽수, 문법 용어를 입력하면 아래 교재 적용 목록에서 해당 항목만 남습니다.</p><label class="filter-box"><span aria-hidden="true">⌕</span><input type="search" placeholder="예: 관계사, 11강, to부정사, 62쪽" aria-label="영문법 포인트 검색" data-filter=".grammar-checkpoint" data-filter-open></label><div class="empty-message" data-filter-empty>검색어와 일치하는 문법 포인트가 없습니다.</div></section>${categorySections}</div></section>
  </main>
  <footer class="site-footer"><div class="container"><div class="footer-grid"><div><p class="footer-brand">영어시험연구소</p><p>교재의 문법을 실제 문장 관계와 판단 순서로 정리합니다.</p></div><div><h2>수능특강 영어</h2><div class="footer-links"><a href="2027-suneung-english.html">30강 전체 목차</a><a href="suneung-english-grammar-checklist.html">수능 어법 점검표</a><a href="guides.html">전체 학습 자료</a></div></div><div><h2>운영 안내</h2><div class="footer-links"><a href="about.html">사이트 소개</a><a href="privacy.html">개인정보처리방침</a><a href="copyright.html">저작권·출처 안내</a><a href="contact.html">문의</a></div></div></div><div class="footer-bottom">© <span data-current-year>2026</span> 영어시험연구소. EBS 및 교재 출판사와 제휴된 사이트가 아닙니다.</div></div></footer>
  <script src="assets/app.js" defer></script>
</body>
</html>`;

fs.writeFileSync(outputPath, html);
console.log(`Generated grammar page: ${outputPath}`);
console.log(`Grammar checkpoints: ${checkpoints.length}, questions: ${questionNumber}`);
console.log(grammarCategories.map((category) => `${category.title} ${checkpoints.filter((item) => item.categoryId === category.id).length}`).join(" / "));

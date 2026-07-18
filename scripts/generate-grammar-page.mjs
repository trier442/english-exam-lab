import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { grammarCategories } from "./english-grammar-guide.mjs";
import { grammarDetails } from "./english-grammar-details.mjs";
import { buildGrammarCheckpoints, grammarPageHref } from "./english-grammar-catalog.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const grammarDirectory = path.join(root, "grammar");
const indexPath = path.join(root, "2027-suneung-english-grammar.html");
const checkpoints = buildGrammarCheckpoints(root);
const escape = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");
const symbols = ["①", "②", "③", "④", "⑤"];

fs.mkdirSync(grammarDirectory, { recursive: true });

const categoryIds = new Set(grammarCategories.map((category) => category.id));
for (const checkpoint of checkpoints) {
  if (!categoryIds.has(checkpoint.categoryId)) throw new Error(`알 수 없는 문법 분류: ${checkpoint.categoryId}`);
}
for (const category of grammarCategories) {
  if (!grammarDetails[category.id]) throw new Error(`상세 문법 데이터 누락: ${category.id}`);
}

const header = (prefix = "", current = "") => `<a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header"><div class="header-inner"><a class="brand" href="${prefix}index.html"><span class="brand-mark">E</span><span>영어시험연구소</span></a><button class="menu-button" type="button" data-menu-button aria-label="메뉴 열기" aria-expanded="false"><span></span></button><nav class="main-nav" data-main-nav><a href="${prefix}2027-suneung-english.html">수능특강 영어</a><a href="${prefix}2027-suneung-reading.html">영어독해연습</a><a href="${prefix}2027-suneung-listening.html">영어듣기</a><a href="${prefix}2027-suneung-english-grammar.html"${current === "grammar" ? ' aria-current="page"' : ""}>영문법 총정리</a><a href="${prefix}guides.html">학습 자료</a></nav></div></header>`;

const footer = (prefix = "") => `<footer class="site-footer"><div class="container"><div class="footer-grid"><div><p class="footer-brand">영어시험연구소</p><p>교재의 문법을 실제 문장 관계와 판단 순서로 정리합니다.</p></div><div><h2>수능특강 영어</h2><div class="footer-links"><a href="${prefix}2027-suneung-english.html">30강 전체 목차</a><a href="${prefix}2027-suneung-english-grammar.html">영문법 12개 영역</a><a href="${prefix}suneung-english-grammar-checklist.html">수능 어법 점검표</a></div></div><div><h2>운영 안내</h2><div class="footer-links"><a href="${prefix}about.html">사이트 소개</a><a href="${prefix}privacy.html">개인정보처리방침</a><a href="${prefix}copyright.html">저작권·출처 안내</a><a href="${prefix}contact.html">문의</a></div></div></div><div class="footer-bottom">© <span data-current-year>2026</span> 영어시험연구소. EBS 및 교재 출판사와 제휴된 사이트가 아닙니다.</div></div></footer>`;

const renderQuestion = (question, categoryId, index) => {
  const name = `grammar-${categoryId}-question-${index + 1}`;
  return `<section class="practice-question" data-practice-question data-correct="${question.answer}">
    <div class="question-heading"><span>CHECK ${String(index + 1).padStart(2, "0")}</span><h3>${question.prompt}</h3></div>
    <div class="practice-options">${question.options.map((option, optionIndex) => `<label class="practice-option"><input type="radio" name="${name}" value="${optionIndex}"><span class="option-number">${symbols[optionIndex]}</span><span>${escape(option)}</span></label>`).join("")}</div>
    <div class="question-actions"><button class="button primary small" type="button" data-check-answer>정답 확인</button><p class="answer-result" data-answer-result aria-live="polite">선택지를 고른 뒤 정답을 확인하세요.</p></div>
    <div class="answer-panel" data-answer-panel hidden><strong>정답 ${symbols[question.answer]}</strong><p>${escape(question.explanation)}</p></div>
  </section>`;
};

const categoryCards = grammarCategories.map((category, index) => {
  const count = checkpoints.filter((checkpoint) => checkpoint.categoryId === category.id).length;
  return `<a class="grammar-overview-card" href="${grammarPageHref(category.id)}"><span>${String(index + 1).padStart(2, "0")} · ${category.label}</span><strong>${escape(category.title)}</strong><p>${escape(category.description)}</p><small>${count}개 교재 포인트 · 자세히 배우기 →</small></a>`;
}).join("");

const indexSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "2027 수능특강 영어 영문법 12개 영역",
  url: "https://englishexamlab.kr/2027-suneung-english-grammar.html",
  description: "수능특강 영어 핵심 영문법 576개를 12개 독립 학습 페이지로 정리한 목차",
  inLanguage: "ko-KR",
  hasPart: grammarCategories.map((category) => ({
    "@type": "LearningResource",
    name: category.title,
    url: `https://englishexamlab.kr/${grammarPageHref(category.id)}`,
  })),
};

const indexHtml = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>2027 수능특강 영어 영문법 12개 영역 | 영어시험연구소</title>
  <meta name="description" content="2027 수능특강 영어 01~30강 제시문 144개의 핵심 영문법 576개를 12개 독립 페이지로 나누어 개념, 예문, 문장 분석, 확인문제와 함께 설명합니다.">
  <link rel="canonical" href="https://englishexamlab.kr/2027-suneung-english-grammar.html">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="assets/styles.css">
  <script type="application/ld+json">${JSON.stringify(indexSchema)}</script>
</head>
<body>
  ${header("", "grammar")}
  <main id="main">
    <section class="page-hero grammar-hero"><div class="container"><div class="breadcrumb"><a href="index.html">홈</a><span>›</span><a href="2027-suneung-english.html">수능특강 영어</a><span>›</span><span>영문법 12개 영역</span></div><div class="page-title"><div><p class="section-kicker">COMPLETE GRAMMAR MAP</p><h1>2027 수능특강 영어<br>영문법 12개 영역</h1><p>한 페이지에 모아 두었던 내용을 12개 독립 학습 페이지로 나누었습니다. 필요한 문법만 골라 개념 설명과 문장 분석을 충분히 읽은 뒤 교재 적용 포인트로 연결하세요.</p></div><div class="title-badge"><strong>12</strong><span>상세 학습 페이지</span></div></div></div></section>
    <section class="section"><div class="container"><section class="article-section grammar-intro"><div><p class="section-kicker">HOW TO USE</p><h2>한 영역씩 깊게 공부하세요.</h2><p>각 페이지는 판단 순서, 세부 개념 3개, 자체 예문 6개와 문장 분석, 확인문제, 01~30강 교재 적용 포인트로 구성했습니다. 교재 원문을 옮기지 않고 문법 관계를 독립적으로 설명합니다.</p></div><div class="grammar-facts"><span><strong>12</strong>문법 영역</span><span><strong>576</strong>교재 포인트</span><span><strong>24</strong>확인문제</span></div></section><nav class="grammar-overview grammar-directory" aria-label="문법 영역 선택">${categoryCards}</nav></div></section>
    <section class="section muted"><div class="container"><div class="section-heading"><div><p class="section-kicker">RECOMMENDED ROUTE</p><h2>어떤 순서로 볼까요?</h2></div><p>기초 구조부터 절과 특수구문까지 단계적으로 진행하거나, 취약한 영역만 골라 공부해도 됩니다.</p></div><div class="grammar-route-grid"><article><span>STEP 1</span><h3>문장 뼈대</h3><p>문장 성분 → 시제·조동사 → 태·수일치</p></article><article><span>STEP 2</span><h3>준동사</h3><p>to부정사 → 동명사 → 분사·분사구문</p></article><article><span>STEP 3</span><h3>절의 연결</h3><p>관계사 → 명사절 → 부사절·접속사</p></article><article><span>STEP 4</span><h3>정확한 표현</h3><p>비교 → 병렬·도치 → 전치사·핵심 어구</p></article></div><section class="article-section grammar-index-note"><h2>576개 포인트는 어디에 있나요?</h2><p>각 영역 페이지의 아래쪽에 수능특강 영어 01~30강에서 확인할 문법 포인트를 강·문항·쪽수별로 실었습니다. 항목을 누르면 해당 강의 제시문 해설·어휘·문항 해제로 이동합니다.</p></section></div></section>
  </main>
  ${footer()}
  <script src="assets/app.js" defer></script>
</body>
</html>`;

fs.writeFileSync(indexPath, indexHtml);

let totalQuestions = 0;
for (const [categoryIndex, category] of grammarCategories.entries()) {
  const detail = grammarDetails[category.id];
  const items = checkpoints.filter((checkpoint) => checkpoint.categoryId === category.id);
  const previous = grammarCategories[(categoryIndex - 1 + grammarCategories.length) % grammarCategories.length];
  const next = grammarCategories[(categoryIndex + 1) % grammarCategories.length];
  const patterns = category.patterns.map(([pattern, explanation]) => `<li><code>${escape(pattern)}</code><p>${escape(explanation)}</p></li>`).join("");
  const sequence = detail.sequence.map((step, index) => `<li><span>${index + 1}</span><p>${escape(step)}</p></li>`).join("");
  const units = detail.units.map((unit, unitIndex) => {
    const explanations = unit.explanations.map((paragraph) => `<p>${escape(paragraph)}</p>`).join("");
    const examples = unit.examples.map(([english, korean, analysis]) => `<article class="grammar-analysis-example"><p class="grammar-english">${escape(english)}</p><p class="grammar-korean">${escape(korean)}</p><div><strong>문장 분석</strong><p>${escape(analysis)}</p></div></article>`).join("");
    return `<section class="grammar-detail-unit"><header><span>${String(unitIndex + 1).padStart(2, "0")}</span><div><h2>${escape(unit.title)}</h2><code>${escape(unit.rule)}</code></div></header><div class="grammar-explanation">${explanations}</div><div class="grammar-analysis-examples">${examples}</div><div class="grammar-check-line"><strong>시험에서 확인</strong><p>${escape(unit.checkpoint)}</p></div></section>`;
  }).join("");
  const traps = category.traps.map((trap) => `<li>${escape(trap)}</li>`).join("");
  const sourceItems = items.map((item) => `<article class="grammar-checkpoint" data-search="${escape(`${item.lessonId} ${item.ref} ${item.page} ${item.code} ${item.text} ${category.title}`)}"><a href="../lessons/${item.lessonFile}#source-${item.lessonId.toLowerCase()}-${item.sourceIndex + 1}"><span>${item.lessonId}강 · ${escape(item.ref)} · ${item.page}쪽</span><p><b>${item.grammarIndex + 1}</b><span><strong>${escape(item.pattern)}</strong>${item.explanation ? ` — ${escape(item.explanation)}` : ""}</span></p></a></article>`).join("");
  const questions = category.questions.map((question, index) => renderQuestion(question, category.id, index)).join("");
  totalQuestions += category.questions.length;

  const canonical = `https://englishexamlab.kr/${grammarPageHref(category.id)}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "LearningResource", name: `2027 수능특강 영어 영문법: ${category.title}`, url: canonical, description: category.description, inLanguage: "ko-KR", educationalLevel: "고등학교·수능", teaches: category.patterns.map(([pattern]) => pattern), isAccessibleForFree: true },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: "https://englishexamlab.kr/" },
        { "@type": "ListItem", position: 2, name: "영문법 12개 영역", item: "https://englishexamlab.kr/2027-suneung-english-grammar.html" },
        { "@type": "ListItem", position: 3, name: category.title, item: canonical },
      ] },
    ],
  };

  const categoryHtml = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(category.title)} 상세 정리 | 2027 수능특강 영어</title>
  <meta name="description" content="2027 수능특강 영어 ${escape(category.title)} 문법을 판단 순서, 상세 개념, 자체 예문과 문장 분석, 확인문제, 교재 적용 포인트 ${items.length}개로 정리합니다.">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="../assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="../assets/styles.css">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
  ${header("../", "grammar")}
  <main id="main">
    <section class="page-hero grammar-hero grammar-detail-hero"><div class="container"><div class="breadcrumb"><a href="../index.html">홈</a><span>›</span><a href="../2027-suneung-english-grammar.html">영문법 12개 영역</a><span>›</span><span>${escape(category.title)}</span></div><div class="page-title"><div><p class="section-kicker">${String(categoryIndex + 1).padStart(2, "0")} · ${category.label}</p><h1>${escape(category.title)}</h1><p>${escape(category.description)}</p></div><div class="title-badge"><strong>${items.length}</strong><span>교재 적용 포인트</span></div></div></div></section>
    <section class="section"><div class="container grammar-detail-layout"><article><section class="article-section grammar-detail-intro"><p class="section-kicker">CORE IDEA</p><h2>먼저 개념을 이해하세요.</h2>${detail.intro.map((paragraph) => `<p>${escape(paragraph)}</p>`).join("")}<div class="grammar-detail-stats"><span><strong>3</strong>상세 개념</span><span><strong>6</strong>분석 예문</span><span><strong>2</strong>확인문제</span></div></section><section class="article-section"><h2>판단 순서</h2><ol class="grammar-decision-steps">${sequence}</ol></section></article><aside class="sidebar"><div class="side-card"><h2>핵심 구조 빠르게 보기</h2><ul class="grammar-pattern-list compact">${patterns}</ul></div><div class="side-card"><h2>다른 영역으로 이동</h2><p><a href="${previous.id}.html">← ${escape(previous.title)}</a></p><p><a href="../2027-suneung-english-grammar.html">12개 영역 전체 목차</a></p><p><a href="${next.id}.html">${escape(next.title)} →</a></p></div></aside></div></section>
    <section class="section muted"><div class="container"><div class="grammar-detail-content">${units}</div><section class="article-section grammar-trap-panel"><p class="section-kicker">COMMON ERRORS</p><h2>자주 틀리는 지점</h2><ul>${traps}</ul></section><section class="grammar-mini-quiz grammar-page-quiz"><div class="grammar-subhead"><div><p class="section-kicker">SELF CHECK</p><h2>개념 확인문제</h2></div><span>즉시 채점</span></div><div class="practice-question-list">${questions}</div></section></div></section>
    <section class="section"><div class="container"><section class="article-section grammar-search"><p class="section-kicker">TEXTBOOK CONNECTION</p><h2>교재 적용 포인트 ${items.length}개</h2><p>강 번호, 쪽수, 문법 용어를 검색하거나 항목을 눌러 해당 제시문의 상세 분석으로 이동하세요.</p><label class="filter-box"><span aria-hidden="true">⌕</span><input type="search" placeholder="예: ${escape(category.patterns[0][0])}, 11강, 62쪽" aria-label="${escape(category.title)} 교재 포인트 검색" data-filter=".grammar-checkpoint" data-filter-open></label><div class="empty-message" data-filter-empty>검색어와 일치하는 문법 포인트가 없습니다.</div></section><details class="grammar-source-details" open><summary>${escape(category.title)} 교재 포인트 ${items.length}개 보기 <span>01~30강의 쪽수·문항별 분석으로 이동</span></summary><div class="grammar-checkpoint-grid">${sourceItems}</div></details><nav class="lesson-nav grammar-page-nav" aria-label="영문법 영역 이동"><a class="button secondary" href="${previous.id}.html">← ${escape(previous.title)}</a><a class="button secondary" href="../2027-suneung-english-grammar.html">12개 영역 목차</a><a class="button primary" href="${next.id}.html">${escape(next.title)} →</a></nav></div></section>
  </main>
  ${footer("../")}
  <script src="../assets/app.js" defer></script>
</body>
</html>`;

  fs.writeFileSync(path.join(grammarDirectory, `${category.id}.html`), categoryHtml);
}

console.log(`Generated grammar index: ${indexPath}`);
console.log(`Generated grammar detail pages: ${grammarCategories.length}`);
console.log(`Grammar checkpoints: ${checkpoints.length}, questions: ${totalQuestions}`);
console.log(grammarCategories.map((category) => `${category.title} ${checkpoints.filter((item) => item.categoryId === category.id).length}`).join(" / "));

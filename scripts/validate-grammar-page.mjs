import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { englishSourceAnalysis } from "./english-source-analysis.mjs";
import { grammarCategories } from "./english-grammar-guide.mjs";
import { grammarDetails } from "./english-grammar-details.mjs";
import { buildGrammarCheckpoints, grammarPageHref } from "./english-grammar-catalog.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexHtml = fs.readFileSync(path.join(root, "2027-suneung-english-grammar.html"), "utf8");
const checkpoints = buildGrammarCheckpoints(root);
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};
const count = (html, pattern) => html.match(pattern)?.length ?? 0;

const sourceGrammarCount = Object.values(englishSourceAnalysis)
  .flat()
  .reduce((total, source) => total + source.grammar.length, 0);
const questions = grammarCategories.flatMap((category) => category.questions);
const answerDistribution = [0, 0, 0, 0, 0];
let previousAnswer = null;
let renderedCheckpoints = 0;
let renderedQuestions = 0;
let renderedUnits = 0;
let renderedExamples = 0;
let lessonLinkCount = 0;

assert(sourceGrammarCount === 576, `원본 분석 문법 수: 예상 576개, 실제 ${sourceGrammarCount}개`);
assert(checkpoints.length === 576, `분류된 문법 수: 예상 576개, 실제 ${checkpoints.length}개`);
assert(grammarCategories.length === 12, `문법 영역 수: 예상 12개, 실제 ${grammarCategories.length}개`);
assert(questions.length === 24, `확인문제 수: 예상 24개, 실제 ${questions.length}개`);
assert(count(indexHtml, /class="grammar-overview-card"/g) === 12, "총목차의 영역 카드가 12개가 아님");
assert(count(indexHtml, /class="grammar-category"/g) === 0, "총목차에 상세 영역 본문이 남아 있음");

for (const [categoryIndex, category] of grammarCategories.entries()) {
  const detail = grammarDetails[category.id];
  const relativePage = grammarPageHref(category.id);
  const pagePath = path.join(root, relativePage);
  const label = `${String(categoryIndex + 1).padStart(2, "0")} ${category.title}`;
  const categoryItems = checkpoints.filter((item) => item.categoryId === category.id);

  assert(indexHtml.includes(`href="${relativePage}"`), `${label}: 총목차 링크 누락`);
  assert(fs.existsSync(pagePath), `${label}: 독립 페이지 누락`);
  if (!fs.existsSync(pagePath)) continue;

  const html = fs.readFileSync(pagePath, "utf8");
  assert(Boolean(detail), `${label}: 상세 설명 데이터 누락`);
  assert(detail?.intro.length >= 2, `${label}: 도입 설명 부족`);
  assert(detail?.sequence.length === 3, `${label}: 판단 순서가 3단계가 아님`);
  assert(detail?.units.length === 3, `${label}: 상세 개념이 3개가 아님`);
  assert(category.patterns.length === 4, `${label}: 핵심 구조가 4개가 아님`);
  assert(category.traps.length >= 2, `${label}: 오답 주의점 부족`);
  assert(category.questions.length === 2, `${label}: 확인문제가 2개가 아님`);

  for (const [unitIndex, unit] of (detail?.units ?? []).entries()) {
    assert(unit.explanations.length === 2, `${label} 상세 개념 ${unitIndex + 1}: 설명 문단이 2개가 아님`);
    assert(unit.examples.length === 2, `${label} 상세 개념 ${unitIndex + 1}: 분석 예문이 2개가 아님`);
    assert(unit.explanations.every((paragraph) => [...paragraph].length >= 80), `${label} 상세 개념 ${unitIndex + 1}: 설명이 지나치게 짧음`);
    assert(unit.examples.every((example) => example.length === 3 && example.every(Boolean)), `${label} 상세 개념 ${unitIndex + 1}: 예문·해석·분석 누락`);
    assert(Boolean(unit.checkpoint), `${label} 상세 개념 ${unitIndex + 1}: 시험 확인 기준 누락`);
  }

  const pageCheckpoints = count(html, /class="grammar-checkpoint"/g);
  const pageQuestions = count(html, /data-practice-question/g);
  const pageUnits = count(html, /class="grammar-detail-unit"/g);
  const pageExamples = count(html, /class="grammar-analysis-example"/g);
  renderedCheckpoints += pageCheckpoints;
  renderedQuestions += pageQuestions;
  renderedUnits += pageUnits;
  renderedExamples += pageExamples;
  assert(pageCheckpoints === categoryItems.length, `${label}: 교재 포인트 예상 ${categoryItems.length}개, 실제 ${pageCheckpoints}개`);
  assert(pageQuestions === 2, `${label}: 생성 페이지 확인문제가 2개가 아님`);
  assert(pageUnits === 3, `${label}: 생성 페이지 상세 개념이 3개가 아님`);
  assert(pageExamples === 6, `${label}: 생성 페이지 분석 예문이 6개가 아님`);
  assert(html.includes(`data-filter=".grammar-checkpoint"`), `${label}: 교재 포인트 검색 기능 누락`);
  assert(html.includes(`rel="canonical" href="https://englishexamlab.kr/${relativePage}"`), `${label}: canonical 오류`);

  for (const [questionIndex, question] of category.questions.entries()) {
    const questionLabel = `${label} 확인문제 ${questionIndex + 1}`;
    assert(question.options.length === 5, `${questionLabel}: 선택지가 5개가 아님`);
    assert(new Set(question.options).size === 5, `${questionLabel}: 중복 선택지`);
    assert(question.answer >= 0 && question.answer < 5, `${questionLabel}: 잘못된 정답 번호`);
    assert(Boolean(question.explanation), `${questionLabel}: 해설 누락`);
    const lengths = question.options.map((option) => [...option].length);
    const maxLength = Math.max(...lengths);
    const longestCount = lengths.filter((length) => length === maxLength).length;
    assert(lengths[question.answer] < maxLength || longestCount > 1, `${questionLabel}: 정답 선택지만 가장 긴 길이 단서`);
    assert(question.answer !== previousAnswer, `${questionLabel}: 직전 문제와 정답 번호 중복`);
    previousAnswer = question.answer;
    answerDistribution[question.answer] += 1;
  }

  const lessonLinks = [...html.matchAll(/href="\.\.\/(lessons\/[^"#]+\.html)#([^"]+)"/g)];
  lessonLinkCount += lessonLinks.length;
  assert(lessonLinks.length === categoryItems.length, `${label}: 강별 링크 예상 ${categoryItems.length}개, 실제 ${lessonLinks.length}개`);
  for (const [, relativePath, anchor] of lessonLinks) {
    const targetPath = path.join(root, relativePath);
    assert(fs.existsSync(targetPath), `강별 분석 파일 누락: ${relativePath}`);
    if (fs.existsSync(targetPath)) {
      const targetHtml = fs.readFileSync(targetPath, "utf8");
      assert(targetHtml.includes(`id="${anchor}"`), `강별 분석 앵커 누락: ${relativePath}#${anchor}`);
    }
  }
}

assert(renderedCheckpoints === 576, `12개 페이지 교재 포인트 합계: ${renderedCheckpoints}`);
assert(renderedQuestions === 24, `12개 페이지 확인문제 합계: ${renderedQuestions}`);
assert(renderedUnits === 36, `12개 페이지 상세 개념 합계: ${renderedUnits}`);
assert(renderedExamples === 72, `12개 페이지 분석 예문 합계: ${renderedExamples}`);
assert(lessonLinkCount === 576, `강별 분석 링크 합계: ${lessonLinkCount}`);
assert(Math.max(...answerDistribution) - Math.min(...answerDistribution) <= 1,
  `정답 분포 불균형: ${answerDistribution.join("/")}`);

if (failures.length) {
  console.error(failures.map((message) => `- ${message}`).join("\n"));
  process.exit(1);
}

console.log(`영문법 검증 완료: 총목차 1개 + 독립 페이지 ${grammarCategories.length}개`);
console.log(`상세 개념 ${renderedUnits}개, 분석 예문 ${renderedExamples}개, 확인문제 ${renderedQuestions}개`);
console.log(`교재 포인트·강별 링크 ${renderedCheckpoints}개`);
console.log(`정답 분포: ${answerDistribution.map((count, index) => `${index + 1}번 ${count}`).join(", ")}`);

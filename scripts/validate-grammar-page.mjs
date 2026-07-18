import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { englishSourceAnalysis } from "./english-source-analysis.mjs";
import { grammarCategories } from "./english-grammar-guide.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pagePath = path.join(root, "2027-suneung-english-grammar.html");
const html = fs.readFileSync(pagePath, "utf8");
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};
const occurrences = (pattern) => html.match(pattern)?.length ?? 0;

const sourceGrammarCount = Object.values(englishSourceAnalysis)
  .flat()
  .reduce((total, source) => total + source.grammar.length, 0);
const questions = grammarCategories.flatMap((category) => category.questions);
const answerDistribution = [0, 0, 0, 0, 0];
let previousAnswer = null;

assert(sourceGrammarCount === 576, `원본 분석 문법 수: 예상 576개, 실제 ${sourceGrammarCount}개`);
assert(grammarCategories.length === 12, `문법 영역 수: 예상 12개, 실제 ${grammarCategories.length}개`);
assert(questions.length === 24, `확인문제 수: 예상 24개, 실제 ${questions.length}개`);
assert(occurrences(/class="grammar-category"/g) === 12, "생성 페이지 문법 영역이 12개가 아님");
assert(occurrences(/class="grammar-checkpoint"/g) === 576, "생성 페이지 교재 문법 포인트가 576개가 아님");
assert(occurrences(/data-practice-question/g) === 24, "생성 페이지 확인문제가 24개가 아님");

for (const [categoryIndex, category] of grammarCategories.entries()) {
  assert(html.includes(`id="grammar-${category.id}"`), `${category.title}: 영역 앵커 누락`);
  assert(category.patterns.length === 4, `${category.title}: 핵심 구조가 4개가 아님`);
  assert(category.examples.length === 2, `${category.title}: 자체 예문이 2개가 아님`);
  assert(category.traps.length >= 2, `${category.title}: 오답 주의점 부족`);

  for (const [questionIndex, question] of category.questions.entries()) {
    const label = `${categoryIndex + 1}영역 ${questionIndex + 1}번`;
    assert(question.options.length === 5, `${label}: 선택지가 5개가 아님`);
    assert(new Set(question.options).size === 5, `${label}: 중복 선택지`);
    assert(question.answer >= 0 && question.answer < 5, `${label}: 잘못된 정답 번호`);
    assert(Boolean(question.explanation), `${label}: 해설 누락`);
    const lengths = question.options.map((option) => [...option].length);
    const maxLength = Math.max(...lengths);
    const longestCount = lengths.filter((length) => length === maxLength).length;
    assert(lengths[question.answer] < maxLength || longestCount > 1, `${label}: 정답 선택지만 가장 긴 길이 단서`);
    assert(question.answer !== previousAnswer, `${label}: 직전 문제와 정답 번호 중복`);
    previousAnswer = question.answer;
    answerDistribution[question.answer] += 1;
  }
}

assert(Math.max(...answerDistribution) - Math.min(...answerDistribution) <= 1,
  `정답 분포 불균형: ${answerDistribution.join("/")}`);

const lessonLinks = [...html.matchAll(/href="(lessons\/[^"#]+\.html)#([^"]+)"/g)];
assert(lessonLinks.length === 576, `강별 분석 링크: 예상 576개, 실제 ${lessonLinks.length}개`);
for (const [, relativePath, anchor] of lessonLinks) {
  const targetPath = path.join(root, relativePath);
  assert(fs.existsSync(targetPath), `강별 분석 파일 누락: ${relativePath}`);
  if (fs.existsSync(targetPath)) {
    const targetHtml = fs.readFileSync(targetPath, "utf8");
    assert(targetHtml.includes(`id="${anchor}"`), `강별 분석 앵커 누락: ${relativePath}#${anchor}`);
  }
}

for (const match of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
  try {
    JSON.parse(match[1]);
  } catch (error) {
    failures.push(`JSON-LD 오류: ${error.message}`);
  }
}

if (failures.length) {
  console.error(failures.map((message) => `- ${message}`).join("\n"));
  process.exit(1);
}

console.log(`영문법 검증 완료: ${grammarCategories.length}개 영역, ${sourceGrammarCount}개 교재 포인트, ${questions.length}개 확인문제`);
console.log(`정답 분포: ${answerDistribution.map((count, index) => `${index + 1}번 ${count}`).join(", ")}`);
console.log(`강별 분석 링크 ${lessonLinks.length}개와 앵커 정상`);

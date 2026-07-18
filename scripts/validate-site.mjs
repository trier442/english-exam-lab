import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { englishPractice } from "./english-practice-data.mjs";
import { englishSourceAnalysis } from "./english-source-analysis.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};
const occurrences = (text, pattern) => text.match(pattern)?.length ?? 0;

const lessonFiles = fs.readdirSync(path.join(root, "lessons"))
  .filter((name) => /^2027-suneung-english-.*\.html$/.test(name))
  .sort();

assert(lessonFiles.length === 33, `영어 강의 페이지: 예상 33개, 실제 ${lessonFiles.length}개`);

const lessonIds = [
  "01", "02", "03", "04", "05", "06", "07", "08", "09", "10",
  "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
  "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
  "T1", "T2", "T3",
];

for (const id of lessonIds) {
  const sourceItems = englishSourceAnalysis[id] ?? [];
  const practice = englishPractice[id];
  const sets = practice ? [practice, ...(practice.extraSets ?? [])] : [];
  const questionCount = sets.reduce((sum, set) => sum + set.questions.length, 0);
  const expectedSets = ["16", "17"].includes(id) ? 7
    : /^2[1-9]$|^30$/.test(id) ? 4
      : 5;
  const expectedSources = id.startsWith("T") ? 0 : expectedSets;
  const expectedQuestions = expectedSets * 2;
  assert(sourceItems.length === expectedSources, `${id}강 교재 분석 수: ${sourceItems.length}`);
  assert(sets.length === expectedSets, `${id}강 변형 지문 수: ${sets.length}`);
  assert(questionCount === expectedQuestions, `${id}강 변형문제 수: ${questionCount}`);

  for (const item of sourceItems) {
    assert(Boolean(item.summary), `${id}강 ${item.ref}: 내용 해설 누락`);
    assert(item.flow?.length === 4, `${id}강 ${item.ref}: 전개 분석이 4단계가 아님`);
    assert(item.grammar?.length === 4, `${id}강 ${item.ref}: 문법 설명이 4개가 아님`);
    assert(item.vocab?.length === 5, `${id}강 ${item.ref}: 어휘 설명이 5개가 아님`);
    assert(Boolean(item.solution), `${id}강 ${item.ref}: 원문 문제 해제 누락`);
    assert(item.traps?.length === 4, `${id}강 ${item.ref}: 오답 해제가 4개가 아님`);
  }

  for (const set of sets) {
    for (const question of set.questions) {
      assert(question.options.length === 5, `${id}강 ${set.title}: 선택지가 5개가 아님`);
      assert(new Set(question.options).size === 5, `${id}강 ${set.title}: 중복 선택지`);
      assert(question.answer >= 0 && question.answer < 5, `${id}강 ${set.title}: 잘못된 정답 번호`);
      assert(Boolean(question.explanation), `${id}강 ${set.title}: 해설 누락`);
      if (!["01", "02", "03"].includes(id)) {
        const lengths = question.options.map((option) => [...option].length);
        const maxLength = Math.max(...lengths);
        const longestCount = lengths.filter((length) => length === maxLength).length;
        assert(lengths[question.answer] < maxLength || longestCount > 1,
          `${id}강 ${set.title}: 정답 선택지만 가장 길어 길이 단서가 생김`);
      }
    }
  }

  const lessonName = lessonFiles.find((name) => name.includes(`-${id.toLowerCase()}-`));
  const lessonHtml = lessonName ? fs.readFileSync(path.join(root, "lessons", lessonName), "utf8") : "";
  assert(occurrences(lessonHtml, /class="source-learning-unit"/g) === expectedSources, `${id}강 생성 페이지의 분석 단위가 ${expectedSources}개가 아님`);
  assert(occurrences(lessonHtml, /data-practice-question/g) === expectedQuestions, `${id}강 생성 페이지의 문제가 ${expectedQuestions}개가 아님`);
}

let totalQuestions = 0;
const answerDistribution = [0, 0, 0, 0, 0];
let previousAnswer = null;
for (const name of lessonFiles) {
  const html = fs.readFileSync(path.join(root, "lessons", name), "utf8");
  const answers = [...html.matchAll(/data-correct="([0-4])"/g)].map((match) => Number(match[1]));
  totalQuestions += answers.length;
  for (const answer of answers) {
    answerDistribution[answer] += 1;
    assert(answer !== previousAnswer, `연속 정답 번호 중복: ${name}의 ${answer + 1}번`);
    previousAnswer = answer;
  }
}

assert(totalQuestions === 318, `전체 영어 변형문제: 예상 318개, 실제 ${totalQuestions}개`);
assert(Math.max(...answerDistribution) - Math.min(...answerDistribution) <= 1,
  `정답 분포 불균형: ${answerDistribution.join("/")}`);

const htmlFiles = [];
const collectHtml = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) collectHtml(fullPath);
    else if (entry.name.endsWith(".html")) htmlFiles.push(fullPath);
  }
};
collectHtml(root);

const canonicals = new Map();
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  for (const match of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      failures.push(`JSON-LD 오류: ${path.relative(root, file)} (${error.message})`);
    }
  }

  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
  if (canonical) {
    assert(!canonicals.has(canonical), `중복 canonical: ${canonical}`);
    canonicals.set(canonical, file);
  }

  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1].trim();
    if (!href || href.startsWith("#") || href.startsWith("//") || /^[a-z]+:/i.test(href)) continue;
    const clean = href.split("#")[0].split("?")[0];
    if (!clean) continue;
    let target;
    if (clean === "/") target = path.join(root, "index.html");
    else if (clean.startsWith("/")) target = path.join(root, clean.slice(1));
    else target = path.resolve(path.dirname(file), clean);
    if (target.endsWith(path.sep)) target = path.join(target, "index.html");
    assert(fs.existsSync(target), `깨진 내부 링크: ${path.relative(root, file)} → ${href}`);
  }
}

if (failures.length) {
  console.error(failures.map((message) => `- ${message}`).join("\n"));
  process.exit(1);
}

console.log(`검증 완료: 영어 강의 ${lessonFiles.length}개, 변형문제 ${totalQuestions}개`);
console.log(`정답 분포: ${answerDistribution.map((count, index) => `${index + 1}번 ${count}`).join(", ")}`);
console.log(`HTML ${htmlFiles.length}개, canonical ${canonicals.size}개, 내부 링크·JSON-LD 정상`);

import fs from "node:fs";
import path from "node:path";
import { englishSourceAnalysis } from "./english-source-analysis.mjs";

export const normalizeGrammar = (grammar) => {
  if (Array.isArray(grammar)) {
    const pattern = String(grammar[0] ?? "").trim();
    const explanation = String(grammar[1] ?? "").trim();
    return { pattern, explanation, text: explanation ? `${pattern} — ${explanation}` : pattern };
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

export const classifyGrammar = (text) => {
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

export const buildGrammarCheckpoints = (root) => {
  const lessonDirectory = path.join(root, "lessons");
  const lessonFiles = fs.readdirSync(lessonDirectory).filter((name) => /^2027-suneung-english-.*\.html$/.test(name));
  const checkpoints = [];

  for (const lessonId of Object.keys(englishSourceAnalysis).sort((a, b) => Number(a) - Number(b))) {
    const sources = englishSourceAnalysis[lessonId];
    const lessonFile = lessonFiles.find((name) => name.includes(`-${lessonId.toLowerCase()}-`));
    if (!lessonFile) throw new Error(`영문법 링크용 강의 파일을 찾을 수 없음: ${lessonId}`);

    sources.forEach((source, sourceIndex) => {
      source.grammar.forEach((grammar, grammarIndex) => {
        const normalized = normalizeGrammar(grammar);
        checkpoints.push({
          categoryId: classifyGrammar(`${normalized.pattern} ${normalized.explanation}`),
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

  return checkpoints;
};

export const grammarPageHref = (categoryId) => `grammar/${categoryId}.html`;

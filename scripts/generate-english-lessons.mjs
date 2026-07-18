import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { englishPractice } from "./english-practice-data.mjs";
import { englishSourceAnalysis } from "./english-source-analysis.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "lessons");
mkdirSync(output, { recursive: true });

const lessons = [
  {
    no: "01", slug: "purpose", title: "글의 목적 파악", part: "유형편", page: 10,
    focus: "글쓴이·독자·요청 행동을 연결해 글을 쓴 실제 이유를 찾습니다.",
    intro: "안내, 요청, 사과, 항의처럼 목적이 분명한 글은 배경 설명보다 마지막에 요구하는 행동이 중요합니다. 글쓴이와 독자의 관계를 먼저 잡으면 비슷한 선택지를 빠르게 구분할 수 있습니다.",
    key: "글의 목적 = 글쓴이 + 독자 + 최종 요청 행동",
    steps: ["발신자와 수신자의 관계를 표시합니다.", "문제 상황이나 배경과 실제 요청을 분리합니다.", "요청 행동을 선택지의 동사와 비교합니다."],
    errors: ["글 앞부분의 배경 설명을 목적으로 고름", "감사·사과 표현만 보고 정서 전달을 목적으로 판단", "관련 소재는 같지만 글쓴이가 요구하지 않은 행동을 선택"],
    record: ["글쓴이는 누구인가?", "글의 독자는 누구인가?", "독자에게 요구하는 행동은 무엇인가?"],
    checks: ["목적을 ‘~하려고’ 형태로 한 문장에 썼다.", "배경과 요청을 서로 다른 색으로 표시했다.", "오답 선택지의 동사가 왜 틀렸는지 설명했다."]
  },
  {
    no: "02", slug: "emotion-change", title: "심경 변화 파악", part: "유형편", page: 16,
    focus: "사건 전후의 감정과 그 감정을 바꾼 원인을 시간 순서로 정리합니다.",
    intro: "감정 표현을 단어 하나로 찾는 문제처럼 보이지만, 실제로는 사건의 흐름을 따라 인물의 상태가 어떻게 바뀌었는지 판단하는 문제입니다. 감정어가 직접 나오지 않아도 행동과 상황에서 심경을 추론해야 합니다.",
    key: "처음 상황 → 변화 사건 → 마지막 행동과 감정",
    steps: ["주인공과 시간·장소를 먼저 정리합니다.", "감정을 바꾸는 결정적 사건에 표시합니다.", "처음과 마지막 감정의 방향을 선택지 쌍과 대조합니다."],
    errors: ["마지막 감정만 보고 처음 감정을 추측", "사건의 결과와 인물의 감정을 반대로 연결", "비슷한 감정어의 강도 차이를 무시"],
    record: ["처음 심경을 보여 주는 행동은?", "심경을 바꾼 사건은?", "마지막 심경의 근거는?"],
    checks: ["감정 변화의 원인을 사건으로 설명했다.", "처음과 마지막 근거를 각각 찾았다.", "선택지의 두 감정이 시간 순서와 맞는지 확인했다."]
  },
  {
    no: "03", slug: "implied-meaning", title: "함축적 의미 파악", part: "유형편", page: 20,
    focus: "표현의 사전적 뜻과 글 전체에서 수행하는 기능을 구분합니다.",
    intro: "밑줄 표현만 번역하면 선택지에 있는 추상적인 의미로 넘어가기 어렵습니다. 밑줄 앞뒤의 사례와 글쓴이의 중심 판단을 연결해, 그 표현이 글 전체에서 무엇을 강조하는지 찾아야 합니다.",
    key: "표면 의미 + 문맥의 대조·인과 + 글의 중심 판단",
    steps: ["밑줄 표현을 문맥 그대로 짧게 풀이합니다.", "앞뒤 문장의 논리 관계를 표시합니다.", "구체적 표현을 글 전체의 일반 원리로 바꿉니다."],
    errors: ["사전적 뜻과 비슷한 선택지만 고름", "밑줄 주변의 사례를 글 전체 주장으로 확대", "핵심 소재는 같지만 긍정·부정 방향이 다른 선택지를 허용"],
    record: ["밑줄의 표면 뜻은?", "앞뒤 문장과 어떤 관계인가?", "글 전체의 말로 바꾸면?"],
    checks: ["밑줄 없는 상태에서도 글의 주제를 설명했다.", "표면 뜻과 함축 뜻을 따로 적었다.", "선택지의 범위가 지문보다 넓지 않은지 확인했다."]
  },
  {
    no: "04", slug: "gist", title: "요지 파악", part: "유형편", page: 26,
    focus: "반복되는 판단과 결론을 한 문장으로 압축합니다.",
    intro: "요지는 글쓴이가 독자에게 전달하려는 핵심 판단입니다. 소재를 나열하는 대신, 그 소재에 대해 글쓴이가 무엇이 중요하거나 필요하다고 말하는지 찾아야 합니다.",
    key: "핵심 대상 + 글쓴이의 가장 중요한 판단",
    steps: ["반복되는 대상과 표현을 묶습니다.", "대조 뒤 문장과 결론 문장을 우선 확인합니다.", "세부 사례를 제외하고 한 문장으로 압축합니다."],
    errors: ["핵심 소재만 적고 관점을 빠뜨림", "도입부의 통념을 글쓴이의 결론으로 선택", "사례 하나를 전체 요지로 확대"],
    record: ["반복되는 핵심 대상은?", "글쓴이의 최종 판단은?", "제외해도 되는 사례는?"],
    checks: ["요지를 대상과 판단이 있는 문장으로 썼다.", "통념과 결론을 구분했다.", "선택지에 지문 밖 내용이 추가되지 않았는지 확인했다."]
  },
  {
    no: "05", slug: "claim", title: "주장 파악", part: "유형편", page: 32,
    focus: "필요·당위·제안 표현을 찾아 글쓴이가 요구하는 변화를 정리합니다.",
    intro: "주장 문제에서는 현상 설명보다 ‘그래서 무엇을 해야 하는가’가 중요합니다. 문제 상황, 원인, 대안이 이어질 때 대안 부분을 중심으로 선택지를 판단합니다.",
    key: "문제 상황 → 근거 → 해야 할 행동",
    steps: ["문제 상황과 현재 한계를 찾습니다.", "should, need, must에 해당하는 당위 내용을 표시합니다.", "행동의 주체와 대상을 선택지와 맞춥니다."],
    errors: ["문제의 원인을 주장으로 선택", "글쓴이가 제안한 방법보다 강한 의무로 확대", "행동의 주체를 개인과 사회 중 잘못 연결"],
    record: ["글이 지적한 문제는?", "행동해야 할 주체는?", "구체적으로 무엇을 해야 하는가?"],
    checks: ["주장을 ‘~해야 한다’로 정리했다.", "근거와 주장을 구분했다.", "선택지의 주체와 행동 범위를 확인했다."]
  },
  {
    no: "06", slug: "topic", title: "주제 파악", part: "유형편", page: 38,
    focus: "글이 다루는 대상과 그 대상에 대한 관점을 함께 찾습니다.",
    intro: "주제는 단순한 소재명이 아닙니다. 글 전체에서 반복되는 대상과 그 대상의 역할·변화·중요성에 관한 중심 관점을 함께 포함해야 합니다.",
    key: "무엇에 관한 글인가 + 그것에 대해 무엇을 말하는가",
    steps: ["문단마다 반복되는 핵심 명사를 찾습니다.", "그 명사에 붙는 평가와 변화 방향을 모읍니다.", "대상과 관점이 모두 있는 선택지를 고릅니다."],
    errors: ["소재만 같은 넓은 선택지를 선택", "세부 사례의 특징을 주제로 판단", "글의 관점과 반대되는 평가를 놓침"],
    record: ["핵심 대상은?", "대상에 대한 관점은?", "사례는 어떤 관점을 뒷받침하는가?"],
    checks: ["주제를 명사구로만 쓰지 않았다.", "모든 문단을 설명할 수 있는 범위인지 확인했다.", "선택지의 평가 방향을 지문과 대조했다."]
  },
  {
    no: "07", slug: "title", title: "제목 파악", part: "유형편", page: 44,
    focus: "핵심 소재와 글의 전개 방향을 동시에 담는 제목을 찾습니다.",
    intro: "제목 선택지는 비유나 의문형으로 제시될 수 있어 단어 일치만으로 판단하기 어렵습니다. 먼저 글의 주제를 평범한 문장으로 정리한 뒤, 선택지가 그 의미를 적절히 압축하는지 확인합니다.",
    key: "주제의 정확성 + 제목의 포괄 범위",
    steps: ["글의 주제를 한 문장으로 먼저 씁니다.", "각 선택지의 비유적 표현을 평범한 말로 바꿉니다.", "글 전체를 포함하면서 지나치게 넓지 않은 제목을 고릅니다."],
    errors: ["인상적인 사례를 제목으로 선택", "핵심 단어가 있다는 이유만으로 선택", "질문형 제목의 전제와 글의 결론이 다른데도 허용"],
    record: ["평범한 문장으로 쓴 주제는?", "제목의 비유를 풀어 쓰면?", "모든 문단을 포함하는가?"],
    checks: ["제목을 고르기 전에 주제를 먼저 적었다.", "비유와 실제 주장의 대응을 설명했다.", "너무 넓거나 좁은 선택지를 제거했다."]
  },
  {
    no: "08", slug: "chart", title: "도표 정보 파악", part: "유형편", page: 50,
    focus: "단위·대상·기간·증감 기준을 먼저 확인한 뒤 수치를 대조합니다.",
    intro: "도표 문제는 계산보다 비교 기준을 잘못 읽어 틀리는 경우가 많습니다. 제목, 범례, 단위와 조사 시점을 먼저 확인하면 선택지의 비교 대상을 정확하게 찾을 수 있습니다.",
    key: "도표 제목 → 단위와 범례 → 선택지별 수치 대조",
    steps: ["도표가 측정한 대상·기간·단위를 표시합니다.", "최댓값·최솟값·증감과 순위를 구분합니다.", "선택지의 두 대상을 도표에서 직접 연결해 확인합니다."],
    errors: ["비율과 실제 수를 같은 것으로 판단", "한 시점의 순위와 기간 중 증감을 혼동", "대략 비슷한 수치를 같다고 처리"],
    record: ["도표의 단위는?", "비교하는 대상과 시점은?", "선택지가 말한 관계를 수치로 쓰면?"],
    checks: ["제목과 단위를 먼저 읽었다.", "증가량과 최종값을 구분했다.", "모든 선택지를 도표의 수치와 직접 대조했다."]
  },
  {
    no: "09", slug: "factual-expository", title: "내용 일치·불일치(설명문)", part: "유형편", page: 56,
    focus: "인물·사물·장소에 관한 사실을 선택지의 조건과 문장별로 대조합니다.",
    intro: "설명문 일치 문제는 고유명사, 시기, 원인, 특징이 비슷하게 바뀌어 출제됩니다. 지문을 모두 기억하려 하지 말고 선택지의 핵심 조건을 기준으로 필요한 문장을 다시 찾습니다.",
    key: "선택지 핵심어 → 지문 위치 찾기 → 조건 하나씩 대조",
    steps: ["각 선택지에서 인물·시기·장소·행동을 표시합니다.", "동의어와 바꿔 말한 표현을 이용해 지문 위치를 찾습니다.", "한 조건이라도 다른지 확인하고 판단합니다."],
    errors: ["주체가 바뀐 것을 놓침", "시기와 사건의 선후가 바뀐 선택지를 허용", "일부 사실이 맞아 전체 선택지를 맞다고 판단"],
    record: ["선택지의 주체는?", "대응하는 지문 문장은?", "달라진 조건은 무엇인가?"],
    checks: ["선택지를 먼저 조건 단위로 나눴다.", "지문에서 같은 주체를 확인했다.", "부분 일치와 전체 일치를 구분했다."]
  },
  {
    no: "10", slug: "factual-practical", title: "내용 일치·불일치(실용문)", part: "유형편", page: 62,
    focus: "일정·비용·대상·신청 조건을 표처럼 분리해 확인합니다.",
    intro: "행사 안내, 모집문, 광고는 정보가 여러 영역에 나뉘어 있습니다. 제목부터 읽기보다 날짜, 가격, 대상, 제한 조건을 항목별로 나누면 부정 표현과 예외를 놓치지 않습니다.",
    key: "언제·어디서·누가·얼마·어떤 제한이 있는가",
    steps: ["선택지의 정보 종류를 날짜·비용·대상·방법으로 분류합니다.", "not, only, free, except 같은 제한 표현을 표시합니다.", "최종 변경 사항과 예외 조건까지 대조합니다."],
    errors: ["무료 대상과 유료 대상을 뒤바꿈", "신청 기간과 행사 날짜를 혼동", "예외나 허용되지 않는 품목을 놓침"],
    record: ["행사 날짜와 신청 기간은?", "비용과 무료 조건은?", "금지·제한·예외 조건은?"],
    checks: ["정보를 표처럼 항목별로 나눴다.", "부정 표현과 예외에 표시했다.", "날짜와 시간을 서로 바꾸지 않았는지 확인했다."]
  },
  {
    no: "11", slug: "grammar", title: "어법 정확성 파악", part: "유형편", page: 68,
    focus: "밑줄이 연결되는 주어·수식 대상·절 구조를 확인해 문법 관계를 판단합니다.",
    intro: "어법은 자연스러운 해석보다 문장 성분의 관계가 중요합니다. 밑줄의 품사를 먼저 분류하고, 그 표현이 어떤 단어 또는 절과 연결되는지 찾아야 합니다.",
    key: "밑줄의 종류 → 연결 대상 → 적용 규칙",
    steps: ["밑줄을 동사·준동사·관계사·대명사·수식어로 분류합니다.", "주어, 선행사, 의미상 주체 등 연결 대상을 찾습니다.", "수 일치·태·절의 완전성·병렬을 확인합니다."],
    errors: ["가까운 명사를 주어로 착각", "사람과 사물만 보고 관계사를 판단", "분사의 능동·수동을 명사 종류로 외워 판단"],
    record: ["밑줄의 문법적 종류는?", "무엇과 연결되는가?", "적용한 규칙은?"],
    checks: ["밑줄마다 연결 대상을 표시했다.", "문장의 본동사 개수를 확인했다.", "맞은 표현도 판단 근거를 설명했다."]
  },
  {
    no: "12", slug: "vocabulary", title: "어휘 적절성 파악", part: "유형편", page: 72,
    focus: "문맥의 긍정·부정 방향과 앞뒤 논리 관계로 어휘의 적절성을 판단합니다.",
    intro: "어휘 문제는 단어의 사전 뜻보다 문맥상 방향을 묻습니다. 밑줄 단어를 보기 전에 해당 문장이 앞 문장과 같은 방향인지 반대 방향인지 먼저 정합니다.",
    key: "논리 방향 → 필요한 의미 → 제시 어휘 대조",
    steps: ["밑줄 앞뒤의 대조·인과·예시 관계를 표시합니다.", "들어가야 할 의미의 긍정·부정 방향을 정합니다.", "단어의 문맥 의미와 자주 결합하는 표현을 확인합니다."],
    errors: ["알고 있는 대표 뜻만 기계적으로 적용", "연결어 없이 바뀌는 논리 방향을 놓침", "형태가 비슷한 단어를 뜻이 비슷하다고 판단"],
    record: ["앞뒤 문장의 관계는?", "필요한 의미 방향은?", "이 단어의 문맥 뜻은?"],
    checks: ["밑줄 단어를 가리고 필요한 뜻을 먼저 예상했다.", "대조와 같은 방향을 구분했다.", "어휘를 문맥 의미로 다시 적었다."]
  },
  {
    no: "13", slug: "blank-local", title: "빈칸 내용 추론 (1)", part: "유형편", page: 76,
    focus: "빈칸 주변의 재진술과 구체적 사례에서 가까운 근거를 찾습니다.",
    intro: "첫 번째 빈칸 유형에서는 빈칸 전후에 같은 내용을 바꿔 말한 문장이 비교적 가까이 제시되는 경우가 많습니다. 선택지를 먼저 보기보다 근거 문장을 자기 말로 바꾼 뒤 예상 답을 만듭니다.",
    key: "빈칸 주변 근거 → 재진술 → 선택지 대조",
    steps: ["빈칸이 문장에서 하는 역할을 확인합니다.", "앞뒤 두세 문장에서 같은 의미를 반복한 표현을 찾습니다.", "예상 답을 만든 뒤 선택지의 범위와 방향을 비교합니다."],
    errors: ["빈칸 바로 앞 단어만 보고 연상", "예시의 세부 내용을 답으로 선택", "핵심 단어가 같지만 논리 방향이 다른 선택지를 고름"],
    record: ["빈칸의 문장 성분은?", "가장 가까운 근거 문장은?", "근거를 바꿔 말한 예상 답은?"],
    checks: ["선택지를 보기 전에 예상 답을 적었다.", "근거 문장과 빈칸의 재진술 관계를 설명했다.", "선택지의 범위가 근거와 같은지 확인했다."]
  },
  {
    no: "14", slug: "blank-global", title: "빈칸 내용 추론 (2)", part: "유형편", page: 82,
    focus: "글 전체의 논리를 압축해 빈칸에 들어갈 중심 판단을 추론합니다.",
    intro: "두 번째 빈칸 유형은 근거가 여러 문단이나 글 전체에 흩어질 수 있습니다. 도입의 질문, 중간의 사례, 결론의 일반화가 같은 판단을 어떻게 지지하는지 연결해야 합니다.",
    key: "글의 주제 + 전개 관계 + 선택지의 추상 범위",
    steps: ["각 문단의 기능을 한두 단어로 표시합니다.", "반복되는 대상과 결론의 판단을 한 문장으로 묶습니다.", "선택지의 추상 수준과 강도가 글 전체와 맞는지 확인합니다."],
    errors: ["가까운 문장만 보고 글 전체의 반대 결론을 선택", "사례 하나를 일반 원리로 과도하게 확대", "all·only·always 같은 강한 범위 표현을 놓침"],
    record: ["문단별 역할은?", "글 전체의 중심 판단은?", "선택지의 범위와 강도는?"],
    checks: ["모든 문단을 한 흐름으로 설명했다.", "사례와 일반 원리를 구분했다.", "강한 한정 표현을 따로 확인했다."]
  },
  {
    no: "15", slug: "irrelevant-sentence", title: "흐름에 무관한 문장 찾기", part: "유형편", page: 88,
    focus: "공통 소재가 아니라 문장들이 수행하는 논리적 역할의 연결을 확인합니다.",
    intro: "무관한 문장도 주변 문장과 같은 소재를 사용하므로 단어만 보면 자연스럽게 느껴질 수 있습니다. 문단이 유지하는 중심 질문과 각 문장의 역할을 기준으로 판단해야 합니다.",
    key: "문단의 중심 질문 → 문장별 역할 → 논리 이탈 확인",
    steps: ["첫 문장과 반복 표현으로 문단의 중심을 잡습니다.", "각 문장을 주장·근거·예시·결과로 분류합니다.", "앞뒤와 연결되지 않는 새 논점이나 다른 평가 방향을 찾습니다."],
    errors: ["낯선 단어가 많은 문장을 무관하다고 판단", "같은 소재라는 이유로 다른 논점의 문장을 허용", "문장 하나를 뺀 뒤 앞뒤 연결을 재확인하지 않음"],
    record: ["문단이 답하는 중심 질문은?", "각 문장의 역할은?", "제거 후 앞뒤는 어떻게 이어지는가?"],
    checks: ["소재와 논점을 구분했다.", "의심 문장을 뺀 상태로 다시 읽었다.", "새로운 주체·시간·평가가 갑자기 등장하는지 확인했다."]
  },
  {
    no: "16", slug: "paragraph-order", title: "문단 내 글의 순서 파악", part: "유형편", page: 92,
    focus: "지시어·연결어·정보의 선후 관계를 묶어 문단 순서를 정합니다.",
    intro: "순서 문제는 문단의 주제가 아니라 연결 조건을 묻습니다. 처음 등장하는 정보와 이미 알려진 정보, 원인과 결과, 일반 설명과 사례의 순서를 확인합니다.",
    key: "주어진 글의 마지막 정보 → 첫 연결 문단 → 남은 문단 연결",
    steps: ["주어진 글의 마지막 핵심 명사와 논리 방향을 표시합니다.", "각 문단 첫 문장의 지시어와 새 정보를 확인합니다.", "확정된 두 문단을 하나의 덩어리로 보고 다음 연결을 찾습니다."],
    errors: ["첫 문장끼리만 비교하고 문단 끝을 보지 않음", "this·such·these가 가리킬 앞 정보를 확인하지 않음", "시간 순서와 설명 순서를 항상 같다고 판단"],
    record: ["주어진 글의 마지막 정보는?", "지시어가 가리키는 앞 내용은?", "원인·결과 또는 일반·사례 순서는?"],
    checks: ["첫 연결을 근거 두 개 이상으로 확정했다.", "문단의 끝과 다음 문단의 처음을 함께 봤다.", "완성된 순서로 전체를 다시 읽었다."]
  },
  {
    no: "17", slug: "sentence-insertion", title: "문단 속에 문장 넣기", part: "유형편", page: 100,
    focus: "주어진 문장이 요구하는 앞 정보와 뒤 문장의 반응을 동시에 찾습니다.",
    intro: "삽입 문장은 앞 문장의 내용을 받아 다시 설명하거나, 뒤 문장의 전환을 준비합니다. 한쪽 연결만 자연스러운 위치보다 앞뒤 두 방향이 모두 이어지는 위치를 골라야 합니다.",
    key: "주어진 문장의 지시 대상 + 앞 연결 + 뒤 연결",
    steps: ["주어진 문장의 대명사·지시어·연결어를 표시합니다.", "그 표현이 요구하는 앞 정보를 본문에서 찾습니다.", "삽입 뒤 문장이 주어진 문장에 자연스럽게 반응하는지 확인합니다."],
    errors: ["앞 문장과만 이어지는 위치를 선택", "대명사의 단수·복수와 지시 대상을 확인하지 않음", "however 같은 전환의 방향을 문장 단어만 보고 판단"],
    record: ["주어진 문장이 요구하는 앞 정보는?", "대명사의 지시 대상은?", "뒤 문장은 어떤 반응을 보이는가?"],
    checks: ["앞뒤 연결을 각각 설명했다.", "삽입 위치마다 새 정보와 기존 정보를 구분했다.", "완성된 문단을 처음부터 다시 읽었다."]
  },
  {
    no: "18", slug: "summary", title: "문단 요약", part: "유형편", page: 106,
    focus: "글의 핵심 대상을 두 개의 개념과 그 관계로 압축합니다.",
    intro: "요약문은 세부 내용을 줄이는 문제이면서 어휘 방향을 판단하는 문제입니다. 원문에서 반복되는 두 핵심 개념이 대조·인과·상호작용 중 어떤 관계인지 먼저 정리합니다.",
    key: "핵심 개념 A + 관계 + 핵심 개념 B",
    steps: ["문단의 핵심 대상 두 개를 찾습니다.", "두 대상의 관계를 대조·원인·결과·상호작용으로 정리합니다.", "요약문의 문법 형태와 어휘 방향을 함께 확인합니다."],
    errors: ["개념은 맞지만 두 대상의 관계를 반대로 선택", "원문의 약한 가능성을 강한 필연으로 바꿈", "빈칸 앞뒤 문법 형태를 확인하지 않음"],
    record: ["핵심 개념 A는?", "핵심 개념 B는?", "두 개념의 정확한 관계는?"],
    checks: ["세부 사례를 제외하고 요약했다.", "두 빈칸의 긍정·부정 방향을 표시했다.", "요약문을 원문 전체와 다시 대조했다."]
  },
  {
    no: "19", slug: "long-reading-one", title: "장문 독해 (1)", part: "유형편", page: 112,
    focus: "문단별 기능을 짧게 표시해 긴 글의 중심과 세부 문항을 분리합니다.",
    intro: "장문은 모든 문장을 같은 속도로 읽으면 앞부분의 정보를 잊기 쉽습니다. 문단마다 핵심 기능을 표시하고, 중심 내용 문항과 세부 정보 문항의 근거를 따로 찾습니다.",
    key: "문단 지도 만들기 → 문항별 근거 위치 찾기",
    steps: ["각 문단 옆에 주장·사례·반론·결론을 표시합니다.", "중심 내용 문항은 문단 지도를 이용해 먼저 판단합니다.", "세부 문항은 핵심어를 이용해 해당 문단으로 돌아갑니다."],
    errors: ["첫 문단의 소재를 글 전체 주제로 선택", "모든 문항을 기억에 의존해 연속으로 풂", "세부 문항의 범위를 다른 문단 정보와 섞음"],
    record: ["각 문단의 기능은?", "글 전체의 중심 판단은?", "문항별 근거 문단은?"],
    checks: ["문단별 요약을 10자 안팎으로 적었다.", "중심과 세부 문항의 풀이 방식을 구분했다.", "선택지 판단 후 근거 문단을 다시 확인했다."]
  },
  {
    no: "20", slug: "long-reading-two", title: "장문 독해 (2)", part: "유형편", page: 118,
    focus: "인물·사건·지시 대상을 시간 순서에 따라 추적합니다.",
    intro: "이야기형 장문은 인물의 행동과 감정, 대명사의 대상을 놓치기 쉽습니다. 인물이 바뀌는 지점과 사건의 원인·결과를 간단한 시간표로 정리해야 합니다.",
    key: "인물 구분 + 사건 순서 + 감정 변화",
    steps: ["등장인물과 대명사를 서로 연결합니다.", "사건을 발생 순서대로 짧게 번호를 붙입니다.", "인물의 행동·심경 문항을 해당 사건과 연결합니다."],
    errors: ["같은 대명사가 계속 같은 인물을 가리킨다고 판단", "회상 장면과 현재 사건의 순서를 혼동", "독자의 평가를 인물의 실제 감정으로 바꿈"],
    record: ["등장인물과 관계는?", "핵심 사건의 순서는?", "심경 변화의 원인은?"],
    checks: ["대명사의 지시 대상을 문단마다 확인했다.", "회상과 현재를 구분했다.", "행동과 감정의 근거 문장을 각각 찾았다."]
  },
  {
    no: "21", slug: "humanities", title: "철학·종교·역사·풍습·지리", part: "주제·소재편", page: 130,
    focus: "추상 개념의 정의와 구체적 사례, 시대적 맥락을 연결합니다.",
    intro: "인문 소재는 익숙하지 않은 개념어가 많지만 글의 구조는 정의, 기존 관점, 새로운 설명, 사례로 정리되는 경우가 많습니다. 용어 자체보다 개념들 사이의 관계를 표시하세요.",
    key: "개념 정의 → 관점 비교 → 사례의 역할",
    steps: ["핵심 개념을 글쓴이의 표현으로 정의합니다.", "과거와 현재 또는 두 학자의 관점을 구분합니다.", "사례가 어떤 개념을 설명하는지 연결합니다."],
    errors: ["일상적 의미를 전문 개념에 그대로 적용", "역사적 배경을 글쓴이의 주장으로 착각", "사례의 특수성을 보편 원리로 확대"],
    record: ["핵심 개념의 정의는?", "비교되는 두 관점은?", "사례가 설명하는 원리는?"],
    checks: ["개념어를 자기 말로 바꿨다.", "시대와 관점의 주체를 구분했다.", "사례와 일반화를 화살표로 연결했다."]
  },
  {
    no: "22", slug: "environment", title: "환경·자원·재활용", part: "주제·소재편", page: 134,
    focus: "환경 문제의 원인·영향·대안과 각 대안의 한계를 구분합니다.",
    intro: "환경 글은 좋은 행동과 나쁜 행동을 단순히 나누기보다 예상하지 못한 비용이나 조건을 함께 제시할 수 있습니다. 대안의 장점만 읽지 말고 적용 조건과 부작용까지 확인하세요.",
    key: "문제 → 원인 → 영향 → 대안과 한계",
    steps: ["환경 문제가 발생하는 직접 원인을 찾습니다.", "개인·기업·정부의 역할을 구분합니다.", "대안이 효과를 내는 조건과 한계를 함께 정리합니다."],
    errors: ["상관관계를 곧바로 원인으로 단정", "한 지역의 결과를 모든 상황에 일반화", "대안의 부작용이나 비용을 빠뜨림"],
    record: ["문제와 직접 원인은?", "영향을 받는 대상은?", "대안의 효과와 한계는?"],
    checks: ["문제·원인·대안을 서로 다른 칸에 적었다.", "행동 주체를 정확히 구분했다.", "대안의 조건과 예외를 확인했다."]
  },
  {
    no: "23", slug: "science", title: "물리·화학·생명과학·지구과학", part: "주제·소재편", page: 138,
    focus: "과학 현상, 작동 원리, 관찰 결과를 구분해 인과 흐름을 읽습니다.",
    intro: "과학 소재는 전문 용어가 있어도 모든 개념을 외부 지식으로 이해할 필요는 없습니다. 글이 제시한 정의와 과정만 이용해 무엇이 원인이고 어떤 변화가 결과인지 정리합니다.",
    key: "조건 → 작동 과정 → 관찰 가능한 결과",
    steps: ["새로운 용어의 정의를 지문 안에서 찾습니다.", "변화 과정을 원인과 결과의 화살표로 표시합니다.", "실험·관찰이 어떤 설명을 지지하는지 확인합니다."],
    errors: ["배경지식으로 지문에 없는 내용을 추가", "과정의 중간 단계를 건너뛰어 인과를 바꿈", "관찰 결과를 연구자의 가설과 같은 것으로 판단"],
    record: ["핵심 현상은?", "작동 과정의 단계는?", "증거가 지지하는 설명은?"],
    checks: ["전문 용어를 지문의 정의로 이해했다.", "과정을 순서대로 다시 말했다.", "가설과 관찰 결과를 구분했다."]
  },
  {
    no: "24", slug: "sports-travel", title: "스포츠·레저·취미·여행", part: "주제·소재편", page: 142,
    focus: "활동의 과정·효과·참여 동기와 변화 양상을 연결합니다.",
    intro: "활동 소재는 쉽다고 느껴 빠르게 읽다가 조건이나 인과를 놓칠 수 있습니다. 단순한 경험 소개인지, 활동이 개인이나 사회에 미치는 효과를 설명하는 글인지 먼저 구분하세요.",
    key: "활동의 특징 → 참여 과정 → 개인·사회적 효과",
    steps: ["핵심 활동과 참여 주체를 찾습니다.", "활동 전후의 변화 또는 효과를 표시합니다.", "구체적 경험이 뒷받침하는 일반 판단을 정리합니다."],
    errors: ["활동의 재미를 글 전체의 목적으로 판단", "개인의 경험을 모든 참가자의 결과로 확대", "활동 과정과 효과의 선후를 바꿈"],
    record: ["누가 어떤 활동을 하는가?", "활동 전후 무엇이 달라지는가?", "사례가 보여 주는 일반 원리는?"],
    checks: ["활동 소개와 효과 설명을 구분했다.", "변화의 주체와 범위를 확인했다.", "세부 경험을 중심 판단과 연결했다."]
  },
  {
    no: "25", slug: "education-career", title: "교육·학교·진로", part: "주제·소재편", page: 146,
    focus: "학습 방법·교육 환경·성과 사이의 조건부 관계를 정리합니다.",
    intro: "교육 글은 익숙한 주제라 자신의 경험을 지문에 넣기 쉽습니다. 어떤 학습자와 상황에서 특정 방법이 효과적인지, 글이 제시한 조건 안에서만 판단하세요.",
    key: "학습자와 환경 → 교육 방법 → 성과와 조건",
    steps: ["교육의 대상과 현재 문제를 찾습니다.", "제안된 방법이 기존 방식과 어떻게 다른지 비교합니다.", "성과가 나타나는 조건과 한계를 확인합니다."],
    errors: ["자신의 학습 경험으로 선택지를 판단", "일부 학습자에게 효과적인 방법을 모두에게 일반화", "성적 변화와 학습 동기를 같은 결과로 처리"],
    record: ["교육 대상과 문제는?", "기존 방식과 새 방식의 차이는?", "성과가 나타나는 조건은?"],
    checks: ["개인 경험과 지문 근거를 분리했다.", "방법과 결과의 연결을 표시했다.", "효과의 대상과 범위를 확인했다."]
  },
  {
    no: "26", slug: "language-art", title: "언어·문학·예술", part: "주제·소재편", page: 150,
    focus: "표현 방식·매체·해석 관점이 의미 형성에 미치는 영향을 읽습니다.",
    intro: "언어와 예술 글은 하나의 작품이나 표현을 여러 관점에서 설명할 수 있습니다. 창작자의 의도, 작품의 형식, 수용자의 해석을 서로 다른 층위로 구분해야 합니다.",
    key: "표현 형식 → 전달되는 의미 → 해석 주체의 관점",
    steps: ["누가 표현하고 누가 해석하는지 주체를 구분합니다.", "형식이나 매체가 의미에 미치는 영향을 찾습니다.", "서로 다른 해석이 성립하는 기준을 비교합니다."],
    errors: ["작품 속 화자와 실제 작가를 동일시", "수용자의 해석을 창작 의도로 바꿈", "한 매체의 특징을 모든 예술에 적용"],
    record: ["표현 주체와 해석 주체는?", "형식이 의미에 주는 효과는?", "관점에 따라 무엇이 달라지는가?"],
    checks: ["창작자·작품·수용자를 구분했다.", "형식과 내용의 관계를 설명했다.", "해석의 근거와 범위를 확인했다."]
  },
  {
    no: "27", slug: "technology-media", title: "컴퓨터·인터넷·정보·미디어·교통", part: "주제·소재편", page: 154,
    focus: "기술의 기능·편익·한계와 사용 주체의 선택을 함께 정리합니다.",
    intro: "기술 글은 발전을 찬양하거나 비판하는 한 방향으로만 전개되지 않습니다. 어떤 문제를 해결하지만 새로운 비용이나 위험을 만드는지 균형 있게 읽어야 합니다.",
    key: "기술의 기능 → 얻는 편익 → 새 한계와 대응",
    steps: ["기술이 해결하려는 원래 문제를 찾습니다.", "사용자·기업·사회가 얻는 편익을 구분합니다.", "부작용과 이를 줄이기 위한 조건을 정리합니다."],
    errors: ["글이 제시한 한계를 기술 전체의 부정으로 확대", "정보 제공과 행동 변화의 효과를 같은 것으로 판단", "개발자·사용자·규제자의 역할을 혼동"],
    record: ["기술의 핵심 기능은?", "누가 어떤 편익을 얻는가?", "한계와 대응 조건은?"],
    checks: ["장점과 한계를 같은 표에 적었다.", "행동 주체를 구분했다.", "기술 가능성과 실제 결과를 구분했다."]
  },
  {
    no: "28", slug: "psychology-relationships", title: "심리·대인 관계", part: "주제·소재편", page: 158,
    focus: "자극·인지·감정·행동의 흐름과 개인·집단의 차이를 파악합니다.",
    intro: "심리 글은 관찰된 행동을 곧바로 성격이나 의도로 설명하지 않습니다. 상황적 자극이 인식과 감정을 거쳐 행동으로 이어지는 과정을 단계별로 정리하세요.",
    key: "상황 자극 → 인식과 감정 → 행동과 관계 변화",
    steps: ["행동이 발생한 상황과 자극을 찾습니다.", "개인이 그 상황을 어떻게 해석했는지 정리합니다.", "행동의 결과가 개인과 집단에 미친 영향을 구분합니다."],
    errors: ["상관된 행동을 직접 원인으로 단정", "개인 수준의 결과를 집단 전체에 적용", "연구자의 설명과 참가자의 감정을 혼동"],
    record: ["행동을 촉발한 상황은?", "인지·감정의 중간 과정은?", "개인과 집단의 결과는?"],
    checks: ["상황과 성격 설명을 구분했다.", "행동의 중간 과정을 생략하지 않았다.", "개인·관계·집단의 범위를 확인했다."]
  },
  {
    no: "29", slug: "society-law-economy", title: "정치·경제·사회·법", part: "주제·소재편", page: 162,
    focus: "제도·행위자·유인·사회적 결과의 관계를 구분합니다.",
    intro: "사회과학 글은 개인의 선택과 제도의 규칙이 서로 영향을 주는 구조를 설명합니다. 무엇이 바람직하다는 주장과 실제 현상이 어떻게 작동한다는 설명을 구분해야 합니다.",
    key: "제도 규칙 → 행위자의 선택 → 의도한·의도하지 않은 결과",
    steps: ["제도를 만들거나 적용하는 주체를 찾습니다.", "행위자가 어떤 유인에 반응하는지 정리합니다.", "정책의 목표와 실제 결과를 비교합니다."],
    errors: ["현상 설명을 가치 판단으로 바꿈", "정책의 의도와 실제 효과를 같다고 판단", "개인·기업·정부의 역할을 뒤바꿈"],
    record: ["제도와 적용 주체는?", "행위자의 선택을 바꾼 유인은?", "목표와 실제 결과의 차이는?"],
    checks: ["사실 판단과 가치 판단을 구분했다.", "행위자별 역할을 적었다.", "의도한 결과와 부수 효과를 함께 확인했다."]
  },
  {
    no: "30", slug: "health-medicine", title: "의학·건강·영양·식품", part: "주제·소재편", page: 166,
    focus: "연구 대상·조건·결과를 확인하고 상관관계와 인과관계를 구분합니다.",
    intro: "건강 글은 일상과 가까워 기존 상식을 지문 근거처럼 사용하기 쉽습니다. 연구가 관찰한 범위와 실험 조건, 결과의 강도를 정확하게 읽고 과장된 선택지를 제거해야 합니다.",
    key: "연구 대상과 조건 → 관찰 결과 → 해석 가능한 범위",
    steps: ["연구 대상·기간·비교 집단을 표시합니다.", "측정한 결과와 연구자의 해석을 구분합니다.", "가능성·경향·인과를 표현하는 강도를 확인합니다."],
    errors: ["상관관계를 치료 효과나 직접 원인으로 확대", "특정 연령·조건의 결과를 모든 사람에게 적용", "적정량과 과다 섭취의 효과를 구분하지 않음"],
    record: ["연구 대상과 조건은?", "실제로 관찰한 결과는?", "결론을 적용할 수 있는 범위는?"],
    checks: ["배경지식보다 지문 조건을 우선했다.", "상관과 인과를 구분했다.", "may·tend·can 같은 강도 표현을 확인했다."]
  },
  {
    no: "T1", slug: "test-1", title: "Test 1", part: "테스트편", page: 172,
    focus: "첫 실전 테스트에서 문항별 시간과 오류 유형의 기준선을 만듭니다.",
    intro: "첫 테스트의 목표는 점수 확정이 아니라 현재 풀이 순서와 시간 사용을 측정하는 것입니다. 문제 옆에 시작·종료 시각을 간단히 표시하고, 맞힌 문제도 근거가 불확실하면 검토 대상으로 남깁니다.",
    key: "시간 기록 + 확신도 표시 + 오류 원인 분류",
    steps: ["평소 순서대로 풀며 문항별 시간을 기록합니다.", "확신이 낮은 문제에 표시하고 마지막에 다시 봅니다.", "채점 후 구문·논리·어휘·선택지 오류로 분류합니다."],
    errors: ["점수만 기록하고 시간 자료를 남기지 않음", "맞힌 문제를 모두 학습 완료로 처리", "시험 직후 해설을 읽어 자신의 판단 과정을 잊음"],
    record: ["가장 오래 걸린 유형은?", "확신 없이 맞힌 문제는?", "가장 많이 반복된 오류는?"],
    checks: ["실전 시간 안에 중단 없이 풀었다.", "문항별 확신도를 표시했다.", "다음 테스트 전 고칠 행동 세 가지를 정했다."]
  },
  {
    no: "T2", slug: "test-2", title: "Test 2", part: "테스트편", page: 194,
    focus: "첫 테스트에서 정한 수정 행동이 실제로 적용됐는지 확인합니다.",
    intro: "두 번째 테스트에서는 새로운 전략을 많이 추가하지 않습니다. Test 1에서 정한 행동 두세 가지를 의식적으로 적용하고, 같은 오류가 줄었는지 비교합니다.",
    key: "Test 1의 약점 행동 적용 → 변화 비교 → 남은 오류 집중",
    steps: ["시험 전에 수정 행동 세 가지를 다시 읽습니다.", "풀이 중 행동을 적용한 문항에 짧게 표시합니다.", "Test 1과 시간·정확도·오류 빈도를 비교합니다."],
    errors: ["점수 차이만 보고 전략 효과를 판단", "매 테스트마다 풀이 순서를 크게 변경", "새로운 실수를 기존 약점과 구분하지 않음"],
    record: ["적용한 수정 행동은?", "줄어든 오류와 남은 오류는?", "시간이 달라진 유형은?"],
    checks: ["Test 1과 같은 기준으로 기록했다.", "행동 적용 여부를 문항별로 확인했다.", "다음 시험에서 유지할 전략과 버릴 전략을 정했다."]
  },
  {
    no: "T3", slug: "test-3", title: "Test 3", part: "테스트편", page: 216,
    focus: "최종 풀이 순서와 검토 기준을 확정하고 반복되는 약점만 남깁니다.",
    intro: "세 번째 테스트는 새로운 방법을 시험하기보다 안정된 실전 절차를 확정하는 단계입니다. 어려운 문제에 머무르는 시간, 건너뛸 기준, 마지막 검토 순서를 실제 수능처럼 적용합니다.",
    key: "고정된 풀이 순서 + 중단 기준 + 최종 검토 절차",
    steps: ["확정한 문제 풀이 순서로 끝까지 진행합니다.", "유형별 최대 시간을 넘으면 표시 후 이동합니다.", "검토 우선순위와 반복 약점만 최종 기록합니다."],
    errors: ["한 문제에 오래 머물러 뒤 문항 시간을 잃음", "검토 때 모든 문제를 처음부터 다시 읽음", "마지막 점수만 보고 반복 약점을 정리하지 않음"],
    record: ["확정한 풀이 순서는?", "건너뛸 시간 기준은?", "시험 전 다시 볼 약점 세 가지는?"],
    checks: ["정한 순서를 시험 중 바꾸지 않았다.", "검토 대상을 미리 표시했다.", "최종 약점을 행동 문장으로 정리했다."]
  }
];

const escape = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const filename = (lesson) => `2027-suneung-english-${lesson.no.toLowerCase()}-${lesson.slug}.html`;

const renderTable = (table) => table ? `<div class="exam-table-wrap"><table class="exam-data-table"><caption>${escape(table.caption)}</caption><thead><tr>${table.headers.map((header) => `<th>${escape(header)}</th>`).join("")}</tr></thead><tbody>${table.rows.map((row) => `<tr>${row.map((cell, index) => `<${index === 0 ? "th" : "td"}>${escape(cell)}</${index === 0 ? "th" : "td"}>`).join("")}</tr>`).join("")}</tbody></table></div>` : "";

const renderVocab = (vocab) => `<div class="vocab-strip" aria-label="핵심 어휘">${vocab.map(([word, meaning]) => `<span><strong>${escape(word)}</strong>${escape(meaning)}</span>`).join("")}</div>`;

// 정답 번호가 순차적으로 반복되거나 한 번호에 편중되지 않도록 전체 문항 수에 맞춰
// 결정론적인 배열을 만듭니다. 번호별 개수 차이는 최대 1이며 인접한 번호는 겹치지 않습니다.
const totalQuestionCount = lessons.reduce((total, lesson) => {
  const practice = englishPractice[lesson.no];
  if (!practice) return total;
  return total + practice.questions.length + (practice.extraSets || []).reduce((sum, set) => sum + set.questions.length, 0);
}, 0);

const buildAnswerTargets = (total) => {
  const opening = [2, 5, 3, 1, 4, 1, 5, 3, 4, 2, 4, 2, 5, 1, 3, 5, 2, 4, 1, 3].map((number) => number - 1);
  const targets = opening.slice(0, total);
  const counts = Array(5).fill(0);
  targets.forEach((number) => { counts[number] += 1; });

  while (targets.length < total) {
    const position = targets.length;
    const previous = targets.at(-1);
    const candidates = [0, 1, 2, 3, 4]
      .filter((number) => number !== previous)
      .sort((a, b) => counts[a] - counts[b] || ((position * 7 + a * 3) % 11) - ((position * 7 + b * 3) % 11));
    const next = candidates[0];
    targets.push(next);
    counts[next] += 1;
  }

  return targets;
};

const answerTargets = buildAnswerTargets(totalQuestionCount);
let answerCursor = 0;

const renderQuestions = (lesson, questions, setIndex = 0) => questions.map((question, questionIndex) => {
  const name = `question-${lesson.no.toLowerCase()}-${setIndex + 1}-${questionIndex + 1}`;
  const targetAnswer = answerTargets[answerCursor % answerTargets.length];
  answerCursor += 1;
  const reorderedOptions = [...question.options];
  const [answerText] = reorderedOptions.splice(question.answer, 1);
  reorderedOptions.splice(targetAnswer, 0, answerText);
  const options = reorderedOptions.map((option, optionIndex) => `<label class="practice-option"><input type="radio" name="${name}" value="${optionIndex}"><span class="option-number">${optionIndex + 1}</span><span>${escape(option)}</span></label>`).join("");
  return `<section class="practice-question" data-practice-question data-correct="${targetAnswer}">
        <div class="question-heading"><span>문제 ${questionIndex + 1}</span><h3>${question.prompt}</h3></div>
        <div class="practice-options">${options}</div>
        <div class="question-actions"><button class="button primary small" type="button" data-check-answer>정답 확인</button><p class="answer-result" data-answer-result aria-live="polite">선택지를 고른 뒤 정답을 확인하세요.</p></div>
        <div class="answer-panel" data-answer-panel hidden><strong>정답 ${targetAnswer + 1}번 · ${escape(answerText)}</strong><p>${escape(question.explanation)}</p></div>
      </section>`;
}).join("");

const renderPracticeSet = (lesson, set, setIndex, setCount) => {
  const questions = renderQuestions(lesson, set.questions, setIndex);
  const table = renderTable(set.table);
  const insertSentence = set.insert ? `<div class="insert-sentence"><span>주어진 문장</span><p>${escape(set.insert)}</p></div>` : "";
  const sourceLabel = set.sourceRef && set.sourceRef !== "강별" ? `${escape(set.sourceRef)} 연계` : "강별 유형 연계";
  const heading = setCount > 1 ? `${sourceLabel} 변형문제` : "EBS 연계형 변형문제";
  return `<section class="article-section practice-set" id="practice-${lesson.no.toLowerCase()}-${setIndex + 1}"><div class="practice-set-head"><div><p class="practice-label">영어시험연구소 제작 · ${escape(set.level)} · ${sourceLabel}</p><h2>${heading}</h2><p>교재 문장을 옮기지 않고 같은 판단 원리를 적용해 새로 쓴 지문입니다. 먼저 제한 시간 안에 풀고 정답 해설을 확인하세요.</p></div><span class="question-count">${set.questions.length}문항</span></div>
        <div class="reading-passage"><div class="passage-heading"><span>PASSAGE ${setIndex + 1}</span><h3>${escape(set.title)}</h3></div>${insertSentence}${set.passage}${table}</div>
        ${renderVocab(set.vocab)}
        <div class="practice-question-list">${questions}</div>
      </section>`;
};

const renderSourceCard = (lesson, source, sourceIndex, practiceSet, setCount) => {
  const flow = source.flow.map((item, index) => `<li><span>${index + 1}</span><p>${escape(item)}</p></li>`).join("");
  const grammar = source.grammar.map(([pattern, note]) => `<tr><th><code>${escape(pattern)}</code></th><td>${escape(note)}</td></tr>`).join("");
  const vocab = source.vocab.map(([word, meaning, role]) => `<tr><th>${escape(word)}</th><td>${escape(meaning)}</td><td>${escape(role)}</td></tr>`).join("");
  const traps = source.traps.map(([number, reason]) => `<tr><th>${escape(number)}</th><td>${escape(reason)}</td></tr>`).join("");
  return `<section class="source-learning-unit" id="source-${lesson.no.toLowerCase()}-${sourceIndex + 1}">
      <article class="source-analysis-card">
        <header class="source-analysis-head"><div><p class="source-ref">교재 ${source.page}쪽 · ${escape(source.ref)} · ${escape(source.code)}</p><h2>${escape(source.ref)} 제시문 분석</h2><p>${escape(source.topic)}</p></div><span class="source-answer">원문 정답 ${escape(source.answer)}</span></header>
        <section class="analysis-block"><h3>제시문 해설</h3><p>${escape(source.summary)}</p></section>
        <section class="analysis-block"><h3>글의 전개 구조</h3><ol class="analysis-flow">${flow}</ol></section>
        <section class="analysis-block"><h3>핵심 영문법</h3><div class="table-wrap"><table class="study-table grammar-table"><tbody>${grammar}</tbody></table></div></section>
        <section class="analysis-block"><h3>필수 어휘·숙어</h3><div class="table-wrap"><table class="study-table"><thead><tr><th>표현</th><th>뜻</th><th>제시문에서의 역할</th></tr></thead><tbody>${vocab}</tbody></table></div></section>
        <section class="analysis-block"><h3>원문 문제 해제</h3><div class="solution-box"><strong>정답 ${escape(source.answer)}</strong><p>${escape(source.solution)}</p></div><div class="table-wrap trap-table"><table class="study-table"><thead><tr><th>오답</th><th>틀린 이유</th></tr></thead><tbody>${traps}</tbody></table></div></section>
        <a class="button primary" href="#practice-${lesson.no.toLowerCase()}-${sourceIndex + 1}">${escape(source.ref)} 연계 변형문제 풀기 ↓</a>
      </article>
      ${renderPracticeSet(lesson, practiceSet, sourceIndex, setCount)}
    </section>`;
};

for (const [index, lesson] of lessons.entries()) {
  const previous = lessons[index - 1];
  const next = lessons[index + 1];
  const practice = englishPractice[lesson.no];
  if (!practice) throw new Error(`Missing practice data for lesson ${lesson.no}`);
  const sources = englishSourceAnalysis[lesson.no] || [];
  const { extraSets = [], ...basePractice } = practice;
  const practiceSets = [{ ...basePractice, sourceRef: basePractice.sourceRef || (sources.length ? "Gateway" : "강별") }, ...extraSets];
  if (sources.length && sources.length !== practiceSets.length) throw new Error(`Source/practice count mismatch for lesson ${lesson.no}`);
  const questionCount = practiceSets.reduce((total, set) => total + set.questions.length, 0);
  const pageTitle = sources.length
    ? `2027 수능특강 영어 ${lesson.no} ${lesson.title} 제시문 해설·문법·변형문제`
    : `2027 수능특강 영어 ${lesson.no} ${lesson.title} 변형문제`;
  const description = `${pageTitle}: 교재 제시문 해설, 핵심 영문법·어휘, 원문 문제 해제와 자체 제작 변형문제 ${questionCount}문항을 제공합니다.`;
  const canonical = `https://englishexamlab.kr/lessons/${filename(lesson)}`;
  const stepCards = lesson.steps.map((step, i) => `<article class="route-step"><span class="step-no">${i + 1}</span><h3>${i + 1}단계</h3><p>${escape(step)}</p></article>`).join("");
  const errorRows = lesson.errors.map((error, i) => `<tr><td>${i + 1}</td><td>${escape(error)}</td><td>${escape(lesson.steps[Math.min(i, lesson.steps.length - 1)])}</td></tr>`).join("");
  const recordRows = lesson.record.map((item, i) => `<tr><td>${i + 1}</td><td>${escape(item)}</td><td class="write-space">교재 지문을 공부한 뒤 직접 작성</td></tr>`).join("");
  const checkItems = lesson.checks.map((item) => `<li>${escape(item)}</li>`).join("");
  const learningContent = sources.length
    ? `<section class="article-section source-analysis-intro"><p class="practice-label">EBS TEXT ANALYSIS</p><h2>교재 제시문 ${sources.length}개 완전 분석</h2><p>원문을 그대로 옮기지 않고 문항 번호와 쪽수를 기준으로 내용, 전개, 문법, 어휘, 정답과 오답을 분석합니다. 각 분석 다음에는 같은 판단 원리를 적용한 자체 변형문제가 이어집니다.</p><nav class="source-jump" aria-label="제시문 분석 바로가기">${sources.map((source, sourceIndex) => `<a href="#source-${lesson.no.toLowerCase()}-${sourceIndex + 1}">${escape(source.ref)}</a>`).join("")}</nav></section><div class="source-learning-units">${sources.map((source, sourceIndex) => renderSourceCard(lesson, source, sourceIndex, practiceSets[sourceIndex], practiceSets.length)).join("")}</div>`
    : practiceSets.map((set, setIndex) => renderPracticeSet(lesson, set, setIndex, practiceSets.length)).join("");
  const prevLink = previous ? `<a class="button secondary small" href="${filename(previous)}">← ${previous.no} ${escape(previous.title)}</a>` : `<a class="button secondary small" href="../2027-suneung-english.html">← 전체 목차</a>`;
  const nextLink = next ? `<a class="button primary small" href="${filename(next)}">${next.no} ${escape(next.title)} →</a>` : `<a class="button primary small" href="../2027-suneung-english.html">전체 목차로 →</a>`;

  const html = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(pageTitle)} | 영어시험연구소</title>
  <meta name="description" content="${escape(description)}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escape(pageTitle)}">
  <meta property="og:description" content="${escape(lesson.focus)}">
  <meta property="og:url" content="${canonical}">
  <link rel="icon" href="../assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="../assets/styles.css">
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: pageTitle,
    description,
    url: canonical,
    inLanguage: "ko-KR",
    educationalLevel: "고등학교·수능",
    learningResourceType: "연습문제",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    provider: { "@type": "Organization", name: "영어시험연구소", url: "https://englishexamlab.kr/" }
  })}</script>
</head>
<body>
  <a class="skip-link" href="#main">본문 바로가기</a>
  <header class="site-header"><div class="header-inner"><a class="brand" href="../index.html"><span class="brand-mark">E</span><span>영어시험연구소</span></a><button class="menu-button" type="button" data-menu-button aria-label="메뉴 열기" aria-expanded="false"><span></span></button><nav class="main-nav" data-main-nav><a href="../2027-suneung-english.html" aria-current="page">수능특강 영어</a><a href="../2027-suneung-reading.html">영어독해연습</a><a href="../2027-suneung-listening.html">영어듣기</a><a href="../study-plan.html">학습 계획</a><a href="../guides.html">학습 자료</a></nav></div></header>
  <main id="main">
    <section class="page-hero"><div class="container"><div class="breadcrumb"><a href="../index.html">홈</a><span>›</span><a href="../2027-suneung-english.html">2027 수능특강 영어</a><span>›</span><span>${lesson.no} ${escape(lesson.title)}</span></div><div class="page-title"><div><p class="section-kicker">${escape(lesson.part)} · 교재 ${lesson.page}쪽부터</p><h1>${lesson.no}<br>${escape(lesson.title)}</h1><p>${escape(lesson.focus)}</p></div><div class="title-badge"><strong>${lesson.no}</strong><span>${escape(lesson.part)}</span></div></div></div></section>
    <section class="section"><div class="container content-layout"><article class="legal lesson-article">
      ${learningContent}
      <section class="article-section"><h2>풀이 후 핵심 공략</h2><p>${escape(lesson.intro)}</p><div class="lesson-key"><span>핵심 판단식</span><strong>${escape(lesson.key)}</strong></div><div class="route-grid">${stepCards}</div></section>
      <section class="article-section"><h2>자주 나오는 오답 패턴</h2><div class="table-wrap"><table class="study-table"><thead><tr><th>번호</th><th>잘못된 판단</th><th>고칠 행동</th></tr></thead><tbody>${errorRows}</tbody></table></div></section>
      <section class="article-section"><h2>학습 완료 체크</h2><ul class="check-list">${checkItems}</ul><div class="note-box"><strong>다시 볼 기준</strong><p>세 항목 중 하나라도 설명하지 못하거나 정답 근거를 지문에서 찾지 못했다면, 다음 날 같은 지문을 다시 풀지 말고 기록표의 빈칸만 먼저 복원하세요.</p></div></section>
      <section class="article-section"><h2>자료 이용 안내</h2><p>이 페이지의 영어 지문, 문항, 선택지와 해설은 영어시험연구소가 직접 작성했습니다. 2027학년도 EBS 수능특강 영어의 강별 유형에 연계한 비공식 학습 자료이며, EBS 교재의 원문·문항·정답을 복제하지 않습니다.</p></section>
      <nav class="lesson-nav" aria-label="이전·다음 학습 페이지">${prevLink}${nextLink}</nav>
    </article><aside class="sidebar">${sources.length ? `<div class="side-card"><h2>이 페이지 자료</h2><ul><li>교재 제시문 ${sources.length}개 분석</li><li>영문법·어휘 설명</li><li>원문 정답·오답 해제</li><li>연계 변형문제 ${questionCount}문항</li></ul></div>` : ""}<div class="side-card"><h2>교재 위치</h2><ul><li>${escape(lesson.part)}</li><li>${lesson.no} ${escape(lesson.title)}</li><li>${lesson.page}쪽부터</li></ul></div><div class="side-card"><h2>바로가기</h2><p><a href="../2027-suneung-english.html">30강 전체 목차 →</a></p><p><a href="../study-plan.html">9주 학습 계획 →</a></p><p><a href="../suneung-english-wrong-answer-note.html">오답 노트 작성법 →</a></p></div></aside></div></section>
  </main>
  <footer class="site-footer"><div class="container"><div class="footer-grid"><div><p class="footer-brand">영어시험연구소</p><p>2027 수능특강 영어를 근거와 판단 순서 중심으로 공부합니다.</p></div><div><h2>교재별 가이드</h2><div class="footer-links"><a href="../2027-suneung-english.html">수능특강 영어</a><a href="../2027-suneung-reading.html">영어독해연습</a><a href="../2027-suneung-listening.html">영어듣기</a></div></div><div><h2>운영 안내</h2><div class="footer-links"><a href="../about.html">사이트 소개</a><a href="../privacy.html">개인정보처리방침</a><a href="../copyright.html">저작권·출처 안내</a><a href="../contact.html">문의</a></div></div></div><div class="footer-bottom">© <span data-current-year>2026</span> 영어시험연구소.</div></div></footer>
  <script src="../assets/app.js" defer></script>
</body>
</html>`;

  writeFileSync(join(output, filename(lesson)), `${html}\n`, "utf8");
}

console.log(`Generated ${lessons.length} lesson pages in ${output}`);

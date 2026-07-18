export const grammarDetails = {
  "sentence-patterns": {
    intro: [
      "문장이 길어져도 중심 구조는 주어와 서술어에서 시작합니다. 전치사구·관계절·분사구처럼 명사를 꾸미는 부분을 잠시 괄호로 묶고, 누가 무엇을 하는지부터 확인하면 1형식부터 5형식까지의 뼈대가 보입니다.",
      "수능 어법에서는 형식의 이름을 외우는 것보다 동사 뒤에 반드시 필요한 성분이 무엇인지 판단하는 일이 중요합니다. 특히 목적어 뒤의 말이 목적어의 상태나 행동을 설명한다면 목적격 보어이며, 그 형태는 동사의 결합 방식과 능동·수동 관계에 따라 달라집니다.",
    ],
    sequence: ["수식어를 괄호로 묶고 주어와 본동사를 찾습니다.", "본동사 뒤에 목적어와 보어가 필요한지 확인합니다.", "목적어와 목적격 보어 사이의 의미 관계로 보어 형태를 결정합니다."],
    units: [
      {
        title: "문장의 필수 성분과 수식어 구분",
        rule: "S + V를 먼저 확정한 뒤 O·C를 찾는다",
        explanations: [
          "주어·동사·목적어·보어는 동사가 요구하는 필수 성분이고, 시간·장소·방법을 덧붙이는 부사어는 대개 생략할 수 있습니다. 긴 전치사구 안의 명사를 주어로 잘못 잡으면 수일치와 태 판단도 연달아 틀리게 됩니다.",
          "보어는 주어나 목적어와 같은 대상을 가리키거나 그 상태를 설명합니다. 따라서 be, become, remain 뒤의 말은 주격 보어인지 확인하고, find, make, consider 뒤의 말은 목적격 보어인지 확인해야 합니다.",
        ],
        examples: [
          ["The results from the two surveys remain remarkably similar.", "두 조사의 결과는 놀라울 만큼 비슷한 상태로 남아 있다.", "주어는 The results, 동사는 remain, similar는 주어의 상태를 설명하는 주격 보어입니다."],
          ["The committee found the proposal unrealistic.", "위원회는 그 제안이 비현실적이라고 판단했다.", "the proposal은 목적어이고 unrealistic은 목적어의 상태를 설명하는 목적격 보어입니다."],
        ],
        checkpoint: "동사를 지운 뒤 남은 명사만 보지 말고, 동사가 어떤 성분을 요구하는지부터 판단합니다.",
      },
      {
        title: "5형식 목적격 보어의 형태",
        rule: "V + O + to V / 원형 / 분사 / 형용사",
        explanations: [
          "allow·encourage·require는 보통 목적어 뒤에 to부정사를, make·let·have는 사역 의미에서 동사원형을 취합니다. 지각동사는 동작 전체를 보면 원형, 진행 장면을 강조하면 현재분사를 쓸 수 있습니다.",
          "목적어가 보어의 행동을 직접 하면 현재분사나 능동형을, 그 행동을 받으면 과거분사를 선택합니다. 형태만 암기하지 말고 ‘목적어가 하는가, 당하는가’를 우리말로 먼저 확인하는 편이 안전합니다.",
        ],
        examples: [
          ["The new rule requires every applicant to submit identification.", "새 규정은 모든 지원자가 신분증을 제출하도록 요구한다.", "every applicant가 submit의 의미상 주어이므로 require + O + to V 구조입니다."],
          ["We found the entrance blocked by fallen branches.", "우리는 입구가 쓰러진 나뭇가지에 막혀 있는 것을 발견했다.", "입구는 막는 주체가 아니라 막힌 대상이므로 과거분사 blocked가 목적격 보어입니다."],
        ],
        checkpoint: "목적어와 보어 사이에 ‘목적어가 보어하다’라는 작은 문장을 만들어 능동·수동을 확인합니다.",
      },
      {
        title: "형식주어·형식목적어 it",
        rule: "It + V ... + to V/that절",
        explanations: [
          "긴 to부정사구나 that절을 문장 뒤로 보내고 앞자리를 it으로 채우면 it은 구체적인 대상을 가리키지 않습니다. It is important to verify the source에서 실제 판단 대상은 to verify 이하입니다.",
          "find·make·consider 뒤에서도 it을 형식목적어로 두고 목적격 보어 다음에 진목적어를 놓을 수 있습니다. 이때 it을 앞 문장의 사물로 해석하면 문장 성분 관계가 깨집니다.",
        ],
        examples: [
          ["It is unlikely that the two changes occurred by chance.", "두 변화가 우연히 일어났을 가능성은 낮다.", "that절이 실제 주어이고 it은 문장 균형을 위한 형식주어입니다."],
          ["The new index makes it easier to locate older records.", "새 색인은 오래된 기록을 더 쉽게 찾게 해 준다.", "it은 형식목적어, easier는 목적격 보어, to locate 이하는 실제 목적어 내용입니다."],
        ],
        checkpoint: "it을 ‘그것’으로 번역했을 때 어색하고 뒤에 to부정사·that절이 남는다면 형식 요소인지 확인합니다.",
      },
    ],
  },
  "tense-modals-conditionals": {
    intro: [
      "시제는 단순히 동사의 과거형을 찾는 문제가 아니라 사건의 기준 시점과 선후 관계를 표시하는 체계입니다. 현재·과거·미래라는 기준과 완료·진행이라는 관점을 나누어 보아야 합니다.",
      "조동사는 화자의 확신, 가능성, 의무, 추측을 더하며 가정법에서는 사실과의 거리를 표시합니다. 조건절과 주절을 따로 보지 말고 두 절의 동사 형태가 같은 시간 관계를 만드는지 함께 확인합니다.",
    ],
    sequence: ["시간 부사와 문맥에서 기준 시점을 찾습니다.", "두 사건이 있으면 어느 사건이 먼저인지 표시합니다.", "조동사가 나타내는 사실성·가능성·의무의 정도를 문맥과 연결합니다."],
    units: [
      {
        title: "기준 시점과 완료 시제",
        rule: "have p.p. / had p.p.는 기준 시점 이전을 본다",
        explanations: [
          "현재완료는 과거에 시작된 일이 현재까지 이어지거나 현재 결과와 관련됨을 나타냅니다. 명확히 끝난 과거 시점을 나타내는 yesterday, in 2024 등과는 보통 단순과거를 씁니다.",
          "과거완료는 과거의 두 사건 중 더 먼저 일어난 일을 표시합니다. 과거 문장에 had p.p.가 보인다고 무조건 정답으로 고르지 말고, 비교할 다른 과거 사건이 실제로 있는지 확인합니다.",
        ],
        examples: [
          ["Researchers have monitored the river since 2018.", "연구자들은 2018년부터 그 강을 관찰해 왔다.", "since가 시작점을 제시하고 관찰이 현재까지 이어지므로 현재완료가 적절합니다."],
          ["By the time the rescue team arrived, the storm had weakened.", "구조대가 도착했을 때에는 폭풍이 이미 약해진 뒤였다.", "폭풍이 약해진 일이 구조대의 과거 도착보다 앞서므로 과거완료를 씁니다."],
        ],
        checkpoint: "완료형을 보면 ‘어느 시점까지 완료되었는가’를 묻고 기준 시점을 문장에 표시합니다.",
      },
      {
        title: "조동사의 의미와 형태",
        rule: "조동사 + 동사원형 / 조동사 + have p.p.",
        explanations: [
          "may·might·could는 가능성, must는 강한 추론이나 의무, should는 당위나 예상처럼 문맥에 따라 의미가 달라집니다. 조동사 뒤에는 주어의 수와 관계없이 동사원형이 옵니다.",
          "조동사 + have p.p.는 과거에 대한 추측·후회·비판을 나타냅니다. must have p.p.는 ‘~했음이 틀림없다’, should have p.p.는 ‘~했어야 했다’처럼 해석 방향이 달라집니다.",
        ],
        examples: [
          ["The sudden decline may reflect a temporary change in demand.", "갑작스러운 감소는 수요의 일시적 변화를 반영할 수 있다.", "may는 확정이 아닌 가능성을 나타내고 뒤에 동사원형 reflect가 옵니다."],
          ["The earlier estimate must have overlooked several variables.", "이전 추정치는 몇몇 변수를 빠뜨렸음이 틀림없다.", "현재의 판단에서 과거의 누락을 강하게 추론하므로 must have p.p.를 씁니다."],
        ],
        checkpoint: "조동사를 해석한 뒤 동작 시점이 현재인지 과거인지 확인해 원형과 have p.p.를 구분합니다.",
      },
      {
        title: "가정법과 당위의 that절",
        rule: "If + 과거/과거완료, would + V/have p.p.",
        explanations: [
          "가정법 과거는 현재 사실과 거리가 있는 상황, 가정법 과거완료는 이미 지나간 사실의 반대를 나타냅니다. 동사 형태는 한 단계 과거로 물러나지만 해석상의 시간은 각각 현재와 과거입니다.",
          "suggest·demand·require·insist처럼 제안·요구·명령을 나타내는 동사 뒤 that절에서는 (should) + 동사원형을 씁니다. 주어가 단수여도 -s를 붙이지 않으며, 수동이면 be p.p.가 됩니다.",
        ],
        examples: [
          ["If the evidence were clearer, the conclusion would be more convincing.", "증거가 더 명확하다면 결론은 더 설득력이 있을 것이다.", "현재 증거가 충분히 명확하지 않다는 반대 가정입니다."],
          ["The panel recommended that the data be reviewed independently.", "위원회는 자료가 독립적으로 검토되어야 한다고 권고했다.", "당위의 that절이면서 자료가 검토되는 대상이므로 be reviewed를 씁니다."],
        ],
        checkpoint: "if절만 보지 말고 주절의 would 형태와 실제 사실의 시간까지 한 세트로 대조합니다.",
      },
    ],
  },
  "voice-agreement": {
    intro: [
      "태는 주어와 동작의 관계를, 수일치는 주어와 서술어의 형태 관계를 보여 줍니다. 두 항목 모두 문장 표면의 가까운 명사보다 실제 주어와 본동사를 정확히 찾는 일이 먼저입니다.",
      "과거분사는 수동태뿐 아니라 명사를 꾸미거나 완료형을 만드는 데도 쓰입니다. be동사의 존재, 문장에 필요한 본동사, 주어가 행위자인지 대상인지까지 함께 확인해야 합니다.",
    ],
    sequence: ["전치사구와 수식절을 제외하고 핵심 주어를 찾습니다.", "주어가 동작을 하는지 받는지 판단해 태를 정합니다.", "핵심 주어의 수와 본동사의 형태를 일치시킵니다."],
    units: [
      {
        title: "능동태와 수동태의 선택",
        rule: "행위자이면 V, 대상이면 be + p.p.",
        explanations: [
          "수동태는 목적어를 취하는 타동사에서 주어가 행위의 대상일 때 만듭니다. 문맥상 행위자가 중요하지 않거나 결과 상태를 강조할 때 자주 사용됩니다.",
          "자동사는 목적어가 없으므로 일반적으로 수동태를 만들 수 없습니다. occur, happen, remain 같은 동사를 be occurred처럼 쓰는 오류를 주의해야 합니다.",
        ],
        examples: [
          ["The samples were divided into three groups.", "표본들은 세 집단으로 나뉘었다.", "표본이 나누는 주체가 아니라 나뉘는 대상이므로 수동태입니다."],
          ["A similar pattern occurred in the second experiment.", "비슷한 양상이 두 번째 실험에서 발생했다.", "occur는 자동사이므로 수동태가 아니라 능동 형태로 씁니다."],
        ],
        checkpoint: "동사 뒤에 목적어를 둘 수 있는지와 주어가 행위의 대상인지 두 가지를 모두 확인합니다.",
      },
      {
        title: "긴 주어의 수일치",
        rule: "A of B의 동사는 A에 일치",
        explanations: [
          "주어와 동사 사이에 of구, 관계절, 분사구가 끼어들면 가까운 명사에 동사를 잘못 맞추기 쉽습니다. 수식어를 괄호로 지우고 핵심 명사만 남겨 단수·복수를 판단합니다.",
          "동명사구·to부정사구·명사절이 주어이면 그 내용 전체를 하나의 행위나 사실로 보아 보통 단수 동사를 씁니다. 절 안에 복수 명사가 있더라도 주절 동사의 수에는 영향을 주지 않습니다.",
        ],
        examples: [
          ["The quality of the final images depends on the original data.", "최종 이미지의 품질은 원자료에 달려 있다.", "of 뒤 images가 아니라 핵심 주어 quality가 단수이므로 depends가 옵니다."],
          ["Comparing unrelated averages often produces misleading results.", "관련 없는 평균들을 비교하는 것은 종종 오해를 낳는 결과를 만든다.", "동명사구 전체가 하나의 행위이므로 단수 동사 produces를 씁니다."],
        ],
        checkpoint: "동사 바로 앞 명사가 아니라 문장 맨 앞에서 시작된 주어 덩어리의 중심어에 밑줄을 긋습니다.",
      },
      {
        title: "특수한 수일치 표현",
        rule: "each/every, the number of, a number of를 구분",
        explanations: [
          "each·every·either·neither가 단수 명사를 한정하면 단수 동사를 씁니다. 반면 a number of + 복수명사는 ‘많은’이라는 뜻으로 복수 동사, the number of + 복수명사는 ‘수’가 중심이므로 단수 동사를 취합니다.",
          "상관접속사 either A or B, neither A nor B에서는 보통 동사에 가까운 주어 B에 수를 맞춥니다. 관계대명사절의 동사는 선행사의 수를 확인합니다.",
        ],
        examples: [
          ["The number of reported errors has fallen steadily.", "보고된 오류의 수는 꾸준히 감소했다.", "중심어 number가 단수이므로 has가 적절합니다."],
          ["Neither the instructor nor the students were prepared for the delay.", "강사도 학생들도 지연에 대비하지 못했다.", "동사에 가까운 복수 주어 the students에 맞추어 were를 씁니다."],
        ],
        checkpoint: "수량 표현을 하나의 덩어리로 익히고, 중심 의미가 개별 대상인지 그 수 자체인지 구분합니다.",
      },
    ],
  },
  infinitives: {
    intro: [
      "to부정사는 동사의 의미를 유지하면서 명사·형용사·부사 역할을 합니다. 같은 to V 형태라도 문장에서 차지하는 자리와 앞말과의 관계에 따라 해석이 달라집니다.",
      "수능에서는 용법 이름 자체보다 to부정사가 어떤 성분을 보충하는지, 행동의 주체가 누구인지, 능동·수동·완료 중 어떤 형태가 필요한지를 묻는 경우가 많습니다.",
    ],
    sequence: ["to부정사 덩어리가 문장에서 차지하는 자리를 찾습니다.", "앞 명사나 본동사와 어떤 의미 관계인지 확인합니다.", "행동 주체와 시간 관계에 따라 능동·수동·완료형을 고릅니다."],
    units: [
      {
        title: "명사적·형용사적·부사적 용법",
        rule: "자리와 수식 관계로 용법을 판단",
        explanations: [
          "주어·목적어·보어 자리에 놓이면 명사적 용법, 앞 명사의 내용이나 용도를 설명하면 형용사적 용법입니다. 행동의 목적·결과·원인·판단 근거를 덧붙이면 부사적 용법입니다.",
          "‘~하기 위해’로 자연스럽게 해석된다는 이유만으로 목적 용법을 확정하지 말고, 앞에 설명해야 할 명사가 있는지 먼저 확인해야 합니다. 문장 속 자리와 수식 대상을 함께 보아야 용법을 안정적으로 구분할 수 있습니다.",
        ],
        examples: [
          ["The team developed a method to detect minor changes.", "팀은 작은 변화를 감지할 방법을 개발했다.", "to detect는 앞 명사 method의 구체적인 용도를 설명합니다."],
          ["The team repeated the test to confirm the result.", "팀은 결과를 확인하기 위해 실험을 반복했다.", "to confirm은 실험을 반복한 목적을 나타내는 부사적 용법입니다."],
        ],
        checkpoint: "to부정사를 지웠을 때 앞 명사의 내용이 비는지, 본동작의 목적 정보만 사라지는지 비교합니다.",
      },
      {
        title: "의미상 주어·수동형·완료형",
        rule: "for/of + O + to V, to be p.p., to have p.p.",
        explanations: [
          "to부정사의 행동 주체가 문장 주어와 다르면 for + 목적격으로 표시할 수 있습니다. 사람의 성질을 평가하는 kind, careless 같은 형용사 뒤에서는 of + 목적격을 씁니다.",
          "to부정사의 주체가 동작을 받으면 to be p.p., 본동사보다 앞선 일을 나타내면 to have p.p.를 사용합니다. 앞선 일이면서 수동이면 to have been p.p. 형태가 됩니다.",
        ],
        examples: [
          ["It is essential for every device to be tested twice.", "모든 장치가 두 번 시험되는 것이 필수적이다.", "every device가 test의 대상이므로 for O to be p.p. 구조입니다."],
          ["The species appears to have adapted to colder water.", "그 종은 더 차가운 물에 적응한 것으로 보인다.", "적응이 현재의 appears보다 먼저 이루어졌으므로 완료부정사를 씁니다."],
        ],
        checkpoint: "to부정사의 행동이 본동사와 동시에 일어나는지 먼저 일어났는지 시간선을 그립니다.",
      },
      {
        title: "to부정사와 전치사 to",
        rule: "to + 동사원형 / 전치사 to + 명사·V-ing",
        explanations: [
          "decide to, hope to의 to는 부정사 표지이므로 동사원형이 옵니다. 그러나 look forward to, be used to, contribute to의 to는 전치사이므로 명사나 동명사가 뒤따릅니다.",
          "used to V는 과거의 습관, be used to V-ing는 ‘~하는 데 익숙하다’, be used to V는 ‘~하는 데 사용되다’이므로 형태와 의미를 함께 구별해야 합니다.",
        ],
        examples: [
          ["Residents objected to closing the local clinic.", "주민들은 지역 진료소를 폐쇄하는 데 반대했다.", "object to의 to는 전치사이므로 동명사 closing이 옵니다."],
          ["The sensor is used to measure changes in pressure.", "그 센서는 압력 변화를 측정하는 데 사용된다.", "be used to V는 용도를 나타내며 여기의 to는 부정사 표지입니다."],
        ],
        checkpoint: "to 앞의 표현을 통째로 확인하고, to를 방향을 나타내는 전치사로 바꿔 보아 자연스러운지 판단합니다.",
      },
    ],
  },
  gerunds: {
    intro: [
      "동명사는 -ing 형태로 동작을 나타내면서 문장에서는 명사 역할을 합니다. 명사 자리에서 쓰이지만 목적어·보어를 취하고 부사의 수식을 받을 수 있다는 점에서 동사의 성질도 유지합니다.",
      "시험에서는 동명사가 들어갈 자리, 특정 동사와 전치사 뒤의 형태, 의미상 주어와 완료·수동 형태를 함께 확인합니다.",
    ],
    sequence: ["-ing 덩어리가 주어·목적어·전치사의 목적어인지 확인합니다.", "앞 동사나 표현이 동명사를 요구하는지 점검합니다.", "동명사의 주체·시간·태를 문장 주어와 비교합니다."],
    units: [
      {
        title: "명사 자리에서 동사 성질 유지",
        rule: "V-ing + 목적어/부사 = 하나의 명사 덩어리",
        explanations: [
          "동명사구는 문장의 주어·목적어·보어가 될 수 있습니다. 주어로 쓰인 동명사구는 내부에 복수 명사가 있어도 행위 전체를 하나로 보므로 보통 단수 동사를 취합니다.",
          "동명사는 명사 역할을 하지만 동사에서 왔기 때문에 뒤에 목적어를 직접 취할 수 있고 형용사가 아니라 부사의 수식을 받습니다. 따라서 -ing 한 단어만 보지 말고 뒤에 이어지는 목적어와 수식어까지 범위를 묶어야 합니다.",
        ],
        examples: [
          ["Recording each change accurately requires patience.", "각 변화를 정확하게 기록하는 데에는 인내가 필요하다.", "Recording이 목적어 each change와 부사 accurately를 거느린 주어이며 단수 동사 requires를 취합니다."],
          ["The main challenge is maintaining public trust.", "주요 과제는 대중의 신뢰를 유지하는 것이다.", "maintaining public trust가 보어 자리에서 주어의 내용을 설명합니다."],
        ],
        checkpoint: "-ing 뒤의 목적어까지 한 덩어리로 묶고 그 전체가 문장에서 어느 자리를 차지하는지 확인합니다.",
      },
      {
        title: "동명사를 목적어로 취하는 동사",
        rule: "avoid·consider·involve·admit + V-ing",
        explanations: [
          "avoid, enjoy, consider, admit, deny, postpone, involve 등은 동명사를 목적어로 취합니다. 반대로 decide, hope, plan은 주로 to부정사를 취하므로 동사와 목적어 형태를 한 묶음으로 익힙니다.",
          "remember·forget·stop·try는 동명사와 to부정사를 모두 취하지만 의미가 달라질 수 있습니다. stop V-ing는 하던 일을 멈추는 것, stop to V는 다른 목적의 행동을 하려고 멈추는 것입니다.",
        ],
        examples: [
          ["The report avoids treating correlation as proof of cause.", "그 보고서는 상관관계를 인과의 증거로 취급하는 일을 피한다.", "avoid의 목적어로 동명사 treating이 옵니다."],
          ["The technician stopped to check the loose cable.", "기술자는 느슨한 케이블을 확인하려고 하던 일을 멈췄다.", "확인하는 것이 멈춘 목적이므로 to부정사를 씁니다."],
        ],
        checkpoint: "동명사와 부정사를 모두 취하는 동사는 형태 변화가 의미 변화로 이어지는지 반드시 해석합니다.",
      },
      {
        title: "전치사 뒤 동명사와 의미상 주어",
        rule: "전치사 + V-ing / 소유격 + V-ing",
        explanations: [
          "전치사 뒤에는 동사원형이나 완전한 절을 바로 놓을 수 없으므로 행동을 나타내려면 동명사를 씁니다. by V-ing는 수단, without V-ing는 결여, instead of V-ing는 대안을 나타냅니다.",
          "동명사의 행동 주체를 따로 밝힐 때는 원칙적으로 소유격을 씁니다. 수동 관계는 being p.p., 본동사보다 앞선 일은 having p.p.로 나타낼 수 있습니다.",
        ],
        examples: [
          ["The team improved the estimate by excluding incomplete records.", "팀은 불완전한 기록을 제외함으로써 추정치를 개선했다.", "전치사 by 뒤에서 수단을 나타내므로 동명사 excluding을 씁니다."],
          ["We were surprised at the device's having survived the fall.", "우리는 그 장치가 추락을 견뎌 냈다는 사실에 놀랐다.", "the device's는 동명사의 의미상 주어이고 having survived는 본동사보다 앞선 일입니다."],
        ],
        checkpoint: "전치사 뒤에 행동을 넣을 때 우선 V-ing를 생각하고, 행동 주체가 문장 주어와 같은지 확인합니다.",
      },
    ],
  },
  participles: {
    intro: [
      "분사는 동사의 의미를 유지하면서 형용사나 부사처럼 기능합니다. 현재분사와 과거분사의 선택은 시간보다 꾸밈받는 대상과 동작 사이의 능동·수동 관계에 달려 있습니다.",
      "분사구문은 부사절의 접속사와 주어, be동사가 생략된 압축 구조입니다. 생략된 내용을 복원해 주절과의 시간·이유·조건·양보 관계를 확인해야 합니다.",
    ],
    sequence: ["분사가 꾸미는 명사 또는 의미상 주어를 찾습니다.", "그 대상이 행동을 하는지 받는지 판단합니다.", "분사구문이면 접속사와 주어를 복원해 주절과의 논리를 확인합니다."],
    units: [
      {
        title: "현재분사와 과거분사의 수식",
        rule: "능동·진행은 V-ing, 수동·완료는 p.p.",
        explanations: [
          "명사가 분사의 행동을 직접 하면 현재분사, 그 행동을 받으면 과거분사를 씁니다. 사람의 감정을 나타내는 interested·confused도 사람이 감정을 일으키는지 느끼는지 관계로 판단합니다.",
          "분사구가 길면 보통 명사 뒤에 놓이며, 이미 본동사가 있는 문장에서는 분사가 또 하나의 본동사처럼 쓰이지 않도록 형태를 확인합니다. 분사 앞뒤의 쉼표만으로 기능을 정하지 말고 꾸밈받는 명사를 찾아야 합니다.",
        ],
        examples: [
          ["Students attending the workshop received a field guide.", "워크숍에 참석한 학생들은 현장 안내서를 받았다.", "학생들이 직접 attend하므로 현재분사 attending이 students를 꾸밉니다."],
          ["The records collected during the survey remain confidential.", "조사 중 수집된 기록은 기밀로 유지된다.", "기록은 수집되는 대상이므로 과거분사 collected를 씁니다."],
        ],
        checkpoint: "명사와 분사 사이에 ‘명사가 분사한다/분사된다’를 넣어 더 자연스러운 쪽을 고릅니다.",
      },
      {
        title: "분사구문의 복원과 해석",
        rule: "(접속사 + 주어 + be) 분사, 주절",
        explanations: [
          "분사구문의 의미상 주어는 원칙적으로 주절의 주어와 같습니다. 시간·이유·조건·양보 가운데 어떤 접속사가 생략되었는지는 두 절의 내용 관계로 판단합니다.",
          "수동 부사절에서 접속사와 주어, be동사가 생략되면 과거분사만 남습니다. 필요하면 When compared, Although limited처럼 접속사를 남겨 의미를 분명히 할 수 있습니다.",
        ],
        examples: [
          ["Viewed from a distance, the two designs appear identical.", "멀리서 보면 두 설계는 동일해 보인다.", "When the two designs are viewed가 축약되었고 주어가 보이는 대상이므로 과거분사입니다."],
          ["Recognizing the risk, the manager delayed the launch.", "위험을 인식했기 때문에 관리자는 출시를 미뤘다.", "the manager가 위험을 인식한 주체이며 문맥상 이유 관계를 나타냅니다."],
        ],
        checkpoint: "분사구문 앞에 적절한 접속사와 주절 주어를 넣어 완전한 절로 복원합니다.",
      },
      {
        title: "완료·독립 분사구문",
        rule: "having p.p. / 명사 + 분사",
        explanations: [
          "분사구문의 일이 주절보다 먼저 완료되었음을 분명히 하려면 having p.p.를 씁니다. 수동 완료는 having been p.p.가 되지만 문맥상 분명하면 having been이 생략되기도 합니다.",
          "분사구문의 의미상 주어가 주절 주어와 다르면 그 주어를 생략하지 않고 명사 + 분사 형태로 남깁니다. 이를 독립 분사구문이라고 합니다. 두 주어를 억지로 같게 해석하면 문장의 논리적 행위자가 뒤바뀝니다.",
        ],
        examples: [
          ["Having reviewed all the entries, the judges announced the result.", "모든 출품작을 검토한 뒤 심사위원들은 결과를 발표했다.", "검토가 발표보다 먼저 완료되었으므로 having p.p.를 씁니다."],
          ["The weather improving, the team resumed its fieldwork.", "날씨가 좋아져서 팀은 현장 조사를 재개했다.", "날씨와 팀이 서로 다른 주어이므로 the weather를 남긴 독립 분사구문입니다."],
        ],
        checkpoint: "주절보다 앞선 일인지, 두 부분의 주어가 같은지 두 항목을 차례로 확인합니다.",
      },
    ],
  },
  relatives: {
    intro: [
      "관계사는 앞의 명사인 선행사를 뒤의 절과 연결하고, 동시에 관계절 안에서 하나의 문장 성분 역할을 합니다. 선행사만 보고 고르기보다 관계절 내부에 무엇이 비어 있는지 확인해야 합니다.",
      "관계대명사 뒤에는 필수 성분이 빠진 불완전한 절, 관계부사 뒤에는 주어·목적어가 갖추어진 완전한 절이 옵니다. 전치사와의 결합, what과 that의 차이도 이 원리에서 출발합니다.",
    ],
    sequence: ["관계절 앞의 선행사가 사람·사물·장소·시간 중 무엇인지 봅니다.", "관계절 안에서 주어·목적어·부사 중 무엇이 비었는지 찾습니다.", "전치사 위치와 제한적·계속적 용법을 문맥에 맞게 결정합니다."],
    units: [
      {
        title: "관계대명사와 불완전한 절",
        rule: "who·which·that + 주어/목적어가 빈 절",
        explanations: [
          "who는 사람, which는 사물, that은 사람과 사물을 선행사로 취할 수 있습니다. 관계사가 절 안의 주어이면 생략할 수 없고, 목적어이면 제한적 용법에서 생략할 수 있습니다.",
          "whose는 소유 관계를 나타내며 뒤에 관사 없이 명사가 옵니다. 관계대명사를 쓴 뒤 목적어 대명사를 다시 넣으면 같은 성분이 중복됩니다. 관계사 자체가 절 안에서 맡는 역할을 별도의 대명사로 다시 표현하지 않습니다.",
        ],
        examples: [
          ["The analyst who identified the error revised the chart.", "오류를 찾아낸 분석가가 도표를 수정했다.", "who가 관계절 안에서 identified의 주어이므로 생략할 수 없습니다."],
          ["The method that the team selected requires little equipment.", "팀이 선택한 방법은 장비가 거의 필요하지 않다.", "that은 selected의 목적어이며 관계절에 별도의 it을 쓰지 않습니다."],
        ],
        checkpoint: "관계사를 빈칸으로 바꾼 뒤 관계절에 주어와 목적어가 모두 있는지 확인합니다.",
      },
      {
        title: "관계부사와 전치사 + which",
        rule: "where/when/why + 완전절 = 전치사 + which",
        explanations: [
          "장소·시간·이유를 나타내는 선행사 뒤에서 관계절의 필수 성분이 모두 갖추어져 있고 부사 정보만 비어 있으면 where·when·why를 씁니다.",
          "관계부사는 문맥에 맞는 전치사 + which로 바꿀 수 있습니다. 전치사가 관계대명사 앞으로 이동하면 that을 쓸 수 없고 관계대명사를 생략할 수도 없습니다.",
        ],
        examples: [
          ["The laboratory where the samples were stored has been renovated.", "표본이 보관되었던 실험실은 개조되었다.", "the samples were stored는 성분이 완전하고 장소 정보만 필요하므로 where를 씁니다."],
          ["The conditions under which the species survives are rare.", "그 종이 생존하는 조건은 드물다.", "survive under the conditions의 전치사가 which 앞으로 이동한 구조입니다."],
        ],
        checkpoint: "선행사가 장소 명사여도 관계절에 목적어가 비면 where가 아니라 which/that을 써야 합니다.",
      },
      {
        title: "what·that·계속적 which",
        rule: "what은 선행사 포함, that은 선행사 필요",
        explanations: [
          "what은 the thing(s) that의 뜻을 포함하므로 앞에 별도 선행사를 두지 않습니다. 반면 관계대명사 that은 반드시 앞의 선행사를 받아 관계절을 형용사처럼 만듭니다.",
          "쉼표 뒤의 계속적 which는 앞 명사뿐 아니라 앞 절 전체의 상황을 받아 추가 평가를 덧붙일 수 있습니다. 계속적 용법에서는 that을 쓰지 않습니다.",
        ],
        examples: [
          ["What the survey reveals is a gradual shift in priorities.", "그 조사가 보여 주는 것은 우선순위의 점진적 변화이다.", "what 자체가 reveals의 목적어이자 명사절의 연결어이며 별도 선행사가 없습니다."],
          ["The final test was postponed, which gave the team more time.", "최종 시험이 연기되었고, 그 일은 팀에 더 많은 시간을 주었다.", "which가 앞 절 전체의 연기 상황을 받아 추가 결과를 설명합니다."],
        ],
        checkpoint: "what 앞에 선행사가 이미 있는지, 쉼표 뒤 which가 명사와 앞 절 중 무엇을 받는지 확인합니다.",
      },
    ],
  },
  "noun-clauses": {
    intro: [
      "명사절은 주어·목적어·보어·동격 자리에 놓이는 절입니다. 연결어의 뜻뿐 아니라 뒤 절이 완전한지, 의문 의미가 있는지, 문장 전체에서 어떤 명사 자리를 차지하는지 확인해야 합니다.",
      "that·whether·의문사절은 서로 바꿀 수 있는 표현이 아닙니다. 진술, 선택 여부, 구체적인 의문이라는 정보 차이를 문맥에서 판단합니다.",
    ],
    sequence: ["절 전체가 문장에서 주어·목적어·보어 중 어느 자리인지 찾습니다.", "연결어 뒤 절의 완전성과 의문 의미를 확인합니다.", "간접의문문 어순과 동격절 여부를 점검합니다."],
    units: [
      {
        title: "that절과 whether절",
        rule: "that = 사실 진술, whether = 여부 선택",
        explanations: [
          "접속사 that은 의미상 성분 역할을 하지 않고 뒤에 완전한 절을 이끌어 하나의 사실·생각·주장을 나타냅니다. 목적어 that은 종종 생략되지만 주어절에서는 보통 유지합니다.",
          "whether는 ‘~인지 아닌지’를 나타내며 or not과 결합할 수 있습니다. 전치사 뒤, to부정사 앞, 문장 주어 자리에서는 일반적으로 if보다 whether가 적절합니다.",
        ],
        examples: [
          ["The evidence suggests that the two variables are related.", "그 증거는 두 변수가 관련되어 있음을 시사한다.", "that 뒤에 완전한 진술이 오고 전체가 suggests의 목적어입니다."],
          ["The debate concerns whether the policy can work in practice.", "논쟁은 그 정책이 실제로 작동할 수 있는지에 관한 것이다.", "whether절 전체가 동사 concerns의 목적어로 쓰여 정책의 실현 가능 여부를 나타냅니다."],
        ],
        checkpoint: "yes/no로 답할 수 있는 불확실한 선택이면 whether, 하나의 사실 내용이면 that을 우선 검토합니다.",
      },
      {
        title: "간접의문문의 어순",
        rule: "의문사 + 주어 + 동사",
        explanations: [
          "의문문이 더 큰 문장의 일부가 되면 의문사 뒤에는 평서문 어순을 씁니다. do·does·did를 따로 넣지 않으며 조동사가 있으면 주어 뒤에 둡니다.",
          "의문사가 간접의문문 안의 주어이면 의문사 자체 다음에 바로 동사가 옵니다. who caused the change에서 who가 주어이므로 별도 주어를 추가하지 않습니다.",
        ],
        examples: [
          ["The researchers examined why the response rate had fallen.", "연구자들은 응답률이 왜 떨어졌는지 조사했다.", "why 뒤에 주어 the response rate와 동사 had fallen이 평서문 순서로 옵니다."],
          ["It remains unclear what caused the sudden increase.", "무엇이 갑작스러운 증가를 일으켰는지는 여전히 불분명하다.", "what이 caused의 주어이므로 what 뒤에 곧바로 동사가 옵니다."],
        ],
        checkpoint: "직접의문문으로 바꾸었다가 다시 문장 안에 넣을 때 도치와 do를 제거합니다.",
      },
      {
        title: "동격 that절과 관계절",
        rule: "추상명사 + that + 완전절은 내용 설명",
        explanations: [
          "fact, idea, evidence, claim, assumption 같은 추상명사 뒤의 that절은 그 명사의 구체적 내용을 밝힐 수 있습니다. 이때 that은 절 안에서 주어나 목적어 역할을 하지 않습니다.",
          "관계대명사 that절은 앞 명사를 꾸미면서 절 안의 빈 성분을 채웁니다. 따라서 that 뒤 절이 완전하면 동격 가능성, 불완전하면 관계절 가능성을 먼저 봅니다.",
        ],
        examples: [
          ["The claim that the treatment works for everyone lacks support.", "그 치료가 모두에게 효과가 있다는 주장은 근거가 부족하다.", "that 뒤 절이 완전하고 claim의 내용을 밝히므로 동격절입니다."],
          ["The claim that the newspaper published was later corrected.", "신문이 보도한 주장은 나중에 정정되었다.", "published의 목적어가 비어 있고 that이 그 자리를 채우므로 관계절입니다."],
        ],
        checkpoint: "같은 ‘명사 + that’이라도 that 뒤에서 빠진 문장 성분이 있는지 반드시 검사합니다.",
      },
    ],
  },
  "adverb-clauses": {
    intro: [
      "부사절은 주절에 시간·이유·조건·양보·대조·목적·결과 정보를 더합니다. 연결어 하나가 글의 논리 방향을 바꾸므로 단어 뜻만 외우기보다 두 절의 관계를 판단해야 합니다.",
      "접속사 뒤에는 주어와 동사를 갖춘 절이, 전치사 뒤에는 명사구가 옵니다. 형태가 비슷한 although/despite, because/because of를 구분하는 것이 어법 문제의 기본입니다.",
    ],
    sequence: ["두 절의 내용이 같은 방향인지 반대 방향인지 판단합니다.", "연결어 뒤가 완전한 절인지 명사구인지 확인합니다.", "시간·조건절의 시제와 축약 가능성을 점검합니다."],
    units: [
      {
        title: "논리 관계를 만드는 접속사",
        rule: "이유·조건·양보·대조를 문맥으로 구분",
        explanations: [
          "because·since는 이유, if·unless는 조건, although·even though는 양보, while·whereas는 대조를 나타냅니다. while은 시간과 대조의 두 의미가 있으므로 두 절의 동시성보다 내용의 대비가 중심인지 확인합니다.",
          "unless는 if ... not의 뜻이므로 절 안에 불필요한 not을 다시 넣지 않습니다. 양보절은 사실을 인정한 뒤 예상과 다른 주절을 제시합니다.",
        ],
        examples: [
          ["Although the sample was small, the pattern was remarkably consistent.", "표본은 작았지만 그 양상은 놀라울 만큼 일관되었다.", "작은 표본에서 예상되는 한계를 인정한 뒤 반대 결과를 제시하는 양보 관계입니다."],
          ["While the first method measures speed, the second focuses on accuracy.", "첫 번째 방법은 속도를 측정하는 반면 두 번째 방법은 정확성에 초점을 둔다.", "두 방법의 초점을 대조하므로 while은 ‘~하는 동안’이 아니라 ‘반면에’입니다."],
        ],
        checkpoint: "연결어를 가리고 두 절 사이에 ‘그래서’와 ‘그런데’ 중 어느 말이 자연스러운지 먼저 판단합니다.",
      },
      {
        title: "접속사와 전치사 표현",
        rule: "because/although + 절, because of/despite + 명사구",
        explanations: [
          "because와 although는 접속사이므로 주어와 동사가 있는 절을 이끕니다. because of와 despite·in spite of는 전치사 표현이므로 명사나 동명사가 뒤에 옵니다.",
          "during은 전치사라 기간 명사가 필요하고, while은 접속사라 절이 필요합니다. 의미가 비슷해도 뒤 구조가 다르므로 빈칸 뒤부터 확인하는 전략이 효과적입니다.",
        ],
        examples: [
          ["The event was delayed because the main speaker arrived late.", "주요 연사가 늦게 도착했기 때문에 행사가 지연되었다.", "because 뒤에 주어와 동사가 갖추어진 절이 옵니다."],
          ["Despite arriving late, the speaker completed the presentation.", "늦게 도착했음에도 연사는 발표를 마쳤다.", "despite는 전치사이므로 동명사구 arriving late가 목적어입니다."],
        ],
        checkpoint: "연결어 뜻을 고르기 전에 뒤에 동사가 있는지 확인해 접속사와 전치사의 후보를 나눕니다.",
      },
      {
        title: "시간·조건절의 시제와 축약",
        rule: "미래 의미라도 시간·조건절은 현재형",
        explanations: [
          "when, before, after, until, if가 이끄는 시간·조건 부사절에서는 미래를 나타내더라도 보통 will 대신 현재형을 씁니다. 주절에서 미래 시제를 표시합니다.",
          "부사절의 주어가 주절 주어와 같고 be동사가 있으면 ‘접속사 + 분사/형용사’로 축약할 수 있습니다. 능동·수동 관계에 따라 현재분사와 과거분사를 구분합니다.",
        ],
        examples: [
          ["The system will send an alert when the temperature rises.", "온도가 올라가면 시스템이 경고를 보낼 것이다.", "미래 상황이지만 when절에서는 현재형 rises를 씁니다."],
          ["When exposed to moisture, the material expands rapidly.", "습기에 노출되면 그 물질은 빠르게 팽창한다.", "When the material is exposed에서 주어와 be동사가 생략된 수동 축약입니다."],
        ],
        checkpoint: "when·if절이 명사절인지 부사절인지 먼저 구분한 뒤 미래 시제 규칙을 적용합니다.",
      },
    ],
  },
  "comparison-degree": {
    intro: [
      "비교 표현은 두 대상의 정도를 같음·차이·최고 수준으로 나타냅니다. 형용사 형태만 고르는 것이 아니라 비교 대상이 같은 종류인지, 비교 기준이 문장 안에서 대칭을 이루는지 확인해야 합니다.",
      "too·enough·so·such 같은 정도 표현도 부정사와 절을 연결하며 수능 지문에서 자주 쓰입니다. 표면적인 긍정·부정이 실제 의미와 다른 경우를 주의합니다.",
    ],
    sequence: ["무엇과 무엇을 비교하는지 두 대상을 표시합니다.", "원급·비교급·최상급을 요구하는 표지를 찾습니다.", "생략된 반복 요소와 정도 표현의 실제 의미를 복원합니다."],
    units: [
      {
        title: "원급·비교급·최상급의 기본",
        rule: "as ... as / 비교급 than / the 최상급",
        explanations: [
          "as + 원급 + as는 같은 정도, 비교급 + than은 상대적 차이, the + 최상급은 일정 범위에서 가장 높은 정도를 나타냅니다. 부정 원급 비교 not as ... as는 ‘~만큼 …하지 않다’입니다.",
          "비교급을 강조할 때는 much, far, even, still, a lot을 쓸 수 있지만 very는 일반적으로 쓰지 않습니다. 최상급 앞의 비교 범위도 확인합니다.",
        ],
        examples: [
          ["The revised measure is far more reliable than the original one.", "수정된 측정법은 원래 것보다 훨씬 더 신뢰할 만하다.", "far가 비교급 more reliable을 강조하고 one이 반복되는 measure를 대신합니다."],
          ["This was the least costly option available to the city.", "이것은 그 도시가 이용할 수 있는 가장 비용이 적은 선택지였다.", "the least가 가능한 선택지 범위에서 가장 낮은 비용을 나타냅니다."],
        ],
        checkpoint: "than·as 뒤에서 앞의 명사를 대신하는 one/ones나 대동사가 생략되었는지 확인합니다.",
      },
      {
        title: "비례·배수·최상 의미 표현",
        rule: "the 비교급, the 비교급 / 배수 + as ... as",
        explanations: [
          "the + 비교급, the + 비교급은 한 변화에 따라 다른 변화도 달라지는 비례 관계를 나타냅니다. 첫 절과 둘째 절의 어순이 모두 ‘the 비교급 + 주어 + 동사’인지 확인합니다.",
          "twice as ... as는 두 배의 정도, 비교급 than any other + 단수명사는 사실상 최상급 의미를 만듭니다. 비교 대상에 자기 자신이 포함되지 않도록 other를 사용합니다.",
        ],
        examples: [
          ["The more precisely the question is defined, the easier the data are to interpret.", "질문이 더 정확히 규정될수록 자료를 해석하기가 더 쉽다.", "정의의 정확성과 해석의 용이성이 함께 변하는 비례 구조입니다."],
          ["The new panel produces twice as much energy as the older model.", "새 패널은 구형 모델보다 두 배 많은 에너지를 생산한다.", "배수사 twice가 as much + 불가산명사 energy의 정도를 표시합니다."],
        ],
        checkpoint: "비교급 문장에서 각 비교 대상이 같은 집단과 같은 측정 기준에 놓이는지 확인합니다.",
      },
      {
        title: "too·enough와 비교 대상의 대칭",
        rule: "too ... to V / 형용사 + enough to V",
        explanations: [
          "too + 형용사 + to V는 보통 ‘너무 …해서 ~할 수 없다’는 부정 결과를 나타냅니다. 형용사 + enough + to V는 행동하기에 충분한 정도를 뜻합니다.",
          "than 뒤의 대상을 비교할 때는 주어끼리, 소유 대상끼리 논리적으로 맞춰야 합니다. 필요하면 that/those를 사용해 앞 명사의 반복을 피하면서 비교 대상을 분명히 합니다.",
        ],
        examples: [
          ["The distinction is too subtle for casual observers to notice.", "그 차이는 너무 미묘해서 일반 관찰자가 알아차리기 어렵다.", "for casual observers는 notice의 의미상 주어이며 too ... to가 불가능한 정도를 나타냅니다."],
          ["The rainfall in the eastern region exceeds that in the west.", "동부 지역의 강수량은 서부 지역의 강수량을 능가한다.", "지역과 지역이 아니라 강수량끼리 비교하도록 that이 rainfall을 대신합니다."],
        ],
        checkpoint: "비교문을 ‘A의 X와 B의 X’ 형태로 바꾸어 두 대상의 종류가 같은지 확인합니다.",
      },
    ],
  },
  "parallel-special": {
    intro: [
      "병렬은 같은 기능을 하는 요소를 같은 문법 형태로 연결하는 원리입니다. 특수구문은 정보의 초점이나 반복을 조절하기 위해 기본 어순을 바꾸거나 일부 요소를 생략합니다.",
      "수능 어법에서는 and·or·but의 양옆만 보는 데서 그치지 않고, 각 요소가 문장 속에서 동일한 성분과 의미 관계를 가지는지 확인해야 합니다.",
    ],
    sequence: ["등위접속사와 상관접속사의 연결 대상을 찾습니다.", "연결된 요소의 품사·형태·문장 기능을 나란히 비교합니다.", "도치·생략·강조에서는 기본 어순과 생략된 말을 복원합니다."],
    units: [
      {
        title: "병렬 구조와 상관접속사",
        rule: "A, B, and C / both A and B / either A or B",
        explanations: [
          "병렬된 요소는 명사끼리, to부정사끼리, 동명사끼리처럼 형태와 기능이 맞아야 합니다. 첫 번째 to가 공통으로 쓰였는지 각 항목에 반복되었는지는 문장 전체에서 일관되면 됩니다.",
          "not only A but also B, either A or B에서는 A와 B의 문법 형태뿐 아니라 의미 범위도 대칭을 이루어야 합니다. 동사의 수일치는 가까운 주어를 따르는 경우가 많습니다.",
        ],
        examples: [
          ["The project aims to reduce waste, improve access, and lower costs.", "그 사업은 폐기물을 줄이고 접근성을 개선하며 비용을 낮추는 것을 목표로 한다.", "세 동사원형이 공통된 to 뒤에서 aims의 내용을 병렬로 이룹니다."],
          ["The change affected not only local businesses but also nearby residents.", "그 변화는 지역 사업체뿐 아니라 인근 주민에게도 영향을 미쳤다.", "두 명사구가 affected의 목적어로 같은 기능을 합니다."],
        ],
        checkpoint: "접속사로 연결된 각 요소에 앞의 공통 부분을 되붙여 완전한 구조가 되는지 확인합니다.",
      },
      {
        title: "대조·생략·대동사",
        rule: "not A but B / 대동사 do·so / 공통 요소 생략",
        explanations: [
          "not A but B는 A를 부정하고 B를 실제 정보로 강조합니다. 해석할 때 두 요소를 모두 긍정하거나 단순 나열로 처리하지 않습니다. 정답 선택지에서도 핵심 주장이 B에 놓인다는 점을 반영해야 합니다.",
          "반복을 피하기 위해 동사구는 do, 명사는 one/ones, 앞 절의 내용은 so로 대신할 수 있습니다. 생략된 요소를 복원했을 때 시제와 수가 앞말에 맞는지 확인합니다.",
        ],
        examples: [
          ["The difference reflects not a change in ability but a change in strategy.", "그 차이는 능력의 변화가 아니라 전략의 변화를 반영한다.", "부정되는 정보와 강조되는 정보가 같은 명사구 형태로 대조됩니다."],
          ["The second group responded more quickly than the first did.", "두 번째 집단은 첫 번째 집단보다 더 빠르게 반응했다.", "did는 반복되는 responded를 대신해 비교 대상을 분명히 합니다."],
        ],
        checkpoint: "대동사와 생략을 만나면 앞에서 어떤 단어 덩어리를 대신하는지 그대로 써 봅니다.",
      },
      {
        title: "도치와 강조 구문",
        rule: "부정어 + 조동사 + S + V / It is ... that",
        explanations: [
          "never, rarely, little, only then, not until 같은 부정·제한 표현이 문두에 오면 조동사와 주어가 도치됩니다. 일반동사 문장은 do·does·did를 사용합니다.",
          "It is/was + 강조어구 + that은 주어·목적어·부사어에 초점을 줄 수 있습니다. 강조 부분을 빼고 that절과 결합했을 때 기본 문장이 성립하는지 확인합니다.",
        ],
        examples: [
          ["Only after the second trial did the pattern become clear.", "두 번째 실험 뒤에야 그 양상이 분명해졌다.", "제한 부사구 Only after ...가 문두에 와서 did와 주어가 도치되었습니다."],
          ["It was the missing record that changed the final estimate.", "최종 추정치를 바꾼 것은 바로 누락된 기록이었다.", "the missing record를 강조하며 기본 문장은 The missing record changed the final estimate입니다."],
        ],
        checkpoint: "도치문을 평서문 어순으로, 강조문을 기본 문장으로 되돌려 문장 성분을 확인합니다.",
      },
    ],
  },
  "prepositions-expressions": {
    intro: [
      "전치사와 관용 결합은 단어 하나의 뜻보다 뒤에 어떤 형태가 오는지까지 함께 익혀야 합니다. 이 영역에는 전치사구뿐 아니라 대명사 지시, 한정사, 존재 구문처럼 다른 영역에서 놓치기 쉬운 표현도 모았습니다.",
      "문맥에서 전치사구는 시간·장소·수단·원인·근거 관계를 만들고, 대명사는 앞의 명사나 상황을 이어 줍니다. 연결 대상을 정확히 찾는 것이 해석과 어법 판단의 핵심입니다.",
    ],
    sequence: ["전치사 뒤의 목적어 범위와 형태를 묶어 봅니다.", "동사·형용사와 결합하는 전치사를 한 덩어리로 확인합니다.", "대명사·한정사·there가 가리키거나 소개하는 명사를 찾습니다."],
    units: [
      {
        title: "전치사의 목적어와 의미 관계",
        rule: "전치사 + 명사·대명사·V-ing",
        explanations: [
          "전치사 뒤에는 명사 성격의 요소가 옵니다. by는 수단·행위자, with는 도구·동반, despite는 양보, without은 결여처럼 문맥에 따라 관계를 만듭니다.",
          "전치사구가 길어도 그 안의 명사는 주절의 주어나 목적어가 아닐 수 있습니다. 수일치와 본동사 판단에서는 전치사구 전체를 먼저 괄호로 묶습니다. 전치사의 목적어가 끝나는 지점까지 정확히 표시하면 문장 뼈대가 선명해집니다.",
        ],
        examples: [
          ["The team reduced uncertainty by repeating the measurement.", "팀은 측정을 반복함으로써 불확실성을 줄였다.", "by 뒤의 동명사구가 불확실성을 줄인 수단을 나타냅니다."],
          ["Despite the limited sample, the result deserves attention.", "제한된 표본에도 불구하고 그 결과는 주목할 가치가 있다.", "despite는 명사구를 목적어로 취해 양보 관계를 만듭니다."],
        ],
        checkpoint: "전치사부터 그 목적어 끝까지 괄호로 묶고 문장의 핵심 성분과 분리합니다.",
      },
      {
        title: "동사·형용사와 전치사의 결합",
        rule: "provide A with B / refer to / be responsible for",
        explanations: [
          "전치사는 앞 동사나 형용사의 의미를 완성하기도 합니다. provide A with B, prevent A from V-ing, distinguish A from B처럼 목적어 배열까지 함께 기억해야 합니다.",
          "같은 동사라도 전치사에 따라 의미가 달라질 수 있습니다. account for는 ‘설명하다·차지하다’, result from은 원인, result in은 결과를 나타냅니다.",
        ],
        examples: [
          ["The database provides users with access to historical records.", "그 데이터베이스는 사용자에게 과거 기록에 대한 접근권을 제공한다.", "users가 제공받는 대상 A, access가 제공되는 내용 B입니다."],
          ["Several factors may account for the difference between the groups.", "여러 요인이 집단 사이의 차이를 설명할 수 있다.", "account for가 한 덩어리로 ‘~을 설명하다’라는 뜻을 만듭니다."],
        ],
        checkpoint: "동사만 암기하지 말고 목적어와 전치사의 위치를 포함한 짧은 구조로 기록합니다.",
      },
      {
        title: "대명사·한정사·존재 구문",
        rule: "it·they·those의 선행사 / there + be + 명사",
        explanations: [
          "대명사는 수와 의미 범위가 선행사와 맞아야 합니다. 비교에서 that/those는 앞 명사의 반복을 피하고, one/ones는 같은 종류의 다른 대상을 가리킵니다.",
          "there be 구문에서 there는 장소 부사가 아니라 새 정보의 존재를 소개하는 형식 요소입니다. 실제 주어는 be동사 뒤의 명사이므로 원칙적으로 그 명사의 수에 동사를 맞춥니다.",
        ],
        examples: [
          ["The values reported in winter differ from those recorded in summer.", "겨울에 보고된 수치는 여름에 기록된 수치와 다르다.", "those가 복수 명사 values를 대신해 같은 종류의 대상을 비교합니다."],
          ["There are several reasons to question the initial estimate.", "초기 추정치에 의문을 제기할 몇 가지 이유가 있다.", "실제 주어 several reasons가 복수이므로 are를 씁니다."],
        ],
        checkpoint: "대명사에는 화살표로 선행사를 연결하고, there be에서는 be 뒤 명사에 주어 표시를 합니다.",
      },
    ],
  },
};

const q = (prompt, options, answer, explanation) => ({ prompt, options, answer, explanation });

export const grammarCategories = [
  {
    id: "sentence-patterns",
    title: "문장 성분과 5형식",
    label: "STRUCTURE",
    description: "긴 문장도 주어·동사·목적어·보어의 뼈대를 먼저 찾으면 해석 방향이 흔들리지 않습니다. 특히 목적격 보어가 to부정사·동사원형·형용사로 달라지는 동사를 구분합니다.",
    patterns: [
      ["S + V + O + to V", "encourage, require, cause, allow처럼 목적어의 행동을 이어 주는 구조"],
      ["S + V + O + 동사원형", "make, let, have 등 사역동사 뒤에서 목적어가 하는 행동을 표현"],
      ["S + V + O + 분사/형용사", "지각·판단 동사 뒤에서 목적어의 동작이나 상태를 보충"],
      ["It + be + 형용사 + to V", "it은 형식주어, 뒤의 to부정사가 실제 판단 대상"],
    ],
    examples: [
      ["The coach encouraged Mina to revise her opening paragraph.", "코치는 미나가 첫 문단을 고쳐 쓰도록 권했다."],
      ["The quiet room made the instructions easier to follow.", "조용한 방은 지시 사항을 더 쉽게 따를 수 있게 했다."],
    ],
    traps: ["to부정사 전체를 목적어로 오해하지 말고 그 앞 명사가 실제 행동 주체인지 확인합니다.", "형식주어 it을 앞 명사의 대명사로 해석하지 않습니다."],
    questions: [
      q("다음 문장의 구조 설명으로 가장 적절한 것은?<br><em>The guide allowed the visitors to enter the archive.</em>", ["the visitors는 enter의 목적어일 뿐 의미상 주어가 아니다.", "to enter는 archive를 꾸미는 형용사적 용법이다.", "the visitors가 enter의 의미상 주어인 5형식 문장이다.", "allowed 뒤에는 목적어 없이 부사절이 이어진다.", "archive가 allowed의 목적격 보어이다."], 2, "allow + 목적어 + to부정사에서 목적어 the visitors는 enter의 의미상 주어이다."),
      q("다음 중 형식주어 it이 쓰인 문장은?", ["It is difficult to compare the two records fairly.", "I found it underneath the damaged wooden desk after class.", "The device lost its cover, so I replaced it.", "It moved slowly across the night sky.", "When I opened the box, it was empty."], 0, "to compare 이하가 실제 주어이고 문두의 it은 형식주어이다.")
    ],
  },
  {
    id: "tense-modals-conditionals",
    title: "시제·조동사·가정법",
    label: "VERB SYSTEM",
    description: "시간의 선후, 사실 가능성, 반대 가정을 동사의 형태로 구분합니다. 조건절의 시제와 주절의 조동사를 한 묶음으로 확인해야 합니다.",
    patterns: [
      ["If + 과거, would + V", "현재 사실과 다른 가정"],
      ["If + had p.p., would have p.p.", "과거 사실과 다른 가정"],
      ["may/might/could + V", "가능성·추측·완곡한 판단"],
      ["should + V / should 생략", "제안·요구·필요를 나타내는 that절"],
    ],
    examples: [
      ["If the map were clearer, fewer hikers would miss the turn.", "지도가 더 명확하다면 길을 놓치는 등산객이 더 적을 텐데."],
      ["If the team had tested the battery, the device would not have failed.", "팀이 배터리를 시험했다면 장치가 고장 나지 않았을 것이다."],
    ],
    traps: ["조건절의 과거형을 단순한 과거 사건으로 바로 해석하지 말고 주절의 would와 연결합니다.", "제안·요구 동사 뒤 that절의 동사원형은 주어가 3인칭 단수여도 -s를 붙이지 않습니다."],
    questions: [
      q("빈칸에 들어갈 형태로 가장 적절한 것은?<br><em>If the sensor had been placed higher, it ______ the signal more accurately.</em>", ["detects", "will detect", "would detect", "will have been detecting", "would have detected"], 4, "과거 사실과 반대되는 가정이므로 주절은 would have p.p.를 쓴다."),
      q("다음 중 제안·요구를 나타내는 that절의 형태가 적절한 것은?", ["The editor suggested that the title was shortened yesterday.", "The editor suggested that the title be shortened.", "The editor suggested the title to shorten itself.", "The editor suggested that shortening the title yesterday.", "The editor suggested that the title has shorten."], 1, "suggest 뒤 당위적 that절에서는 (should) be shortened처럼 동사원형 수동태를 쓴다.")
    ],
  },
  {
    id: "voice-agreement",
    title: "태와 수일치",
    label: "VOICE & AGREEMENT",
    description: "주어가 행동을 하는지 받는지, 핵심 주어가 단수인지 복수인지를 먼저 판단합니다. 긴 수식어를 걷어 내고 본동사를 찾는 훈련이 중요합니다.",
    patterns: [
      ["be + p.p.", "주어가 행위의 대상인 수동태"],
      ["조동사 + be + p.p.", "가능·필요·예측과 수동 관계의 결합"],
      ["동명사구/명사절 + 단수동사", "하나의 행위나 내용을 주어로 볼 때 단수 취급"],
      ["A of B + 동사", "전치사구 B가 아니라 핵심 명사 A에 동사를 일치"],
    ],
    examples: [
      ["The final samples were stored in a dry cabinet.", "최종 표본들은 건조한 보관함에 보관되었다."],
      ["Comparing several sources requires patience.", "여러 자료를 비교하는 일에는 인내가 필요하다."],
    ],
    traps: ["과거분사를 무조건 수동태로 보지 말고 앞에 be동사가 있는지 확인합니다.", "주어와 동사 사이의 복수 명사에 끌려 수일치를 잘못 판단하지 않습니다."],
    questions: [
      q("빈칸에 들어갈 말로 가장 적절한 것은?<br><em>The effect of the new safety rules ______ already visible.</em>", ["are", "were", "have been", "is", "being"], 3, "핵심 주어는 단수인 The effect이므로 단수 동사 is가 필요하다."),
      q("다음 중 수동 관계가 올바르게 표현된 문장은?", ["The records stored in a climate-controlled room last year.", "The records were stored in a climate-controlled room.", "The records were store in a climate-controlled room.", "The records storing by the museum staff.", "The records has been storing safely."], 1, "복수 주어 records에 맞춘 were와 과거분사 stored가 수동태를 이룬다.")
    ],
  },
  {
    id: "infinitives",
    title: "to부정사",
    label: "INFINITIVE",
    description: "to부정사가 문장에서 명사·형용사·부사 중 어떤 역할을 하는지 구분합니다. 해석은 ‘~하는 것’, ‘~할’, ‘~하기 위해/해서’ 가운데 문맥에 맞게 정합니다.",
    patterns: [
      ["to V + 동사", "문장 주어 역할: To compare the data takes time."],
      ["명사 + to V", "앞 명사의 내용·용도·기회를 설명"],
      ["동사 + to V", "decide, choose, agree, hope 등의 목적어"],
      ["too/enough + 형용사 + to V", "행동이 불가능하거나 가능한 정도"],
    ],
    examples: [
      ["The committee agreed to publish the revised schedule.", "위원회는 수정된 일정을 공개하기로 합의했다."],
      ["We need a reliable method to measure the change.", "우리는 그 변화를 측정할 신뢰할 만한 방법이 필요하다."],
    ],
    traps: ["전치사 to 뒤에는 동명사가 오므로 to부정사와 형태를 구별합니다.", "목적을 나타내는 to부정사를 앞 명사를 꾸미는 용법으로 오해하지 않도록 수식 관계를 확인합니다."],
    questions: [
      q("밑줄 친 to measure와 용법이 같은 것은?<br><em>The team opened the window <u>to measure</u> air quality.</em>", ["She was pleased to hear the result.", "To admit the error required courage.", "We found a quiet place to record the interview.", "The box was too heavy to lift.", "He left early to avoid traffic."], 4, "창문을 연 목적을 나타내는 부사적 용법이며, 교통 체증을 피하기 위한 목적의 to avoid와 같다."),
      q("다음 중 전치사 to 뒤의 형태가 올바른 것은?", ["The students are accustomed to checking every source.", "The students decided to checking every source before submission.", "The students hoped to verified every source.", "The students wanted to careful review.", "The students agreed to reviewed every source."], 0, "be accustomed to에서 to는 전치사이므로 동명사 checking이 온다.")
    ],
  },
  {
    id: "gerunds",
    title: "동명사",
    label: "GERUND",
    description: "동명사는 동사의 성질을 유지하면서 명사 역할을 합니다. 목적어를 취하거나 부사의 수식을 받을 수 있지만, 문장에서는 주어·목적어·전치사의 목적어 자리에 놓입니다.",
    patterns: [
      ["V-ing + 단수동사", "동명사구 전체가 하나의 행동을 가리키는 주어"],
      ["동사 + V-ing", "consider, avoid, enjoy, involve 등 뒤의 목적어"],
      ["전치사 + V-ing", "by, without, instead of, prior to 등의 목적어"],
      ["의미상 주어 + V-ing", "동명사 행동의 주체를 소유격·목적격으로 표시"],
    ],
    examples: [
      ["Checking the source prevents careless repetition of a rumor.", "출처를 확인하는 것은 소문을 부주의하게 반복하는 일을 막는다."],
      ["The group improved the plan by testing it with actual users.", "그 집단은 실제 사용자와 시험함으로써 계획을 개선했다."],
    ],
    traps: ["동명사 주어 뒤의 목적어가 복수여도 동명사구 전체는 보통 단수로 받습니다.", "to가 전치사인 표현을 따로 익혀 뒤에 동사원형을 쓰지 않도록 합니다."],
    questions: [
      q("빈칸에 들어갈 말로 가장 적절한 것은?<br><em>______ several versions of the report helps readers see the change.</em>", ["Compared", "To compared", "Comparing", "Compare", "Having compare"], 2, "여러 판본을 비교하는 행위 전체가 주어이므로 동명사 Comparing이 적절하다."),
      q("다음 중 전치사 뒤 동명사가 적절하게 쓰인 문장은?", ["They improved accuracy by compare two maps.", "They improved accuracy for compared two maps.", "They improved accuracy without to compare two maps.", "They improved accuracy by comparing two maps.", "They improved accuracy because comparing two maps."], 3, "전치사 by 뒤에는 동명사 comparing이 온다.")
    ],
  },
  {
    id: "participles",
    title: "분사와 분사구문",
    label: "PARTICIPLE",
    description: "현재분사는 능동·진행, 과거분사는 수동·완료 관계를 나타냅니다. 분사구문에서는 생략된 접속사와 주어를 복원해 주절과의 논리 관계를 확인합니다.",
    patterns: [
      ["명사 + V-ing", "명사가 행동의 주체인 능동 수식"],
      ["명사 + p.p.", "명사가 행동을 받는 수동 수식"],
      ["(접속사) + 분사, 주절", "시간·이유·조건·양보를 압축한 부사 구조"],
      ["having p.p.", "주절보다 앞선 일을 나타내는 완료 분사구문"],
    ],
    examples: [
      ["Students using the new entrance should carry an ID card.", "새 출입구를 사용하는 학생들은 신분증을 소지해야 한다."],
      ["Viewed from the hill, the two paths look almost identical.", "언덕에서 보면 두 길은 거의 똑같아 보인다."],
    ],
    traps: ["분사의 형태는 꾸밈받는 명사와의 능동·수동 관계로 결정합니다.", "분사구문의 의미상 주어가 주절 주어와 다르면 주어를 함부로 생략할 수 없습니다."],
    questions: [
      q("빈칸에 들어갈 형태로 가장 적절한 것은?<br><em>The photographs ______ during the storm revealed a damaged bridge.</em>", ["taking", "were taking", "to taking", "take", "taken"], 4, "사진은 촬영되는 대상이므로 과거분사 taken이 수식한다."),
      q("다음 분사구문의 의미로 가장 적절한 것은?<br><em>Compared with the earlier model, the new device uses less power.</em>", ["새 장치가 이전 모델을 직접 비교했다.", "두 장치는 비교할 수 없을 만큼 다르므로 전력을 전혀 사용하지 않는다.", "이전 모델과 비교하면 새 장치는 전력을 덜 사용한다.", "이전 모델은 전력을 전혀 사용하지 않았다.", "새 장치를 비교하기 전에 전력을 사용했다."], 2, "Compared는 When the new device is compared가 축약된 수동 분사구문이다."),
    ],
  },
  {
    id: "relatives",
    title: "관계사",
    label: "RELATIVE CLAUSE",
    description: "관계사는 앞의 명사를 꾸미면서 관계절 안에서 주어·목적어·소유격·부사 역할을 합니다. 선행사와 관계절 내부의 빈자리를 함께 확인합니다.",
    patterns: [
      ["명사 + who/which/that + 불완전절", "관계대명사가 절 안의 필수 성분 역할"],
      ["명사 + where/when/why + 완전절", "관계부사가 장소·시간·이유를 연결"],
      ["전치사 + which", "전치사의 목적어가 된 관계대명사"],
      ["what + 불완전절", "선행사를 포함해 ‘~하는 것’이라는 명사절 구성"],
    ],
    examples: [
      ["The archive contains letters that reveal how the policy changed.", "그 기록 보관소에는 정책이 어떻게 변했는지 보여 주는 편지들이 있다."],
      ["This is the room in which the first experiment was conducted.", "이곳은 첫 실험이 실시된 방이다."],
    ],
    traps: ["관계대명사 뒤가 완전한지 불완전한지 확인하지 않고 선행사만 보고 고르지 않습니다.", "계속적 용법의 which는 앞 명사뿐 아니라 앞 절 전체를 받을 수도 있습니다."],
    questions: [
      q("빈칸에 들어갈 말로 가장 적절한 것은?<br><em>The village ______ the survey was conducted lies beyond the river.</em>", ["where", "who", "what", "which", "that"], 0, "conducted의 목적어는 the survey로 이미 있고 장소 부사만 비어 있으므로 관계부사 where가 필요하다."),
      q("다음 중 관계사 사용이 올바른 문장은?", ["The report what we discussed was revised.", "The report who we discussed was revised.", "The report where we discussed it was revised.", "The report that we discussed was revised.", "The report which we discussed it was revised."], 3, "목적격 관계대명사 that이 discussed의 목적어 역할을 하므로 별도의 it을 쓰지 않는다."),
    ],
  },
  {
    id: "noun-clauses",
    title: "명사절·동격절·간접의문문",
    label: "NOUN CLAUSE",
    description: "하나의 절이 주어·목적어·보어·동격 역할을 할 때 문장 속에서 명사처럼 기능합니다. 접속사 뒤의 어순과 절의 완전성을 구분합니다.",
    patterns: [
      ["that + 완전절", "사실·생각·주장 등의 내용을 전달"],
      ["whether/if + 완전절", "‘~인지 아닌지’라는 선택·불확실성"],
      ["의문사 + 주어 + 동사", "간접의문문은 평서문 어순"],
      ["추상명사 + that절", "idea, fact, evidence, premise의 구체적 내용을 설명하는 동격절"],
    ],
    examples: [
      ["The question is whether the change can be measured reliably.", "문제는 그 변화를 신뢰성 있게 측정할 수 있는가이다."],
      ["The evidence that the lake is warming cannot be ignored.", "호수가 따뜻해지고 있다는 증거는 무시할 수 없다."],
    ],
    traps: ["간접의문문에서 의문사 뒤에 do/does/did를 다시 쓰지 않습니다.", "동격 that절과 관계대명사 that절은 뒤 절이 완전한지로 구분합니다."],
    questions: [
      q("다음 중 간접의문문의 어순이 올바른 것은?", ["We asked when would the train arrive.", "We asked when the train would arrive.", "We asked when did the train arrive.", "We asked when would arrive the train.", "We asked when the train arrive would."], 1, "간접의문문은 의문사 + 주어 + 동사의 평서문 어순을 따른다."),
      q("밑줄 친 that절의 성격으로 가장 적절한 것은?<br><em>The assumption <u>that every user has equal access</u> is unrealistic.</em>", ["assumption의 내용을 밝히는 동격절", "assumption을 목적어로 삼는 부사절", "주어가 빠진 관계대명사절", "시간을 나타내는 부사절", "결과를 나타내는 형용사절"], 0, "that절은 완전한 문장이며 추상명사 assumption의 구체적 내용을 설명한다."),
    ],
  },
  {
    id: "adverb-clauses",
    title: "부사절과 접속사",
    label: "ADVERB CLAUSE",
    description: "부사절은 시간·이유·조건·양보·대조·목적·결과를 나타내며 주절의 판단 방향을 바꿉니다. 접속사의 뜻보다 두 절의 논리 관계를 먼저 확인합니다.",
    patterns: [
      ["although/even though + 절", "예상과 다른 양보"],
      ["while/whereas + 절", "두 대상이나 사실의 대조"],
      ["so that/in order that + 절", "목적 또는 결과"],
      ["no matter how + 형용사/부사", "정도와 무관한 양보"],
    ],
    examples: [
      ["Although the method is simple, it requires careful timing.", "그 방법은 단순하지만 세심한 시간 조절이 필요하다."],
      ["The notice was enlarged so that older visitors could read it.", "노년 방문객이 읽을 수 있도록 안내문을 확대했다."],
    ],
    traps: ["while을 항상 ‘~하는 동안’으로만 해석하지 말고 대조 가능성을 확인합니다.", "because와 because of 뒤에 각각 절과 명사구가 온다는 차이를 기억합니다."],
    questions: [
      q("빈칸에 들어갈 접속사로 가장 적절한 것은?<br><em>______ the two samples look similar, their chemical structures differ.</em>", ["Because", "So that", "Unless", "Although", "As a result"], 3, "겉모습의 유사성과 구조의 차이를 양보 관계로 연결하므로 Although가 적절하다."),
      q("다음 두 절을 목적 관계로 연결한 문장은?", ["The guide repeated the rule because several visitors had ignored it earlier.", "The guide repeated the rule so that everyone could record it.", "The guide repeated the rule although everyone knew it.", "The guide repeated the rule whereas the sign was removed.", "The guide repeated the rule unless the room was closed."], 1, "so that은 모두가 기록할 수 있게 한다는 목적을 나타낸다."),
    ],
  },
  {
    id: "comparison-degree",
    title: "비교·정도·수량 표현",
    label: "COMPARISON",
    description: "비교 대상과 기준을 정확히 맞추고, too·enough·as·than이 만드는 정도 관계를 해석합니다. 비교급만 찾기보다 무엇과 무엇을 비교하는지 표시합니다.",
    patterns: [
      ["as + 원급 + as", "두 대상의 같은 정도"],
      ["비교급 + than", "한 대상의 상대적 우위·열위"],
      ["the + 비교급, the + 비교급", "두 변화가 함께 움직이는 비례"],
      ["too ... to / enough to", "행동 가능성의 한계와 충분한 정도"],
    ],
    examples: [
      ["The second explanation is more precise than the first.", "두 번째 설명이 첫 번째 설명보다 더 정확하다."],
      ["The more often learners retrieve a word, the easier it becomes to recall.", "학습자가 단어를 더 자주 인출할수록 기억하기 쉬워진다."],
    ],
    traps: ["than 뒤의 비교 대상을 앞의 비교 대상과 같은 종류로 맞춥니다.", "최상급 표현이 없어도 as ... as possible이 가능한 최대 정도를 나타낼 수 있습니다."],
    questions: [
      q("다음 문장의 의미로 가장 적절한 것은?<br><em>The earlier the warning arrives, the more time residents have to prepare.</em>", ["경고가 늦게 도착할수록 주민이 준비할 수 있는 시간은 더 길어진다.", "경고 시점과 준비 시간은 무관하다.", "주민이 준비해야 경고가 도착한다.", "경고는 준비가 끝난 뒤에만 도착한다.", "경고가 빠를수록 주민의 준비 시간이 늘어난다."], 4, "the 비교급, the 비교급은 한 변화가 커질수록 다른 변화도 함께 달라지는 비례 관계다."),
      q("빈칸에 들어갈 말로 가장 적절한 것은?<br><em>The text was clear enough for beginners ______.</em>", ["understood", "understanding", "to understand", "understand", "have understood"], 2, "enough for 목적어 to부정사 구조가 필요하므로 to understand가 맞다."),
    ],
  },
  {
    id: "parallel-special",
    title: "병렬·대조·도치·생략",
    label: "SPECIAL CONSTRUCTIONS",
    description: "같은 기능의 요소는 같은 형태로 연결하고, 부정·대조·강조 표현이 바꾸는 초점을 확인합니다. 생략된 요소는 앞뒤의 반복 구조를 바탕으로 복원합니다.",
    patterns: [
      ["A, B, and C", "동일한 문장 성분과 형태의 병렬"],
      ["not A but B", "A를 부정하고 B에 핵심 초점 부여"],
      ["대동사 do/did", "앞에서 나온 동사구의 반복을 피함"],
      ["부정어 + 조동사 + 주어", "부정어가 문두에 올 때의 도치"],
    ],
    examples: [
      ["The task requires observing, recording, and comparing changes.", "그 과제에는 변화를 관찰하고 기록하고 비교하는 일이 필요하다."],
      ["Not only did the route save time, but it also reduced noise.", "그 경로는 시간을 절약했을 뿐 아니라 소음도 줄였다."],
    ],
    traps: ["and 앞뒤의 품사만 보지 말고 문장 속 기능까지 같은지 확인합니다.", "not A but B에서는 실제 주장 중심이 B라는 점을 놓치지 않습니다."],
    questions: [
      q("다음 중 병렬 구조가 올바른 문장은?", ["The course teaches students to read closely, questioning every piece of evidence, and clear writing.", "The course teaches students reading closely, to question evidence, and writing clearly.", "The course teaches students close reading, to question evidence, and clearly write.", "The course teaches students to read closely, to question evidence, and to write clearly.", "The course teaches students read closely, questioning evidence, and to clear writing."], 3, "세 요소가 모두 to + 동사원형으로 병렬 연결된다."),
      q("다음 문장의 강조점으로 가장 적절한 것은?<br><em>The problem was caused not by a lack of data but by a failure to compare it.</em>", ["자료의 양과 비교 방식이 모두 완벽해서 어떤 문제도 생기지 않았다.", "자료가 없었기 때문에 비교할 수 없었다.", "비교보다 자료 수집이 더 큰 문제였다.", "자료를 비교하면 반드시 문제가 생긴다.", "문제의 원인은 자료 부족이 아니라 비교 실패였다."], 4, "not A but B에서 부정되는 것은 자료 부족이고 실제 원인으로 강조되는 것은 비교 실패이다."),
    ],
  },
  {
    id: "prepositions-expressions",
    title: "전치사·어구·기타 핵심 표현",
    label: "USAGE",
    description: "문법 구조와 함께 반복되는 전치사 결합, 대명사 지시, 한정 표현을 정리합니다. 개별 단어 뜻보다 뒤에 오는 명사·동명사·절의 형태까지 묶어서 익힙니다.",
    patterns: [
      ["by/without/instead of + V-ing", "수단·결여·대안을 나타내는 전치사구"],
      ["provide A with B / refer to A", "동사와 전치사를 한 덩어리로 기억"],
      ["according to + 명사", "근거·기준을 제시"],
      ["there + be + 명사", "새 정보의 존재를 소개"],
    ],
    examples: [
      ["The team reduced errors by checking each entry twice.", "팀은 각 항목을 두 번 확인함으로써 오류를 줄였다."],
      ["The museum provided visitors with a digital map.", "박물관은 방문객에게 디지털 지도를 제공했다."],
    ],
    traps: ["전치사 뒤에 완전한 절을 바로 놓지 말고 명사구나 동명사구가 필요한지 확인합니다.", "대명사 it·they·those가 가리키는 대상을 문맥에서 명확히 연결합니다."],
    questions: [
      q("빈칸에 들어갈 형태로 가장 적절한 것은?<br><em>The researchers improved reliability by ______ the test under different conditions.</em>", ["repeat", "to repeat", "repeating", "repeated", "have repeated"], 2, "전치사 by 뒤에는 동명사 repeating이 온다."),
      q("다음 중 provide의 결합이 올바른 문장은?", ["The program provides learners with immediate feedback.", "The program provides immediate feedback from learners to.", "The program provides learners immediate feedback with.", "The program provides to learners from feedback.", "The program provides with learners by feedback."], 0, "provide A with B는 A에게 B를 제공한다는 고정 결합이다.")
    ],
  },
];

import { buildQuestion } from "./question-quality.mjs";

const makeSet = (sourceRef, title, passage, vocab, questions, level = "실전") => ({ sourceRef, level, title, passage: `<p>${passage}</p>`, vocab, questions });
const q = buildQuestion;

export const englishPracticeTests = {};

englishPracticeTests.T1 = makeSet("실전 01~02", "A Request for Reusable Boxes",
  "Dear Northfield Bakery, Our community center plans to order 120 sandwiches for the volunteer fair on August 8. Your standard individual packages are attractive, but participants will eat at shared tables and the center has reusable plates. Could you pack the sandwiches in twelve returnable boxes instead? We can collect the order and return every box by noon the following day. Because this arrangement removes the cost of individual wrapping and delivery, we would also like to ask whether a small discount is possible. Please confirm the box deposit, final price, and pickup time by Friday. Sincerely, Mina Cho, Event Coordinator",
  [["returnable", "반납 가능한"], ["deposit", "보증금"], ["wrapping", "포장"]], [
    q("이 글의 목적으로 가장 적절한 것은?", ["샌드위치 재료 변경에 항의하려고", "재사용 상자 포장과 할인 가능 여부를 요청하려고", "행사 날짜를 무기한 연기하려고", "개별 포장 수를 늘리려고", "배달 중 손상된 상자를 신고하려고"], 1, "재사용 상자 포장, 보증금·가격·수령 시간 확인을 요청한다."),
    q("요청 내용과 일치하지 않는 것은?", ["샌드위치 120개를 주문할 예정이다.", "센터가 직접 주문품을 수령한다.", "상자는 다음 날 정오까지 반납한다.", "모든 샌드위치를 개별 비닐 포장해 달라고 한다.", "금요일까지 답변을 요청한다."], 3, "개별 포장 대신 12개의 반납 상자를 요청한다.")
  ]);
englishPracticeTests.T1.extraSets = [
  makeSet("실전 03~04", "The First Bat in the Garden",
    "Sora had agreed to join an evening nature walk only because her cousin asked. The guide stopped beside a dark pond and raised a detector that converted bat calls into clicks. For ten quiet minutes Sora heard nothing and wondered why she had left home. Then rapid clicks filled the speaker, and a small shadow turned sharply above the water. The guide explained that the bat was locating an insect through returning sound. Sora moved closer, watching the screen trace each call. By the end of the walk she was asking whether different species produced different patterns and when the group would meet again.",
    [["detector", "탐지기"], ["locate", "위치를 찾다"], ["trace", "기록하다"]], [
      q("Sora의 심경 변화로 가장 적절한 것은?", ["reluctant → curious", "proud → ashamed", "calm → furious", "hopeful → disappointed", "grateful → indifferent"], 0, "마지못해 참여했지만 박쥐 탐지 경험 뒤 질문하고 재참여를 원했다."),
      q("Sora의 태도 변화를 일으킨 직접적 사건은?", ["사촌이 집으로 돌아간 것", "탐지기 소리와 물 위 박쥐를 관찰한 것", "연못이 밝아진 것", "곤충이 모두 사라진 것", "가이드가 산책을 취소한 것"], 1, "박쥐의 반향정위가 소리와 화면으로 드러난 순간 관심이 생겼다.")
    ]),
  makeSet("실전 05~06", "The Label That Changes the Taste",
    "Participants tasted the same sparkling water from two cups. One cup was labeled ‘mineral reserve,’ the other ‘filtered tap.’ Most rated the first as smoother and said they would pay more for it. When the labels were switched in a second trial, preference followed the label rather than the water. Expectations had entered perception before participants described the taste. This does not show that sensory experience is imaginary; the water was genuinely tasted. It shows that perception is an active judgment in which prior information can influence which features receive attention and how they are valued.",
    [["sparkling", "탄산이 든"], ["perception", "지각"], ["prior", "사전의"]], [
      q("실험 결과의 요지로 가장 적절한 것은?", ["맛은 혀의 반응만으로 완전히 결정된다.", "사전 정보가 같은 감각 경험의 평가를 바꿀 수 있다.", "비싼 물은 언제나 더 부드럽다.", "참가자는 두 물을 실제로 마시지 않았다.", "라벨은 가격 판단에 전혀 영향을 주지 않는다."], 1, "같은 물인데 라벨에 따라 맛과 지불 의사가 달라졌다."),
      q("글쓴이가 명시적으로 부정하는 것은?", ["지각에 기대가 영향을 줄 수 있다.", "감각 경험이 전적으로 허구라는 해석", "같은 물을 두 컵에 제공했다.", "주의와 가치 판단이 지각에 포함된다.", "라벨이 선호에 영향을 주었다."], 1, "감각이 상상이라고 주장하는 것은 아니라고 제한한다.")
    ]),
  makeSet("실전 07~08", "The Bus Stop Map",
    "A city counted how many people entered each bus but did not record where crowded trips began. Officials planned to add buses evenly across all routes. A planner then mapped boarding locations by time of day. Two routes were quiet for most of the day but overcrowded for forty minutes when factory shifts ended. Adding buses everywhere would have spread resources thinly while leaving the short peak unresolved. The city instead scheduled extra departures at two stops immediately after shift changes. The total number of passengers had described the size of demand; the spatial and temporal pattern revealed the intervention it required.",
    [["overcrowded", "과밀한"], ["departure", "출발편"], ["intervention", "개입"]], [
      q("지도화가 바꾼 정책은?", ["모든 노선에 같은 수의 버스를 추가함", "특정 시간과 정류장에 추가 출발편을 배치함", "공장 근무 시간을 폐지함", "승객 수 집계를 중단함", "혼잡 노선을 영구 폐쇄함"], 1, "혼잡이 특정 장소·시간에 집중된다는 패턴에 맞춰 배차했다."),
      q("마지막 문장의 대조로 가장 적절한 것은?", ["수요의 총량과 수요가 발생한 패턴", "버스 색상과 좌석 재질", "운전자의 나이와 승객 직업", "공장 크기와 도로 길이", "낮과 밤의 날씨 차이"], 0, "총승객 수는 규모를, 시공간 분포는 필요한 개입을 보여 줬다.")
    ]),
  makeSet("실전 09~10", "The Missing Step in the Manual",
    "A museum published instructions for volunteers scanning old letters. The first page explained file names; the last explained cloud storage. Yet volunteers produced images with shadows and uneven edges. During a review, the coordinator discovered that the manual never told users how to position the lamp and camera before scanning. She added a one-page setup checklist between the naming rules and the scanning process. Error rates fell immediately. The volunteers had not ignored the instructions. The instructions had treated equipment setup as obvious and therefore left the causal step invisible.",
    [["uneven", "고르지 않은"], ["checklist", "점검표"], ["causal", "인과의"]], [
      q("오류의 주된 원인은?", ["봉사자가 파일 이름을 몰랐기 때문", "설명서가 장비 배치 단계를 당연시해 생략했기 때문", "클라우드 저장이 불가능했기 때문", "모든 편지가 손상되었기 때문", "카메라가 존재하지 않았기 때문"], 1, "조명과 카메라 위치라는 원인 단계가 설명서에 없었다."),
      q("체크리스트가 들어갈 논리적 위치는?", ["파일 삭제 안내 뒤", "이름 규칙과 실제 스캔 과정 사이", "클라우드 저장 뒤 맨 끝", "편지 역사 소개 앞", "봉사자 명단 안"], 1, "실제 스캔 전에 장비를 설정해야 하므로 그 직전에 와야 한다.")
    ])
];

englishPracticeTests.T2 = makeSet("실전 01~02", "The Bench Made from the Wrong Wood",
  "A park installed benches made from a fast-growing imported tree and advertised them as environmentally friendly. The wood required less time to replace than oak, but it absorbed water in the local climate and cracked within three years. Repair crews repeatedly applied coatings, used fuel to transport replacement boards, and discarded damaged pieces. A slower-growing local wood lasted much longer with little treatment. Sustainability cannot be inferred from one attractive property such as growth rate. It depends on the entire service life of a material within the conditions where it will actually be used.",
  [["coating", "도료"], ["discard", "버리다"], ["service life", "사용 수명"]], [
    q("글의 요지로 가장 적절한 것은?", ["빠르게 자라는 재료는 언제나 가장 친환경적이다.", "재료의 지속 가능성은 실제 사용 조건과 전체 수명으로 평가해야 한다.", "지역 목재는 모두 느리게 썩는다.", "공원 벤치는 나무로 만들면 안 된다.", "수리 과정의 에너지는 평가에서 제외해야 한다."], 1, "성장 속도 하나가 아니라 내구성·수리·교체를 포함한 생애주기를 봐야 한다."),
    q("imported wood의 문제로 언급되지 않은 것은?", ["물을 흡수했다.", "3년 안에 갈라졌다.", "반복 도료 처리가 필요했다.", "교체 운송에 연료가 들었다.", "성장 속도가 지역 목재보다 느렸다."], 4, "수입 목재는 오히려 빠르게 자란다고 제시된다.")
  ]);
englishPracticeTests.T2.extraSets = [
  makeSet("실전 03~04", "A Pause Before the Answer",
    "During interviews, manager Elena used to fill every silence with another question. Applicants then gave quick answers but rarely explained their reasoning. She tried waiting five seconds after each response. The pauses felt awkward to her, yet applicants often continued with an example or corrected an unclear statement. Silence had not meant that the conversation had failed. It gave speakers time to inspect what they had said. Elena still asked follow-up questions, but she no longer treated every empty second as a problem to remove. The quality of the interview improved when time to think became part of the exchange.",
    [["awkward", "어색한"], ["inspect", "검토하다"], ["exchange", "상호 작용"]], [
      q("Elena가 바꾼 면접 방식은?", ["응답 직후 새 질문을 계속 던졌다.", "답변 뒤 잠시 기다려 지원자가 생각을 확장하게 했다.", "후속 질문을 완전히 없앴다.", "지원자에게 예시를 금지했다.", "면접 시간을 절반으로 줄였다."], 1, "짧은 침묵을 사고와 보완의 시간으로 활용했다."),
      q("글의 제목으로 가장 적절한 것은?", ["Five Seconds That Improved an Interview", "Why Every Silence Ends a Conversation", "The Fastest Applicant Always Wins", "Removing Thought from an Exchange", "Questions Without Any Answers"], 0, "5초의 기다림이 답변의 깊이를 높인 사례다.")
    ]),
  makeSet("실전 05~06", "The Seed Bank’s Duplicate Key",
    "A regional seed bank stored rare crop seeds in one highly secure building. The facility had excellent temperature control, but a flood closed the road for weeks. No seeds were lost; access was. The bank then placed duplicate samples in a smaller facility on higher ground and trained staff in both locations to use the same records. Duplication increased storage costs, yet it reduced the chance that one local event would interrupt every conservation task. Reliability did not come from making a single site perfect. It came from designing the system so that one failure would not become a total failure.",
    [["duplicate", "복제한"], ["interrupt", "중단시키다"], ["reliability", "신뢰성"]], [
      q("seed bank이 duplicate samples를 둔 이유는?", ["원래 건물의 온도 조절이 없어서", "한 지역 사건이 전체 보전 업무를 막지 않게 하려고", "희귀 종자를 판매하려고", "모든 기록 방식을 다르게 만들려고", "홍수 위험을 다른 지역에 옮기려고"], 1, "공간적 분산으로 단일 장애점 위험을 줄였다."),
      q("마지막 두 문장의 핵심 대조는?", ["완벽한 단일 시설과 복원력 있는 분산 체계", "작은 종자와 큰 종자", "기록과 온도", "홍수와 가뭄", "직원과 도로"], 0, "한 곳의 완벽성보다 부분 실패를 견디는 설계가 신뢰성을 높였다.")
    ]),
  makeSet("실전 07~08", "The Photograph with a Second Date",
    "An archive labeled a street photograph ‘May 1964’ because that date was written on the back. A historian noticed a theater poster advertising a film released in October. Rather than declaring the whole photograph false, she treated the conflict as a clue. The handwritten date may have marked when the photograph was given to someone, not when it was taken. Newspaper listings confirmed that the film played at the theater in November 1964. The correction increased the photograph’s value: it showed how captions themselves have histories and why evidence should be compared rather than accepted or rejected as a single block.",
    [["archive", "기록 보관소"], ["caption", "설명 문구"], ["confirm", "확인하다"]], [
      q("historian의 자료 처리 방식은?", ["날짜 충돌 때문에 사진을 폐기했다.", "서로 다른 단서를 비교해 날짜 문구의 의미를 재해석했다.", "손글씨 날짜만 절대적으로 믿었다.", "영화 개봉 정보를 무시했다.", "사진 속 모든 내용을 조작이라고 했다."], 1, "포스터·신문·뒷면 날짜를 비교해 사진 촬영 시점을 수정했다."),
      q("correction이 사진의 가치를 높인 이유는?", ["사진이 더 선명해졌기 때문에", "자료 설명도 별도의 역사를 가진다는 점을 보여 줬기 때문에", "극장 이름이 지워졌기 때문에", "손글씨가 새로 추가되었기 때문에", "영화가 더 일찍 개봉했기 때문에"], 1, "캡션 자체를 검토할 증거로 보게 했다.")
    ]),
  makeSet("실전 09~10", "The Measure That Became the Goal",
    "A support center rewarded staff for closing as many cases as possible each week. The number rose, but workers began marking simple questions complete while difficult cases waited. Managers first concluded that productivity had improved because the dashboard was green. Complaints later revealed that the measure had redirected attention away from people who needed more time. The center replaced the single count with three indicators: response time, resolution quality, and follow-up satisfaction. Measurement became useful again when no one number could be increased by sacrificing the service’s actual purpose.",
    [["dashboard", "현황판"], ["indicator", "지표"], ["satisfaction", "만족도"]], [
      q("초기 지표가 만든 문제는?", ["직원이 어려운 사례에 더 많은 시간을 썼다.", "단순 종결 수를 높이려 어려운 사례를 미뤘다.", "모든 민원이 사라졌다.", "현황판이 숫자를 표시하지 않았다.", "서비스 목적과 지표가 완전히 일치했다."], 1, "종결 건수라는 목표가 행동을 왜곡했다."),
      q("새 측정 체계의 장점은?", ["모든 평가를 없앴다.", "속도·품질·후속 만족을 함께 보아 한 지표의 왜곡을 줄였다.", "종결 건수만 더 크게 보상했다.", "어려운 사례를 접수하지 않았다.", "불만 자료를 숨겼다."], 1, "여러 지표가 서비스 목적을 다각도로 반영한다.")
    ])
];

englishPracticeTests.T3 = makeSet("실전 01~02", "The Message Written for the Next Shift",
  "A laboratory team changed equipment settings several times during the day. Each scientist remembered what they had done, but the night shift did not. Small errors accumulated because spoken updates disappeared when people went home. The team introduced a short handover note with three fields: what changed, why it changed, and what should be checked next. Writing the note took less than two minutes. Within a month, repeated tests fell sharply. The document was valuable not because it stored every detail, but because it preserved the decisions that another person needed in order to continue the work safely.",
  [["handover", "인계"], ["accumulate", "누적되다"], ["preserve", "보존하다"]], [
    q("handover note의 핵심 기능은?", ["모든 실험 자료를 복제하는 것", "다음 근무자가 필요한 변경·이유·점검 사항을 남기는 것", "말로 하는 소통을 완전히 금지하는 것", "장비 설정을 매일 초기화하는 것", "야간 근무를 없애는 것"], 1, "연속 작업에 필요한 결정 정보를 교대 사이에 보존했다."),
    q("이 글의 요지로 가장 적절한 것은?", ["좋은 기록은 양보다 다음 행동에 필요한 정보 선택이 중요하다.", "모든 기억은 글보다 정확하다.", "짧은 기록은 업무에 도움이 되지 않는다.", "실험실에서는 설정을 바꾸면 안 된다.", "반복 실험은 언제나 필요하다."], 0, "모든 세부가 아니라 이어서 안전하게 일할 핵심 결정을 기록했다.")
  ]);
englishPracticeTests.T3.extraSets = [
  makeSet("실전 03~04", "The Garden That Opened at Dusk",
    "A public garden closed at 6 p.m., exactly when many nearby residents finished work. Surveys showed strong interest, yet attendance remained low. Staff first considered a larger advertising campaign. A trial instead kept the garden open until 9 p.m. on Thursdays and added low pathway lighting. Attendance tripled without any new advertisements. The original survey had measured desire to visit, but opening hours had prevented that desire from becoming behavior. Sometimes low participation does not signal weak interest; it reveals a mismatch between a service and the time people can use it.",
    [["attendance", "방문 인원"], ["trial", "시범 운영"], ["mismatch", "불일치"]], [
      q("attendance가 증가한 직접적 이유는?", ["광고비를 세 배로 늘려서", "근무 뒤 이용 가능한 시간까지 운영해서", "설문을 중단해서", "정원을 낮에만 열어서", "입장료를 크게 올려서"], 1, "이용 가능 시간과 운영 시간을 맞추자 참여가 늘었다."),
      q("low participation에 대한 글쓴이의 관점은?", ["항상 관심 부족을 뜻한다.", "서비스 조건과 이용 가능 시간의 불일치일 수 있다.", "광고가 없다는 증거다.", "설문 결과가 언제나 거짓이라는 뜻이다.", "정원 품질이 낮다는 뜻만 가진다."], 1, "욕구와 행동 사이의 구조적 장벽을 보아야 한다.")
    ]),
  makeSet("실전 05~06", "The Coral Nursery’s Mixed Strategy",
    "A reef project grew young corals in underwater nurseries and moved them to damaged areas. Fast-growing species covered bare rock quickly but were vulnerable to heat. Slower species survived warm periods better yet expanded gradually. Instead of choosing one ‘best’ coral, the project planted a mixture and placed heat-tolerant colonies in the warmest zones. Recovery was uneven, but no single disease or temperature event destroyed the entire site. Diversity functioned as risk management: different strengths became valuable under different future conditions.",
    [["coral", "산호"], ["vulnerable", "취약한"], ["colony", "군체"]], [
      q("mixed strategy의 장점은?", ["모든 산호가 같은 속도로 자란다.", "서로 다른 위험에 대한 강점을 결합해 전체 실패 가능성을 줄인다.", "질병과 수온 변화를 없앤다.", "빠른 종만 심는다.", "복구 속도를 모든 구역에서 같게 한다."], 1, "다양한 종과 배치가 한 위험에 전체가 무너지는 것을 막았다."),
      q("글의 제목으로 가장 적절한 것은?", ["Diversity as Insurance for a Reef", "The One Perfect Coral Species", "Why Heat Never Harms a Nursery", "Making Every Recovery Identical", "Removing Slow-Growing Corals"], 0, "서로 다른 특성의 다양성이 미래 위험에 대한 보험 역할을 한다.")
    ]),
  makeSet("실전 07~08", "The Translation of a Joke",
    "A translator working on a children’s story found a joke based on two English words that sounded alike. A literal translation preserved the dictionary meanings but lost the humor because the words did not resemble each other in Korean. She replaced the pair with different Korean words that created a similar misunderstanding between the characters. Some details changed, yet the scene kept its function: readers understood why one character answered the wrong question and laughed at the correction. Fidelity required preserving the relationship among meaning, sound, and effect, not copying one layer while the others disappeared.",
    [["literal", "직역의"], ["misunderstanding", "오해"], ["fidelity", "충실성"]], [
      q("translator가 단어를 바꾼 이유는?", ["원문의 의미를 모두 삭제하려고", "직역으로 사라진 말장난의 기능과 효과를 새 언어에서 살리려고", "등장인물 수를 줄이려고", "어린이에게 유머를 금지하려고", "사전 사용을 피하려고"], 1, "소리·오해·웃음이라는 관계를 새 언어에서 재구성했다."),
      q("글쓴이가 보는 fidelity는?", ["모든 단어의 형태를 그대로 복제하는 것", "여러 표현 요소의 관계와 독자 효과를 조율해 보존하는 것", "뜻보다 소리만 남기는 것", "번역자의 선택을 없애는 것", "문장을 항상 더 길게 만드는 것"], 1, "한 층위의 복사가 아니라 의미·소리·효과의 기능적 관계를 보존한다.")
    ]),
  makeSet("실전 09~10", "The Apology with a Deadline",
    "A company sent customers an apology after a data outage. The first draft said, ‘We regret any inconvenience,’ but did not explain what would happen next. Customers interpreted the message as an attempt to end the conversation. The revised version named the cause, promised restoration by 4 p.m., and stated that another update would appear at 2 p.m. Even before the system returned, complaint messages decreased. The apology became credible when it included testable commitments. Expressions of concern can open communication, but trust depends on information that lets people judge whether promised action occurs.",
    [["outage", "서비스 중단"], ["credible", "신뢰할 수 있는"], ["commitment", "약속"]], [
      q("revised version이 더 신뢰를 얻은 이유는?", ["감정 표현을 모두 삭제해서", "원인·복구 시각·중간 공지라는 확인 가능한 약속을 제시해서", "복구가 끝난 뒤에만 보냈기 때문에", "고객의 질문을 차단해서", "중단 사실을 부인해서"], 1, "사람들이 실제 이행 여부를 판단할 구체적 정보를 제공했다."),
      q("글의 결론으로 가장 적절한 것은?", ["사과 문구만 있으면 신뢰가 자동 회복된다.", "우려 표현과 함께 검증 가능한 행동 계획이 있어야 신뢰가 생긴다.", "기한은 고객 불안을 늘리므로 숨겨야 한다.", "서비스 장애에는 공지가 필요 없다.", "복구 약속은 구체적일수록 피해야 한다."], 1, "감정 표현은 시작일 뿐 신뢰는 확인 가능한 조치에 의존한다.")
    ])
];

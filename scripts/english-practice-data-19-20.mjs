import { buildQuestion } from "./question-quality.mjs";

const makeSet = (sourceRef, title, passage, vocab, questions, level = "3점") => ({ sourceRef, level, title, passage: `<p>${passage}</p>`, vocab, questions });
const q = buildQuestion;

export const englishPractice1920 = {};

englishPractice1920["19"] = makeSet("Gateway 01~02", "The Costume That Needed Motion",
    "A museum received a ceremonial coat from an island community. The fabric survived, but no label explained how the coat had been worn. Curators first placed it on a rigid figure and assumed its long sleeves had hung at the wearer’s sides. Then a resident shared a home movie of a harvest dance. In the film, dancers tied the sleeves behind their shoulders before spinning, which made colored panels open like wings. The object had not changed, but its meaning had. The museum rebuilt the display with a turning platform and a short animation. A preserved garment supplied material evidence; moving images restored the action that made the material intelligible.",
    [["ceremonial", "의식용의"], ["rigid", "경직된"], ["intelligible", "이해할 수 있는"]], [
      q("이 글의 주제로 가장 적절한 것은?", ["의복 보존에는 직물만 남기면 충분하다.", "움직임을 보여 주는 자료가 의복의 사용 맥락을 복원한다.", "박물관은 지역 주민의 자료를 받지 않아야 한다.", "모든 의식용 의복은 같은 방식으로 착용된다.", "영상 자료는 실물보다 언제나 부정확하다."], 1, "실물 코트만으로는 알 수 없던 착용 방식과 의미를 영상이 복원했다."),
      q("박물관이 전시를 바꾼 직접적인 계기는?", ["직물이 심하게 손상된 것", "새 코트를 구입한 것", "춤추는 동안 소매를 묶는 영상을 확인한 것", "전시 공간이 너무 좁았던 것", "의복의 제작 연도가 바뀐 것"], 2, "가정용 영상에서 춤을 출 때의 실제 착용법이 드러났다.")
    ], "2점");

englishPractice1920["19"].extraSets = [
  makeSet("Exercise 01~02", "A Sail Recut for the Stage",
    "A coastal theater owned a handwoven blue cloth that had once served as a ship’s festival sail. Buying fabric of similar quality was beyond the theater’s budget, so the costume team treated the cloth as a resource rather than a finished object. For one production it became a queen’s cape; later, the seams were opened and the same panels formed three musicians’ jackets. The tailors used broad stitches at hidden edges, not because they lacked skill, but because future removal had been planned. Each design looked complete on stage, yet none was considered permanent. The cloth’s long life depended on construction that welcomed revision.",
    [["handwoven", "손으로 짠"], ["seam", "솔기"], ["revision", "수정"]], [
      q("글의 제목으로 가장 적절한 것은?", ["One Cloth, Many Lives on the Stage", "Why Tailors Should Hide Their Skills", "The Permanent Design of a Royal Cape", "When Theater Budgets Stop All Production", "A Festival Sail That Was Never Used Again"], 0, "한 천을 여러 의상으로 해체·재구성한 순환적 사용이 중심이다."),
      q("tailors가 넓은 바느질을 사용한 이유는?", ["바늘이 부족해서", "무대에서 솔기가 보이게 하려고", "나중에 쉽게 풀어 다시 쓰려고", "천을 영구적으로 고정하려고", "재단 기술을 배우지 못해서"], 2, "미래의 해체와 재사용을 염두에 둔 제작 방식이었다.")
    ]),
  makeSet("Exercise 03~04", "Fast Updates, Slow Verification",
    "During a winter storm, a neighborhood message channel became the fastest source of local news. Residents reported blocked roads, open pharmacies, and power failures within minutes. The speed was useful, but one post claimed that the town’s water had become unsafe. Hundreds shared it before anyone checked the source. The water office later explained that a routine pressure test had been misunderstood. Afterward, moderators placed verified notices at the top of the channel and marked eyewitness reports separately from official statements. The channel did not become slower; it became easier to read responsibly. Access to more information had created a new task: judging what kind of information each message contained.",
    [["blocked", "막힌"], ["routine", "정기적인"], ["eyewitness", "목격자"]], [
      q("이 글이 강조하는 바로 가장 적절한 것은?", ["빠른 정보는 확인할 필요가 없다.", "지역 소식은 정부만 전달해야 한다.", "정보 접근 속도가 빨라질수록 출처 구분도 중요해진다.", "메시지 채널은 재난 때 닫아야 한다.", "목격자의 보고는 언제나 공식 발표보다 정확하다."], 2, "속도와 접근성의 장점이 검증·출처 판단의 책임을 함께 낳았다."),
      q("moderators가 시행한 조치가 아닌 것은?", ["검증 공지를 위쪽에 고정했다.", "목격자 보고와 공식 발표를 구분했다.", "모든 주민의 글쓰기를 영구적으로 금지했다.", "메시지의 종류를 판단하기 쉽게 했다.", "채널의 속도를 유지했다."], 2, "모든 글을 금지했다는 내용은 없다.")
    ]),
  makeSet("Exercise 05~06", "The Two Kinds of Extra Hours",
    "A software firm and a delivery company both reported an increase in working hours, but the numbers hid different realities. Senior developers stayed late because a successful product launch could bring large bonuses and promotions. Couriers, by contrast, logged extra hours because each delivery paid little and schedules were unpredictable. When demand fell, the firm kept a small core team busy, while many couriers received too few shifts to earn stable incomes. Calling both groups ‘hard-working’ concealed the imbalance. One group faced pressure through abundant work with high rewards; the other faced insecurity through alternating overload and underemployment.",
    [["courier", "배달 기사"], ["conceal", "감추다"], ["underemployment", "불완전 고용"]], [
      q("글의 핵심 대조로 가장 적절한 것은?", ["기술 노동과 육체 노동의 생산성", "보상 있는 과로와 불안정한 과잉·부족 노동", "도시와 농촌의 출퇴근 시간", "정규 교육과 직업 훈련", "보너스와 휴가의 선호 차이"], 1, "두 집단의 긴 노동시간은 보상과 안정성 측면에서 전혀 다른 구조를 가진다."),
      q("글쓴이가 ‘hard-working’이라는 표현을 문제 삼는 이유는?", ["두 집단의 구조적 차이를 가리기 때문에", "개발자는 실제로 일하지 않기 때문에", "배달 기사는 보너스를 많이 받기 때문에", "근무 시간 자료가 전혀 없기 때문에", "모든 노동자가 같은 일정을 원하기 때문에"], 0, "같은 표현이 과로와 불완전 고용의 차이를 감춘다.")
    ]),
  makeSet("Exercise 07~08", "Two Stories About the Same Fence",
    "Two neighboring schools shared a playing field. When North School built a low fence around its equipment area, its principal called the fence a practical way to prevent theft. South School’s principal read the same action as a signal that North no longer trusted its neighbor and proposed building a taller fence. A mediator asked both sides to describe the result they feared. North feared losing equipment; South feared being excluded from the field. Once those concerns were made explicit, they agreed on a shared storage room with two keys. The original fence had carried no single meaning. Each side’s frame had selected a threat and suggested a different response.",
    [["mediator", "중재자"], ["exclude", "배제하다"], ["frame", "해석 틀"]], [
      q("두 학교의 갈등이 커질 뻔한 주된 이유는?", ["운동장이 너무 작아서", "같은 행동을 서로 다른 위협의 틀로 해석해서", "장비가 이미 모두 도난당해서", "중재자가 더 높은 울타리를 세워서", "두 학교가 같은 두려움을 가졌기 때문에"], 1, "한쪽은 도난 방지, 다른 쪽은 불신과 배제 신호로 해석했다."),
      q("갈등 해결에 가장 직접적으로 기여한 것은?", ["각자가 두려워한 결과를 명시한 것", "울타리를 즉시 철거한 것", "운동장을 폐쇄한 것", "장비 소유권을 포기한 것", "한 학교에 모든 열쇠를 준 것"], 0, "숨은 위협 인식을 드러내자 공동 보관실이라는 대안을 만들 수 있었다.")
    ])
];

englishPractice1920["20"] = makeSet("Gateway 01~03", "The Recipe Night",
  "Nora noticed that meals at home had become nearly silent. Her son Min checked short videos while her partner answered work messages. Nora proposed a weekly recipe night in which one person would choose a dish and the family would prepare it together. Min objected that cooking took too long, but agreed when he was allowed to choose the first menu. He selected dumplings after watching his grandfather make them during a video call. On Friday, the family folded uneven dumplings and laughed at the strange shapes. Min asked his grandfather why one fold was different, and the answer led to a story about the town where he had grown up. The meal created conversation because making it required shared attention.",
  [["propose", "제안하다"], ["uneven", "고르지 않은"], ["shared attention", "공동의 주의"]], [
    q("가족 관계의 변화로 가장 적절한 것은?", ["각자 화면을 보던 상태에서 공동 활동과 대화로 바뀌었다.", "함께 요리하던 상태에서 각자 식사하게 되었다.", "조용한 관계에서 더 큰 갈등으로 바뀌었다.", "조부모와 연락하던 상태에서 단절되었다.", "요리를 즐기던 Min이 완전히 흥미를 잃었다."], 0, "공동 요리 과정이 화면 중심의 침묵을 대화로 바꾸었다."),
    q("Min이 첫 활동에 동의한 조건은?", ["요리하지 않아도 되는 것", "자신이 첫 메뉴를 고르는 것", "친구를 모두 초대하는 것", "휴대전화를 계속 보는 것", "조부모가 직접 방문하는 것"], 1, "첫 메뉴 선택권을 받자 참여에 동의했다.")
  ]);

englishPractice1920["20"].extraSets = [
  makeSet("Exercise 01~03", "After the Last Call",
    "At a city help desk, Jina spent the afternoon speaking with residents whose heating assistance had been delayed. She explained the same shortage calmly, but one caller accused her of hiding funds and refused every alternative she offered. After the call, Jina continued working as if nothing had happened. Her supervisor later found her staring at an empty screen and invited her to a quiet room. Instead of evaluating the call, he asked what part had been hardest. Jina admitted that remaining polite while being blamed had exhausted her. The office then introduced a ten-minute peer check-in after difficult calls. The policy did not remove conflict, but it stopped workers from carrying it alone.",
    [["assistance", "지원"], ["accuse", "비난하다"], ["peer check-in", "동료 간 짧은 점검"]], [
      q("사무실이 새로 도입한 제도의 목적은?", ["통화 시간을 늘리기 위해", "직원의 감정 부담을 함께 처리하기 위해", "주민의 지원 신청을 제한하기 위해", "모든 대안을 없애기 위해", "직원의 친절도를 점수화하기 위해"], 1, "어려운 통화 뒤 감정 부담을 혼자 지지 않도록 동료 점검을 도입했다."),
      q("supervisor의 대응으로 가장 적절한 것은?", ["즉시 Jina를 비판했다.", "통화 기록을 삭제했다.", "평가보다 힘들었던 점을 먼저 물었다.", "주민에게 다시 전화하라고 명령했다.", "업무를 영구 중단시켰다."], 2, "판단 대신 감정을 말할 안전한 공간을 제공했다.")
    ]),
  makeSet("Exercise 04~06", "The Price of an Echo",
    "At a street fair, Daniel stopped beside a booth where a musician played a hand drum. Daniel listened for several minutes and began to leave. The performer jokingly said, ‘You enjoyed my rhythm, so you owe me a ticket fee.’ Daniel pointed to a fountain across the square. ‘Then the echo that returned from the wall should pay half,’ he replied. The performer laughed and admitted the request had been a test of quick thinking. Daniel placed a coin in the open case anyway, but now as a gift rather than a debt. By separating voluntary appreciation from an invented obligation, he had answered the joke without turning it into a quarrel.",
    [["echo", "메아리"], ["voluntary", "자발적인"], ["obligation", "의무"]], [
      q("Daniel의 응답이 재치 있는 이유는?", ["음악을 듣지 않았다고 거짓말해서", "공연자의 논리를 메아리에 똑같이 적용해서", "돈이 없다고 소리쳐서", "공연을 중단시켜서", "분수를 고장 내서"], 1, "듣는 행위에 값을 요구하는 논리를 메아리에도 대칭적으로 적용했다."),
      q("Daniel이 마지막에 동전을 낸 성격은?", ["법적 벌금", "강제된 입장료", "자발적 감사 표시", "분수 사용료", "물품 구매 대금"], 2, "빚이 아니라 선물로 동전을 놓았다고 명시한다.")
    ]),
  makeSet("Exercise 07~09", "A Map for Reading Aloud",
    "During group reading, Hana skipped words and joked whenever her turn approached. Her teacher first assumed she was careless. In a private conversation, however, Hana said that lines seemed to crowd together and that she feared classmates would laugh. The teacher gave her a card with a narrow window that revealed one line at a time and practiced with her before class. Hana selected short science articles because she liked the topics. After several weeks, she no longer needed the card for every paragraph and began volunteering to read diagrams aloud. The change began when the teacher treated avoidance as information about difficulty rather than proof of laziness.",
    [["approach", "다가오다"], ["reveal", "드러내다"], ["avoidance", "회피"]], [
      q("교사의 지도 원리로 가장 적절한 것은?", ["회피 행동을 벌로 없애야 한다.", "학생의 어려움 원인을 확인해 도구와 흥미를 맞춰야 한다.", "모든 학생에게 같은 긴 글을 줘야 한다.", "소리 내어 읽기를 완전히 없애야 한다.", "실수할 때마다 공개적으로 지적해야 한다."], 1, "사적인 대화로 원인을 확인하고 시각 도구와 관심 주제를 활용했다."),
      q("Hana의 변화로 언급되지 않은 것은?", ["모든 문단에서 카드가 필요하지 않게 되었다.", "도표를 소리 내어 설명하려 했다.", "과학 주제 글을 선택했다.", "몇 주 만에 점차 참여가 늘었다.", "첫날부터 긴 소설을 완벽히 읽었다."], 4, "즉각적이고 완벽한 변화는 제시되지 않는다.")
    ]),
  makeSet("Exercise 10~12", "The Note Beside the Printer",
    "After three rejected applications, Luis sat in a public library printing another résumé. The printer jammed, and he muttered that nothing worked for him anymore. An older volunteer named Mei cleared the paper and asked what kind of work he hoped to do. Luis expected advice, but Mei listened while he described repairing bicycles for neighbors. She said, ‘That is experience, even if no company gave it a title.’ With her help, he rewrote one section to show the problems he had solved and the people he had served. A week later he applied to a community repair shop. The conversation did not guarantee a job; it helped him recognize evidence of ability that discouragement had hidden.",
    [["rejected", "거절된"], ["résumé", "이력서"], ["discouragement", "낙담"]], [
      q("Mei의 말이 Luis에게 준 핵심 도움은?", ["경험이 없다고 확인했다.", "비공식 활동도 능력의 증거로 보게 했다.", "지원서를 대신 모두 제출했다.", "새 직장을 보장했다.", "자전거 수리를 그만두게 했다."], 1, "이웃 자전거 수리 경험을 실제 문제 해결 능력으로 재해석하게 했다."),
      q("마지막 문장의 의미로 가장 적절한 것은?", ["격려는 결과를 보장하지 않지만 행동할 근거를 다시 보게 할 수 있다.", "낯선 사람의 조언은 언제나 취업을 확정한다.", "공식 직함이 없는 경험은 쓸모없다.", "낙담은 능력과 무관하므로 무시해야 한다.", "도서관 기계가 취업 성공의 핵심이다."], 0, "대화는 취업 보장이 아니라 숨겨진 능력의 증거를 인식하게 한 전환점이다.")
    ])
];

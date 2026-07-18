import { buildQuestion } from "./question-quality.mjs";

const makeSet = (sourceRef, title, passage, vocab, questions, level = "3점") => ({ sourceRef, level, title, passage: `<p>${passage}</p>`, vocab, questions });
const q = buildQuestion;

export const englishPractice2125 = {};

englishPractice2125["21"] = makeSet("Gateway", "Why Here, Not Somewhere Else?",
  "A health department mapped asthma reports and found that the highest rates were not spread evenly across the city. They clustered near two freight routes. Asking only how many residents were ill would have missed the pattern. Investigators next asked why the cases appeared there. Trucks idled beside apartment blocks, while parks and clinics were farther away. The map did not prove that one factor caused every case, but it changed the questions officials asked and the places where they measured air quality. Location became analytical evidence rather than a label attached after the investigation.",
  [["cluster", "몰려 있다"], ["idle", "공회전하다"], ["analytical", "분석적인"]], [
    q("글의 요지로 가장 적절한 것은?", ["질병 수만 세면 원인을 충분히 알 수 있다.", "공간적 분포는 원인과 대책을 묻는 새로운 근거가 된다.", "지도는 모든 인과 관계를 자동으로 증명한다.", "화물 도로는 어느 지역에서나 같은 영향을 준다.", "공원과 진료소의 위치는 건강과 무관하다."], 1, "사례의 위치를 분석하자 노출 조건과 측정 장소에 관한 질문이 달라졌다."),
    q("지도 분석 뒤 officials가 한 일은?", ["모든 도로를 즉시 폐쇄했다.", "도시 전체의 인구를 옮겼다.", "특정 지역의 공기 질을 측정했다.", "천식 보고를 삭제했다.", "진료소 수를 줄였다."], 2, "고위험 지역에서 공기 질을 측정하도록 조사 초점이 바뀌었다.")
  ]);
englishPractice2125["21"].extraSets = [
  makeSet("Exercise 01", "Coordinates with a Privacy Buffer",
    "Researchers studying heat stress once described a village only as ‘a settlement near the river.’ Later teams could not compare the results because several settlements fit that description. A new project recorded coordinates but did not publish the exact homes of participants. Instead, public maps showed data within larger grid squares, while a protected file kept precise locations for authorized analysis. This design recognized two obligations: patterns cannot be tested without reliable place information, and personal safety should not be sacrificed for accuracy. Privacy was protected by controlling access, not by making the research location scientifically useless.",
    [["coordinate", "좌표"], ["authorized", "권한을 받은"], ["sacrifice", "희생하다"]], [
      q("새 프로젝트가 해결하려 한 두 요구는?", ["속도와 저비용", "정확한 위치 분석과 참여자 사생활 보호", "관광 홍보와 인구 증가", "논문 길이와 지도 색상", "개인 이름 공개와 주소 판매"], 1, "정확한 장소 정보와 사생활 보호를 접근 수준 분리로 함께 달성했다."),
      q("이 글에 따르면 privacy 보호 방법은?", ["위치 정보를 전혀 기록하지 않는 것", "모든 사람에게 정확한 주소를 공개하는 것", "공개 지도와 보호된 정밀 자료의 접근 수준을 나누는 것", "연구 지역 이름을 무작위로 바꾸는 것", "자료 비교를 금지하는 것"], 2, "공개 자료는 넓게, 정밀 자료는 권한자에게만 제공했다.")
    ]),
  makeSet("Exercise 02", "The Reliable Number on a Broken Screen",
    "Mara woke at night and saw the digital clock display 88:88. She knew the clock was malfunctioning, so the numbers could not tell her the time. For a moment she wondered whether the power failure had also affected her phone. Then she noticed something certain: she was comparing two sources, doubting one, and planning a test. Even if both screens were unreliable, the act of questioning them was occurring. The situation did not make every belief true. It showed that doubt itself requires an activity of thought. A faulty signal can undermine what we know about the world without erasing the thinker who recognizes the fault.",
    [["malfunction", "오작동하다"], ["undermine", "약화하다"], ["erase", "지우다"]], [
      q("마지막 문장이 시사하는 바로 가장 적절한 것은?", ["모든 기계 신호는 참이다.", "외부 정보가 불확실해도 의심하는 사고의 존재는 확인된다.", "시간은 인간의 생각과 무관하다.", "두 화면이 같으면 세계도 꿈이다.", "오작동은 추론을 불가능하게 한다."], 1, "정보의 신뢰성은 흔들려도 그것을 의심하고 비교하는 사고 활동은 존재한다."),
      q("Mara가 확실히 알 수 있었던 것은?", ["정확한 현재 시각", "전력 회사의 고장 원인", "자신이 두 정보를 비교하고 있다는 사실", "휴대전화가 완벽하다는 사실", "모든 화면이 동시에 고장 났다는 사실"], 2, "의심하고 시험을 계획하는 사고 활동 자체는 확인할 수 있었다.")
    ]),
  makeSet("Exercise 03", "The Uncertain Mango Harvest",
    "Four families shared a small mango-drying oven. Each tree’s harvest varied with rain and insects, so no family produced the most fruit every year. When one family had a large crop, it dried only what it needed and contributed the remaining oven space and fruit to the others. In a poor year, that family received dried mango from neighbors. The exchange was not equal each week, but it became balanced across seasons. Keeping every surplus would have produced waste during abundant harvests and hunger during failed ones. Sharing converted unpredictable individual yields into a more stable community supply.",
    [["harvest", "수확량"], ["surplus", "잉여"], ["yield", "산출량"]], [
      q("공유 체계가 안정성을 높인 방식은?", ["모든 나무의 수확량을 같게 만들었다.", "서로 다른 시기의 잉여와 부족을 상쇄했다.", "망고 생산을 영구 중단했다.", "한 가족이 모든 열매를 소유했다.", "주간 교환량을 항상 동일하게 했다."], 1, "계절마다 성공한 가족이 달라 잉여를 나누면 장기적으로 위험이 분산된다."),
      q("글의 제목으로 가장 적절한 것은?", ["A Community Insurance Made of Mangoes", "The Family That Owned Every Tree", "Why Drying Always Creates Hunger", "Equal Harvests in Every Season", "An Oven That Could Not Be Shared"], 0, "예측 불가능한 수확을 나눔으로써 상호 보험을 만든 사례다.")
    ])
];

englishPractice2125["22"] = makeSet("Gateway", "A Riverbank That Is Allowed to Move",
  "Engineers protecting a riverside path noticed that spring water repeatedly cut into one bend. A concrete wall could have fixed the channel, but it would have pushed faster water toward houses downstream. The team instead moved the path ten meters inland and planted flexible reeds along the bank. During floods, the bank could shift within a designated zone while roots slowed erosion. The design did not leave the river unmanaged. It set limits around movement rather than demanding that movement disappear. By treating change as expected behavior, the project reduced the risk created by pretending the river would remain still.",
  [["bend", "굽이"], ["designated", "지정된"], ["erosion", "침식"]], [
    q("이 설계가 concrete wall과 다른 점은?", ["하천 변화를 완전히 무시했다.", "일정 범위의 이동을 허용하면서 피해를 줄였다.", "물을 모두 다른 지역으로 보냈다.", "강변 식물을 제거했다.", "주택을 강 한가운데 세웠다."], 1, "고정 대신 허용 구역과 식생으로 변동성을 관리했다."),
    q("글쓴이가 비판하는 가정은?", ["갈대 뿌리가 침식을 늦출 수 있다.", "하천은 인위적으로 고정하면 그대로 머물 것이다.", "하류에도 주택이 존재한다.", "봄에는 유량이 달라질 수 있다.", "관리에는 경계가 필요하다."], 1, "강을 정지시킬 수 있다는 가정이 다른 위험을 낳을 수 있다고 본다.")
  ]);
englishPractice2125["22"].extraSets = [
  makeSet("Exercise 01", "The Crossing Between Two Forests",
    "A highway divided a forest used by wildcats. Cameras showed cats approaching the road but rarely crossing it, and genetic tests later found growing differences between populations on opposite sides. Conservationists built a vegetated bridge above the traffic and guided animals toward it with fencing. Within three years, tracks and genetic samples indicated movement in both directions. The project showed why habitat area alone can mislead. Two large patches may look sufficient on a map, yet function as small isolated islands when animals cannot move between them.",
    [["vegetated", "식물이 심어진"], ["population", "개체군"], ["isolated", "고립된"]], [
      q("vegetated bridge의 주된 목적은?", ["차량 속도를 높이는 것", "분리된 개체군 사이의 이동과 유전 교류를 회복하는 것", "숲의 전체 면적을 줄이는 것", "고양이를 한쪽에만 가두는 것", "고속도로를 더 넓히는 것"], 1, "다리와 유도 울타리가 양방향 이동을 회복했다."),
      q("habitat area alone can mislead의 의미는?", ["지도 면적이 넓어도 연결되지 않으면 실제 보전 기능이 낮을 수 있다.", "모든 지도는 고속도로를 표시하지 않는다.", "작은 숲은 언제나 큰 숲보다 좋다.", "유전 검사는 이동을 측정할 수 없다.", "서식지의 위치는 종과 무관하다."], 0, "면적뿐 아니라 연결성이 실제 서식지 가치를 결정한다.")
    ]),
  makeSet("Exercise 02", "Heat from Yesterday’s Coffee Grounds",
    "A university cafeteria sent tons of wet coffee grounds to a landfill each year. A pilot facility began mixing the grounds with food scraps in sealed tanks. Microbes produced biogas, which heated two dormitories, while the remaining material became soil conditioner for campus gardens. The system required energy to operate and careful control of moisture, so it was not impact-free. Still, it replaced part of the natural-gas supply and prevented organic waste from releasing methane in an open landfill. Its value came from solving two linked problems—waste treatment and energy production—with one managed process.",
    [["sealed", "밀폐된"], ["biogas", "바이오가스"], ["conditioner", "개량재"]], [
      q("pilot facility의 주요 이점은?", ["폐기물과 에너지 문제를 함께 줄였다.", "모든 운영 에너지를 없앴다.", "정원 토양을 매립지로 보냈다.", "천연가스 사용을 늘렸다.", "메탄을 공기 중에 방출했다."], 0, "유기 폐기물을 처리하면서 열에너지를 생산했다."),
      q("글쓴이의 태도로 가장 적절한 것은?", ["완전히 무비용인 기술로 찬양한다.", "관리 조건을 인정하면서 순환경 이점을 평가한다.", "미생물 사용은 언제나 위험하다고 본다.", "매립이 가장 지속 가능하다고 주장한다.", "에너지 생산과 폐기물 처리는 무관하다고 본다."], 1, "운영 부담을 인정하지만 두 문제를 연결해 해결하는 이점을 강조한다.")
    ]),
  makeSet("Exercise 03", "When the Grazers Disappeared",
    "On a grassland reserve, managers removed nearly all large grazers to protect young trees. The trees initially increased, but tall dry grass soon formed a continuous layer. Small patches of bare ground disappeared, ground-nesting birds lost feeding sites, and wildfires spread farther. Managers later returned a limited number of grazers and allowed them to move across a wider area. Hooves opened soil patches, feeding kept some grasses short, and dung moved seeds. The animals were not simply consumers of vegetation. At an appropriate density, their disturbance created a varied landscape used by many other species.",
    [["grazer", "초식 동물"], ["continuous", "연속적인"], ["disturbance", "교란"]], [
      q("large grazers의 생태적 역할은?", ["모든 식물을 제거한다.", "적정 밀도에서 다양한 서식 구조를 만든다.", "산불을 항상 증가시킨다.", "새의 먹이터를 없앤다.", "나무의 성장만 촉진한다."], 1, "먹기·밟기·배설이 높이와 토양 상태를 다양하게 만들었다."),
      q("관리자의 초기 조치가 낳은 예상 밖 결과는?", ["나무가 즉시 모두 사라졌다.", "건조한 풀이 이어져 산불이 더 멀리 퍼졌다.", "초식 동물 수가 자연히 증가했다.", "맨땅이 크게 늘었다.", "새의 먹이터가 많아졌다."], 1, "초식 동물 제거 뒤 마른 풀이 연속층을 이루어 산불 확산이 커졌다.")
    ])
];

englishPractice2125["23"] = makeSet("Gateway", "The Dripping Tap That Would Not Repeat",
  "A physicist adjusted a tap so that drops fell into a cup at nearly regular intervals. At first the pattern was simple: one large drop followed another. As the flow increased, pairs of different-sized drops appeared. Beyond another threshold, the intervals became irregular, and a tiny adjustment produced a very different sequence. The tap had not become random because someone shook it. Repeated feedback between water pressure and the forming drop amplified small differences. The experiment illustrates that orderly behavior can split into new patterns and eventually become difficult to predict when a nonlinear system crosses critical thresholds.",
  [["interval", "간격"], ["amplify", "증폭하다"], ["threshold", "문턱값"]], [
    q("불규칙한 패턴이 나타난 조건은?", ["물이 완전히 멈췄을 때", "비선형 피드백이 임계점을 넘었을 때", "누군가 컵을 흔들었을 때만", "모든 물방울 크기가 같을 때", "압력을 측정하지 않았을 때"], 1, "작은 차이를 증폭하는 비선형 체계가 임계점을 넘자 예측이 어려워졌다."),
    q("글의 제목으로 가장 적절한 것은?", ["From Regular Drops to Chaotic Timing", "Why Every Tap Is Random", "The Cup That Controlled Water Pressure", "Removing Feedback from All Systems", "A Perfectly Repeating Nonlinear Pattern"], 0, "규칙적 물방울이 분기와 피드백을 거쳐 불규칙해지는 변화가 중심이다.")
  ]);
englishPractice2125["23"].extraSets = [
  makeSet("Exercise 01", "A Ball That Seemed to Float",
    "Two cyclists rode side by side at the same speed. One gently tossed a ball toward the other. To a person standing beside the road, the ball moved forward quickly because it carried the bicycle’s speed as well as the speed of the toss. To the second cyclist, however, the ball approached slowly and was easy to catch. Nothing about the ball itself had changed between observations. The difference lay in the reference frame used to measure motion. A high speed relative to the road can coexist with a low speed—and therefore a small relative momentum—between nearby moving observers.",
    [["coexist", "동시에 존재하다"], ["reference frame", "기준계"], ["momentum", "운동량"]], [
      q("두 관찰자가 다르게 본 이유는?", ["공의 질량이 갑자기 변해서", "서로 다른 기준계에서 속도를 측정해서", "두 자전거가 반대 방향으로 달려서", "바람이 공을 멈춰서", "한 관찰자가 눈을 감아서"], 1, "도로 기준과 함께 움직이는 자전거 기준의 상대 속도가 다르다."),
      q("두 번째 cyclist가 공을 쉽게 잡은 이유는?", ["공이 도로에 대해 정지해 있어서", "자신에 대한 공의 상대 속도가 작아서", "공의 질량이 없어서", "자전거가 멈춰 있어서", "중력이 작용하지 않아서"], 1, "같은 속도로 이동하는 기준에서는 공이 천천히 접근한다.")
    ]),
  makeSet("Exercise 02", "The Night Watcher’s Catalogue",
    "In 1819, amateur observer Leila Hart began recording a variable star from her rooftop. She did not own the largest telescope, but she used the same comparison stars and wrote the viewing conditions beside every estimate. Over twelve years, the repeated measurements revealed a cycle that short visits by professional observatories had missed. Later astronomers corrected several of her dates after comparing weather records, yet the catalogue remained valuable because its method was transparent. Hart’s contribution was not a single dramatic discovery. It was a consistent record that allowed later researchers to test, revise, and extend her observations.",
    [["variable star", "변광성"], ["estimate", "추정치"], ["transparent", "투명한"]], [
      q("Hart의 기록이 가치 있었던 주된 이유는?", ["모든 수치가 수정 불가능했기 때문에", "일관된 방법과 조건 기록으로 장기 주기를 검토할 수 있었기 때문에", "가장 큰 망원경을 소유했기 때문에", "날씨 자료를 숨겼기 때문에", "전문 관측소가 존재하지 않았기 때문에"], 1, "장기적이고 투명한 기록이 후대 검증과 확장을 가능하게 했다."),
      q("Hart의 기여를 가장 잘 설명한 것은?", ["한 번의 극적인 관측", "수정 가능한 체계적 장기 자료", "기상 기록의 폐기", "다른 천문학자의 관측 금지", "비교 별을 매번 바꾸는 방법"], 1, "일관된 자료 축적과 검증 가능성이 핵심이다.")
    ]),
  makeSet("Exercise 03", "Life in a Salt Crystal",
    "Researchers dissolved salt crystals taken from an ancient dry lake and found living microbes inside tiny pockets of trapped water. The organisms had survived conditions with almost no free water and extremely high salinity. Their discovery did not mean that large animals could live there. It expanded the known limits of cellular life. Because such organisms are invisible without instruments and grow slowly in laboratories, ordinary observation had missed them. Genetic analysis then showed that several were unrelated to familiar disease-causing bacteria. The finding reminded scientists that the visible organisms around humans represent only a narrow sample of Earth’s biological diversity.",
    [["salinity", "염도"], ["cellular", "세포의"], ["diversity", "다양성"]], [
      q("이 발견이 시사하는 바로 가장 적절한 것은?", ["큰 동물도 소금 결정 안에서 산다.", "생명 가능 환경은 인간이 눈으로 보는 범위보다 넓다.", "모든 미생물은 질병을 일으킨다.", "유전 분석은 미생물을 구별하지 못한다.", "극한 환경에는 물이 전혀 없다."], 1, "보이지 않던 미생물이 극한 환경에서 살아 생명의 범위를 확장했다."),
      q("ordinary observation이 미생물을 놓친 이유로 언급된 것은?", ["너무 크고 빠르게 자라서", "도구 없이는 보이지 않고 배양이 느려서", "항상 밝은 색을 띠어서", "인간과 같은 장소에만 살아서", "유전자가 없어서"], 1, "작은 크기와 느린 성장 때문에 일상 관찰에서 드러나지 않았다.")
    ])
];

englishPractice2125["24"] = makeSet("Gateway", "The Trail Beyond the Last Marker",
  "Mina began the mountain race confident that she could finish under two hours. Thick fog soon hid the route, and at the final marked turn she realized she had followed the wrong ridge. Her confidence collapsed into panic. Then she heard a volunteer’s whistle below and spotted a line of orange flags she had missed. After returning to the course, she stopped checking her watch and focused on each marker. She crossed the finish much later than planned, exhausted but smiling. The result was slower than her goal, yet finding her way after being lost had changed disappointment into relief and pride.",
  [["ridge", "산등성이"], ["collapse", "무너지다"], ["exhausted", "지친"]], [
    q("Mina의 심경 변화로 가장 적절한 것은?", ["confident → panicked → relieved", "bored → jealous → angry", "grateful → indifferent → ashamed", "worried → relaxed → disappointed", "excited → proud → terrified"], 0, "자신감 있게 출발했으나 길을 잃고 당황한 뒤 경로를 찾아 안도했다."),
    q("완주 뒤 Mina가 웃은 이유는?", ["기록을 경신해서", "길을 잃은 뒤 스스로 경로를 회복했기 때문에", "경기가 취소되어서", "다른 선수의 시간을 빼앗아서", "안개가 전혀 없었기 때문에"], 1, "목표 시간은 놓쳤지만 위기를 극복한 성취를 느꼈다.")
  ]);
englishPractice2125["24"].extraSets = [
  makeSet("Exercise 01", "The Market as a Living Museum",
    "Visitors once came to Old Port mainly to photograph its stone gate and maritime museum. A new walking program now begins before dawn with fish sellers preparing their stalls. Travelers learn auction gestures, taste a breakfast eaten by dockworkers, and hear residents explain how the harbor has changed. The gate remains on the route, but it is no longer the entire experience. The program treats culture not only as objects preserved from the past but also as routines practiced in the present. By participating respectfully in daily activity, visitors encounter meanings that display labels alone cannot provide.",
    [["auction", "경매"], ["dockworker", "부두 노동자"], ["routine", "일상 관행"]], [
      q("walking program이 보여 주는 문화 관광의 변화는?", ["유적 사진에서 일상 활동의 참여로 확장", "지역 주민과의 접촉을 완전 금지", "현재 문화를 배제하고 과거만 관람", "박물관을 유일한 관광 장소로 지정", "모든 시장 활동을 공연으로 대체"], 0, "유적과 함께 시장의 실제 일상과 주민 설명을 경험한다."),
      q("display labels alone의 한계는?", ["건축물의 높이를 측정하지 못한다.", "현재 실천되는 문화의 의미를 충분히 전달하지 못한다.", "여행자의 사진 촬영을 늘린다.", "시장 가격을 낮춘다.", "경매 손짓을 자동으로 번역한다."], 1, "현재의 루틴과 참여 경험은 설명문만으로 얻기 어렵다.")
    ]),
  makeSet("Exercise 02", "The Numbers Behind a Goalkeeper",
    "A goalkeeper may be remembered for one dramatic save, but a team evaluates the position through many numbers. Coaches record the percentage of shots stopped, passes completed under pressure, and successful claims of high crosses. Agents use those figures in salary negotiations, while analysts compare performance across seasons. Fans in fantasy leagues also assign points to saves and clean sheets, although each league weights them differently. The numbers do not capture courage or communication perfectly. Still, they shape who starts, who receives a new contract, and how supporters rank players they may never watch in a full match.",
    [["claim", "공중 공을 처리하다"], ["clean sheet", "무실점 경기"], ["weight", "가중치를 두다"]], [
      q("글의 주제로 가장 적절한 것은?", ["골키퍼 평가와 보상에 미치는 수치의 영향", "모든 스포츠 통계의 무가치함", "축구에서 골키퍼를 없애야 하는 이유", "팬이 경기를 전부 보는 방법", "용기만으로 선발 선수를 정하는 과정"], 0, "여러 통계가 선발·계약·팬 순위에 영향을 준다."),
      q("글쓴이의 관점은?", ["숫자가 선수의 모든 특성을 완벽히 포착한다.", "숫자에는 한계가 있지만 실제 결정에 큰 영향을 준다.", "통계는 팬에게만 쓰인다.", "리그마다 점수 기준이 완전히 같다.", "극적인 한 장면만 평가해야 한다."], 1, "포착하지 못하는 요소를 인정하면서도 숫자의 실질적 힘을 강조한다.")
    ]),
  makeSet("Exercise 03", "Forest Railway Weekend",
    "The Forest Railway Weekend includes a return train ticket, two nights at Lake Hotel, breakfast on both mornings, and a guided walk on Saturday. Dinner is included only on the first night. Each adult receives a 15-dollar voucher for the station café; children receive a free activity booklet instead. Guests must reserve by September 5 for travel between September 20 and October 10. Bicycles may be carried for an additional fee if space is booked in advance. Reservations can be made online at any time or by phone from 9 a.m. to 5 p.m. on weekdays.",
    [["voucher", "상품권"], ["in advance", "미리"], ["additional fee", "추가 요금"]], [
      q("안내문의 내용과 일치하는 것은?", ["두 날 저녁 식사가 모두 포함된다.", "성인은 역 카페용 15달러 상품권을 받는다.", "어린이도 성인과 같은 상품권을 받는다.", "자전거는 예약 없이 무료 운송된다.", "전화 예약은 주말 밤에도 가능하다."], 1, "성인별 15달러 카페 상품권이 명시되어 있다."),
      q("여행 조건으로 적절하지 않은 것은?", ["왕복 기차표 포함", "토요일 안내 산책 포함", "9월 5일까지 예약", "자전거 공간 사전 예약", "매일 두 번의 무료 저녁 식사"], 4, "저녁은 첫날만 포함된다.")
    ], "2점")
];

englishPractice2125["25"] = makeSet("Gateway", "Notes That Make Space for a Reply",
  "In a seminar, Jiho tried to write every sentence spoken by his classmates. Because he was copying, he rarely looked up and often missed the moment to respond. He changed his method by dividing the page into three columns: claim, evidence, and question. Instead of recording complete sentences, he wrote short phrases and placed a star beside ideas he wanted to challenge. The notes became less complete as a transcript but more useful for participation. They helped him remember the discussion’s structure, connect one speaker to another, and formulate a reply before the topic had already moved on.",
  [["seminar", "세미나"], ["transcript", "말을 옮긴 기록"], ["formulate", "정리하여 표현하다"]], [
    q("Jiho가 메모 방식을 바꾼 목적은?", ["모든 말을 글자 그대로 복사하려고", "토론 구조를 파악하고 발언을 준비하려고", "다른 학생의 의견을 무시하려고", "수업 뒤에만 생각하려고", "질문을 하지 않으려고"], 1, "주장·근거·질문을 구분해 능동적으로 반응할 준비를 했다."),
    q("새 메모의 특징으로 가장 적절한 것은?", ["완전한 속기지만 참여에는 도움이 안 됐다.", "불완전한 기록이지만 사고와 응답에는 더 유용했다.", "교사의 말만 기록했다.", "증거와 주장을 구별하지 않았다.", "수업이 끝난 뒤 작성했다."], 1, "전사 정확성은 낮아졌지만 구조화와 발언 준비 기능은 커졌다.")
  ]);
englishPractice2125["25"].extraSets = [
  makeSet("Exercise 01", "A Workshop with Clear Freedom",
    "An art teacher told students they could build any object from recycled cardboard. The first session produced confusion: some groups argued over tools, while others waited because they did not know what counted as finished. The teacher did not replace the open task with one model. She clarified three conditions—each object had to stand on its own, use no new plastic, and include a written test plan. Within those boundaries, students chose their own designs and schedules. The structure did not reduce creativity. It made independent decisions possible by giving everyone a shared understanding of the goal and the limits.",
    [["boundary", "경계"], ["independent", "독립적인"], ["clarify", "명확히 하다"]], [
      q("이 글이 보여 주는 교육 원리는?", ["자유로운 과제에는 목표나 조건이 없어야 한다.", "명확한 외적 구조가 자율적 활동을 가능하게 할 수 있다.", "학생은 같은 모형을 반드시 복제해야 한다.", "창의성은 협업과 양립할 수 없다.", "교사는 도구 사용을 금지해야 한다."], 1, "공유 목표와 경계가 혼란을 줄이고 선택을 가능하게 했다."),
      q("teacher가 하지 않은 것은?", ["완성 조건을 명확히 했다.", "모든 학생에게 하나의 동일한 모형을 만들게 했다.", "플라스틱 사용 제한을 제시했다.", "시험 계획을 요구했다.", "경계 안에서 설계를 선택하게 했다."], 1, "열린 과제를 동일 모형으로 대체하지 않았다.")
    ]),
  makeSet("Exercise 02", "The Sentence Before the Correction",
    "A music instructor used to begin feedback with, ‘No, that is wrong.’ Students became tense before hearing the useful explanation that followed. She changed the opening to, ‘The rhythm is steady here; now compare the next measure.’ The technical correction was still direct, but it began with specific information rather than a threat signal. Students tried the passage again more quickly and asked more questions. Positive language did not mean praising everything. It meant framing error as a feature to examine, so attention could remain on the task instead of shifting toward self-protection.",
    [["steady", "일정한"], ["measure", "마디"], ["self-protection", "자기 방어"]], [
      q("바뀐 피드백의 효과는?", ["기술적 오류를 숨겼다.", "위협감을 줄이고 과제에 주의를 유지하게 했다.", "모든 연주를 칭찬했다.", "학생의 질문을 줄였다.", "교정 내용을 없앴다."], 1, "직접 교정은 유지하되 위협적 시작을 구체적 관찰로 바꿨다."),
      q("positive language에 대한 글쓴이의 관점은?", ["무조건적인 칭찬이다.", "오류를 다루지 않는 방법이다.", "오류를 검토 가능한 정보로 제시하는 방식이다.", "학생을 경쟁시키는 말이다.", "교사의 전문성을 숨기는 표현이다."], 2, "긍정어는 모든 것을 칭찬하는 것이 아니라 오류를 위협 대신 정보로 다루는 방식이다.")
    ]),
  makeSet("Exercise 03", "When Typing Becomes Too Visible",
    "A skilled typist can write while thinking about ideas rather than individual keys. During a speed test, however, Mira began asking herself which finger should press each letter. Her pace slowed, and she made errors in words she normally typed without effort. The problem was not loss of knowledge. A procedure that had become automatic was pulled back into conscious control, where working memory had to manage too many tiny choices. After she focused again on whole phrases instead of finger movements, her speed recovered. Expertise often depends on allowing practiced sequences to run without constant inspection.",
    [["procedure", "절차"], ["working memory", "작업 기억"], ["inspection", "점검"]], [
      q("Mira의 수행이 나빠진 이유는?", ["키보드를 처음 보았기 때문에", "자동화된 동작을 지나치게 의식적으로 통제했기 때문에", "아이디어를 생각하지 않았기 때문에", "손가락이 전혀 움직이지 않았기 때문에", "타자 지식을 완전히 잃었기 때문에"], 1, "숙련 절차를 의식적으로 세분화하면서 작업 기억 부담이 커졌다."),
      q("글의 결론으로 가장 적절한 것은?", ["숙련자는 모든 작은 동작을 계속 감시해야 한다.", "연습된 순서는 일정 부분 자동으로 작동하게 둘 필요가 있다.", "자동화는 모든 학습을 방해한다.", "속도보다 손가락 이름 암기가 중요하다.", "작업 기억에는 한계가 없다."], 1, "전문성은 연습된 절차의 자동 실행에 의존할 수 있다.")
    ])
];

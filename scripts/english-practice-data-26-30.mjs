import { buildQuestion } from "./question-quality.mjs";

const makeSet = (sourceRef, title, passage, vocab, questions, level = "3점") => ({ sourceRef, level, title, passage: `<p>${passage}</p>`, vocab, questions });
const q = buildQuestion;

export const englishPractice2630 = {};

englishPractice2630["26"] = makeSet("Gateway", "The Detective with Three Authors",
  "Detective Mara Venn first appeared in a short novel as a quiet observer who avoided violence. After the original writer died, a second author turned her into an action hero for six sequels. Years later, a graphic-novel team restored her patience but gave her a new history as a former journalist. Readers argued about which Mara was ‘real,’ yet each version preserved enough familiar features to remain recognizable. A recurring character is not simply repeated. When many creators work across changing audiences and formats, continuity becomes a negotiation between inherited traits and new cultural expectations.",
  [["sequel", "속편"], ["recurring", "되풀이해 등장하는"], ["continuity", "연속성"]], [
    q("글의 주제로 가장 적절한 것은?", ["장기 연재 인물은 여러 창작자를 거치며 연속성과 변화를 함께 보인다.", "한 인물은 첫 작품 뒤 다시 등장할 수 없다.", "그래픽 노블은 소설보다 항상 원작에 충실하다.", "독자는 등장인물의 변화를 전혀 받아들이지 않는다.", "작가가 바뀌면 모든 특성이 사라진다."], 0, "여러 작가와 형식이 핵심 특성을 유지하면서도 인물을 변화시킨다."),
    q("continuity becomes a negotiation의 의미는?", ["모든 설정을 그대로 복제한다는 뜻", "기존 특성과 새 기대 사이에서 무엇을 유지·변경할지 조정한다는 뜻", "독자가 작품을 쓰지 못하게 한다는 뜻", "후속 작품을 중단한다는 뜻", "인물 이름만 남긴다는 뜻"], 1, "계승과 변화 사이의 선택을 협상에 비유한다.")
  ]);
englishPractice2630["26"].extraSets = [
  makeSet("Exercise 01", "The Sculpture Beside the Tools",
    "In a gallery, a small copper sculpture looked smooth and self-contained. The label listed its date and materials. At the artist’s workshop, however, the same sculpture sat beside bent wire, burned cloth, and photographs of a demolished factory. Scratches on the work echoed the factory’s damaged roof. The additional objects did not dictate one correct interpretation, but they made visible the questions that had shaped the work. When the sculpture returned to the gallery, curators added a photograph of the workbench. Viewers could still attend to form, yet they also encountered the world from which that form had emerged.",
    [["self-contained", "그 자체로 완결된"], ["demolished", "철거된"], ["dictate", "강요하다"]], [
      q("workshop의 맥락이 제공한 것은?", ["작품의 판매 가격", "작품 형성에 영향을 준 질문과 현실의 단서", "유일하게 가능한 해석", "작품의 새로운 제작 날짜", "구리의 화학 공식"], 1, "도구와 사진이 작품의 흔적을 철거된 공장과 연결했다."),
      q("curators가 사진을 추가한 목적은?", ["조각을 가리려고", "형식 감상과 제작 맥락을 함께 제공하려고", "작가의 작업실을 폐쇄하려고", "모든 관람객에게 같은 감정을 강요하려고", "작품 재료를 바꾸려고"], 1, "작품 자체와 그것이 나온 세계를 함께 볼 수 있게 했다.")
    ]),
  makeSet("Exercise 02", "The Quiet Cup",
    "At a business meeting, Jun left his empty cup upright on the table. In his own workplace this meant nothing; staff collected cups after every meeting. His visitors, however, came from a company where turning an empty cup upside down signaled that no more discussion was welcome. Because Jun did not know the convention, he could not intend either message. Still, the visitors interpreted the upright cup as a request to continue and reopened a topic Jun thought had ended. The physical signal was visible to everyone, but its communicative meaning depended on shared cultural knowledge and assumptions about intention.",
    [["upright", "똑바로 세운"], ["convention", "관습"], ["assumption", "가정"]], [
      q("오해가 생긴 이유는?", ["컵이 보이지 않았기 때문에", "같은 행동에 대한 공유 관습이 달랐기 때문에", "Jun이 명시적으로 계속하라고 말했기 때문에", "방문객이 회의에 참석하지 않았기 때문에", "모든 문화에서 컵 의미가 같기 때문에"], 1, "보이는 신호는 같았지만 문화적 관습과 의도 추정이 달랐다."),
      q("글의 핵심 구분은?", ["물질과 에너지", "보이는 정보와 해석된 의사소통 의미", "말과 글의 속도", "회사 규모와 이익", "회의와 식사의 가격"], 1, "컵의 상태는 정보지만 의사소통 의미는 공유 지식에 따라 달라졌다.")
    ]),
  makeSet("Exercise 03", "The Story Before the Donation",
    "A museum tested two descriptions beside a display about flood recovery. One panel listed the number of damaged homes and repaired bridges. The other followed a shop owner who reopened a kitchen and cooked meals for neighbors while her own home was being repaired. Visitors learned the same basic facts from both panels, but those who read the narrative spent longer at the community-aid table and were more likely to take a volunteer leaflet. The story did not replace evidence. It organized evidence around a person’s goals and feelings, allowing readers to simulate decisions that raw totals left abstract.",
    [["recovery", "복구"], ["simulate", "가상으로 경험하다"], ["abstract", "추상적인"]], [
      q("narrative panel이 행동에 영향을 준 방식은?", ["모든 통계를 삭제해서", "사실을 인물의 목표와 감정에 연결해 경험하게 해서", "홍수 피해를 축소해서", "기부를 강제해서", "다리 수를 바꿔서"], 1, "같은 사실을 인물 중심으로 조직해 독자가 결정과 감정을 가상 경험하게 했다."),
      q("글쓴이에 따르면 story와 evidence의 관계는?", ["이야기는 증거를 대체해야 한다.", "이야기는 증거를 인간 경험의 구조 안에 배치할 수 있다.", "증거는 이야기에 방해가 된다.", "수치 자료는 항상 거짓이다.", "두 형식은 함께 사용할 수 없다."], 1, "이야기는 증거를 없애지 않고 이해와 공감을 돕는 방식으로 조직했다.")
    ])
];

englishPractice2630["27"] = makeSet("Gateway", "A Red Light with Two Meanings",
  "A sensor on a greenhouse door shows a red light whenever the door has remained open for more than thirty seconds. The light is information: it reports a measured condition. For a worker who knows the system, it also means ‘close the door to protect the plants.’ A visitor may see the same light as decoration or as a sign that entry is forbidden. The electrical signal does not contain one complete meaning by itself. Meaning emerges when data are interpreted through a purpose, a situation, and prior knowledge. Confusing the signal with its interpretation makes disagreement look like faulty observation when the real difference may be context.",
  [["sensor", "감지기"], ["condition", "상태"], ["interpretation", "해석"]], [
    q("red light가 보여 주는 정보와 의미의 관계는?", ["정보 자체가 모든 사람에게 같은 지시를 준다.", "측정된 신호는 같아도 맥락 지식에 따라 의미가 달라진다.", "의미는 전기 신호와 무관하게 항상 하나다.", "방문객은 신호를 볼 수 없다.", "정보가 많을수록 해석은 필요 없다."], 1, "같은 빨간 불이 작업자와 방문자에게 다르게 해석된다."),
    q("disagreement가 faulty observation처럼 보일 수 있는 이유는?", ["사람들이 서로 다른 신호를 보아서", "같은 데이터를 서로 다른 맥락에서 해석한 차이를 놓쳐서", "감지기가 문을 닫아서", "식물이 빛을 내서", "목적이 항상 같아서"], 1, "관찰이 아니라 의미 부여의 차이일 수 있다.")
  ]);
englishPractice2630["27"].extraSets = [
  makeSet("Exercise 01", "A Hashtag That Needed a Meeting",
    "Residents used a hashtag to oppose the removal of neighborhood trees. Thousands reposted photographs, and the city announced that it would review the plan. Online attention created speed and visibility, but after two weeks few people knew when the planning committee met or how to submit formal evidence. A small group then organized an offline workshop, divided the proposal into sections, and assigned residents to speak at the hearing. The campaign succeeded in protecting one street and revising another. The hashtag opened a public door; organization was required to walk through it.",
    [["hashtag", "해시태그"], ["visibility", "가시성"], ["hearing", "공청회"]], [
      q("마지막 문장이 의미하는 것은?", ["온라인 관심만으로 모든 정책이 자동 변경된다.", "디지털 확산은 기회를 만들지만 제도적 행동이 뒤따라야 한다.", "오프라인 회의는 캠페인을 방해한다.", "해시태그는 공공 문제에 쓸 수 없다.", "주민은 공식 증거를 제출하지 않아야 한다."], 1, "온라인 가시성을 실제 정책 절차와 조직 행동으로 연결해야 했다."),
      q("캠페인의 한계가 드러난 지점은?", ["사진이 전혀 공유되지 않았다.", "공식 회의와 증거 제출 방법을 아는 사람이 적었다.", "도시가 검토를 거부했다.", "주민이 나무를 원하지 않았다.", "모든 거리가 이미 보호되었다."], 1, "확산과 달리 제도 참여 정보와 조직이 부족했다.")
    ]),
  makeSet("Exercise 02", "The Grocery Store Beyond the Station",
    "A new rail line allowed commuters to live farther from the city center. Within five years, housing spread around three outer stations. Supermarkets and schools followed the residents, while large parking areas appeared beside the platforms. The line connected the suburbs to downtown, yet it also encouraged daily life to separate into distant zones: home near one station, work downtown, and shopping beside another. Transport did not simply reduce travel time. By making distance manageable, it reorganized land use and distributed activities across a wider region.",
    [["commuter", "통근자"], ["platform", "승강장"], ["reorganize", "재구성하다"]], [
      q("rail line이 지역에 미친 영향은?", ["모든 활동을 도심 한곳에 집중시켰다.", "거리 이동을 가능하게 하여 주거·일·쇼핑을 더 넓게 분산시켰다.", "교외 주택을 모두 철거했다.", "통근을 불가능하게 했다.", "학교와 상점을 도심에서 금지했다."], 1, "교통 연결이 외곽 주거와 서비스 확장을 촉진했다."),
      q("distance manageable의 결과로 가장 적절한 것은?", ["토지 이용이 더 넓은 지역에 재조직됨", "모든 이동 시간이 0이 됨", "도시 중심이 사라짐", "주민이 기차를 이용하지 않음", "상점이 주택 안으로 이동함"], 0, "거리 장벽이 낮아지며 생활 기능이 지역 전체에 분산되었다.")
    ]),
  makeSet("Exercise 03", "Where People Notice AI",
    "A survey compared public and engineer awareness of four AI applications. For voice assistants, awareness was 72% among engineers and 60% among the public. For medical image analysis, the figures were 66% and 30%. Delivery robots were recognized by 40% of engineers and 45% of the public. Fraud detection was least recognized in both groups, at 28% and 20%. The widest gap appeared in medical image analysis, while delivery robots were the only field better known to the general public.",
    [["awareness", "인지도"], ["fraud detection", "사기 탐지"], ["gap", "격차"]], [
      q("도표 설명과 일치하지 않는 것은?", ["음성 비서는 두 집단 모두 과반이 안다.", "의료 영상 분석의 집단 차이가 가장 크다.", "배송 로봇은 일반인의 인지도가 더 높다.", "사기 탐지는 두 집단 모두 가장 낮다.", "엔지니어의 의료 영상 인지도는 일반인의 세 배를 넘는다."], 4, "66%는 30%의 세 배인 90%를 넘지 않는다."),
      q("두 집단의 인지도가 역전된 분야는?", ["음성 비서", "의료 영상 분석", "배송 로봇", "사기 탐지", "모든 분야"], 2, "배송 로봇만 일반인 45%가 엔지니어 40%보다 높다.")
    ], "2점")
];

englishPractice2630["28"] = makeSet("Gateway", "The Weak Tie That Found a Studio",
  "Yuri posted photographs of her ceramic work in a local makers’ group. Most members were not close friends, but they exchanged information about clay suppliers, exhibitions, and unused studio space. Months later, a member Yuri had met only once told her about an affordable workshop becoming available. A close friend could offer encouragement, yet did not have access to that particular network. The online group created social capital by linking people through shared practice and expectations of reciprocal help. Its value was not measured by emotional intimacy alone, but by the resources that became reachable through the connection.",
  [["ceramic", "도예의"], ["reciprocal", "상호적인"], ["intimacy", "친밀감"]], [
    q("온라인 그룹이 Yuri에게 제공한 사회적 자본은?", ["모든 회원과의 깊은 우정", "공유 관심을 통한 정보와 작업 공간 접근", "무료 도자기 판매 보장", "친구 관계의 완전한 대체", "개인 작업의 비공개"], 1, "느슨한 관계망을 통해 공급처·전시·공간 정보에 접근했다."),
    q("글이 강조하는 관계망의 가치는?", ["감정적 친밀감만으로 결정된다.", "연결을 통해 접근 가능해지는 자원에도 있다.", "가까운 친구에게서만 나온다.", "온라인에서는 형성될 수 없다.", "상호 도움과 무관하다."], 1, "친밀도보다 네트워크가 연결해 주는 정보와 기회가 중요할 수 있다.")
  ]);
englishPractice2630["28"].extraSets = [
  makeSet("Exercise 01", "The Courtyard People Learned to Love",
    "Students arriving at a new school initially preferred photographs of open courtyards with scattered trees. Many had never attended a school with such a space, suggesting that the broad view felt naturally inviting. After a year on campus, however, students who studied daily in a densely planted garden began rating enclosed green spaces just as highly. The original preference did not vanish; experience added another familiar pattern associated with rest and friendship. Environmental taste can begin with broad human tendencies while remaining open to revision through repeated local experience.",
    [["courtyard", "안뜰"], ["enclosed", "둘러싸인"], ["revision", "수정"]], [
      q("학생 선호의 변화가 보여 주는 것은?", ["환경 선호는 출생 때 완전히 고정된다.", "초기 경향은 반복된 경험으로 수정·확장될 수 있다.", "나무가 많은 공간은 누구나 싫어한다.", "학교 경험은 휴식과 무관하다.", "새 환경은 선호에 영향을 주지 않는다."], 1, "처음의 열린 공간 선호에 친숙한 정원 선호가 추가되었다."),
      q("글쓴이가 original preference에 대해 말한 것은?", ["완전히 사라졌다.", "그대로 남으면서 새 경험이 다른 선호를 더했다.", "잘못 측정되었다.", "친구 관계 때문에 즉시 반대로 바뀌었다.", "선천적이지 않다는 것이 증명되었다."], 1, "기존 경향과 경험의 수정 가능성을 함께 인정한다.")
    ]),
  makeSet("Exercise 02", "Was It a Dream or a Message?",
    "Eun remembered seeing a blue umbrella beside her office door. She could not tell whether she had dreamed it, imagined it while planning a story, or seen a photograph in a group chat. The image itself was vivid, so vividness did not identify the source. She then recalled deliberately searching for umbrella pictures while writing. Remembering the act of searching helped her classify the image as self-generated rather than observed at the office. Memories carry content, but they may also carry traces of the mental operations that produced them. When those traces are weak, source errors become more likely.",
    [["vividness", "생생함"], ["classify", "분류하다"], ["mental operation", "인지 작용"]], [
      q("Eun이 이미지의 출처를 판단한 근거는?", ["이미지가 파란색이라는 사실", "우산 사진을 의도적으로 찾았던 생성 과정을 기억한 것", "꿈은 언제나 흐릿하다는 믿음", "사무실 문이 닫혀 있었다는 사실", "단체 대화를 삭제한 것"], 1, "내용의 생생함이 아니라 이미지를 만든 인지 과정을 기억했다."),
      q("source errors가 증가하는 조건은?", ["기억 내용이 짧을 때", "기억을 만든 정신 과정의 흔적이 약할 때", "이미지가 색을 가질 때", "관찰이 의도적일 때", "자료가 한 출처에서만 왔을 때"], 1, "생성 과정 단서가 부족하면 꿈·상상·관찰을 혼동하기 쉽다.")
    ]),
  makeSet("Exercise 03", "The Contest That Suddenly Mattered",
    "When Daeho’s poster failed to reach the final round, he told friends that the contest was merely a small school event and had never mattered. A month later, his photograph won a prize in another school event of the same size. He immediately described the award as proof that he was ready for a professional career. The events were comparable, but their importance changed with the result. By shrinking failure and enlarging success, Daeho protected a favorable story about his ability. His judgment concerned not only what happened but also how much weight the event was allowed to carry.",
    [["comparable", "비교할 만한"], ["shrink", "축소하다"], ["favorable", "긍정적인"]], [
      q("Daeho가 사용한 자기 방어 전략은?", ["성공과 실패를 똑같이 평가함", "실패는 축소하고 성공은 크게 중요시함", "모든 대회를 포기함", "결과를 친구에게 숨김", "성공을 우연이라고 낮춰 봄"], 1, "비슷한 규모의 사건을 결과에 따라 다르게 평가했다."),
      q("the event was allowed to carry의 의미는?", ["행사장을 옮기는 거리", "사건에 부여하는 심리적 중요도", "포스터의 실제 무게", "대회 참가 비용", "사진 파일 크기"], 1, "사건이 자기 서사에서 갖는 중요도의 크기를 말한다.")
    ])
];

englishPractice2630["29"] = makeSet("Gateway", "The Last Seat on the Committee",
  "A student committee had one remaining seat and two candidates. Half the members preferred Ara and half preferred Ben. Giving the chairperson an extra vote would make identity matter; always choosing the candidate listed first would favor one label over another. The committee instead placed identical cards in a box and drew one publicly. The lottery did not claim that the candidates were indistinguishable. It provided a decision rule for a situation in which relevant preferences were tied and no nonrandom rule could treat both voters and alternatives symmetrically.",
  [["chairperson", "위원장"], ["lottery", "추첨"], ["symmetrically", "대칭적으로, 공평하게"]], [
    q("committee가 추첨을 사용한 이유는?", ["후보의 능력을 측정하지 않으려고", "동점에서 사람과 대안을 공평하게 다룰 비무작위 기준이 없어서", "위원장이 항상 Ara를 원해서", "투표 결과가 공개되지 않아서", "후보가 한 명뿐이어서"], 1, "동점에서 정체성·표기 순서를 편들지 않는 해결책으로 추첨을 택했다."),
    q("추첨에 대한 글의 관점은?", ["후보가 완전히 같다는 주장", "공정성 조건을 지키기 위한 절차적 해결", "민주주의의 포기", "위원장 권력 강화", "투표의 영구적 폐지"], 1, "후보 동일성 주장이 아니라 동점 상황의 공정한 절차다.")
  ]);
englishPractice2630["29"].extraSets = [
  makeSet("Exercise 01", "The Promise in the Repair Shop",
    "A repair shop promised that a laptop would be ready by Friday. The written receipt contained no paragraph titled ‘contract law,’ yet both sides understood practical obligations: the shop would attempt the repair and call if the cost changed; the customer would pay the agreed amount. When a new part doubled the price, the shop could not simply install it and demand payment without notice. The dispute involved legal principles, but it also involved ordinary expectations about permission and promises. Technical vocabulary can refine the analysis; it does not create the underlying problem from nothing.",
    [["obligation", "의무"], ["agreed amount", "합의 금액"], ["underlying", "근본적인"]], [
      q("글의 요지로 가장 적절한 것은?", ["법은 전문 용어가 있을 때만 존재한다.", "일상 약속과 거래에는 이미 법의 기본 원리가 작동한다.", "수리점은 가격을 마음대로 바꿀 수 있다.", "영수증은 법과 무관하다.", "고객은 어떤 비용도 지불할 필요가 없다."], 1, "동의·약속·비용 변경이라는 일상 경험에 법 원리가 구현된다."),
      q("technical vocabulary의 역할은?", ["문제를 처음부터 만들어 낸다.", "이미 존재하는 문제를 더 정밀하게 분석하게 한다.", "일상 기대를 모두 없앤다.", "당사자의 합의를 무효화한다.", "법을 일반인이 이해할 수 없게만 만든다."], 1, "전문 용어는 기존 관계와 쟁점을 정교화한다.")
    ]),
  makeSet("Exercise 02", "Four Seasons Every Month",
    "A small clothing brand once released two major collections each year. After customers began following creators who posted new outfits daily, interest shifted too quickly for the old schedule. Shoppers compared prices across stores while watching live product demonstrations and asked for colors that expressed individual identities. The brand responded with smaller monthly releases and allowed customers to vote on which samples would be produced. This reduced unsold stock but increased the need for rapid design decisions. Information access had shifted some power toward consumers and changed not only what they bought but also how often the company had to offer something new.",
    [["collection", "상품군"], ["unsold stock", "미판매 재고"], ["sample", "시제품"]], [
      q("brand가 monthly releases를 도입한 이유는?", ["고객 관심과 유행 변화가 기존 두 시즌보다 빨라졌기 때문에", "온라인 정보가 완전히 사라졌기 때문에", "소비자가 가격을 비교하지 못해서", "재고를 더 많이 남기려고", "개인화 요구가 줄어서"], 0, "실시간 노출과 비교로 유행 주기가 짧아졌다."),
      q("소비자 권력 증가의 증거는?", ["회사가 고객 투표로 생산 시제품을 결정했다.", "회사가 제품 정보를 숨겼다.", "모든 상품 가격이 같아졌다.", "고객이 신상품을 거부했다.", "두 시즌 일정이 강화되었다."], 0, "고객이 정보와 투표를 통해 생산 결정에 더 큰 영향을 주었다.")
    ]),
  makeSet("Exercise 03", "The Playground Beside the Refinery",
    "Two districts had similar populations, but air monitors told different stories. In River East, a refinery, freight depot, and waste facility stood within two kilometers of three schools. In Hill Park, heavy industry was separated from housing by a wide commercial zone. River East residents had repeatedly requested monitors, yet officials had long relied on a citywide average that concealed the local concentration. When neighborhood-level data were finally published, exposure was far higher around River East schools. Environmental fairness requires asking not only how much pollution a city produces but also which communities are made to live closest to its sources.",
    [["refinery", "정유 시설"], ["conceal", "감추다"], ["exposure", "노출"]], [
      q("citywide average의 문제는?", ["두 지역의 국지적 오염 격차를 숨겼다.", "모든 측정값을 높였다.", "산업 시설 위치를 변경했다.", "학교 수를 줄였다.", "주민 요청을 즉시 반영했다."], 0, "도시 평균은 River East 학교 주변의 집중 노출을 가렸다."),
      q("글쓴이가 제시하는 environmental fairness의 기준은?", ["도시 전체 배출량만 계산하기", "오염원 가까이 살도록 부담을 지는 공동체까지 확인하기", "모든 산업을 주거지 옆에 균등 배치하기", "지역 자료를 공개하지 않기", "상업 구역을 모두 없애기"], 1, "오염 총량뿐 아니라 부담의 공간적 분배를 보아야 한다.")
    ])
];

englishPractice2630["30"] = makeSet("Gateway", "A Blend That Tastes the Same in Winter",
  "A tea shop buys honey from several small farms. Spring honey is pale and floral, while late-summer honey is darker and stronger. Customers who purchase the shop’s house tea expect a similar taste throughout the year, so the shop blends measured amounts from different harvests. The process does not make the honey artificial; nothing is added except other honey. It does, however, make the flavor more uniform and reduces the effect of seasonal variation. Jars sold under an individual farm’s name remain unblended and may taste different from one month to another.",
  [["floral", "꽃향기의"], ["harvest", "수확"], ["uniform", "균일한"]], [
    q("shop이 honey를 혼합하는 주된 이유는?", ["모든 꿀의 출처를 숨기려고", "계절이 달라도 house tea의 맛을 일정하게 하려고", "합성 성분을 넣으려고", "농장별 꿀을 없애려고", "꿀 색을 항상 검게 만들려고"], 1, "여러 수확분을 배합해 연중 균일한 맛을 제공한다."),
    q("unblended honey의 특징은?", ["월별 맛 차이가 날 수 있다.", "다른 꿀이 반드시 첨가된다.", "합성 향료로만 만든다.", "계절 영향을 받지 않는다.", "모든 농장에서 맛이 같다."], 0, "농장·계절 특성이 그대로 남아 맛이 달라질 수 있다.")
  ]);
englishPractice2630["30"].extraSets = [
  makeSet("Exercise 01", "The Useful Mineral with a Limit",
    "Selenium helps the body protect cells from damage, so some people assume that more must be better. Yet the amount needed is small. A diet that includes grains, eggs, and fish often supplies enough, while excessive supplements can cause hair loss and nerve problems. Moderation does not mean avoiding selenium; deficiency also has risks. It means placing the nutrient within a range that supports function without producing harm. The same reasoning applies to many nutrients: a substance can be essential and dangerous, depending on dose.",
    [["selenium", "셀레늄"], ["deficiency", "결핍"], ["dose", "복용량"]], [
      q("글의 핵심 원리로 가장 적절한 것은?", ["필수 영양소는 많이 먹을수록 좋다.", "영양소의 효과는 적정 섭취 범위와 용량에 달려 있다.", "보충제만이 영양소를 제공한다.", "셀레늄은 완전히 피해야 한다.", "결핍은 건강에 영향을 주지 않는다."], 1, "필요성과 과잉 위험을 함께 고려한 적정 범위가 핵심이다."),
      q("moderation이 의미하지 않는 것은?", ["결핍과 과잉을 모두 피하는 것", "영양소를 무조건 완전히 배제하는 것", "식품으로 충분한 양을 얻는 것", "보충제 용량을 고려하는 것", "기능과 위험을 함께 보는 것"], 1, "적당함은 필수 성분의 완전한 배제가 아니다.")
    ]),
  makeSet("Exercise 02", "The Bowl Beside the Keyboard",
    "Researchers placed a bowl of crackers either beside a keyboard or on a shelf across the room. Participants completed the same computer task and reported similar hunger. Those with crackers beside the keyboard ate far more, often without remembering each piece. The nearby bowl reduced the effort needed to reach the food and repeatedly entered the visual field. When the bowl was moved away, eating fell even though the food remained available. The result suggests that consumption can be guided by small features of a setting rather than by a deliberate decision based on hunger.",
    [["cracker", "크래커"], ["visual field", "시야"], ["deliberate", "의도적인"]], [
      q("실험 결과가 보여 주는 것은?", ["배고픔만이 섭취량을 결정한다.", "음식의 거리와 가시성이 자동적 섭취에 영향을 준다.", "멀리 있는 음식이 더 많이 소비된다.", "컴퓨터 작업은 항상 식욕을 없앤다.", "참가자는 먹은 양을 정확히 기억했다."], 1, "같은 배고픔에서도 가까이 보이는 음식이 더 많이 소비되었다."),
      q("bowl을 멀리 옮긴 뒤 섭취가 줄어든 이유로 가장 적절한 것은?", ["음식이 사라졌기 때문에", "접근 노력과 시각 단서가 달라졌기 때문에", "참가자가 더 배고파졌기 때문에", "크래커 맛이 변했기 때문에", "과제가 종료되었기 때문에"], 1, "음식은 그대로 있었지만 환경 단서와 접근성이 바뀌었다.")
    ]),
  makeSet("Exercise 03", "Learning the Taste of Herbs",
    "At first, several preschool children rejected plain yogurt containing a small amount of mint. Teachers did not force them to finish it. Once a week, the children smelled fresh mint, planted it, and were offered a tiny spoonful of the yogurt. After six weeks, more children accepted the flavor, and some asked for it. A control group that tasted the yogurt only once showed little change. The result does not mean every preference can be trained without limit. It shows that repeated, low-pressure exposure during early childhood can make an unfamiliar flavor more acceptable.",
    [["reject", "거부하다"], ["control group", "통제 집단"], ["exposure", "노출 경험"]], [
      q("아이들의 선호가 바뀐 조건은?", ["한 번에 많은 양을 강제로 먹은 것", "반복적이고 부담이 적은 맛 경험", "민트를 완전히 제거한 것", "요거트에 설탕만 넣은 것", "통제 집단과 접촉하지 않은 것"], 1, "재배·냄새·소량 시식을 반복해 낯선 맛의 수용성이 높아졌다."),
      q("글쓴이가 결과를 제한해서 해석한 문장은?", ["모든 선호는 무한히 훈련될 수 있다.", "반복 노출은 낯선 맛을 더 받아들이기 쉽게 할 수 있다.", "한 번의 시식이면 충분하다.", "아이들은 민트를 선천적으로 좋아한다.", "강요가 가장 효과적이다."], 1, "모든 취향이 바뀐다고 일반화하지 않고 초기 반복 노출의 가능성만 말한다.")
    ])
];

// 영어시험연구소가 직접 작성한 수능형 연계 지문과 변형문제입니다.
// EBS 교재 원문, 선택지, 정답·해설을 복제하지 않습니다.

export const englishPractice = {
  "01": {
    level: "3점", title: "Community Library Volunteer Schedule",
    passage: `<p>Dear Saturday Reading Club volunteers,</p><p>Thank you for helping children discover the pleasure of reading. Because the city marathon will block several streets on October 12, the library will open two hours later than usual. We therefore need to move the first reading session from 9:00 a.m. to 11:00 a.m. If you can still participate, please reply by Wednesday and write “confirmed” in the subject line. If the new time is difficult for you, let us know as well; we will arrange a different date for your volunteer service. Your prompt response will help us notify the participating families before the weekend.</p><p>Sincerely,<br>Hannah Lee<br>Program Coordinator</p>`,
    vocab: [["block", "막다, 차단하다"], ["participate", "참여하다"], ["prompt", "신속한"]],
    questions: [
      { prompt: "다음 글의 목적으로 가장 적절한 것은?", options: ["도서관 운영 시간 단축에 항의하려고", "봉사 활동의 변경된 시간을 확인받으려고", "어린이 독서 프로그램의 참가비를 안내하려고", "마라톤 행사 자원봉사자를 모집하려고", "가족 독서 모임의 취소를 사과하려고"], answer: 1, explanation: "교통 통제로 독서 세션 시간이 11시로 바뀌었고, 봉사자에게 수요일까지 참여 가능 여부를 회신해 달라고 요청한다." },
      { prompt: "윗글의 내용과 일치하지 않는 것은?", options: ["도시 마라톤 때문에 일부 도로가 통제된다.", "도서관은 평소보다 두 시간 늦게 문을 연다.", "봉사자는 수요일까지 답장을 보내야 한다.", "새 시간이 어려우면 다른 봉사 날짜를 정할 수 있다.", "참가 가족들은 이미 변경 사실을 통보받았다."], answer: 4, explanation: "가족들에게 주말 전에 알리기 위해 봉사자의 신속한 답변이 필요하다고 했으므로, 아직 통보가 끝난 것이 아니다." }
    ],
    extraSets: [
      {
        sourceRef: "Exercise 01", level: "2점", title: "The Family Story Map",
        passage: `<p>Dear Families,</p><p>Our school has created an online story map that introduces meaningful places in our neighborhood. Students interviewed long-time residents and added short recordings, old photographs, and walking routes to the map. We hope you will explore it together during the vacation and talk about how the area has changed. The map is available through the school website, and no account is required. Families may also suggest a place for the next update by completing the short form below the map. Your participation will help students see local history as something connected to everyday life.</p><p>Warm regards,<br>Mina Park<br>Social Studies Department</p>`,
        vocab: [["meaningful", "의미 있는"], ["long-time resident", "오랜 거주민"], ["suggest", "제안하다"]],
        questions: [
          { prompt: "다음 글의 목적으로 가장 적절한 것은?", options: ["지역 지도 제작자를 채용하려고", "학교 홈페이지 계정 생성을 요청하려고", "온라인 이야기 지도를 가족이 함께 이용하도록 권하려고", "방학 중 역사 수업의 출석을 확인하려고", "오래된 사진의 반환 기한을 알리려고"], answer: 2, explanation: "학교가 만든 온라인 이야기 지도의 구성과 접속 방법을 설명하고, 방학 동안 가족이 함께 살펴보도록 권하고 있다." },
          { prompt: "윗글의 내용과 일치하지 않는 것은?", options: ["지도 이용에는 별도 계정이 필요하다.", "학생들이 지역 주민을 인터뷰했다.", "지도에는 녹음과 사진이 포함되어 있다.", "가족은 다음 업데이트 장소를 제안할 수 있다.", "참여는 학생의 지역사 이해에 도움을 준다."], answer: 0, explanation: "학교 홈페이지에서 계정 없이 이용할 수 있다고 명시되어 있다." }
        ]
      },
      {
        sourceRef: "Exercise 02", level: "3점", title: "Revision Request for a Research Brief",
        passage: `<p>Dear Dr. Rivera,</p><p>Thank you for sending us your research brief on coastal farming. Before we include it in next month’s policy report, we need you to clarify two points raised by our review team. First, please explain how the farms in your sample were selected. Second, add the dates on which the water-quality measurements were taken. We have attached the reviewers’ notes and marked the relevant sections in your document. Please upload a revised file by August 8 so that the report can remain on schedule. These additions will make your conclusions easier for readers to evaluate.</p><p>Sincerely,<br>Daniel Cho<br>Report Editor</p>`,
        vocab: [["clarify", "명확히 하다"], ["sample", "표본"], ["relevant", "관련 있는"]],
        questions: [
          { prompt: "다음 글의 목적으로 가장 적절한 것은?", options: ["해안 농업 연구의 지원자를 모집하려고", "정책 보고서의 발행 취소를 통보하려고", "수질 측정 장비의 사용법을 설명하려고", "검토 의견을 반영한 수정 파일 제출을 요청하려고", "연구 표본을 대신 선정해 주겠다고 제안하려고"], answer: 3, explanation: "검토팀이 제기한 두 사항을 보완하고 8월 8일까지 수정 파일을 올려 달라고 요청한다." },
          { prompt: "Dr. Rivera가 추가해야 할 내용으로 언급되지 않은 것은?", options: ["정책 보고서의 판매 가격", "표본 농장 선정 방법", "수질 측정 날짜", "검토 의견에 대한 반영", "결론 평가에 필요한 정보"], answer: 0, explanation: "보고서 판매 가격은 전혀 언급되지 않았다." }
        ]
      },
      {
        sourceRef: "Exercise 03", level: "2점", title: "A Damaged Ceramic Lamp",
        passage: `<p>To Customer Service,</p><p>The ceramic desk lamp from order #L204 arrived this morning. Although the outer box was undamaged, the lamp base had a long crack and several small pieces fell out when I removed the wrapping. I purchased the lamp as a housewarming gift, so I cannot use it in its current condition. I have attached photographs of the package and the damaged base. Since the same color is no longer available on your website, I would like a full refund rather than a replacement. Please let me know whether you need the broken lamp returned.</p><p>Sincerely,<br>Olivia Grant</p>`,
        vocab: [["undamaged", "손상되지 않은"], ["wrapping", "포장재"], ["replacement", "교환품"]],
        questions: [
          { prompt: "다음 글의 목적으로 가장 적절한 것은?", options: ["새 조명의 색상을 문의하려고", "포장 서비스에 만족을 표현하려고", "집들이 선물의 배송을 연기하려고", "깨진 조명을 직접 수리하는 법을 묻고자", "손상된 상품의 전액 환불을 요청하려고"], answer: 4, explanation: "파손 상태와 사진 첨부 사실을 설명한 뒤 같은 색이 없어 교환 대신 전액 환불을 요구한다." },
          { prompt: "Olivia가 replacement를 원하지 않는 이유는?", options: ["포장 상자가 손상되었기 때문에", "조명을 이미 사용했기 때문에", "같은 색상이 더 이상 판매되지 않기 때문에", "주문 번호를 잊었기 때문에", "사진을 첨부하지 못했기 때문에"], answer: 2, explanation: "웹사이트에서 동일한 색상을 더 이상 구할 수 없어 교환이 아닌 환불을 선택했다." }
        ]
      },
      {
        sourceRef: "Exercise 04", level: "3점", title: "Reminder About the Workshop Grant",
        passage: `<p>Dear Ms. Patel,</p><p>Last spring, the Community Arts Fund provided your workshop with a $900 interest-free grant to purchase printing equipment. Under our agreement, the first $300 payment was due on September 1. We have not yet received that payment or a request to change the schedule. If paying the full amount now is difficult, you may divide it into two payments, but we need to hear from you by Friday. Please reply with your payment date or contact our office to arrange a revised schedule. Keeping us informed will allow the fund to support other community projects this winter.</p><p>Best regards,<br>Marcus Hill<br>Program Officer</p>`,
        vocab: [["interest-free", "무이자의"], ["be due", "기한이 되다"], ["revised schedule", "수정된 일정"]],
        questions: [
          { prompt: "다음 글의 목적으로 가장 적절한 것은?", options: ["인쇄 장비의 구매처를 추천하려고", "새로운 예술 지원 사업을 홍보하려고", "겨울 행사 참가비를 환불하려고", "지원금 상환 일정에 관한 회신을 요청하려고", "공동체 사업의 심사 결과를 발표하려고"], answer: 3, explanation: "기한이 지난 첫 상환액을 언급하고, 금요일까지 지급일이나 변경 일정을 회신해 달라고 요청한다." },
          { prompt: "Ms. Patel이 할 수 있는 일로 언급된 것은?", options: ["지원금을 전액 면제받는다.", "첫 상환액을 두 번으로 나누어 낸다.", "인쇄 장비를 다른 사업에 판매한다.", "겨울까지 아무 연락도 하지 않는다.", "추가 이자를 먼저 지급한다."], answer: 1, explanation: "현재 전액 지급이 어렵다면 첫 300달러를 두 번의 지급으로 나눌 수 있다고 안내한다." }
        ]
      }
    ]
  },
  "02": {
    level: "2점", title: "The Backup Copy",
    passage: `<p>Mara had rehearsed her science presentation for weeks, yet her hands trembled as she connected her laptop to the classroom screen. When the screen remained black, she pressed every button she could think of. Her teacher glanced at the clock, and whispers spread across the room. Mara felt heat rise to her face. Just then, her partner Jin opened his backpack and pulled out a neatly printed set of their slides. “I thought we might need these,” he said. The teacher smiled and asked them to begin. As Mara held the first page, the familiar diagrams guided her through the opening lines. Her voice grew steadier, and by the final slide she was speaking without looking down.</p>`,
    vocab: [["rehearse", "예행연습하다"], ["tremble", "떨다"], ["steadier", "더 안정된"]],
    questions: [
      { prompt: "Mara의 심경 변화로 가장 적절한 것은?", options: ["confident → bored", "embarrassed → relieved", "grateful → suspicious", "curious → disappointed", "calm → jealous"], answer: 1, explanation: "화면이 켜지지 않아 얼굴이 달아오를 만큼 당황했지만, 인쇄된 예비 자료로 발표를 무사히 이어 가며 안정을 되찾는다." },
      { prompt: "Jin에 관한 내용으로 가장 적절한 것은?", options: ["발표 연습을 거부했다.", "교사에게 발표 연기를 요청했다.", "인쇄된 슬라이드를 미리 준비했다.", "고장 난 화면을 직접 수리했다.", "마지막 슬라이드를 잃어버렸다."], answer: 2, explanation: "Jin은 필요할 가능성을 생각해 슬라이드 출력물을 가방에 준비해 두었다." }
    ]
  },
  "03": {
    level: "3점", title: "The Clean Line on the Map",
    passage: `<p>A transit map must simplify a city. It turns winding tracks into clean lines and replaces crowded neighborhoods with evenly spaced dots. This design helps passengers decide where to change trains. Yet the clean line can hide a messy street. Two stations that look equally convenient on paper may offer very different experiences: one may have elevators and clear signs, while the other requires several flights of stairs. The map is not wrong; it is selective. Problems arise only when we forget what it has chosen to leave out. A useful model gives us a direction, but wise users step outside the model before making decisions that depend on local detail.</p>`,
    vocab: [["winding", "구불구불한"], ["selective", "선택적인"], ["depend on", "~에 달려 있다"]],
    questions: [
      { prompt: "밑줄 친 ‘the clean line can hide a messy street’가 의미하는 바로 가장 적절한 것은?", options: ["정돈된 시각 모델은 현실의 중요한 차이를 생략할 수 있다.", "대중교통 노선은 도시의 복잡성을 반드시 증가시킨다.", "보기 좋은 지도는 실제 거리보다 제작 비용이 많이 든다.", "여행자는 지도보다 안내 표지판을 신뢰해서는 안 된다.", "모든 역은 지도에 동일한 간격으로 표시되어야 한다."], answer: 0, explanation: "지도는 이동 판단을 돕기 위해 단순화하지만, 엘리베이터나 계단 같은 현장의 차이를 보여 주지 못한다는 뜻이다." },
      { prompt: "글쓴이의 관점으로 가장 적절한 것은?", options: ["모델은 현실을 완벽하게 재현해야만 쓸모가 있다.", "지도 제작자는 역의 수를 줄여야 한다.", "모델의 유용성과 한계를 함께 인식해야 한다.", "현장 경험은 모든 자료 분석보다 우월하다.", "도시 교통은 시각화할 수 없을 만큼 복잡하다."], answer: 2, explanation: "모델은 방향을 주는 유용한 도구이지만, 세부 결정에서는 생략된 현실을 확인해야 한다고 주장한다." }
    ]
  },
  "04": {
    level: "2점", title: "A Productive Pause",
    passage: `<p>In many meetings, silence is treated as a problem to be solved. The moment a speaker finishes, someone rushes to fill the gap. But a short pause can improve a group’s thinking. People who need a little more time to organize their ideas get a chance to participate, and quick speakers can reconsider whether their first response is actually useful. Silence also makes disagreement less personal: members can examine a proposal before reacting to its author. A productive pause does not mean allowing a discussion to lose direction. It means giving thought a few seconds to arrive before words take over.</p>`,
    vocab: [["fill the gap", "공백을 메우다"], ["reconsider", "재고하다"], ["take over", "장악하다"]],
    questions: [
      { prompt: "다음 글의 요지로 가장 적절한 것은?", options: ["회의에서는 침묵을 없애기 위해 사회자가 계속 말해야 한다.", "짧은 침묵은 더 신중하고 폭넓은 참여를 돕는다.", "빠르게 말하는 사람이 토론을 이끄는 것이 효율적이다.", "의견 충돌을 피하려면 반대 발언을 제한해야 한다.", "회의의 방향은 발언 수보다 참석자 수에 달려 있다."], answer: 1, explanation: "짧은 멈춤이 생각할 시간과 참여 기회를 제공하고 성급한 반응을 줄인다는 것이 핵심이다." },
      { prompt: "윗글에 따르면 productive pause가 의미하는 것은?", options: ["토론을 끝내는 것", "발언자를 교체하는 것", "생각이 형성될 시간을 주는 것", "반대 의견을 기록하지 않는 것", "회의 시간을 무제한으로 늘리는 것"], answer: 2, explanation: "마지막 문장에서 생각이 도착할 몇 초를 주는 것이라고 직접 설명한다." }
    ]
  },
  "05": {
    level: "3점", title: "Make Uncertainty Visible",
    passage: `<p>Public institutions often fear that admitting uncertainty will weaken trust. As a result, reports may present a single number even when the available data support a range of outcomes. This apparent confidence can be costly. When later evidence changes the number, citizens may conclude that experts were careless or dishonest. Agencies should instead publish the assumptions behind their estimates and show how the result changes under different conditions. People do not need a promise that every forecast will be correct. They need a clear account of what is known, what remains uncertain, and what evidence would justify a new decision.</p>`,
    vocab: [["apparent", "겉으로 보이는"], ["assumption", "가정"], ["justify", "정당화하다"]],
    questions: [
      { prompt: "글쓴이의 주장으로 가장 적절한 것은?", options: ["공공기관은 틀린 예측을 발표한 전문가를 처벌해야 한다.", "시민에게는 최종 수치만 간단히 제시해야 한다.", "기관은 추정의 가정과 불확실성까지 투명하게 밝혀야 한다.", "과학적 예측은 정책 결정에서 제외해야 한다.", "신뢰를 유지하려면 기존 수치를 절대 수정하지 말아야 한다."], answer: 2, explanation: "단일 수치로 확실한 척하기보다 가정, 범위, 수정 조건을 공개해야 신뢰를 지킬 수 있다는 주장이다." },
      { prompt: "단일 수치만 제시할 때 생길 수 있는 문제는?", options: ["자료 수집 비용이 항상 증가한다.", "수치가 바뀌면 시민이 전문가의 정직성을 의심할 수 있다.", "전문가가 서로 다른 가정을 사용할 수 없게 된다.", "시민이 보고서를 너무 오래 읽게 된다.", "정책 결정 속도가 지나치게 빨라진다."], answer: 1, explanation: "후속 증거로 수치가 바뀌면 처음의 과도한 확신이 오히려 불신을 만든다고 설명한다." }
    ]
  },
  "06": {
    level: "3점", title: "Borrowed Attention",
    passage: `<p>Attention in a group is not merely an individual resource. It can be borrowed. When one student points out a faint pattern in a graph, others begin to notice it too. When a colleague asks a precise question, the whole team temporarily sees the problem through that question. This is why productive collaboration does more than divide labor. It creates shared objects of attention. However, the same mechanism can narrow a group’s view if everyone follows the first confident voice. Teams therefore need members who can focus attention and members who can deliberately redirect it toward what has been ignored.</p>`,
    vocab: [["faint", "희미한"], ["precise", "정확한"], ["redirect", "다시 향하게 하다"]],
    questions: [
      { prompt: "다음 글의 주제로 가장 적절한 것은?", options: ["개인의 집중 시간을 측정하는 방법", "협업에서 주의가 공유되고 방향 지어지는 방식", "그래프 읽기 능력과 성적의 관계", "자신감 있는 지도자를 뽑는 기준", "업무 분담을 빠르게 끝내는 기술"], answer: 1, explanation: "집단에서 한 사람의 관찰과 질문이 다른 구성원의 주의를 함께 움직인다는 내용이다." },
      { prompt: "글에 따르면 집단의 시야가 좁아질 수 있는 경우는?", options: ["역할을 분담할 때", "질문이 구체적일 때", "첫 번째로 자신 있게 말한 사람을 모두가 따를 때", "희미한 패턴을 발견할 때", "무시된 대상을 다시 살필 때"], answer: 2, explanation: "모두가 첫 번째 자신감 있는 목소리를 따라가면 같은 것만 보게 될 수 있다고 경고한다." }
    ]
  },
  "07": {
    level: "3점", title: "Museum Labels and Curiosity",
    passage: `<p>A museum label can act like a wall or a doorway. A wall-like label delivers a finished interpretation: it tells visitors exactly what an object means and leaves little room for observation. A doorway label offers enough context to begin looking but also raises a question. For example, instead of simply naming the material of an ancient bowl, it might ask why the maker repaired a crack rather than replacing the bowl. Visitors then compare the repair with the rest of the object and build an interpretation from visible evidence. Good labels do not abandon expertise. They use expertise to invite attention rather than to end it.</p>`,
    vocab: [["interpretation", "해석"], ["ancient", "고대의"], ["visible evidence", "눈에 보이는 증거"]],
    questions: [
      { prompt: "다음 글의 제목으로 가장 적절한 것은?", options: ["Why Museums Should Remove Every Label", "Labels That Open Doors to Observation", "The Rising Price of Ancient Bowls", "How to Repair Objects Without Experts", "Walls as the Best Museum Display"], answer: 1, explanation: "좋은 설명문은 완성된 해석을 강요하는 벽이 아니라 관찰과 질문을 여는 문이 되어야 한다는 글이다." },
      { prompt: "doorway label의 특징으로 가장 적절한 것은?", options: ["작품의 가격만 알려 준다.", "관람객의 질문을 차단한다.", "전문 지식을 완전히 배제한다.", "맥락과 질문을 제공해 관찰을 유도한다.", "손상된 작품을 전시에서 제외한다."], answer: 3, explanation: "필요한 맥락을 주되 질문을 남겨 관람객이 보이는 근거로 해석하게 한다." }
    ]
  },
  "08": {
    level: "2점", title: "How Students Traveled to School",
    table: { caption: "Percentage of students by travel mode", headers: ["Mode", "2024", "2026"], rows: [["Walk", "28%", "34%"], ["Bicycle", "12%", "18%"], ["Bus", "40%", "31%"], ["Car", "20%", "17%"]] },
    passage: `<p>The table shows the percentage of students at Greenhill High School who used four travel modes in 2024 and 2026. The school installed safer bicycle parking and opened a walking gate in 2025.</p>`,
    vocab: [["travel mode", "이동 수단"], ["percentage", "백분율"], ["install", "설치하다"]],
    questions: [
      { prompt: "도표의 내용과 일치하지 않는 것은?", options: ["Walking increased by six percentage points.", "Bicycle use rose between 2024 and 2026.", "The bus remained the most common mode in 2026.", "Car use decreased by three percentage points.", "More than half of students walked in 2026."], answer: 4, explanation: "2026년 도보 통학 비율은 34%이므로 절반을 넘지 않는다." },
      { prompt: "2026년에 두 번째로 많이 이용된 이동 수단은?", options: ["Walk", "Bicycle", "Bus", "Car", "Walk and Bicycle equally"], answer: 2, explanation: "2026년에는 Walk 34%, Bus 31%, Bicycle 18%, Car 17% 순이므로 두 번째는 Bus이다." }
    ]
  },
  "09": {
    level: "2점", title: "The Desert Fog Beetle",
    passage: `<p>The desert fog beetle survives in a place where rain is rare. Before sunrise, it climbs a dune and raises the back of its body toward the damp wind. Tiny drops of fog collect on the beetle’s shell. The shell is not equally smooth everywhere: small raised areas attract water, while waxy channels guide the drops toward the beetle’s mouth. Engineers have studied this surface when designing materials that gather water from air. The beetle does not produce water by itself; its body simply helps capture and direct moisture that is already present.</p>`,
    vocab: [["dune", "모래언덕"], ["damp", "습기 있는"], ["waxy", "밀랍 같은"]],
    questions: [
      { prompt: "윗글의 내용과 일치하지 않는 것은?", options: ["이 딱정벌레는 해 뜨기 전에 모래언덕에 오른다.", "안개 방울이 딱정벌레의 껍질에 모인다.", "껍질 표면은 모든 부분이 똑같이 매끄럽다.", "껍질의 통로가 물방울을 입 쪽으로 이끈다.", "공학자들은 이 표면의 특성을 연구했다."], answer: 2, explanation: "껍질은 모든 곳이 같지 않고, 물을 끌어당기는 돌출부와 물방울을 이끄는 통로로 이루어진다." },
      { prompt: "마지막 문장이 강조하는 바로 가장 적절한 것은?", options: ["딱정벌레가 체내에서 물을 합성한다.", "환경에 이미 있는 수분을 모아 이용한다.", "공학 재료가 생물보다 효율적이다.", "사막에는 새벽 안개가 존재하지 않는다.", "껍질의 색이 수분을 만든다."], answer: 1, explanation: "물을 새로 만드는 것이 아니라 공기 중 수분을 포착하고 이동시키는 구조임을 강조한다." }
    ]
  },
  "10": {
    level: "2점", title: "River Night Walk",
    passage: `<p><strong>River Night Walk — October 24</strong></p><p>Join a guide for a 90-minute walk along Willow River and learn how nocturnal animals use sound. The program begins at 7:30 p.m. at the East Gate visitor center. Participants must be at least 12 years old; anyone under 16 must come with an adult. Tickets are $8 and include a small red-light flashlight. Online booking closes at noon on October 23. The walk will continue in light rain, but it will be canceled if a storm warning is issued. Refunds are available only when the park cancels the program.</p>`,
    vocab: [["nocturnal", "야행성의"], ["issue", "발령하다"], ["refund", "환불"]],
    questions: [
      { prompt: "River Night Walk에 관한 내용과 일치하지 않는 것은?", options: ["90분 동안 진행된다.", "동쪽 출입구 방문자 센터에서 시작한다.", "12세 미만은 참여할 수 없다.", "표 값에는 손전등이 포함된다.", "가벼운 비가 오면 자동으로 취소된다."], answer: 4, explanation: "가벼운 비에는 계속 진행하며, 폭풍 경보가 발령될 때 취소된다." },
      { prompt: "환불을 받을 수 있는 경우는?", options: ["참가자가 늦게 도착한 경우", "참가자가 마음을 바꾼 경우", "공원이 프로그램을 취소한 경우", "온라인 예약을 하지 않은 경우", "16세 미만이 혼자 온 경우"], answer: 2, explanation: "안내문 마지막에 공원이 취소하는 경우에만 환불된다고 명시되어 있다." }
    ]
  },
  "11": {
    level: "3점", title: "Why Small Habits Spread",
    passage: `<p>Small habits often travel through a group without anyone formally teaching them. A new employee may notice that coworkers <u>① leave</u> their phones outside the meeting room. Each of these repeated actions <u>② signal</u> what the group considers important. Because people want to cooperate, they tend <u>③ to copy</u> behaviors that appear normal. The copied habit, once visible in several members, becomes even <u>④ more likely</u> to influence the next person. This is one reason why leaders’ ordinary actions matter: what they repeatedly do can shape a culture more strongly than rules <u>⑤ written</u> on a wall.</p>`,
    vocab: [["formally", "공식적으로"], ["cooperate", "협력하다"], ["shape", "형성하다"]],
    questions: [
      { prompt: "밑줄 친 부분 중 어법상 틀린 것은?", options: ["①", "②", "③", "④", "⑤"], answer: 1, explanation: "주어 Each는 단수이므로 signal이 아니라 signals가 되어야 한다." },
      { prompt: "글의 요지로 가장 적절한 것은?", options: ["조직 문화는 규칙을 많이 적을수록 강해진다.", "개인의 반복 행동은 집단의 규범으로 퍼질 수 있다.", "새 직원은 기존 행동을 따라 해서는 안 된다.", "회의 중 휴대전화 사용은 항상 생산성을 높인다.", "지도자는 일상 행동보다 공식 연설에 집중해야 한다."], answer: 1, explanation: "반복되어 보이는 작은 행동이 다른 사람에게 정상적인 규범으로 인식되어 확산된다는 내용이다." }
    ]
  },
  "12": {
    level: "3점", title: "The Value of Productive Difficulty",
    passage: `<p>Tools that make a task easier can improve performance, but they do not always improve learning. When navigation software gives every turn immediately, drivers reach the destination with less effort. Yet they may build a <u>① weaker</u> mental map of the area. A small amount of difficulty can be <u>② useful</u> because it requires learners to retrieve and organize information. The difficulty must be carefully chosen, however. If a task demands knowledge that learners do not yet possess, struggle becomes <u>③ productive</u> and attention collapses. Effective instruction therefore removes <u>④ unnecessary</u> obstacles while preserving challenges that make the learner <u>⑤ think</u>.</p>`,
    vocab: [["retrieve", "인출하다"], ["possess", "가지고 있다"], ["preserve", "보존하다"]],
    questions: [
      { prompt: "밑줄 친 낱말 중 문맥상 적절하지 않은 것은?", options: ["①", "②", "③", "④", "⑤"], answer: 2, explanation: "필요한 지식이 없어 주의가 무너지는 어려움은 productive가 아니라 unproductive/destructive가 적절하다." },
      { prompt: "글쓴이가 말하는 효과적인 수업의 특징은?", options: ["모든 어려움을 제거한다.", "학습자에게 즉시 정답을 제공한다.", "불필요한 장애는 줄이고 생각을 요구하는 도전은 남긴다.", "학습자가 모르는 지식만을 활용한다.", "도구 사용을 완전히 금지한다."], answer: 2, explanation: "마지막 문장이 불필요한 장애와 학습에 도움이 되는 도전을 구분한다." }
    ]
  },
  "13": {
    level: "3점", title: "More Than Decoration",
    passage: `<p>When a city plants trees along a street, the usual justification is environmental: leaves cool the air and absorb rainwater. Yet the trees may also change how residents relate to one another. Shade encourages people to walk rather than hurry through in cars. Benches beneath the branches become places where neighbors exchange small pieces of information — who needs help, which shop has reopened, or when the next local meeting will occur. In this sense, street trees can function as <span class="passage-blank">__________</span>. Their physical presence creates repeated opportunities for weak social ties to form, and those ties can become valuable during an emergency.</p>`,
    vocab: [["justification", "정당화 근거"], ["absorb", "흡수하다"], ["social ties", "사회적 유대"]],
    questions: [
      { prompt: "빈칸에 들어갈 말로 가장 적절한 것은?", options: ["a substitute for emergency services", "a form of social infrastructure", "a barrier to local business", "evidence against public transportation", "a private source of entertainment"], answer: 1, explanation: "나무가 그늘과 만남의 장소를 제공하여 주민 간 약한 유대를 형성하게 하므로 ‘사회적 기반 시설’이 적절하다." },
      { prompt: "윗글에 따르면 weak social ties가 가치 있어지는 때는?", options: ["자동차가 더 빨라질 때", "상점이 문을 닫을 때마다", "긴급 상황에서 이웃 간 정보와 도움이 필요할 때", "나무가 빗물을 흡수하지 못할 때", "공공 회의가 금지될 때"], answer: 2, explanation: "반복된 만남으로 생긴 약한 유대가 비상시 유용해질 수 있다고 마지막 문장에서 설명한다." }
    ]
  },
  "14": {
    level: "3점", title: "When Forecasts Enter the World",
    passage: `<p>A forecast is often judged as if it were a photograph of the future. But once people receive a forecast, they may change their behavior. A prediction of heavy traffic can lead thousands of drivers to leave early or choose another road, making the predicted traffic disappear. A warning of a bank’s weakness may cause customers to withdraw money, making failure more likely. In both cases, the forecast becomes part of the system it describes. Its accuracy cannot be evaluated without asking how people responded to it. The deeper lesson is that <span class="passage-blank">__________</span>. Predictions in social life do not merely observe possible outcomes; they can help create or prevent them.</p>`,
    vocab: [["withdraw", "인출하다"], ["evaluate", "평가하다"], ["outcome", "결과"]],
    questions: [
      { prompt: "빈칸에 들어갈 말로 가장 적절한 것은?", options: ["the best forecast is always the most alarming one", "human response can alter the future being predicted", "traffic data should never be shared with drivers", "economic events are easier to predict than weather", "a forecast is accurate only when nothing changes"], answer: 1, explanation: "예측을 접한 사람들이 행동을 바꾸어 예측된 결과를 약화하거나 강화할 수 있다는 글 전체의 결론이다." },
      { prompt: "교통 예측의 사례가 보여 주는 것은?", options: ["예측이 틀리면 데이터가 무가치해진다.", "운전자가 예측에 반응해 실제 교통량을 바꿀 수 있다.", "교통 체증은 언제나 은행 위기보다 심각하다.", "운전자는 도로 정보를 신뢰하지 않는다.", "사람들의 행동은 예측 정확도와 무관하다."], answer: 1, explanation: "혼잡 예측을 본 운전자들이 시간이나 경로를 바꾸어 원래 예측된 혼잡이 사라질 수 있다." }
    ]
  },
  "15": {
    level: "3점", title: "A Culture of Repair",
    passage: `<p>① Repairing an object begins with the belief that its present failure is not its final state. ② A repair café makes this belief social by bringing owners, tools, and experienced volunteers into the same room. ③ People watch a broken lamp or toaster become understandable as its parts are opened and tested. ④ Many factories locate distribution centers near major highways to reduce delivery time. ⑤ Even when an item cannot be fixed, the owner may learn which component failed and how future products could be designed better. In this way, repair events turn private frustration into shared technical knowledge.</p>`,
    vocab: [["component", "부품, 구성 요소"], ["frustration", "좌절감"], ["technical", "기술적인"]],
    questions: [
      { prompt: "전체 흐름과 관계없는 문장은?", options: ["①", "②", "③", "④", "⑤"], answer: 3, explanation: "④는 공장의 물류센터 입지에 관한 내용으로, 수리 모임이 지식과 태도를 공유하게 한다는 흐름에서 벗어난다." },
      { prompt: "repair café의 효과로 언급되지 않은 것은?", options: ["고장 원인을 이해하게 한다.", "수리 경험을 사회적으로 공유하게 한다.", "제품 설계 개선에 관한 생각을 제공한다.", "모든 고장 난 물건을 반드시 수리한다.", "개인의 좌절을 공동 지식으로 바꾼다."], answer: 3, explanation: "고치지 못하는 경우에도 배움이 생긴다고 했으므로 모든 물건을 수리하는 것은 아니다." }
    ]
  },
  "16": {
    level: "3점", title: "The Story Told by Dust",
    passage: `<p>Scientists once treated household dust mainly as material to be removed. Today, some researchers read it as a record of how a building is used.</p><p><strong>(A)</strong> To interpret that mixture, researchers compare samples from different rooms and different times. A sudden increase in outdoor pollen, for instance, may reveal when windows were opened.</p><p><strong>(B)</strong> Dust contains fibers from clothing, particles carried in from soil, fragments of paint, and biological material. Its composition therefore changes with people’s activities and with the condition of the building.</p><p><strong>(C)</strong> Such evidence can help identify damp spaces, failing materials, or patterns of ventilation. What looks like dirt can thus become a quiet monitoring tool.</p>`,
    vocab: [["composition", "구성"], ["fragment", "파편"], ["ventilation", "환기"]],
    questions: [
      { prompt: "주어진 글 다음에 이어질 순서로 가장 적절한 것은?", options: ["(A)-(C)-(B)", "(B)-(A)-(C)", "(B)-(C)-(A)", "(C)-(A)-(B)", "(C)-(B)-(A)"], answer: 1, explanation: "먼저 dust의 구성(B)을 설명하고, that mixture를 해석하는 방법(A), 그 증거의 활용(C) 순으로 이어진다." },
      { prompt: "윗글의 제목으로 가장 적절한 것은?", options: ["Removing Every Particle from a Home", "Dust as a Record of Building Life", "Why Windows Should Stay Closed", "The History of Synthetic Clothing", "Painting Rooms Without Ventilation"], answer: 1, explanation: "집먼지의 구성이 건물 사용과 상태를 기록하고 진단 자료가 된다는 내용이다." }
    ]
  },
  "17": {
    level: "3점", title: "The Cost of Constant Measurement",
    passage: `<p>People often measure a habit because measurement can make progress visible. A runner records distance; a student counts pages; a team tracks completed tasks. <span class="insertion-mark">[A]</span> The number then begins to replace the purpose it was meant to serve. <span class="insertion-mark">[B]</span> A student may choose easy pages to keep a reading count high, while understanding less. <span class="insertion-mark">[C]</span> This does not mean measurement is useless. <span class="insertion-mark">[D]</span> It means the measure must occasionally be compared with the larger goal. <span class="insertion-mark">[E]</span> If the behavior improves but the goal does not, the number is asking for revision.</p>`,
    insert: "However, a measure changes behavior simply by becoming a target.",
    vocab: [["track", "추적하다"], ["replace", "대체하다"], ["revision", "수정"]],
    questions: [
      { prompt: "주어진 문장이 들어가기에 가장 적절한 곳은?", options: ["[A]", "[B]", "[C]", "[D]", "[E]"], answer: 0, explanation: "측정의 장점을 말한 뒤 However로 전환하여, 측정치가 목표가 될 때 행동이 왜곡되는 설명으로 이어져야 한다." },
      { prompt: "학생의 사례가 보여 주는 문제는?", options: ["측정 도구의 가격이 비싸다.", "독서량이 너무 적으면 목표를 세울 수 없다.", "수치를 높이는 행동이 실제 이해를 약화할 수 있다.", "어려운 책은 언제나 쉬운 책보다 나쁘다.", "팀 과제에는 측정이 적용되지 않는다."], answer: 2, explanation: "페이지 수를 높이기 위해 쉬운 부분만 선택하면 독서의 본래 목표인 이해가 낮아질 수 있다." }
    ]
  },
  "18": {
    level: "3점", title: "Sampling a Moving River",
    passage: `<p>A single water sample can tell scientists what was in a river at one moment, but a river is constantly changing. Rain carries soil from nearby land, factories alter their output, and fish move between habitats. Researchers therefore combine frequent automatic measurements with occasional laboratory tests. Sensors reveal when a sudden change occurs, while laboratory analysis identifies substances that sensors cannot distinguish. Neither method is sufficient alone: continuous data may be chemically vague, and precise tests may miss short events. Together, the two methods provide both timing and detail.</p>`,
    vocab: [["alter", "바꾸다"], ["distinguish", "구별하다"], ["vague", "모호한"]],
    questions: [
      { prompt: "다음 요약문의 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?<br><em>Because river conditions are (A), researchers combine sensors that show the timing of change with laboratory tests that provide chemical (B).</em>", options: ["fixed - speed", "variable - detail", "predictable - cost", "dangerous - color", "artificial - quantity"], answer: 1, explanation: "강의 상태는 계속 변하며(variable), 실험실 분석은 센서가 구별하지 못하는 화학적 세부(detail)를 제공한다." },
      { prompt: "두 방법을 결합하는 이유는?", options: ["두 방법이 동일한 정보만 제공하기 때문에", "실험실 검사가 센서보다 항상 빠르기 때문에", "각 방법의 한계를 다른 방법이 보완하기 때문에", "강의 상태가 시간에 따라 변하지 않기 때문에", "자동 측정이 모든 물질을 정확히 구별하기 때문에"], answer: 2, explanation: "센서는 시간 변화를 잡지만 화학적으로 모호하고, 실험실 검사는 정확하지만 짧은 사건을 놓칠 수 있어 상호 보완적이다." }
    ]
  },
  "19": {
    level: "3점", title: "The Community Archive",
    passage: `<p>When the old Harbor Market was scheduled for demolition, local historian Amina Cole asked residents to bring photographs and stories to the library. She expected a few boxes. Instead, hundreds of people arrived with receipts, handwritten menus, and memories of first jobs. Amina realized that the market’s history did not exist in a single official record. It was scattered across ordinary objects.</p><p>The library created a digital archive, but it did not simply scan everything. Volunteers interviewed each contributor about why an item mattered. A faded receipt, for example, became evidence of a family business that had offered credit during a factory strike. By attaching stories to objects, the project preserved relationships that a photograph of the building alone could not show.</p>`,
    vocab: [["demolition", "철거"], ["receipt", "영수증"], ["contributor", "기증·기여자"]],
    questions: [
      { prompt: "Amina가 깨달은 것으로 가장 적절한 것은?", options: ["시장에 관한 공식 기록이 이미 완전했다.", "지역의 역사는 평범한 물건과 개인의 기억에 흩어져 있었다.", "도서관은 디지털 자료를 보관할 수 없었다.", "철거 계획은 시장 상인이 직접 세웠다.", "사진은 역사 연구에 아무 가치가 없었다."], answer: 1, explanation: "예상보다 많은 주민이 일상 물건과 기억을 가져오면서 역사가 단일 공식 기록이 아니라 여러 개인 자료에 흩어져 있음을 알게 된다." },
      { prompt: "자원봉사자들이 물건마다 인터뷰를 붙인 이유는?", options: ["물건의 판매 가격을 결정하려고", "기증자의 신원을 숨기려고", "물건이 담고 있는 관계와 의미를 보존하려고", "스캔 작업을 중단하려고", "건물 사진을 삭제하려고"], answer: 2, explanation: "사연을 연결해 건물 사진만으로는 보이지 않는 사람들의 관계를 보존했다." }
    ]
  },
  "20": {
    level: "3점", title: "A Different Kind of Finish Line",
    passage: `<p>Leo entered the charity cycling event determined to beat his previous time. Halfway through the course, he saw another rider beside a broken chain. For several seconds, Leo looked at his watch and imagined the minutes disappearing. Then he stopped. He had a chain tool and knew how to use it. Together they fixed the bicycle, but the repair cost Leo any chance of a personal record.</p><p>Near the finish, Leo expected to feel disappointed. Instead, he noticed the rider he had helped waiting beside the road with her family. They cheered as if he were leading the race. His recorded time was slower than last year’s, but the event no longer felt like a failed test of speed. Leo crossed the line understanding that a result can be measured by what it makes possible for someone else.</p>`,
    vocab: [["determined", "굳게 결심한"], ["personal record", "개인 기록"], ["make possible", "가능하게 하다"]],
    questions: [
      { prompt: "Leo의 심경 변화로 가장 적절한 것은?", options: ["impatient → satisfied", "confident → terrified", "grateful → ashamed", "relaxed → confused", "indifferent → angry"], answer: 0, explanation: "기록이 늦어지는 것을 걱정했으나, 도움의 의미를 깨닫고 느린 기록도 실패로 보지 않게 된다." },
      { prompt: "마지막 문장이 시사하는 바로 가장 적절한 것은?", options: ["모든 경기는 기록 측정을 없애야 한다.", "성과의 가치는 타인에게 만든 가능성으로도 판단할 수 있다.", "도움을 주면 반드시 우승할 수 있다.", "개인 기록은 이전 기록보다 항상 느려야 한다.", "자선 행사는 경쟁과 양립할 수 없다."], answer: 1, explanation: "Leo는 속도뿐 아니라 자신의 행동이 다른 사람의 완주를 가능하게 했다는 점을 성과로 받아들인다." }
    ]
  },
  "21": {
    level: "3점", title: "Lines That Become Real",
    passage: `<p>Political borders are often drawn as thin lines on maps, which makes them appear natural and fixed. Yet many borders began as negotiated decisions, compromises, or even temporary marks. Once drawn, however, a line organizes institutions around itself. Roads end at checkpoints, laws apply differently on each side, and families adjust where they work or study. Over time, these practices give the line a physical and social reality that it did not originally possess. To say that a border was constructed is therefore not to say that it is imaginary. It is to recognize how repeated human actions can turn a decision into a durable fact.</p>`,
    vocab: [["negotiated", "협상된"], ["checkpoint", "검문소"], ["durable", "지속되는"]],
    questions: [
      { prompt: "다음 글의 주제로 가장 적절한 것은?", options: ["지도에서 국경선을 정확히 그리는 기술", "국경이 인간의 결정과 반복된 제도를 통해 현실성을 얻는 과정", "모든 국경을 즉시 없애야 하는 이유", "도로 설계가 가족 관계에 미치는 영향", "자연 지형이 정치 제도보다 중요한 이유"], answer: 1, explanation: "처음에는 협상된 선이었지만 법, 도로, 생활 관행이 반복되면서 지속적인 현실이 된다는 내용이다." },
      { prompt: "글쓴이에 따르면 ‘constructed’의 의미는?", options: ["존재하지 않는 상상이라는 뜻", "자연적으로 영원히 고정되었다는 뜻", "인간의 결정과 행동으로 형성되었다는 뜻", "법적 효력이 전혀 없다는 뜻", "지도 제작자의 실수라는 뜻"], answer: 2, explanation: "constructed는 가짜라는 뜻이 아니라 인간의 결정이 관행을 통해 사실로 굳어졌음을 뜻한다." }
    ]
  },
  "22": {
    level: "3점", title: "Designing Reuse for Convenience",
    passage: `<p>Many campaigns encourage consumers to reuse containers, yet participation remains low when reuse requires extra planning. A customer may support the idea but forget to carry a cup or find nowhere to wash it. Successful refill systems treat convenience as part of environmental design. They provide standard containers that can be borrowed in one location and returned in another, while a central service handles cleaning. This shifts the task from individual memory to shared infrastructure. Moral commitment still matters, but a sustainable behavior becomes common only when the surrounding system makes it ordinary and easy to repeat.</p>`,
    vocab: [["container", "용기"], ["refill", "다시 채우기"], ["infrastructure", "기반 시설"]],
    questions: [
      { prompt: "글의 요지로 가장 적절한 것은?", options: ["재사용은 개인의 강한 의지만으로 충분히 확산된다.", "환경 행동을 확산하려면 반복하기 쉬운 시스템을 설계해야 한다.", "모든 용기는 각 가정에서만 세척해야 한다.", "대여 용기는 일회용품보다 항상 비싸다.", "환경 캠페인은 도덕적 메시지를 사용해서는 안 된다."], answer: 1, explanation: "개인 기억에 의존하지 않고 대여·반납·세척 체계를 제공해 편리한 일상 행동으로 만들어야 한다는 내용이다." },
      { prompt: "successful refill systems가 individual memory의 부담을 줄이는 방법은?", options: ["고객에게 더 큰 용기를 구매하게 한다.", "한 장소에서만 반납하게 한다.", "표준 용기와 공동 세척 서비스를 제공한다.", "세척 책임을 각 소비자에게 맡긴다.", "환경 교육을 중단한다."], answer: 2, explanation: "여러 장소에서 빌리고 반납할 수 있는 표준 용기와 중앙 세척 서비스가 개인의 준비 부담을 줄인다." }
    ]
  },
  "23": {
    level: "3점", title: "Trade Below the Soil",
    passage: `<p>Plant roots do not explore soil alone. Many plants form partnerships with fungi whose thin threads reach spaces that roots cannot easily enter. The fungi deliver minerals, especially phosphorus, to the plant. In return, the plant supplies sugars produced through photosynthesis. This exchange is sometimes described as cooperation, but it is not a gift without conditions. A plant may send more sugar to a fungal partner that provides more minerals, and fungi may direct resources toward plants that offer better returns. The relationship is stable not because either side is generous, but because exchange makes continued partnership valuable to both.</p>`,
    vocab: [["fungi", "균류"], ["phosphorus", "인"], ["photosynthesis", "광합성"]],
    questions: [
      { prompt: "윗글의 제목으로 가장 적절한 것은?", options: ["A Conditional Trade Beneath Plant Roots", "Why Plants No Longer Need Sunlight", "Fungi That Destroy Every Partnership", "The Gift of Minerals Without Return", "How Roots Produce Phosphorus"], answer: 0, explanation: "식물과 균류가 당과 무기질을 교환하며, 더 나은 보상을 주는 상대에게 자원을 조절하는 조건부 거래를 설명한다." },
      { prompt: "식물과 균류의 관계가 안정적인 이유는?", options: ["균류가 아무 대가 없이 무기질을 주기 때문에", "식물이 균류 없이 더 많은 공간에 도달하기 때문에", "교환이 양쪽 모두에게 지속할 가치를 주기 때문에", "두 생물이 동일한 자원을 생산하기 때문에", "식물이 모든 균류에 같은 양의 당을 주기 때문에"], answer: 2, explanation: "마지막 문장에서 상호 교환이 양쪽에 이익이어서 관계가 유지된다고 설명한다." }
    ]
  },
  "24": {
    level: "2점", title: "The Detour You Remember",
    passage: `<p>Travelers often judge a trip by how closely it follows a plan. Yet the moments remembered years later are frequently detours: a missed train that leads to a conversation, a closed museum that sends someone into a neighborhood café, or unexpected rain that changes a hike into an afternoon of stories. These events are memorable not simply because they are pleasant. They require travelers to pay attention and make new decisions. A perfect schedule can reduce uncertainty, but it can also allow experience to pass without much thought. Leaving a little unplanned time creates room for a place to answer back.</p>`,
    vocab: [["detour", "우회, 뜻밖의 경로"], ["memorable", "기억할 만한"], ["uncertainty", "불확실성"]],
    questions: [
      { prompt: "다음 글의 제목으로 가장 적절한 것은?", options: ["The Perfect Schedule for Every Traveler", "Why Memorable Trips Need a Little Space", "How to Avoid Talking to Strangers", "Rain as the Main Cause of Travel Failure", "Museums That Never Close"], answer: 1, explanation: "약간의 비계획 시간이 주의를 깨우고 뜻밖의 경험이 들어올 공간을 만든다는 내용이다." },
      { prompt: "뜻밖의 상황이 기억에 남는 이유로 언급된 것은?", options: ["항상 즐겁기 때문에", "비용이 전혀 들지 않기 때문에", "주의를 기울이고 새 결정을 하게 하기 때문에", "모든 일정을 취소하게 하기 때문에", "여행지를 더 빨리 떠나게 하기 때문에"], answer: 2, explanation: "예상 밖 사건은 여행자가 능동적으로 주의를 기울이고 판단하게 만들어 기억에 남는다." }
    ]
  },
  "25": {
    level: "3점", title: "Try a Career in Small Pieces",
    passage: `<p>Students are often asked to choose a career before they have experienced the ordinary work that career contains. A job title may sound attractive while hiding daily tasks that do not fit a student’s interests. Schools can reduce this gap through short career experiments: interviewing a worker about a recent problem, completing a small authentic task, and reflecting on which part felt engaging or tiring. The goal is not to identify one perfect occupation at age seventeen. It is to replace a vague image with evidence about preferred activities, working conditions, and skills to develop. Career choice then becomes a series of informed tests rather than a single permanent decision.</p>`,
    vocab: [["authentic", "실제적인"], ["occupation", "직업"], ["informed", "정보에 근거한"]],
    questions: [
      { prompt: "글쓴이의 주장으로 가장 적절한 것은?", options: ["학생은 가능한 한 빨리 하나의 직업을 확정해야 한다.", "학교는 실제 과업을 활용한 짧은 진로 실험을 제공해야 한다.", "직업인의 일상 업무는 진로 선택과 무관하다.", "진로 활동에서는 힘들게 느낀 일을 기록하지 말아야 한다.", "열일곱 살에는 직업 관련 정보를 접하지 않는 것이 좋다."], answer: 1, explanation: "직업명의 막연한 이미지 대신 실제 과업과 성찰을 통해 자신의 선호와 필요한 역량에 관한 근거를 쌓게 해야 한다." },
      { prompt: "short career experiments의 목표가 아닌 것은?", options: ["선호 활동을 파악하기", "적합한 근무 조건을 생각하기", "개발할 기술을 찾기", "하나의 완벽한 직업을 영구 확정하기", "직업의 일상 과업을 경험하기"], answer: 3, explanation: "글은 17세에 하나의 완벽한 직업을 정하는 것이 목표가 아니라고 명시한다." }
    ]
  },
  "26": {
    level: "3점", title: "Translation as Choreography",
    passage: `<p>Translating a poem is less like carrying a package and more like arranging a dance in a new room. The meaning must move, but the floor has changed. A rhyme that feels natural in one language may sound childish in another; a short line may expand when its image is explained. The translator therefore chooses which movements must remain and which can be altered. Preserving every word may destroy the rhythm, while preserving only the rhythm may erase a crucial image. A successful translation does not reproduce one fixed feature. It coordinates several features so that the new reader experiences a pattern of attention and surprise comparable to the original.</p>`,
    vocab: [["choreography", "안무"], ["crucial", "핵심적인"], ["comparable", "비슷한 수준의"]],
    questions: [
      { prompt: "‘arranging a dance in a new room’이 의미하는 바로 가장 적절한 것은?", options: ["번역은 원문의 단어 순서를 그대로 복사하는 일이다.", "새 언어의 조건에 맞게 여러 표현 요소를 조정하는 일이다.", "시는 다른 언어로 옮길 수 없다는 뜻이다.", "운율은 의미보다 언제나 중요하다는 뜻이다.", "번역자는 원문의 이미지를 모두 삭제해야 한다."], answer: 1, explanation: "언어가 바뀌면 운율, 길이, 이미지의 조건도 달라져 여러 요소를 선택하고 조정해야 함을 춤의 비유로 표현한다." },
      { prompt: "성공적인 번역에 관한 글쓴이의 관점은?", options: ["한 가지 특징만 완벽히 보존해야 한다.", "새 독자에게 원문과 유사한 주의와 놀라움의 패턴을 만들어야 한다.", "모든 단어를 직역하면 운율도 자동으로 보존된다.", "이미지보다 문장 길이만 유지해야 한다.", "번역자의 선택은 작품에 영향을 미치지 않는다."], answer: 1, explanation: "여러 특징을 조율하여 새 독자가 원문과 비교 가능한 경험을 하게 하는 것이 중요하다." }
    ]
  },
  "27": {
    level: "3점", title: "The Loop Inside a Recommendation",
    passage: `<p>A recommendation system does not merely discover what people already like. It also shapes what they have a chance to like. When a platform repeatedly displays one kind of video, users are more likely to watch that kind simply because it is available. The resulting clicks are then treated as evidence of preference, so the system offers even more of the same. This feedback loop can make a temporary curiosity look like a stable identity. Designers can weaken the loop by introducing carefully chosen variety and by distinguishing between a click caused by genuine interest and one caused by limited alternatives.</p>`,
    vocab: [["shape", "형성하다"], ["feedback loop", "피드백 순환"], ["alternative", "대안"]],
    questions: [
      { prompt: "다음 글의 요지로 가장 적절한 것은?", options: ["추천 시스템은 사용자의 고정된 취향만 정확히 반영한다.", "반복 추천과 클릭은 서로를 강화하여 취향처럼 보이는 패턴을 만들 수 있다.", "영상의 종류가 적을수록 사용자는 더 자유롭게 선택한다.", "모든 클릭은 사용자의 강한 관심을 의미한다.", "추천 시스템에는 다양성을 넣어서는 안 된다."], answer: 1, explanation: "제공된 선택이 클릭을 만들고 그 클릭이 다시 같은 추천을 강화하는 순환을 설명한다." },
      { prompt: "feedback loop를 약화하는 방법으로 언급된 것은?", options: ["사용자의 모든 기록을 공개한다.", "같은 영상만 더 자주 보여 준다.", "선택지의 다양성을 넣고 클릭의 원인을 구분한다.", "클릭 수를 선호의 완벽한 증거로 본다.", "일시적 호기심을 고정된 정체성으로 분류한다."], answer: 2, explanation: "신중하게 다양한 콘텐츠를 제시하고, 진짜 관심과 대안 부족으로 인한 클릭을 구분해야 한다." }
    ]
  },
  "28": {
    level: "3점", title: "Advice Can Close a Conversation",
    passage: `<p>Giving advice can feel like the most helpful response to another person’s difficulty. Yet early advice often closes a conversation before the problem has been fully described. The listener selects one detail, turns it into a problem to solve, and offers a plan. The speaker may then stop sharing information that does not fit that plan. A better first response is sometimes a question that tests understanding: “Is the deadline itself the problem, or is it the lack of control over the schedule?” Such a question does not delay help. It improves the model of the situation on which useful help must be based.</p>`,
    vocab: [["fully described", "충분히 설명된"], ["fit", "들어맞다"], ["be based on", "~에 기초하다"]],
    questions: [
      { prompt: "글쓴이가 early advice를 경계하는 이유는?", options: ["조언은 언제나 상대에게 모욕적이기 때문에", "문제가 충분히 드러나기 전에 한 해법으로 대화를 좁힐 수 있기 때문에", "질문은 모든 도움을 불가능하게 하기 때문에", "일정 문제에는 해결책이 존재하지 않기 때문에", "말하는 사람은 자신의 상황을 설명할 수 없기 때문에"], answer: 1, explanation: "일찍 제시된 해법이 대화의 틀을 고정해 그 틀에 맞지 않는 중요한 정보가 나오지 못할 수 있다." },
      { prompt: "마지막 문장에서 model of the situation이 의미하는 것은?", options: ["일정 관리용 컴퓨터 프로그램", "상대가 처한 문제에 대한 정확한 이해", "대화를 빨리 끝내는 규칙", "조언자의 개인 경험", "미리 정해 둔 하나의 해결책"], answer: 1, explanation: "유용한 도움은 상황을 정확히 이해한 뒤에 가능하다는 뜻이다." }
    ]
  },
  "29": {
    level: "3점", title: "The Price You Pay in Time",
    passage: `<p>A service described as free may still impose a price. A clinic with no fee but a six-hour line requires patients to pay with time. This cost is not distributed equally. A salaried worker may wait without losing income, while an hourly worker gives up wages for every hour in line. Long waiting times can therefore exclude people even when money is not requested. Policy makers who evaluate access should count both financial and time costs. Reducing a fee improves access only if the system does not quietly replace that fee with a burden that falls more heavily on those with the least flexible schedules.</p>`,
    vocab: [["impose", "부과하다"], ["salaried", "월급을 받는"], ["flexible", "유연한"]],
    questions: [
      { prompt: "다음 글의 주제로 가장 적절한 것은?", options: ["무료 서비스에서 시간 비용이 접근성에 미치는 불평등한 영향", "모든 진료소가 유료여야 하는 이유", "시간제 노동자의 임금을 계산하는 방법", "대기 시간이 의료의 질을 높이는 원리", "월급제 근로자가 진료를 받지 않는 이유"], answer: 0, explanation: "금전 요금이 없어도 대기 시간이라는 비용이 있으며, 일정 유연성이 낮은 사람에게 더 큰 부담이 된다는 내용이다." },
      { prompt: "시간 비용이 불평등하게 분배되는 이유는?", options: ["모든 사람이 같은 임금을 받기 때문에", "시간제 근로자는 기다리는 동안 임금을 잃을 수 있기 때문에", "월급제 근로자는 진료소를 이용할 수 없기 때문에", "무료 진료소에는 대기 줄이 없기 때문에", "정책 결정자가 금전 비용만 계산하지 않기 때문에"], answer: 1, explanation: "시간제 근로자는 줄에서 보낸 매시간 임금을 포기해야 할 수 있어 같은 대기 시간의 부담이 더 크다." }
    ]
  },
  "30": {
    level: "3점", title: "When the Body Expects Food",
    passage: `<p>The body responds not only to what we eat but also to when eating usually occurs. Repeated meal times can become signals that allow digestion-related processes to prepare in advance. If a person eats at highly irregular times, the body receives weaker timing cues. This does not mean everyone must follow an identical schedule or that an occasional late meal is harmful. Rather, regularity is one factor among many — including food quality, sleep, and activity — that can support metabolic coordination. Health advice becomes misleading when a useful pattern is turned into a rigid rule without regard to individual circumstances.</p>`,
    vocab: [["in advance", "미리"], ["cue", "신호"], ["rigid", "경직된"]],
    questions: [
      { prompt: "다음 글의 요지로 가장 적절한 것은?", options: ["모든 사람은 같은 시각에 동일한 식사를 해야 한다.", "식사 시간의 규칙성은 신체 조절을 도울 수 있지만 절대 규칙으로 과장해서는 안 된다.", "늦은 식사는 한 번만 해도 반드시 건강을 해친다.", "음식의 질은 대사 작용과 관련이 없다.", "신체는 식사 시간을 전혀 예상하지 못한다."], answer: 1, explanation: "규칙적인 식사 시간이 신호가 될 수 있지만, 개인 상황과 다른 건강 요소를 무시한 경직된 규칙으로 만들면 안 된다는 균형 잡힌 주장이다." },
      { prompt: "글쓴이가 명시적으로 경계하는 것은?", options: ["식사 시간과 신체 반응의 관계를 연구하는 것", "유용한 경향을 모든 사람에게 적용되는 엄격한 규칙으로 바꾸는 것", "음식의 질과 수면을 함께 고려하는 것", "개인의 생활 조건을 살피는 것", "가끔 식사 시간이 늦어지는 것"], answer: 1, explanation: "마지막 문장에서 유용한 패턴을 개인 상황을 무시한 rigid rule로 바꾸는 것을 경계한다." }
    ]
  },
  "T1": {
    level: "실전", title: "Fog Nets on a Dry Coast",
    passage: `<p>On some dry coasts, communities collect water from fog using tall mesh nets. Tiny droplets strike the fibers, join together, and run into a channel below. The technology appears simple, but its success depends on local knowledge. A net placed where wind is too weak collects little water; one placed in violent wind may tear. Residents who observe seasonal wind and repair damage are therefore part of the system, not merely its users. Projects fail when outside organizations install equipment and leave without building local capacity. The valuable invention is not the net alone but the combination of material, place, and continuing care.</p>`,
    vocab: [["mesh", "그물망"], ["droplet", "작은 물방울"], ["capacity", "역량"]],
    questions: [
      { prompt: "다음 글의 요지로 가장 적절한 것은?", options: ["안개 그물은 어느 장소에서나 같은 양의 물을 모은다.", "기술의 성공에는 장치뿐 아니라 지역 지식과 지속적 관리가 필요하다.", "강한 바람일수록 그물의 수명이 길어진다.", "외부 기관은 모든 수리 업무를 맡아야 한다.", "해안 주민은 기술의 단순한 사용자에 불과하다."], answer: 1, explanation: "그물 자체보다 장소 선택, 계절풍 지식, 주민의 수리 역량을 결합한 시스템이 중요하다." },
      { prompt: "빈칸에 들어갈 핵심 표현을 고르면?<br><em>The valuable invention is the net plus ______.</em>", options: ["a higher price", "local knowledge and care", "complete automation", "stronger storms", "less community involvement"], answer: 1, explanation: "마지막 문장의 material, place, continuing care를 압축한 표현이다." },
      { prompt: "윗글의 내용과 일치하지 않는 것은?", options: ["물방울은 그물 섬유에 부딪혀 합쳐진다.", "바람이 너무 약하면 물 수집량이 적다.", "강한 바람은 그물을 손상시킬 수 있다.", "지역 주민의 관찰과 수리는 시스템의 일부다.", "장비 설치 후 즉시 떠나는 프로젝트는 언제나 성공한다."], answer: 4, explanation: "현지 역량을 만들지 않고 떠나면 프로젝트가 실패한다고 설명한다." }
    ]
  },
  "T2": {
    level: "실전", title: "Defaults That Guide Without Forcing",
    passage: `<p>A default is the option that takes effect when a person makes no active choice. Defaults can be powerful because choosing requires time and attention. A library that automatically sends a reminder two days before a book is due may reduce late returns without adding a penalty. However, defaults should guide rather than trap. The preferred option must be easy to understand, and people should be able to choose differently without difficulty. A hidden or irreversible default turns convenience into control. Good design respects limited attention while preserving meaningful choice.</p>`,
    vocab: [["take effect", "효력이 생기다"], ["penalty", "벌칙"], ["irreversible", "되돌릴 수 없는"]],
    questions: [
      { prompt: "다음 글의 제목으로 가장 적절한 것은?", options: ["Defaults: Guidance Without a Trap", "Why Every Choice Needs a Penalty", "The End of Library Reminders", "Hidden Options as Perfect Design", "Making All Decisions Irreversible"], answer: 0, explanation: "기본값이 주의를 덜 쓰게 돕되, 이해 가능하고 쉽게 변경할 수 있어야 한다는 내용이다." },
      { prompt: "밑줄 친 trap의 의미로 가장 적절한 것은?", options: ["선택을 쉽게 바꿀 수 있게 하는 장치", "사람이 모르게 선택을 제한하는 설계", "도서 반납을 알려 주는 메시지", "시간과 주의를 절약하는 모든 방법", "벌금이 없는 공공 서비스"], answer: 1, explanation: "숨겨져 있거나 되돌릴 수 없는 기본값이 편의를 통제로 바꾸는 상황을 뜻한다." },
      { prompt: "good default의 조건으로 언급되지 않은 것은?", options: ["이해하기 쉬울 것", "다른 선택으로 바꾸기 쉬울 것", "제한된 주의를 고려할 것", "의미 있는 선택을 보존할 것", "사용자에게 영구적으로 숨길 것"], answer: 4, explanation: "숨겨진 기본값은 좋은 설계가 아니라 통제라고 비판한다." }
    ]
  },
  "T3": {
    level: "실전", title: "Memory in More Than One Voice",
    passage: `<p>When historians record an event through a single interview, the account may sound complete while reflecting only one position. People at the same event notice different details because their roles, expectations, and later experiences differ. An organizer remembers decisions; a child remembers sounds; a shop owner remembers which streets were closed. These accounts may conflict without one of them being simply false. Oral-history projects therefore collect multiple voices and preserve disagreement instead of forcing every memory into one smooth story. The resulting archive is harder to summarize, but it is more honest about the way public memory is formed.</p>`,
    vocab: [["account", "설명, 기록"], ["conflict", "충돌하다"], ["preserve", "보존하다"]],
    questions: [
      { prompt: "글쓴이가 여러 인터뷰를 수집해야 한다고 보는 이유는?", options: ["한 사람은 사건의 모든 세부를 동일하게 기억하기 때문에", "서로 다른 위치와 경험이 서로 다른 기억을 만들기 때문에", "기억의 충돌은 한 사람이 거짓말한다는 증거이기 때문에", "역사 기록은 반드시 하나의 매끄러운 이야기여야 하기 때문에", "어린이의 기억은 기록할 가치가 없기 때문에"], answer: 1, explanation: "역할과 기대, 이후 경험이 달라 같은 사건에서도 주목하고 기억하는 내용이 달라진다." },
      { prompt: "다음 요약문의 빈칸에 들어갈 말로 가장 적절한 것은?<br><em>A reliable oral-history archive values multiple perspectives and keeps their ______ visible.</em>", options: ["prices", "agreement only", "differences", "legal status", "recording speed"], answer: 2, explanation: "여러 목소리와 불일치를 없애지 않고 보존하는 것이 더 정직한 공적 기억을 만든다." },
      { prompt: "윗글의 제목으로 가장 적절한 것은?", options: ["One Perfect Memory of Every Event", "Why Public Memory Needs More Than One Voice", "The Fastest Way to Summarize History", "How to Remove Conflict from Interviews", "The Organizer as the Only Reliable Witness"], answer: 1, explanation: "단일 목소리보다 다양한 위치의 기억과 불일치를 함께 보존해야 한다는 내용이다." }
    ]
  },
};

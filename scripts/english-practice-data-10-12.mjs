// 10~12강 연계 변형문제. 모든 영문 지문과 문항은 이 사이트를 위해 새로 작성했습니다.

const Q = (prompt, correct, distractors, explanation) => ({ prompt, correct, distractors, explanation });
const S = (sourceRef, level, title, passage, vocab, questions) => ({ sourceRef, level, title, passage, vocab, questions });
const build = (plan, sets) => {
  let cursor = 0;
  const made = sets.map((set) => ({ ...set, questions: set.questions.map((spec) => {
    const answer = plan[cursor++];
    const options = [...spec.distractors];
    options.splice(answer, 0, spec.correct);
    return { prompt: spec.prompt, options, answer, explanation: spec.explanation };
  }) }));
  if (cursor !== plan.length) throw new Error(`정답 계획 ${plan.length}개와 문항 ${cursor}개가 다릅니다.`);
  const [first, ...extraSets] = made;
  return { ...first, extraSets };
};

export const englishPractice1012 = {
  "10": build([3,1,0,4,0,3,2,3,2,0], [
    S("Gateway", "2점", "Community Telescope Night", `<p><strong>Community Telescope Night — August 16</strong></p><p>Explore the summer sky with volunteers from North Hill Observatory. The event runs from 8:00 p.m. to 10:00 p.m. on the library roof. Admission is free, but every visitor must reserve a place online because roof capacity is limited to 60 people. Children under 14 must attend with an adult. Three large telescopes will be provided, so personal telescopes are not required. The event will move to August 23 if clouds prevent viewing; registered visitors will receive an email by 5:00 p.m. on the event day. Food and drinks are not allowed on the roof, although water bottles may be left at the entrance desk.</p>`,
      [["observatory", "천문대"], ["capacity", "수용 인원"], ["prevent", "막다"]], [
        Q("Community Telescope Night에 관한 내용과 일치하지 않는 것은?", "개인 망원경을 반드시 가져와야 한다.", ["도서관 옥상에서 두 시간 동안 열린다.", "무료 행사이지만 온라인 예약이 필요하다.", "14세 미만 어린이는 성인과 동행해야 한다.", "구름 때문에 관측이 어려우면 일주일 뒤로 옮겨질 수 있다."], "대형 망원경 세 대가 제공되므로 개인 망원경은 필요하지 않다."),
        Q("행사 당일 날씨 때문에 일정이 바뀌면 등록자에게 언제까지 알리는가?", "오후 5시까지 이메일로 알린다.", ["정오까지 문자로만 알린다.", "행사가 끝난 뒤 우편으로 알린다.", "다음 날 오전 도서관 게시판에만 알린다.", "오후 8시 옥상 입구에서 처음 알린다."], "등록한 방문자는 행사 당일 오후 5시까지 이메일을 받는다.")
      ]),
    S("Exercise 01", "2점", "Neighborhood Seed Library Workshop", `<p><strong>Start a Neighborhood Seed Library</strong></p><p>Join gardener Mina Cho on March 9 from 1:30 p.m. to 3:00 p.m. at Pine Community Center. Participants will learn how to dry, label, and store vegetable seeds for a shared neighborhood collection. The workshop is designed for adults and teenagers aged 15 or older. The fee is $6 and includes envelopes, labels, and three starter seed packets. Bring one clean glass jar with a lid; all other materials will be supplied. Registration closes on March 6, and walk-in participation is not available. Anyone who completes the workshop may borrow seeds from the community collection beginning in April, even if that person did not donate seeds.</p>`,
      [["label", "라벨을 붙이다"], ["starter", "입문용의"], ["walk-in", "현장 접수의"]], [
        Q("Seed Library Workshop에 관한 내용과 일치하는 것은?", "수강료에는 씨앗 봉투와 라벨이 포함된다.", ["14세 어린이는 혼자 참여할 수 있다.", "참가자는 모든 재료를 직접 준비해야 한다.", "등록은 수업이 시작되는 날까지 가능하다.", "씨앗을 기부한 사람만 공동 씨앗을 빌릴 수 있다."], "6달러의 수강료에 봉투, 라벨, 입문용 씨앗 세 봉지가 포함된다."),
        Q("참가자가 직접 가져와야 하는 것은?", "뚜껑이 있는 깨끗한 유리병 한 개", ["채소 씨앗을 넣을 종이봉투 열 장", "개인용 정원 도구와 흙 한 자루", "말린 씨앗 세 종류와 인쇄한 라벨", "수업에 사용할 노트북과 휴대용 프린터"], "안내문은 뚜껑이 있는 깨끗한 유리병 한 개만 가져오라고 한다.")
      ]),
    S("Exercise 02", "2점", "Young Inventors Design Challenge", `<p><strong>Young Inventors Design Challenge</strong></p><p>Teams of two or three students in grades 7–9 are invited to design a device that reduces water use at school. Each team must upload a two-minute demonstration video and a one-page explanation by September 18. A working model is welcome but not required. Teachers may answer questions about the rules, but they may not edit a team’s plan or video. Five finalist teams will present online on September 27. The top team will receive a $300 science-supply credit for its school, and every finalist will receive written feedback from the judges. Videos longer than two minutes will not be reviewed.</p>`,
      [["demonstration", "시연"], ["finalist", "결선 진출자"], ["credit", "구매 지원금"]], [
        Q("Young Inventors Design Challenge에 관한 내용과 일치하지 않는 것은?", "반드시 작동하는 모형을 제출해야 한다.", ["중학교 7~9학년 학생이 팀으로 참가한다.", "물 사용을 줄이는 장치를 설계한다.", "교사는 규칙에 관한 질문에는 답할 수 있다.", "결선 진출 팀은 심사위원의 서면 의견을 받는다."], "작동 모형은 환영하지만 필수는 아니라고 명시되어 있다."),
        Q("심사 대상에서 제외되는 제출물은?", "재생 시간이 2분을 넘는 영상", ["학생 세 명이 함께 만든 영상", "작동 모형 없이 제작한 영상", "한 쪽짜리 설명을 함께 낸 영상", "교사에게 규칙을 질문한 팀의 영상"], "2분을 초과한 영상은 검토하지 않는다.")
      ]),
    S("Exercise 03", "2점", "Harbor Morning Cleanup", `<p><strong>Harbor Morning Cleanup — June 5</strong></p><p>Volunteers will meet at 8:30 a.m. beside the blue information booth and work until 11:00 a.m. Gloves, litter bags, and safety vests will be provided. Please wear closed-toe shoes and bring sun protection. Participants aged 12–15 need a signed permission form; children under 12 cannot join the shoreline team but may help sort collected items with an adult. Free bus tickets are available to registered volunteers who request them before June 2. The cleanup will take place in light rain. If lightning is forecast, cancellation will be posted on the harbor website by 7:00 a.m.</p>`,
      [["closed-toe", "발가락이 덮인"], ["permission form", "보호자 동의서"], ["shoreline", "해안선"]], [
        Q("Harbor Morning Cleanup에 관한 내용과 일치하지 않는 것은?", "자원봉사자는 장갑과 안전조끼를 직접 구입해야 한다.", ["활동은 오전 8시 30분에 시작한다.", "12~15세 참가자는 서명된 동의서가 필요하다.", "12세 미만은 성인과 함께 분류 작업을 도울 수 있다.", "가벼운 비가 와도 정화 활동은 진행된다."], "장갑, 쓰레기봉투, 안전조끼는 주최 측에서 제공한다."),
        Q("무료 버스표를 받으려면 어떻게 해야 하는가?", "등록 후 6월 2일 전에 요청해야 한다.", ["행사 당일 7시 전에 현장에서 구매해야 한다.", "해안선 팀에서 두 시간 이상 일해야 한다.", "보호자 동의서를 우편으로만 제출해야 한다.", "번개 예보가 있을 때 홈페이지에서 신청해야 한다."], "등록 자원봉사자가 6월 2일 전에 요청해야 무료 버스표를 받을 수 있다.")
      ]),
    S("Exercise 04", "2점", "Museum Quiet Hour", `<p><strong>Saturday Quiet Hour at Westfield Museum</strong></p><p>On the first Saturday of every month, the museum opens from 9:00 a.m. to 10:30 a.m. for visitors who prefer a calmer environment. Gallery lights will be lowered, background music will be turned off, and attendance will be limited. Standard admission prices apply, but one support person may enter free with each paying visitor. Noise-reducing headphones can be borrowed at no cost with an ID card. The café remains closed during Quiet Hour and opens at 11:00 a.m. Visitors may leave the galleries at any time and use the rest area near Gallery 2. Advance booking is recommended but not compulsory.</p>`,
      [["attendance", "입장 인원"], ["support person", "동반 지원자"], ["compulsory", "의무적인"]], [
        Q("Museum Quiet Hour에 관한 내용과 일치하는 것은?", "유료 방문자 한 명당 지원자 한 명은 무료로 입장할 수 있다.", ["매주 토요일 오전에 운영된다.", "조용한 시간에는 모든 입장료가 면제된다.", "신분증 없이도 소음 차단 헤드폰을 빌려 박물관 밖에서 계속 사용할 수 있다.", "카페는 오전 9시부터 정상 영업한다."], "입장료를 낸 방문자마다 동반 지원자 한 명이 무료로 들어갈 수 있다."),
        Q("사전 예약에 관한 설명으로 적절한 것은?", "권장되지만 반드시 해야 하는 것은 아니다.", ["전화 예약만 허용되며 현장 입장은 금지된다.", "지원자와 동행하지 않는 방문자만 예약해야 한다.", "매달 첫 토요일 이후에는 예약할 수 없다.", "헤드폰을 빌리지 않는 방문자는 예약이 취소된다."], "Advance booking is recommended but not compulsory라고 명시한다.")
      ])
  ]),
  "11": build([4,2,1,2,0,4,3,2,4,1], [
    S("Gateway", "3점", "What the Tree Sensors Reveal", `<p>City researchers <u>① have installed</u> small sensors on young street trees to measure soil moisture. Each sensor <u>② send</u> a reading every thirty minutes, allowing the team <u>③ to compare</u> shaded and sunny locations. The data, which <u>④ are reviewed</u> together with weather records, help gardeners decide when watering is necessary. Trees planted beside dark pavement often lose water faster than those <u>⑤ surrounded</u> by grass. The project does not replace human observation; it makes limited inspection time more useful.</p>`,
      [["soil moisture", "토양 수분"], ["pavement", "포장도로"], ["inspection", "점검"]], [
        Q("밑줄 친 부분 중 어법상 틀린 것은?", "②", ["①", "③", "④", "⑤"], "Each sensor가 단수 주어이므로 send는 sends가 되어야 한다."),
        Q("센서 자료를 활용하는 주된 목적으로 가장 적절한 것은?", "필요한 관수 시점을 더 효율적으로 판단하는 것", ["모든 거리의 나무를 잔디밭으로 옮기는 것", "사람의 현장 관찰을 영구적으로 없애는 것", "그늘진 장소가 언제나 더 건조하다고 증명하는 것", "날씨 자료 없이 포장도로의 색만 분류하는 것"], "수분과 날씨 자료를 함께 살펴 제한된 점검 시간을 효율적으로 쓰고 물줄 시기를 정한다.")
      ]),
    S("Exercise 01", "3점", "Sleep and the Unfinished Memory", `<p>A student who studies a new piano sequence before sleep may perform it more smoothly the next day. The improvement is not simply the result of tired muscles <u>① recovering</u>. During sleep, patterns of neural activity associated with the practice <u>② are replayed</u>, and connections among them become more stable. What the learner practiced <u>③ remain</u> open to revision, however; an error repeated many times can also be strengthened. For this reason, careful practice before rest is often more useful than <u>④ rushing</u> through a final session. Sleep supports the material <u>⑤ provided</u> to it; it does not judge whether that material is correct.</p>`,
      [["neural", "신경의"], ["stable", "안정된"], ["revision", "수정"]], [
        Q("밑줄 친 부분 중 어법상 틀린 것은?", "③", ["①", "②", "④", "⑤"], "주어 What the learner practiced는 하나의 명사절이므로 remain은 remains가 되어야 한다."),
        Q("글의 요지로 가장 적절한 것은?", "수면은 연습한 기억을 강화하므로 잠들기 전 연습의 정확성이 중요하다.", ["수면은 잘못 연습한 동작만 선택적으로 삭제한다.", "피아노 학습은 근육 회복과 전혀 관련이 없다.", "오래 깨어 있을수록 신경 연결이 자동으로 안정된다.", "마지막 연습은 속도만 빠르면 내용의 정확성과 전혀 무관하게 언제나 효과적이다."], "수면은 제공된 연습 내용을 강화할 뿐 옳고 그름을 판단하지 않으므로 정확한 연습이 필요하다.")
      ]),
    S("Exercise 02", "3점", "A Library of Repaired Things", `<p>The town library now lends sewing machines, hand drills, and other repaired tools. A label attached to each object <u>① describes</u> its earlier damage and the volunteer who fixed it. Borrowers are asked <u>② to report</u> new problems instead of hiding them. This record of failure and repair <u>③ help</u> the next user understand the tool’s limits. The objects are not displayed as perfect products; they are resources <u>④ kept</u> useful through shared care. By making repair histories visible, the library encourages a culture in which maintenance <u>⑤ is treated</u> as knowledge rather than embarrassment.</p>`,
      [["lend", "빌려주다"], ["maintenance", "유지·보수"], ["embarrassment", "부끄러운 일"]], [
        Q("밑줄 친 부분 중 어법상 틀린 것은?", "③", ["①", "②", "④", "⑤"], "주어 This record가 단수이므로 help는 helps가 되어야 한다."),
        Q("도서관이 수리 이력을 공개하는 이유는?", "고장과 유지 경험을 다음 이용자가 활용할 지식으로 만들기 위해", ["자원봉사자의 실수를 공개적으로 처벌하기 위해", "수리된 물건은 앞으로 절대 다시 고장 나지 않는다고 모든 이용자에게 홍보하기 위해", "도구 대여를 중단하고 전시만 하려는 계획을 알리기 위해", "모든 이용자에게 같은 도구를 새것으로 구매하게 하기 위해"], "수리 기록은 도구의 한계를 알려 주고 유지 행위를 공유 지식으로 만든다.")
      ]),
    S("Exercise 03", "3점", "How Young Birds Choose a Route", `<p>Young shorebirds often migrate without following their parents. They possess a rough inherited direction, but local conditions <u>① require</u> adjustment. A bird encountering a strong coastal wind may choose a route that <u>② keeps</u> it closer to land. Individuals <u>③ flying</u> at different heights also experience different air currents. Information gained during the first journey <u>④ are stored</u> and can improve later trips. Thus, migration is neither a completely fixed program nor a skill <u>⑤ learned</u> only by imitation; it combines inherited guidance with experience.</p>`,
      [["shorebird", "도요·물떼새류"], ["inherited", "유전된"], ["air current", "기류"]], [
        Q("밑줄 친 부분 중 어법상 틀린 것은?", "④", ["①", "②", "③", "⑤"], "Information은 셀 수 없는 단수 명사이므로 are stored가 아니라 is stored가 되어야 한다."),
        Q("어린 새의 이동 경로에 관한 설명으로 가장 적절한 것은?", "유전된 방향 감각이 첫 이동의 경험을 통해 조정된다.", ["부모와 같은 높이로 날 때만 정확한 경로를 찾는다.", "첫 이동에서 얻은 정보는 이후 경로에 영향을 주지 않는다.", "해안 바람은 모든 새를 육지에서 더 멀리 이동시킨다.", "이동은 경험과 무관한 완전히 고정된 생물학적 프로그램이다."], "글은 유전된 대략적 방향과 현지 조건에서 얻은 경험이 함께 작용한다고 설명한다.")
      ]),
    S("Exercise 04", "3점", "Feedback Before the Final Draft", `<p>Students in an architecture class post an early sketch before developing a final model. Each student receives comments from two peers whose projects <u>① differ</u> in scale and purpose. The instructor asks reviewers to identify one choice that works and one question that <u>② remains</u> unresolved. Feedback given at this stage <u>③ allows</u> the designer to test alternatives while change is still inexpensive. A polished model, by contrast, can make its creator <u>④ feel</u> too committed to revise it. The value of early criticism lies not in making every design identical but in helping assumptions <u>⑤ becomes</u> visible.</p>`,
      [["peer", "동료 학생"], ["unresolved", "해결되지 않은"], ["assumption", "가정"]], [
        Q("밑줄 친 부분 중 어법상 틀린 것은?", "⑤", ["①", "②", "③", "④"], "helping의 목적격 보어 자리에는 동사원형 become이 와야 한다."),
        Q("초기 단계에서 의견을 받는 장점으로 가장 적절한 것은?", "수정 비용이 커지기 전에 여러 대안을 시험할 수 있다.", ["모든 학생이 동일한 형태의 건물을 설계하게 된다.", "완성 모형을 만든 뒤에는 어떤 비판도 받을 필요가 없다.", "동료가 설계자의 최종 선택을 대신 결정해 준다.", "작품의 규모와 목적이 다른 학생끼리는 의견을 나눌 수 없다."], "초기 피드백은 변화가 아직 저렴할 때 가정을 드러내고 대안을 시험하게 한다.")
      ])
  ]),
  "12": build([3,1,3,4,2,1,0,3,2,4], [
    S("Gateway", "3점", "The Power of a Default", `<p>When employees join a retirement plan automatically but may leave at any time, participation is usually <u>① higher</u> than when they must sign up. The financial choice has not changed, but the default has changed the effort required. People may remain with a preselected option because it appears <u>② recommended</u>, because changing it takes attention, or because delay feels harmless. A default therefore can be <u>③ neutral</u>; it quietly shapes behavior even without removing freedom. Designers of important forms should make defaults <u>④ visible</u> and easy to revise. Transparency helps people treat the preset as a starting point rather than an <u>⑤ unavoidable</u> command.</p>`,
      [["retirement plan", "퇴직연금 제도"], ["preselected", "미리 선택된"], ["transparency", "투명성"]], [
        Q("밑줄 친 낱말 중 문맥상 적절하지 않은 것은?", "③", ["①", "②", "④", "⑤"], "기본값은 행동을 조용히 바꾸므로 neutral이 아니라 influential/non-neutral이 적절하다."),
        Q("글쓴이가 중요한 서식의 기본값에 대해 권하는 태도는?", "기본값을 분명히 보이고 사용자가 쉽게 바꿀 수 있게 해야 한다.", ["사용자가 눈치채지 못하도록 기본값을 숨겨야 한다.", "기본값에서 벗어나는 선택을 법적으로 금지해야 한다.", "모든 기본값을 가장 복잡한 선택으로 설정해야 한다.", "기본값은 어떤 상황에서도 행동에 영향을 주지 않으므로 별도로 설명할 필요가 없다."], "자유를 유지하려면 기본값의 존재와 수정 가능성을 명확히 해야 한다.")
      ]),
    S("Exercise 01", "3점", "The Scratch on the Handmade Bowl", `<p>A handmade bowl may contain a slight difference in color or a faint mark left by a tool. Some buyers see such variation as evidence that the object was shaped by a person rather than a machine. Sellers sometimes emphasize these marks to create a sense of <u>① authenticity</u>. Yet not every flaw proves careful craft. A crack that weakens the bowl is a <u>② harmless</u> sign of human touch; it is a functional defect. The meaning of imperfection depends on whether it records the making process without destroying use. Consumers should therefore <u>③ distinguish</u> traces of production from failures of construction, while makers should explain which variations are <u>④ intentional</u> and which deserve <u>⑤ repair</u>.</p>`,
      [["faint", "희미한"], ["imperfection", "불완전함"], ["construction", "제작 구조"]], [
        Q("밑줄 친 낱말 중 문맥상 적절하지 않은 것은?", "②", ["①", "③", "④", "⑤"], "그릇을 약하게 하는 금은 harmless가 아니라 harmful한 기능적 결함이다."),
        Q("글의 요지로 가장 적절한 것은?", "수제품의 불완전함은 사용 기능을 해치는지에 따라 흔적과 결함으로 구별해야 한다.", ["수제품의 모든 흠집은 기계 제품보다 높은 품질을 보장한다.", "제작자는 의도적인 차이와 수리할 결함을 소비자에게 어떤 경우에도 구분해 설명할 필요가 없다.", "도구 자국이 없는 물건만 사람이 직접 만든 진품으로 볼 수 있다.", "색 차이가 있는 그릇은 기능과 관계없이 모두 즉시 폐기해야 한다."], "사람 손의 흔적과 사용을 해치는 구조적 결함을 구별하라는 내용이다.")
      ]),
    S("Exercise 02", "3점", "A Meadow Is Not Empty", `<p>Managers once described an old industrial field as <u>① vacant</u> land awaiting development. A seasonal survey, however, found grasses, insects, and nesting birds using different parts of it. The site’s irregular soil and broken concrete created a <u>② uniform</u> surface, producing warm, dry pockets beside shaded wet ones. That variety supported species with different needs. The discovery did not mean the field could never change. It meant that planning should begin with a more <u>③ complete</u> account of what was already there. Calling the place empty had made its existing ecological value <u>④ invisible</u>; observation made that value available for <u>⑤ consideration</u>.</p>`,
      [["seasonal survey", "계절별 조사"], ["nesting", "둥지를 트는"], ["ecological", "생태적인"]], [
        Q("밑줄 친 낱말 중 문맥상 적절하지 않은 것은?", "②", ["①", "③", "④", "⑤"], "불규칙한 흙과 콘크리트는 uniform이 아니라 varied/uneven한 표면을 만든다."),
        Q("계절별 조사가 계획에 준 변화로 가장 적절한 것은?", "개발 전 기존 생태적 이용과 가치를 함께 고려하게 했다.", ["그 땅의 모든 개발 가능성을 법적으로 영구 금지했다.", "산업용 건물이 이미 완전한 생태 보호구역임을 증명했다.", "조사를 한 계절만으로 모든 종의 수를 정확히 확정했다.", "깨진 콘크리트를 제거하면 생물 다양성이 반드시 증가한다고 결론 냈다."], "조사는 빈 땅이라는 명칭이 감춘 기존 생태 가치를 계획 정보로 만들었다.")
      ]),
    S("Exercise 03", "3점", "The Map That Invites a Detour", `<p>A transit map is not a photograph of a city. It simplifies curves and distances so that riders can quickly understand connections. This loss of detail is often <u>① useful</u>. Problems arise when the diagram’s clean geometry is mistaken for physical reality. Two stations that look <u>② close</u> may require a long walk, while a line drawn straight may bend across several neighborhoods. A good map therefore uses symbols consistently and adds warnings where simplification could <u>③ guide</u> travelers accurately. Its purpose is not to reproduce every street but to support a decision. Accuracy in this context means choosing which facts to <u>④ preserve</u> and which to <u>⑤ omit</u>.</p>`,
      [["transit", "대중교통"], ["geometry", "기하학적 형태"], ["reproduce", "재현하다"]], [
        Q("밑줄 친 낱말 중 문맥상 적절하지 않은 것은?", "③", ["①", "②", "④", "⑤"], "경고가 필요한 경우는 단순화가 여행자를 accurately guide하는 때가 아니라 mislead하는 때이다."),
        Q("글에 따르면 교통 지도의 정확성이 의미하는 것은?", "이용자의 결정을 위해 필요한 사실을 선택적으로 보존하는 것", ["도시의 모든 거리와 건물을 실제 비율로 그대로 복제하는 것", "역 사이의 물리적 거리를 모든 경우에 동일하게 표시하는 것", "곡선 노선을 언제나 직선보다 길게 그리는 것", "기호를 노선마다 다르게 사용해 상세 정보를 최대화하는 것"], "교통 지도는 목적에 맞는 연결 정보를 보존하고 일부 세부는 생략한다.")
      ]),
    S("Exercise 04", "3점", "When Help Becomes a Headline", `<p>A company may donate computers to a school and publish a large advertisement about the gift. Public recognition can encourage other donors, so visibility is not automatically <u>① harmful</u>. Yet attention can shift from the school’s needs to the company’s image. If the computers require software the school cannot afford, the impressive donation may be <u>② practical</u> only in photographs. Responsible giving begins by asking recipients what they can maintain. It also measures success by long-term use rather than the <u>③ immediate</u> size of a headline. Publicity should <u>④ follow</u> useful support, not replace it, and recipients should retain a voice in how their stories are <u>⑤ presented</u>.</p>`,
      [["donor", "기부자"], ["recipient", "수혜자"], ["retain", "유지하다"]], [
        Q("밑줄 친 낱말 중 문맥상 적절하지 않은 것은?", "②", ["①", "③", "④", "⑤"], "유지할 수 없는 소프트웨어가 필요한 컴퓨터는 practical이 아니라 impractical하다."),
        Q("책임 있는 기부의 기준으로 가장 적절한 것은?", "수혜자가 장기간 유지하고 실제로 사용할 수 있는지를 확인하는 것", ["광고 제목의 크기와 보도 횟수를 성공의 유일한 기준으로 삼는 것", "수혜자의 의견 없이 기부자가 가장 눈에 띄는 물품을 정하는 것", "기부 직후 모든 유지 비용을 학교가 감당하도록 넘기는 것", "장기 사용 여부와 관계없이 사진이 잘 나오는 물품만 제공하는 것"], "수혜자의 필요와 유지 능력을 묻고 장기 사용으로 성공을 평가해야 한다.")
      ])
  ])
};

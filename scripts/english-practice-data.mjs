// 영어시험연구소가 직접 작성한 수능형 연계 지문과 변형문제입니다.
// EBS 교재 원문, 선택지, 정답·해설을 복제하지 않습니다.

import { englishPractice1012 } from "./english-practice-data-10-12.mjs";
import { englishPractice1315 } from "./english-practice-data-13-15.mjs";
import { englishPractice1618 } from "./english-practice-data-16-18.mjs";

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
    level: "2점", title: "A Familiar Chime",
    passage: `<p>At the annual antiques fair, Felix promised his grandmother that he would find the small clock she had sent for repair months earlier. The repairer’s booth number, however, had been changed, and rows of nearly identical tables filled the hall. Felix walked past glass cases twice, uncertain whether he was even in the correct section. Then a clear three-note chime rose above the crowd. He stopped. His grandmother’s clock had always played those notes slightly out of rhythm. Following the sound, he reached a corner table where a silver clock stood beneath a handwritten card bearing her name. The repairer wound it once more, and the uneven melody sounded again. Felix laughed and sent his grandmother a photograph: “I found it—and it still sounds like ours.”</p>`,
    vocab: [["antiques fair", "골동품 박람회"], ["out of rhythm", "박자가 어긋나게"], ["wind", "태엽을 감다"]],
    questions: [
      { prompt: "Felix의 심경 변화로 가장 적절한 것은?", options: ["confused → pleased", "confident → embarrassed", "excited → frightened", "relieved → nervous", "bored → disappointed"], answer: 0, explanation: "바뀐 부스와 비슷한 진열대 사이에서 위치를 몰라 혼란스러워했지만, 익숙한 종소리를 따라 시계를 찾은 뒤 웃으며 기뻐한다." },
      { prompt: "Felix가 시계를 알아보는 데 결정적으로 도움이 된 것은?", options: ["수리공의 전화", "할머니의 사진", "은색 진열장", "약간 박자가 어긋난 세 음의 종소리", "기존 부스 번호"], answer: 3, explanation: "할머니의 시계만이 내던 조금 불규칙한 세 음을 듣고 소리를 따라가 시계를 찾는다." }
    ],
    extraSets: [
      {
        sourceRef: "Exercise 01", level: "2점", title: "The Decision in the Portal",
        passage: `<p>For three weeks, Nari had checked every line of her exchange-program application. She had uploaded her language certificate, asked two teachers to review her essay, and even practiced introducing herself in the host country’s language. On decision day, she opened the school portal before breakfast. A green dot appeared beside the word “updated,” and she pictured herself meeting her future classmates. She clicked the notice. The first sentence thanked her for the careful application; the second said that no places remained. Nari read it again, hoping she had misunderstood. The green dot blurred as tears filled her eyes. She closed the practice notebook on her desk and sat quietly, unable to imagine using the sentences she had worked so hard to learn.</p>`,
        vocab: [["certificate", "증명서"], ["portal", "온라인 정보 창구"], ["blur", "흐릿해지다"]],
        questions: [
          { prompt: "Nari의 심경 변화로 가장 적절한 것은?", options: ["ashamed → proud", "hopeful → disheartened", "confused → grateful", "concerned → satisfied", "indifferent → amused"], answer: 1, explanation: "철저히 준비하고 미래를 상상할 때는 기대에 차 있지만, 자리가 없다는 통보를 읽은 뒤 눈물을 보이며 낙담한다." },
          { prompt: "Nari가 notice를 다시 읽은 이유로 가장 적절한 것은?", options: ["감사 문구를 외우려고", "제출 파일을 삭제하려고", "결정을 잘못 이해했기를 바랐기 때문에", "교사에게 새 추천서를 요청하려고", "호스트 국가의 언어를 번역하려고"], answer: 2, explanation: "거절 결과를 받아들이기 어려워 자신이 내용을 오해했기를 바라며 공지를 다시 읽었다." }
        ]
      },
      {
        sourceRef: "Exercise 02", level: "3점", title: "One Rehearsal Too Many",
        passage: `<p>Leo had trained his voice all summer and believed the difficult final note in the school musical belonged to him. During rehearsal, the director asked the cast to save their voices and mark the last song quietly. Leo noticed several younger actors listening, so he decided to sing the note at full power. It rang through the theater, and he smiled at their impressed faces. Then a sharp pain tightened his throat. When he tried the next line, only a rough whisper came out. Another student had to finish his part while Leo stood beside the piano holding a cup of warm water. Watching the cast repeat the scene without him, he wished he had followed the director’s instruction instead of trying to display his range.</p>`,
        vocab: [["mark", "(연습에서) 힘을 빼고 부르다"], ["range", "음역"], ["rough whisper", "거친 속삭임"]],
        questions: [
          { prompt: "Leo의 심경 변화로 가장 적절한 것은?", options: ["anxious → relieved", "confident → regretful", "pleased → alarmed", "disappointed → satisfied", "delighted → indifferent"], answer: 1, explanation: "자신의 실력과 고음을 확신해 무리해서 노래하지만 목을 다쳐 배역을 이어 가지 못하자 지시를 따르지 않은 일을 후회한다." },
          { prompt: "Leo가 마지막 음을 힘껏 부른 주된 이유는?", options: ["감독이 그렇게 지시해서", "다른 배우들에게 자신의 음역을 보여 주려고", "공연이 이미 시작되어서", "목의 통증을 확인하려고", "다른 학생의 배역을 대신하려고"], answer: 1, explanation: "후배 배우들이 듣는 것을 보고 자신의 음역을 과시하려고 감독의 지시와 달리 전력을 다해 불렀다." }
        ]
      },
      {
        sourceRef: "Exercise 03", level: "2점", title: "Footsteps Above the Studio",
        passage: `<p>Imani stayed late in the community dance studio to practice a piece for her sister’s wedding. Rain tapped softly against the high windows, and the empty room made every turn feel wide and effortless. She played the cheerful song again, pleased that the final sequence at last matched the music. As she reached for her bag, a heavy step sounded on the floor above. The building manager had told her that the upper rooms were locked for repairs. A second step crossed directly over her head, followed by the slow scrape of something being dragged. Imani turned off the speaker. She slipped behind the curtain near the emergency exit and held her phone tightly, listening as the footsteps stopped above the studio door.</p>`,
        vocab: [["effortless", "힘들이지 않는 듯한"], ["scrape", "긁히며 끌리는 소리"], ["emergency exit", "비상구"]],
        questions: [
          { prompt: "Imani의 심경 변화로 가장 적절한 것은?", options: ["fearful → relieved", "hopeful → disappointed", "pleased → frightened", "relaxed → envious", "excited → bored"], answer: 2, explanation: "동작이 음악과 맞아 기뻐하던 중 잠겨 있어야 할 위층에서 발소리를 듣고 커튼 뒤에 숨을 만큼 두려워한다." },
          { prompt: "Imani가 위층의 발소리를 위협적으로 느낀 근거는?", options: ["비가 갑자기 그쳤기 때문에", "언니가 결혼식을 취소했기 때문에", "스피커가 작동하지 않았기 때문에", "관리자가 위층 방들이 잠겨 있다고 말했기 때문에", "비상구가 스튜디오와 멀리 떨어져 있었기 때문에"], answer: 3, explanation: "수리 때문에 잠겨 있어야 할 공간에서 발소리와 물건 끄는 소리가 났으므로 정상적인 상황이 아니라고 판단했다." }
        ]
      },
      {
        sourceRef: "Exercise 04", level: "3점", title: "A Seat by the Heater",
        passage: `<p>After two delayed trains and a crowded replacement bus, Daniel reached the mountain station long after dark. His suitcase wheel had broken on the icy road, and his gloves were wet from pulling it through the snow. The last taxi had already left. Daniel lowered himself onto a metal bench, too tired even to call the guesthouse again. A cleaner pushing a cart noticed his shaking hands. Without asking for an explanation, she moved a wooden chair beside the staff-room heater and brought him a mug of hot barley tea. She then wrote the number of a night driver on a scrap of paper and waited until the call connected. The heater clicked softly beside him. As warmth returned to his fingers, the journey no longer felt like a problem he had to solve entirely alone.</p>`,
        vocab: [["replacement bus", "대체 운행 버스"], ["lower oneself", "힘겹게 몸을 낮추다"], ["barley tea", "보리차"]],
        questions: [
          { prompt: "Daniel의 심경 변화로 가장 적절한 것은?", options: ["ashamed → grateful", "curious → disappointed", "encouraged → frustrated", "exhausted → comforted", "indifferent → satisfied"], answer: 3, explanation: "연이은 지연과 눈길 때문에 몹시 지쳐 있었지만, 청소 직원의 조용한 도움과 따뜻함을 받으며 혼자가 아니라는 위안을 얻는다." },
          { prompt: "cleaner가 Daniel을 위해 한 일로 언급되지 않은 것은?", options: ["난방기 옆에 의자를 놓아 주었다.", "따뜻한 보리차를 가져다주었다.", "야간 운전자의 번호를 적어 주었다.", "전화가 연결될 때까지 기다렸다.", "고장 난 여행 가방 바퀴를 고쳐 주었다."], answer: 4, explanation: "직원은 자리, 차, 운전자 연락처와 통화 연결을 도왔지만 가방 바퀴를 수리하지는 않았다." }
        ]
      }
    ]
  },
  "03": {
    level: "3점", title: "The Workshop Without a Door",
    passage: `<p>When Luma Studio began, its six designers worked around one long table in Busan. Five years later, the company still produced animation, but the table was gone. A storyboard artist in Jeju uploaded sketches before lunch. An editor in Manila refined them in the afternoon, and a sound designer in Helsinki opened the same files while the others slept. The studio rented a meeting room only when a client requested an in-person session. Projects could be redirected to a different team without moving equipment or signing a new building lease. The founder joked that <u>the workshop no longer had a door</u>. She did not mean that the company lacked boundaries or management. She meant that its production process could enter and leave many places without depending on a permanent shared workplace.</p>`,
    vocab: [["storyboard", "스토리보드"], ["redirect", "다른 방향·대상으로 돌리다"], ["permanent", "상설의, 영구적인"]],
    questions: [
      { prompt: "밑줄 친 ‘the workshop no longer had a door’가 의미하는 바로 가장 적절한 것은?", options: ["회사가 제작 파일과 작업 결과를 외부에 모두 공개했다.", "제작 업무가 고정된 작업 장소에 묶이지 않게 되었다.", "디자이너들이 회사의 관리 체계 없이 독립적으로 일했다.", "회사가 고객과의 모든 대면 회의를 중단하기로 했다.", "직원들이 협업을 위해 하나의 도시로 다시 이동했다."], answer: 1, explanation: "여러 지역의 작업자가 같은 파일을 이어서 처리하고 고정된 사무실 없이 팀을 바꿀 수 있으므로, 업무와 특정 장소의 결속이 약해졌다는 뜻이다." },
      { prompt: "Luma Studio의 제작 방식에 관한 내용과 일치하는 것은?", options: ["여러 지역의 작업자가 모두 같은 시간대에 근무한다.", "고객 회의가 있을 때마다 새 사무실을 장기간 임차한다.", "장비 이동 없이 프로젝트를 다른 팀에 넘길 수 있다.", "원격 제작을 위해 회사의 관리 체계와 업무 경계를 없앴다.", "스토리보드 작업은 해외 편집자의 작업이 끝난 뒤 시작된다."], answer: 2, explanation: "디지털 파일을 이용하므로 장비 이동이나 새 건물 임대 없이 다른 팀으로 프로젝트를 돌릴 수 있다고 설명한다." }
    ],
    extraSets: [
      {
        sourceRef: "Exercise 01", level: "2점", title: "Borrowing a Month from the Calendar",
        passage: `<p>Spring arrived late on Mira’s apartment roof. Cold wind crossed the concrete long after gardens at ground level had begun to wake. Instead of waiting, Mira placed dark water containers behind her seed trays and fixed clear panels around the growing area. During the day, the water absorbed sunlight; after sunset, it released the stored heat while the panels slowed the wind. By early April, her basil plants were already tall enough to cut. A neighbor, whose own seeds had barely opened, said that Mira had <u>borrowed a month from the calendar</u>. Mira had not changed the season itself. She had arranged ordinary materials so that the small space around her plants stayed warmer than the surrounding roof.</p>`,
        vocab: [["seed tray", "모종판"], ["absorb", "흡수하다"], ["surrounding", "주변의"]],
        questions: [
          { prompt: "밑줄 친 ‘borrowed a month from the calendar’가 의미하는 바로 가장 적절한 것은?", options: ["파종 날짜를 잘못 계산하여 적절한 재배 시기를 놓쳤다.", "이웃의 재배 기간보다 한 달 더 많은 물을 사용했다.", "주변 온도를 조절하여 식물의 성장을 앞당겼다.", "따뜻한 지역에서 다 자란 식물을 한 달 동안 빌려 왔다.", "기존 계절의 영향을 받지 않는 새로운 품종을 개발했다."], answer: 2, explanation: "물을 담은 어두운 용기와 투명 패널로 열을 저장하고 바람을 막아 주변보다 따뜻한 미기후를 만들었으므로 성장 시기를 앞당겼다는 뜻이다." },
          { prompt: "Mira가 dark water containers를 사용한 이유는?", options: ["낮에 흡수한 열을 밤에 다시 내보내려고", "옥상의 강한 바람으로 씨앗을 넓게 퍼뜨리려고", "모종판에 빗물과 햇빛이 닿지 않도록 막으려고", "바질의 잎과 줄기를 더 어두운 색으로 만들려고", "옥상 바닥에 가해지는 전체 무게를 줄이려고"], answer: 0, explanation: "용기의 물이 낮에 햇빛을 흡수하고 해가 진 뒤 저장된 열을 방출한다고 설명한다." }
        ]
      },
      {
        sourceRef: "Exercise 02", level: "3점", title: "Repairing Sunday Mornings",
        passage: `<p>The volunteers first described their project as a simple repair job. The riverside park had broken benches, faded signs, and a path partly covered by weeds. Yet as they worked, older residents stopped to recall the concerts once held there, and parents asked whether the empty lawn could again host weekend games. The group changed its plan. It still replaced boards and cleared the path, but it also built a low stage and marked a safe play area. On reopening day, families stayed for hours instead of merely walking through. Looking across the crowded lawn, the project leader said, “We were not fixing benches; <u>we were repairing Sunday mornings</u>.” The physical work mattered because it restored a shared reason for neighbors to gather.</p>`,
        vocab: [["riverside", "강변의"], ["reopening", "재개장"], ["restore", "회복시키다"]],
        questions: [
          { prompt: "밑줄 친 ‘we were repairing Sunday mornings’가 의미하는 바로 가장 적절한 것은?", options: ["정해진 주말마다 공원의 시설 보수 업무를 반복했다.", "낡은 강변 공원을 수익 중심의 행사장으로 바꾸었다.", "공간을 고쳐 이웃이 함께하는 시간을 되살렸다.", "시설 관리를 위해 일요일의 공원 이용 시간을 줄였다.", "주민의 참여 대신 전문 수리업체에 작업을 맡겼다."], answer: 2, explanation: "벤치 수리는 개별 업무이고, 궁극적인 목적은 가족과 이웃이 다시 모이는 공동체의 시간을 회복하는 데 있었다." },
          { prompt: "volunteers가 처음 계획에 추가한 것은?", options: ["차량을 위한 주차장과 간이 상점", "낮은 무대와 안전한 놀이 구역", "강 건너편으로 이어지는 보행자 다리", "날씨와 무관하게 쓰는 실내 공연장", "회원만 이용할 수 있는 유료 운동 시설"], answer: 1, explanation: "주민들의 기억과 요청을 들은 뒤 낮은 무대를 만들고 안전한 놀이 구역을 표시했다." }
        ]
      },
      {
        sourceRef: "Exercise 03", level: "3점", title: "The Map Inside the Wings",
        passage: `<p>Young silver geese raised at a conservation center had never followed adult birds beyond the lake. Researchers expected them to wander when autumn came. Instead, soon after the first cold night, the birds lifted together and turned southwest. Tracking devices showed that their route was not perfectly accurate, but it repeatedly bent toward the wintering coast used by earlier generations. Weather and experience would refine the journey in later years, yet neither could fully explain the first departure. The researchers wrote that <u>the map was folded inside every wing</u>. The birds did not carry a literal chart. They carried inherited biological instructions that shaped where they began to fly, instructions formed through the survival of many generations and capable of reaching the next one.</p>`,
        vocab: [["conservation center", "보전 센터"], ["refine", "정교하게 다듬다"], ["inherited", "유전된"]],
        questions: [
          { prompt: "밑줄 친 ‘the map was folded inside every wing’가 의미하는 바로 가장 적절한 것은?", options: ["각 새의 날개 표면에 실제 이동 경로가 표시되어 있었다.", "보전 센터가 출발 전에 모든 새에게 같은 지도를 부착했다.", "어린 새들이 성체의 과거 비행을 정확하게 기억하고 있었다.", "유전 정보가 첫 이동 방향에 영향을 주었다.", "첫 추위가 이전의 모든 비행 경험을 대신하는 역할을 했다."], answer: 3, explanation: "성체를 따라간 적이 없어도 이전 세대의 월동지를 향한 것은 이동의 출발 방향을 형성하는 유전적 정보가 있음을 뜻한다." },
          { prompt: "글에 따르면 silver geese의 이동에 관해 추론할 수 있는 것은?", options: ["어린 새들의 첫 이동 경로는 처음부터 완벽하게 정확하다.", "경험이 이후의 이동 경로를 더 정교하게 만들 수 있다.", "날씨 변화는 이동 시점이나 방향과 관련을 맺지 않는다.", "새들은 보전 센터에서 배운 정보만으로 방향을 결정한다.", "이동에 관여하는 유전 정보는 다음 세대로 이어지지 않는다."], answer: 1, explanation: "처음의 방향은 유전적 지침의 영향을 받지만 날씨와 경험이 이후의 여정을 다듬는다고 설명한다." }
        ]
      },
      {
        sourceRef: "Exercise 04", level: "3점", title: "When the First Brick Moved",
        passage: `<p>During a hospital seminar, most students agreed that night-shift errors mainly resulted from careless individuals. Their discussion focused on how to identify and retrain those workers. Then Professor Han displayed a chart comparing the same nurses under different schedules. Error rates rose sharply after several short breaks between shifts and fell when recovery time increased. No worker’s ability had suddenly changed. For a moment the room was silent. One student later wrote that <u>the first brick in the wall had moved</u>. The evidence had not answered every question, but it had disturbed the assumption supporting the entire debate. If scheduling conditions influenced errors, individual blame could no longer serve as the only explanation, and the students would have to rebuild their questions around a wider view of responsibility.</p>`,
        vocab: [["retrain", "재교육하다"], ["recovery time", "회복 시간"], ["disturb", "흔들다"]],
        questions: [
          { prompt: "밑줄 친 ‘the first brick in the wall had moved’가 의미하는 바로 가장 적절한 것은?", options: ["세미나가 열린 건물의 안전 문제가 새롭게 발견되었다.", "학생들이 효율적인 토론을 위해 발언 순서를 바꾸었다.", "핵심 전제가 흔들려 기존 설명을 재검토하게 되었다.", "교수가 한 번의 자료로 모든 오류 원인을 완전히 증명했다.", "개인의 부주의를 강조하던 기존 주장이 더 강해졌다."], answer: 2, explanation: "오류를 개인의 부주의만으로 보던 토대가 근무 일정 자료로 흔들렸기 때문에 논의 전체를 더 넓은 책임 관점에서 다시 구성해야 한다는 뜻이다." },
          { prompt: "Professor Han의 chart가 보여 준 내용으로 가장 적절한 것은?", options: ["같은 간호사의 업무 능력이 근무할 때마다 크게 달라졌다.", "교대 사이 회복 시간이 짧을수록 오류가 늘었다.", "별도의 재교육을 받은 사람에게서만 오류가 발생했다.", "야간 근무의 오류는 언제나 동일한 개인이 일으켰다.", "근무 일정의 차이는 전체 오류율에 영향을 주지 않았다."], answer: 1, explanation: "교대 사이의 짧은 휴식이 이어질 때 오류율이 상승하고 회복 시간이 늘면 감소했다." }
        ]
      }
    ]
  },
  "04": {
    level: "3점", title: "Rivals at the Same Table",
    passage: `<p>Two ferry companies served the same island and competed fiercely for passengers. Each advertised cleaner cabins and more convenient departure times. Yet both used the island’s single dock, where one accident could close the route for everyone. The companies therefore shared weather reports, coordinated emergency drills, and agreed on common boarding signals. They did not exchange pricing plans or stop improving their own service. Instead, they drew a clear line between areas where cooperation protected the whole transport system and areas where competition gave travelers better choices. Managers from both companies met monthly to review that line. Their success depended neither on constant rivalry nor on unlimited cooperation, but on maintaining a deliberate balance between the two.</p>`,
    vocab: [["fiercely", "치열하게"], ["coordinate", "조율하다"], ["deliberate", "의도적이고 신중한"]],
    questions: [
      { prompt: "다음 글의 요지로 가장 적절한 것은?", options: ["공동 시설을 사용하는 기업은 안전을 위해 모든 가격 경쟁까지 완전히 중단해야 한다.", "운송 안전은 한 기업이 독립적으로 책임지는 것이 효율적이다.", "경쟁 기업은 공동 이익과 차별화 영역을 나누어 균형을 잡아야 한다.", "서비스 품질을 높이려면 기업 간 정보를 전면적으로 공개해야 한다.", "이용자의 선택권은 동일한 운영 기준이 마련될 때 줄어들 수 있다."], answer: 2, explanation: "안전처럼 전체 시스템에 필요한 영역에서는 협력하고 가격·서비스에서는 경쟁하면서 두 활동의 경계를 의도적으로 관리해야 한다는 내용이다." },
      { prompt: "두 회사가 서로 공유하지 않은 것으로 언급된 것은?", options: ["기상 상황에 관한 정기 보고 자료", "비상 상황에 대비한 훈련", "승객에게 적용할 가격 계획", "승선 과정에서 쓰는 신호", "공동 부두의 안전 정보"], answer: 2, explanation: "두 회사는 안전 관련 정보와 절차를 공유했지만 가격 계획은 교환하지 않았다." }
    ],
    extraSets: [
      {
        sourceRef: "Exercise 01", level: "3점", title: "Sunlight, Knowledge, and the Winter Tomato",
        passage: `<p>The amount of winter sunlight reaching Greenhill Farm had not changed in generations. What changed was the farmers’ ability to use it. Earlier growers planted only after the last frost. Their grandchildren tested soil temperatures, selected seeds suited to cool conditions, and designed low glass covers that stored daytime heat. Later, they learned which crops could follow one another without exhausting the soil. Each improvement was a piece of recorded knowledge passed to the next season. The farm did not create more sunlight, yet it turned a larger share of the available energy into food. Its rising harvest was therefore not simply a gift of favorable weather; it was the result of increasingly precise knowledge about how to capture and direct a constant natural resource.</p>`,
        vocab: [["frost", "서리"], ["exhaust the soil", "토양을 고갈시키다"], ["precise", "정교한"]],
        questions: [
          { prompt: "다음 글의 요지로 가장 적절한 것은?", options: ["농업 생산량은 계절마다 새롭게 들어오는 햇빛의 양에 의해서만 결정된다.", "자연 에너지를 활용하는 지식의 축적이 식량 생산을 늘릴 수 있다.", "추운 지역에서는 전통적인 파종 시기를 반드시 유지해야 한다.", "토양을 보호하려면 한 종류의 작물만 계속 재배하는 것이 좋다.", "새로운 농업 기술은 이전 세대의 경험과 분리해 평가해야 한다."], answer: 1, explanation: "햇빛의 양은 일정했지만 종자 선택, 온도 측정, 덮개, 윤작 지식이 축적되면서 더 많은 에너지를 식량으로 바꾸었다." },
          { prompt: "Greenhill Farm의 수확량이 증가한 직접적 배경으로 언급되지 않은 것은?", options: ["파종 시기를 판단하기 위해 토양 온도를 자세히 측정했다.", "추위에 맞는 종자를 선택했다.", "낮의 열을 저장하는 덮개를 사용했다.", "작물을 심는 순서를 연구했다.", "농장에 도달하는 겨울 햇빛이 크게 늘었다."], answer: 4, explanation: "겨울 햇빛의 양은 여러 세대 동안 변하지 않았다고 명시되어 있다." }
        ]
      },
      {
        sourceRef: "Exercise 02", level: "3점", title: "The Block Without a Reporter",
        passage: `<p>When the neighborhood newspaper closed, council decisions and road repairs often passed without public notice. A group of residents created a shared news page using free digital tools. One member attended local meetings, another checked public records, and others photographed changes in the streets. Before publishing a claim, two volunteers had to confirm its source, and corrections remained visible beneath the original post. The page did not turn every resident into a professional journalist. It did, however, give ordinary citizens the means to gather information, question local authority, and distribute news their neighbors needed. Technology shifted part of the power of local reporting to the community, along with the responsibility to verify information carefully.</p>`,
        vocab: [["public record", "공공 기록"], ["correction", "정정"], ["local authority", "지역 권력 기관"]],
        questions: [
          { prompt: "다음 글의 요지로 가장 적절한 것은?", options: ["지역 신문이 사라지면 공공기관의 회의도 중단되어야 한다.", "디지털 도구는 시민이 지역 보도와 검증을 담당하게 할 수 있다.", "전문 기자가 없는 뉴스는 출처 확인과 관계없이 공개할 수 있다.", "지역 소식은 중앙 언론사가 일괄적으로 수집하는 것이 바람직하다.", "시민의 사진 자료는 공공 기록보다 항상 신뢰도가 높다고 볼 수 있다."], answer: 1, explanation: "기술이 일반 시민에게 지역 정보를 수집·감시·전달할 수단을 제공하는 동시에 검증 책임도 부여했다." },
          { prompt: "shared news page의 운영 원칙으로 언급된 것은?", options: ["주장은 두 명의 자원봉사자가 출처를 확인한다.", "잘못된 글은 정정 기록 없이 즉시 삭제한다.", "지역 회의에는 전문 기자만 참석할 수 있다.", "사진이 있으면 공공 기록 확인을 생략한다.", "모든 주민은 기사 한 편을 의무적으로 작성한다."], answer: 0, explanation: "게시 전에 두 명의 자원봉사자가 정보의 출처를 확인하고 정정도 원문 아래에 남겼다." }
        ]
      },
      {
        sourceRef: "Exercise 03", level: "3점", title: "A Beautiful Guess Is Still a Guess",
        passage: `<p>Botanist Elena proposed that the purple edges of a mountain plant protected its leaves from intense sunlight. The idea fit several observations and offered an elegant explanation. Still, her team treated it as a hypothesis rather than a conclusion. They grew plants under different light levels and compared purple-edged leaves with green ones. The results showed no meaningful difference in sun damage. Instead of defending the original idea, Elena revised it and began testing whether the color discouraged insects. Intuition had helped her ask a productive question, but evidence determined what the team could claim as fact. In science, an appealing explanation earns attention; it does not earn acceptance until testing supports it.</p>`,
        vocab: [["botanist", "식물학자"], ["hypothesis", "가설"], ["meaningful difference", "유의미한 차이"]],
        questions: [
          { prompt: "다음 글의 요지로 가장 적절한 것은?", options: ["과학자는 처음 세운 가설을 연구가 끝날 때까지 유지해야 한다.", "직관에서 나온 설명도 검증과 증거를 거쳐야 사실로 인정된다.", "실험 결과가 예상과 다르면 관찰 자료의 사용을 중단해야 한다.", "식물의 색에 관한 연구는 빛보다 곤충을 먼저 조사해야 한다.", "우아한 설명은 반복 실험 없이도 과학적 결론이 될 수 있다."], answer: 1, explanation: "직관은 유용한 가설을 만들었지만 실험 결과에 따라 수정되었으며, 최종 판단 기준은 증거라고 강조한다." },
          { prompt: "Elena가 첫 가설을 수정한 이유는?", options: ["강한 빛에서 보라색 가장자리를 가진 식물이 전혀 자라지 못했기 때문에", "보라색 잎과 녹색 잎의 햇빛 손상 차이가 뚜렷하지 않았기 때문에", "곤충이 모든 보라색 잎을 먹어 치웠기 때문에", "연구팀이 식물의 색을 측정하지 못했기 때문에", "산악 지역의 햇빛이 예상보다 약했기 때문에"], answer: 1, explanation: "서로 다른 잎의 햇빛 손상에서 유의미한 차이가 나타나지 않아 다른 설명을 검토했다." }
        ]
      },
      {
        sourceRef: "Exercise 04", level: "2점", title: "The Empty Seat at Lunch",
        passage: `<p>On her first day at a new school, Sora felt her stomach tighten as lunchtime approached. She worried about where to sit and whether her questions would sound awkward. Entering the cafeteria, she noticed another student standing alone with a tray, scanning the crowded tables in the same uncertain way. Sora recognized the expression immediately. Instead of hiding at an empty corner, she walked over and asked whether they should look for seats together. The question was simple, but both students relaxed. Sora’s anxiety had pointed out what a stranger might need because she needed it too. By turning her attention outward, she changed private discomfort into an opportunity for empathy and connection.</p>`,
        vocab: [["tighten", "긴장으로 조여 오다"], ["scan", "훑어보다"], ["discomfort", "불편함"]],
        questions: [
          { prompt: "다음 글의 요지로 가장 적절한 것은?", options: ["낯선 환경에서 생기는 불안은 다른 사람과 어울리지 않을 때에만 저절로 사라진다.", "자신의 불안을 타인의 처지를 이해하고 연결하는 데 활용할 수 있다.", "새로운 친구를 사귀려면 불편한 감정을 드러내지 않는 것이 좋다.", "학교생활에 적응하려면 먼저 많은 사람의 관심을 끌어야 한다.", "사회적 긴장은 익숙한 장소에서도 같은 정도로 나타나기 마련이다."], answer: 1, explanation: "Sora는 자신의 불안과 같은 표정을 한 학생을 알아보고 먼저 손을 내밀어 불편함을 공감과 연결로 바꾸었다." },
          { prompt: "Sora가 다른 학생에게 말을 건 계기는?", options: ["담임 교사가 두 사람에게 같은 점심 자리를 미리 지정해 주었다.", "다른 학생도 자리를 찾으며 불안해 보였다.", "빈 식탁이 하나도 남아 있지 않았다.", "친구가 먼저 함께 앉자고 요청했다.", "점심시간이 곧 끝난다는 안내가 나왔다."], answer: 1, explanation: "상대가 붐비는 식탁을 불확실한 표정으로 살피는 모습에서 자신의 불안과 같은 감정을 알아보았다." }
        ]
      }
    ]
  },
  "05": {
    level: "3점", title: "The Literature Between the Panels",
    passage: `<p>A literature course may analyze a novel's narrator while ignoring the writers who create stories for games and graphic narratives. That boundary has become difficult to defend. Narrative designers build voices that respond to a reader's choices, and comics writers control meaning through the timing between words and images. Their work asks how language can carry character, tension, and moral conflict under unusual formal limits. Not every popular story deserves academic praise, just as not every printed novel does. Yet the form in which a story appears should not disqualify its writer from serious attention. Literature departments should study such writers when their use of language and structure expands what storytelling can do.</p>`,
    vocab: [["narrative designer", "서사 설계자"], ["formal limit", "형식적 제약"], ["disqualify", "자격을 박탈하다"]],
    questions: [
      { prompt: "글쓴이의 주장으로 가장 적절한 것은?", options: ["문학 교육은 종이에 인쇄되어 출판된 장편 소설만을 분석 대상으로 한정해야 한다.", "인기 있는 이야기는 작품성 검토 없이 문학으로 인정해야 한다.", "새로운 매체의 작가도 언어와 서사의 성취에 따라 연구해야 한다.", "게임의 선택 구조는 인물과 갈등을 표현하는 데 적합하지 않다.", "만화의 의미는 글보다 그림을 만든 사람에게만 의존한다."], answer: 2, explanation: "매체의 형태만으로 작가를 배제하지 말고, 언어와 구조를 통해 이야기의 가능성을 넓혔는지에 따라 진지하게 연구하자는 주장이다." },
      { prompt: "윗글에서 새로운 서사 형식의 특징으로 언급된 것은?", options: ["독자의 선택에 따라 달라지는 목소리를 설계할 수 있다.", "대중의 인기를 얻은 모든 작품이 곧바로 학문적 찬사를 받을 수 있다.", "인쇄 소설보다 도덕적 갈등을 더 쉽게 제거할 수 있다.", "글과 이미지 사이의 시간 조절은 의미와 무관하다.", "형식적 제약이 없어 작가가 언어를 사용할 필요가 없다."], answer: 0, explanation: "서사 설계자는 독자의 선택에 반응하는 목소리를 만들고, 만화 작가는 글과 이미지 사이의 타이밍으로 의미를 조절한다고 설명한다." }
    ],
    extraSets: [
      {
        sourceRef: "Exercise 01", level: "3점", title: "Shrink the Blackout",
        passage: `<p>When a storm cut power across the city, the manager of a small care home felt responsible for everything at once: medical devices, meals, elevators, and worried families. Repeating the size of the crisis did not help her staff act. She drew four columns on a board—power, water, food, and communication—and assigned one immediate task under each. A nurse checked battery life, the cook counted meals that required no heating, and an assistant called families with a single verified update. The citywide outage remained serious, but the team could now see what was within reach. Leaders facing a large emergency should divide it into concrete, controllable problems. A smaller frame does not deny the crisis; it creates the first useful place to act.</p>`,
        vocab: [["care home", "요양 시설"], ["within reach", "통제·달성 가능한"], ["concrete", "구체적인"]],
        questions: [
          { prompt: "글쓴이의 주장으로 가장 적절한 것은?", options: ["위기 상황에서는 전체 피해 규모를 반복해서 알리는 것이 우선이다.", "대규모 문제를 통제 가능한 작은 과제로 나누어 대응해야 한다.", "비상시에는 관리자가 모든 실무를 혼자 처리하는 편이 안전하다.", "도시 기반 시설이 복구될 때까지 현장의 판단을 미루어야 한다.", "문제의 일부만 다루면 위기의 심각성을 반드시 부정하게 된다."], answer: 1, explanation: "거대한 정전 자체만 바라볼 때는 행동하기 어려웠지만, 전력·물·식량·소통으로 나누자 즉시 수행할 일이 보였다는 사례를 통해 주장을 뒷받침한다." },
          { prompt: "관리자가 board를 사용한 결과로 가장 적절한 것은?", options: ["직원들이 직접 도시 전체의 전력 공급 체계를 즉시 복구했다.", "각자가 당장 확인할 수 있는 일을 맡아 행동했다.", "가족에게 확인되지 않은 복구 시간을 전달했다.", "가열이 필요한 식사만 우선 제공하기로 했다.", "시설의 모든 의료 기기를 새것으로 교체했다."], answer: 1, explanation: "배터리 확인, 비가열 식사 수량 파악, 검증된 소식 전달처럼 각 영역의 구체적이고 실행 가능한 업무가 배정되었다." }
        ]
      },
      {
        sourceRef: "Exercise 02", level: "3점", title: "Before You Share the Wellness Chart",
        passage: `<p>A colorful chart claiming that one spice prevents six diseases can travel through a family chat in minutes. Its polished design, however, says nothing about the quality of its evidence. Before changing a diet or forwarding health advice, readers should trace the claim to a reliable source. Public health agencies, university research centers, and licensed medical organizations normally identify the studies they use, state important limits, and revise guidance when stronger evidence appears. A celebrity's confidence or a large number of shares cannot perform those functions. Nutrition decisions affect the body over time, so convenience should not replace verification. Begin with institutions whose methods and evidence can be examined, and treat unsupported online claims as questions rather than instructions.</p>`,
        vocab: [["trace A to B", "A의 출처를 B까지 추적하다"], ["licensed", "공인 자격을 갖춘"], ["unsupported", "근거가 뒷받침되지 않은"]],
        questions: [
          { prompt: "글쓴이의 주장으로 가장 적절한 것은?", options: ["건강 정보는 온라인에서 반복해서 공유된 횟수가 많을수록 더 믿을 만하다고 보아야 한다.", "식이 조언은 검증 가능한 근거를 제시하는 기관에서 우선 확인해야 한다.", "유명인이 소개한 영양법은 연구의 한계를 따로 살필 필요가 없다.", "공공기관의 지침은 새로운 연구가 나와도 수정하지 않는 편이 낫다.", "온라인 건강 정보는 디자인이 화려하면 전문 자료로 인정할 수 있다."], answer: 1, explanation: "몸에 영향을 주는 영양 결정을 내리기 전에 연구 근거와 한계를 공개하는 공공·대학·의료 기관의 자료를 우선 확인하라고 주장한다." },
          { prompt: "신뢰할 만한 기관의 특징으로 언급되지 않은 것은?", options: ["활용한 연구를 식별한다.", "중요한 한계를 밝힌다.", "더 강한 증거에 따라 지침을 고친다.", "검토 가능한 방법과 근거를 제시한다.", "유명인의 확신을 증거보다 우선한다."], answer: 4, explanation: "유명인의 자신감과 공유 횟수는 근거 제시, 한계 설명, 지침 수정의 기능을 대신할 수 없다고 명시한다." }
        ]
      },
      {
        sourceRef: "Exercise 03", level: "2점", title: "The Apron on the Manager",
        passage: `<p>During the café's busiest hour, a new manager stood by the register and repeatedly told the staff that customers came first. Then the dishwasher stopped, clean cups ran out, and orders began to wait. Instead of calling another meeting, the manager tied on an apron, cleared a sink, and washed cups beside a trainee. She still watched the whole room and reassigned tasks when necessary, but her actions made the priority visible. The next day, employees helped one another before being asked because they had seen that urgent, ordinary work was not beneath the leader. A servant leader should be willing to enter important work, especially when the team is under pressure. Participation turns a stated value into a standard others can follow.</p>`,
        vocab: [["reassign", "재배정하다"], ["beneath", "체면에 맞지 않는"], ["servant leader", "섬김형 리더"]],
        questions: [
          { prompt: "글쓴이의 주장으로 가장 적절한 것은?", options: ["관리자는 아무리 현장이 바쁘더라도 실무에 참여하지 않고 지시만 분명히 전달해야 한다.", "팀이 바쁠수록 리더는 중요한 실무에 참여해 기준을 보여야 한다.", "직원이 스스로 움직이게 하려면 업무 우선순위를 숨겨야 한다.", "리더가 사소한 일을 맡으면 전체 상황을 관찰할 수 없게 된다.", "섬김형 리더십은 구성원의 역할을 매일 바꾸는 데서 시작된다."], answer: 1, explanation: "말로 고객 우선을 강조하는 데 그치지 않고 직접 설거지를 도우며 가치의 기준을 행동으로 보여 준 사례가 핵심이다." },
          { prompt: "직원들이 다음 날 보인 변화는?", options: ["관리자의 요청을 기다리지 않고 서로 도왔다.", "혼잡한 영업 시간에 모든 주문 접수 업무를 잠시 중단했다.", "현장 업무는 관리자의 책임이라고 판단했다.", "고객보다 내부 회의를 먼저 열기로 했다.", "각자 맡은 일 외에는 관여하지 않았다."], answer: 0, explanation: "리더가 긴급한 평범한 일을 직접 하는 모습을 본 뒤 직원들은 지시를 받기 전부터 서로 돕기 시작했다." }
        ]
      },
      {
        sourceRef: "Exercise 04", level: "3점", title: "Teach the Body to Come Down",
        passage: `<p>Athletes often practice explosive effort but assume that calm breathing will appear automatically when a contest ends. It may not. After repeated sprints, the body can remain in a high-alert state even while the athlete is sitting still. Coaches should therefore teach recovery breathing away from competition, when there is time to notice and adjust the pattern. An athlete might lengthen each exhalation, relax the shoulders, and observe how quickly the pulse settles. Practiced regularly, the routine becomes available after a mistake, during a timeout, or before sleep. Slow breathing is not a substitute for training intensity. It is a separate recovery skill, and athletes should rehearse it under calm conditions so that they can use it when pressure is high.</p>`,
        vocab: [["explosive effort", "폭발적인 노력"], ["exhalation", "날숨"], ["settle", "진정되다"]],
        questions: [
          { prompt: "글쓴이의 주장으로 가장 적절한 것은?", options: ["선수는 경기에서 긴장이 최고조에 달한 순간에만 호흡을 조절하는 연습을 해야 한다.", "느린 호흡은 고강도 체력 훈련을 완전히 대신할 수 있다.", "회복 호흡은 평온한 상황에서 별도의 기술로 반복 연습해야 한다.", "운동이 끝나면 신체의 각성 상태는 언제나 즉시 사라진다.", "호흡 훈련에서는 날숨보다 어깨의 힘을 유지하는 것이 중요하다."], answer: 2, explanation: "압박 상황에서 회복 호흡을 사용할 수 있도록, 여유가 있는 평온한 조건에서 날숨과 이완을 관찰하며 반복 연습해야 한다는 주장이다." },
          { prompt: "회복 호흡 연습의 방법으로 언급된 것은?", options: ["날숨을 더 길게 하고 어깨의 힘을 푼다.", "맥박이 빨라지도록 숨을 짧게 반복한다.", "경기 직후에만 처음으로 호흡을 조절한다.", "잠들기 전에는 회복 루틴을 사용하지 않는다.", "실수한 뒤에는 고강도 달리기로 긴장을 낮춘다."], answer: 0, explanation: "날숨을 길게 하고 어깨를 이완한 뒤 맥박이 얼마나 빨리 안정되는지 살피는 방법을 제시한다." }
        ]
      }
    ]
  },
  "06": {
    level: "3점", title: "The Bus That Was Fast on Paper",
    passage: `<p>A city promoted its new express shuttle as the fastest route to the university. The ride took only eighteen minutes, compared with twenty-eight on the regular bus. Yet the express arrived once an hour, while the regular bus came every twelve minutes. A student who reached the stop without checking the timetable could wait so long for the express that its ten-minute travel advantage disappeared. Riders value the whole journey, not just the time a vehicle spends moving. For transit to be practically useful, frequency can matter as much as speed: a service that arrives often reduces uncertain waiting and lets passengers leave when they actually need to. The fastest vehicle is not always part of the fastest trip.</p>`,
    vocab: [["promote A as B", "A를 B라고 홍보하다"], ["frequency", "운행 빈도"], ["uncertain", "불확실한"]],
    questions: [
      { prompt: "다음 글의 주제로 가장 적절한 것은?", options: ["도시 대중교통의 요금을 노선별 운행 거리와 시간에 따라 정하는 기준", "대중교통의 실용성을 좌우하는 운행 빈도의 중요성", "대학 주변에서 버스 속도를 낮추어야 하는 이유", "승객이 모든 시간표를 미리 외워야 하는 필요성", "급행버스와 일반버스의 좌석 수를 같게 하는 방법"], answer: 1, explanation: "차량의 주행 시간이 짧아도 배차 간격이 길면 기다림 때문에 전체 여정이 느려질 수 있으므로 빈도가 실용성에 중요하다는 내용이다." },
      { prompt: "급행 셔틀의 시간상 이점이 사라질 수 있는 이유는?", options: ["일반버스보다 반드시 더 많은 정류장에 멈추어 승객을 태우기 때문에", "한 시간 간격이라 정류장에서 오래 기다릴 수 있기 때문에", "대학까지 가는 도로가 매일 폐쇄되기 때문에", "학생이 급행 요금을 현금으로만 내야 하기 때문에", "차량이 움직이는 데 일반버스보다 오래 걸리기 때문에"], answer: 1, explanation: "급행은 주행 자체는 10분 빠르지만 한 시간에 한 번만 오므로, 시간표를 맞추지 못하면 대기 시간이 그 이점을 없앨 수 있다." }
    ],
    extraSets: [
      {
        sourceRef: "Exercise 01", level: "3점", title: "Who Gets a Voice on Harbor Island",
        passage: `<p>Harbor Island's council asked residents to vote on whether an empty pier should become a public park. Only property owners, however, received ballots. That rule excluded renters who had lived on the island for decades, workers in council housing, and young adults sharing family homes. These residents used the pier area, paid local taxes through rent and purchases, and would live with the result. A democracy is active when the people affected by a decision can help shape it, not merely when officials hold a vote. Formal ownership may be simple to verify, but convenience is a poor reason to silence permanent members of a community. The council should define participation broadly enough to include residents with an enduring stake in the island's common life.</p>`,
        vocab: [["pier", "부두"], ["exclude", "배제하다"], ["enduring stake", "지속적인 이해관계"]],
        questions: [
          { prompt: "다음 글의 주제로 가장 적절한 것은?", options: ["섬 지역의 모든 부동산 가격을 공정하게 조사하고 평가하는 행정 절차", "공동체 의사 결정에 영구 거주자를 폭넓게 참여시킬 필요성", "공공 부두를 상업 시설로 바꿀 때 생기는 경제 효과", "지방세를 주택 소유자에게만 부과해야 하는 근거", "온라인 투표에서 소유권을 신속하게 확인하는 기술"], answer: 1, explanation: "결정의 영향을 받으며 공동체에 지속적으로 참여하는 거주자를 재산 소유 여부만으로 배제해서는 안 된다는 내용이다." },
          { prompt: "property owners만 투표하게 한 규칙의 문제로 가장 적절한 것은?", options: ["부두를 거의 이용하지 않는 외부 관광객까지 투표권자로 모두 포함했다.", "오랫동안 거주한 세입자와 공공주택 주민을 배제했다.", "투표 결과가 나오기 전에 공원을 완공했다.", "재산 소유 여부를 확인할 방법이 전혀 없었다.", "모든 청년에게 두 장의 투표용지를 보냈다."], answer: 1, explanation: "수십 년 거주한 세입자, 공공주택 거주 노동자, 가족과 사는 청년처럼 결정의 영향을 받는 주민들이 투표에서 제외되었다." }
        ]
      },
      {
        sourceRef: "Exercise 02", level: "3점", title: "A Chair in Two Rooms",
        passage: `<p>In a warehouse, an old wooden chair sat beside broken shelves and packing boxes. Visitors called it worn-out furniture and asked why it had not been discarded. Months later, the chair appeared alone under soft light in a museum gallery. A label explained that a dockworker had built it from shipping crates during a long strike. People now studied its uneven joints as evidence of limited tools and careful reuse. Nothing in the wood had changed. Its new location connected the object to a history and invited a different kind of attention. We do not interpret objects from physical features alone; the setting supplies expectations that make some features visible and others easy to miss.</p>`,
        vocab: [["worn-out", "낡아 해진"], ["joint", "이음매"], ["supply", "제공하다"]],
        questions: [
          { prompt: "다음 글의 주제로 가장 적절한 것은?", options: ["낡은 목재 가구가 거래되는 시장 가격을 정확하게 계산하는 방법", "전시 장소와 맥락이 사물의 해석에 미치는 영향", "목재 이음매를 기계로 정교하게 만드는 기술", "박물관 조명이 오래된 물건을 손상시키는 과정", "창고의 포장 상자를 효율적으로 분류할 필요성"], answer: 1, explanation: "같은 의자가 창고에서는 폐기물처럼, 박물관에서는 역사적 증거처럼 보이는 사례로 장소와 맥락이 해석을 바꾼다는 점을 보여 준다." },
          { prompt: "박물관에서 사람들이 chair의 uneven joints에 주목한 이유는?", options: ["나무의 물리적 성질과 표면 상태가 전시 도중 완전히 달라졌기 때문에", "설명이 의자를 파업 당시의 제작 상황과 연결했기 때문에", "창고에 있을 때보다 이음매의 수가 새로 늘었기 때문에", "의자가 유명 디자이너의 최신 작품으로 소개되었기 때문에", "관람객이 포장 상자를 직접 조립해야 했기 때문에"], answer: 1, explanation: "라벨이 제한된 도구와 재사용이라는 역사적 맥락을 제공해 이전에는 흠처럼 보였던 이음매를 증거로 읽게 했다." }
        ]
      },
      {
        sourceRef: "Exercise 03", level: "3점", title: "Beyond the Filing Cabinet",
        passage: `<p>For years, a research team described memory as a filing cabinet inside the brain. The metaphor helped them ask how information was stored and retrieved, but it also directed attention away from other questions. A familiar song can return through bodily rhythm; a family story changes as people retell it together; fear can make one detail vivid while hiding another. These examples do not fit neatly into a model of fixed files. No single metaphor has to be discarded completely, yet each reveals some features and conceals others. Research on the mind becomes richer when computer-like models are placed beside perspectives that examine the body, emotion, culture, and narrative. Changing the model changes the questions we are able to ask.</p>`,
        vocab: [["retrieve", "인출하다"], ["fit neatly into", "~에 꼭 들어맞다"], ["conceal", "가리다"]],
        questions: [
          { prompt: "다음 글의 주제로 가장 적절한 것은?", options: ["기억을 오랫동안 정확히 보존하기 위한 전자 파일 분류와 정리 방식", "마음을 이해할 때 여러 모형과 관점을 함께 사용할 필요성", "노래의 리듬이 컴퓨터 저장 장치를 개선하는 원리", "가족 이야기를 변형 없이 기록해야 하는 이유", "감정이 모든 기억을 항상 더 정확하게 만드는 과정"], answer: 1, explanation: "파일이나 컴퓨터 비유가 일부 질문에는 유용하지만 몸·감정·문화·서사 관점을 함께 둘 때 마음을 더 풍부하게 연구할 수 있다는 내용이다." },
          { prompt: "filing cabinet metaphor의 한계로 가장 적절한 것은?", options: ["정보의 저장과 인출에 관한 연구 질문을 처음부터 전혀 만들지 못한다.", "몸과 사회적 이야기 속에서 나타나는 기억을 놓치기 쉽다.", "모든 문화에서 동일한 가족 이야기를 만들어 낸다.", "연구자가 감정을 실제 파일로 보관하게 만든다.", "노래를 들을 때 기억이 생기는 현상을 완전히 설명한다."], answer: 1, explanation: "저장과 인출에는 유용하지만 몸의 리듬, 공동의 재서술, 감정이 기억에 미치는 측면을 충분히 드러내지 못한다." }
        ]
      },
      {
        sourceRef: "Exercise 04", level: "3점", title: "The Reader Builds the Garden",
        passage: `<p>A story says that Mara entered an abandoned garden after rain. It does not list every leaf, wall, and shadow. One reader imagines the wet stone path from a childhood home; another gives the garden the dark trees of a park visited last winter. The printed words guide both readers, but neither receives a finished picture. Memory, expectation, and sensory imagination complete what the page leaves open. This is part of literature's creative pleasure. A reader is not merely collecting information placed in sentences but actively constructing a world under their direction. The text sets limits—Mara cannot suddenly be in a desert—yet within those limits, the act of reading produces images and feelings that did not exist on the page alone.</p>`,
        vocab: [["abandoned", "버려진"], ["sensory", "감각의"], ["set limits", "한계를 정하다"]],
        questions: [
          { prompt: "다음 글의 주제로 가장 적절한 것은?", options: ["문학 작품에 등장하는 모든 배경과 사물을 자세한 그림으로 제시해야 하는 이유", "독자가 기억과 상상으로 텍스트의 세계를 능동적으로 구성하는 과정", "작가의 어린 시절이 모든 독자의 해석을 동일하게 만드는 방식", "문학 정보를 빠짐없이 문장에 기록하는 기술의 중요성", "정원의 실제 식물과 소설 속 식물을 구별하는 방법"], answer: 1, explanation: "문장은 방향과 한계를 주지만 독자가 자신의 기억과 감각적 상상으로 빈 부분을 채워 작품 세계를 구성한다는 내용이다." },
          { prompt: "글에 따르면 text가 하는 역할로 가장 적절한 것은?", options: ["모든 독자가 머릿속에서 완전히 동일한 세부 장면을 떠올리게 한다.", "상상에 방향과 한계를 주되 완성된 그림은 주지 않는다.", "독자의 과거 경험이 떠오르지 않도록 막는다.", "페이지 밖에서 생기는 감정과 이미지를 제거한다.", "배경의 모든 잎과 그림자를 자세히 나열한다."], answer: 1, explanation: "텍스트는 Mara가 사막에 있을 수 없다는 식의 한계를 정하고 독자를 안내하지만, 장면의 세부는 독자의 기억과 상상이 완성한다." }
        ]
      }
    ]
  },
  "07": {
    level: "3점", title: "The Festival That Sold Its Name",
    passage: `<p>For generations, the Harbor Lantern Festival ended with residents carrying handmade lights to the water while elders told stories about sailors who never returned. When visitor numbers grew, a beverage company offered enough sponsorship to double the festival's size. The town added a concert stage, branded cups, and a giant sign bearing the company's name. Hotels filled, but the storytelling circle was moved behind the stage and shortened to ten minutes. Some organizers welcomed the income; others asked what exactly the larger event was celebrating. Commercial support had not destroyed the festival, yet it had begun to change which parts were most visible. The town now had to decide whether growth would serve the tradition or quietly replace it.</p>`,
    vocab: [["sponsorship", "후원"], ["bearing", "~을 지닌"], ["tradition", "전통"]],
    questions: [
      { prompt: "다음 글의 제목으로 가장 적절한 것은?", options: ["A Bigger Stage, a Fainter Tradition", "Why Every Festival Needs a Global Sponsor", "The Complete History of Harbor Hotels", "Lantern Making as a Modern Factory Business", "A Concert That Brought Lost Sailors Home"], answer: 0, explanation: "행사의 규모와 수입은 커졌지만 전통 이야기가 가려지면서 상업적 성장과 문화적 본질 사이의 긴장이 생겼다는 제목이 적절하다." },
      { prompt: "글에서 제기하는 핵심 문제로 가장 적절한 것은?", options: ["기업 후원이 전통의 중심을 약화할 수 있다는 점", "주민들이 손으로 등불을 제작할 기술이 없다는 점", "관광객이 숙박 시설을 전혀 이용하지 않았다는 점", "콘서트가 항구의 안전 규정을 모두 위반했다는 점", "옛이야기가 새로운 음료 제품의 판매를 막았다는 점"], answer: 0, explanation: "후원으로 행사는 커졌지만 이야기 행사가 뒤로 밀려 전통의 핵심이 무엇인지 다시 묻게 되었다." }
    ],
    extraSets: [
      {
        sourceRef: "Exercise 01", level: "3점", title: "Five Hundred Hours, Five Different Results",
        passage: `<p>Five students each logged five hundred hours at the violin. Their results were not equal. One repeated familiar songs without correcting mistakes. Another received weekly feedback and rebuilt difficult passages slowly. A third practiced late at night while exhausted, and a fourth divided practice into shorter sessions followed by sleep. The fifth had played rhythmic games since childhood and recognized musical patterns quickly. Time mattered, but it did not act alone. The quality of feedback, the difficulty of the task, prior experience, attention, and recovery changed what each hour produced. A clock can record exposure; it cannot guarantee mastery. Expertise grows from a system of conditions, not from crossing one magical number.</p>`,
        vocab: [["log", "시간을 기록하다"], ["passage", "악곡의 한 부분"], ["exposure", "접촉·노출 시간"]],
        questions: [
          { prompt: "다음 글의 제목으로 가장 적절한 것은?", options: ["Practice Time Is Not a Magic Number", "Why Violin Students Should Never Sleep", "One Song That Guarantees Musical Mastery", "The Clock as the Best Teacher of Every Skill", "Childhood Games That Replace All Later Practice"], answer: 0, explanation: "같은 연습 시간도 피드백, 난도, 사전 경험, 집중과 회복에 따라 다른 결과를 내므로 시간 수치 하나가 숙련을 보장하지 않는다는 내용이다." },
          { prompt: "윗글에 따르면 연습의 성과에 영향을 주는 요인으로 언급되지 않은 것은?", options: ["교사가 제공하는 피드백의 질", "과제의 난도", "이전 경험", "연주복의 가격", "집중과 회복"], answer: 3, explanation: "피드백, 과제 난도, 사전 경험, 주의와 회복은 언급되지만 연주복 가격은 나오지 않는다." }
        ]
      },
      {
        sourceRef: "Exercise 02", level: "3점", title: "The Proposal the Town Could Hear",
        passage: `<p>A water-filter company proposed a new plant to a town whose old factories had recently closed. Its first presentation emphasized national sales and advanced machinery. Council members showed little interest; the plan sounded profitable for distant investors but irrelevant to local needs. Before returning, the company interviewed residents. It redesigned the proposal to include paid technical training, contracts with nearby repair shops, and a system that would provide emergency drinking water during floods. The machinery had not changed, but the meaning of the project had. By connecting the plant to skills, local business, and public safety, the company spoke to the town's priorities and won approval.</p>`,
        vocab: [["irrelevant", "관련 없는"], ["contract", "계약"], ["win approval", "승인을 얻다"]],
        questions: [
          { prompt: "다음 글의 제목으로 가장 적절한 것은?", options: ["A Proposal Rebuilt Around Local Priorities", "The Machine That Required No Trained Workers", "Why Town Councils Should Avoid Every Factory", "National Sales Without Any Community Benefit", "A Flood That Closed All Nearby Repair Shops"], answer: 0, explanation: "회사가 지역의 일자리·사업·안전 요구를 이해해 제안의 의미와 구성을 바꾸면서 승인을 얻은 과정이 중심이다." },
          { prompt: "회사가 두 번째 제안에 추가한 내용이 아닌 것은?", options: ["지역 주민을 대상으로 제공하는 유급 기술 교육", "인근 수리점과의 계약", "홍수 때 비상 식수 제공", "지역 안전과의 연계", "해외 투자자의 독점 운영권"], answer: 4, explanation: "두 번째 제안에는 교육, 지역 업체 계약, 비상 식수 체계가 포함되었지만 해외 투자자의 독점 운영권은 언급되지 않았다." }
        ]
      },
      {
        sourceRef: "Exercise 03", level: "3점", title: "When the Plaza Looked Finished Too Soon",
        passage: `<p>An architecture team used a detailed 3D model to design a public plaza. After two days, the screen showed polished stone, exact shadows, and rows of benches. Because the image looked nearly finished, later meetings focused on adjusting colors rather than questioning the layout. Only when the team printed a rough sketch did someone notice that the central steps blocked wheelchair access and that the stage faced the afternoon sun. The polished model had made an early arrangement feel more certain than it was. Detailed tools are valuable, but when detail arrives too soon, it can discourage designers from exploring alternatives that a rough drawing still leaves open.</p>`,
        vocab: [["layout", "배치"], ["wheelchair access", "휠체어 접근성"], ["discourage", "의욕을 꺾다"]],
        questions: [
          { prompt: "다음 글의 제목으로 가장 적절한 것은?", options: ["The Hidden Cost of a Too-Polished First Design", "How Exact Shadows Solve Every Access Problem", "Why Public Plazas Need More Stone Benches", "A Screen That Made Rough Sketches Impossible", "Color Adjustment as the Only Heart of Modern Architecture"], answer: 0, explanation: "초기부터 완성도 높게 보이는 모델이 배치 재검토를 막아 중요한 문제를 늦게 발견하게 했다는 내용이다." },
          { prompt: "rough sketch가 팀에 도움을 준 방식은?", options: ["초기 배치를 다시 검토하게 했다.", "돌의 정확한 가격을 자동 계산했다.", "모든 회의를 색상 논의로 제한했다.", "무대가 햇빛을 받지 않도록 즉시 이동했다.", "3D 모델의 세부 정보를 더 빨리 고정했다."], answer: 0, explanation: "거친 스케치는 완성됐다는 인상을 약화해 접근성과 무대 방향 같은 기본 배치를 다시 보게 했다." }
        ]
      },
      {
        sourceRef: "Exercise 04", level: "2점", title: "Drawing Less, Imagining More",
        passage: `<p>A small animation studio could not afford to draw every movement of a fox running through snow. Instead, the artists showed three sharp poses, a white line crossing a dark background, and a scarf that continued moving after the fox stopped. Viewers supplied the missing motion in their minds. The limited images also allowed the artists to make the forest bend like folded paper and turn the moon into an eye—effects that realistic movement would have made awkward. Financial limits shaped the method, but they did not merely reduce quality. By removing detail, the studio invited imagination and discovered a visual language that a more literal film might never have attempted.</p>`,
        vocab: [["pose", "자세"], ["supply", "보충하다"], ["literal", "사실적인, 문자 그대로의"]],
        questions: [
          { prompt: "다음 글의 제목으로 가장 적절한 것은?", options: ["Less Motion, More Room for Imagination", "The Most Expensive Way to Draw Falling Snow", "Why Viewers Reject Every Missing Movement", "A Realistic Fox That Changed Forest Science", "How Detailed Frames Eliminate Artistic Choice"], answer: 0, explanation: "제한된 움직임과 세부 묘사가 관객의 상상과 현실을 벗어난 표현을 가능하게 했다는 내용이다." },
          { prompt: "제작 방식이 가져온 결과로 가장 적절한 것은?", options: ["관객이 빠진 동작을 상상하게 했다.", "현실적인 움직임만 사용하게 했다.", "모든 장면의 제작 비용을 높였다.", "숲과 달의 상징적 표현을 제거했다.", "여우의 자세를 한 장면으로만 제한했다."], answer: 0, explanation: "세 자세와 움직이는 목도리 사이의 동작을 관객이 마음속으로 보충했고 비현실적 시각 언어도 가능해졌다." }
        ]
      }
    ]
  },
  "08": {
    level: "2점", title: "How Students Contacted Project Teammates",
    table: { caption: "Percentage of students by communication mode", headers: ["Mode", "Every Day", "Weekly or Less"], rows: [["Messages", "52%", "21%"], ["Voice Calls", "14%", "39%"], ["Email", "7%", "44%"], ["Video Meetings", "9%", "36%"]] },
    passage: `<p>The table shows how often students used four communication modes to contact teammates during a semester-long project. Each student could report a different frequency for each mode.</p>`,
    vocab: [["communication mode", "의사소통 방식"], ["semester-long", "한 학기 동안의"], ["frequency", "빈도"]],
    questions: [
      { prompt: "도표의 내용과 일치하지 않는 것은?", options: ["매일 사용 비율은 메시지가 가장 높다.", "주 1회 이하 사용 비율은 네 방식 중 이메일이 가장 높다.", "음성 통화는 매일보다 주 1회 이하 비율이 높다.", "화상 회의의 매일 사용 비율은 이메일보다 높다.", "주 1회 이하에서 이메일은 두 번째로 높은 방식이다."], answer: 4, explanation: "주 1회 이하 비율은 이메일 44%가 가장 높고 음성 통화 39%가 두 번째다." },
      { prompt: "매일 사용 비율이 주 1회 이하 사용 비율보다 높은 방식은?", options: ["Messages", "Voice Calls", "Email", "Video Meetings", "Email and Video Meetings"], answer: 0, explanation: "Messages만 매일 52%가 주 1회 이하 21%보다 높다." }
    ],
    extraSets: [
      {
        sourceRef: "Exercise 01", level: "3점", title: "Student Housing Across Four Campuses",
        table: { caption: "Student housing by accommodation type", headers: ["Campus", "University Housing", "Private Student Housing", "Other Private Housing"], rows: [["Northport", "24%", "28%", "48%"], ["Eastbridge", "31%", "36%", "33%"], ["Lakeside", "12%", "18%", "70%"], ["Hilltown", "22%", "16%", "62%"]] },
        passage: `<p>The table compares the housing arrangements of students at four campuses in 2026. Percentages in each row add up to 100%.</p>`,
        vocab: [["housing arrangement", "주거 형태"], ["add up to", "합계가 ~가 되다"], ["campus", "대학 지역"]],
        questions: [
          { prompt: "도표의 내용과 일치하지 않는 것은?", options: ["Northport에서는 기타 민간 주거가 가장 높다.", "Eastbridge는 대학 주거 비율이 네 곳 중 가장 높다.", "Lakeside의 기타 민간 주거 비율은 70%이다.", "Hilltown에서는 민간 학생 주거가 대학 주거보다 높다.", "민간 학생 주거 비율은 Eastbridge가 가장 높다."], answer: 3, explanation: "Hilltown은 대학 주거 22%, 민간 학생 주거 16%이므로 대학 주거가 더 높다." },
          { prompt: "기타 민간 주거가 가장 높은 캠퍼스는?", options: ["Northport", "Eastbridge", "Lakeside", "Hilltown", "Northport and Hilltown"], answer: 2, explanation: "기타 민간 주거는 Lakeside가 70%로 가장 높다." }
        ]
      },
      {
        sourceRef: "Exercise 02", level: "3점", title: "Expected Effects of Workplace Automation",
        table: { caption: "Job outlook by income group", headers: ["Income Group", "Fewer Jobs", "More Jobs", "Little Change", "Not Aware"], rows: [["Lower", "38%", "6%", "22%", "25%"], ["Middle", "32%", "8%", "35%", "15%"], ["Upper", "24%", "11%", "47%", "7%"]] },
        passage: `<p>The table shows how employed adults in three income groups expected workplace automation to affect job opportunities. Unlisted responses include “not sure.”</p>`,
        vocab: [["automation", "자동화"], ["income group", "소득 집단"], ["unlisted", "표시되지 않은"]],
        questions: [
          { prompt: "도표의 내용과 일치하지 않는 것은?", options: ["일자리 감소 전망 비율은 소득 수준이 높아질수록 단계적으로 낮아진다.", "일자리 증가 전망은 상위 소득 집단이 가장 높다.", "큰 변화가 없다는 응답은 상위 소득 집단이 47%이다.", "상위 소득 집단의 변화 없음 비율은 중간 집단의 두 배를 넘는다.", "자동화를 모른다는 응답은 하위 소득 집단이 가장 높다."], answer: 3, explanation: "상위 집단 47%는 중간 집단 35%의 두 배인 70%를 넘지 않는다." },
          { prompt: "소득 수준이 높아질수록 일관되게 증가한 응답은?", options: ["Fewer Jobs", "More Jobs", "Not Aware", "Fewer Jobs and Not Aware", "Not Sure only"], answer: 1, explanation: "More Jobs는 하위 6%, 중간 8%, 상위 11%로 계속 증가한다." }
        ]
      },
      {
        sourceRef: "Exercise 03", level: "3점", title: "Exercise Choices by Gender",
        table: { caption: "Top reported exercise activities", headers: ["Rank", "Women", "Rate", "Men", "Rate"], rows: [["1", "Walking", "44%", "Cycling", "41%"], ["2", "Swimming", "38%", "Football", "37%"], ["3", "Yoga", "31%", "Running", "34%"], ["4", "Cycling", "27%", "Walking", "30%"], ["5", "Running", "25%", "Fishing", "28%"]] },
        passage: `<p>The table lists the five most frequently reported exercise activities among adult women and men in a community survey. Respondents could select more than one activity.</p>`,
        vocab: [["rank", "순위"], ["frequently", "빈번하게"], ["select", "선택하다"]],
        questions: [
          { prompt: "도표의 내용과 일치하지 않는 것은?", options: ["여성의 1위는 걷기이다.", "남성의 1위는 사이클링이다.", "걷기는 남녀 모두 상위 세 종목에 포함된다.", "달리기는 남녀 목록에 모두 포함된다.", "여성의 수영 비율은 남성의 축구 비율보다 높다."], answer: 2, explanation: "걷기는 여성 1위지만 남성 4위이므로 남녀 모두 상위 세 종목이라는 진술은 틀리다." },
          { prompt: "남녀 목록에 공통으로 등장한 활동만을 묶은 것은?", options: ["Walking, Cycling, Running", "Swimming, Football, Fishing", "Yoga, Cycling, Football", "Walking, Swimming, Fishing", "Yoga, Running, Fishing"], answer: 0, explanation: "걷기, 사이클링, 달리기가 두 목록에 모두 등장한다." }
        ]
      },
      {
        sourceRef: "Exercise 04", level: "3점", title: "Repair and Recycling of Household Devices",
        table: { caption: "Waste generation and collection rate", headers: ["Device Type", "Waste Generated", "Collection Rate"], rows: [["Small Devices", "24 t", "18%"], ["Large Appliances", "16 t", "36%"], ["Cooling Equipment", "12 t", "34%"], ["Screens", "8 t", "42%"], ["IT Devices", "6 t", "39%"], ["Lamps", "2 t", "15%"]] },
        passage: `<p>The table shows the amount of household-device waste generated in one district and the percentage collected through official programs.</p>`,
        vocab: [["device waste", "기기 폐기물"], ["collection rate", "수거율"], ["district", "지역구"]],
        questions: [
          { prompt: "도표의 내용과 일치하지 않는 것은?", options: ["소형 기기의 폐기물 발생량은 여섯 유형 중 가장 많다.", "대형 가전의 수거율은 냉각 장비보다 높다.", "화면 기기의 수거율은 40%를 넘는다.", "램프는 발생량과 수거율이 모두 가장 낮다.", "대형 가전의 수거율은 냉각 장비보다 낮다."], answer: 4, explanation: "대형 가전은 36%, 냉각 장비는 34%이므로 대형 가전의 수거율이 더 높다." },
          { prompt: "수거율이 가장 높은 기기 유형은?", options: ["Small Devices", "Large Appliances", "Cooling Equipment", "Screens", "IT Devices"], answer: 3, explanation: "Screens의 수거율이 42%로 가장 높다." }
        ]
      }
    ]
  },
  "09": {
    level: "2점", title: "Dr. Lena Ortiz and City Birds",
    passage: `<p>Lena Ortiz was born in San Diego in 1984 and became interested in birds while helping at a coastal rescue center. She earned a biology degree from Oregon State University in 2007 and completed her doctorate in 2012. Ortiz joined Bay Coast University in 2014, where she studied how artificial light changes the migration of city birds. In 2019, she received the North Shore Science Medal for a community project that trained residents to record nighttime bird calls. Her book Wings After Dark was published in 2021 and later translated into Spanish and Japanese. In 2025, the university named a rooftop observation station after her in recognition of her research and public education.</p>`,
    vocab: [["artificial light", "인공조명"], ["migration", "이동"], ["observation station", "관측소"]],
    questions: [
      { prompt: "윗글의 내용과 일치하지 않는 것은?", options: ["1984년에 San Diego에서 태어났다.", "2007년에 생물학 학위를 받았다.", "박사 학위를 마치자마자 2012년에 Bay Coast University에 합류했다.", "주민들이 밤에 들리는 새소리를 직접 기록하도록 훈련한 지역 공동 사업으로 상을 받았다.", "그녀의 책은 스페인어와 일본어로 번역되었다."], answer: 2, explanation: "박사 학위는 2012년에 마쳤지만 Bay Coast University에는 2014년에 합류했다." },
      { prompt: "Ortiz의 이름을 따서 명명된 것은?", options: ["해안 구조 센터", "생물학 학위 과정", "옥상 관측소", "야간 조명 회사", "스페인어 번역상"], answer: 2, explanation: "대학은 2025년에 연구와 대중 교육을 기려 옥상 관측소에 그녀의 이름을 붙였다." }
    ],
    extraSets: [
      {
        sourceRef: "Exercise 01", level: "3점", title: "Ava Morgan's Blue Solar Film",
        passage: `<p>Ava Morgan grew up in a family that repaired radios and entered Northfield Institute of Technology at sixteen. In 2016, while trying to make a clear coating for batteries, she produced a thin blue film that conducted electricity when exposed to sunlight. The coating failed as a battery material because it absorbed too much light. Morgan did not discard it. She tested the film on windows and found that it could generate a small amount of power while reducing indoor heat. In 2018, she and two classmates founded ClearSky Materials to develop the product for bus shelters and greenhouse roofs. The company opened its first pilot factory in 2022.</p>`,
        vocab: [["coating", "코팅제"], ["conduct electricity", "전기를 전도하다"], ["pilot factory", "시험 생산 공장"]],
        questions: [
          { prompt: "윗글의 내용과 일치하지 않는 것은?", options: ["어린 시절 가족과 함께 라디오를 수리하는 환경에서 자랐다.", "16세에 기술 대학에 입학했다.", "파란 필름은 처음부터 창문용으로 설계되었다.", "두 명의 동급생과 회사를 설립했다.", "2022년에 첫 시험 생산 공장을 열었다."], answer: 2, explanation: "필름은 원래 배터리용 투명 코팅을 만들던 실험에서 우연히 나왔고 이후 창문에 적용되었다." },
          { prompt: "파란 필름이 창문용으로 활용된 이유로 언급된 것은?", options: ["전력을 만들고 실내 열을 줄였기 때문에", "배터리의 빛 흡수를 완전히 막았기 때문에", "라디오의 소리를 더 크게 만들었기 때문에", "유리 없이도 건물을 지을 수 있게 했기 때문에", "햇빛이 없어도 많은 전기를 생산했기 때문에"], answer: 0, explanation: "햇빛을 받을 때 소량의 전기를 만들고 실내 열도 줄이는 특성을 확인했다." }
        ]
      },
      {
        sourceRef: "Exercise 02", level: "2점", title: "Mateo Silva, Costume Archivist",
        passage: `<p>Mateo Silva was born in Porto in 1975, the youngest of four children. His mother worked as a theater seamstress and often brought home pieces of damaged costumes. Silva disliked sewing but loved asking who had worn each item and why it had been altered. At nineteen, he moved to Madrid on his own and found work in a small costume-rental warehouse. There he learned to identify fabrics and repair labels without removing evidence of earlier use. He later studied museum conservation at night. In 2008, Silva became the first costume archivist at the Rivera Theater Museum. His catalog connected physical details in costumes with rehearsal notes and performers' memories.</p>`,
        vocab: [["seamstress", "재봉사"], ["alter", "고치다"], ["conservation", "보존학"]],
        questions: [
          { prompt: "윗글의 내용과 일치하지 않는 것은?", options: ["네 자녀 중 막내로 태어났다.", "어머니는 극장 재봉사로 일했다.", "어머니의 권유에 따라 마지못해 Madrid로 이주했다.", "일하면서 야간에 박물관 보존학을 공부했다.", "2008년에 Rivera Theater Museum의 최초 의상 기록 담당자가 되었다."], answer: 2, explanation: "Silva는 열아홉 살에 스스로 Madrid로 이주했으며 어머니의 권유로 마지못해 갔다는 내용은 없다." },
          { prompt: "Silva의 catalog가 연결한 것은?", options: ["의상의 물리적 세부와 공연 관련 기록", "대여 창고의 가격과 관람객 수", "재봉사의 급여와 극장의 위치", "배우의 출생지와 직물 생산량", "박물관의 실내 조명 배치와 야간 수업의 전체 운영 시간"], answer: 0, explanation: "의상의 물리적 특징을 연습 기록과 공연자들의 기억에 연결했다." }
        ]
      },
      {
        sourceRef: "Exercise 03", level: "3점", title: "Noor Haddad and the Moving Dunes",
        passage: `<p>Noor Haddad was born in Amman in 1968 and moved with her family to southern Jordan when she was eight. She collected unusual stones and kept notes about how dunes changed after storms. Haddad earned a degree in history before beginning graduate study in geology, a choice that surprised her family. In 1997, she joined the Desert Research Council and mapped underground water channels beneath shifting sand. Although she was appointed legal adviser to a regional land office in 2001, she continued field research with support from a university grant. She later served two terms as president of the Jordanian Earth Science Network and led surveys in Jordan, Oman, and Tunisia.</p>`,
        vocab: [["dune", "모래언덕"], ["underground", "지하의"], ["legal adviser", "법률 고문"]],
        questions: [
          { prompt: "윗글의 내용과 일치하지 않는 것은?", options: ["여덟 살 때 가족과 함께 남부 Jordan으로 이주했다.", "모래언덕의 변화를 기록했다.", "지질학 학위를 받은 뒤 역사학을 공부했다.", "법률 고문으로 임명된 뒤에도 현장 연구를 계속했다.", "지구과학 네트워크 회장을 두 임기 맡았다."], answer: 2, explanation: "Haddad는 역사학 학위를 먼저 받은 뒤 대학원에서 지질학 공부를 시작했다." },
          { prompt: "Haddad가 조사 활동을 수행한 지역으로 언급되지 않은 것은?", options: ["Jordan", "Oman", "Tunisia", "southern Jordan", "Canada"], answer: 4, explanation: "Jordan, Oman, Tunisia에서 조사를 이끌었지만 Canada는 언급되지 않았다." }
        ]
      },
      {
        sourceRef: "Exercise 04", level: "3점", title: "Dr. Elias Park's Mobile Clinics",
        passage: `<p>Elias Park was born in 1930 to a pharmacist and a school nurse in a mountain town. As a medical student during a civil conflict, he secretly delivered medicine to families cut off by roadblocks. From 1953, he also served as a messenger for a volunteer relief group and treated injured civilians at night. Decades later, the group honored him for protecting displaced families in his parents' home. After the conflict, Park did not leave medicine. He converted two buses into mobile clinics and traveled to villages that had no resident doctor. By the time he retired in 1994, the service had trained twenty rural nurses and opened three permanent health posts.</p>`,
        vocab: [["roadblock", "도로 차단물"], ["displaced", "삶의 터전을 잃은"], ["health post", "소규모 보건소"]],
        questions: [
          { prompt: "윗글의 내용과 일치하지 않는 것은?", options: ["약사와 학교 간호사의 자녀로 태어났다.", "분쟁으로 도로가 차단된 가족들에게 비밀리에 약을 전달했다.", "1953년부터 구호 단체의 전령으로도 일했다.", "분쟁이 끝난 뒤 모든 의료 활동에서 물러났다.", "버스를 이동 진료소로 개조했다."], answer: 3, explanation: "분쟁 뒤 의료 활동을 그만둔 것이 아니라 이동 진료소를 만들어 의사가 없는 마을을 다녔다." },
          { prompt: "Park가 은퇴할 때까지 이동 진료 서비스가 이룬 일은?", options: ["농촌 간호사 20명을 훈련했다.", "모든 산간 도로를 새로 건설했다.", "구호 단체의 본부를 해외로 옮겼다.", "약국과 학교를 하나의 기관으로 합쳤다.", "상주 의사가 있는 마을만 방문했다."], answer: 0, explanation: "서비스는 농촌 간호사 20명을 훈련하고 세 곳의 상설 보건소를 열었다." }
        ]
      }
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
  ...englishPractice1012,
  ...englishPractice1315,
  ...englishPractice1618,
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

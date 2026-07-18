# 영어시험연구소

2027 수능특강 영어·영어독해연습·영어듣기의 학습 순서와 복습 기준을 제공하는 독립 정적 사이트입니다.

## 구성

- `index.html`: 메인 페이지
- `2027-suneung-english.html`: 수능특강 영어 30강 목차와 학습법
- `2027-suneung-reading.html`: 영어독해연습 9주 과정
- `2027-suneung-listening.html`: 영어듣기 26강 목차와 복습법
- `study-plan.html`: 세 교재 통합 9주 계획
- `guides.html`: 독해·어휘·어법·듣기·오답 정리 학습 자료 모음
- `suneung-english-reading-strategy.html`: 수능 영어 독해 4단계
- `suneung-english-vocabulary-study.html`: 수능 영어 단어 암기법
- `suneung-english-grammar-checklist.html`: 수능 영어 어법 점검표
- `suneung-english-listening-routine.html`: 영어듣기 20분 복습 루틴
- `suneung-english-wrong-answer-note.html`: 수능 영어 오답 노트 작성법
- `lessons/`: 수능특강 영어 33개, 영어독해연습 15개, 영어듣기 26개 강별 학습 페이지
- `scripts/generate-english-lessons.mjs`: 강별 정적 페이지 생성 스크립트
- `scripts/generate-reading-listening-lessons.mjs`: 독해연습·듣기 강별 페이지 생성 스크립트
- `scripts/generate-sitemap.mjs`: 공개 HTML canonical 기준 사이트맵 생성 스크립트
- `about.html`, `privacy.html`, `copyright.html`, `contact.html`: 운영 필수 페이지
- `assets/`: 공통 디자인과 동작

## 공개 원칙

교재 원문, 문항, 정답, 음원, 단어장을 대량 복제하지 않습니다. 목차 정보와 자체 작성한 학습 설명을 중심으로 구성합니다.

## 사이트 주소

GitHub Pages와 사용자 도메인을 사용합니다.

`https://englishexamlab.kr/`

저장소의 `main` 브랜치 루트에서 배포하며, `CNAME` 파일로 사용자 도메인을 지정합니다.

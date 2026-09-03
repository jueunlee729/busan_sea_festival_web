2026 부산바다축제 반응형 웹사이트

구성
- index.html              메인
- festival.html           축제 소개
- program.html            프로그램
- guide.html              가이드
- news.html               뉴스
- news-detail.html        뉴스 상세(다랑이)
- ticket.html             티켓 예매
- css/main.css            전체 스타일 / 반응형
- js/main.js              모바일 메뉴 / 필터 / 검색 / 수량 및 결제 합계
- assets/                 이미지

실행
1. 폴더 전체를 VS Code에서 엽니다.
2. index.html을 Live Server로 실행하면 됩니다.
3. 별도 서버 없이 HTML 파일을 직접 열어도 기본 동작은 가능합니다.

반응형
- Desktop 기준 max-width 1200px
- Tablet 1024px 이하
- Mobile 768px 이하
- Small mobile 480px 이하

Java가 아니라 웹 브라우저용 JavaScript(main.js)를 사용했습니다.
실제 예매 결제/DB/회원가입은 백엔드 연동이 필요한 영역이라 현재 버전은 UI와 프론트 상호작용까지만 구현되어 있습니다.

# AI_shopping-mall

AI를 활용한 쇼핑몰 웹사이트 프로젝트입니다. 이 프로젝트는 HTML, CSS, JavaScript를 사용하여 개발되었으며, 사용자 친화적인 인터페이스와 다양한 기능을 제공합니다.

## 주요 기능

- **메인 페이지**: 상품 카테고리, 인기 상품, 특별 할인, 고객 후기 등 제공
- **상품 목록**: 카테고리별 상품 필터링, 정렬 기능, 그리드/리스트 뷰 전환
- **장바구니**: 상품 추가, 수량 조절, 쿠폰 적용 기능
- **로그인/회원가입**: 사용자 인증 및 계정 관리
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 환경에서 최적화된 경험

## 기술 스택

- **프론트엔드**: HTML5, CSS3, JavaScript
- **데이터 관리**: 로컬 스토리지 (클라이언트 측 데이터 저장)
- **UI 라이브러리**: Font Awesome (아이콘)

## 프로젝트 구조

```
.
├── index.html                  # 메인 페이지
├── src/
│   ├── assets/
│   │   ├── css/                # CSS 스타일시트
│   │   │   └── style.css       # 메인 스타일시트
│   │   ├── js/                 # JavaScript 파일
│   │   │   └── script.js       # 메인 스크립트
│   │   └── images/             # 이미지 파일
│   └── pages/                  # HTML 페이지
│       ├── cart.html           # 장바구니 페이지
│       ├── login.html          # 로그인 페이지
│       ├── products.html       # 상품 목록 페이지
│       └── register.html       # 회원가입 페이지
└── README.md                   # 프로젝트 설명
```

## 설치 및 실행 방법

1. 저장소를 클론합니다:
   ```bash
   git clone https://github.com/IncheonLee/AI_shopping-mall.git
   ```

2. 프로젝트 디렉토리로 이동합니다:
   ```bash
   cd AI_shopping-mall
   ```

3. 웹 브라우저에서 index.html 파일을 엽니다.

## 향후 개발 계획

- 백엔드 서버 연동
- 실제 결제 시스템 구현
- 상품 리뷰 및 평점 시스템 개선
- 개인화된 상품 추천 기능 추가

## 기여 방법

1. 이 저장소를 포크합니다.
2. 새 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`).
3. 변경 사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`).
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`).
5. Pull Request를 생성합니다.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

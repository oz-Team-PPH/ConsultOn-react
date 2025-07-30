# Consul+On React Application

## 📋 프로젝트 개요

Consul+On은 AI 기반 상담 플랫폼으로, 사용자가 전문가와 상담을 받을 수 있는 웹 애플리케이션입니다.

## 🏗️ 프로젝트 구조

```
src/
├── components/           # 재사용 가능한 컴포넌트
│   ├── layout/          # 레이아웃 관련 컴포넌트
│   │   └── Layout.jsx   # 공통 레이아웃 컴포넌트
│   ├── Navbar.jsx       # 네비게이션 바
│   ├── Footer.jsx       # 푸터
│   ├── CTASection.jsx   # CTA 섹션
│   ├── Hero.jsx         # 히어로 섹션
│   ├── FeaturesSection.jsx # 기능 섹션
│   ├── PricingSection.jsx  # 가격 섹션
│   └── ...              # 기타 컴포넌트들
├── pages/               # 페이지 컴포넌트
│   ├── Home.jsx         # 홈페이지
│   ├── Login.jsx        # 로그인 페이지
│   ├── Signup.jsx       # 회원가입 페이지
│   ├── Dashboard.jsx    # 대시보드
│   ├── Profile.jsx      # 프로필 페이지
│   └── ...              # 기타 페이지들
├── routes/              # 라우팅 설정
│   └── AppRoutes.jsx    # 애플리케이션 라우트
├── styles/              # 스타일 파일
│   └── components/      # 컴포넌트별 스타일
│       ├── Navbar.css   # 네비게이션 스타일
│       ├── Footer.css   # 푸터 스타일
│       └── CTA.css      # CTA 섹션 스타일
├── App.jsx              # 메인 애플리케이션 컴포넌트
├── App.css              # 전역 스타일
└── main.jsx             # 애플리케이션 진입점
```

## 🚀 주요 기능

### 🔐 인증 시스템

- 로그인/회원가입
- 이메일 인증
- Google 로그인

### 💬 상담 기능

- AI 사전 Q&A
- 전문가 매칭
- 상담 예약
- 화상 상담
- 상담 요약

### 👤 사용자 관리

- 대시보드
- 프로필 관리
- 알림 설정

## 🛠️ 기술 스택

- **Frontend**: React 18
- **Routing**: React Router DOM
- **Styling**: Bootstrap 5 + Custom CSS
- **Build Tool**: Vite

## 📦 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

### 3. 프로덕션 빌드

```bash
npm run build
```

## 🎨 스타일 가이드

### CSS 구조

- **전역 스타일**: `src/App.css`
- **컴포넌트별 스타일**: `src/styles/components/`
- **Bootstrap**: 기본 UI 프레임워크

### 반응형 디자인

- **Desktop**: 992px 이상
- **Tablet**: 768px - 991px
- **Mobile**: 768px 미만

## 🔧 개발 가이드

### 컴포넌트 생성

1. `src/components/` 폴더에 새 컴포넌트 생성
2. 필요한 경우 `src/styles/components/`에 스타일 파일 생성
3. 컴포넌트에서 스타일 파일 import

### 페이지 추가

1. `src/pages/` 폴더에 새 페이지 생성
2. `src/routes/AppRoutes.jsx`에 라우트 추가

### 스타일 수정

- **전역 스타일**: `src/App.css` 수정
- **컴포넌트별 스타일**: 해당 컴포넌트의 CSS 파일 수정

## 📱 반응형 디자인

### 네비게이션 바

- **Desktop**: 로고 왼쪽, 메뉴 오른쪽
- **Mobile**: 햄버거 메뉴로 변환

### 레이아웃

- **Desktop**: 3열 그리드
- **Tablet**: 2열 그리드
- **Mobile**: 1열 그리드

## 🎯 주요 컴포넌트

### Layout.jsx

- 공통 레이아웃 관리
- 네비게이션 바 포함

### Navbar.jsx

- 반응형 네비게이션
- 드롭다운 메뉴
- 로그인/회원가입 버튼

### Footer.jsx

- 회사 정보
- 링크 모음
- 저작권 정보

## 🔄 상태 관리

현재는 React의 기본 상태 관리를 사용합니다:

- `useState`: 로컬 상태 관리
- `useEffect`: 사이드 이펙트 처리

## 📄 라우팅

### 주요 라우트

- `/`: 홈페이지
- `/login`: 로그인
- `/signup`: 회원가입
- `/dashboard`: 대시보드
- `/profile`: 프로필
- `/experts`: 전문가 매칭
- `/booking`: 상담 예약

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: #667eea (보라색)
- **Secondary**: #764ba2 (진보라색)
- **CTA**: #7c3aed, #5d5fff (그라데이션)
- **Dark**: #212529 (푸터 배경)

### 타이포그래피

- **Font Family**: ui-sans-serif, system-ui
- **Heading**: 2.5rem (Desktop), 1.75rem (Mobile)
- **Body**: 1rem

## 🚀 배포

### Vercel 배포

```bash
npm run build
vercel --prod
```

### Netlify 배포

```bash
npm run build
netlify deploy --prod --dir=dist
```

## 📝 개발 노트

### 최근 개선사항

- CSS 모듈화로 유지보수성 향상
- 라우팅 로직 분리
- 레이아웃 컴포넌트 분리
- 반응형 디자인 개선

### 향후 계획

- [ ] 상태 관리 라이브러리 도입 (Redux/Zustand)
- [ ] TypeScript 마이그레이션
- [ ] 테스트 코드 작성
- [ ] PWA 지원

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요.

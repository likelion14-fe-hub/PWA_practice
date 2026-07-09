# PWA_practice

이 프로젝트는 Vite + React JSX로 구성된 프론트엔드 코드를 기반으로, PWA 기능을 직접 추가해보는 실습 프로젝트입니다.

## 실습 목적

- PWA의 기본 개념과 구성 요소 이해
- manifest, service worker, 아이콘 설정 흐름 실습


## 구현 화면

아래는 프로젝트 실행 화면입니다.
<img width="1919" height="905" alt="image" src="https://github.com/user-attachments/assets/51d25bd4-8109-475f-b86c-f704f4cd84bd" /> | <img width="1919" height="899" alt="image" src="https://github.com/user-attachments/assets/1ea618c4-33e1-477f-9539-97e5a6726164" /> |
|--|--|


## 실습 진행 방법

### 1. 저장소 클론

```bash
git clone 레포지토리주소
```

### 2. 프로젝트 폴더로 이동

```bash
cd PWA_practice
```

### 3. 의존성 설치

```bash
npm install
```

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 안내된 로컬 주소로 접속하면 프로젝트를 확인할 수 있습니다.

## 실습 전 코드 구조

```text
PWA_practice
├─ public
│  └─ favicon.svg
├─ src
│  ├─ routes
│  │  ├─ Login.jsx
│  │  └─ Start.jsx
│  ├─ styles
│  │  └─ style.css
│  ├─ utils
│  │  └─ auth.js
│  ├─ App.jsx
│  └─ main.jsx
├─ .env
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
└─ vite.config.js
```

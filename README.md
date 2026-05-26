# Thought Archive

> 웹 리소스(유튜브, 숏츠, 웹사이트)와 실시간 메모를 한곳에서 관리하는 데스크톱 대시보드.

Space Odyssey / Cyberpunk 무드의 다크 테마와 글라스모피즘으로 구성된 1600×900 고정 해상도 단일 페이지 앱입니다. Electron 패키징을 염두에 두고 설계되었습니다.

---

## ✨ Features

### 핵심 뷰
- **Dual-View Stack** — Media View(iframe)와 Note View(textarea)를 즉시 전환
- **Archive View** — 저장된 메모를 컬러/이모지/태그가 표시된 카드 그리드로 탐색
- **Analytics View** — 노트·리소스·태그 통계와 컬러 분포를 실시간 시각화
- **Focus Mode** — 사이드바와 우측 패널을 접고 중앙 영역 풀스크린

### 메모 시스템
- 컬러(6종) · 이모지(12종) · 태그(최대 10개) 부착하여 저장
- 자동 저장 (1·5·10분 주기 또는 끔)
- 단어/글자/줄 카운터, 타임스탬프 삽입, Markdown(`.md`) 내보내기
- B/I/U 서식 버튼 → 선택 영역을 `**bold**`, `*italic*`, `__underline__`로 토글
- **백링크 시스템** — `[[노트 제목]]` 문법으로 노트 간 연결, 입력 시 자동완성 드롭다운 제공
  - 아카이브 카드에 인용 횟수 배지 표시
  - 노트 에디터 하단에 "이 노트를 참조하는 노트" 목록
  - Analytics의 우측 패널에 백링크 섹션 포함

### 리소스 관리
- YouTube `watch` / `youtu.be` / `shorts` URL을 `/embed/`로 자동 변환
- 추가 시 URL을 분석해 `shorts` / `youtube` / `website`로 자동 분류
- 타입별 필터 필 + 검색 (`#태그` 입력 시 자동완성)
- **Full-text Search** — 제목·태그뿐 아니라 노트 본문까지 검색, 우선순위(제목 > 태그 > 본문)로 정렬
- 본문 매칭 시 키워드 앞뒤 30자 snippet + 보라색 하이라이트 표시

### 태그 시스템
- 노트와 리소스 양쪽에 부착, 사이드바에서 활성 태그로 교차 필터
- 검색창에서 `#`으로 시작하면 자동완성 드롭다운 표시

### 설정 (localStorage 자동 저장)
- Dark / Light 모드 · 글라스모피즘 투명도 슬라이더
- 기본 시작 뷰, 자동 저장 간격, Always on Top 토글
- UI 언어 한국어 ↔ English 전환
- 활동 피드 일괄 삭제 · 모든 설정 초기화

### 키보드 단축키
| 단축키 | 기능 |
|---|---|
| `Ctrl+S` | 메모 저장 |
| `Ctrl+M` | 미디어 / 메모 뷰 전환 |
| `Ctrl+K` | URL 바 포커스 |
| `Ctrl+F` | 집중 모드 전환 |
| `Ctrl+Shift+F` | 리소스 검색창 포커스 |
| `Ctrl+,` | 설정 열기 |
| `?` | 단축키 도움말 토글 |
| `Esc` | 열린 패널 닫기 / 모드 해제 |

---

## 🎨 Design System

- **Primary:** `#050509` Deep Space Black
- **Accent:** `#8A2BE2` Purple · `#1E90FF` Blue 네온 그라데이션
- **Forbidden:** Green (사용 금지)
- **Style:** Glassmorphism (`backdrop-filter: blur` — 오버레이 전용, 상시 표시 요소에는 미적용), `border-radius: 15px`, Neon Glow
- 라이트 모드도 동일한 액센트로 가독성 유지

---

## 📂 File Structure

```
Thought Archive/
├── main.js             — Electron 메인 프로세스 (BrowserWindow, Widevine CDM, Chrome UA 세션)
├── index.html          — Home / Archive / Analytics 뷰 + Settings/Shortcut 모달 (data-i18n)
├── app.js              — 렌더러 로직: 번역 · 설정 · 뷰 전환 · 리소스/노트 · Analytics · 백링크 · 통계
├── style.css           — 디자인 시스템 (다크 / 라이트 / Analytics / 라이트 모드 보정 포함)
├── package.json        — Electron 의존성 및 빌드 스크립트
├── README.md
└── error-log.md        — 발생 오류 및 조치 내용 기록 (형식: YYYY-MM-DD HH:mm:ss -- 오류 --- 조치)
```

Electron 기반 데스크톱 앱 (렌더러는 순수 HTML/CSS/JS).

---

## 🚀 Run Locally

```bash
npm install
npm start
```

`npm start`는 `electron .`을 실행해 데스크톱 창으로 앱을 띄웁니다.

> 브라우저 단독 테스트가 필요하면 `python3 -m http.server 8080` 후 `http://localhost:8080` 접속도 가능하나, webview/Widevine 기능은 Electron에서만 동작합니다.

---

## 📦 Build

`@electron/packager`로 데스크톱 실행 파일을 빌드합니다 (macOS에서 wine 없이 양 플랫폼 빌드 가능).

```bash
npm run build:win    # Windows x64  → dist/Thought Archive-win32-x64/Thought Archive.exe
npm run build:mac    # macOS Universal → dist/Thought Archive-darwin-universal/Thought Archive.app
```

- **Windows**: `dist/Thought Archive-win32-x64/` 폴더 전체를 복사해 `.exe` 실행 (앱 코드는 `resources/app.asar`로 번들)
- **macOS**: Universal 바이너리(Intel + Apple Silicon). 서명 미적용이라 첫 실행 시 우클릭 → 열기 또는 `xattr -cr "Thought Archive.app"` 필요

> 현재 버전: **v1.0.1** · [GitHub Releases](https://github.com/pminseokd/thought-archive/releases)

---

## 🔭 Roadmap

- [x] Electron 패키징 (Windows `.exe` 빌드 · `npm run build:win`)
- [ ] `Always on Top` IPC 연결 (현재 설정값만 저장, 창 적용 미구현)
- [ ] 클라우드 동기화 옵션
- [x] 노트 풀텍스트 검색
- [x] 백링크 시스템 (`[[title]]` 자동완성 · 인용 배지 · 역참조 목록)
- [x] 성능 최적화 (backdrop-filter 범위 축소, `transition: all` → 개별 속성, CSS zoom 적용, 스크롤 컨테이너 paint containment)
- [ ] 리소스 썸네일 자동 가져오기

---

## 📄 License

[MIT](./LICENSE)

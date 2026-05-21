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

### 리소스 관리
- YouTube `watch` / `youtu.be` / `shorts` URL을 `/embed/`로 자동 변환
- 추가 시 URL을 분석해 `shorts` / `youtube` / `website`로 자동 분류
- 타입별 필터 필 + 검색 (`#태그` 입력 시 자동완성)

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
- **Style:** Glassmorphism (`backdrop-filter: blur`), `border-radius: 15px`, Neon Glow
- 라이트 모드도 동일한 액센트로 가독성 유지

---

## 📂 File Structure

```
Thought Archive/
├── index.html      — Home / Archive / Analytics 뷰 + Settings/Shortcut 모달 (data-i18n)
├── style.css       — 디자인 시스템 (다크 / 라이트 / Analytics / 라이트 모드 보정 포함)
├── main.js         — 번역 · 설정 · 뷰 전환 · 리소스/노트 · Analytics · 스토리지 · 통계
└── README.md
```

순수 HTML/CSS/JS — 빌드 도구·의존성 없음.

---

## 🚀 Run Locally

정적 파일 서버 한 줄이면 됩니다.

```bash
npx serve -p 3000
```

브라우저에서 `http://localhost:3000` 접속.

> CORS / CSP 정책으로 일부 YouTube 임베드가 막힐 수 있으며, Electron 패키징 시 `webSecurity: false`로 우회 예정입니다.

---

## 🔭 Roadmap

- [ ] Electron 패키징 (`Always on Top` IPC 연결 포함)
- [ ] 클라우드 동기화 옵션
- [ ] 노트 풀텍스트 검색
- [ ] 리소스 썸네일 자동 가져오기

---

## 📄 License

[MIT](./LICENSE)

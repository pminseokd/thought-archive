# Project: Thought Archive (Knowledge Collection)

## 1. Project Overview
- **Name:** Thought Archive
- **Goal:** 웹 리소스(유튜브, 숏츠, 웹사이트)와 실시간 메모를 한곳에서 관리하는 데스크톱 대시보드.
- **Tech Stack:** Electron (HTML5, CSS3, JavaScript) 기반 Desktop Wrapper 방식.
- **Resolution:** 1600x900 (고정 해상도).

## 2. Design System (UI/UX)
- **Concept:** Space Odyssey / Cyberpunk (Modern & Dark).
- **Primary Color:** `#050509` (Deep Space Black).
- **Accent Color:** `#8A2BE2` (Purple), `#1E90FF` (Blue) 네온 그라데이션.
- **Forbidden Color:** **Green (절대 사용 금지).**
- **Styles:** Glassmorphism (반투명 및 블러), Border-radius: 15px, Neon Glow 효과.

## 3. Layout Structure (3-Column)
1. **Left Sidebar (250px):** 내비게이션 메뉴 (Home, Analytics, Archive, Settings + 리소스 필터).
2. **Center Main (Flex: 1):**
   - Top: 3개의 통계/현황 카드 (Notes Saved, Resources Linked, Session Time).
   - Bottom: **Dual-View Stack** (Layer A: Media / Layer B: Note).
   - 숨김: **Archive View** — Archive 클릭 시 중앙이 노트 카드 그리드로 교체됨.
3. **Right Panel (350px):**
   - Top: Resource List (Shorts, YouTube, Web links) + 검색/필터.
   - Bottom: Activity Feed (실시간 로그).

## 4. Key Functions & Logic

### 핵심 뷰 전환
- **Dual-View Toggle:** 우측 리스트 클릭 시 중앙 뷰가 'Media View(iframe)'와 'Note View(Textarea)' 사이에서 즉시 전환.
- **Archive 라우팅:** 좌측 Archive 클릭 시 `data-view="archive"` 전환 → 저장된 메모를 카드 그리드로 표시. 카드 클릭 시 Home 뷰로 돌아와 해당 노트 열림.

### 미디어 처리
- **YouTube URL 자동 변환:** `toEmbedUrl()` 함수로 watch/youtu.be/shorts URL을 `/embed/` 형식으로 자동 변환. URL 바 붙여넣기 시에도 자동 감지 및 변환.
- **Media Handling:** iframe 로드, 외부 브라우저 열기(`⧉`) 지원.

### 메모 시스템
- **Note Auto-Register:** 새 메모 저장 시 Resource List에 자동 등록.
- **Auto-Save:** 설정된 간격(기본 5분)마다 현재 메모 자동 저장.
- **Markdown Export:** 현재 메모를 `.md` 파일로 다운로드.
- **Word/Char/Line 카운터:** 실시간 표시.
- **Timestamp 삽입:** `⏱ Stamp` 버튼으로 현재 시각 삽입.

### 키보드 단축키
| 단축키 | 기능 |
|---|---|
| `Ctrl+S` | 메모 저장 |
| `Ctrl+M` | 미디어/메모 뷰 전환 |
| `Ctrl+K` | URL 바 포커스 |
| `Ctrl+F` | 집중 모드 전환 |
| `Ctrl+Shift+F` | 리소스 검색창 포커스 |
| `Ctrl+,` | 설정 열기 |
| `?` | 단축키 도움말 패널 토글 |
| `Esc` | 열린 패널 닫기 / 집중 모드 해제 |

### Activity Feed
- 앱 내 모든 이벤트(메모 저장, 리소스 로드, 삭제 등)를 실시간 로그로 표시.
- 각 항목에 `×` 삭제 버튼 (hover 시 등장, 클릭 시 fade-out 애니메이션 후 제거).
- 최대 20개 항목 유지. 설정에서 전체 피드 지우기 가능.

### Resource List
- 유튜브/숏츠/웹사이트/메모 타입별 필터 필 + 검색.
- 각 항목 hover 시 `✕` 삭제 버튼 등장.
- 메모 타입 삭제 시 localStorage 데이터도 함께 정리.

## 5. Settings System
설정 항목은 `ta_settings` 키로 localStorage 자동 저장.

| 항목 | 기능 |
|---|---|
| Dark / Light Mode | 테마 전환 |
| Transparency | 글라스모피즘 투명도 조절 (0~100%) |
| Default Startup View | 앱 시작 시 기본 뷰 (미디어/메모) |
| Auto-Save Interval | 자동 저장 주기 (1분/5분/10분/사용안함) |
| Always on Top | 항상 위 모드 (Electron IPC 연동 예정) |
| Language / 언어 | 한국어 ↔ English UI 전환 |
| Clear Activity Feed | 활동 피드 전체 삭제 |
| Export as Markdown | 현재 메모 `.md` 파일로 다운로드 |
| Reset All Settings | 모든 설정 기본값으로 초기화 (메모 유지) |

## 6. Localization (다국어 지원)
- `TRANSLATIONS` 객체에 `en` / `ko` 두 언어 데이터 보유.
- `data-i18n="key"` 속성 기반으로 DOM 텍스트 일괄 치환 (`textContent`).
- `data-i18n-placeholder="key"` 속성으로 input/textarea placeholder 치환.
- `T(key)` 헬퍼 함수로 JS 내부 동적 문자열도 현재 언어로 반환.
- 번역 적용 범위: 내비게이션, 상단 버튼, 통계 카드, 탭, 우측 패널 헤더, 필터 필, 설정 전체, 단축키 도움말.
- 설정 저장 키: `settings.lang` (`'en'` | `'ko'`).

## 7. File Structure
```
Thought Archive/
├── index.html          — HTML 구조 (data-i18n 속성 포함)
├── style.css           — 전체 디자인 시스템
├── app.js              — 렌더러 로직 전체 (구 main.js, Electron 전환 시 rename)
├── main.js             — Electron 메인 프로세스 (BrowserWindow 생성, webviewTag 활성화)
├── package.json        — Electron 의존성 및 npm start 스크립트
├── node_modules/       — Electron 패키지
├── error-log.md        — 오류 발생 이력 수동 기록 (YYYY-MM-DD -- 오류 --- 조치)
└── Thought Archive.md  — 프로젝트 문서
```

## 8. Color / Emoji 태그 시스템

### 저장 확인 UI (Save Confirm Panel)
- `Ctrl+S` 또는 💾 Save 버튼 클릭 시 `saveNote()` → `showSavePanel()` 호출.
- 에디터 하단에 glassmorphism 슬라이드다운 패널(`.save-confirm-panel`) 표시.
- **색상 선택:** 6가지 컬러칩 — `#8A2BE2`, `#1E90FF`, `#FF6B6B`, `#FFD93D`, `#FF8C42`, `#C0C0C0`.
- **이모지 선택:** 12개 그리드 — `💡🔥⚡🎯📌🧠🌀✨🎨💎🚀🔮`. 재클릭 시 선택 해제.
- 기존 메모 열 때 해당 색상/이모지 자동 pre-select.
- Cancel(Esc) / Save 확정 → `doSaveNote(color, emoji)` 실제 저장.
- 자동 저장(Auto-save)은 패널 없이 기존 color/emoji 유지하며 직접 `doSaveNote()` 호출.

### localStorage 저장 구조 (확장)
```json
{ "title": "...", "body": "...", "saved": "ISO8601", "color": "#8A2BE2", "emoji": "💡", "tags": ["#idea"] }
```
- 기존 메모(`color` 필드 없음)는 기본값(`#8A2BE2`, emoji 없음)으로 처리.

### Archive 카드 렌더링
- 카드 최상단 **4px accent bar** — `background: {color}`, `border-radius` 상단만 적용.
- 이모지 있으면 카드 body 우상단에 24px로 절대 위치 표시.
- Archive 뷰 상단 색상 필터 행 (`.archive-filter-row`): All + 6 컬러칩. 클릭 시 `setArchiveColorFilter()`.

---

## 8-A. RESOURCES 영속성 (2026-05-25)

- `ta_resources` 키로 localStorage에 RESOURCES 배열 저장.
- 앱 초기화 시 `ta_resources`가 존재하면 데모 데이터 대신 저장된 데이터를 로드.
- `saveResources()` — `addResource()`, `deleteResource()`, `doSaveNote()`(새 메모 생성 분기)에서 호출.
- 효과: 페이지 새로고침 시 리소스 유실 버그 수정.

---

## 9. #태그 시스템

### 태그 입력 (노트 에디터)
- 에디터 하단 `.note-tag-row`에 태그 인풋(`#note-tag-input`) + pill 표시 영역(`#note-tag-pills`).
- 입력 중 `#` prefix 자동 추가. Enter 또는 Space로 확정.
- Backspace (인풋이 비어있을 때) → 마지막 태그 삭제.
- 태그는 소문자 정규화: `normalizeTag()` — `"Idea"` → `"#idea"`.
- 최대 10개 제한. 각 pill에 `×` 버튼으로 개별 삭제.

### 저장 구조
- 메모: `tags: ['#idea', '#ux']` 배열 포함.
- 리소스 추가 시 prompt로 태그 입력 → `tags` 필드 저장.
- `getAllTags()`: notes + RESOURCES 전체에서 중복 없이 태그 수집.

### 좌측 사이드바 TAGS 필터
- `#tags-nav-label` + `.sidebar-tags-wrap` — 태그 없으면 `display:none`.
- 태그 있으면 pill로 나열. 클릭 시 `toggleSidebarTag()` → `activeTags[]` 배열에 추가/제거.
- 활성 태그 pill은 보라 배경. **AND 조건** (선택된 태그 모두 포함한 항목만 표시).
- 활성 태그 있으면 "✕ Clear" 버튼 자동 표시.
- 필터는 Resource List + Archive 카드 그리드 동시 적용.

### 검색창 태그 자동완성
- `#` 입력 시 `.tag-autocomplete` 드롭다운 표시 — 매칭 태그 목록.
- 항목 클릭 → 검색창에 태그 삽입 + 리소스 필터링.
- `#` 외 일반 검색: 제목(name) OR 태그 OR 조건으로 매칭.

### Archive 카드 태그 표시
- 카드 하단 `.archive-card-tags` 영역에 `.archive-tag-pill`로 표시 (font-size 10px, border only).

---

## 10. 로컬 실행 방법

### Electron 앱으로 실행 (권장)
```bash
npm start
```

### 브라우저로 실행 (테스트용)
```bash
python3 -m http.server 7788
```
브라우저에서 `http://localhost:7788` 접속.

### Playwright 검증 시
```javascript
await page.goto("http://localhost:7788/")
```

---

## 11. Development Notes
- 브라우저 보안(CORS/CSP) 이슈로 인해 로컬 테스트 시 유튜브 임베드 오류가 발생할 수 있음.
- 이 문제는 추후 Electron 패키징 과정에서 `webSecurity: false` 설정으로 해결 예정.
- **Focus Mode 버그 수정:** `display: none` → `overflow: hidden + opacity: 0`으로 변경해 CSS Grid 레이아웃 붕괴 방지.
- **Resource 삭제 버튼 버그 수정:** `.resource-item::before` (hover 오버레이)에 `pointer-events: none` 추가 — 오버레이가 버튼 클릭 이벤트를 가로막던 문제 해결.
- **라이트 모드 설정 가독성 수정:** `body.light` 하위 `.sett-select`, `.sett-select option`, `.sett-row` 등 명시적 색상 오버라이드 추가.
- **Archive 카드 CSS 버그 수정:** `--glass-border` → `--glass-bdr` 오타 수정, `overflow: hidden` 추가.

---

## 12. 반응형 스케일 적용 (2026-05-21)

### 문제
1600px 고정 해상도 기반 설계로 인해 맥북 14인치(M5) 등 작은 뷰포트에서 화면이 짤리는 현상 발생.

### 해결 방식 — CSS zoom (Letterbox)
앱 전체를 뷰포트에 맞게 비율 유지하며 자동 축소/확대. 기존 디자인 100% 보존.

> ⚠️ 초기 구현은 `transform: scale()`을 사용했으나, 앱 전체가 단일 GPU 합성 레이어로 묶여 스크롤 시 프레임 드롭이 발생했음. `css zoom`으로 교체 — 레이아웃 레벨 처리이므로 GPU 레이어를 생성하지 않음.

### 변경 파일

**`style.css`**
- `#app`에 `flex-shrink: 0` 유지, `transform-origin` 제거

**`main.js`**
```js
function applyScale() {
  const scale = Math.min(window.innerWidth / 1600, window.innerHeight / 900);
  document.documentElement.style.zoom = String(scale);
}
applyScale();
window.addEventListener('resize', applyScale);
```
- `html` 요소에 `zoom` 적용 — `position: fixed` 오버레이도 올바르게 스케일됨.
- 뷰포트 대비 스케일 자동 계산, 창 리사이즈 시에도 즉시 반응.

### 특이사항
- 16:9 비율이 맞지 않는 경우 letterbox 여백 발생 (의도된 동작).
- 윈도우·맥 모두 동일하게 동작.

---

## 13. Full-text Search 구현 (2026-05-21)

### 변경 개요
기존 검색(제목 + 태그만 매칭)을 노트 본문까지 확장하고, 결과 우선순위 정렬 및 snippet 표시 기능을 추가.

### 1) 검색 범위 확대 (`main.js` — `renderResources`)
- `RESOURCES.filter()` → `RESOURCES.reduce()` 구조로 변경, 각 항목에 우선순위 숫자를 부여 후 `sort()`.
- 매칭 우선순위: **제목(0) > 태그(1) > 본문(2)**.
- 노트 본문 접근: `notes['note_' + r.id]?.body`.
- `#` prefix 검색은 태그 전용으로 기존 동작 유지.
- 대소문자 무시(`toLowerCase`), 한글 포함 정상 처리.

### 2) 본문 키워드 Snippet 표시 (`main.js` + `style.css`)
- `getBodySnippet(body, q)` 헬퍼 함수 추가 (`renderResources` 바로 위).
  - 키워드 앞뒤 30자 추출, 양 끝 잘림 시 `…` 처리.
  - 내부 HTML 이스케이프(`&`, `<`, `>`) 적용.
- 본문 매칭 항목(`priority: 2`)에만 snippet div 주입, 제목/태그 매칭은 생략.
- CSS: `.res-snippet` (10px, `var(--text-lo)`), `.res-snippet-hl` (보라색 bold).

### 3) 검색창 Placeholder i18n (`main.js`)
- `TRANSLATIONS.en.searchPh` → `'🔍  Search titles, tags, notes…'`
- `TRANSLATIONS.ko.searchPh` → `'🔍  제목, 태그, 본문 검색…'`
- `index.html`의 `data-i18n-placeholder="searchPh"` + `applyLanguage()` 기존 구조 그대로 활용.

### 4) 결과 없음 안내 (`main.js` + `style.css`)
- `TRANSLATIONS`에 `searchNoResult` 키 추가: `en` → `'No results found'`, `ko` → `'검색 결과가 없습니다'`.
- 결과 0개일 때 하드코딩 문자열 → `T('searchNoResult')` + `.search-no-result` 클래스로 교체.
- CSS: `.search-no-result` — `text-align: center`, `padding: 24px 20px`, `var(--text-lo)`.

### 변경 파일 요약
| 파일 | 변경 함수 / 위치 |
|------|----------------|
| `app.js` | `TRANSLATIONS` (en/ko) — `searchPh`, `searchNoResult` 키 수정/추가 |
| `app.js` | `getBodySnippet()` 헬퍼 신규 추가 |
| `app.js` | `renderResources()` — filter→reduce, snippet 주입, no-result T() 사용 |
| `style.css` | `.res-snippet`, `.res-snippet-hl`, `.search-no-result` 신규 추가 |

---

## 14. 코드 최적화 (2026-05-21)

### 백링크 인덱스 캐싱
- `buildBacklinkIndex()` 호출 시 `_backlinkIndexCache`에 결과 저장, 이후 호출은 O(1) 반환.
- `doSaveNote()` / `deleteResource()` (note 타입)에서 `invalidateBacklinkIndex()` 호출로 캐시 무효화.
- `_enhanceArchiveCards()`: 카드 루프 진입 전 인덱스 1회 빌드 → 각 카드 O(1) 조회. 기존 O(카드 × notes) → O(notes + 카드).

### Monkey-patching 제거
기존 `_patchRenderArchive()`, `_patchSwitchAndSave()` IIFE 패치 블록 제거.
- `renderArchive()` 끝에 `_enhanceArchiveCards()` 직접 호출
- `switchView()` note 분기 끝에 `updateNoteOutlinks()` + `setTimeout(updateBacklinkPanel, 0)` 직접 호출
- `doSaveNote()` 끝에 `updateNoteOutlinks()` + `updateBacklinkPanel()` 직접 호출

### DOM 캐시 (`const DOM = {}`)
DOMContentLoaded 시작 시 14개 자주 쓰이는 요소를 `DOM` 객체에 한 번만 저장.

| DOM 키 | element id |
|--------|-----------|
| `DOM.noteEditor` | `#note-editor` |
| `DOM.noteTitle` | `#note-title` |
| `DOM.saveStatus` | `#save-status` |
| `DOM.urlBar` | `#url-bar` |
| `DOM.searchInput` | `#search-input` |
| `DOM.settingsOverlay` | `#settings-overlay` |
| `DOM.savePanel` | `#save-confirm-panel` |
| `DOM.shortcutHelp` | `#shortcut-help` |
| `DOM.mediaIframe` | `#media-iframe` |
| `DOM.mediaPlaceholder` | `#media-placeholder` |
| `DOM.feedList` | `#feed-list` |
| `DOM.main` | `#main` |
| `DOM.backlinkDropdown` | `#backlink-dropdown` |
| `DOM.toast` | `#toast` |
| `DOM.iframeBlocked` | `#iframe-blocked` |
| `DOM.iframeBlockedUrl` | `#iframe-blocked-url` |

---

## 14-A. 추가 최적화 (2026-05-25)

### 노트 제목 맵 캐시 (`_noteTitleMapCache`)
- `buildNoteTitleMap()` — `Map<title, key>` O(1) 조회 캐시.
- `invalidateBacklinkIndex()`에서 함께 무효화 (`_noteTitleMapCache = null`).
- 적용 함수: `renderBodyWithLinks`, `updateNoteOutlinks`, `openNoteByTitle`, `_enhanceArchiveCards` preview 조회.
- 기존 O(n) `Object.entries(notes).find()` → O(1) Map.get()으로 대체.

### `getAllTags()` 캐싱 (`_tagCache`)
- `invalidateTagCache()` 추가 — `doSaveNote`, `addResource`, `deleteResource`에서 호출.
- 반복 호출(사이드바, 자동완성, 분석 뷰)에서 전체 순회 제거.

### 버그 수정
- `_showBacklinkSourceToast`: `incoming.map(([, n]) => ...)` → `incoming.map(({note: n}) => ...)` 구조분해 오류 수정.
- `filterResources()`: `renderResources(type)` → `renderResources(type, DOM.searchInput?.value || '')` — 필터 변경 시 검색어 유실 버그 수정.

### 기타
- 세션 타이머: `document.hidden` 체크 추가 — 페이지 비활성 시 틱 스킵.

---

## 15. UI 정리 (2026-05-21)

- 좌측 사이드바 **Resources 섹션 제거** (YouTube/Shorts/Websites/Notes 필터 링크 — 우측 pill과 중복)
- 우측 패널 헤더 **＋ Add 버튼 제거** (상단 topbar 버튼으로 통일)
- **Activity Feed 숨김** 처리 (`display:none`)
- 미디어 placeholder **▶ 텍스트 → SVG 아이콘** 교체 (모니터+플레이 버튼, purple→blue 그라디언트)

---

## 16. 웹사이트 iframe 차단 UX (2026-05-21)

### 문제
일반 웹사이트(`X-Frame-Options: DENY`)를 iframe에 로드 시 브라우저 기본 에러 페이지 표시.

### 해결
- `website` 타입 리소스 클릭 시: iframe에 URL 로드 안 함 (`about:blank`), 커스텀 오버레이 즉시 표시.
- URL 바 직접 입력 시: YouTube embed URL(`youtube.com/embed/`) 여부로 분기, 비-YouTube는 동일 처리.
- 오버레이 UI: 브라우저(X) SVG 아이콘 + "이 사이트는 임베드를 허용하지 않습니다" + URL + "⧉ 브라우저에서 열기" 버튼.

### 관련 함수
- `_setupIframeBlockDetect(url, isEmbed)` — `app.js`
- `#iframe-blocked` / `#iframe-blocked-url` — `index.html`
- `.iframe-blocked`, `.iframe-blocked-btn` 등 — `style.css`

---

## 17. Electron 마이그레이션 (2026-05-21 ~ 2026-05-22 완료)

### 목표
iframe의 `X-Frame-Options` 제한 없이 모든 웹사이트를 앱 내에서 직접 열기 위해 Electron `<webview>` 태그로 전환.

### Step 1 — Electron 앱 구조 전환 (2026-05-21)
- `main.js` → `app.js` rename (Electron 메인 프로세스 파일명 충돌 방지)
- `index.html` script src 업데이트 (`app.js`)
- `package.json` 생성 (`electron ^35`, `"main": "main.js"`, `"start": "electron ."`)
- `main.js` (Electron 메인 프로세스):
  - `BrowserWindow` 1600×900, `webPreferences: { webviewTag: true }`
  - macOS dock 재활성화 (`activate` 이벤트)

### Step 2 — webview 전환 및 영상 재생 완성 (2026-05-22)

#### iframe → webview 교체
- `index.html`: `<iframe>` → `<webview>` 교체
  - `partition="persist:media"` — 별도 세션으로 YouTube 쿠키/세션 분리
  - `useragent="Mozilla/5.0 ... Chrome/124.0.0.0 ..."` — Chrome UA 설정
  - `allowpopups` — 팝업 허용
- `style.css`: `#media-iframe { position:absolute; inset:0; visibility:hidden; pointer-events:none; }`
  - `display:none` 대신 `visibility:hidden` 사용 (webview guest renderer viewport 초기화 보존)
- `app.js`: show/hide를 `_showWebview()` / `_hideWebview()` 함수로 분리 (visibility + pointer-events 제어)

#### YouTube URL 처리
- `toEmbedUrl()` 함수 → embed URL 대신 `youtube.com/watch?v=ID` 반환
  - webview는 실제 브라우저 컨텍스트이므로 embed 불필요, Error 153 방지
- `did-navigate` / `did-navigate-in-page` 이벤트로 실제 내비게이션 URL을 URL 바에 동기화
- `_setupIframeBlockDetect(url)`: `did-fail-load` 이벤트 기반으로 교체 (errorCode -3은 정상 중단)
- 일반 웹사이트도 webview에서 직접 로드 (X-Frame-Options 제한 없음)

#### Widevine CDM 설정 (YouTube 영상 재생)
- `main.js`에 Chrome 설치 경로에서 Widevine CDM 자동 탐색:
  ```js
  app.commandLine.appendSwitch('widevine-cdm-path', WV_PATH);
  app.commandLine.appendSwitch('widevine-cdm-version', widevineVersion());
  ```
- `process.arch`로 arm64 / x64 자동 선택
- `manifest.json`에서 버전 파싱 (현재: `4.10.3050.0`)
- Chrome 미설치 시 스위치 미등록으로 graceful 처리

#### 세션 UA 설정
```js
session.defaultSession.setUserAgent(CHROME_UA);
session.fromPartition('persist:media').setUserAgent(CHROME_UA);
```

### 실행 방법
```bash
npm start        # Electron 앱 (권장)
python3 -m http.server 7788  # 브라우저 테스트용
```

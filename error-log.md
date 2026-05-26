# Thought Archive — 오류 로그

형식: `YYYY-MM-DD HH:mm:ss -- 오류 내용 --- 조치 내용`

---

2026-05-21 00:00:00 -- 전체적인 프레임 드롭 (앱 실행 시 버벅임) --- .stat-card / .dual-view-wrap / .archive-card 등 항상 화면에 보이는 카드 6종에 backdrop-filter: blur() 적용되어 있어 GPU 과부하 발생. 해당 요소들에서 backdrop-filter 제거

2026-05-21 00:01:00 -- 스크롤 시 프레임 드롭 심화 --- ① transition: all 이 7곳에 사용되어 스크롤 중 모든 CSS 속성 재계산 발생 → 변경 속성만 명시로 수정 / ② .resource-item::before position:absolute 그라디언트 오버레이가 스크롤 목록 아이템마다 존재 → 제거 후 background 직접 변경으로 대체 / ③ .feed-dot에 box-shadow: 0 0 6px 가 피드 전체 아이템에 적용되어 매 스크롤 리페인트 → 제거 / ④ .live-dot 무한 애니메이션에 box-shadow 포함 → 제거 후 will-change: opacity 추가 / ⑤ #right::before 대형 radial-gradient가 스크롤 영역과 겹침 → 제거 / ⑥ .resource-list, .feed-list에 contain: layout paint 추가

2026-05-21 00:02:00 -- transform: scale()로 인한 구조적 프레임 드롭 --- 1440px 모니터에서 앱 전체(1600px)에 transform: scale(0.9) 적용 시 앱 전체가 단일 GPU 합성 레이어로 묶여 스크롤/인터랙션마다 전체 레이어 재합성 발생 → transform: scale() 을 CSS zoom 으로 교체 (레이아웃 레벨 처리, GPU 레이어 미생성)

2026-05-21 00:03:00 -- 설정 창 열었을 때 프레임 드롭 가장 심함 --- ① settings-overlay가 닫혀있을 때도 display:flex + opacity:0 상태로 렌더링 파이프라인에 잔류, backdrop-filter: blur(6px) 를 매 프레임 GPU가 계산 → 닫힐 때 display:none으로 완전 제거 + backdrop-filter 제거 / ② settings-modal에도 backdrop-filter: blur(28px) 상시 적용 → 제거 / ③ shortcut-help도 동일 구조 → 동일하게 display:none 방식으로 수정 / ④ save-confirm-panel backdrop-filter: blur(20px) 항상 합성 중 → 제거

2026-05-22 22:00:00 -- YouTube Error 153 (동영상 플레이어 구성 오류) --- Electron webview에서 youtube.com/embed/ URL 로드 시 YouTube가 embed 재생을 차단. → toEmbedUrl() 함수 수정: embed URL 대신 youtube.com/watch?v=ID 로 변환하여 webview에서 전체 YouTube 페이지 로드.

2026-05-22 22:10:00 -- webview 콘텐츠가 상단 1/4만 렌더링되고 나머지 검정 --- 근본 원인: webview를 display:none으로 초기화 시 Electron guest renderer가 viewport를 0으로 설정. 이후 display:block으로 전환해도 이미 렌더링된 영역(~220px)만 표시됨. → index.html에서 webview 초기 style을 display:none 제거, style.css에서 #media-iframe을 position:absolute; inset:0; visibility:hidden으로 설정. app.js에서 show/hide를 display 대신 visibility + pointer-events로 제어.

2026-05-22 22:15:00 -- YouTube 홈 페이지로 리다이렉트 (Electron user-agent 감지) --- YouTube가 Electron 기본 UA를 감지해 watch 페이지를 홈으로 리다이렉트. → main.js에서 session.defaultSession.setUserAgent(Chrome UA) 및 session.fromPartition('persist:media').setUserAgent() 적용. webview에 partition="persist:media" + useragent 속성 추가. did-navigate 이벤트로 실제 이동 URL을 URL 바에 동기화.

2026-05-22 22:20:00 -- "동영상이 처리중입니다. 나중에 다시 시도하세요" — YouTube 재생 불가 --- Electron은 Widevine CDM(DRM)을 기본 포함하지 않아 YouTube 영상 디코딩 불가. → main.js에 Chrome 설치 경로의 WidevineCdm 탐색 로직 추가: process.arch(arm64/x64)에 따라 libwidevinecdm.dylib 경로 선택 후 app.commandLine.appendSwitch('widevine-cdm-path', ...) / ('widevine-cdm-version', ...) 등록. manifest.json에서 버전(4.10.3050.0) 자동 파싱.

2026-05-25 00:00:00 -- RESOURCES 페이지 새로고침 시 유실 --- RESOURCES 배열이 메모리 전용이어서 새로고침마다 데모 데이터로 초기화. → ta_resources 키로 localStorage 저장/로드 추가. saveResources() 함수 추가 및 addResource/deleteResource/doSaveNote(신규) 호출 지점에 적용.

2026-05-25 00:01:00 -- _showBacklinkSourceToast 구조분해 오류 --- incoming 배열이 {key, note}[] 객체인데 ([, n]) 배열 구조분해 적용 → n이 undefined. → ({note: n}) 객체 구조분해로 수정.

2026-05-25 00:02:00 -- filterResources() 검색어 유실 --- renderResources(type) 호출 시 searchInput.value 미전달 → 타입 필터 변경 시 검색어가 사라짐. → renderResources(type, DOM.searchInput?.value || '') 로 수정.

2026-05-26 00:00:00 -- Widevine CDM 미동작 확인 (Electron 35 / Chromium 134) --- navigator.requestMediaKeySystemAccess('com.widevine.alpha') 호출 시 "Unsupported keySystem" 반환. npm 배포 Electron 바이너리는 라이선스 정책상 Widevine 컴파일 비포함. app.commandLine.appendSwitch('widevine-cdm-path', ...) 스위치 무효. DRM 필요 콘텐츠(일부 라이브스트림 아카이브 등)는 재생 불가. 일반 YouTube 영상(AES 암호화)은 Widevine 없이 정상 재생됨. → CDM 경로를 라이브러리 파일에서 베이스 디렉토리로 변경 시도했으나 미해결. 완전한 해결책: electron-widevinecdm 패키지 또는 Castlabs 빌드 사용 필요(현재 미적용).

2026-05-26 00:01:00 -- 기본 YouTube 데모 리소스 재생 오류 (jfKfPfyJRdk, 5qap5aO4i9A) --- 기본 RESOURCES 배열의 YouTube 항목 2개(Deep Work Music · Lo-Fi Hip Hop)가 Widevine 미지원 또는 YouTube 스트림 아카이브 제한으로 재생 불가. → RESOURCES 배열에서 해당 항목 삭제, INITIAL_FEED 참조도 제거.

2026-05-26 00:02:00 -- [새 메모] · [리소스 추가] 버튼 미동작 --- Archive/Analytics 페이지(`main[data-view="archive|analytics"]`)에서 CSS로 `.dual-view-wrap { display:none }` 처리 중, 버튼 클릭 시 `switchView()`/`addResource()`는 실행되지만 결과가 보이지 않음. → `goHomeAndNewNote()` · `goHomeAndAddResource()` 래퍼 함수 추가: 클릭 시 Home nav 활성화 + `main.dataset.view = 'home'` 설정 후 동작 실행.

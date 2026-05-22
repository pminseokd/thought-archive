# Thought Archive — 오류 로그

형식: `YYYY-MM-DD HH:mm:ss -- 오류 내용 --- 조치 내용`

---

2026-05-21 00:00:00 -- 전체적인 프레임 드롭 (앱 실행 시 버벅임) --- .stat-card / .dual-view-wrap / .archive-card 등 항상 화면에 보이는 카드 6종에 backdrop-filter: blur() 적용되어 있어 GPU 과부하 발생. 해당 요소들에서 backdrop-filter 제거

2026-05-21 00:01:00 -- 스크롤 시 프레임 드롭 심화 --- ① transition: all 이 7곳에 사용되어 스크롤 중 모든 CSS 속성 재계산 발생 → 변경 속성만 명시로 수정 / ② .resource-item::before position:absolute 그라디언트 오버레이가 스크롤 목록 아이템마다 존재 → 제거 후 background 직접 변경으로 대체 / ③ .feed-dot에 box-shadow: 0 0 6px 가 피드 전체 아이템에 적용되어 매 스크롤 리페인트 → 제거 / ④ .live-dot 무한 애니메이션에 box-shadow 포함 → 제거 후 will-change: opacity 추가 / ⑤ #right::before 대형 radial-gradient가 스크롤 영역과 겹침 → 제거 / ⑥ .resource-list, .feed-list에 contain: layout paint 추가

2026-05-21 00:02:00 -- transform: scale()로 인한 구조적 프레임 드롭 --- 1440px 모니터에서 앱 전체(1600px)에 transform: scale(0.9) 적용 시 앱 전체가 단일 GPU 합성 레이어로 묶여 스크롤/인터랙션마다 전체 레이어 재합성 발생 → transform: scale() 을 CSS zoom 으로 교체 (레이아웃 레벨 처리, GPU 레이어 미생성)

2026-05-21 00:03:00 -- 설정 창 열었을 때 프레임 드롭 가장 심함 --- ① settings-overlay가 닫혀있을 때도 display:flex + opacity:0 상태로 렌더링 파이프라인에 잔류, backdrop-filter: blur(6px) 를 매 프레임 GPU가 계산 → 닫힐 때 display:none으로 완전 제거 + backdrop-filter 제거 / ② settings-modal에도 backdrop-filter: blur(28px) 상시 적용 → 제거 / ③ shortcut-help도 동일 구조 → 동일하게 display:none 방식으로 수정 / ④ save-confirm-panel backdrop-filter: blur(20px) 항상 합성 중 → 제거

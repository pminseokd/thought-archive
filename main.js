/* ─── Translations ───────────────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    newNote:'✎ New Note', addResource:'＋ Add Resource', focus:'⊡ Focus', focusExit:'⊠ Exit Focus',
    navNavigation:'Navigation', navResources:'Resources',
    navHome:'Home', navAnalytics:'Analytics', navArchive:'Archive',
    navYoutube:'YouTube', navShorts:'Shorts', navWebsites:'Websites', navNotes:'Notes', navSettings:'Settings',
    storageLabel:'Local Storage', offlineMode:'Offline Mode',
    statNotesLabel:'Notes Saved', statNotesDelta:'↑ 3 this week',
    statResourcesLabel:'Resources Linked', statResDelta:'↑ 2 today',
    statTimeLabel:'Session Time', statTimeActive:'● Active now',
    tabMedia:'Media View', tabNote:'Note View',
    mediaPh1:'Select a resource from the list',
    mediaPh2:'YouTube, Shorts, or Websites will appear here',
    noteStamp:'⏱ Stamp', noteSave:'💾 Save',
    noteStatusNotSaved:'Not saved', noteStatusAutoSave:'Auto-save on',
    noteSavedOk:'Saved ✓', noteAutoSaved:'Auto-saved ✓',
    noteTitlePh:'Note title...',
    noteEditorPh:'Start writing your thoughts...\n\nSelect a resource to annotate, or type freely.',
    noteWords:'Words:', noteChars:'Chars:', noteLines:'Lines:',
    panelResourceList:'Resource List', panelAdd:'＋ Add', panelActivityFeed:'Activity Feed',
    searchPh:'🔍  Search titles, tags, notes…',
    searchNoResult:'No results found',
    pillAll:'All', pillYoutube:'YouTube', pillShorts:'Shorts', pillWebsite:'Website', pillNote:'Notes',
    archiveTitle:'📁 Archive · Saved Notes',
    archiveEmptyL1:'No saved notes yet.', archiveEmptyL2:'Save a note to see it here.',
    archiveCountSuffix:' note', archiveCountSuffixPlural:' notes',
    feedCleared:'Feed cleared',
    settTitle:'Settings', settDesc:'Preferences are saved to localStorage automatically',
    settVisual:'VISUAL', settWorkflow:'WORKFLOW', settSystemTools:'SYSTEM TOOLS', settDataMgmt:'DATA MANAGEMENT',
    settDarkLight:'Dark / Light Mode', settDarkLightDesc:'Switch between Deep Space dark and soft light theme',
    settThemeDark:'Dark', settThemeLight:'Light',
    settTransparency:'Transparency', settTransparencyDesc:'Adjust Glassmorphism opacity across all cards',
    settStartup:'Default Startup View', settStartupDesc:'Which layer opens when the app launches',
    settStartupMedia:'Media View', settStartupNote:'Note View',
    settAutoSave:'Auto-Save Interval', settAutoSaveDesc:'How often notes are saved automatically in the background',
    settAs1:'Every 1 min', settAs5:'Every 5 min', settAs10:'Every 10 min', settAsOff:'Disabled',
    settAlwaysOnTop:'Always on Top', settAlwaysOnTopDesc:'Keep window above all others — Electron IPC ready',
    settOnTopOn:'On', settOnTopOff:'Off',
    settLangDesc:'Switch UI language between Korean and English',
    settClearFeed:'Clear Activity Feed', settClearFeedDesc:'Remove all logged events from the right panel feed', settClearFeedBtn:'Clear Feed',
    settExportMd:'Export as Markdown', settExportMdDesc:'Download the current note as a .md file', settExportBtn:'Export .md',
    settReset:'Reset All Settings', settResetDesc:'Restore every preference to factory default — notes are kept', settResetBtn:'Reset',
    settFooterNote:'Settings auto-saved · Key:', settClose:'Close',
    shTitle:'Keyboard Shortcuts', shHint:'Press ? anywhere to toggle · Esc to close',
    shSave:'Save note', shToggleView:'Toggle Media / Note', shFocusUrl:'Focus URL bar',
    shFocusSearch:'Focus search', shFocusMode:'Toggle Focus Mode', shSettings:'Open Settings',
    shHelp:'This help panel', shEscape:'Close panel / Exit mode',
  },
  ko: {
    newNote:'✎ 새 메모', addResource:'＋ 리소스 추가', focus:'⊡ 집중모드', focusExit:'⊠ 집중모드 해제',
    navNavigation:'내비게이션', navResources:'리소스',
    navHome:'홈', navAnalytics:'분석', navArchive:'보관함',
    navYoutube:'유튜브', navShorts:'숏츠', navWebsites:'웹사이트', navNotes:'메모', navSettings:'설정',
    storageLabel:'로컬 저장소', offlineMode:'오프라인 모드',
    statNotesLabel:'저장된 메모', statNotesDelta:'↑ 이번 주 3개',
    statResourcesLabel:'연결된 리소스', statResDelta:'↑ 오늘 2개',
    statTimeLabel:'세션 시간', statTimeActive:'● 현재 활성',
    tabMedia:'미디어 뷰', tabNote:'메모 뷰',
    mediaPh1:'목록에서 리소스를 선택하세요',
    mediaPh2:'유튜브, 숏츠, 웹사이트가 여기에 표시됩니다',
    noteStamp:'⏱ 타임스탬프', noteSave:'💾 저장',
    noteStatusNotSaved:'미저장', noteStatusAutoSave:'자동저장 켜짐',
    noteSavedOk:'저장됨 ✓', noteAutoSaved:'자동저장됨 ✓',
    noteTitlePh:'메모 제목...',
    noteEditorPh:'생각을 자유롭게 적어보세요...\n\n리소스를 선택하고 주석을 달거나, 자유롭게 작성하세요.',
    noteWords:'단어:', noteChars:'글자:', noteLines:'줄:',
    panelResourceList:'리소스 목록', panelAdd:'＋ 추가', panelActivityFeed:'활동 피드',
    searchPh:'🔍  제목, 태그, 본문 검색…',
    searchNoResult:'검색 결과가 없습니다',
    pillAll:'전체', pillYoutube:'유튜브', pillShorts:'숏츠', pillWebsite:'웹사이트', pillNote:'메모',
    archiveTitle:'📁 보관함 · 저장된 메모',
    archiveEmptyL1:'저장된 메모가 없습니다.', archiveEmptyL2:'메모를 저장하면 여기에 표시됩니다.',
    archiveCountSuffix:'개', archiveCountSuffixPlural:'개',
    feedCleared:'피드가 지워졌습니다',
    settTitle:'설정', settDesc:'환경설정은 자동으로 localStorage에 저장됩니다',
    settVisual:'화면', settWorkflow:'워크플로우', settSystemTools:'시스템 도구', settDataMgmt:'데이터 관리',
    settDarkLight:'다크 / 라이트 모드', settDarkLightDesc:'다크 스페이스와 밝은 테마를 전환합니다',
    settThemeDark:'다크', settThemeLight:'라이트',
    settTransparency:'투명도', settTransparencyDesc:'모든 카드의 글라스모피즘 투명도를 조절합니다',
    settStartup:'기본 시작 화면', settStartupDesc:'앱 실행 시 어떤 뷰로 시작할지 설정합니다',
    settStartupMedia:'미디어 뷰', settStartupNote:'메모 뷰',
    settAutoSave:'자동 저장 간격', settAutoSaveDesc:'메모가 자동으로 저장되는 주기를 설정합니다',
    settAs1:'1분마다', settAs5:'5분마다', settAs10:'10분마다', settAsOff:'사용 안 함',
    settAlwaysOnTop:'항상 위에 표시', settAlwaysOnTopDesc:'다른 창 위에 항상 표시 — Electron IPC 연동 준비됨',
    settOnTopOn:'켜짐', settOnTopOff:'꺼짐',
    settLangDesc:'한국어와 영어 간 UI 언어를 전환합니다',
    settClearFeed:'활동 피드 지우기', settClearFeedDesc:'우측 패널의 모든 활동 로그를 삭제합니다', settClearFeedBtn:'피드 지우기',
    settExportMd:'마크다운으로 내보내기', settExportMdDesc:'현재 메모를 .md 파일로 다운로드합니다', settExportBtn:'내보내기 .md',
    settReset:'모든 설정 초기화', settResetDesc:'모든 설정을 기본값으로 되돌립니다 — 메모는 유지됩니다', settResetBtn:'초기화',
    settFooterNote:'설정 자동 저장 · 키:', settClose:'닫기',
    shTitle:'키보드 단축키', shHint:'어디서든 ? 키로 토글 · Esc로 닫기',
    shSave:'메모 저장', shToggleView:'미디어 / 메모 전환', shFocusUrl:'URL 바 포커스',
    shFocusSearch:'검색창 포커스', shFocusMode:'집중 모드 전환', shSettings:'설정 열기',
    shHelp:'단축키 도움말', shEscape:'패널 닫기 / 모드 종료',
  }
};

let currentLang = 'en';

/* ─── Translation helper ─────────────────────────────────────────── */
function T(key) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  return t[key] !== undefined ? t[key] : (TRANSLATIONS.en[key] || key);
}

/* ─── Apply Language ─────────────────────────────────────────────── */
function applyLanguage(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  const togLang = document.getElementById('tog-lang');
  if (togLang) togLang.checked = lang === 'ko';
  const langLabel = document.getElementById('lang-label');
  if (langLabel) langLabel.textContent = lang === 'ko' ? 'KO' : 'EN';

  const focusBtn = document.getElementById('focus-btn');
  if (focusBtn) focusBtn.textContent = focusMode ? T('focusExit') : T('focus');

  if (settings) {
    const themeLabel = document.getElementById('theme-label');
    if (themeLabel) themeLabel.textContent = settings.theme === 'light' ? T('settThemeLight') : T('settThemeDark');
    const ontopLabel = document.getElementById('ontop-label');
    if (ontopLabel) ontopLabel.textContent = settings.alwaysOnTop ? T('settOnTopOn') : T('settOnTopOff');
  }

  const ss = document.getElementById('save-status');
  if (ss && (ss.textContent === 'Not saved' || ss.textContent === '미저장' ||
             ss.textContent === 'Auto-save on' || ss.textContent === '자동저장 켜짐')) {
    ss.textContent = currentNoteKey ? T('noteStatusAutoSave') : T('noteStatusNotSaved');
  }

  const main = document.getElementById('main');
  if (main && main.dataset.view === 'archive') renderArchive();
}

/* ─── Data ──────────────────────────────────────────────────────── */
const RESOURCES = [
  { id:1, type:'youtube', name:'Deep Work Music', meta:'Focus · 8h loop',
    url:'https://www.youtube.com/embed/jfKfPfyJRdk', icon:'▶', thumb:'yt', tags:[] },
  { id:2, type:'shorts',  name:'Dev Shorts',      meta:'Shorts · Tech tips',
    url:'https://www.youtube.com/embed/Tn6-PIqc4UM', icon:'⚡', thumb:'short', tags:[] },
  { id:3, type:'website', name:'GitHub Repo',     meta:'github.com',
    url:'https://github.com', icon:'⊕', thumb:'web', tags:['#dev'] },
  { id:4, type:'youtube', name:'Lo-Fi Hip Hop',   meta:'Chill Beats · Study',
    url:'https://www.youtube.com/embed/5qap5aO4i9A', icon:'▶', thumb:'yt', tags:['#focus','#music'] },
  { id:5, type:'website', name:'MDN Web Docs',    meta:'developer.mozilla.org',
    url:'https://developer.mozilla.org', icon:'⊕', thumb:'web', tags:['#dev','#reference'] },
  { id:6, type:'note',    name:'Project Ideas',   meta:'Note · 3 tags',
    url:null, icon:'✎', thumb:'note', tags:['#idea'] }
];

const INITIAL_FEED = [
  { dot:'purple', text:'Note <b>Project Ideas</b> saved',        time:'Just now'  },
  { dot:'blue',   text:'Resource <b>Lo-Fi Hip Hop</b> added',    time:'2 min ago' },
  { dot:'purple', text:'Note <b>Architecture Plan</b> updated',  time:'8 min ago' },
  { dot:'dim',    text:'Session started',                        time:'12 min ago'},
  { dot:'blue',   text:'<b>Deep Work Music</b> loaded',          time:'14 min ago'},
  { dot:'dim',    text:'Archive opened',                         time:'20 min ago'}
];

/* ─── Constants ─────────────────────────────────────────────────── */
const NOTE_COLORS = ['#8A2BE2','#1E90FF','#FF6B6B','#FFD93D','#FF8C42','#C0C0C0'];
const NOTE_EMOJIS = ['💡','🔥','⚡','🎯','📌','🧠','🌀','✨','🎨','💎','🚀','🔮'];

/* ─── State ─────────────────────────────────────────────────────── */
let currentView      = 'media';
let activeFilter     = 'all';
let activeResId      = null;
let notes            = JSON.parse(localStorage.getItem('ta_notes') || '{}');
let currentNoteKey   = null;

let selectedColor      = '#8A2BE2';
let selectedEmoji      = '';
let archiveColorFilter = 'all';
let currentTags        = [];
let activeTags         = [];

/* ─── Init ──────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderResources();
  renderFeed(INITIAL_FEED);
  updateWordCount();
  loadSettings();
  updateStatCounters();
  renderSidebarTags();

  document.getElementById('note-editor').addEventListener('input', updateWordCount);

  /* URL 바 */
  const urlBar = document.getElementById('url-bar');
  urlBar.addEventListener('keydown', e => { if (e.key === 'Enter') loadUrl(); });
  urlBar.addEventListener('paste', () => {
    setTimeout(() => {
      const val = urlBar.value;
      const converted = toEmbedUrl(val);
      if (converted !== val) {
        urlBar.value = converted;
        showToast('🔗  YouTube URL 자동 변환됨');
      }
    }, 0);
  });

  /* 태그 입력 핸들러 */
  const tagInput = document.getElementById('note-tag-input');
  if (tagInput) {
    tagInput.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const raw = tagInput.value.trim();
        if (raw) { addTag(raw); tagInput.value = ''; }
      } else if (e.key === 'Backspace' && !tagInput.value && currentTags.length > 0) {
        removeTag(currentTags[currentTags.length - 1]);
      }
    });
    tagInput.addEventListener('input', () => {
      const v = tagInput.value;
      if (v && !v.startsWith('#')) tagInput.value = '#' + v;
    });
  }
});

/* ─── Navigation ─────────────────────────────────────────────────── */
function setNav(el) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  el.classList.add('active');
  const page = el.dataset.page;
  if (page) navigateTo(page);
}

function navigateTo(page) {
  const main = document.getElementById('main');
  if (page === 'archive') {
    main.dataset.view = 'archive';
    renderArchive();
    addFeedItem('dim', 'Opened <b>Archive</b> view');
  } else if (page === 'analytics') {
    main.dataset.view = 'analytics';
    renderAnalytics();
    addFeedItem('blue', 'Opened <b>Analytics</b> view');
  } else {
    main.dataset.view = 'home';
  }
  renderSidebarTags();
}

/* ─── Analytics Rendering ────────────────────────────────────── */
function renderAnalytics() {
  const totalNotes     = Object.keys(notes).length;
  const allTags        = getAllTags();
  const nonNoteRes     = RESOURCES.filter(r => r.type !== 'note').length;

  /* Quick stats */
  const quickRow = document.getElementById('an-quick-row');
  if (!quickRow) return;
  quickRow.innerHTML = `
    <div class="an-quick-card">
      <div class="an-quick-icon purple">📝</div>
      <div class="an-quick-val">${totalNotes}</div>
      <div class="an-quick-label">Saved Notes</div>
    </div>
    <div class="an-quick-card">
      <div class="an-quick-icon blue">🔗</div>
      <div class="an-quick-val">${nonNoteRes}</div>
      <div class="an-quick-label">Resources Linked</div>
    </div>
    <div class="an-quick-card">
      <div class="an-quick-icon mixed">#</div>
      <div class="an-quick-val">${allTags.length}</div>
      <div class="an-quick-label">Unique Tags</div>
    </div>
    <div class="an-quick-card">
      <div class="an-quick-icon purple">⏱</div>
      <div class="an-quick-val">${document.getElementById('stat-time').textContent}</div>
      <div class="an-quick-label">Session Time</div>
    </div>
  `;

  /* Resources by type */
  const typeCounts  = { youtube: 0, shorts: 0, website: 0, note: 0 };
  RESOURCES.forEach(r => { if (r.type in typeCounts) typeCounts[r.type]++; });
  const resTotal    = RESOURCES.length || 1;
  const typeColors  = { youtube:'#FF4444', shorts:'#1E90FF', website:'#8A2BE2', note:'#a066e0' };
  const typeLabels  = { youtube:'▶ YouTube', shorts:'⚡ Shorts', website:'⊕ Website', note:'✎ Notes' };

  document.getElementById('an-type-bars').innerHTML = Object.entries(typeCounts).map(([type, count]) => {
    const pct = Math.round((count / resTotal) * 100);
    return `
      <div class="an-type-row">
        <div class="an-type-label">${typeLabels[type]}</div>
        <div class="an-bar-wrap">
          <div class="an-bar-fill" style="width:${pct}%;background:${typeColors[type]}"></div>
        </div>
        <div class="an-type-stat">${count} <span>${pct}%</span></div>
      </div>`;
  }).join('');

  /* Top tags */
  const tagCounts = {};
  Object.values(notes).forEach(n => (n.tags||[]).forEach(t => { tagCounts[t] = (tagCounts[t]||0)+1; }));
  RESOURCES.forEach(r => (r.tags||[]).forEach(t => { tagCounts[t] = (tagCounts[t]||0)+1; }));
  const sortedTags  = Object.entries(tagCounts).sort((a,b) => b[1]-a[1]).slice(0, 8);
  const maxTagCount = sortedTags[0]?.[1] || 1;
  const tagList     = document.getElementById('an-tag-list');
  tagList.innerHTML = sortedTags.length === 0
    ? `<div class="an-empty">No tags yet</div>`
    : sortedTags.map(([tag, count]) => `
        <div class="an-tag-row">
          <div class="an-tag-name">${tag}</div>
          <div class="an-mini-bar-wrap">
            <div class="an-mini-bar-fill" style="width:${Math.round((count/maxTagCount)*100)}%"></div>
          </div>
          <div class="an-count">${count}</div>
        </div>`).join('');

  /* Notes by color */
  const colorCounts = {};
  Object.values(notes).forEach(n => {
    const c = n.color || '#8A2BE2';
    colorCounts[c] = (colorCounts[c]||0)+1;
  });
  const colorEntries  = Object.entries(colorCounts).sort((a,b) => b[1]-a[1]);
  const maxColorCount = colorEntries[0]?.[1] || 1;
  const colorList     = document.getElementById('an-color-list');
  colorList.innerHTML = colorEntries.length === 0
    ? `<div class="an-empty">No saved notes yet</div>`
    : colorEntries.map(([color, count]) => `
        <div class="an-color-row">
          <div class="an-color-swatch" style="background:${color}"></div>
          <div class="an-mini-bar-wrap">
            <div class="an-mini-bar-fill" style="width:${Math.round((count/maxColorCount)*100)}%;background:${color}"></div>
          </div>
          <div class="an-count">${count}</div>
        </div>`).join('');

  /* Updated time */
  document.getElementById('analytics-updated').textContent =
    'Updated · ' + new Date().toLocaleTimeString('ko-KR', { hour:'2-digit', minute:'2-digit' });
}

/* ─── Archive Rendering ──────────────────────────────────────────── */
function renderArchive() {
  const grid       = document.getElementById('archive-grid');
  const countEl    = document.getElementById('archive-count');
  const allEntries = Object.entries(notes);

  /* color + tag 필터 적용 */
  let filtered = allEntries;
  if (archiveColorFilter !== 'all') {
    filtered = filtered.filter(([,n]) => (n.color || '#8A2BE2') === archiveColorFilter);
  }
  if (activeTags.length > 0) {
    filtered = filtered.filter(([,n]) => activeTags.every(t => (n.tags || []).includes(t)));
  }

  countEl.textContent = allEntries.length +
    T(allEntries.length !== 1 ? 'archiveCountSuffixPlural' : 'archiveCountSuffix');

  if (allEntries.length === 0) {
    grid.innerHTML = `<div class="archive-empty"><span>📁</span>${T('archiveEmptyL1')}<br>${T('archiveEmptyL2')}</div>`;
    return;
  }
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="archive-empty"><span>🔍</span>No notes match the current filter.</div>`;
    return;
  }

  grid.innerHTML = '';
  filtered
    .sort((a, b) => {
      const da = a[1].saved ? new Date(a[1].saved) : 0;
      const db = b[1].saved ? new Date(b[1].saved) : 0;
      return db - da;
    })
    .forEach(([key, note]) => {
      const card  = document.createElement('div');
      card.className = 'archive-card';
      const color    = note.color || '#8A2BE2';
      const emoji    = note.emoji || '';
      const date     = note.saved ? new Date(note.saved).toLocaleDateString('ko-KR') : '—';
      const tagsHtml = (note.tags || []).length > 0
        ? `<div class="archive-card-tags">${(note.tags||[]).map(t=>`<span class="archive-tag-pill">${t}</span>`).join('')}</div>`
        : '';
      card.innerHTML = `
        <div class="archive-card-bar" style="background:${color}"></div>
        <div class="archive-card-body">
          ${emoji ? `<div class="archive-card-emoji">${emoji}</div>` : ''}
          <div class="archive-card-title">${note.title || 'Untitled'}</div>
          <div class="archive-card-preview">${note.body ? note.body.replace(/</g,'&lt;') : '<em style="opacity:.4">Empty note</em>'}</div>
          ${tagsHtml}
          <div class="archive-card-date">Saved: ${date}</div>
        </div>
      `;
      card.addEventListener('click', () => {
        const homeNav = document.querySelector('[data-page="home"]');
        if (homeNav) setNav(homeNav);
        currentNoteKey = key;
        document.getElementById('note-title').value = note.title || '';
        document.getElementById('note-editor').value = note.body || '';
        currentTags = (note.tags || []).slice();
        renderTagPills();
        updateWordCount();
        switchView('note');
        addFeedItem('purple', `Opened <b>${note.title || 'Untitled'}</b> from Archive`);
      });
      grid.appendChild(card);
    });
}

/* ─── Body Snippet Helper ────────────────────────────────────────── */
function getBodySnippet(body, q) {
  const lower = body.toLowerCase();
  const idx   = lower.indexOf(q);
  if (idx === -1) return null;
  const start = Math.max(0, idx - 30);
  const end   = Math.min(body.length, idx + q.length + 30);
  const esc   = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  return {
    before: (start > 0 ? '…' : '') + esc(body.slice(start, idx)),
    match:  esc(body.slice(idx, idx + q.length)),
    after:  esc(body.slice(idx + q.length, end)) + (end < body.length ? '…' : '')
  };
}

/* ─── Resource Rendering ─────────────────────────────────────────── */
function renderResources(filter = activeFilter, search = '') {
  const list = document.getElementById('resource-list');
  list.innerHTML = '';

  const q = search.toLowerCase();

  const withPriority = RESOURCES.reduce((acc, r) => {
    const matchFilter = filter === 'all' || r.type === filter;
    const matchTags   = activeTags.length === 0 ||
      activeTags.every(t => (r.tags || []).includes(t));
    if (!matchFilter || !matchTags) return acc;

    if (!q) { acc.push({ r, priority: 0 }); return acc; }

    if (q.startsWith('#')) {
      if ((r.tags || []).some(t => t.includes(q)))
        acc.push({ r, priority: 1 });
      return acc;
    }

    const nameMatch = r.name.toLowerCase().includes(q);
    const tagMatch  = (r.tags || []).some(t => t.toLowerCase().includes(q));
    const noteBody  = r.type === 'note' ? ((notes['note_' + r.id] || {}).body || '') : '';
    const bodyMatch = noteBody.toLowerCase().includes(q);

    if      (nameMatch) acc.push({ r, priority: 0, snippet: null });
    else if (tagMatch)  acc.push({ r, priority: 1, snippet: null });
    else if (bodyMatch) acc.push({ r, priority: 2, snippet: getBodySnippet(noteBody, q) });
    return acc;
  }, []);

  withPriority.sort((a, b) => a.priority - b.priority);

  if (withPriority.length === 0) {
    list.innerHTML = `<div class="search-no-result">${T('searchNoResult')}</div>`;
    return;
  }

  withPriority.forEach(({ r, snippet }) => {
    const div = document.createElement('div');
    div.className = 'resource-item' + (activeResId === r.id ? ' active' : '');
    div.dataset.id = r.id;
    const tagsSnippet = (r.tags||[]).length
      ? `<div style="margin-top:2px;display:flex;gap:3px;flex-wrap:wrap;">${(r.tags||[]).map(t=>`<span style="font-size:9px;color:var(--purple);border:1px solid rgba(138,43,226,0.35);border-radius:10px;padding:0 5px;">${t}</span>`).join('')}</div>`
      : '';
    const snippetHtml = snippet
      ? `<div class="res-snippet">${snippet.before}<span class="res-snippet-hl">${snippet.match}</span>${snippet.after}</div>`
      : '';
    div.innerHTML = `
      <div class="res-thumb ${r.thumb}">${r.icon}</div>
      <div class="res-info">
        <div class="res-name">${r.name}</div>
        <div class="res-meta">${r.meta}</div>
        ${tagsSnippet}
        ${snippetHtml}
      </div>
      <div class="res-badge ${r.thumb}">${r.type}</div>
      <button class="res-delete" title="Delete" onclick="event.stopPropagation(); deleteResource(${r.id})">✕</button>
    `;
    div.addEventListener('click', () => onResourceClick(r));
    list.appendChild(div);
  });
}

/* ─── Resource Click ─────────────────────────────────────────────── */
function onResourceClick(r) {
  activeResId = r.id;
  renderResources(activeFilter);

  if (r.type === 'note') {
    currentNoteKey = 'note_' + r.id;
    const saved = notes[currentNoteKey] || { title: r.name, body: '' };
    document.getElementById('note-title').value = saved.title;
    document.getElementById('note-editor').value = saved.body;
    currentTags = (saved.tags || []).slice();
    renderTagPills();
    updateWordCount();
    switchView('note');
    addFeedItem('purple', `Opened note <b>${r.name}</b>`);
  } else {
    loadResource(r);
    switchView('media');
  }
}

function loadResource(r) {
  const iframe      = document.getElementById('media-iframe');
  const placeholder = document.getElementById('media-placeholder');
  const urlBar      = document.getElementById('url-bar');
  const embedUrl    = toEmbedUrl(r.url);
  urlBar.value = embedUrl;
  placeholder.style.display = 'none';
  iframe.style.display = 'block';
  iframe.src = embedUrl;
  addFeedItem('blue', `Loaded <b>${r.name}</b>`);
  showToast(`▶  ${r.name} loaded`);
}

/* ─── Dual-View ──────────────────────────────────────────────────── */
function switchView(mode) {
  currentView = mode;
  const layerMedia = document.getElementById('layer-media');
  const layerNote  = document.getElementById('layer-note');
  const tabMedia   = document.getElementById('tab-media');
  const tabNote    = document.getElementById('tab-note');
  const urlBar     = document.getElementById('url-bar');

  if (mode === 'media') {
    layerMedia.classList.remove('hidden');
    layerNote.classList.add('hidden');
    tabMedia.classList.add('active');
    tabNote.classList.remove('active');
    urlBar.style.display = '';
  } else {
    layerNote.classList.remove('hidden');
    layerMedia.classList.add('hidden');
    tabNote.classList.add('active');
    tabMedia.classList.remove('active');
    urlBar.style.display = 'none';
    document.getElementById('note-editor').focus();
    if (!currentNoteKey) {
      currentNoteKey = 'note_new_' + Date.now();
      currentTags = [];
      renderTagPills();
    }
  }
}

/* ─── YouTube URL → Embed ────────────────────────────────────────── */
function toEmbedUrl(raw) {
  const s    = raw.trim();
  const full = s.startsWith('http') ? s : 'https://' + s;
  let videoId = null;
  try {
    const u = new URL(full);
    if (u.hostname === 'youtu.be') {
      videoId = u.pathname.slice(1).split(/[?&#]/)[0];
    } else if (u.hostname.includes('youtube.com') && u.pathname === '/watch') {
      videoId = u.searchParams.get('v');
    } else if (u.hostname.includes('youtube.com') && u.pathname.startsWith('/shorts/')) {
      videoId = u.pathname.split('/shorts/')[1].split(/[?&#]/)[0];
    } else if (u.hostname.includes('youtube.com') && u.pathname.startsWith('/embed/')) {
      return full;
    }
  } catch (_) {}
  return videoId ? `https://www.youtube.com/embed/${videoId}` : full;
}

/* ─── URL Bar ────────────────────────────────────────────────────── */
function loadUrl() {
  const raw = document.getElementById('url-bar').value.trim();
  if (!raw) return;
  const url = toEmbedUrl(raw);
  document.getElementById('url-bar').value = url;
  const iframe      = document.getElementById('media-iframe');
  const placeholder = document.getElementById('media-placeholder');
  placeholder.style.display = 'none';
  iframe.style.display = 'block';
  iframe.src = url;
  switchView('media');
  addFeedItem('blue', `URL loaded: <b>${url.slice(0,38)}…</b>`);
}

function openExternal() {
  const url = document.getElementById('url-bar').value.trim();
  if (url) window.open(url, '_blank');
}

/* ─── Note Save — Show Panel ────────────────────────────────────── */
function saveNote() {
  showSavePanel();
}

function showSavePanel() {
  const existing  = currentNoteKey ? notes[currentNoteKey] : null;
  selectedColor   = (existing && existing.color) || '#8A2BE2';
  selectedEmoji   = (existing && existing.emoji) || '';
  renderSavePanel();
  document.getElementById('save-confirm-panel').classList.add('open');
}

function renderSavePanel() {
  /* Color chips */
  const colorsEl = document.getElementById('scp-colors');
  colorsEl.innerHTML = '';
  NOTE_COLORS.forEach(c => {
    const chip = document.createElement('div');
    chip.className = 'scp-color-chip' + (c === selectedColor ? ' active' : '');
    chip.style.background = c;
    chip.title = c;
    chip.addEventListener('click', () => { selectedColor = c; renderSavePanel(); });
    colorsEl.appendChild(chip);
  });
  /* Emoji chips */
  const emojisEl = document.getElementById('scp-emojis');
  emojisEl.innerHTML = '';
  NOTE_EMOJIS.forEach(em => {
    const chip = document.createElement('div');
    chip.className = 'scp-emoji-chip' + (em === selectedEmoji ? ' active' : '');
    chip.textContent = em;
    chip.addEventListener('click', () => {
      selectedEmoji = selectedEmoji === em ? '' : em;
      renderSavePanel();
    });
    emojisEl.appendChild(chip);
  });
}

function confirmSave() {
  document.getElementById('save-confirm-panel').classList.remove('open');
  doSaveNote(selectedColor, selectedEmoji);
}

function cancelSave() {
  document.getElementById('save-confirm-panel').classList.remove('open');
}

function doSaveNote(color, emoji) {
  const title = document.getElementById('note-title').value || 'Untitled';
  const body  = document.getElementById('note-editor').value;
  if (!currentNoteKey) currentNoteKey = 'note_new_' + Date.now();

  if (currentNoteKey.startsWith('note_new_')) {
    const rid    = Date.now();
    const newRes = {
      id: rid, type: 'note', name: title,
      meta: `Note · ${new Date().toLocaleDateString('ko-KR')}`,
      url: null, icon: '✎', thumb: 'note',
      tags: [...currentTags]
    };
    RESOURCES.push(newRes);
    const oldKey   = currentNoteKey;
    currentNoteKey = 'note_' + rid;
    activeResId    = rid;
    notes[currentNoteKey] = notes[oldKey];
    delete notes[oldKey];
    renderResources(activeFilter);
  } else {
    /* 기존 리소스의 태그도 동기화 */
    const res = RESOURCES.find(r => r.id === Number(currentNoteKey.replace('note_', '')));
    if (res) res.tags = [...currentTags];
  }

  notes[currentNoteKey] = {
    title, body,
    saved: new Date().toISOString(),
    color: color || '#8A2BE2',
    emoji: emoji || '',
    tags:  [...currentTags]
  };
  localStorage.setItem('ta_notes', JSON.stringify(notes));
  updateStatCounters();
  renderSidebarTags();

  document.getElementById('save-status').textContent = T('noteSavedOk');
  document.getElementById('save-status').style.color = 'var(--blue)';
  addFeedItem('purple', `Note <b>${title}</b> saved`);
  showToast(`💾  "${title}" saved locally`);
  setTimeout(() => {
    document.getElementById('save-status').textContent = T('noteStatusAutoSave');
    document.getElementById('save-status').style.color = '';
  }, 2500);
}

/* ─── Word Count ─────────────────────────────────────────────────── */
function updateWordCount() {
  const text  = document.getElementById('note-editor').value;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  document.getElementById('word-count').textContent = words;
  document.getElementById('char-count').textContent = text.length;
  document.getElementById('line-count').textContent = text.split('\n').length;
}

function fmt(cmd) {
  const ta    = document.getElementById('note-editor');
  const start = ta.selectionStart;
  const end   = ta.selectionEnd;
  const sel   = ta.value.slice(start, end);
  const wrap  = { bold:'**', italic:'*', underline:'__' };
  const m     = wrap[cmd];
  if (!m) return;

  const already = sel.startsWith(m) && sel.endsWith(m) && sel.length > m.length * 2;
  const replacement = already ? sel.slice(m.length, sel.length - m.length) : m + (sel || 'text') + m;
  ta.value = ta.value.slice(0, start) + replacement + ta.value.slice(end);
  const cursor = already ? start + replacement.length : start + m.length + (sel ? sel.length : 4);
  ta.selectionStart = sel ? start + m.length : start + m.length;
  ta.selectionEnd   = sel ? start + m.length + (already ? replacement.length : sel.length) : cursor;
  ta.focus();
  updateWordCount();
}

function insertMd(md) {
  const ta    = document.getElementById('note-editor');
  const start = ta.selectionStart;
  const end   = ta.selectionEnd;
  ta.value    = ta.value.slice(0, start) + md + ta.value.slice(end);
  ta.selectionStart = ta.selectionEnd = start + md.length;
  ta.focus();
  updateWordCount();
}

function insertTimestamp() {
  const ts = new Date().toLocaleString('ko-KR', { hour12: false });
  insertMd(`\n[${ts}] `);
}

/* ─── Tag System ─────────────────────────────────────────────────── */
function normalizeTag(raw) {
  let t = raw.trim().toLowerCase().replace(/[^#a-z0-9가-힣_-]/g, '');
  if (!t.startsWith('#')) t = '#' + t;
  return t.length > 1 ? t : '';
}

function addTag(raw) {
  if (currentTags.length >= 10) { showToast('⚠  태그는 최대 10개까지 추가할 수 있습니다'); return; }
  const tag = normalizeTag(raw);
  if (!tag || currentTags.includes(tag)) return;
  currentTags.push(tag);
  renderTagPills();
}

function removeTag(tag) {
  currentTags = currentTags.filter(t => t !== tag);
  renderTagPills();
}

function renderTagPills() {
  const container = document.getElementById('note-tag-pills');
  if (!container) return;
  container.innerHTML = '';
  currentTags.forEach(tag => {
    const pill = document.createElement('div');
    pill.className = 'note-tag-pill';
    pill.innerHTML = `<span>${tag}</span><button class="note-tag-remove" onclick="removeTag('${tag.replace(/'/g,"\\'")}')">×</button>`;
    container.appendChild(pill);
  });
}

/* ─── All Tags (notes + resources) ──────────────────────────────── */
function getAllTags() {
  const tags = new Set();
  Object.values(notes).forEach(n  => (n.tags || []).forEach(t => tags.add(t)));
  RESOURCES.forEach(r => (r.tags || []).forEach(t => tags.add(t)));
  return [...tags].sort();
}

/* ─── Sidebar Tag Filter ─────────────────────────────────────────── */
function renderSidebarTags() {
  const wrap  = document.getElementById('sidebar-tags-wrap');
  const label = document.getElementById('tags-nav-label');
  if (!wrap || !label) return;

  const allTags = getAllTags();
  if (allTags.length === 0) {
    wrap.style.display = 'none';
    label.style.display = 'none';
    return;
  }
  wrap.style.display = '';
  label.style.display = '';
  wrap.innerHTML = '';

  /* Clear 버튼 — activeTags 있을 때만 */
  if (activeTags.length > 0) {
    const clearBtn = document.createElement('div');
    clearBtn.className = 'sidebar-tag-pill sidebar-tag-clear';
    clearBtn.textContent = '✕ Clear';
    clearBtn.addEventListener('click', () => { activeTags = []; renderSidebarTags(); applyTagFilter(); });
    wrap.appendChild(clearBtn);
  }

  allTags.forEach(tag => {
    const pill = document.createElement('div');
    pill.className = 'sidebar-tag-pill' + (activeTags.includes(tag) ? ' active' : '');
    pill.textContent = tag;
    pill.addEventListener('click', () => toggleSidebarTag(tag));
    wrap.appendChild(pill);
  });
}

function toggleSidebarTag(tag) {
  const idx = activeTags.indexOf(tag);
  if (idx === -1) activeTags.push(tag);
  else activeTags.splice(idx, 1);
  renderSidebarTags();
  applyTagFilter();
}

function applyTagFilter() {
  renderResources(activeFilter, document.getElementById('search-input').value);
  const main = document.getElementById('main');
  if (main && main.dataset.view === 'archive') renderArchive();
}

/* ─── Archive Color Filter ───────────────────────────────────────── */
function setArchiveColorFilter(el, color) {
  archiveColorFilter = color;
  document.querySelectorAll('.arc-filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderArchive();
}

/* ─── Search Autocomplete ────────────────────────────────────────── */
function filterBySearch() {
  const q = document.getElementById('search-input').value;
  if (q.startsWith('#')) {
    renderTagAutocomplete(q.slice(1));
  } else {
    hideTagAutocomplete();
  }
  renderResources(activeFilter, q);
}

function renderTagAutocomplete(prefix) {
  const allTags = getAllTags();
  const lower   = prefix.toLowerCase();
  const matches = lower
    ? allTags.filter(t => t.slice(1).startsWith(lower))
    : allTags;

  const el = document.getElementById('tag-autocomplete');
  if (!el || matches.length === 0) { hideTagAutocomplete(); return; }

  el.innerHTML = '';
  matches.forEach(tag => {
    const item = document.createElement('div');
    item.className = 'tag-ac-item';
    item.textContent = tag;
    item.addEventListener('mousedown', () => {
      document.getElementById('search-input').value = tag;
      hideTagAutocomplete();
      renderResources(activeFilter, tag);
    });
    el.appendChild(item);
  });
  el.classList.add('open');
}

function hideTagAutocomplete() {
  const el = document.getElementById('tag-autocomplete');
  if (el) el.classList.remove('open');
}

/* ─── Filters ────────────────────────────────────────────────────── */
function setPill(el, filter) {
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  activeFilter = filter;
  renderResources(filter, document.getElementById('search-input').value);
}

function filterResources(type) {
  activeFilter = type;
  document.querySelectorAll('.pill').forEach(p => {
    p.classList.toggle('active', p.dataset.filter === type);
  });
  renderResources(type);
}

/* ─── Add Resource ───────────────────────────────────────────────── */
function addResource() {
  const name = prompt('Resource name:');
  if (!name) return;
  const url     = prompt('URL (optional):');
  const tagsRaw = prompt('Tags (optional, e.g. #dev #work):') || '';
  const tags    = tagsRaw.split(/[\s,]+/).map(t => t.trim()).filter(Boolean).map(normalizeTag).filter(t => t.length > 1);
  const isYT     = (url || '').includes('youtube') || (url || '').includes('youtu.be');
  const isShorts = isYT && (url || '').includes('/shorts/');
  const type     = isShorts ? 'shorts' : isYT ? 'youtube' : 'website';
  const iconMap  = { youtube:'▶', shorts:'⚡', website:'⊕' };
  const thumbMap = { youtube:'yt', shorts:'short', website:'web' };
  const newR = {
    id: Date.now(), type, name,
    meta: url ? new URL(url.startsWith('http') ? url : 'https://'+url).hostname : 'Local',
    url: url || null,
    icon: iconMap[type],
    thumb: thumbMap[type],
    tags
  };
  RESOURCES.push(newR);
  renderResources(activeFilter);
  renderSidebarTags();
  updateStatCounters();
  addFeedItem('blue', `Resource <b>${name}</b> added`);
  showToast(`＋ "${name}" added to list`);
}

/* ─── Delete Resource ────────────────────────────────────────────── */
function deleteResource(id) {
  const idx = RESOURCES.findIndex(r => r.id === id);
  if (idx === -1) return;
  const r = RESOURCES[idx];

  if (r.type === 'note') {
    delete notes['note_' + id];
    localStorage.setItem('ta_notes', JSON.stringify(notes));
    if (currentNoteKey === 'note_' + id) {
      currentNoteKey = null;
      currentTags = [];
      renderTagPills();
      document.getElementById('note-title').value = '';
      document.getElementById('note-editor').value = '';
      updateWordCount();
    }
  }

  if (activeResId === id) {
    activeResId = null;
    const iframe = document.getElementById('media-iframe');
    iframe.src = ''; iframe.style.display = 'none';
    document.getElementById('media-placeholder').style.display = '';
  }

  RESOURCES.splice(idx, 1);
  renderResources(activeFilter);
  renderSidebarTags();
  updateStatCounters();
  addFeedItem('dim', `Resource <b>${r.name}</b> deleted`);
  showToast(`🗑  "${r.name}" removed`);
}

/* ─── Feed ───────────────────────────────────────────────────────── */
function renderFeed(items) {
  const feed = document.getElementById('feed-list');
  feed.innerHTML = '';
  items.forEach(i => {
    const id  = 'fi_' + Date.now() + '_' + Math.random().toString(36).slice(2);
    const div = document.createElement('div');
    div.className = 'feed-item';
    div.id = id;
    div.innerHTML = `
      <div class="feed-dot ${i.dot}"></div>
      <div class="feed-text"><p>${i.text}</p><div class="feed-time">${i.time}</div></div>
      <button class="feed-del" onclick="deleteFeedItem('${id}')" title="Remove">✕</button>
    `;
    feed.appendChild(div);
  });
}

function addFeedItem(dot, text) {
  const feed = document.getElementById('feed-list');
  const id   = 'fi_' + Date.now();
  const div  = document.createElement('div');
  div.className = 'feed-item';
  div.id = id;
  div.style.cssText = 'opacity:0;transition:opacity .3s;';
  div.innerHTML = `
    <div class="feed-dot ${dot}"></div>
    <div class="feed-text"><p>${text}</p><div class="feed-time">Just now</div></div>
    <button class="feed-del" onclick="deleteFeedItem('${id}')" title="Remove">✕</button>
  `;
  feed.insertBefore(div, feed.firstChild);
  requestAnimationFrame(() => { div.style.opacity = 1; });
  if (feed.children.length > 20) feed.removeChild(feed.lastChild);
}

function deleteFeedItem(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.transition = 'opacity .2s, transform .2s';
  el.style.opacity    = '0';
  el.style.transform  = 'translateX(8px)';
  setTimeout(() => el.remove(), 210);
}

/* ─── Toast ──────────────────────────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ─── Settings ───────────────────────────────────────────────────── */
const SETTINGS_KEY = 'ta_settings';
const SETTINGS_DEFAULT = {
  theme: 'dark', transparency: 55, startupView: 'media',
  autoSave: 300, alwaysOnTop: false, lang: 'en'
};

let settings      = { ...SETTINGS_DEFAULT };
let autoSaveTimer = null;

function loadSettings() {
  const raw = localStorage.getItem(SETTINGS_KEY);
  if (raw) {
    try { settings = { ...SETTINGS_DEFAULT, ...JSON.parse(raw) }; } catch (_) {}
  }
  document.getElementById('tog-theme').checked            = settings.theme === 'light';
  document.getElementById('sl-transparency').value        = settings.transparency;
  document.getElementById('transparency-val').textContent = settings.transparency + '%';
  document.getElementById('sel-startup').value            = settings.startupView;
  document.getElementById('sel-autosave').value           = String(settings.autoSave);
  document.getElementById('tog-ontop').checked            = settings.alwaysOnTop;

  applyThemeClass(settings.theme);
  applyTransparencyVar(settings.transparency);
  scheduleAutoSave(settings.autoSave);
  switchView(settings.startupView);
  applyLanguage(settings.lang || 'en');
  updateStorageBar();
}

function saveSetting(key, value) {
  settings[key] = value;
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function openSettings() {
  const el = document.getElementById('settings-overlay');
  el.classList.add('visible');
  requestAnimationFrame(() => el.classList.add('open'));
}
function closeSettings() {
  const el = document.getElementById('settings-overlay');
  el.classList.remove('open');
  el.addEventListener('transitionend', () => el.classList.remove('visible'), { once: true });
}
function overlayClickClose(e) {
  if (e.target === document.getElementById('settings-overlay')) closeSettings();
}

function applyTheme(isLight) {
  const mode = isLight ? 'light' : 'dark';
  document.getElementById('theme-label').textContent = isLight ? T('settThemeLight') : T('settThemeDark');
  applyThemeClass(mode);
  saveSetting('theme', mode);
  addFeedItem(isLight ? 'blue' : 'purple', `Theme switched to <b>${isLight ? T('settThemeLight') : T('settThemeDark')}</b> mode`);
}
function applyThemeClass(mode) {
  document.body.classList.toggle('light', mode === 'light');
}

function applyTransparency(val) {
  document.getElementById('transparency-val').textContent = val + '%';
  applyTransparencyVar(val);
  saveSetting('transparency', Number(val));
}
function applyTransparencyVar(val) {
  const a = (val / 100).toFixed(2);
  document.documentElement.style.setProperty('--glass-bg', `rgba(13, 17, 26, ${a})`);
}

function applyAutoSave(val) {
  const secs = Number(val);
  saveSetting('autoSave', secs);
  scheduleAutoSave(secs);
  const label = secs === 0 ? 'disabled' : secs < 120 ? `${secs}s` : `${secs/60}min`;
  addFeedItem('blue', `Auto-save interval set to <b>${label}</b>`);
  showToast(`⏱  Auto-save: ${label}`);
}

function scheduleAutoSave(secs) {
  clearInterval(autoSaveTimer);
  if (secs > 0) {
    autoSaveTimer = setInterval(() => {
      const body = document.getElementById('note-editor').value;
      if (body.trim() && currentNoteKey) {
        const existing = notes[currentNoteKey] || {};
        doSaveNote(existing.color || '#8A2BE2', existing.emoji || '');
        document.getElementById('save-status').textContent = T('noteAutoSaved');
        document.getElementById('save-status').style.color = 'var(--purple)';
        setTimeout(() => {
          document.getElementById('save-status').textContent = T('noteStatusAutoSave');
          document.getElementById('save-status').style.color = '';
        }, 2000);
      }
    }, secs * 1000);
  }
}

function applyAlwaysOnTop(on) {
  document.getElementById('ontop-label').textContent = on ? T('settOnTopOn') : T('settOnTopOff');
  saveSetting('alwaysOnTop', on);
  addFeedItem(on ? 'purple' : 'dim', `Always on Top <b>${on ? 'enabled' : 'disabled'}</b>`);
  showToast(`⬡  Always on Top: ${on ? 'ON' : 'OFF'}`);
}

function clearFeed() {
  document.getElementById('feed-list').innerHTML =
    `<div style="text-align:center;padding:24px 0;color:var(--text-lo);font-size:11px;">${T('feedCleared')}</div>`;
  showToast('✦  Activity feed cleared');
}

function exportMarkdown() {
  const title = document.getElementById('note-title').value || 'Untitled';
  const body  = document.getElementById('note-editor').value;
  if (!body.trim()) { showToast('⚠  Nothing to export — note is empty'); return; }
  const md   = `# ${title}\n\n${body}\n\n---\n_Exported from Thought Archive · ${new Date().toLocaleString()}_\n`;
  const blob = new Blob([md], { type: 'text/markdown' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = `${title.replace(/[^a-z0-9가-힣]/gi, '_')}.md`;
  a.click();
  URL.revokeObjectURL(url);
  addFeedItem('purple', `Note <b>${title}</b> exported as Markdown`);
  showToast(`⬇  "${title}.md" downloaded`);
}

function resetSettings() {
  if (!confirm('Reset all settings to default? (Notes will not be deleted)')) return;
  settings = { ...SETTINGS_DEFAULT };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  loadSettings();
  addFeedItem('dim', 'All settings reset to default');
  showToast('↺  Settings reset to default');
}

/* ─── Stats ──────────────────────────────────────────────────────── */
function updateStatCounters() {
  const noteCount = Object.keys(notes).length;
  document.getElementById('stat-notes').textContent     = noteCount;
  document.getElementById('stat-resources').textContent = RESOURCES.length;
  const badge = document.getElementById('analytics-badge');
  if (badge) badge.textContent = noteCount;
  updateStorageBar();
  updateStatDeltas();
}

function updateStatDeltas() {
  const now     = Date.now();
  const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
  const dayAgo  = now - 24 * 60 * 60 * 1000;

  const thisWeek  = Object.values(notes).filter(n => n.saved && new Date(n.saved).getTime() > weekAgo).length;
  const noteDelta = document.querySelector('.stat-card:nth-child(1) .stat-delta');
  if (noteDelta) {
    if (thisWeek > 0) {
      noteDelta.textContent = `↑ ${thisWeek} this week`;
      noteDelta.className   = 'stat-delta up';
    } else {
      noteDelta.textContent = '— none this week';
      noteDelta.className   = 'stat-delta';
      noteDelta.style.color = 'var(--text-lo)';
    }
  }

  const nonNote   = RESOURCES.filter(r => r.type !== 'note').length;
  const resDelta  = document.querySelector('.stat-card:nth-child(2) .stat-delta');
  if (resDelta) {
    resDelta.textContent = nonNote > 0 ? `${nonNote} linked total` : '— add a resource';
    resDelta.className   = nonNote > 0 ? 'stat-delta up' : 'stat-delta';
    if (nonNote === 0) resDelta.style.color = 'var(--text-lo)';
  }
}

function updateStorageBar() {
  const QUOTA = 5 * 1024 * 1024; // 5 MB typical limit
  let used = 0;
  for (const key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) continue;
    used += (key.length + localStorage.getItem(key).length) * 2;
  }
  const pct = Math.min(100, Math.round((used / QUOTA) * 100));
  const pctEl  = document.getElementById('storage-pct');
  const fillEl = document.getElementById('storage-bar-fill');
  if (pctEl)  pctEl.textContent  = pct + '%';
  if (fillEl) fillEl.style.width = pct + '%';
}

/* ─── Focus Mode ─────────────────────────────────────────────────── */
let focusMode = false;
function toggleFocusMode() {
  focusMode = !focusMode;
  document.body.classList.toggle('focus', focusMode);
  const btn = document.getElementById('focus-btn');
  btn.classList.toggle('focus-active', focusMode);
  btn.textContent = focusMode ? T('focusExit') : T('focus');
  addFeedItem(focusMode ? 'purple' : 'dim', `Focus mode <b>${focusMode ? 'on' : 'off'}</b>`);
}

/* ─── Shortcut Help ──────────────────────────────────────────────── */
function showShortcutHelp() {
  const el = document.getElementById('shortcut-help');
  el.classList.add('visible');
  requestAnimationFrame(() => el.classList.add('open'));
}
function closeShortcutHelp() {
  const el = document.getElementById('shortcut-help');
  el.classList.remove('open');
  el.addEventListener('transitionend', () => el.classList.remove('visible'), { once: true });
}

/* ─── 키보드 단축키 ──────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  const overlay  = document.getElementById('settings-overlay');
  const helpOpen = document.getElementById('shortcut-help').classList.contains('open');
  const inInput  = ['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName);

  if (e.key === 'Escape') {
    const savePanel = document.getElementById('save-confirm-panel');
    if (savePanel && savePanel.classList.contains('open')) { cancelSave(); return; }
    if (overlay.classList.contains('open'))  { closeSettings();     return; }
    if (helpOpen)                             { closeShortcutHelp(); return; }
    if (focusMode)                            { toggleFocusMode();   return; }
    return;
  }

  if (e.key === '?' && !inInput) { showShortcutHelp(); return; }

  if (e.ctrlKey && !e.altKey) {
    switch (e.key) {
      case 's':
        e.preventDefault();
        saveNote();
        break;
      case 'm':
        e.preventDefault();
        switchView(currentView === 'media' ? 'note' : 'media');
        break;
      case 'k':
        e.preventDefault();
        switchView('media');
        setTimeout(() => { const ub = document.getElementById('url-bar'); ub.focus(); ub.select(); }, 50);
        break;
      case 'f':
        if (e.shiftKey) {
          e.preventDefault();
          document.getElementById('search-input').focus();
        } else {
          e.preventDefault();
          toggleFocusMode();
        }
        break;
      case ',':
        e.preventDefault();
        openSettings();
        break;
    }
  }
});

/* ─── Viewport Scale ─────────────────────────────────────────────── */
function applyScale() {
  const scaleX = window.innerWidth  / 1600;
  const scaleY = window.innerHeight / 900;
  const scale  = Math.min(scaleX, scaleY);
  document.documentElement.style.zoom = String(scale);
}
applyScale();
window.addEventListener('resize', applyScale);

/* ─── Session Timer ──────────────────────────────────────────────── */
let sessionSecs = 0;
setInterval(() => {
  sessionSecs++;
  const h = Math.floor(sessionSecs / 3600);
  const m = Math.floor((sessionSecs % 3600) / 60);
  document.getElementById('stat-time').textContent = h > 0 ? `${h}h ${m}m` : `${m}m`;
}, 1000);

/* ═══════════════════════════════════════════════════════════════
   BACKLINK SYSTEM
═══════════════════════════════════════════════════════════════ */

/* ─── 헬퍼 ────────────────────────────────────────────────────── */
function getNoteTitles() {
  return [...new Set(Object.values(notes).map(n => n.title).filter(Boolean))];
}

function parseBacklinks(body) {
  const re = /\[\[([^\]]+)\]\]/g;
  const result = [];
  let m;
  while ((m = re.exec(body)) !== null) result.push(m[1]);
  return [...new Set(result)];
}

function renderBodyWithLinks(body) {
  return body
    .replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\[\[([^\]]+)\]\]/g, (_, title) => {
      const exists = Object.values(notes).some(n => n.title === title);
      const cls = exists ? 'bl-link' : 'bl-link broken';
      return `<span class="${cls}" data-title="${title.replace(/"/g, '&quot;')}">${title}</span>`;
    });
}

function buildBacklinkIndex() {
  const idx = {};
  Object.entries(notes).forEach(([key, note]) => {
    parseBacklinks(note.body || '').forEach(title => {
      if (!idx[title]) idx[title] = [];
      idx[title].push(key);
    });
  });
  return idx;
}

function getBacklinksTo(title) {
  const idx = buildBacklinkIndex();
  return (idx[title] || []).map(key => ({ key, note: notes[key] })).filter(x => x.note);
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ═══════════════════════════════════════════════════════════════
   Feature 1: [[ 자동완성
═══════════════════════════════════════════════════════════════ */
let _blSelected = -1;

function initBacklinkAutocomplete() {
  const editor = document.getElementById('note-editor');
  if (!editor) return;
  editor.addEventListener('input',  _onBlInput);
  editor.addEventListener('keydown', _onBlKeydown);
  editor.addEventListener('blur',   () => { setTimeout(hideBacklinkDropdown, 150); updateNoteOutlinks(); });
}

function _getBlQuery(editor) {
  const before = editor.value.slice(0, editor.selectionStart);
  const openIdx = before.lastIndexOf('[[');
  if (openIdx === -1) return null;
  const between = before.slice(openIdx + 2);
  if (between.includes(']]')) return null;
  return between;
}

function _onBlInput() {
  const query = _getBlQuery(this);
  updateNoteOutlinks();
  if (query === null) { hideBacklinkDropdown(); return; }
  const titles = getNoteTitles().filter(t =>
    query === '' || t.toLowerCase().includes(query.toLowerCase())
  );
  if (titles.length === 0) { hideBacklinkDropdown(); return; }
  _showBlDropdown(titles, query, this);
}

function _onBlKeydown(e) {
  const dd = document.getElementById('backlink-dropdown');
  if (!dd || !dd.classList.contains('open')) return;
  const items = dd.querySelectorAll('.bl-item');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    _blSelected = Math.min(_blSelected + 1, items.length - 1);
    _updateBlSelection(items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    _blSelected = Math.max(_blSelected - 1, 0);
    _updateBlSelection(items);
  } else if (e.key === 'Enter' && _blSelected >= 0 && items[_blSelected]) {
    e.preventDefault();
    insertBacklink(items[_blSelected].dataset.title);
  } else if (e.key === 'Escape') {
    hideBacklinkDropdown();
  }
}

function _updateBlSelection(items) {
  items.forEach((it, i) => it.classList.toggle('selected', i === _blSelected));
  if (items[_blSelected]) items[_blSelected].scrollIntoView({ block: 'nearest' });
}

function _showBlDropdown(titles, query, editor) {
  const dd = document.getElementById('backlink-dropdown');
  if (!dd) return;
  _blSelected = -1;
  dd.innerHTML = '';

  titles.slice(0, 8).forEach(title => {
    const item = document.createElement('div');
    item.className = 'bl-item';
    item.dataset.title = title;
    const hl = query
      ? title.replace(new RegExp(`(${escapeRe(query)})`, 'gi'), '<b>$1</b>')
      : title;
    item.innerHTML = `<span class="bl-item-icon">✎</span><span>${hl}</span>`;
    item.addEventListener('mousedown', e => { e.preventDefault(); insertBacklink(title); });
    dd.appendChild(item);
  });

  /* 위치 계산: getBoundingClientRect는 app scale 반영값을 반환 → fixed 좌표 그대로 사용 */
  const r = editor.getBoundingClientRect();
  dd.style.left  = r.left + 'px';
  dd.style.top   = (r.bottom + 4) + 'px';
  dd.style.width = r.width + 'px';
  dd.classList.add('open');
}

function hideBacklinkDropdown() {
  const dd = document.getElementById('backlink-dropdown');
  if (dd) dd.classList.remove('open');
  _blSelected = -1;
}

function insertBacklink(title) {
  const editor = document.getElementById('note-editor');
  if (!editor) return;
  const val     = editor.value;
  const pos     = editor.selectionStart;
  const before  = val.slice(0, pos);
  const openIdx = before.lastIndexOf('[[');
  const inserted = `[[${title}]]`;
  editor.value = val.slice(0, openIdx) + inserted + val.slice(pos);
  const newPos = openIdx + inserted.length;
  editor.selectionStart = editor.selectionEnd = newPos;
  editor.focus();
  hideBacklinkDropdown();
  updateWordCount();
  updateNoteOutlinks();
}

/* ═══════════════════════════════════════════════════════════════
   Feature 2: Outgoing Links Preview (Note View 하단 row)
═══════════════════════════════════════════════════════════════ */
function updateNoteOutlinks() {
  const editor  = document.getElementById('note-editor');
  const row     = document.getElementById('note-outlinks-row');
  const pillsEl = document.getElementById('note-outlinks-pills');
  if (!editor || !row || !pillsEl) return;

  const links = parseBacklinks(editor.value);
  if (links.length === 0) { row.style.display = 'none'; return; }

  row.style.display = 'flex';
  pillsEl.innerHTML = '';
  links.forEach(title => {
    const exists = Object.values(notes).some(n => n.title === title);
    const pill   = document.createElement('span');
    pill.className = 'note-outlink-pill' + (exists ? '' : ' broken');
    pill.textContent = title;
    pill.title = exists ? 'Click to open' : 'Note not found';
    if (exists) pill.addEventListener('click', () => openNoteByTitle(title));
    pillsEl.appendChild(pill);
  });
}

function openNoteByTitle(title) {
  const entry = Object.entries(notes).find(([, n]) => n.title === title);
  if (!entry) { showToast(`⚠  "${title}" 노트를 찾을 수 없습니다`); return; }
  const [key, note] = entry;
  currentNoteKey = key;
  document.getElementById('note-title').value  = note.title || '';
  document.getElementById('note-editor').value = note.body  || '';
  currentTags = (note.tags || []).slice();
  renderTagPills();
  updateWordCount();
  updateNoteOutlinks();
  updateBacklinkPanel();
  addFeedItem('blue', `Opened <b>${note.title || 'Untitled'}</b> via backlink`);
  showToast(`→ "${title}" opened`);
}

/* ═══════════════════════════════════════════════════════════════
   Feature 3: Archive 카드 Backlink Count
   (renderArchive를 패치하여 카드 DOM에 count + 링크 렌더링 추가)
═══════════════════════════════════════════════════════════════ */
(function _patchRenderArchive() {
  const orig = window.renderArchive;
  window.renderArchive = function () {
    orig.apply(this, arguments);
    _enhanceArchiveCards();
  };
})();

function _enhanceArchiveCards() {
  const grid = document.getElementById('archive-grid');
  if (!grid) return;

  grid.querySelectorAll('.archive-card').forEach(card => {
    const titleEl = card.querySelector('.archive-card-title');
    if (!titleEl) return;
    const title = titleEl.textContent.trim();

    /* ① body preview에 [[링크]] 인라인 렌더링 */
    const previewEl = card.querySelector('.archive-card-preview');
    if (previewEl) {
      const entry = Object.entries(notes).find(([, n]) => n.title === title);
      if (entry) {
        const body = entry[1].body || '';
        previewEl.innerHTML = renderBodyWithLinks(body) || '<em style="opacity:.4">Empty note</em>';
      }
    }

    /* ② bl-link 클릭 — capture phase로 card click보다 먼저 처리 */
    card.addEventListener('click', e => {
      if (e.target.classList.contains('bl-link') && !e.target.classList.contains('broken')) {
        e.stopPropagation();
        const homeNav = document.querySelector('[data-page="home"]');
        if (homeNav) setNav(homeNav);
        openNoteByTitle(e.target.dataset.title);
      }
    }, true);

    /* ③ backlink count badge */
    const bodyEl = card.querySelector('.archive-card-body');
    if (!bodyEl) return;
    const existing = bodyEl.querySelector('.archive-backlink-count');
    if (existing) existing.remove();

    const incoming = Object.entries(notes).filter(([, n]) =>
      parseBacklinks(n.body || '').includes(title)
    );
    const count = incoming.length;

    const badge = document.createElement('div');
    badge.className = 'archive-backlink-count' + (count > 0 ? ' has-links' : '');
    badge.textContent = `← ${count} link${count !== 1 ? 's' : ''}`;
    if (count > 0) {
      badge.title = incoming.map(([, n]) => n.title).join(', ');
      badge.addEventListener('click', e => {
        e.stopPropagation();
        _showBacklinkSourceToast(title, incoming);
      });
    }
    const dateEl = bodyEl.querySelector('.archive-card-date');
    if (dateEl) dateEl.insertAdjacentElement('beforebegin', badge);
  });
}

function _showBacklinkSourceToast(title, incoming) {
  const names = incoming.map(([, n]) => `"${n.title}"`).join(', ');
  showToast(`← ${incoming.length}개 노트가 참조: ${names.slice(0, 60)}`);
  updateBacklinkPanel(title, incoming.map(([key, note]) => ({ key, note })));
}

/* ═══════════════════════════════════════════════════════════════
   Feature 4: Right Panel Backlink Panel
═══════════════════════════════════════════════════════════════ */
let _backlinksOpen = false;

function toggleBacklinksPanel() {
  _backlinksOpen = !_backlinksOpen;
  const list = document.getElementById('backlinks-list');
  const icon = document.getElementById('backlinks-toggle-icon');
  if (list) list.style.display = _backlinksOpen ? 'flex' : 'none';
  if (icon) icon.classList.toggle('open', _backlinksOpen);
}

function updateBacklinkPanel(forTitle, forLinks) {
  const section    = document.getElementById('backlinks-section');
  const list       = document.getElementById('backlinks-list');
  const countBadge = document.getElementById('backlinks-count-badge');
  if (!section || !list || !countBadge) return;

  const title = forTitle
    || (currentNoteKey && notes[currentNoteKey] ? notes[currentNoteKey].title : null)
    || document.getElementById('note-title')?.value?.trim();

  if (!title) { section.style.display = 'none'; return; }

  const backlinks = forLinks || getBacklinksTo(title);
  section.style.display = '';
  countBadge.textContent = backlinks.length;
  countBadge.style.display = backlinks.length > 0 ? '' : 'none';

  list.innerHTML = '';
  if (backlinks.length === 0) {
    list.innerHTML = `<div class="backlinks-empty">← 이 노트를 참조하는 메모 없음</div>`;
  } else {
    backlinks.forEach(({ key, note }) => {
      const item = document.createElement('div');
      item.className = 'backlink-item';
      item.innerHTML = `
        <span class="backlink-item-icon">${note.emoji || '✎'}</span>
        <span>${note.title || 'Untitled'}</span>
      `;
      item.addEventListener('click', () => {
        const homeNav = document.querySelector('[data-page="home"]');
        if (homeNav) setNav(homeNav);
        currentNoteKey = key;
        document.getElementById('note-title').value  = note.title || '';
        document.getElementById('note-editor').value = note.body  || '';
        currentTags = (note.tags || []).slice();
        renderTagPills();
        updateWordCount();
        updateNoteOutlinks();
        updateBacklinkPanel();
        switchView('note');
        addFeedItem('blue', `Opened <b>${note.title || 'Untitled'}</b> via backlink panel`);
      });
      list.appendChild(item);
    });
  }

  /* 패널이 열려있으면 list도 보임 */
  list.style.display = _backlinksOpen ? 'flex' : 'none';
}

/* ─── DOMContentLoaded: backlink init ───────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initBacklinkAutocomplete();
});

/* ─── switchView / doSaveNote 후 backlink panel 갱신 ────────── */
(function _patchSwitchAndSave() {
  const origSwitch = window.switchView;
  window.switchView = function (mode) {
    origSwitch.apply(this, arguments);
    if (mode === 'note') {
      updateNoteOutlinks();
      /* 약간 지연해서 currentNoteKey 반영 후 패널 갱신 */
      setTimeout(updateBacklinkPanel, 0);
    }
  };

  const origSave = window.doSaveNote;
  window.doSaveNote = function () {
    origSave.apply(this, arguments);
    updateNoteOutlinks();
    updateBacklinkPanel();
  };
})();

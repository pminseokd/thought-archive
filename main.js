const { app, BrowserWindow, session } = require('electron');
const path = require('path');
const fs   = require('fs');
const os   = require('os');

/* Chrome Widevine CDM 경로 (arm64 / x64 자동 선택) */
const WV_BASE = '/Applications/Google Chrome.app/Contents/Frameworks/Google Chrome Framework.framework/Versions/Current/Libraries/WidevineCdm';
const WV_ARCH = process.arch === 'arm64' ? 'mac_arm64' : 'mac_x64';
const WV_LIB  = path.join(WV_BASE, '_platform_specific', WV_ARCH, 'libwidevinecdm.dylib');

function widevineVersion() {
  try { return JSON.parse(fs.readFileSync(path.join(WV_BASE, 'manifest.json'), 'utf8')).version; }
  catch { return '4.10.3050.0'; }
}

if (fs.existsSync(WV_LIB)) {
  /* Chromium 106+ 에서는 CDM 베이스 디렉토리(manifest.json 위치)를 경로로 사용 */
  app.commandLine.appendSwitch('widevine-cdm-path', WV_BASE);
  app.commandLine.appendSwitch('widevine-cdm-version', widevineVersion());
  app.commandLine.appendSwitch('enable-widevine-cdm');
}

const CHROME_UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1600,
    height: 900,
    minWidth: 1200,
    minHeight: 700,
    title: 'Thought Archive',
    webPreferences: {
      webviewTag: true,
      contextIsolation: false,
      nodeIntegration: false,
    }
  });

  // 세션 전체 UA를 Chrome으로 설정 (YouTube Electron 감지 우회)
  session.defaultSession.setUserAgent(CHROME_UA);

  // webview 전용 named partition에도 동일 UA 적용
  session.fromPartition('persist:media').setUserAgent(CHROME_UA);

  win.loadFile('index.html');
  win.on('closed', () => { win = null; });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (!win) createWindow();
});

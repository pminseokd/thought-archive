const { app, BrowserWindow } = require('electron');
const path = require('path');

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

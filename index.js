const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require("electron-updater");

const path = require('path');
const { updateElectronApp } = require('update-electron-app');

updateElectronApp();

app.on('ready', () => {
  autoUpdater.checkForUpdatesAndNotify();
});

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Fonction pour charger une nouvelle page HTML dans la même fenêtre
function loadPage2() {
  mainWindow.loadFile('form.html');
}

module.exports = { loadPage2 };

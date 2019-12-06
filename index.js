const { app, BrowserWindow, Menu } = require('electron'),
      url = require('url'),
      path = require('path');

let mainWindow;

// On Ready
app.on('ready', () => {
    // New Window
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load Window Page
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'windows', 'main.html'),
        protocol: 'file',
        slashes: true
    }));

    // Build Menu
    const menu = Menu.buildFromTemplate(mainMenu);
    Menu.setApplicationMenu(menu);
});

// Menu Template
const mainMenu = [
    {
        label: "File",
        submenu: [
            {
                label: "Quit",
                accelerator: process.platform == 'darwin' ? "Command+Q" : "Ctrl+Q",
                click() {
                    app.quit();
                }
            }
        ]
    }
]
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
        },
        width: 600,
        height: 800
    });

    // Load Window Page
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'main', 'main.html'),
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
];

// MacOS bug fix
if(process.platform == 'darwin') mainMenu.unshift({});

// DevTools
if(process.env.NODE_ENV !== 'production') 
    mainMenu.push({
        label: "Developer Tools",
        submenu: [
            {
                label: "Toggle DevTools",
                accelerator: "F12",
                click(i, w) {
                    w.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
const { app, BrowserWindow, Menu } = require('electron');




function createWindows() {
    let win = new BrowserWindow({
        width: 1024,
        height: 768,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('app/index/index.html');

    var menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                {label:'Exit', 
                click() { 
                    app.quit() }
                }
            ]
        }
    ])
    Menu.setApplicationMenu(menu); 
  
  

}

app.whenReady().then(createWindows);
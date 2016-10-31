const {app, BrowserWindow} = require('electron')

let mainWindow

let renderWindow = () => {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

app.on('ready', renderWindow)

app.on('windows-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if(mainWindow === null) {
    renderWindow()
  }
})

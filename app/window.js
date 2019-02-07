const join = require('path').join
const BrowserWindow = require('electron').BrowserWindow
const config = require('./config')
const fs = require('fs')


module.exports = function createMainWindow (handleResize, handleClosed) {
  const lastWindowState = config.get('lastWindowState')

  const window = new BrowserWindow({
    minWidth: 615,
    x: lastWindowState.x,
    y: lastWindowState.y,
    width: lastWindowState.width,
    height: lastWindowState.height,
    icon: join(__dirname, '../build/icon.png'),
    title: 'Keep Dark',
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: `${__dirname}/browser.js`,
      partition: "persist:main"
    }
  })

  window.loadURL('https://keep.google.com')
  window.webContents.on('did-finish-load', function() {
      console.log(__dirname)
      fs.readFile(__dirname+ '/../dark.css', "utf-8", function(error, data) {
        if(!error){
        var formatedData = data.replace(/\s{2,10}/g, ' ').trim()
        window.webContents.insertCSS(formatedData)
      }
      })
    })
  window.setFullScreen(true);
  window.on('resize', handleResize)
  window.on('closed', handleClosed)
  // const session = window.webContents.session.cookies.get({}, (error, cookies) => {
  //   console.log("cookies", cookies);
    // var cookies = session.defaultSession.cookies;
    // cookies.on('changed', function(event, cookie, cause, removed) {
    //   if (cookie.session && !removed) {
    //     var url = util.format('%s://%s%s', (!cookie.httpOnly && cookie.secure) ? 'https' : 'http', cookie.domain, cookie.path);
    //     console.log('url', url);
    //     cookies.set({
    //       url: url,
    //       name: cookie.name,
    //       value: cookie.value,
    //       domain: cookie.domain,
    //       path: cookie.path,
    //       secure: cookie.secure,
    //       httpOnly: cookie.httpOnly,
    //       expirationDate: Math.floor(new Date().getTime()/1000)+1209600
    //     }, function(err) {
    //       if (err) {
    //         log.error('Error trying to persist cookie', err, cookie);
    //       }
    //     });
    //   }
    // });
  // });;
    
  return window
}

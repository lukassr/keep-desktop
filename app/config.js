'use strict'
const Config = require('electron-config')

module.exports = new Config({
  defaults: {
    lastWindowState: {
      height: 768,
      width: 1024
    }
  }
})

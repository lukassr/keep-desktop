# Keep Dark: Google Keep Destkop App with Dark Mode
[Google Keep](https://keep.google.com "Google Keep") Desktop application for Windows, Mac and Linux with Dark Theme. Packaged with [Electron](https://electronjs.org/ "Electron").

***Last Update 15/04***

![Keep Dark](https://github.com/lukassr/keep-dark-desktop/blob/master/media/screenshot.png)

***Observation:** The app is not finished yet. There are some assets with wrong colors, missing functionalities and improvements. I will accept PRs if you find an error and want to fix it* 

## Pre-release Downloads (v0.2.1)
[Download for macOS](https://github.com/lukassr/keep-dark-desktop/releases/download/v0.2.1/Keep.Dark-0.2.1.dmg)

[Download for Windows](https://github.com/lukassr/keep-dark-desktop/releases/download/v0.2.1/Keep.Dark.Setup.0.2.1.exe)

[Download for Linux](https://github.com/lukassr/keep-dark-desktop/releases/download/v0.2.1/keepdark_0.2.1_amd64.deb)
## References
Special thanks to two developers who made almost all the effort. Honestly, I did a very little code here, except for some corrections of colors in the CSS.
- [Keep Desktop]( https://github.com/andrepolischuk/keep) by [andrepolischuck](https://github.com/andrepolischuk/)
- [CSS Style](https://userstyles.org/styles/161659/google-keep-darker-matters) by deiden26.

## Requirements
- npm

## Instructions
### Running the code for contributions:
```
npm install
npm start
```
### or if you want to build the app:
```
npm run dist:<OS>
```
Where `<OS>` can be `mac`, `win` or `linux`.


## Update log

### 15/04
- Fix search bar color
- Fix min width for better experience in shared fullscreen mode

### 20/03
- Update CSS after Google change some names of the Keep Frontend
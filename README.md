# Keep Desktop: Google Keep Destkop App
[Google Keep](https://keep.google.com "Google Keep") Desktop application for Windows, Mac and Linux. Packaged with [Electron](https://electronjs.org/ "Electron").

***Last Update 18/10/2019***

![Keep Desktop](https://github.com/lukassr/keep-desktop/blob/master/media/screenshot.png)



## Release Downloads (v0.3.0)
[Download for macOS](https://github.com/lukassr/keep-desktop/releases/download/v0.3.0/Keep.Desktop-0.3.0.dmg)

[Download for Windows](https://github.com/lukassr/keep-desktop/releases/download/v0.3.0/Keep.Desktop.Setup.0.3.0.exe)

[Download for Linux](https://github.com/lukassr/keep-desktop/releases/download/v0.3.0/keepdesktop_0.3.0_amd64.deb)
## References

- [Keep Desktop]( https://github.com/andrepolischuk/keep) by [andrepolischuck](https://github.com/andrepolischuk/)

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

### 18/10
- Ignore dark.css, as Google implemented native dark mode 
- Change name from Keep Dark to Keep Desktop

### 15/04
- Fix search bar color
- Fix min width for better experience in shared fullscreen mode

### 20/03
- Update CSS after Google change some names of the Keep Frontend

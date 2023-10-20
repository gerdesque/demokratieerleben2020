<p align="center">
  <a href="https://gerdesque.github.io/demokratieerleben2020/">
    <img alt="Logo of 'Demokratie erLeben'" src="apps/demol/src/logo192.png">
  </a>
</p>

---

[![Screenshot of _Demokratie erLeben_](demokratieerleben.png)](https://gerdesque.github.io/demokratieerleben2020/)

## About [_Demokratie erLeben_](https://gerdesque.github.io/demokratieerleben2020/)

The scrollytelling project **"Demokratie erLeben" (Living Democracy)** was developed as a prototype within the cultural hackathon 'Coding da Vinci Westfalen-Ruhrgebiet' between October and December 2019.  

The narrative as well as the stop-motion videos were created based on (and under usage of) photos, sources and materials from the Archive of the Workers' Youth Movement.  

In 2020, as part of a 3-months-grant from Coding da Vinci, the project was completely renewed, expanded, and optimized for the purposes of the archive.

_The photographs and image cards have been digitized by the Archive of the Workers' Youth Movement and were provided under a CC BY-SA 3.0 DE license. 
Also used were sounds from the Sounds of Changes project collection (CC BY 4.0 license), the Radio Play Box, and the BBC Sound Effects Archive. 
Images from Wikimedia Commons have been used as well._

_The source code runs under an MIT license.  
The story and the media files created especially for the project are released under a CC BY-SA 3.0 license._

[Project page on the website of Coding da Vinci Westfalen-Ruhrgebiet](https://codingdavinci.de/de/projekte/demokratie-erleben)

## Feedback

Feel free to send us feedback on [Twitter](https://twitter.com/digiwako) or [file an issue](https://github.com/gerdesque/demokratieerleben2020/issues/new). Feature requests are always welcome.

## Build Process

- Clone or download the repo
- `yarn` to install dependencies
- `yarn start` to run a dev server for the app. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
- `yarn build` to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.
- `yarn test` to execute the unit tests via Jest.
- `yarn affected:test` to execute the unit tests affected by a change.
- `yarn e2e` to execute the end-to-end tests via Cypress.
- `yarn affected:e2e` to execute the end-to-end tests affected by a change.
- `yarn dep-graph` to see a diagram of the dependencies of your projects.

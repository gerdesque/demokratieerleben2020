(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../../libs/ui/src/lib/ui.scss":
/*!************************************************************************************!*\
  !*** /Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/ui.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../../node_modules/postcss-loader/src??embedded!../../../../node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!./ui.scss */ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!../../../libs/ui/src/lib/ui.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!../../../libs/ui/src/lib/ui.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/gerdmueller/Development/demokratieerleben2020/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/Users/gerdmueller/Development/demokratieerleben2020/node_modules/postcss-loader/src??embedded!/Users/gerdmueller/Development/demokratieerleben2020/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!/Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/ui.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".memory {\n  display: flex;\n  flex-wrap: wrap;\n}\n.memory .description {\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n}\n.memory .cards {\n  width: 600px;\n  margin: 0 auto;\n}\n.memory .card {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  cursor: pointer;\n}\n.memory .card::after {\n  content: \"\";\n  background: linear-gradient(to right, #3f0041, #9f3f2f);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: rotateY(0) perspective(100px);\n  transition: 0.4s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.memory img {\n  width: 148px;\n  height: 148px;\n  position: absolute;\n  overflow: hidden;\n  -o-object-position: center;\n     object-position: center;\n  transform: rotateY(180deg) perspective(100px);\n  transition: 0.4s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.memory .grid-card-show::after {\n  transform: rotateY(180deg) perspective(100px);\n}\n.memory .grid-card-show .grid-img {\n  transform: rotateY(0) perspective(100px);\n}\n.memory .grid-card-finished {\n  opacity: 0.5;\n}\n.daily {\n  display: flex;\n  flex-direction: column;\n}\n.daily .description {\n  flex: 1 100%;\n  text-align: center;\n  margin: 10px 0;\n}\n.daily .items {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n}\n.daily .items .ddcontainer:hover {\n  transition: background-color 0.5s ease;\n  font-weight: bold;\n}\n.daily .items:focus {\n  outline: none;\n}\n.daily .items .item p {\n  letter-spacing: 0.1em;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.daily .component_box {\n  background-size: contain;\n  height: 30vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.daily img {\n  height: auto;\n  text-align: center;\n  width: 60%;\n  margin: 0 auto 0;\n  justify-content: center;\n  display: flex;\n  max-height: 66vh;\n}\n.daily .show {\n  margin-bottom: 5%;\n}\n@media (min-width: 600px) {\n  .daily .component_box {\n    height: 45vh;\n  }\n}\n.game {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n}\n.game .status {\n  flex: 1 100%;\n  text-align: center;\n  margin: 10px 0;\n}\n.game .board {\n  display: flex;\n  flex-wrap: wrap;\n  width: 300px;\n  height: 300px;\n}\n.game .board .square {\n  width: 100px;\n  height: 100px;\n  border: 3px solid #555;\n  font-size: 32px;\n  text-align: center;\n  line-height: 100px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n.game .board .square:focus {\n  outline: unset;\n}\n.game .board .square:hover {\n  background-color: rgba(240, 230, 220, 0.3);\n}\n.game .board .square:nth-child(-n+3) {\n  border-top: unset;\n}\n.game .board .square:nth-last-child(-n+3) {\n  border-bottom: unset;\n}\n.game .board .square:nth-child(3n) {\n  border-right: unset;\n}\n.game .board .square:nth-child(3n+1) {\n  border-left: unset;\n}\n.game .result {\n  flex: 1 100%;\n}\n.suitcase {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.suitcase .description {\n  width: 75vw;\n  margin: 10% auto 0;\n  text-align: center;\n}\n.suitcase .items {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n}\n.suitcase .items .ddcontainer {\n  opacity: 0.5;\n}\n.suitcase .items .ddcontainer:hover {\n  transition: background-color 0.5s ease;\n  opacity: 1;\n}\n.suitcase .items:focus {\n  outline: none;\n}\n.suitcase .bag {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.suitcase .items > * {\n  width: 25%;\n  margin: auto;\n}\n.suitcase .items img {\n  width: 100%;\n  border-radius: 50%;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.suitcase .ddcontainerghost img {\n  width: 25vw;\n}\n.suitcase .dragText {\n  text-align: center;\n}\n@media (min-width: 600px) {\n  .suitcase .items > * {\n    width: 10%;\n  }\n\n  .suitcase .ddcontainerghost img {\n    width: 10vw;\n  }\n}\n.infoLink {\n  position: absolute;\n  top: 37%;\n  left: 15%;\n  cursor: pointer;\n  width: 1em;\n  height: 1em;\n  opacity: 1;\n  transition: opacity 0.6s ease, margin-top 0.6s ease;\n}\n.infoLink .infoText {\n  position: absolute;\n  top: -20%;\n  right: auto;\n  margin: 50px;\n  opacity: 0;\n  overflow: hidden;\n  z-index: 11;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  font-size: 1.1rem;\n}\n.infoLink:hover .infoText {\n  padding: 8px;\n  opacity: 1;\n  transition: opacity 0.5s ease;\n}\na {\n  color: #fff;\n  text-decoration: none;\n}\n.link-button {\n  background-color: transparent;\n  text-decoration: none;\n  color: var(--color-link);\n  border: none;\n  cursor: pointer;\n  display: inline;\n}\n.link-button:hover, .link-button:focus {\n  color: var(--color-link-highlighted);\n}\n.link-button .redirect {\n  width: 75vw;\n  margin: auto;\n}\n.icon-scroll,\n.icon-scroll:before {\n  position: absolute;\n  left: 50%;\n}\n.icon-scroll {\n  width: 48px;\n  height: 84px;\n  margin-left: -20px;\n  top: 85%;\n  margin-top: -35px;\n  border: 4px solid var(--color-title);\n  border-radius: 25px;\n}\n.icon-scroll:before {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  background: var(--color-title);\n  margin-left: -4px;\n  top: 8px;\n  border-radius: 4px;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: scroll;\n          animation-name: scroll;\n}\n@-webkit-keyframes scroll {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(46px);\n  }\n}\n@keyframes scroll {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(46px);\n  }\n}\n.puzzle {\n  display: flex;\n}\n.puzzle__solved-board {\n  position: relative;\n  background-size: cover;\n}\n.puzzle__solved-board:before {\n  content: \"\";\n  background-color: rgba(255, 255, 255, 0.6);\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.puzzle__solved-board,\n.puzzle__shuffled-board {\n  margin: 20px auto;\n  width: 400px;\n  list-style-type: none;\n  padding: 0;\n  font-size: 0;\n  border: 1px solid #DDD;\n  border-width: 1px 0 0 1px;\n}\n.puzzle li {\n  width: 99px;\n  height: 99px;\n  position: relative;\n  text-align: left;\n  display: inline-block;\n  border: 1px solid #DDD;\n  border-width: 0 1px 1px 0;\n}\n.puzzle li:empty:hover:before {\n  opacity: 1;\n}\n.puzzle li img {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  cursor: -webkit-grab;\n  cursor: grab;\n  transition: transform 200ms ease, box-shadow 200ms ease;\n}\n.puzzle li img:hover {\n  z-index: 2;\n  transform: scale(1.1);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);\n}\n.smokingPit {\n  width: 100%;\n  position: relative;\n}\n.smokingPit img {\n  width: 100%;\n}\n.smoke {\n  position: absolute;\n  margin-left: -17.5px;\n  margin-top: 17.5px;\n  bottom: 88%;\n  left: 89.5%;\n}\n.smoke span {\n  display: block;\n  position: absolute;\n  bottom: -35px;\n  margin-left: -20px;\n  height: 0px;\n  width: 0px;\n  border: 35px solid #4b4b4b;\n  border-radius: 35px;\n  left: -14px;\n  opacity: 0;\n  transform: scale(0.2);\n}\n@-webkit-keyframes smoke {\n  0% {\n    transform: scale(0.2) translate(0, 0);\n  }\n  1% {\n    opacity: 1;\n    transform: scale(0.2) translate(-20px, -20px);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1) translate(-200px, -50px);\n  }\n}\n@keyframes smoke {\n  0% {\n    transform: scale(0.2) translate(0, 0);\n  }\n  1% {\n    opacity: 1;\n    transform: scale(0.2) translate(-20px, -20px);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1) translate(-200px, -50px);\n  }\n}\n.smoke .s0 {\n  -webkit-animation: smoke 10s 0s infinite;\n          animation: smoke 10s 0s infinite;\n}\n.smoke .s1 {\n  -webkit-animation: smoke 10s 1s infinite;\n          animation: smoke 10s 1s infinite;\n}\n.smoke .s2 {\n  -webkit-animation: smoke 10s 2s infinite;\n          animation: smoke 10s 2s infinite;\n}\n.smoke .s3 {\n  -webkit-animation: smoke 10s 3s infinite;\n          animation: smoke 10s 3s infinite;\n}\n.smoke .s4 {\n  -webkit-animation: smoke 10s 4s infinite;\n          animation: smoke 10s 4s infinite;\n}\n.smoke .s5 {\n  -webkit-animation: smoke 10s 5s infinite;\n          animation: smoke 10s 5s infinite;\n}\n.smoke .s6 {\n  -webkit-animation: smoke 10s 6s infinite;\n          animation: smoke 10s 6s infinite;\n}\n.smoke .s7 {\n  -webkit-animation: smoke 10s 7s infinite;\n          animation: smoke 10s 7s infinite;\n}\n.smoke .s8 {\n  -webkit-animation: smoke 10s 8s infinite;\n          animation: smoke 10s 8s infinite;\n}\n.smoke .s9 {\n  -webkit-animation: smoke 10s 9s infinite;\n          animation: smoke 10s 9s infinite;\n}\n.chapter_picture {\n  max-width: 100%;\n  display: block;\n  -webkit-filter: saturate(0.8);\n          filter: saturate(0.8);\n  opacity: 0.9;\n  transition: all 0.5s;\n}\n.primary {\n  width: 66%;\n}\n.second {\n  width: 50%;\n}\n.third {\n  width: 33%;\n}\nimg {\n  height: auto;\n  width: 100%;\n}\n.bg {\n  opacity: 0.3;\n}\n.highlighted {\n  transition: all 0.5s;\n  -webkit-filter: brightness(110%);\n          filter: brightness(110%);\n  transform: scale(1.1);\n}\nvideo {\n  width: 100%;\n  height: auto;\n  box-shadow: 5px 5px 5px var(--color-text);\n}\n.chapter_video {\n  position: relative;\n}\n.fourth {\n  flex: 1 25%;\n  padding: 5px;\n}\n.theater {\n  flex: 1 auto;\n  margin: 0 17%;\n  order: 99;\n}\n.box {\n  width: 80%;\n}\n.box p {\n  text-shadow: 2px 2px lightgrey;\n}\n.column {\n  flex-flow: column nowrap;\n}\np {\n  text-align: center;\n}\n.reveal span {\n  position: relative;\n  opacity: 0;\n  -webkit-animation: move-text 0.1s forwards;\n          animation: move-text 0.1s forwards;\n}\n@-webkit-keyframes move-text {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes move-text {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nfooter {\n  text-align: center;\n  background-color: tomato;\n  color: white;\n}\n.navigation {\n  left: 2%;\n  position: absolute;\n  top: 50%;\n  z-index: 6;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  list-style-type: none;\n}\n.navigation--item {\n  cursor: pointer;\n  border-radius: 9999px;\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 8px 0;\n  position: relative;\n  display: block;\n}\n.navigation--item a {\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 2px white;\n  cursor: pointer;\n  height: 100%;\n  left: 0;\n  outline: none;\n  text-indent: -999em;\n  top: 0;\n  transition: background 0.3s ease;\n  width: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n.navigation--item a:focus {\n  outline: none;\n}\n.navigation--item a:hover,\n.navigation--item a:focus {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.navigation--item a::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  height: 0;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  transition: height 0.3s ease;\n}\n.navigation--item a.active::after {\n  height: 100%;\n}\n@font-face {\n  font-family: \"LinolschriftHeavy\";\n  font-display: swap;\n}\n.title {\n  color: var(--color-title);\n  text-align: center;\n}\n.title h1 {\n  line-height: 1.2;\n  font-size: 3em;\n  font-family: LinolschriftHeavy, arial, sans-serif;\n  font-weight: normal;\n}\n.parallax {\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  perspective: 300px;\n}\n.parallax__group {\n  position: relative;\n  height: 100vh;\n  transform-style: preserve-3d;\n}\n.parallax__header {\n  z-index: 99;\n}\n.parallax__layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n}\n.parallax__layer--fore {\n  transform: translateZ(90px) scale(0.7);\n  z-index: 1;\n  align-content: baseline;\n}\n.parallax__layer--base {\n  transform: translateZ(0);\n  z-index: 4;\n  background: 50% 50%/cover;\n}\n.parallax__layer--back {\n  transform: translateZ(-300px) scale(2);\n  z-index: 3;\n  align-content: baseline;\n}\n.parallax__layer--deep {\n  transform: translateZ(-600px) scale(3);\n  z-index: 2;\n  height: 50vh;\n}\n.back {\n  z-index: -1;\n}\n.active {\n  z-index: 25;\n}\n.fade-in-scale {\n  -webkit-animation: fade-in-scale-down 5s ease-out both;\n          animation: fade-in-scale-down 5s ease-out both;\n}\n@-webkit-keyframes fade-in-scale-down {\n  0% {\n    transform: scale(1.25) translateY(-15px);\n    transform-origin: 50% 16%;\n    -webkit-filter: blur(5px);\n            filter: blur(5px);\n  }\n  100% {\n    transform: scale(1) translateY(0);\n    transform-origin: top;\n    -webkit-filter: blur(0);\n            filter: blur(0);\n  }\n}\n@keyframes fade-in-scale-down {\n  0% {\n    transform: scale(1.25) translateY(-15px);\n    transform-origin: 50% 16%;\n    -webkit-filter: blur(5px);\n            filter: blur(5px);\n  }\n  100% {\n    transform: scale(1) translateY(0);\n    transform-origin: top;\n    -webkit-filter: blur(0);\n            filter: blur(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZXJkbXVlbGxlci9EZXZlbG9wbWVudC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL21lbW9yeS9tZW1vcnkuc2NzcyIsImxpYnMvdWkvc3JjL2xpYi91aS5zY3NzIiwiL1VzZXJzL2dlcmRtdWVsbGVyL0RldmVsb3BtZW50L2RlbW9rcmF0aWVlcmxlYmVuMjAyMC9saWJzL3VpL3NyYy9saWIvZGFpbHkvZGFpbHkuc2NzcyIsIi9Vc2Vycy9nZXJkbXVlbGxlci9EZXZlbG9wbWVudC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL3RpY3RhY3RvZS90aWN0YWN0b2Uuc2NzcyIsIi9Vc2Vycy9nZXJkbXVlbGxlci9EZXZlbG9wbWVudC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL3N1aXRjYXNlL3N1aXRjYXNlLnNjc3MiLCIvVXNlcnMvZ2VyZG11ZWxsZXIvRGV2ZWxvcG1lbnQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2xpYnMvdWkvc3JjL2xpYi9pbmZvL2luZm8uc2NzcyIsIi9Vc2Vycy9nZXJkbXVlbGxlci9EZXZlbG9wbWVudC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL3JlZGlyZWN0L3JlZGlyZWN0LnNjc3MiLCIvVXNlcnMvZ2VyZG11ZWxsZXIvRGV2ZWxvcG1lbnQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2xpYnMvdWkvc3JjL2xpYi9zY3JvbGxpY29uL3Njcm9sbGljb24uc2NzcyIsIi9Vc2Vycy9nZXJkbXVlbGxlci9EZXZlbG9wbWVudC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL3B1enpsZS9wdXp6bGUuc2NzcyIsIi9Vc2Vycy9nZXJkbXVlbGxlci9EZXZlbG9wbWVudC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL3Ntb2tpbmdwaXQvc21va2luZ3BpdC5zY3NzIiwiL1VzZXJzL2dlcmRtdWVsbGVyL0RldmVsb3BtZW50L2RlbW9rcmF0aWVlcmxlYmVuMjAyMC9saWJzL3VpL3NyYy9saWIvaW1hZ2UvaW1hZ2Uuc2NzcyIsIi9Vc2Vycy9nZXJkbXVlbGxlci9EZXZlbG9wbWVudC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL3ZpZGVvL3ZpZGVvLnNjc3MiLCIvVXNlcnMvZ2VyZG11ZWxsZXIvRGV2ZWxvcG1lbnQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2xpYnMvdWkvc3JjL2xpYi90ZXh0L3RleHQuc2NzcyIsIi9Vc2Vycy9nZXJkbXVlbGxlci9EZXZlbG9wbWVudC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL2Zvb3Rlci9mb290ZXIuc2NzcyIsIi9Vc2Vycy9nZXJkbXVlbGxlci9EZXZlbG9wbWVudC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL25hdi9uYXYuc2NzcyIsIi9Vc2Vycy9nZXJkbXVlbGxlci9EZXZlbG9wbWVudC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL3RpdGxlL3RpdGxlLnNjc3MiLCIvVXNlcnMvZ2VyZG11ZWxsZXIvRGV2ZWxvcG1lbnQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2xpYnMvdWkvc3JjL2xpYi9jaGFwdGVyL2NoYXB0ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDQ0Y7QURDRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNBSjtBREdFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDREo7QURHSTtFQUNFLFdBQUE7RUFDQSx1REFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VB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QTtBZndtQkY7QWVybUJBO0VBQ0UsV0FBQTtBZndtQkY7QWVybUJBO0VBQ0Usc0RBQUE7VUFBQSw4Q0FBQTtBZndtQkY7QWVybUJDO0VBQ0M7SUFDRSx3Q0FBQTtJQUNBLHlCQUFBO0lBQ0EseUJBQUE7WUFBQSxpQkFBQTtFZndtQkY7RWV0bUJBO0lBQ0UsaUNBQUE7SUFDQSxxQkFBQTtJQUNBLHVCQUFBO1lBQUEsZUFBQTtFZndtQkY7QUFDRjtBZWxuQkM7RUFDQztJQUNFLHdDQUFBO0lBQ0EseUJBQUE7SUFDQSx5QkFBQTtZQUFBLGlCQUFBO0Vmd21CRjtFZXRtQkE7SUFDRSxpQ0FBQTtJQUNBLHFCQUFBO0lBQ0EsdUJBQUE7WUFBQSxlQUFBO0Vmd21CRjtBQUNGIiwiZmlsZSI6ImxpYnMvdWkvc3JjL2xpYi91aS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbW9yeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAuZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNhcmRzIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuY2FyZCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuNnM7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzNmMDA0MSwgIzlmM2YyZik7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCkgcGVyc3BlY3RpdmUoMTAwcHgpO1xuICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE0OHB4O1xuICAgIGhlaWdodDogMTQ4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgcGVyc3BlY3RpdmUoMTAwcHgpO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAuZ3JpZC1jYXJkLXNob3cge1xuICAgICY6OmFmdGVyIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHBlcnNwZWN0aXZlKDEwMHB4KTtcbiAgICB9XG5cbiAgICAuZ3JpZC1pbWcge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDApIHBlcnNwZWN0aXZlKDEwMHB4KTtcbiAgICB9XG4gIH1cblxuICAuZ3JpZC1jYXJkLWZpbmlzaGVkIHtcbiAgICBvcGFjaXR5OiAuNTtcbiAgfVxuXG59IiwiLm1lbW9yeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5tZW1vcnkgLmRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tZW1vcnkgLmNhcmRzIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tZW1vcnkgLmNhcmQge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogMC42cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1lbW9yeSAuY2FyZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZjAwNDEsICM5ZjNmMmYpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDApIHBlcnNwZWN0aXZlKDEwMHB4KTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLm1lbW9yeSBpbWcge1xuICB3aWR0aDogMTQ4cHg7XG4gIGhlaWdodDogMTQ4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHBlcnNwZWN0aXZlKDEwMHB4KTtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLm1lbW9yeSAuZ3JpZC1jYXJkLXNob3c6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgcGVyc3BlY3RpdmUoMTAwcHgpO1xufVxuLm1lbW9yeSAuZ3JpZC1jYXJkLXNob3cgLmdyaWQtaW1nIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDApIHBlcnNwZWN0aXZlKDEwMHB4KTtcbn1cbi5tZW1vcnkgLmdyaWQtY2FyZC1maW5pc2hlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRhaWx5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kYWlseSAuZGVzY3JpcHRpb24ge1xuICBmbGV4OiAxIDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uZGFpbHkgLml0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZGFpbHkgLml0ZW1zIC5kZGNvbnRhaW5lcjpob3ZlciB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kYWlseSAuaXRlbXM6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmRhaWx5IC5pdGVtcyAuaXRlbSBwIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBjdXJzb3I6IGdyYWI7XG59XG4uZGFpbHkgLmNvbXBvbmVudF9ib3gge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGhlaWdodDogMzB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGFpbHkgaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvIDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtaGVpZ2h0OiA2NnZoO1xufVxuLmRhaWx5IC5zaG93IHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuZGFpbHkgLmNvbXBvbmVudF9ib3gge1xuICAgIGhlaWdodDogNDV2aDtcbiAgfVxufVxuLmdhbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbn1cbi5nYW1lIC5zdGF0dXMge1xuICBmbGV4OiAxIDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uZ2FtZSAuYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cbi5nYW1lIC5ib2FyZCAuc3F1YXJlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjNTU1O1xuICBmb250LXNpemU6IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbn1cbi5nYW1lIC5ib2FyZCAuc3F1YXJlOmZvY3VzIHtcbiAgb3V0bGluZTogdW5zZXQ7XG59XG4uZ2FtZSAuYm9hcmQgLnNxdWFyZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyMzAsIDIyMCwgMC4zKTtcbn1cbi5nYW1lIC5ib2FyZCAuc3F1YXJlOm50aC1jaGlsZCgtbiszKSB7XG4gIGJvcmRlci10b3A6IHVuc2V0O1xufVxuLmdhbWUgLmJvYXJkIC5zcXVhcmU6bnRoLWxhc3QtY2hpbGQoLW4rMykge1xuICBib3JkZXItYm90dG9tOiB1bnNldDtcbn1cbi5nYW1lIC5ib2FyZCAuc3F1YXJlOm50aC1jaGlsZCgzbikge1xuICBib3JkZXItcmlnaHQ6IHVuc2V0O1xufVxuLmdhbWUgLmJvYXJkIC5zcXVhcmU6bnRoLWNoaWxkKDNuKzEpIHtcbiAgYm9yZGVyLWxlZnQ6IHVuc2V0O1xufVxuLmdhbWUgLnJlc3VsdCB7XG4gIGZsZXg6IDEgMTAwJTtcbn1cblxuLnN1aXRjYXNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdWl0Y2FzZSAuZGVzY3JpcHRpb24ge1xuICB3aWR0aDogNzV2dztcbiAgbWFyZ2luOiAxMCUgYXV0byAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdWl0Y2FzZSAuaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnN1aXRjYXNlIC5pdGVtcyAuZGRjb250YWluZXIge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5zdWl0Y2FzZSAuaXRlbXMgLmRkY29udGFpbmVyOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zdWl0Y2FzZSAuaXRlbXM6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc3VpdGNhc2UgLmJhZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdWl0Y2FzZSAuaXRlbXMgPiAqIHtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc3VpdGNhc2UgLml0ZW1zIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuLnN1aXRjYXNlIC5kZGNvbnRhaW5lcmdob3N0IGltZyB7XG4gIHdpZHRoOiAyNXZ3O1xufVxuXG4uc3VpdGNhc2UgLmRyYWdUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnN1aXRjYXNlIC5pdGVtcyA+ICoge1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cblxuICAuc3VpdGNhc2UgLmRkY29udGFpbmVyZ2hvc3QgaW1nIHtcbiAgICB3aWR0aDogMTB2dztcbiAgfVxufVxuLmluZm9MaW5rIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM3JTtcbiAgbGVmdDogMTUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZSwgbWFyZ2luLXRvcCAwLjZzIGVhc2U7XG59XG4uaW5mb0xpbmsgLmluZm9UZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMCU7XG4gIHJpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDUwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDExO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5pbmZvTGluazpob3ZlciAuaW5mb1RleHQge1xuICBwYWRkaW5nOiA4cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xufVxuXG5hIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxpbmstYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpbmspO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmxpbmstYnV0dG9uOmhvdmVyLCAubGluay1idXR0b246Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGluay1oaWdobGlnaHRlZCk7XG59XG4ubGluay1idXR0b24gLnJlZGlyZWN0IHtcbiAgd2lkdGg6IDc1dnc7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmljb24tc2Nyb2xsLFxuLmljb24tc2Nyb2xsOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xufVxuXG4uaWNvbi1zY3JvbGwge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA4NHB4O1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIHRvcDogODUlO1xuICBtYXJnaW4tdG9wOiAtMzVweDtcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tY29sb3ItdGl0bGUpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uaWNvbi1zY3JvbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItdGl0bGUpO1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgdG9wOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1uYW1lOiBzY3JvbGw7XG59XG5cbkBrZXlmcmFtZXMgc2Nyb2xsIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDZweCk7XG4gIH1cbn1cbi5wdXp6bGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHV6emxlX19zb2x2ZWQtYm9hcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5wdXp6bGVfX3NvbHZlZC1ib2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cblxuLnB1enpsZV9fc29sdmVkLWJvYXJkLFxuLnB1enpsZV9fc2h1ZmZsZWQtYm9hcmQge1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgd2lkdGg6IDQwMHB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMCAwIDFweDtcbn1cblxuLnB1enpsZSBsaSB7XG4gIHdpZHRoOiA5OXB4O1xuICBoZWlnaHQ6IDk5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjREREO1xuICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAwO1xufVxuXG4ucHV6emxlIGxpOmVtcHR5OmhvdmVyOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5wdXp6bGUgbGkgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogZ3JhYjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UsIGJveC1zaGFkb3cgMjAwbXMgZWFzZTtcbn1cblxuLnB1enpsZSBsaSBpbWc6aG92ZXIge1xuICB6LWluZGV4OiAyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbn1cblxuLnNtb2tpbmdQaXQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc21va2luZ1BpdCBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNtb2tlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTE3LjVweDtcbiAgbWFyZ2luLXRvcDogMTcuNXB4O1xuICBib3R0b206IDg4JTtcbiAgbGVmdDogODkuNSU7XG59XG5cbi5zbW9rZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMzVweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgYm9yZGVyOiAzNXB4IHNvbGlkICM0YjRiNGI7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGxlZnQ6IC0xNHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMik7XG59XG5cbkBrZXlmcmFtZXMgc21va2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpIHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICAxJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMikgdHJhbnNsYXRlKC0yMHB4LCAtMjBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgtMjAwcHgsIC01MHB4KTtcbiAgfVxufVxuLnNtb2tlIC5zMCB7XG4gIGFuaW1hdGlvbjogc21va2UgMTBzIDBzIGluZmluaXRlO1xufVxuXG4uc21va2UgLnMxIHtcbiAgYW5pbWF0aW9uOiBzbW9rZSAxMHMgMXMgaW5maW5pdGU7XG59XG5cbi5zbW9rZSAuczIge1xuICBhbmltYXRpb246IHNtb2tlIDEwcyAycyBpbmZpbml0ZTtcbn1cblxuLnNtb2tlIC5zMyB7XG4gIGFuaW1hdGlvbjogc21va2UgMTBzIDNzIGluZmluaXRlO1xufVxuXG4uc21va2UgLnM0IHtcbiAgYW5pbWF0aW9uOiBzbW9rZSAxMHMgNHMgaW5maW5pdGU7XG59XG5cbi5zbW9rZSAuczUge1xuICBhbmltYXRpb246IHNtb2tlIDEwcyA1cyBpbmZpbml0ZTtcbn1cblxuLnNtb2tlIC5zNiB7XG4gIGFuaW1hdGlvbjogc21va2UgMTBzIDZzIGluZmluaXRlO1xufVxuXG4uc21va2UgLnM3IHtcbiAgYW5pbWF0aW9uOiBzbW9rZSAxMHMgN3MgaW5maW5pdGU7XG59XG5cbi5zbW9rZSAuczgge1xuICBhbmltYXRpb246IHNtb2tlIDEwcyA4cyBpbmZpbml0ZTtcbn1cblxuLnNtb2tlIC5zOSB7XG4gIGFuaW1hdGlvbjogc21va2UgMTBzIDlzIGluZmluaXRlO1xufVxuXG4uY2hhcHRlcl9waWN0dXJlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmlsdGVyOiBzYXR1cmF0ZSgwLjgpO1xuICBvcGFjaXR5OiAwLjk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4ucHJpbWFyeSB7XG4gIHdpZHRoOiA2NiU7XG59XG5cbi5zZWNvbmQge1xuICB3aWR0aDogNTAlO1xufVxuXG4udGhpcmQge1xuICB3aWR0aDogMzMlO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmcge1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5oaWdobGlnaHRlZCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxudmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCB2YXIoLS1jb2xvci10ZXh0KTtcbn1cblxuLmNoYXB0ZXJfdmlkZW8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3VydGgge1xuICBmbGV4OiAxIDI1JTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4udGhlYXRlciB7XG4gIGZsZXg6IDEgYXV0bztcbiAgbWFyZ2luOiAwIDE3JTtcbiAgb3JkZXI6IDk5O1xufVxuXG4uYm94IHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5ib3ggcCB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IGxpZ2h0Z3JleTtcbn1cblxuLmNvbHVtbiB7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJldmVhbCBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvcGFjaXR5OiAwO1xuICBhbmltYXRpb246IG1vdmUtdGV4dCAwLjFzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIG1vdmUtdGV4dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbmZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgbGVmdDogMiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbjogOHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1pbmRlbnQ6IC05OTllbTtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGE6aG92ZXIsXG4ubmF2aWdhdGlvbi0taXRlbSBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhLmFjdGl2ZTo6YWZ0ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJMaW5vbHNjaHJpZnRIZWF2eVwiO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG4udGl0bGUge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGl0bGUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGUgaDEge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDNlbTtcbiAgZm9udC1mYW1pbHk6IExpbm9sc2NocmlmdEhlYXZ5LCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnBhcmFsbGF4IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwZXJzcGVjdGl2ZTogMzAwcHg7XG59XG4ucGFyYWxsYXhfX2dyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuLnBhcmFsbGF4X19oZWFkZXIge1xuICB6LWluZGV4OiA5OTtcbn1cbi5wYXJhbGxheF9fbGF5ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG59XG4ucGFyYWxsYXhfX2xheWVyLS1mb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDkwcHgpIHNjYWxlKDAuNyk7XG4gIHotaW5kZXg6IDE7XG4gIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xufVxuLnBhcmFsbGF4X19sYXllci0tYmFzZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgei1pbmRleDogNDtcbiAgYmFja2dyb3VuZDogNTAlIDUwJS9jb3Zlcjtcbn1cbi5wYXJhbGxheF9fbGF5ZXItLWJhY2sge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMHB4KSBzY2FsZSgyKTtcbiAgei1pbmRleDogMztcbiAgYWxpZ24tY29udGVudDogYmFzZWxpbmU7XG59XG4ucGFyYWxsYXhfX2xheWVyLS1kZWVwIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC02MDBweCkgc2NhbGUoMyk7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogNTB2aDtcbn1cblxuLmJhY2sge1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmFjdGl2ZSB7XG4gIHotaW5kZXg6IDI1O1xufVxuXG4uZmFkZS1pbi1zY2FsZSB7XG4gIGFuaW1hdGlvbjogZmFkZS1pbi1zY2FsZS1kb3duIDVzIGVhc2Utb3V0IGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1pbi1zY2FsZS1kb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSkgdHJhbnNsYXRlWSgtMTVweCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDE2JTtcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgfVxufSIsIi5kYWlseSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBmbGV4OiAxIDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG5cbiAgLml0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgICAuZGRjb250YWluZXI6aG92ZXIge1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2U7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgLml0ZW0gcCB7XG4gICAgICBsZXR0ZXItc3BhY2luZzowLjFlbTtcbiAgICAgIGN1cnNvcjogZ3JhYjtcbiAgICB9XG4gIH1cblxuICAuY29tcG9uZW50X2JveCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGhlaWdodDogMzB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogMCBhdXRvIDA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtaGVpZ2h0OiA2NnZoO1xuICB9XG5cbiAgIC5zaG93IHtcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmRhaWx5IC5jb21wb25lbnRfYm94IHtcbiAgICBoZWlnaHQ6IDQ1dmg7XG4gIH1cbn0iLCIkY29sb3ItYmc6IHJnYmEoMjQwLCAyMzAsIDIyMCwgLjMpO1xuJGNvbG9yLWJvcmRlcjogIzU1NTtcblxuLmdhbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcblxuICAuc3RhdHVzIHsgXG4gICAgZmxleDogMSAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuXG4gIC5ib2FyZCB7IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuXG4gICAgLnNxdWFyZSB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgJGNvbG9yLWJvcmRlcjtcblxuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogdW5zZXQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmc7XG4gICAgICB9XG4gIFxuICAgICAgJjpudGgtY2hpbGQoLW4gKyAzKSB7XG4gICAgICAgIGJvcmRlci10b3A6IHVuc2V0O1xuICAgICAgfVxuICBcbiAgICAgICY6bnRoLWxhc3QtY2hpbGQoLW4gKyAzKSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHVuc2V0O1xuICAgICAgfVxuICBcbiAgICAgICY6bnRoLWNoaWxkKDNuKSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogdW5zZXQ7XG4gICAgICB9XG4gIFxuICAgICAgJjpudGgtY2hpbGQoM24gKyAxKSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiB1bnNldDtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIC5yZXN1bHQgeyBcbiAgICBmbGV4OiAxIDEwMCU7XG4gIH1cbn0iLCIuc3VpdGNhc2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnN1aXRjYXNlIC5kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiA3NXZ3O1xuICBtYXJnaW46IDEwJSBhdXRvIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1aXRjYXNlIC5pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uc3VpdGNhc2UgLml0ZW1zIC5kZGNvbnRhaW5lciB7XG4gIG9wYWNpdHk6IC41O1xufVxuXG4uc3VpdGNhc2UgLml0ZW1zIC5kZGNvbnRhaW5lcjpob3ZlciB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc3VpdGNhc2UgLml0ZW1zOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnN1aXRjYXNlIC5iYWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3VpdGNhc2UgLml0ZW1zID4gKiB7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnN1aXRjYXNlIC5pdGVtcyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi5zdWl0Y2FzZSAuZGRjb250YWluZXJnaG9zdCBpbWcge1xuICB3aWR0aDogMjV2dztcbn1cblxuLnN1aXRjYXNlIC5kcmFnVGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5zdWl0Y2FzZSAuaXRlbXMgPiAqIHtcbiAgICB3aWR0aDogMTAlO1xuICB9XG5cbiAgLnN1aXRjYXNlIC5kZGNvbnRhaW5lcmdob3N0IGltZyB7XG4gICAgd2lkdGg6IDEwdnc7XG4gIH1cbn0iLCIuaW5mb0xpbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzclO1xuICBsZWZ0OiAxNSU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIC8vYmFja2dyb3VuZDogdXJsKC4vaW5mby5zdmcpIG5vLXJlcGVhdCAwIDAgdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjZzIGVhc2UsIG1hcmdpbi10b3AgLjZzIGVhc2U7XG5cbiAgLmluZm9UZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMjAlO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogNTBweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNyk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICAvL2JhY2tncm91bmQ6IHVybCguL2luZm9faGlnaGxpZ2h0ZWQuc3ZnKSBuby1yZXBlYXQgMCAwIHRyYW5zcGFyZW50O1xuXG4gICAgLmluZm9UZXh0IHtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xuICAgIH1cbiAgfVxufVxuXG5hIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiIsIi5saW5rLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saW5rKTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1saW5rLWhpZ2hsaWdodGVkKTtcbiAgfVxuXG4gIC5yZWRpcmVjdCB7XG4gICAgd2lkdGg6IDc1dnc7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59IiwiXG4uaWNvbi1zY3JvbGwsXG4uaWNvbi1zY3JvbGw6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG59XG4uaWNvbi1zY3JvbGwge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA4NHB4O1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIHRvcDogODUlO1xuICBtYXJnaW4tdG9wOiAtMzVweDtcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tY29sb3ItdGl0bGUpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmljb24tc2Nyb2xsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10aXRsZSk7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICB0b3A6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IHNjcm9sbDtcbn1cbkBrZXlmcmFtZXMgc2Nyb2xsIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDZweCk7XG4gIH1cbn0iLCIucHV6emxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnB1enpsZV9fc29sdmVkLWJvYXJke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5wdXp6bGVfX3NvbHZlZC1ib2FyZDpiZWZvcmV7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cblxuLnB1enpsZV9fc29sdmVkLWJvYXJkLFxuLnB1enpsZV9fc2h1ZmZsZWQtYm9hcmR7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB3aWR0aDogNDAwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjREREO1xuICBib3JkZXItd2lkdGg6IDFweCAwIDAgMXB4O1xufVxuXG4ucHV6emxlIGxpe1xuICB3aWR0aDogOTlweDtcbiAgaGVpZ2h0OiA5OXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG4gIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XG59XG5cbi5wdXp6bGUgbGk6ZW1wdHk6aG92ZXI6YmVmb3Jle1xuICBvcGFjaXR5OiAxO1xufVxuXG4ucHV6emxlIGxpIGltZ3tcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogZ3JhYjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UsIGJveC1zaGFkb3cgMjAwbXMgZWFzZTtcbn1cblxuLnB1enpsZSBsaSBpbWc6aG92ZXJ7XG4gIHotaW5kZXg6IDI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjgpO1xufSIsIi5zbW9raW5nUGl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNtb2tpbmdQaXQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbW9rZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IC0xNy41cHg7XG4gIG1hcmdpbi10b3A6IDE3LjVweDtcbiAgYm90dG9tOiA4OCU7XG4gIGxlZnQ6IDg5LjUlO1xufVxuXG4uc21va2Ugc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIGJvcmRlcjogMzVweCBzb2xpZCAjNGI0YjRiO1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBsZWZ0OiAtMTRweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xufVxuXG5Aa2V5ZnJhbWVzIHNtb2tlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yKSB0cmFuc2xhdGUoMCwgMClcbiAgfVxuXG4gIDElIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yKSB0cmFuc2xhdGUoLTIwcHgsIC0yMHB4KVxuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgtMjAwcHgsIC01MHB4KVxuICB9XG59XG5cbi5zbW9rZSAuczAge1xuICBhbmltYXRpb246IHNtb2tlIDEwcyAwcyBpbmZpbml0ZVxufVxuXG4uc21va2UgLnMxIHtcbiAgYW5pbWF0aW9uOiBzbW9rZSAxMHMgMXMgaW5maW5pdGVcbn1cblxuLnNtb2tlIC5zMiB7XG4gIGFuaW1hdGlvbjogc21va2UgMTBzIDJzIGluZmluaXRlXG59XG5cbi5zbW9rZSAuczMge1xuICBhbmltYXRpb246IHNtb2tlIDEwcyAzcyBpbmZpbml0ZVxufVxuXG4uc21va2UgLnM0IHtcbiAgYW5pbWF0aW9uOiBzbW9rZSAxMHMgNHMgaW5maW5pdGVcbn1cblxuLnNtb2tlIC5zNSB7XG4gIGFuaW1hdGlvbjogc21va2UgMTBzIDVzIGluZmluaXRlXG59XG5cbi5zbW9rZSAuczYge1xuICBhbmltYXRpb246IHNtb2tlIDEwcyA2cyBpbmZpbml0ZVxufVxuXG4uc21va2UgLnM3IHtcbiAgYW5pbWF0aW9uOiBzbW9rZSAxMHMgN3MgaW5maW5pdGVcbn1cblxuLnNtb2tlIC5zOCB7XG4gIGFuaW1hdGlvbjogc21va2UgMTBzIDhzIGluZmluaXRlXG59XG5cbi5zbW9rZSAuczkge1xuICBhbmltYXRpb246IHNtb2tlIDEwcyA5cyBpbmZpbml0ZVxufVxuIiwiLmNoYXB0ZXJfcGljdHVyZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZpbHRlcjogc2F0dXJhdGUoLjgpO1xuICBvcGFjaXR5OiAuOTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNTBzO1xufVxuXG4ucHJpbWFyeSB7XG4gIHdpZHRoOiA2NiU7XG59XG5cbi5zZWNvbmQge1xuICB3aWR0aDogNTAlO1xufVxuXG4udGhpcmQge1xuICB3aWR0aDogMzMlO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6YXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iZyB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmhpZ2hsaWdodGVkIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNTBzO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn0iLCJ2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHZhcigtLWNvbG9yLXRleHQpO1xufVxuXG4uY2hhcHRlcl92aWRlbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvdXJ0aCB7XG4gIGZsZXg6IDEgMjUlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi50aGVhdGVyIHtcbiAgZmxleDogMSBhdXRvO1xuICBtYXJnaW46IDAgMTclO1xuICBvcmRlcjogOTk7XG59IiwiLmJveCB7XG4gIHdpZHRoOiA4MCU7XG5cbiAgcCB7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggbGlnaHRncmV5O1xuICB9XG59XG5cbi5jb2x1bW4ge1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXZlYWwgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy9ib3R0b206IC0xZW07XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogbW92ZS10ZXh0IDAuMXMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgbW92ZS10ZXh0IHtcbiAgMCUge1xuICAgICAgLy9ib3R0b206IC0wLjJlbTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gIDUwJSB7XG4gICAgICAvL2JvdHRvbTogMC4yZW07XG4gIH1cblxuICAxMDAlIHtcbiAgICAgIC8vYm90dG9tOiAwO1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxufSIsImZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xuICBjb2xvcjogd2hpdGU7XG59IiwiLm5hdmlnYXRpb24ge1xuXHRsZWZ0OiAyJTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDUwJTtcblx0ei1pbmRleDogNjtcblxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogOTk5OXB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdHdpZHRoOiAyMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XG5cdG1hcmdpbjogOHB4IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGEge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHdoaXRlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGhlaWdodDogMTAwJTtcblx0bGVmdDogMDtcblx0b3V0bGluZTogbm9uZTtcblx0dGV4dC1pbmRlbnQ6IC05OTllbTtcblx0dG9wOiAwO1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcblx0d2lkdGg6IDEwMCU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYTpmb2N1cyB7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGE6aG92ZXIsXG4ubmF2aWdhdGlvbi0taXRlbSBhOmZvY3VzIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhOjphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMDtcblx0aGVpZ2h0OiAwO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0dHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYS5hY3RpdmU6OmFmdGVyIHtcblx0aGVpZ2h0OiAxMDAlO1xufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0xpbm9sc2NocmlmdEhlYXZ5JztcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAvL3NyYzogdXJsKCcuL0xpbm9sc2NocmlmdF9IZWF2eS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aXRsZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBoMSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LWZhbWlseTogTGlub2xzY2hyaWZ0SGVhdnksYXJpYWwsc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxufVxuIiwiLnBhcmFsbGF4IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwZXJzcGVjdGl2ZTogMzAwcHg7XG5cbiAgJl9fZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIH1cblxuICAmX19oZWFkZXIge1xuICAgIHotaW5kZXg6IDk5O1xuICB9XG5cbiAgJl9fbGF5ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcblxuICAgICYtLWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDkwcHgpIHNjYWxlKC43KTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBhbGlnbi1jb250ZW50OiBiYXNlbGluZTtcbiAgICB9XG5cbiAgICAmLS1iYXNlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgIHotaW5kZXg6IDQ7XG4gICAgICBiYWNrZ3JvdW5kOiA1MCUgNTAlIC8gY292ZXI7XG4gICAgfVxuXG4gICAgJi0tYmFjayB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMHB4KSBzY2FsZSgyKTtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgICBhbGlnbi1jb250ZW50OiBiYXNlbGluZTtcbiAgICB9XG5cbiAgICAmLS1kZWVwIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNjAwcHgpIHNjYWxlKDMpO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIGhlaWdodDogNTB2aDtcbiAgICB9XG4gIH1cbn1cblxuLmJhY2sge1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmFjdGl2ZSB7XG4gIHotaW5kZXg6IDI1O1xufVxuXG4uZmFkZS1pbi1zY2FsZSB7XG4gIGFuaW1hdGlvbjogZmFkZS1pbi1zY2FsZS1kb3duIDVzIGVhc2Utb3V0IGJvdGg7XG59XG5cbiBAa2V5ZnJhbWVzIGZhZGUtaW4tc2NhbGUtZG93biB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpIHRyYW5zbGF0ZVkoLTE1cHgpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxNiU7XG4gICAgZmlsdGVyOiBibHVyKDVweCkgXG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICBmaWx0ZXI6IGJsdXIoMCkgXG4gIH1cbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!./styles.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/gerdmueller/Development/demokratieerleben2020/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/Users/gerdmueller/Development/demokratieerleben2020/node_modules/postcss-loader/src??embedded!/Users/gerdmueller/Development/demokratieerleben2020/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!./styles.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZXJkbXVlbGxlci9EZXZlbG9wbWVudC9kZW1va3JhdGllZXJsZWJlbjIwMjAvYXBwcy9kZW1vbC9zcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUEiLCJmaWxlIjoiYXBwcy9kZW1vbC9zcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4iXX0= */", '', '']]

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/gerdmueller/Development/demokratieerleben2020/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!./styles.scss */ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!./styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 2:
/*!********************************************************************************************************!*\
  !*** multi ./styles.scss /Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/ui.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/gerdmueller/Development/demokratieerleben2020/apps/demol/src/styles.scss */"./styles.scss");
module.exports = __webpack_require__(/*! /Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/ui.scss */"../../../libs/ui/src/lib/ui.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map
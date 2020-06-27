(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../../libs/ui/src/lib/ui.scss":
/*!*************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/ui.scss ***!
  \*************************************************************************************/
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
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/home/gm/Development/playground/demokratieerleben2020/node_modules/postcss-loader/src??embedded!/home/gm/Development/playground/demokratieerleben2020/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!/home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/ui.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".memory {\n  display: flex;\n  flex-wrap: wrap;\n}\n.memory .description {\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n}\n.memory .cards {\n  width: 600px;\n  margin: 0 auto;\n}\n.memory .card {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  cursor: pointer;\n}\n.memory .card::after {\n  content: \"\";\n  background: linear-gradient(to right, #3f0041, #9f3f2f);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: rotateY(0) perspective(100px);\n  transition: 0.4s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.memory img {\n  width: 148px;\n  height: 148px;\n  position: absolute;\n  overflow: hidden;\n  -o-object-position: center;\n     object-position: center;\n  transform: rotateY(180deg) perspective(100px);\n  transition: 0.4s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.memory .grid-card-show::after {\n  transform: rotateY(180deg) perspective(100px);\n}\n.memory .grid-card-show .grid-img {\n  transform: rotateY(0) perspective(100px);\n}\n.memory .grid-card-finished {\n  opacity: 0.5;\n}\n.daily {\n  display: flex;\n  flex-direction: column;\n}\n.daily .description {\n  flex: 1 100%;\n  text-align: center;\n  margin: 10px 0;\n}\n.daily .items {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n}\n.daily .items .ddcontainer:hover {\n  transition: background-color 0.5s ease;\n  font-weight: bold;\n}\n.daily .items:focus {\n  outline: none;\n}\n.daily .items .item p {\n  letter-spacing: 0.1em;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.daily .component_box {\n  background-size: contain;\n  height: 30vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.daily img {\n  height: auto;\n  text-align: center;\n  width: 60%;\n  margin: 0 auto 0;\n  justify-content: center;\n  display: flex;\n  max-height: 66vh;\n}\n.daily .show {\n  margin-bottom: 5%;\n}\n@media (min-width: 600px) {\n  .daily .component_box {\n    height: 45vh;\n  }\n}\n.game {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n}\n.game .status {\n  flex: 1 100%;\n  text-align: center;\n  margin: 10px 0;\n}\n.game .board {\n  display: flex;\n  flex-wrap: wrap;\n  width: 300px;\n  height: 300px;\n}\n.game .board .square {\n  width: 100px;\n  height: 100px;\n  border: 3px solid #555;\n  font-size: 32px;\n  text-align: center;\n  line-height: 100px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n.game .board .square:focus {\n  outline: unset;\n}\n.game .board .square:hover {\n  background-color: rgba(240, 230, 220, 0.3);\n}\n.game .board .square:nth-child(-n+3) {\n  border-top: unset;\n}\n.game .board .square:nth-last-child(-n+3) {\n  border-bottom: unset;\n}\n.game .board .square:nth-child(3n) {\n  border-right: unset;\n}\n.game .board .square:nth-child(3n+1) {\n  border-left: unset;\n}\n.game .result {\n  flex: 1 100%;\n}\n.suitcase {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.suitcase .description {\n  width: 75vw;\n  margin: 10% auto 0;\n  text-align: center;\n}\n.suitcase .items {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n}\n.suitcase .items .ddcontainer {\n  opacity: 0.5;\n}\n.suitcase .items .ddcontainer:hover {\n  transition: background-color 0.5s ease;\n  opacity: 1;\n}\n.suitcase .items:focus {\n  outline: none;\n}\n.suitcase .bag {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.suitcase .items > * {\n  width: 25%;\n  margin: auto;\n}\n.suitcase .items img {\n  width: 100%;\n  border-radius: 50%;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.suitcase .ddcontainerghost img {\n  width: 25vw;\n}\n.suitcase .dragText {\n  text-align: center;\n}\n@media (min-width: 600px) {\n  .suitcase .items > * {\n    width: 10%;\n  }\n\n  .suitcase .ddcontainerghost img {\n    width: 10vw;\n  }\n}\n.infoLink {\n  position: absolute;\n  top: 37%;\n  left: 15%;\n  cursor: pointer;\n  width: 1em;\n  height: 1em;\n  opacity: 1;\n  transition: opacity 0.6s ease, margin-top 0.6s ease;\n}\n.infoLink .infoText {\n  position: absolute;\n  top: -20%;\n  right: auto;\n  margin: 50px;\n  opacity: 0;\n  overflow: hidden;\n  z-index: 11;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  font-size: 1.1rem;\n}\n.infoLink:hover .infoText {\n  padding: 8px;\n  opacity: 1;\n  transition: opacity 0.5s ease;\n}\na {\n  color: #fff;\n  text-decoration: none;\n}\n.link-button {\n  background-color: transparent;\n  text-decoration: none;\n  color: var(--color-link);\n  border: none;\n  cursor: pointer;\n  display: inline;\n}\n.link-button:hover, .link-button:focus {\n  color: var(--color-link-highlighted);\n}\n.link-button .redirect {\n  width: 75vw;\n  margin: auto;\n}\n.icon-scroll,\n.icon-scroll:before {\n  position: absolute;\n  left: 50%;\n}\n.icon-scroll {\n  width: 48px;\n  height: 84px;\n  margin-left: -20px;\n  top: 85%;\n  margin-top: -35px;\n  border: 4px solid var(--color-title);\n  border-radius: 25px;\n}\n.icon-scroll:before {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  background: var(--color-title);\n  margin-left: -4px;\n  top: 8px;\n  border-radius: 4px;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: scroll;\n          animation-name: scroll;\n}\n@-webkit-keyframes scroll {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(46px);\n  }\n}\n@keyframes scroll {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(46px);\n  }\n}\n.puzzle {\n  display: flex;\n}\n.puzzle__solved-board {\n  position: relative;\n  background-size: cover;\n}\n.puzzle__solved-board:before {\n  content: \"\";\n  background-color: rgba(255, 255, 255, 0.6);\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.puzzle__solved-board,\n.puzzle__shuffled-board {\n  margin: 20px auto;\n  width: 400px;\n  list-style-type: none;\n  padding: 0;\n  font-size: 0;\n  border: 1px solid #DDD;\n  border-width: 1px 0 0 1px;\n}\n.puzzle li {\n  width: 99px;\n  height: 99px;\n  position: relative;\n  text-align: left;\n  display: inline-block;\n  border: 1px solid #DDD;\n  border-width: 0 1px 1px 0;\n}\n.puzzle li:empty:hover:before {\n  opacity: 1;\n}\n.puzzle li img {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  cursor: -webkit-grab;\n  cursor: grab;\n  transition: transform 200ms ease, box-shadow 200ms ease;\n}\n.puzzle li img:hover {\n  z-index: 2;\n  transform: scale(1.1);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);\n}\n.smokingPit {\n  width: 100%;\n  position: relative;\n}\n.smokingPit img {\n  width: 100%;\n}\n.smoke {\n  position: absolute;\n  margin-left: -17.5px;\n  margin-top: 17.5px;\n  bottom: 88%;\n  left: 89.5%;\n}\n.smoke span {\n  display: block;\n  position: absolute;\n  bottom: -35px;\n  margin-left: -20px;\n  height: 0px;\n  width: 0px;\n  border: 35px solid #4b4b4b;\n  border-radius: 35px;\n  left: -14px;\n  opacity: 0;\n  transform: scale(0.2);\n}\n@-webkit-keyframes smoke {\n  0% {\n    transform: scale(0.2) translate(0, 0);\n  }\n  1% {\n    opacity: 1;\n    transform: scale(0.2) translate(-20px, -20px);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1) translate(-200px, -50px);\n  }\n}\n@keyframes smoke {\n  0% {\n    transform: scale(0.2) translate(0, 0);\n  }\n  1% {\n    opacity: 1;\n    transform: scale(0.2) translate(-20px, -20px);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1) translate(-200px, -50px);\n  }\n}\n.smoke .s0 {\n  -webkit-animation: smoke 10s 0s infinite;\n          animation: smoke 10s 0s infinite;\n}\n.smoke .s1 {\n  -webkit-animation: smoke 10s 1s infinite;\n          animation: smoke 10s 1s infinite;\n}\n.smoke .s2 {\n  -webkit-animation: smoke 10s 2s infinite;\n          animation: smoke 10s 2s infinite;\n}\n.smoke .s3 {\n  -webkit-animation: smoke 10s 3s infinite;\n          animation: smoke 10s 3s infinite;\n}\n.smoke .s4 {\n  -webkit-animation: smoke 10s 4s infinite;\n          animation: smoke 10s 4s infinite;\n}\n.smoke .s5 {\n  -webkit-animation: smoke 10s 5s infinite;\n          animation: smoke 10s 5s infinite;\n}\n.smoke .s6 {\n  -webkit-animation: smoke 10s 6s infinite;\n          animation: smoke 10s 6s infinite;\n}\n.smoke .s7 {\n  -webkit-animation: smoke 10s 7s infinite;\n          animation: smoke 10s 7s infinite;\n}\n.smoke .s8 {\n  -webkit-animation: smoke 10s 8s infinite;\n          animation: smoke 10s 8s infinite;\n}\n.smoke .s9 {\n  -webkit-animation: smoke 10s 9s infinite;\n          animation: smoke 10s 9s infinite;\n}\n.chapter_picture {\n  max-width: 100%;\n  display: block;\n  -webkit-filter: saturate(0.8);\n          filter: saturate(0.8);\n  opacity: 0.9;\n  transition: all 0.5s;\n}\n.chapter_picture:hover {\n  transition: all 0.5s;\n  -webkit-filter: brightness(110%);\n          filter: brightness(110%);\n  transform: scale(1.1);\n}\n.chapter_picture:hover .overlay {\n  opacity: 1;\n}\nimg {\n  height: auto;\n  width: 100%;\n}\n.overlay {\n  position: absolute;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  transition: 0.5s ease;\n  opacity: 0;\n  color: white;\n  padding: 20px;\n  text-align: center;\n}\n.primary {\n  width: 66%;\n}\n.second {\n  width: 50%;\n}\n.third {\n  width: 33%;\n  padding: 5px;\n}\n.avatar img {\n  border-radius: 50%;\n}\n.bg {\n  opacity: 0.3;\n}\nvideo {\n  width: 100%;\n  height: auto;\n  box-shadow: 5px 5px 5px var(--color-text);\n}\n.chapter_video {\n  position: relative;\n}\n.fourth {\n  flex: 1 25%;\n  padding: 5px;\n}\n.theater {\n  flex: 1 auto;\n  margin: 0 17%;\n  order: 99;\n}\n.box {\n  width: 80%;\n}\n.box.avatar {\n  flex: 1 25%;\n  padding: 5px;\n}\n.box.avatar:hover p {\n  background-color: var(--color-title);\n}\n.box.avatar.second {\n  flex: 1 50%;\n}\n.box.avatar p {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  border-radius: 50%;\n  height: 200px;\n  margin: 8px;\n  color: #ffffff;\n  background-color: #673ab7;\n  text-shadow: none;\n  justify-content: center;\n}\n.box p {\n  text-shadow: 2px 2px lightgrey;\n}\n.column {\n  flex-flow: column nowrap;\n}\np {\n  text-align: center;\n}\n.reveal span {\n  position: relative;\n  opacity: 0;\n  -webkit-animation: move-text 0.1s forwards;\n          animation: move-text 0.1s forwards;\n}\n@-webkit-keyframes move-text {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes move-text {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nfooter {\n  text-align: center;\n  background-color: tomato;\n  color: white;\n}\n.navigation {\n  right: 2%;\n  position: absolute;\n  top: 50%;\n  z-index: 6;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  list-style-type: none;\n}\n.navigation--item {\n  cursor: pointer;\n  border-radius: 9999px;\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 8px 0;\n  position: relative;\n  display: block;\n}\n.navigation--item a {\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 2px white;\n  cursor: pointer;\n  height: 100%;\n  left: 0;\n  outline: none;\n  text-indent: -999em;\n  top: 0;\n  transition: background 0.3s ease;\n  width: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n.navigation--item a:focus {\n  outline: none;\n}\n.navigation--item a:hover,\n.navigation--item a:focus {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.navigation--item a::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  height: 0;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  transition: height 0.3s ease;\n}\n.navigation--item a.active::after {\n  height: 100%;\n}\n.title {\n  color: var(--color-title);\n  text-align: center;\n}\n.title h1 {\n  line-height: 1.2;\n  font-size: 3em;\n  font-family: LinolschriftHeavy, arial, sans-serif;\n  font-weight: normal;\n}\n.parallax {\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  perspective: 300px;\n}\n.parallax__group {\n  position: relative;\n  height: 100vh;\n  transform-style: preserve-3d;\n}\n.parallax__header {\n  z-index: 99;\n}\n.parallax__layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n}\n.parallax__layer--fore {\n  transform: translateZ(90px) scale(0.7);\n  z-index: 1;\n  align-content: baseline;\n}\n.parallax__layer--base {\n  transform: translateZ(0);\n  z-index: 4;\n  background: 50% 50%/cover;\n}\n.parallax__layer--back {\n  transform: translateZ(-300px) scale(2);\n  z-index: 3;\n  align-content: baseline;\n}\n.parallax__layer--deep {\n  transform: translateZ(-600px) scale(3);\n  z-index: 2;\n  height: 50vh;\n}\n.back {\n  z-index: -1;\n}\n.active {\n  z-index: 25;\n}\n.fade-in-scale {\n  -webkit-animation: fade-in-scale-down 5s ease-out both;\n          animation: fade-in-scale-down 5s ease-out both;\n}\n@-webkit-keyframes fade-in-scale-down {\n  0% {\n    transform: scale(1.25) translateY(-15px);\n    transform-origin: 50% 16%;\n    -webkit-filter: blur(5px);\n            filter: blur(5px);\n  }\n  100% {\n    transform: scale(1) translateY(0);\n    transform-origin: top;\n    -webkit-filter: blur(0);\n            filter: blur(0);\n  }\n}\n@keyframes fade-in-scale-down {\n  0% {\n    transform: scale(1.25) translateY(-15px);\n    transform-origin: 50% 16%;\n    -webkit-filter: blur(5px);\n            filter: blur(5px);\n  }\n  100% {\n    transform: scale(1) translateY(0);\n    transform-origin: top;\n    -webkit-filter: blur(0);\n            filter: blur(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2xpYnMvdWkvc3JjL2xpYi9tZW1vcnkvbWVtb3J5LnNjc3MiLCJsaWJzL3VpL3NyYy9saWIvdWkuc2NzcyIsIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2xpYnMvdWkvc3JjL2xpYi9kYWlseS9kYWlseS5zY3NzIiwiL2hvbWUvZ20vRGV2ZWxvcG1lbnQvcGxheWdyb3VuZC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL3RpY3RhY3RvZS90aWN0YWN0b2Uuc2NzcyIsIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2xpYnMvdWkvc3JjL2xpYi9zdWl0Y2FzZS9zdWl0Y2FzZS5zY3NzIiwiL2hvbWUvZ20vRGV2ZWxvcG1lbnQvcGxheWdyb3VuZC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL2luZm8vaW5mby5zY3NzIiwiL2hvbWUvZ20vRGV2ZWxvcG1lbnQvcGxheWdyb3VuZC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL3JlZGlyZWN0L3JlZGlyZWN0LnNjc3MiLCIvaG9tZS9nbS9EZXZlbG9wbWVudC9wbGF5Z3JvdW5kL2RlbW9rcmF0aWVlcmxlYmVuMjAyMC9saWJzL3VpL3NyYy9saWIvc2Nyb2xsaWNvbi9zY3JvbGxpY29uLnNjc3MiLCIvaG9tZS9nbS9EZXZlbG9wbWVudC9wbGF5Z3JvdW5kL2RlbW9rcmF0aWVlcmxlYmVuMjAyMC9saWJzL3VpL3NyYy9saWIvcHV6emxlL3B1enpsZS5zY3NzIiwiL2hvbWUvZ20vRGV2ZWxvcG1lbnQvcGxheWdyb3VuZC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL3Ntb2tpbmdwaXQvc21va2luZ3BpdC5zY3NzIiwiL2hvbWUvZ20vRGV2ZWxvcG1lbnQvcGxheWdyb3VuZC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL2ltYWdlL2ltYWdlLnNjc3MiLCIvaG9tZS9nbS9EZXZlbG9wbWVudC9wbGF5Z3JvdW5kL2RlbW9rcmF0aWVlcmxlYmVuMjAyMC9saWJzL3VpL3NyYy9saWIvdmlkZW8vdmlkZW8uc2NzcyIsIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2xpYnMvdWkvc3JjL2xpYi90ZXh0L3RleHQuc2NzcyIsIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2xpYnMvdWkvc3JjL2xpYi9mb290ZXIvZm9vdGVyLnNjc3MiLCIvaG9tZS9nbS9EZXZlbG9wbWVudC9wbGF5Z3JvdW5kL2RlbW9rcmF0aWVlcmxlYmVuMjAyMC9saWJzL3VpL3NyYy9saWIvbmF2L25hdi5zY3NzIiwiL2hvbWUvZ20vRGV2ZWxvcG1lbnQvcGxheWdyb3VuZC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL3RpdGxlL3RpdGxlLnNjc3MiLCIvaG9tZS9nbS9EZXZlbG9wbWVudC9wbGF5Z3JvdW5kL2RlbW9rcmF0aWVlcmxlYmVuMjAyMC9saWJzL3VpL3NyYy9saWIvY2hhcHRlci9jaGFwdGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0U7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDQUo7QURHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0RKO0FER0k7RUFDRSxXQUFBO0VBQ0EsdURBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtC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QUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QWZxcEJKO0FlbHBCRTtFQUNFLFdBQUE7QWZvcEJKO0FlanBCRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QWZrcEJKO0FlaHBCSTtFQUNFLHNDQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0Fma3BCTjtBZS9vQkk7RUFDRSx3QkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBZmlwQk47QWU5b0JJO0VBQ0Usc0NBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QWZncEJOO0FlN29CSTtFQUNFLHNDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QWYrb0JOO0FlMW9CQTtFQUNFLFdBQUE7QWY2b0JGO0FlMW9CQTtFQUNFLFdBQUE7QWY2b0JGO0FlMW9CQTtFQUNFLHNEQUFBO1VBQUEsOENBQUE7QWY2b0JGO0FlMW9CQztFQUNDO0lBQ0Usd0NBQUE7SUFDQSx5QkFBQTtJQUNBLHlCQUFBO1lBQUEsaUJBQUE7RWY2b0JGO0VlM29CQTtJQUNFLGlDQUFBO0lBQ0EscUJBQUE7SUFDQSx1QkFBQTtZQUFBLGVBQUE7RWY2b0JGO0FBQ0Y7QWV2cEJDO0VBQ0M7SUFDRSx3Q0FBQTtJQUNBLHlCQUFBO0lBQ0EseUJBQUE7WUFBQSxpQkFBQTtFZjZvQkY7RWUzb0JBO0lBQ0UsaUNBQUE7SUFDQSxxQkFBQTtJQUNBLHVCQUFBO1lBQUEsZUFBQTtFZjZvQkY7QUFDRiIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvdWkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW1vcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jYXJkcyB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzZjAwNDEsICM5ZjNmMmYpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDApIHBlcnNwZWN0aXZlKDEwMHB4KTtcbiAgICAgIHRyYW5zaXRpb246IC40cztcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAxNDhweDtcbiAgICBoZWlnaHQ6IDE0OHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHBlcnNwZWN0aXZlKDEwMHB4KTtcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG5cbiAgLmdyaWQtY2FyZC1zaG93IHtcbiAgICAmOjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSBwZXJzcGVjdGl2ZSgxMDBweCk7XG4gICAgfVxuXG4gICAgLmdyaWQtaW1nIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKSBwZXJzcGVjdGl2ZSgxMDBweCk7XG4gICAgfVxuICB9XG5cbiAgLmdyaWQtY2FyZC1maW5pc2hlZCB7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cblxufSIsIi5tZW1vcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubWVtb3J5IC5kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWVtb3J5IC5jYXJkcyB7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubWVtb3J5IC5jYXJkIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuNnM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tZW1vcnkgLmNhcmQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM2YwMDQxLCAjOWYzZjJmKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwKSBwZXJzcGVjdGl2ZSgxMDBweCk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5tZW1vcnkgaW1nIHtcbiAgd2lkdGg6IDE0OHB4O1xuICBoZWlnaHQ6IDE0OHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSBwZXJzcGVjdGl2ZSgxMDBweCk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5tZW1vcnkgLmdyaWQtY2FyZC1zaG93OjphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHBlcnNwZWN0aXZlKDEwMHB4KTtcbn1cbi5tZW1vcnkgLmdyaWQtY2FyZC1zaG93IC5ncmlkLWltZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwKSBwZXJzcGVjdGl2ZSgxMDBweCk7XG59XG4ubWVtb3J5IC5ncmlkLWNhcmQtZmluaXNoZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kYWlseSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZGFpbHkgLmRlc2NyaXB0aW9uIHtcbiAgZmxleDogMSAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLmRhaWx5IC5pdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmRhaWx5IC5pdGVtcyAuZGRjb250YWluZXI6aG92ZXIge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZGFpbHkgLml0ZW1zOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5kYWlseSAuaXRlbXMgLml0ZW0gcCB7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgY3Vyc29yOiBncmFiO1xufVxuLmRhaWx5IC5jb21wb25lbnRfYm94IHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBoZWlnaHQ6IDMwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRhaWx5IGltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDAgYXV0byAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LWhlaWdodDogNjZ2aDtcbn1cbi5kYWlseSAuc2hvdyB7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmRhaWx5IC5jb21wb25lbnRfYm94IHtcbiAgICBoZWlnaHQ6IDQ1dmg7XG4gIH1cbn1cbi5nYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG59XG4uZ2FtZSAuc3RhdHVzIHtcbiAgZmxleDogMSAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLmdhbWUgLmJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG59XG4uZ2FtZSAuYm9hcmQgLnNxdWFyZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzU1NTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG4uZ2FtZSAuYm9hcmQgLnNxdWFyZTpmb2N1cyB7XG4gIG91dGxpbmU6IHVuc2V0O1xufVxuLmdhbWUgLmJvYXJkIC5zcXVhcmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjMwLCAyMjAsIDAuMyk7XG59XG4uZ2FtZSAuYm9hcmQgLnNxdWFyZTpudGgtY2hpbGQoLW4rMykge1xuICBib3JkZXItdG9wOiB1bnNldDtcbn1cbi5nYW1lIC5ib2FyZCAuc3F1YXJlOm50aC1sYXN0LWNoaWxkKC1uKzMpIHtcbiAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XG59XG4uZ2FtZSAuYm9hcmQgLnNxdWFyZTpudGgtY2hpbGQoM24pIHtcbiAgYm9yZGVyLXJpZ2h0OiB1bnNldDtcbn1cbi5nYW1lIC5ib2FyZCAuc3F1YXJlOm50aC1jaGlsZCgzbisxKSB7XG4gIGJvcmRlci1sZWZ0OiB1bnNldDtcbn1cbi5nYW1lIC5yZXN1bHQge1xuICBmbGV4OiAxIDEwMCU7XG59XG5cbi5zdWl0Y2FzZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3VpdGNhc2UgLmRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDc1dnc7XG4gIG1hcmdpbjogMTAlIGF1dG8gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3VpdGNhc2UgLml0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5zdWl0Y2FzZSAuaXRlbXMgLmRkY29udGFpbmVyIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uc3VpdGNhc2UgLml0ZW1zIC5kZGNvbnRhaW5lcjpob3ZlciB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc3VpdGNhc2UgLml0ZW1zOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnN1aXRjYXNlIC5iYWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3VpdGNhc2UgLml0ZW1zID4gKiB7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnN1aXRjYXNlIC5pdGVtcyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi5zdWl0Y2FzZSAuZGRjb250YWluZXJnaG9zdCBpbWcge1xuICB3aWR0aDogMjV2dztcbn1cblxuLnN1aXRjYXNlIC5kcmFnVGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5zdWl0Y2FzZSAuaXRlbXMgPiAqIHtcbiAgICB3aWR0aDogMTAlO1xuICB9XG5cbiAgLnN1aXRjYXNlIC5kZGNvbnRhaW5lcmdob3N0IGltZyB7XG4gICAgd2lkdGg6IDEwdnc7XG4gIH1cbn1cbi5pbmZvTGluayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNyU7XG4gIGxlZnQ6IDE1JTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UsIG1hcmdpbi10b3AgMC42cyBlYXNlO1xufVxuLmluZm9MaW5rIC5pbmZvVGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjAlO1xuICByaWdodDogYXV0bztcbiAgbWFyZ2luOiA1MHB4O1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG4uaW5mb0xpbms6aG92ZXIgLmluZm9UZXh0IHtcbiAgcGFkZGluZzogOHB4O1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcbn1cblxuYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5saW5rLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saW5rKTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5saW5rLWJ1dHRvbjpob3ZlciwgLmxpbmstYnV0dG9uOmZvY3VzIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpbmstaGlnaGxpZ2h0ZWQpO1xufVxuLmxpbmstYnV0dG9uIC5yZWRpcmVjdCB7XG4gIHdpZHRoOiA3NXZ3O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5pY29uLXNjcm9sbCxcbi5pY29uLXNjcm9sbDpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLmljb24tc2Nyb2xsIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogODRweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICB0b3A6IDg1JTtcbiAgbWFyZ2luLXRvcDogLTM1cHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWNvbG9yLXRpdGxlKTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmljb24tc2Nyb2xsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRpdGxlKTtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gIHRvcDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tbmFtZTogc2Nyb2xsO1xufVxuXG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQ2cHgpO1xuICB9XG59XG4ucHV6emxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnB1enpsZV9fc29sdmVkLWJvYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucHV6emxlX19zb2x2ZWQtYm9hcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5wdXp6bGVfX3NvbHZlZC1ib2FyZCxcbi5wdXp6bGVfX3NodWZmbGVkLWJvYXJkIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiA0MDBweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG4gIGJvcmRlci13aWR0aDogMXB4IDAgMCAxcHg7XG59XG5cbi5wdXp6bGUgbGkge1xuICB3aWR0aDogOTlweDtcbiAgaGVpZ2h0OiA5OXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcbiAgYm9yZGVyLXdpZHRoOiAwIDFweCAxcHggMDtcbn1cblxuLnB1enpsZSBsaTplbXB0eTpob3ZlcjpiZWZvcmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ucHV6emxlIGxpIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IGdyYWI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLCBib3gtc2hhZG93IDIwMG1zIGVhc2U7XG59XG5cbi5wdXp6bGUgbGkgaW1nOmhvdmVyIHtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbi5zbW9raW5nUGl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNtb2tpbmdQaXQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbW9rZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IC0xNy41cHg7XG4gIG1hcmdpbi10b3A6IDE3LjVweDtcbiAgYm90dG9tOiA4OCU7XG4gIGxlZnQ6IDg5LjUlO1xufVxuXG4uc21va2Ugc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIGJvcmRlcjogMzVweCBzb2xpZCAjNGI0YjRiO1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBsZWZ0OiAtMTRweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xufVxuXG5Aa2V5ZnJhbWVzIHNtb2tlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yKSB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgMSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpIHRyYW5zbGF0ZSgtMjBweCwgLTIwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoLTIwMHB4LCAtNTBweCk7XG4gIH1cbn1cbi5zbW9rZSAuczAge1xuICBhbmltYXRpb246IHNtb2tlIDEwcyAwcyBpbmZpbml0ZTtcbn1cblxuLnNtb2tlIC5zMSB7XG4gIGFuaW1hdGlvbjogc21va2UgMTBzIDFzIGluZmluaXRlO1xufVxuXG4uc21va2UgLnMyIHtcbiAgYW5pbWF0aW9uOiBzbW9rZSAxMHMgMnMgaW5maW5pdGU7XG59XG5cbi5zbW9rZSAuczMge1xuICBhbmltYXRpb246IHNtb2tlIDEwcyAzcyBpbmZpbml0ZTtcbn1cblxuLnNtb2tlIC5zNCB7XG4gIGFuaW1hdGlvbjogc21va2UgMTBzIDRzIGluZmluaXRlO1xufVxuXG4uc21va2UgLnM1IHtcbiAgYW5pbWF0aW9uOiBzbW9rZSAxMHMgNXMgaW5maW5pdGU7XG59XG5cbi5zbW9rZSAuczYge1xuICBhbmltYXRpb246IHNtb2tlIDEwcyA2cyBpbmZpbml0ZTtcbn1cblxuLnNtb2tlIC5zNyB7XG4gIGFuaW1hdGlvbjogc21va2UgMTBzIDdzIGluZmluaXRlO1xufVxuXG4uc21va2UgLnM4IHtcbiAgYW5pbWF0aW9uOiBzbW9rZSAxMHMgOHMgaW5maW5pdGU7XG59XG5cbi5zbW9rZSAuczkge1xuICBhbmltYXRpb246IHNtb2tlIDEwcyA5cyBpbmZpbml0ZTtcbn1cblxuLmNoYXB0ZXJfcGljdHVyZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZpbHRlcjogc2F0dXJhdGUoMC44KTtcbiAgb3BhY2l0eTogMC45O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5jaGFwdGVyX3BpY3R1cmU6aG92ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDExMCUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uY2hhcHRlcl9waWN0dXJlOmhvdmVyIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMTtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByaW1hcnkge1xuICB3aWR0aDogNjYlO1xufVxuXG4uc2Vjb25kIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnRoaXJkIHtcbiAgd2lkdGg6IDMzJTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYXZhdGFyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJnIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG52aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHZhcigtLWNvbG9yLXRleHQpO1xufVxuXG4uY2hhcHRlcl92aWRlbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvdXJ0aCB7XG4gIGZsZXg6IDEgMjUlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi50aGVhdGVyIHtcbiAgZmxleDogMSBhdXRvO1xuICBtYXJnaW46IDAgMTclO1xuICBvcmRlcjogOTk7XG59XG5cbi5ib3gge1xuICB3aWR0aDogODAlO1xufVxuLmJveC5hdmF0YXIge1xuICBmbGV4OiAxIDI1JTtcbiAgcGFkZGluZzogNXB4O1xufVxuLmJveC5hdmF0YXI6aG92ZXIgcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRpdGxlKTtcbn1cbi5ib3guYXZhdGFyLnNlY29uZCB7XG4gIGZsZXg6IDEgNTAlO1xufVxuLmJveC5hdmF0YXIgcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiA4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYm94IHAge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCBsaWdodGdyZXk7XG59XG5cbi5jb2x1bW4ge1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXZlYWwgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBtb3ZlLXRleHQgMC4xcyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBtb3ZlLXRleHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIHJpZ2h0OiAyJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgei1pbmRleDogNjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiA4cHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWluZGVudDogLTk5OWVtO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYTpob3Zlcixcbi5uYXZpZ2F0aW9uLS1pdGVtIGE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGE6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2U7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGEuYWN0aXZlOjphZnRlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRpdGxlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpdGxlIGgxIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtZmFtaWx5OiBMaW5vbHNjaHJpZnRIZWF2eSwgYXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5wYXJhbGxheCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGVyc3BlY3RpdmU6IDMwMHB4O1xufVxuLnBhcmFsbGF4X19ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cbi5wYXJhbGxheF9faGVhZGVyIHtcbiAgei1pbmRleDogOTk7XG59XG4ucGFyYWxsYXhfX2xheWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuLnBhcmFsbGF4X19sYXllci0tZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWig5MHB4KSBzY2FsZSgwLjcpO1xuICB6LWluZGV4OiAxO1xuICBhbGlnbi1jb250ZW50OiBiYXNlbGluZTtcbn1cbi5wYXJhbGxheF9fbGF5ZXItLWJhc2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHotaW5kZXg6IDQ7XG4gIGJhY2tncm91bmQ6IDUwJSA1MCUvY292ZXI7XG59XG4ucGFyYWxsYXhfX2xheWVyLS1iYWNrIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDBweCkgc2NhbGUoMik7XG4gIHotaW5kZXg6IDM7XG4gIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xufVxuLnBhcmFsbGF4X19sYXllci0tZGVlcCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNjAwcHgpIHNjYWxlKDMpO1xuICB6LWluZGV4OiAyO1xuICBoZWlnaHQ6IDUwdmg7XG59XG5cbi5iYWNrIHtcbiAgei1pbmRleDogLTE7XG59XG5cbi5hY3RpdmUge1xuICB6LWluZGV4OiAyNTtcbn1cblxuLmZhZGUtaW4tc2NhbGUge1xuICBhbmltYXRpb246IGZhZGUtaW4tc2NhbGUtZG93biA1cyBlYXNlLW91dCBib3RoO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tc2NhbGUtZG93biB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpIHRyYW5zbGF0ZVkoLTE1cHgpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxNiU7XG4gICAgZmlsdGVyOiBibHVyKDVweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XG4gIH1cbn0iLCIuZGFpbHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZmxleDogMSAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuXG4gIC5pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gICAgLmRkY29udGFpbmVyOmhvdmVyIHtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgIC5pdGVtIHAge1xuICAgICAgbGV0dGVyLXNwYWNpbmc6MC4xZW07XG4gICAgICBjdXJzb3I6IGdyYWI7XG4gICAgfVxuICB9XG5cbiAgLmNvbXBvbmVudF9ib3gge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDAgYXV0byAwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LWhlaWdodDogNjZ2aDtcbiAgfVxuXG4gICAuc2hvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5kYWlseSAuY29tcG9uZW50X2JveCB7XG4gICAgaGVpZ2h0OiA0NXZoO1xuICB9XG59IiwiJGNvbG9yLWJnOiByZ2JhKDI0MCwgMjMwLCAyMjAsIC4zKTtcbiRjb2xvci1ib3JkZXI6ICM1NTU7XG5cbi5nYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA4MCU7XG5cbiAgLnN0YXR1cyB7IFxuICAgIGZsZXg6IDEgMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cblxuICAuYm9hcmQgeyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcblxuICAgIC5zcXVhcmUge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRjb2xvci1ib3JkZXI7XG5cbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IHVuc2V0O1xuICAgICAgfVxuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnO1xuICAgICAgfVxuICBcbiAgICAgICY6bnRoLWNoaWxkKC1uICsgMykge1xuICAgICAgICBib3JkZXItdG9wOiB1bnNldDtcbiAgICAgIH1cbiAgXG4gICAgICAmOm50aC1sYXN0LWNoaWxkKC1uICsgMykge1xuICAgICAgICBib3JkZXItYm90dG9tOiB1bnNldDtcbiAgICAgIH1cbiAgXG4gICAgICAmOm50aC1jaGlsZCgzbikge1xuICAgICAgICBib3JkZXItcmlnaHQ6IHVuc2V0O1xuICAgICAgfVxuICBcbiAgICAgICY6bnRoLWNoaWxkKDNuICsgMSkge1xuICAgICAgICBib3JkZXItbGVmdDogdW5zZXQ7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gIH1cblxuICAucmVzdWx0IHsgXG4gICAgZmxleDogMSAxMDAlO1xuICB9XG59IiwiLnN1aXRjYXNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdWl0Y2FzZSAuZGVzY3JpcHRpb24ge1xuICB3aWR0aDogNzV2dztcbiAgbWFyZ2luOiAxMCUgYXV0byAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdWl0Y2FzZSAuaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnN1aXRjYXNlIC5pdGVtcyAuZGRjb250YWluZXIge1xuICBvcGFjaXR5OiAuNTtcbn1cblxuLnN1aXRjYXNlIC5pdGVtcyAuZGRjb250YWluZXI6aG92ZXIge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnN1aXRjYXNlIC5pdGVtczpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zdWl0Y2FzZSAuYmFnIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN1aXRjYXNlIC5pdGVtcyA+ICoge1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zdWl0Y2FzZSAuaXRlbXMgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4uc3VpdGNhc2UgLmRkY29udGFpbmVyZ2hvc3QgaW1nIHtcbiAgd2lkdGg6IDI1dnc7XG59XG5cbi5zdWl0Y2FzZSAuZHJhZ1RleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuc3VpdGNhc2UgLml0ZW1zID4gKiB7XG4gICAgd2lkdGg6IDEwJTtcbiAgfVxuXG4gIC5zdWl0Y2FzZSAuZGRjb250YWluZXJnaG9zdCBpbWcge1xuICAgIHdpZHRoOiAxMHZ3O1xuICB9XG59IiwiLmluZm9MaW5rIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM3JTtcbiAgbGVmdDogMTUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC42cyBlYXNlLCBtYXJnaW4tdG9wIC42cyBlYXNlO1xuXG4gIC5pbmZvVGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTIwJTtcbiAgICByaWdodDogYXV0bztcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDExO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG5cbiAgJjpob3ZlciAuaW5mb1RleHQge1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2U7XG4gIH1cbn1cblxuYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59IiwiLmxpbmstYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpbmspO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lO1xuICBcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWxpbmstaGlnaGxpZ2h0ZWQpO1xuICB9XG5cbiAgLnJlZGlyZWN0IHtcbiAgICB3aWR0aDogNzV2dztcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn0iLCJcbi5pY29uLXNjcm9sbCxcbi5pY29uLXNjcm9sbDpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbn1cbi5pY29uLXNjcm9sbCB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDg0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgdG9wOiA4NSU7XG4gIG1hcmdpbi10b3A6IC0zNXB4O1xuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1jb2xvci10aXRsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4uaWNvbi1zY3JvbGw6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRpdGxlKTtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gIHRvcDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tbmFtZTogc2Nyb2xsO1xufVxuQGtleWZyYW1lcyBzY3JvbGwge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0NnB4KTtcbiAgfVxufSIsIi5wdXp6bGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHV6emxlX19zb2x2ZWQtYm9hcmR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnB1enpsZV9fc29sdmVkLWJvYXJkOmJlZm9yZXtcbiAgY29udGVudDogJyc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4ucHV6emxlX19zb2x2ZWQtYm9hcmQsXG4ucHV6emxlX19zaHVmZmxlZC1ib2FyZHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHdpZHRoOiA0MDBweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEREQ7XG4gIGJvcmRlci13aWR0aDogMXB4IDAgMCAxcHg7XG59XG5cbi5wdXp6bGUgbGl7XG4gIHdpZHRoOiA5OXB4O1xuICBoZWlnaHQ6IDk5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgYm9yZGVyOiAxcHggc29saWQgI0RERDtcbiAgYm9yZGVyLXdpZHRoOiAwIDFweCAxcHggMDtcbn1cblxuLnB1enpsZSBsaTplbXB0eTpob3ZlcjpiZWZvcmV7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5wdXp6bGUgbGkgaW1ne1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBncmFiO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZSwgYm94LXNoYWRvdyAyMDBtcyBlYXNlO1xufVxuXG4ucHV6emxlIGxpIGltZzpob3ZlcntcbiAgei1pbmRleDogMjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG59IiwiLnNtb2tpbmdQaXQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc21va2luZ1BpdCBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNtb2tlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTE3LjVweDtcbiAgbWFyZ2luLXRvcDogMTcuNXB4O1xuICBib3R0b206IDg4JTtcbiAgbGVmdDogODkuNSU7XG59XG5cbi5zbW9rZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMzVweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgYm9yZGVyOiAzNXB4IHNvbGlkICM0YjRiNGI7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGxlZnQ6IC0xNHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMik7XG59XG5cbkBrZXlmcmFtZXMgc21va2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpIHRyYW5zbGF0ZSgwLCAwKVxuICB9XG5cbiAgMSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpIHRyYW5zbGF0ZSgtMjBweCwgLTIwcHgpXG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKC0yMDBweCwgLTUwcHgpXG4gIH1cbn1cblxuLnNtb2tlIC5zMCB7XG4gIGFuaW1hdGlvbjogc21va2UgMTBzIDBzIGluZmluaXRlXG59XG5cbi5zbW9rZSAuczEge1xuICBhbmltYXRpb246IHNtb2tlIDEwcyAxcyBpbmZpbml0ZVxufVxuXG4uc21va2UgLnMyIHtcbiAgYW5pbWF0aW9uOiBzbW9rZSAxMHMgMnMgaW5maW5pdGVcbn1cblxuLnNtb2tlIC5zMyB7XG4gIGFuaW1hdGlvbjogc21va2UgMTBzIDNzIGluZmluaXRlXG59XG5cbi5zbW9rZSAuczQge1xuICBhbmltYXRpb246IHNtb2tlIDEwcyA0cyBpbmZpbml0ZVxufVxuXG4uc21va2UgLnM1IHtcbiAgYW5pbWF0aW9uOiBzbW9rZSAxMHMgNXMgaW5maW5pdGVcbn1cblxuLnNtb2tlIC5zNiB7XG4gIGFuaW1hdGlvbjogc21va2UgMTBzIDZzIGluZmluaXRlXG59XG5cbi5zbW9rZSAuczcge1xuICBhbmltYXRpb246IHNtb2tlIDEwcyA3cyBpbmZpbml0ZVxufVxuXG4uc21va2UgLnM4IHtcbiAgYW5pbWF0aW9uOiBzbW9rZSAxMHMgOHMgaW5maW5pdGVcbn1cblxuLnNtb2tlIC5zOSB7XG4gIGFuaW1hdGlvbjogc21va2UgMTBzIDlzIGluZmluaXRlXG59XG4iLCIuY2hhcHRlcl9waWN0dXJlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmlsdGVyOiBzYXR1cmF0ZSguOCk7XG4gIG9wYWNpdHk6IC45O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41MHM7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNTBzO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMTAlKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgXG4gICAgLm92ZXJsYXkge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICBib3R0b206IDA7IFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgb3BhY2l0eTowO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByaW1hcnkge1xuICB3aWR0aDogNjYlO1xufVxuXG4uc2Vjb25kIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnRoaXJkIHtcbiAgd2lkdGg6IDMzJTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYXZhdGFyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmJnIHtcbiAgb3BhY2l0eTogMC4zO1xufSIsInZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggdmFyKC0tY29sb3ItdGV4dCk7XG59XG5cbi5jaGFwdGVyX3ZpZGVvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm91cnRoIHtcbiAgZmxleDogMSAyNSU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnRoZWF0ZXIge1xuICBmbGV4OiAxIGF1dG87XG4gIG1hcmdpbjogMCAxNyU7XG4gIG9yZGVyOiA5OTtcbn0iLCIuYm94IHtcbiAgd2lkdGg6IDgwJTtcblxuICAmLmF2YXRhciB7XG4gICAgZmxleDogMSAyNSU7XG4gICAgcGFkZGluZzogNXB4O1xuXG4gICAgJjpob3ZlciBwIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRpdGxlKTtcbiAgICB9XG5cbiAgICAmLnNlY29uZCB7XG4gICAgICBmbGV4OiAxIDUwJTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICBtYXJnaW46IDhweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNztcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgcCB7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggbGlnaHRncmV5O1xuICB9XG59XG5cbi5jb2x1bW4ge1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXZlYWwgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy9ib3R0b206IC0xZW07XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogbW92ZS10ZXh0IDAuMXMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgbW92ZS10ZXh0IHtcbiAgMCUge1xuICAgICAgLy9ib3R0b206IC0wLjJlbTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gIDUwJSB7XG4gICAgICAvL2JvdHRvbTogMC4yZW07XG4gIH1cblxuICAxMDAlIHtcbiAgICAgIC8vYm90dG9tOiAwO1xuICAgICAgb3BhY2l0eTogMTtcbiAgfVxufSIsImZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xuICBjb2xvcjogd2hpdGU7XG59IiwiLm5hdmlnYXRpb24ge1xuXHRyaWdodDogMiU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA1MCU7XG5cdHotaW5kZXg6IDY7XG5cblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0ge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDk5OTlweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHR3aWR0aDogMjBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMpO1xuXHRtYXJnaW46IDhweCAwO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCB3aGl0ZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGxlZnQ6IDA7XG5cdG91dGxpbmU6IG5vbmU7XG5cdHRleHQtaW5kZW50OiAtOTk5ZW07XG5cdHRvcDogMDtcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG5cdHdpZHRoOiAxMDAlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGE6Zm9jdXMge1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhOmhvdmVyLFxuLm5hdmlnYXRpb24tLWl0ZW0gYTpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYTo6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDA7XG5cdGhlaWdodDogMDtcblx0bGVmdDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2U7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGEuYWN0aXZlOjphZnRlciB7XG5cdGhlaWdodDogMTAwJTtcbn0iLCIudGl0bGUge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGl0bGUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaDEge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDNlbTtcbiAgZm9udC1mYW1pbHk6IExpbm9sc2NocmlmdEhlYXZ5LGFyaWFsLHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbn0iLCIucGFyYWxsYXgge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBlcnNwZWN0aXZlOiAzMDBweDtcblxuICAmX19ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgfVxuXG4gICZfX2hlYWRlciB7XG4gICAgei1pbmRleDogOTk7XG4gIH1cblxuICAmX19sYXllciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXG4gICAgJi0tZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooOTBweCkgc2NhbGUoLjcpO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xuICAgIH1cblxuICAgICYtLWJhc2Uge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgei1pbmRleDogNDtcbiAgICAgIGJhY2tncm91bmQ6IDUwJSA1MCUgLyBjb3ZlcjtcbiAgICB9XG5cbiAgICAmLS1iYWNrIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwcHgpIHNjYWxlKDIpO1xuICAgICAgei1pbmRleDogMztcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xuICAgIH1cblxuICAgICYtLWRlZXAge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC02MDBweCkgc2NhbGUoMyk7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgIH1cbiAgfVxufVxuXG4uYmFjayB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYWN0aXZlIHtcbiAgei1pbmRleDogMjU7XG59XG5cbi5mYWRlLWluLXNjYWxlIHtcbiAgYW5pbWF0aW9uOiBmYWRlLWluLXNjYWxlLWRvd24gNXMgZWFzZS1vdXQgYm90aDtcbn1cblxuIEBrZXlmcmFtZXMgZmFkZS1pbi1zY2FsZS1kb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSkgdHJhbnNsYXRlWSgtMTVweCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDE2JTtcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KSBcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgIGZpbHRlcjogYmx1cigwKSBcbiAgfVxufVxuIl19 */", '', '']]

/***/ }),

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!./styles.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/home/gm/Development/playground/demokratieerleben2020/node_modules/postcss-loader/src??embedded!/home/gm/Development/playground/demokratieerleben2020/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!./styles.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2FwcHMvZGVtb2wvc3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBIiwiZmlsZSI6ImFwcHMvZGVtb2wvc3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuIl19 */", '', '']]

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************************************************************/
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
/*!*********************************************************************************************************!*\
  !*** multi ./styles.scss /home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/ui.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/gm/Development/playground/demokratieerleben2020/apps/demol/src/styles.scss */"./styles.scss");
module.exports = __webpack_require__(/*! /home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/ui.scss */"../../../libs/ui/src/lib/ui.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map
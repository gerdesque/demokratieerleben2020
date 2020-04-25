(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../../libs/ui/src/lib/chapter/chapter.scss":
/*!************************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/gerdesque/libs/ui/src/lib/chapter/chapter.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../../../node_modules/postcss-loader/src??embedded!../../../../../node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!./chapter.scss */ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!../../../libs/ui/src/lib/chapter/chapter.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/ui/src/lib/nav/nav.scss":
/*!****************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/gerdesque/libs/ui/src/lib/nav/nav.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../../../node_modules/postcss-loader/src??embedded!../../../../../node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!./nav.scss */ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!../../../libs/ui/src/lib/nav/nav.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/ui/src/lib/title/title.scss":
/*!********************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/gerdesque/libs/ui/src/lib/title/title.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../../../node_modules/postcss-loader/src??embedded!../../../../../node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!./title.scss */ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!../../../libs/ui/src/lib/title/title.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!../../../libs/ui/src/lib/chapter/chapter.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/gerdesque/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/home/gm/Development/playground/demokratieerleben2020/gerdesque/node_modules/postcss-loader/src??embedded!/home/gm/Development/playground/demokratieerleben2020/gerdesque/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!/home/gm/Development/playground/demokratieerleben2020/gerdesque/libs/ui/src/lib/chapter/chapter.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".parallax {\n  height: 500px;\n  /* fallback for older browsers */\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  perspective: 300px;\n}\n\n.parallax__group {\n  position: relative;\n  height: 500px;\n  /* fallback for older browsers */\n  height: 100vh;\n  transform-style: preserve-3d;\n}\n\n.parallax__layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: 50% 50%/cover;\n}\n\n.parallax__layer--fore {\n  transform: translateZ(90px) scale(0.7);\n  z-index: 1;\n}\n\n.parallax__layer--base {\n  transform: translateZ(0);\n  z-index: 4;\n}\n\n.parallax__layer--back {\n  transform: translateZ(-300px) scale(2);\n  z-index: 3;\n}\n\n.parallax__layer--deep {\n  transform: translateZ(-600px) scale(3);\n  z-index: 2;\n}\n\n.box {\n  display: flex;\n  text-align: center;\n  width: 75%;\n  margin: 30% auto 0;\n  max-width: 1200px;\n  padding: 0 15px;\n}\n\n.column {\n  flex-direction: column;\n}\n\n#header .parallax__layer--base {\n  background-image: url(header.webp);\n  box-shadow: 0 0 8px 8px #dcd5cc inset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2dlcmRlc3F1ZS9saWJzL3VpL3NyYy9saWIvY2hhcHRlci9jaGFwdGVyLnNjc3MiLCJsaWJzL3VpL3NyYy9saWIvY2hhcHRlci9jaGFwdGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUVFLHNDQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBRUUsd0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFFRSxzQ0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUVFLHNDQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7RUFDQSxxQ0FBQTtBQ0NGIiwiZmlsZSI6ImxpYnMvdWkvc3JjL2xpYi9jaGFwdGVyL2NoYXB0ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJhbGxheCB7XG4gIGhlaWdodDogNTAwcHg7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGRlciBicm93c2VycyAqL1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBlcnNwZWN0aXZlOiAzMDBweDtcbn1cblxuLnBhcmFsbGF4X19ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgLyogZmFsbGJhY2sgZm9yIG9sZGVyIGJyb3dzZXJzICovXG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi5wYXJhbGxheF9fbGF5ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogNTAlIDUwJSAvIGNvdmVyO1xufVxuXG4ucGFyYWxsYXhfX2xheWVyLS1mb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooOTBweCkgc2NhbGUoLjcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooOTBweCkgc2NhbGUoLjcpO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucGFyYWxsYXhfX2xheWVyLS1iYXNlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgei1pbmRleDogNDtcbn1cblxuLnBhcmFsbGF4X19sYXllci0tYmFjayB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDBweCkgc2NhbGUoMik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwcHgpIHNjYWxlKDIpO1xuICB6LWluZGV4OiAzO1xufVxuXG4ucGFyYWxsYXhfX2xheWVyLS1kZWVwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTYwMHB4KSBzY2FsZSgzKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC02MDBweCkgc2NhbGUoMyk7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMzAlIGF1dG8gMDtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLmNvbHVtbiB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNoZWFkZXIgLnBhcmFsbGF4X19sYXllci0tYmFzZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChoZWFkZXIud2VicCk7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggOHB4ICNkY2Q1Y2MgaW5zZXQ7XG59IiwiLnBhcmFsbGF4IHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgLyogZmFsbGJhY2sgZm9yIG9sZGVyIGJyb3dzZXJzICovXG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGVyc3BlY3RpdmU6IDMwMHB4O1xufVxuXG4ucGFyYWxsYXhfX2dyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICAvKiBmYWxsYmFjayBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLnBhcmFsbGF4X19sYXllciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiA1MCUgNTAlL2NvdmVyO1xufVxuXG4ucGFyYWxsYXhfX2xheWVyLS1mb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooOTBweCkgc2NhbGUoMC43KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDkwcHgpIHNjYWxlKDAuNyk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wYXJhbGxheF9fbGF5ZXItLWJhc2Uge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB6LWluZGV4OiA0O1xufVxuXG4ucGFyYWxsYXhfX2xheWVyLS1iYWNrIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMHB4KSBzY2FsZSgyKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDBweCkgc2NhbGUoMik7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5wYXJhbGxheF9fbGF5ZXItLWRlZXAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtNjAwcHgpIHNjYWxlKDMpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTYwMHB4KSBzY2FsZSgzKTtcbiAgei1pbmRleDogMjtcbn1cblxuLmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAzMCUgYXV0byAwO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uY29sdW1uIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2hlYWRlciAucGFyYWxsYXhfX2xheWVyLS1iYXNlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGhlYWRlci53ZWJwKTtcbiAgYm94LXNoYWRvdzogMCAwIDhweCA4cHggI2RjZDVjYyBpbnNldDtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!../../../libs/ui/src/lib/nav/nav.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/gerdesque/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/home/gm/Development/playground/demokratieerleben2020/gerdesque/node_modules/postcss-loader/src??embedded!/home/gm/Development/playground/demokratieerleben2020/gerdesque/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!/home/gm/Development/playground/demokratieerleben2020/gerdesque/libs/ui/src/lib/nav/nav.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".navigation {\n  left: 2%;\n  position: absolute;\n  top: 50%;\n  z-index: 6;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  list-style-type: none;\n}\n\n.navigation--item {\n  cursor: pointer;\n  border-radius: 9999px;\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 8px 0;\n  position: relative;\n  display: block;\n}\n\n.navigation--item a {\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 2px white;\n  cursor: pointer;\n  height: 100%;\n  left: 0;\n  outline: none;\n  text-indent: -999em;\n  top: 0;\n  transition: background 0.3s ease;\n  width: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n\n.navigation--item a:focus {\n  outline: none;\n}\n\n.navigation--item a:hover,\n.navigation--item a:focus {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.navigation--item a::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  height: 0;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  transition: height 0.3s ease;\n}\n\n.navigation--item a.active::after {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2dlcmRlc3F1ZS9saWJzL3VpL3NyYy9saWIvbmF2L25hdi5zY3NzIiwibGlicy91aS9zcmMvbGliL25hdi9uYXYuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDQUQ7O0FER0E7RUFDQyxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQUQ7O0FER0E7RUFDQywwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxNQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FEOztBREdBO0VBQ0MsYUFBQTtBQ0FEOztBREdBOztFQUVDLG9DQUFBO0FDQUQ7O0FER0E7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0FEOztBREdBO0VBQ0MsWUFBQTtBQ0FEIiwiZmlsZSI6ImxpYnMvdWkvc3JjL2xpYi9uYXYvbmF2LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbiB7XG5cdGxlZnQ6IDIlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlO1xuXHR6LWluZGV4OiA2O1xuXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRib3JkZXItcmFkaXVzOiA5OTk5cHg7XG5cdGhlaWdodDogMjBweDtcblx0d2lkdGg6IDIwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcblx0bWFyZ2luOiA4cHggMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggd2hpdGU7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0aGVpZ2h0OiAxMDAlO1xuXHRsZWZ0OiAwO1xuXHRvdXRsaW5lOiBub25lO1xuXHR0ZXh0LWluZGVudDogLTk5OWVtO1xuXHR0b3A6IDA7XG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuXHR3aWR0aDogMTAwJTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhOmZvY3VzIHtcblx0b3V0bGluZTogbm9uZTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYTpob3Zlcixcbi5uYXZpZ2F0aW9uLS1pdGVtIGE6Zm9jdXMge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGE6OmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAwO1xuXHRoZWlnaHQ6IDA7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHR0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhLmFjdGl2ZTo6YWZ0ZXIge1xuXHRoZWlnaHQ6IDEwMCU7XG59IiwiLm5hdmlnYXRpb24ge1xuICBsZWZ0OiAyJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgei1pbmRleDogNjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgbWFyZ2luOiA4cHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWluZGVudDogLTk5OWVtO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYTpob3Zlcixcbi5uYXZpZ2F0aW9uLS1pdGVtIGE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGE6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2U7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGEuYWN0aXZlOjphZnRlciB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!../../../libs/ui/src/lib/title/title.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/gerdesque/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/home/gm/Development/playground/demokratieerleben2020/gerdesque/node_modules/postcss-loader/src??embedded!/home/gm/Development/playground/demokratieerleben2020/gerdesque/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!/home/gm/Development/playground/demokratieerleben2020/gerdesque/libs/ui/src/lib/title/title.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@font-face {\n  font-family: \"LinolschriftHeavy\";\n  font-display: swap;\n  src: url('Linolschrift_Heavy.ttf') format(\"truetype\");\n}\n.title {\n  color: chocolate;\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  top: 33%;\n  transform: translate(-50%, -50%);\n}\n.title h1 {\n  line-height: 1.2;\n  font-size: 3em;\n  font-family: LinolschriftHeavy, arial, sans-serif;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2dlcmRlc3F1ZS9saWJzL3VpL3NyYy9saWIvdGl0bGUvdGl0bGUuc2NzcyIsImxpYnMvdWkvc3JjL2xpYi90aXRsZS90aXRsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0FDQ0Y7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUNBRjtBREdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaURBQUE7RUFDQSxtQkFBQTtBQ0FGIiwiZmlsZSI6ImxpYnMvdWkvc3JjL2xpYi90aXRsZS90aXRsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTGlub2xzY2hyaWZ0SGVhdnknO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKCcuL0xpbm9sc2NocmlmdF9IZWF2eS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiBjaG9jb2xhdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMzMlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLnRpdGxlIGgxIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtZmFtaWx5OiBMaW5vbHNjaHJpZnRIZWF2eSxhcmlhbCxzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJMaW5vbHNjaHJpZnRIZWF2eVwiO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKFwiLi9MaW5vbHNjaHJpZnRfSGVhdnkudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuLnRpdGxlIHtcbiAgY29sb3I6IGNob2NvbGF0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAzMyU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4udGl0bGUgaDEge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDNlbTtcbiAgZm9udC1mYW1pbHk6IExpbm9sc2NocmlmdEhlYXZ5LCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!./styles.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/gerdesque/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/home/gm/Development/playground/demokratieerleben2020/gerdesque/node_modules/postcss-loader/src??embedded!/home/gm/Development/playground/demokratieerleben2020/gerdesque/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!./styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2dlcmRlc3F1ZS9hcHBzL2RlbW9sL3NyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQSIsImZpbGUiOiJhcHBzL2RlbW9sL3NyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbiJdfQ== */", '', '']]

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!******************************************************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/gerdesque/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \******************************************************************************************************************************************/
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
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./styles.scss /home/gm/Development/playground/demokratieerleben2020/gerdesque/libs/ui/src/lib/title/title.scss /home/gm/Development/playground/demokratieerleben2020/gerdesque/libs/ui/src/lib/nav/nav.scss /home/gm/Development/playground/demokratieerleben2020/gerdesque/libs/ui/src/lib/chapter/chapter.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/gm/Development/playground/demokratieerleben2020/gerdesque/apps/demol/src/styles.scss */"./styles.scss");
__webpack_require__(/*! /home/gm/Development/playground/demokratieerleben2020/gerdesque/libs/ui/src/lib/title/title.scss */"../../../libs/ui/src/lib/title/title.scss");
__webpack_require__(/*! /home/gm/Development/playground/demokratieerleben2020/gerdesque/libs/ui/src/lib/nav/nav.scss */"../../../libs/ui/src/lib/nav/nav.scss");
module.exports = __webpack_require__(/*! /home/gm/Development/playground/demokratieerleben2020/gerdesque/libs/ui/src/lib/chapter/chapter.scss */"../../../libs/ui/src/lib/chapter/chapter.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map
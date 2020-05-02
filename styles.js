(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../../libs/ui/src/lib/chapter/chapter.scss":
/*!**************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/chapter/chapter.scss ***!
  \**************************************************************************************************/
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
/*!******************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/nav/nav.scss ***!
  \******************************************************************************************/
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
/*!**********************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/title/title.scss ***!
  \**********************************************************************************************/
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
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/home/gm/Development/playground/demokratieerleben2020/node_modules/postcss-loader/src??embedded!/home/gm/Development/playground/demokratieerleben2020/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!/home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/chapter/chapter.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".parallax {\n  height: 500px;\n  /* fallback for older browsers */\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  perspective: 300px;\n}\n\n.parallax__group {\n  position: relative;\n  height: 500px;\n  /* fallback for older browsers */\n  height: 100vh;\n  transform-style: preserve-3d;\n}\n\n.parallax__layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: 50% 50%/cover;\n}\n\n.parallax__layer--fore {\n  transform: translateZ(90px) scale(0.7);\n  z-index: 1;\n}\n\n.parallax__layer--base {\n  transform: translateZ(0);\n  z-index: 4;\n}\n\n.parallax__layer--back {\n  transform: translateZ(-300px) scale(2);\n  z-index: 3;\n}\n\n.parallax__layer--deep {\n  transform: translateZ(-600px) scale(3);\n  z-index: 2;\n}\n\n.box {\n  display: flex;\n  text-align: center;\n  width: 75%;\n  margin: 30% auto 0;\n  max-width: 1200px;\n  padding: 0 15px;\n}\n\n.column {\n  flex-direction: column;\n}\n\n#header .parallax__layer--base {\n  background-image: url(header.webp);\n  box-shadow: 0 0 8px 8px #dcd5cc inset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2xpYnMvdWkvc3JjL2xpYi9jaGFwdGVyL2NoYXB0ZXIuc2NzcyIsImxpYnMvdWkvc3JjL2xpYi9jaGFwdGVyL2NoYXB0ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBRUUsc0NBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFFRSx3QkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUVFLHNDQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBRUUsc0NBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtFQUNBLHFDQUFBO0FDQ0YiLCJmaWxlIjoibGlicy91aS9zcmMvbGliL2NoYXB0ZXIvY2hhcHRlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmFsbGF4IHtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgLyogZmFsbGJhY2sgZm9yIG9sZGVyIGJyb3dzZXJzICovXG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGVyc3BlY3RpdmU6IDMwMHB4O1xufVxuXG4ucGFyYWxsYXhfX2dyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICAvKiBmYWxsYmFjayBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLnBhcmFsbGF4X19sYXllciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiA1MCUgNTAlIC8gY292ZXI7XG59XG5cbi5wYXJhbGxheF9fbGF5ZXItLWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig5MHB4KSBzY2FsZSguNyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWig5MHB4KSBzY2FsZSguNyk7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wYXJhbGxheF9fbGF5ZXItLWJhc2Uge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB6LWluZGV4OiA0O1xufVxuXG4ucGFyYWxsYXhfX2xheWVyLS1iYWNrIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMHB4KSBzY2FsZSgyKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDBweCkgc2NhbGUoMik7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5wYXJhbGxheF9fbGF5ZXItLWRlZXAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtNjAwcHgpIHNjYWxlKDMpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTYwMHB4KSBzY2FsZSgzKTtcbiAgei1pbmRleDogMjtcbn1cblxuLmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAzMCUgYXV0byAwO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uY29sdW1uIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2hlYWRlciAucGFyYWxsYXhfX2xheWVyLS1iYXNlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGhlYWRlci53ZWJwKTtcbiAgYm94LXNoYWRvdzogMCAwIDhweCA4cHggI2RjZDVjYyBpbnNldDtcbn0iLCIucGFyYWxsYXgge1xuICBoZWlnaHQ6IDUwMHB4O1xuICAvKiBmYWxsYmFjayBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwZXJzcGVjdGl2ZTogMzAwcHg7XG59XG5cbi5wYXJhbGxheF9fZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTAwcHg7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGRlciBicm93c2VycyAqL1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4ucGFyYWxsYXhfX2xheWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IDUwJSA1MCUvY292ZXI7XG59XG5cbi5wYXJhbGxheF9fbGF5ZXItLWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig5MHB4KSBzY2FsZSgwLjcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooOTBweCkgc2NhbGUoMC43KTtcbiAgei1pbmRleDogMTtcbn1cblxuLnBhcmFsbGF4X19sYXllci0tYmFzZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHotaW5kZXg6IDQ7XG59XG5cbi5wYXJhbGxheF9fbGF5ZXItLWJhY2sge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwcHgpIHNjYWxlKDIpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMHB4KSBzY2FsZSgyKTtcbiAgei1pbmRleDogMztcbn1cblxuLnBhcmFsbGF4X19sYXllci0tZGVlcCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC02MDBweCkgc2NhbGUoMyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNjAwcHgpIHNjYWxlKDMpO1xuICB6LWluZGV4OiAyO1xufVxuXG4uYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDMwJSBhdXRvIDA7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5jb2x1bW4ge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jaGVhZGVyIC5wYXJhbGxheF9fbGF5ZXItLWJhc2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaGVhZGVyLndlYnApO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDhweCAjZGNkNWNjIGluc2V0O1xufSJdfQ== */", '', '']]

/***/ }),

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!../../../libs/ui/src/lib/nav/nav.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/home/gm/Development/playground/demokratieerleben2020/node_modules/postcss-loader/src??embedded!/home/gm/Development/playground/demokratieerleben2020/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!/home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/nav/nav.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".navigation {\n  left: 2%;\n  position: absolute;\n  top: 50%;\n  z-index: 6;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  list-style-type: none;\n}\n\n.navigation--item {\n  cursor: pointer;\n  border-radius: 9999px;\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 8px 0;\n  position: relative;\n  display: block;\n}\n\n.navigation--item a {\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 2px white;\n  cursor: pointer;\n  height: 100%;\n  left: 0;\n  outline: none;\n  text-indent: -999em;\n  top: 0;\n  transition: background 0.3s ease;\n  width: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n\n.navigation--item a:focus {\n  outline: none;\n}\n\n.navigation--item a:hover,\n.navigation--item a:focus {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.navigation--item a::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  height: 0;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  transition: height 0.3s ease;\n}\n\n.navigation--item a.active::after {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2xpYnMvdWkvc3JjL2xpYi9uYXYvbmF2LnNjc3MiLCJsaWJzL3VpL3NyYy9saWIvbmF2L25hdi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNBRDs7QURHQTtFQUNDLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNBRDs7QURHQTtFQUNDLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUQ7O0FER0E7RUFDQyxhQUFBO0FDQUQ7O0FER0E7O0VBRUMsb0NBQUE7QUNBRDs7QURHQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDQUQ7O0FER0E7RUFDQyxZQUFBO0FDQUQiLCJmaWxlIjoibGlicy91aS9zcmMvbGliL25hdi9uYXYuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uIHtcblx0bGVmdDogMiU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA1MCU7XG5cdHotaW5kZXg6IDY7XG5cblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0ge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDk5OTlweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHR3aWR0aDogMjBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjMpO1xuXHRtYXJnaW46IDhweCAwO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCB3aGl0ZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGxlZnQ6IDA7XG5cdG91dGxpbmU6IG5vbmU7XG5cdHRleHQtaW5kZW50OiAtOTk5ZW07XG5cdHRvcDogMDtcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG5cdHdpZHRoOiAxMDAlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGE6Zm9jdXMge1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhOmhvdmVyLFxuLm5hdmlnYXRpb24tLWl0ZW0gYTpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYTo6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDA7XG5cdGhlaWdodDogMDtcblx0bGVmdDogMDtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2U7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGEuYWN0aXZlOjphZnRlciB7XG5cdGhlaWdodDogMTAwJTtcbn0iLCIubmF2aWdhdGlvbiB7XG4gIGxlZnQ6IDIlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiA2O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBtYXJnaW46IDhweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtaW5kZW50OiAtOTk5ZW07XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhOmhvdmVyLFxuLm5hdmlnYXRpb24tLWl0ZW0gYTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYS5hY3RpdmU6OmFmdGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */", '', '']]

/***/ }),

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!../../../libs/ui/src/lib/title/title.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/home/gm/Development/playground/demokratieerleben2020/node_modules/postcss-loader/src??embedded!/home/gm/Development/playground/demokratieerleben2020/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!/home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/title/title.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@font-face {\n  font-family: \"LinolschriftHeavy\";\n  font-display: swap;\n  src: url('Linolschrift_Heavy.ttf') format(\"truetype\");\n}\n.title {\n  color: chocolate;\n  text-align: center;\n  position: absolute;\n  left: 50%;\n  top: 33%;\n  transform: translate(-50%, -50%);\n}\n.title h1 {\n  line-height: 1.2;\n  font-size: 3em;\n  font-family: LinolschriftHeavy, arial, sans-serif;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2xpYnMvdWkvc3JjL2xpYi90aXRsZS90aXRsZS5zY3NzIiwibGlicy91aS9zcmMvbGliL3RpdGxlL3RpdGxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7QUNDRjtBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQ0FGO0FER0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0FDQUYiLCJmaWxlIjoibGlicy91aS9zcmMvbGliL3RpdGxlL3RpdGxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdMaW5vbHNjaHJpZnRIZWF2eSc7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoJy4vTGlub2xzY2hyaWZ0X0hlYXZ5LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6IGNob2NvbGF0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAzMyU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4udGl0bGUgaDEge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDNlbTtcbiAgZm9udC1mYW1pbHk6IExpbm9sc2NocmlmdEhlYXZ5LGFyaWFsLHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxpbm9sc2NocmlmdEhlYXZ5XCI7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoXCIuL0xpbm9sc2NocmlmdF9IZWF2eS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG4udGl0bGUge1xuICBjb2xvcjogY2hvY29sYXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDMzJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi50aXRsZSBoMSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LWZhbWlseTogTGlub2xzY2hyaWZ0SGVhdnksIGFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufSJdfQ== */", '', '']]

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
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./styles.scss /home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/title/title.scss /home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/nav/nav.scss /home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/chapter/chapter.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/gm/Development/playground/demokratieerleben2020/apps/demol/src/styles.scss */"./styles.scss");
__webpack_require__(/*! /home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/title/title.scss */"../../../libs/ui/src/lib/title/title.scss");
__webpack_require__(/*! /home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/nav/nav.scss */"../../../libs/ui/src/lib/nav/nav.scss");
module.exports = __webpack_require__(/*! /home/gm/Development/playground/demokratieerleben2020/libs/ui/src/lib/chapter/chapter.scss */"../../../libs/ui/src/lib/chapter/chapter.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map
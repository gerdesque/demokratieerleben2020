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

module.exports = [[module.i, ".parallax {\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  perspective: 300px;\n}\n.parallax__group {\n  position: relative;\n  height: 100vh;\n  transform-style: preserve-3d;\n}\n.parallax__header {\n  z-index: 99;\n}\n.parallax__layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n}\n.parallax__layer--fore {\n  transform: translateZ(90px) scale(0.7);\n  z-index: 1;\n  align-content: baseline;\n}\n.parallax__layer--base {\n  transform: translateZ(0);\n  z-index: 4;\n  background: 50% 50%/cover;\n}\n.parallax__layer--back {\n  transform: translateZ(-300px) scale(2);\n  z-index: 3;\n  align-content: baseline;\n}\n.parallax__layer--deep {\n  transform: translateZ(-600px) scale(3);\n  z-index: 2;\n  height: 50vh;\n}\n.back {\n  z-index: -1;\n}\n.active {\n  z-index: 25;\n}\n.fade-in-scale {\n  -webkit-animation: fade-in-scale-down 5s ease-out both;\n          animation: fade-in-scale-down 5s ease-out both;\n}\n@-webkit-keyframes fade-in-scale-down {\n  0% {\n    transform: scale(1.25) translateY(-15px);\n    transform-origin: 50% 16%;\n    -webkit-filter: blur(5px);\n            filter: blur(5px);\n  }\n  100% {\n    transform: scale(1) translateY(0);\n    transform-origin: top;\n    -webkit-filter: blur(0);\n            filter: blur(0);\n  }\n}\n@keyframes fade-in-scale-down {\n  0% {\n    transform: scale(1.25) translateY(-15px);\n    transform-origin: 50% 16%;\n    -webkit-filter: blur(5px);\n            filter: blur(5px);\n  }\n  100% {\n    transform: scale(1) translateY(0);\n    transform-origin: top;\n    -webkit-filter: blur(0);\n            filter: blur(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2xpYnMvdWkvc3JjL2xpYi9jaGFwdGVyL2NoYXB0ZXIuc2NzcyIsImxpYnMvdWkvc3JjL2xpYi9jaGFwdGVyL2NoYXB0ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRko7QURJSTtFQUNFLHNDQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDRk47QURLSTtFQUNFLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDSE47QURNSTtFQUNFLHNDQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDSk47QURPSTtFQUNFLHNDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNMTjtBRFVBO0VBQ0UsV0FBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0FDUEY7QURVQTtFQUNFLHNEQUFBO1VBQUEsOENBQUE7QUNQRjtBRFVDO0VBQ0M7SUFDRSx3Q0FBQTtJQUNBLHlCQUFBO0lBQ0EseUJBQUE7WUFBQSxpQkFBQTtFQ1BGO0VEU0E7SUFDRSxpQ0FBQTtJQUNBLHFCQUFBO0lBQ0EsdUJBQUE7WUFBQSxlQUFBO0VDUEY7QUFDRjtBREhDO0VBQ0M7SUFDRSx3Q0FBQTtJQUNBLHlCQUFBO0lBQ0EseUJBQUE7WUFBQSxpQkFBQTtFQ1BGO0VEU0E7SUFDRSxpQ0FBQTtJQUNBLHFCQUFBO0lBQ0EsdUJBQUE7WUFBQSxlQUFBO0VDUEY7QUFDRiIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvY2hhcHRlci9jaGFwdGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyYWxsYXgge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBlcnNwZWN0aXZlOiAzMDBweDtcblxuICAmX19ncm91cCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgfVxuXG4gICZfX2hlYWRlciB7XG4gICAgei1pbmRleDogOTk7XG4gIH1cblxuICAmX19sYXllciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXG4gICAgJi0tZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooOTBweCkgc2NhbGUoLjcpO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xuICAgIH1cblxuICAgICYtLWJhc2Uge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgei1pbmRleDogNDtcbiAgICAgIGJhY2tncm91bmQ6IDUwJSA1MCUgLyBjb3ZlcjtcbiAgICB9XG5cbiAgICAmLS1iYWNrIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwcHgpIHNjYWxlKDIpO1xuICAgICAgei1pbmRleDogMztcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xuICAgIH1cblxuICAgICYtLWRlZXAge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC02MDBweCkgc2NhbGUoMyk7XG4gICAgICB6LWluZGV4OiAyO1xuICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgIH1cbiAgfVxufVxuXG4uYmFjayB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYWN0aXZlIHtcbiAgei1pbmRleDogMjU7XG59XG5cbi5mYWRlLWluLXNjYWxlIHtcbiAgYW5pbWF0aW9uOiBmYWRlLWluLXNjYWxlLWRvd24gNXMgZWFzZS1vdXQgYm90aDtcbn1cblxuIEBrZXlmcmFtZXMgZmFkZS1pbi1zY2FsZS1kb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSkgdHJhbnNsYXRlWSgtMTVweCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDE2JTtcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KSBcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgIGZpbHRlcjogYmx1cigwKSBcbiAgfVxufVxuIiwiLnBhcmFsbGF4IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwZXJzcGVjdGl2ZTogMzAwcHg7XG59XG4ucGFyYWxsYXhfX2dyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuLnBhcmFsbGF4X19oZWFkZXIge1xuICB6LWluZGV4OiA5OTtcbn1cbi5wYXJhbGxheF9fbGF5ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG59XG4ucGFyYWxsYXhfX2xheWVyLS1mb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDkwcHgpIHNjYWxlKDAuNyk7XG4gIHotaW5kZXg6IDE7XG4gIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xufVxuLnBhcmFsbGF4X19sYXllci0tYmFzZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgei1pbmRleDogNDtcbiAgYmFja2dyb3VuZDogNTAlIDUwJS9jb3Zlcjtcbn1cbi5wYXJhbGxheF9fbGF5ZXItLWJhY2sge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTMwMHB4KSBzY2FsZSgyKTtcbiAgei1pbmRleDogMztcbiAgYWxpZ24tY29udGVudDogYmFzZWxpbmU7XG59XG4ucGFyYWxsYXhfX2xheWVyLS1kZWVwIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC02MDBweCkgc2NhbGUoMyk7XG4gIHotaW5kZXg6IDI7XG4gIGhlaWdodDogNTB2aDtcbn1cblxuLmJhY2sge1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmFjdGl2ZSB7XG4gIHotaW5kZXg6IDI1O1xufVxuXG4uZmFkZS1pbi1zY2FsZSB7XG4gIGFuaW1hdGlvbjogZmFkZS1pbi1zY2FsZS1kb3duIDVzIGVhc2Utb3V0IGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZS1pbi1zY2FsZS1kb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSkgdHJhbnNsYXRlWSgtMTVweCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDE2JTtcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgIGZpbHRlcjogYmx1cigwKTtcbiAgfVxufSJdfQ== */", '', '']]

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

module.exports = [[module.i, "@font-face {\n  font-family: \"LinolschriftHeavy\";\n  font-display: swap;\n  src: url('Linolschrift_Heavy.ttf') format(\"truetype\");\n}\n.title {\n  color: var(--color-title);\n  text-align: center;\n}\n.title h1 {\n  line-height: 1.2;\n  font-size: 3em;\n  font-family: LinolschriftHeavy, arial, sans-serif;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2xpYnMvdWkvc3JjL2xpYi90aXRsZS90aXRsZS5zY3NzIiwibGlicy91aS9zcmMvbGliL3RpdGxlL3RpdGxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7QUNDRjtBREVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FERUU7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0FDQUYiLCJmaWxlIjoibGlicy91aS9zcmMvbGliL3RpdGxlL3RpdGxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdMaW5vbHNjaHJpZnRIZWF2eSc7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoJy4vTGlub2xzY2hyaWZ0X0hlYXZ5LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRpdGxlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGgxIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC1zaXplOiAzZW07XG4gIGZvbnQtZmFtaWx5OiBMaW5vbHNjaHJpZnRIZWF2eSxhcmlhbCxzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxpbm9sc2NocmlmdEhlYXZ5XCI7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoXCIuL0xpbm9sc2NocmlmdF9IZWF2eS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG4udGl0bGUge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGl0bGUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGUgaDEge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDNlbTtcbiAgZm9udC1mYW1pbHk6IExpbm9sc2NocmlmdEhlYXZ5LCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn0iXX0= */", '', '']]

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
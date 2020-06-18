(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../../libs/ui/src/lib/chapter/chapter.scss":
/*!*************************************************************************************************!*\
  !*** /Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/chapter/chapter.scss ***!
  \*************************************************************************************************/
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
/*!*****************************************************************************************!*\
  !*** /Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/nav/nav.scss ***!
  \*****************************************************************************************/
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
/*!*********************************************************************************************!*\
  !*** /Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/title/title.scss ***!
  \*********************************************************************************************/
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
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/gerdmueller/Development/demokratieerleben2020/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/Users/gerdmueller/Development/demokratieerleben2020/node_modules/postcss-loader/src??embedded!/Users/gerdmueller/Development/demokratieerleben2020/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!/Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/chapter/chapter.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".parallax {\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  perspective: 300px;\n}\n.parallax__group {\n  position: relative;\n  height: 100vh;\n  transform-style: preserve-3d;\n}\n.parallax__header {\n  z-index: 1;\n}\n.parallax__layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: row wrap;\n}\n.parallax__layer--fore {\n  transform: translateZ(90px) scale(0.7);\n  z-index: 1;\n  align-content: baseline;\n}\n.parallax__layer--base {\n  transform: translateZ(0);\n  z-index: 4;\n  background: 50% 50%/cover;\n}\n.parallax__layer--back {\n  transform: translateZ(-300px) scale(2);\n  z-index: 3;\n  align-content: baseline;\n}\n.parallax__layer--deep {\n  transform: translateZ(-600px) scale(3);\n  z-index: 2;\n}\n.back {\n  z-index: -1;\n}\n.fade-in-scale {\n  -webkit-animation: fade-in-scale-down 5s linear 1;\n          animation: fade-in-scale-down 5s linear 1;\n}\n@-webkit-keyframes fade-in-scale-down {\n  0% {\n    scale: 1.2;\n    -webkit-filter: blur(7px) brightness(2) grayscale(1);\n            filter: blur(7px) brightness(2) grayscale(1);\n  }\n  100% {\n    scale: 1;\n    -webkit-filter: blur(0) brightness(1) grayscale(0);\n            filter: blur(0) brightness(1) grayscale(0);\n  }\n}\n@keyframes fade-in-scale-down {\n  0% {\n    scale: 1.2;\n    -webkit-filter: blur(7px) brightness(2) grayscale(1);\n            filter: blur(7px) brightness(2) grayscale(1);\n  }\n  100% {\n    scale: 1;\n    -webkit-filter: blur(0) brightness(1) grayscale(0);\n            filter: blur(0) brightness(1) grayscale(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZXJkbXVlbGxlci9EZXZlbG9wbWVudC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL2NoYXB0ZXIvY2hhcHRlci5zY3NzIiwibGlicy91aS9zcmMvbGliL2NoYXB0ZXIvY2hhcHRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQ0NKO0FERUU7RUFDRSxVQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNGSjtBRElJO0VBQ0Usc0NBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUNGTjtBREtJO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNITjtBRE1JO0VBQ0Usc0NBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUNKTjtBRE9JO0VBQ0Usc0NBQUE7RUFDQSxVQUFBO0FDTE47QURVQTtFQUNFLFdBQUE7QUNQRjtBRFVBO0VBQ0UsaURBQUE7VUFBQSx5Q0FBQTtBQ1BGO0FEVUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxvREFBQTtZQUFBLDRDQUFBO0VDUEY7RURVQTtJQUNFLFFBQUE7SUFDQSxrREFBQTtZQUFBLDBDQUFBO0VDUkY7QUFDRjtBRERBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esb0RBQUE7WUFBQSw0Q0FBQTtFQ1BGO0VEVUE7SUFDRSxRQUFBO0lBQ0Esa0RBQUE7WUFBQSwwQ0FBQTtFQ1JGO0FBQ0YiLCJmaWxlIjoibGlicy91aS9zcmMvbGliL2NoYXB0ZXIvY2hhcHRlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmFsbGF4IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwZXJzcGVjdGl2ZTogMzAwcHg7XG5cbiAgJl9fZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIH1cblxuICAmX19oZWFkZXIge1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAmX19sYXllciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXG4gICAgJi0tZm9yZSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooOTBweCkgc2NhbGUoLjcpO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xuICAgIH1cblxuICAgICYtLWJhc2Uge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgei1pbmRleDogNDtcbiAgICAgIGJhY2tncm91bmQ6IDUwJSA1MCUgLyBjb3ZlcjtcbiAgICB9XG5cbiAgICAmLS1iYWNrIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwcHgpIHNjYWxlKDIpO1xuICAgICAgei1pbmRleDogMztcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xuICAgIH1cblxuICAgICYtLWRlZXAge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC02MDBweCkgc2NhbGUoMyk7XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgfVxufVxuXG4uYmFjayB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uZmFkZS1pbi1zY2FsZSB7XG4gIGFuaW1hdGlvbjogZmFkZS1pbi1zY2FsZS1kb3duIDVzIGxpbmVhciAxO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tc2NhbGUtZG93biB7XG4gIDAlIHtcbiAgICBzY2FsZTogMS4yO1xuICAgIGZpbHRlcjogYmx1cig3cHgpIGJyaWdodG5lc3MoMikgZ3JheXNjYWxlKDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgc2NhbGU6IDE7XG4gICAgZmlsdGVyOiBibHVyKDApIGJyaWdodG5lc3MoMSkgZ3JheXNjYWxlKDApO1xuICB9XG59XG4iLCIucGFyYWxsYXgge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBlcnNwZWN0aXZlOiAzMDBweDtcbn1cbi5wYXJhbGxheF9fZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG4ucGFyYWxsYXhfX2hlYWRlciB7XG4gIHotaW5kZXg6IDE7XG59XG4ucGFyYWxsYXhfX2xheWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufVxuLnBhcmFsbGF4X19sYXllci0tZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWig5MHB4KSBzY2FsZSgwLjcpO1xuICB6LWluZGV4OiAxO1xuICBhbGlnbi1jb250ZW50OiBiYXNlbGluZTtcbn1cbi5wYXJhbGxheF9fbGF5ZXItLWJhc2Uge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHotaW5kZXg6IDQ7XG4gIGJhY2tncm91bmQ6IDUwJSA1MCUvY292ZXI7XG59XG4ucGFyYWxsYXhfX2xheWVyLS1iYWNrIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDBweCkgc2NhbGUoMik7XG4gIHotaW5kZXg6IDM7XG4gIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xufVxuLnBhcmFsbGF4X19sYXllci0tZGVlcCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtNjAwcHgpIHNjYWxlKDMpO1xuICB6LWluZGV4OiAyO1xufVxuXG4uYmFjayB7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uZmFkZS1pbi1zY2FsZSB7XG4gIGFuaW1hdGlvbjogZmFkZS1pbi1zY2FsZS1kb3duIDVzIGxpbmVhciAxO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tc2NhbGUtZG93biB7XG4gIDAlIHtcbiAgICBzY2FsZTogMS4yO1xuICAgIGZpbHRlcjogYmx1cig3cHgpIGJyaWdodG5lc3MoMikgZ3JheXNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHNjYWxlOiAxO1xuICAgIGZpbHRlcjogYmx1cigwKSBicmlnaHRuZXNzKDEpIGdyYXlzY2FsZSgwKTtcbiAgfVxufSJdfQ== */", '', '']]

/***/ }),

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!../../../libs/ui/src/lib/nav/nav.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/gerdmueller/Development/demokratieerleben2020/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/Users/gerdmueller/Development/demokratieerleben2020/node_modules/postcss-loader/src??embedded!/Users/gerdmueller/Development/demokratieerleben2020/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!/Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/nav/nav.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".navigation {\n  left: 2%;\n  position: absolute;\n  top: 50%;\n  z-index: 6;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  list-style-type: none;\n}\n\n.navigation--item {\n  cursor: pointer;\n  border-radius: 9999px;\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  margin: 8px 0;\n  position: relative;\n  display: block;\n}\n\n.navigation--item a {\n  background-color: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 2px white;\n  cursor: pointer;\n  height: 100%;\n  left: 0;\n  outline: none;\n  text-indent: -999em;\n  top: 0;\n  transition: background 0.3s ease;\n  width: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n\n.navigation--item a:focus {\n  outline: none;\n}\n\n.navigation--item a:hover,\n.navigation--item a:focus {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.navigation--item a::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  height: 0;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  transition: height 0.3s ease;\n}\n\n.navigation--item a.active::after {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZXJkbXVlbGxlci9EZXZlbG9wbWVudC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL25hdi9uYXYuc2NzcyIsImxpYnMvdWkvc3JjL2xpYi9uYXYvbmF2LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ0FEOztBREdBO0VBQ0MsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FEOztBREdBO0VBQ0MsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRDs7QURHQTtFQUNDLGFBQUE7QUNBRDs7QURHQTs7RUFFQyxvQ0FBQTtBQ0FEOztBREdBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNBRDs7QURHQTtFQUNDLFlBQUE7QUNBRCIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvbmF2L25hdi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24ge1xuXHRsZWZ0OiAyJTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDUwJTtcblx0ei1pbmRleDogNjtcblxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogOTk5OXB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdHdpZHRoOiAyMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMyk7XG5cdG1hcmdpbjogOHB4IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGEge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHdoaXRlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGhlaWdodDogMTAwJTtcblx0bGVmdDogMDtcblx0b3V0bGluZTogbm9uZTtcblx0dGV4dC1pbmRlbnQ6IC05OTllbTtcblx0dG9wOiAwO1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcblx0d2lkdGg6IDEwMCU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYTpmb2N1cyB7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGE6aG92ZXIsXG4ubmF2aWdhdGlvbi0taXRlbSBhOmZvY3VzIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhOjphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMDtcblx0aGVpZ2h0OiAwO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0dHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYS5hY3RpdmU6OmFmdGVyIHtcblx0aGVpZ2h0OiAxMDAlO1xufSIsIi5uYXZpZ2F0aW9uIHtcbiAgbGVmdDogMiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHotaW5kZXg6IDY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIG1hcmdpbjogOHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1pbmRlbnQ6IC05OTllbTtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm5hdmlnYXRpb24tLWl0ZW0gYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uYXZpZ2F0aW9uLS1pdGVtIGE6aG92ZXIsXG4ubmF2aWdhdGlvbi0taXRlbSBhOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlO1xufVxuXG4ubmF2aWdhdGlvbi0taXRlbSBhLmFjdGl2ZTo6YWZ0ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */", '', '']]

/***/ }),

/***/ "../../../node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!../../../libs/ui/src/lib/title/title.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/gerdmueller/Development/demokratieerleben2020/node_modules/@nrwl/web/src/utils/third-party/cli-files/plugins/raw-css-loader.js!/Users/gerdmueller/Development/demokratieerleben2020/node_modules/postcss-loader/src??embedded!/Users/gerdmueller/Development/demokratieerleben2020/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-7-3!/Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/title/title.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@font-face {\n  font-family: \"LinolschriftHeavy\";\n  font-display: swap;\n  src: url('Linolschrift_Heavy.ttf') format(\"truetype\");\n}\n.title {\n  color: var(--color-title);\n  text-align: center;\n}\n.title h1 {\n  line-height: 1.2;\n  font-size: 3em;\n  font-family: LinolschriftHeavy, arial, sans-serif;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nZXJkbXVlbGxlci9EZXZlbG9wbWVudC9kZW1va3JhdGllZXJsZWJlbjIwMjAvbGlicy91aS9zcmMvbGliL3RpdGxlL3RpdGxlLnNjc3MiLCJsaWJzL3VpL3NyYy9saWIvdGl0bGUvdGl0bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtBQ0NGO0FERUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDQUY7QURFRTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7QUNBRiIsImZpbGUiOiJsaWJzL3VpL3NyYy9saWIvdGl0bGUvdGl0bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0xpbm9sc2NocmlmdEhlYXZ5JztcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgnLi9MaW5vbHNjaHJpZnRfSGVhdnkudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGl0bGUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaDEge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDNlbTtcbiAgZm9udC1mYW1pbHk6IExpbm9sc2NocmlmdEhlYXZ5LGFyaWFsLHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbn0iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTGlub2xzY2hyaWZ0SGVhdnlcIjtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybChcIi4vTGlub2xzY2hyaWZ0X0hlYXZ5LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbi50aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aXRsZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50aXRsZSBoMSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBmb250LWZhbWlseTogTGlub2xzY2hyaWZ0SGVhdnksIGFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufSJdfQ== */", '', '']]

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
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./styles.scss /Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/title/title.scss /Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/nav/nav.scss /Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/chapter/chapter.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/gerdmueller/Development/demokratieerleben2020/apps/demol/src/styles.scss */"./styles.scss");
__webpack_require__(/*! /Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/title/title.scss */"../../../libs/ui/src/lib/title/title.scss");
__webpack_require__(/*! /Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/nav/nav.scss */"../../../libs/ui/src/lib/nav/nav.scss");
module.exports = __webpack_require__(/*! /Users/gerdmueller/Development/demokratieerleben2020/libs/ui/src/lib/chapter/chapter.scss */"../../../libs/ui/src/lib/chapter/chapter.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map
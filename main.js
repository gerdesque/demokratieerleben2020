(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../dist/libs/data/data.esm.js":
/*!****************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/dist/libs/data/data.esm.js ***!
  \****************************************************************************************/
/*! exports provided: API_URL, ContentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentType", function() { return ContentType; });
var API_URL = 'http://localhost:3000';
var ContentType;

(function (ContentType) {
  ContentType["Text"] = "text";
  ContentType["Video"] = "video";
  ContentType["Image"] = "image";
  ContentType["Game"] = "game";
  ContentType["Misc"] = "misc";
})(ContentType || (ContentType = {}));



/***/ }),

/***/ "../../../dist/libs/home/home.esm.js":
/*!****************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/dist/libs/home/home.esm.js ***!
  \****************************************************************************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gerdesque_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gerdesque/ui */ "../../../dist/libs/ui/ui.esm.js");
/* harmony import */ var _gerdesque_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gerdesque/data */ "../../../dist/libs/data/data.esm.js");



var home = {
  name: ["Demokratie ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "er"), "leben"],
  content: [{
    "type": _gerdesque_data__WEBPACK_IMPORTED_MODULE_2__["ContentType"].Text,
    "value": "Natürlich besteht die Kinderrepublik nicht nur aus Karl, Anna und Gerda. Damit ihr mit den beiden dieses Abenteuer erleben könnt, hat Florian eine Website entworfen, die Gerd umgesetzt hat. Anne hat dafür unter dem Einsatz von Felix‘ Sprecherstimme Trickfilme produziert."
  }, {
    "type": _gerdesque_data__WEBPACK_IMPORTED_MODULE_2__["ContentType"].Text,
    "value": "Unsere Website richtet sich an all jene, die sich spielerisch mit dem Thema „Kinderrepublik“ und partizipativer Jugendarbeit in der ersten Hälfte des 20. Jahrhunderts beschäftigen wollen und erfahren möchten, wie solche Zeltlager als Form früher und praktischer Demokratiebildung funktioniert haben. In Zeiten wie jetzt, wo mehr und mehr Menschen sich von den demokratischen Institutionen abwenden, lohnt es sich, einen Blick zurückzuwerfen und zu schauen, wie Demokratiebildung insbesondere für bildungsfernere Schichten in der Vergangenheit funktioniert hat und inwiefern wir dafür etwas für unsere heutige Zeit lernen können."
  }]
};

var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gerdesque_ui__WEBPACK_IMPORTED_MODULE_1__["ChapterComponent"], Object.assign({}, home));
};



/***/ }),

/***/ "../../../dist/libs/ui/ui.esm.js":
/*!************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/dist/libs/ui/ui.esm.js ***!
  \************************************************************************************/
/*! exports provided: ChapterComponent, Footer, Nav, Title, Ui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterComponent", function() { return ChapterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ui", function() { return Ui; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _gerdesque_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gerdesque/data */ "../../../dist/libs/data/data.esm.js");




var Footer = function Footer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Footer"));
};

var Nav = function Nav(props) {
  var renderChapterNav = function renderChapterNav() {
    return props.chapters.map(function (chapter, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: 'navigation--item',
        key: index
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "/chapter/".concat(chapter.id)
      }));
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "app-nav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: 'navigation'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: 'navigation--item'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: "/"
  })), renderChapterNav()));
};

var Title = function Title(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, props.text));
};

var ChapterComponent = function ChapterComponent(props) {
  var renderText = function renderText(value) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'box'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, value));
  };

  var renderVideo = function renderVideo(value) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'box'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, value));
  };

  var renderImage = function renderImage(value) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'box'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, value));
  };

  var renderChapterContent = function renderChapterContent() {
    return props.content.map(function (content) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'parallax__group'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'parallax__layer parallax__layer--base'
      }, content.type === _gerdesque_data__WEBPACK_IMPORTED_MODULE_2__["ContentType"].Text && renderText(content.value), content.type === _gerdesque_data__WEBPACK_IMPORTED_MODULE_2__["ContentType"].Video && renderVideo(content.value), content.type === _gerdesque_data__WEBPACK_IMPORTED_MODULE_2__["ContentType"].Image && renderImage(content.value)));
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "parallax ".concat(props.name)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: 'header',
    className: 'parallax__group'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'parallax__layer parallax__layer--base'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    text: props.name
  }))), renderChapterContent());
};

var Ui = function Ui(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to ui component!"));
};



/***/ }),

/***/ "../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!./app/app.scss":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/node_modules/postcss-loader/src??embedded!/home/gm/Development/playground/demokratieerleben2020/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-3-2!./app/app.scss ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"FundamentalBrigade\";\n  font-display: swap;\n  src: url('Fundamental_Brigade_Schlank.ttf') format(\"truetype\");\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/* Remove default padding */\nul[class],\nol[class] {\n  padding: 0;\n  list-style: none;\n}\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\nhtml {\n  overflow: hidden;\n  min-height: 100vh;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.6;\n}\nbody {\n  background-image: url('background.webp');\n  color: darkred;\n  font-size: clamp(1em, 1em + 2vw, 3em);\n  font-family: FundamentalBrigade, arial, sans-serif;\n  font-weight: normal;\n  height: 100%;\n  overflow-x: hidden;\n  padding: 0;\n  -webkit-perspective: 1px;\n          perspective: 1px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2FwcHMvZGVtb2wvc3JjL2FwcC9hcHAuc2NzcyIsImFwcHMvZGVtb2wvc3JjL2FwcC9hcHAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4REFBQTtBQ0NGO0FERUE7OztFQUdFLHNCQUFBO0FDQUY7QURHQSwyQkFBQTtBQUNBOztFQUVFLFVBQUE7RUFDQSxnQkFBQTtBQ0FGO0FER0EsMEJBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7RUFjRSxTQUFBO0FDQUY7QURHQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREdBO0VBQ0Usd0NBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO1VBQUEsZ0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDQUYiLCJmaWxlIjoiYXBwcy9kZW1vbC9zcmMvYXBwL2FwcC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRnVuZGFtZW50YWxCcmlnYWRlJztcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgnLi9GdW5kYW1lbnRhbF9CcmlnYWRlX1NjaGxhbmsudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nICovXG51bFtjbGFzc10sXG5vbFtjbGFzc10ge1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5oNCxcbnAsXG51bFtjbGFzc10sXG5vbFtjbGFzc10sXG5saSxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuaHRtbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9iYWNrZ3JvdW5kLndlYnApO1xuICBjb2xvcjogZGFya3JlZDtcbiAgZm9udC1zaXplOiAjeydjbGFtcCgxZW0sIDFlbSArIDJ2dywgM2VtKSd9O1xuICBmb250LWZhbWlseTogRnVuZGFtZW50YWxCcmlnYWRlLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIHBlcnNwZWN0aXZlOiAxcHg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1bmRhbWVudGFsQnJpZ2FkZVwiO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKFwiLi9GdW5kYW1lbnRhbF9CcmlnYWRlX1NjaGxhbmsudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyAqL1xudWxbY2xhc3NdLFxub2xbY2xhc3NdIHtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5wLFxudWxbY2xhc3NdLFxub2xbY2xhc3NdLFxubGksXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuYmxvY2txdW90ZSxcbmRsLFxuZGQge1xuICBtYXJnaW46IDA7XG59XG5cbmh0bWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYmFja2dyb3VuZC53ZWJwKTtcbiAgY29sb3I6IGRhcmtyZWQ7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMWVtLCAxZW0gKyAydncsIDNlbSk7XG4gIGZvbnQtZmFtaWx5OiBGdW5kYW1lbnRhbEJyaWdhZGUsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcGVyc3BlY3RpdmU6IDFweDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn0iXX0= */"

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

/***/ "./app/app.scss":
/*!**********************!*\
  !*** ./app/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/postcss-loader/src??embedded!../../../../node_modules/sass-loader/lib/loader.js??ref--5-oneOf-3-2!./app.scss */ "../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!./app/app.scss");

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

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _gerdesque_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gerdesque/home */ "../../../dist/libs/home/home.esm.js");
/* harmony import */ var _gerdesque_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gerdesque/ui */ "../../../dist/libs/ui/ui.esm.js");
/* harmony import */ var _gerdesque_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gerdesque/data */ "../../../dist/libs/data/data.esm.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.scss */ "./app/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_5__);



 // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries



var App = () => {
  var [chapters, setChapters] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch("".concat(_gerdesque_data__WEBPACK_IMPORTED_MODULE_4__["API_URL"], "/chapter")).then(_ => _.json()).then(setChapters);
  }, []);

  var renderChapter = routerProps => {
    var chapterId = parseInt(routerProps.match.params.id);
    var chapter = chapters.find(chapterObj => chapterObj.id === chapterId);
    return chapter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gerdesque_ui__WEBPACK_IMPORTED_MODULE_3__["ChapterComponent"], chapter);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    basename: "/demokratieerleben2020"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gerdesque_ui__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    chapters: chapters
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true,
    component: _gerdesque_home__WEBPACK_IMPORTED_MODULE_2__["Home"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/chapter/:id",
    render: renderChapter
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gm/Development/playground/demokratieerleben2020/apps/demol/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
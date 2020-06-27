(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../dist/libs/data/data.esm.js":
/*!****************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/dist/libs/data/data.esm.js ***!
  \****************************************************************************************/
/*! exports provided: API_URL, ContentType, IMAGE_SUFFIX, IMAGE_SUFFIX_ALTERNATE, Layer, VIDEO_SUFFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentType", function() { return ContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_SUFFIX", function() { return IMAGE_SUFFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_SUFFIX_ALTERNATE", function() { return IMAGE_SUFFIX_ALTERNATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIDEO_SUFFIX", function() { return VIDEO_SUFFIX; });
var API_URL = 'http://localhost:3000';
var IMAGE_SUFFIX = '.webp';
var IMAGE_SUFFIX_ALTERNATE = '.png';
var VIDEO_SUFFIX = '.mp4';
var Layer;

(function (Layer) {
  Layer["Fore"] = "fore";
  Layer["Base"] = "base";
  Layer["Back"] = "back";
})(Layer || (Layer = {}));

var ContentType;

(function (ContentType) {
  ContentType["Text"] = "text";
  ContentType["Redirect"] = "redirect";
  ContentType["Video"] = "video";
  ContentType["Image"] = "image";
  ContentType["Game"] = "game";
  ContentType["SmokingPit"] = "smokingpit";
  ContentType["Puzzle"] = "puzzle";
  ContentType["Suitcase"] = "suitcase";
  ContentType["TicTacToe"] = "tictactoe";
  ContentType["Daily"] = "daily";
  ContentType["Decission"] = "decission";
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


var home = {
  link: "home",
  groups: [{
    "grouped": false,
    "row": false,
    "content": [{
      "type": "text",
      "value": "Natürlich besteht die Kinderrepublik nicht nur aus Karl, Anna und Gerda. Damit ihr mit den beiden dieses Abenteuer erleben könnt, hat Florian eine Website entworfen, die Gerd umgesetzt hat. Anne hat dafür unter dem Einsatz von Felix‘ Sprecherstimme Trickfilme produziert.",
      "layer": "fore"
    }]
  }, {
    "grouped": true,
    "row": true,
    "content": [{
      "type": "text",
      "value": "Anne Mühlich",
      "layer": "avatar second"
    }, {
      "type": "text",
      "value": "Gerd Müller",
      "layer": "avatar second"
    }, {
      "type": "text",
      "value": "Julia Kothe",
      "layer": "avatar"
    }, {
      "type": "text",
      "value": "Lars Tunçay",
      "layer": "avatar"
    }, {
      "type": "text",
      "value": "Nina Heinke",
      "layer": "avatar"
    }, {
      "type": "text",
      "value": "Felix Werthschulte",
      "layer": "avatar"
    }]
  }, {
    "grouped": false,
    "row": false,
    "content": [{
      "type": "text",
      "value": "Unsere Website richtet sich an all jene, die sich spielerisch mit dem Thema „Kinderrepublik“ und partizipativer Jugendarbeit in der ersten Hälfte des 20. Jahrhunderts beschäftigen wollen und erfahren möchten, wie solche Zeltlager als Form früher und praktischer Demokratiebildung funktioniert haben. In Zeiten wie jetzt, wo mehr und mehr Menschen sich von den demokratischen Institutionen abwenden, lohnt es sich, einen Blick zurückzuwerfen und zu schauen, wie Demokratiebildung insbesondere für bildungsfernere Schichten in der Vergangenheit funktioniert hat und inwiefern wir dafür etwas für unsere heutige Zeit lernen können.",
      "layer": "fore"
    }]
  }]
};

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gerdesque_ui__WEBPACK_IMPORTED_MODULE_1__["Chapter"], Object.assign({}, home));
};



/***/ }),

/***/ "../../../dist/libs/ui/ui.esm.js":
/*!************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/dist/libs/ui/ui.esm.js ***!
  \************************************************************************************/
/*! exports provided: AppContext, Chapter, Daily, Decission, Footer, Group, Header, Image, Info, Memory, Nav, RedirectComponent, Scrollicon, Smokingpit, Suitcase, Text, TicTacToe, Title, Ui, Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chapter", function() { return Chapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Daily", function() { return Daily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decission", function() { return Decission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Memory", function() { return Memory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectComponent", function() { return RedirectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scrollicon", function() { return Scrollicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Smokingpit", function() { return Smokingpit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suitcase", function() { return Suitcase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicTacToe", function() { return TicTacToe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ui", function() { return Ui; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gerdesque_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gerdesque/data */ "../../../dist/libs/data/data.esm.js");
/* harmony import */ var react_drag_drop_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-drag-drop-container */ "../../../node_modules/react-drag-drop-container/lib/bundle.js");
/* harmony import */ var react_drag_drop_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_drag_drop_container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shortid */ "../../../node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-is */ "../../../node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");









function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var AppContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])([]);

var Image = function Image(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AppContext),
      _useContext2 = _slicedToArray(_useContext, 2),
      character = _useContext2[0],
      setCharacter = _useContext2[1];

  var chooseCharacter = function chooseCharacter() {
    props.title && setCharacter(props.title);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("picture", {
    className: "chapter_picture ".concat(props.layer),
    onClick: function onClick() {
      return chooseCharacter();
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    srcSet: "./assets/" + props.value + _gerdesque_data__WEBPACK_IMPORTED_MODULE_1__["IMAGE_SUFFIX"],
    type: 'image/webp'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    srcSet: "./assets/fallback/" + props.value + _gerdesque_data__WEBPACK_IMPORTED_MODULE_1__["IMAGE_SUFFIX_ALTERNATE"],
    type: 'image/png'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    draggable: "false",
    src: "./assets/fallback/" + props.value + _gerdesque_data__WEBPACK_IMPORTED_MODULE_1__["IMAGE_SUFFIX_ALTERNATE"],
    alt: props.title || props.value
  }), props.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlay"
  }, props.title));
};

var items = ['abfahrt', 'abmarsch', 'kochen', 'lagerstruktur', 'morgen', 'schlafen', 'tanzen', 'waschen'];

var Memory = function Memory(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      visibleItems = _useState4[0],
      setVisibleItems = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      finishedItems = _useState6[0],
      setFinishedItems = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      winner = _useState8[0],
      setWinner = _useState8[1];

  var checkItems = function checkItems(firstIndex, secondIndex) {
    if (firstIndex !== secondIndex && list[firstIndex].name === list[secondIndex].name) {
      setFinishedItems([].concat(_toConsumableArray(finishedItems), [firstIndex, secondIndex]));
    } else {
      setTimeout(function () {
        setVisibleItems([]);
      }, 600);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setList(items.concat(items).map(function (name, i) {
      return {
        name: name,
        id: i
      };
    }).sort(function () {
      return 0.5 - Math.random();
    }));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (finishedItems.length > 0 && finishedItems.length === list.length) {
      setWinner(true);
    }
  }, [finishedItems, list]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Grid, {
    list: list,
    visibleItems: visibleItems,
    setVisibleItems: setVisibleItems,
    finishedItems: finishedItems,
    checkItems: checkItems
  }), winner && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "You Win !", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)));
};

var Grid = function Grid(props) {
  var list = props.list,
      visibleItems = props.visibleItems,
      setVisibleItems = props.setVisibleItems,
      finishedItems = props.finishedItems,
      checkItems = props.checkItems;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "memory"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "description"
  }, "In diesem Aufdeck-Spiel geht es darum, gleiche Paare zu finden. Diese bestehen aus einer Zeichnung und dem dazu passenden Foto. Klicke einfach auf die K\xE4rtchen, um zu sehen, was sich auf der R\xFCckseite befindet. Zusammenpassende Paare bleiben aufgedeckt liegen."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cards"
  }, list.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Card, {
      key: item.id,
      className: "card ".concat(visibleItems.includes(index) ? "grid-card-show" : "", " ").concat(finishedItems.includes(index) ? "grid-card-show grid-card-finished" : ""),
      onClick: function onClick() {
        if (!finishedItems.includes(index)) {
          switch (visibleItems.length) {
            case 0:
              setVisibleItems([index]);
              break;

            case 1:
              if (visibleItems[0] !== index) {
                setVisibleItems(visibleItems.concat(index));
                checkItems(visibleItems[0], index);
              }

              break;

            case 2:
              setVisibleItems([index]);
              break;

            default:
              setVisibleItems([]);
          }
        }
      },
      name: item.name
    });
  })));
};

Grid.defaultProps = {
  list: []
};

var Card = function Card(props) {
  var name = props.name,
      className = props.className,
      onClick = props.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(className),
    onClick: onClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    value: "memory_".concat(name)
  }));
};
/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */


function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (true) {
    if (value < min || value > max) {
      console.error("Material-UI: the value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "]."));
    }
  }

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb(".concat(colors.map(function (n) {
    return parseInt(n, 16);
  }).join(', '), ")") : '';
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */


function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */


function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error(["Material-UI: unsupported `".concat(color, "` color."), 'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().'].join('\n'));
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */


function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */


function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */


function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function isPlainObject(item) {
  return item && _typeof(item) === 'object' && item.constructor === Object;
}

function deepmerge(target, source) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? _extends({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(function (key) {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
} // This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
// Only exported for test purposes.


var specialProperty = "exact-prop: \u200B";

function exactProp(propTypes) {
  if (false) {}

  return _extends({}, propTypes, _defineProperty$1({}, specialProperty, function (props) {
    var unsupportedProps = Object.keys(props).filter(function (prop) {
      return !propTypes.hasOwnProperty(prop);
    });

    if (unsupportedProps.length > 0) {
      return new Error("The following props are not supported: ".concat(unsupportedProps.map(function (prop) {
        return "`".concat(prop, "`");
      }).join(', '), ". Please remove them."));
    }

    return null;
  }));
} // https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3


var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;

function getFunctionName(fn) {
  var match = "".concat(fn).match(fnNameMatchRegex);
  var name = match && match[1];
  return name || '';
}
/**
 * @param {function} Component
 * @param {string} fallback
 * @returns {string | undefined}
 */


function getFunctionComponentName(Component) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}
/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE 11 support
 *
 * @param {React.ReactType} Component
 * @returns {string | undefined}
 */


function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  if (_typeof(Component) === 'object') {
    switch (Component.$$typeof) {
      case react_is__WEBPACK_IMPORTED_MODULE_5__["ForwardRef"]:
        return getWrappedName(Component, Component.render, 'ForwardRef');

      case react_is__WEBPACK_IMPORTED_MODULE_5__["Memo"]:
        return getWrappedName(Component, Component.type, 'memo');

      default:
        return undefined;
    }
  }

  return undefined;
} // Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.


var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = _objectWithoutProperties(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return _extends({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return _extends({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}; // To deprecate in v4.1
      //       warning(
      //         false,
      //         [
      //           'Material-UI: theme.mixins.gutters() is deprecated.',
      //           'You can use the source of the mixin directly:',
      //           `
      // paddingLeft: theme.spacing(2),
      // paddingRight: theme.spacing(2),
      // [theme.breakpoints.up('sm')]: {
      //   paddingLeft: theme.spacing(3),
      //   paddingRight: theme.spacing(3),
      // },
      // `,
      //         ].join('\n'),
      //       );

      return _extends({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, _defineProperty$1({}, breakpoints.up('sm'), _extends({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, _defineProperty$1(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), _defineProperty$1(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

var common = {
  black: '#000',
  white: '#fff'
};
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common.white,
    default: grey[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: grey[800],
    default: '#303030'
  },
  action: {
    active: common.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: indigo[300],
    main: indigo[500],
    dark: indigo[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: pink.A200,
    main: pink.A400,
    dark: pink.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: red[300],
    main: red[500],
    dark: red[700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: orange[300],
    main: orange[500],
    dark: orange[700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: blue[300],
    main: blue[500],
    dark: blue[700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: green[300],
    main: green[500],
    dark: green[700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = _objectWithoutProperties(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    var contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = getContrastRatio(background, contrastText);

      if (contrast < 3) {
        console.error(["Material-UI: the contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = _extends({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error(['Material-UI: the color provided to augmentColor(color) is invalid.', "The color object needs to have a `main` property or a `".concat(mainShade, "` property.")].join('\n'));
    }

    if (typeof color.main !== 'string') {
      throw new Error(['Material-UI: the color provided to augmentColor(color) is invalid.', "`color.main` should be a string, but `".concat(JSON.stringify(color.main), "` was provided instead."), '', 'Did you intend to use one of the following approaches?', '', 'import { green } from "@material-ui/core/colors";', '', 'const theme1 = createMuiTheme({ palette: {', '  primary: green,', '} });', '', 'const theme2 = createMuiTheme({ palette: {', '  primary: { main: green[500] },', '} });'].join('\n'));
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  if (true) {
    if (!types[type]) {
      console.error("Material-UI: the palette type `".concat(type, "` is not supported."));
    }
  }

  var paletteOutput = deepmerge(_extends({
    // A collection of common colors.
    common: common,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: grey,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = _objectWithoutProperties(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (true) {
    if (typeof fontSize !== 'number') {
      console.error('Material-UI: `fontSize` is required to be a number.');
    }

    if (typeof htmlFontSize !== 'number') {
      console.error('Material-UI: `htmlFontSize` is required to be a number.');
    }
  }

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return _extends({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, {}, casing, {}, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return deepmerge(_extends({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: round,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var shape = {
  borderRadius: 4
};
var responsivePropType =  true ? prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array]) : undefined;

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
}

function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
}

function merge(acc, item) {
  if (!item) {
    return acc;
  }

  return deepmerge(acc, item, {
    clone: false // No need to clone deep, it's way faster.

  });
} // For instance with the first breakpoint xs: [xs, sm[.


var values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
var defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: function up(key) {
    return "@media (min-width:".concat(values[key], "px)");
  }
};

function handleBreakpoints(props, propValue, styleFromPropValue) {
  if (true) {
    if (!props.theme) {
      console.error('@material-ui/system: you are calling a style function without a theme value.');
    }
  }

  if (Array.isArray(propValue)) {
    var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return propValue.reduce(function (acc, item, index) {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }

  if (_typeof(propValue) === 'object') {
    var _themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;

    return Object.keys(propValue).reduce(function (acc, breakpoint) {
      acc[_themeBreakpoints.up(breakpoint)] = styleFromPropValue(propValue[breakpoint]);
      return acc;
    }, {});
  }

  var output = styleFromPropValue(propValue);
  return output;
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}

var properties = {
  m: 'margin',
  p: 'padding'
};
var directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
var aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
}; // memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec

var getCssProperties = memoize(function (prop) {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }

  var _prop$split = prop.split(''),
      _prop$split2 = _slicedToArray$1(_prop$split, 2),
      a = _prop$split2[0],
      b = _prop$split2[1];

  var property = properties[a];
  var direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(function (dir) {
    return property + dir;
  }) : [property + direction];
});
var spacingKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY'];

function createUnarySpacing(theme) {
  var themeSpacing = theme.spacing || 8;

  if (typeof themeSpacing === 'number') {
    return function (abs) {
      if (true) {
        if (typeof abs !== 'number') {
          console.error("@material-ui/system: expected spacing argument to be a number, got ".concat(abs, "."));
        }
      }

      return themeSpacing * abs;
    };
  }

  if (Array.isArray(themeSpacing)) {
    return function (abs) {
      if (true) {
        if (abs > themeSpacing.length - 1) {
          console.error(["@material-ui/system: the value provided (".concat(abs, ") overflows."), "The supported values are: ".concat(JSON.stringify(themeSpacing), "."), "".concat(abs, " > ").concat(themeSpacing.length - 1, ", you need to add the missing values.")].join('\n'));
        }
      }

      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  if (true) {
    console.error(["@material-ui/system: the `theme.spacing` value (".concat(themeSpacing, ") is invalid."), 'It should be a number, an array or a function.'].join('\n'));
  }

  return function () {
    return undefined;
  };
}

function getValue(transformer, propValue) {
  if (typeof propValue === 'string') {
    return propValue;
  }

  var abs = Math.abs(propValue);
  var transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return "-".concat(transformed);
}

function getStyleFromPropValue(cssProperties, transformer) {
  return function (propValue) {
    return cssProperties.reduce(function (acc, cssProperty) {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  };
}

function spacing(props) {
  var theme = props.theme;
  var transformer = createUnarySpacing(theme);
  return Object.keys(props).map(function (prop) {
    // Using a hash computation over an array iteration could be faster, but with only 28 items,
    // it's doesn't worth the bundle size.
    if (spacingKeys.indexOf(prop) === -1) {
      return null;
    }

    var cssProperties = getCssProperties(prop);
    var styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    var propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }).reduce(merge, {});
}

spacing.propTypes =  true ? spacingKeys.reduce(function (obj, key) {
  obj[key] = responsivePropType;
  return obj;
}, {}) : undefined;
spacing.filterProps = spacingKeys;
var warnOnce;

function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8; // Already transformed.

  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = createUnarySpacing({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (true) {
      if (!(args.length <= 4)) {
        console.error("Material-UI: Too many arguments provided, expected between 0 and 4, got ".concat(args.length));
      }
    }

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (true) {
        if (!warnOnce || "development" === 'test') {
          console.error(['Material-UI: theme.spacing.unit usage has been deprecated.', 'It will be removed in v5.', 'You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.', '', 'You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother.'].join('\n'));
        }

        warnOnce = true;
      }

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
} // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.


var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


var transitions = {
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = _objectWithoutProperties(options, ["duration", "easing", "delay"]);

    if (true) {
      var isString = function isString(value) {
        return typeof value === 'string';
      };

      var isNumber = function isNumber(value) {
        return !isNaN(parseFloat(value));
      };

      if (!isString(props) && !Array.isArray(props)) {
        console.error('Material-UI: argument "props" must be a string or Array.');
      }

      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error("Material-UI: argument \"duration\" must be a number or a string but found ".concat(durationOption, "."));
      }

      if (!isString(easingOption)) {
        console.error('Material-UI: argument "easing" must be a string.');
      }

      if (!isNumber(delay) && !isString(delay)) {
        console.error('Material-UI: argument "delay" must be a number or a string.');
      }

      if (Object.keys(other).length !== 0) {
        console.error("Material-UI: unrecognized argument(s) [".concat(Object.keys(other).join(','), "]"));
      }
    }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
}; // We need to centralize the zIndex definitions as they work
// like global values in the browser.

var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};

function createMuiTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = _objectWithoutProperties(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = createPalette(paletteInput);
  var breakpoints = createBreakpoints(breakpointsInput);
  var spacing = createSpacing(spacingInput);
  var muiTheme = deepmerge({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: createMixins(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: shadows,
    typography: createTypography(palette, typographyInput),
    spacing: spacing,
    shape: shape,
    transitions: transitions,
    zIndex: zIndex
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return deepmerge(acc, argument);
  }, muiTheme);

  if (true) {
    var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected'];

    var traverse = function traverse(node, parentKey) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var key; // eslint-disable-next-line guard-for-in, no-restricted-syntax

      for (key in node) {
        var child = node[key];

        if (depth === 1) {
          if (key.indexOf('Mui') === 0 && child) {
            traverse(child, key, depth + 1);
          }
        } else if (pseudoClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (true) {
            console.error(["Material-UI: the `".concat(parentKey, "` component increases ") + "the CSS specificity of the `".concat(key, "` internal state."), 'You can not override it like this: ', JSON.stringify(node, null, 2), '', 'Instead, you need to use the $ruleName syntax:', JSON.stringify({
              root: _defineProperty$1({}, "&$".concat(key), child)
            }, null, 2), '', 'https://material-ui.com/r/pseudo-classes-guide'].join('\n'));
          } // Remove the style to prevent global conflicts.


          node[key] = {};
        }
      }
    };

    traverse(muiTheme.overrides);
  }

  return muiTheme;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';
/**
 * This is the list of the style rule name we use as drop in replacement for the built-in
 * pseudo classes (:checked, :disabled, :focused, etc.).
 *
 * Why do they exist in the first place?
 * These classes are used at a specificity of 2.
 * It allows them to override previously definied styles as well as
 * being untouched by simple user overrides.
 */

var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$disableGloba = options.disableGlobal,
      disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba,
      _options$productionPr = options.productionPrefix,
      productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
      _options$seed = options.seed,
      seed = _options$seed === void 0 ? '' : _options$seed;
  var seedPrefix = seed === '' ? '' : "".concat(seed, "-");
  var ruleCounter = 0;
  return function (rule, styleSheet) {
    ruleCounter += 1;

    if (true) {
      if (ruleCounter >= 1e10) {
        console.warn(['Material-UI: you might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join(''));
      }
    }

    var name = styleSheet.options.name; // Is a global static MUI style?

    if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
      // We can use a shorthand class name, we never use the keys to style the components.
      if (pseudoClasses.indexOf(rule.key) !== -1) {
        return "Mui-".concat(rule.key);
      }

      var prefix = "".concat(seedPrefix).concat(name, "-").concat(rule.key);

      if (!styleSheet.options.theme[nested] || seed !== '') {
        return prefix;
      }

      return "".concat(prefix, "-").concat(ruleCounter);
    }

    if (false) {}

    var suffix = "".concat(rule.key, "-").concat(ruleCounter); // Help with debuggability.

    if (styleSheet.options.classNamePrefix) {
      return "".concat(seedPrefix).concat(styleSheet.options.classNamePrefix, "-").concat(suffix);
    }

    return "".concat(seedPrefix).concat(suffix);
  };
}

var isProduction = "development" === 'production';

function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof$1(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof$1(document)) === 'object' && document.nodeType === 9;

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

var plainObjectConstrurctor = {}.constructor;

function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}
/**
 * Create a rule instance.
 */


function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
     true ? warning(false, "[JSS] Unknown rule " + name) : undefined;
  }

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};
/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */


function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
}
/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */


function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += '\n';
            result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += '\n';
          result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += '\n';
      result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "\n" + result + "\n";
  return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;

var escape = function escape(str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
};

var BaseStyleRule = /*#__PURE__*/function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.key = void 0;
    this.isProcessed = false;
    this.style = void 0;
    this.renderer = void 0;
    this.renderable = void 0;
    this.options = void 0;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = (name in this.style); // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) {
       true ? warning(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : undefined;
    }

    return this;
  };

  return BaseStyleRule;
}();

var StyleRule = /*#__PURE__*/function (_BaseStyleRule) {
  _inheritsLoose(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    _this.selectorText = void 0;
    _this.id = void 0;
    _this.renderable = void 0;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(_assertThisInitialized$1(_assertThisInitialized$1(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;
  /**
   * Apply rule to an element inline.
   */

  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  }
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */
  ;

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  _createClass$1(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);

var pluginStyleRule = {
  onCreateRule: function onCreateRule(name, style, options) {
    if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(name, style, options);
  }
};
var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var ConditionalRule = /*#__PURE__*/function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.at = void 0;
    this.key = void 0;
    this.query = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

    this.query = options.name;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown';
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.query + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.query + " {\n" + children + "\n}" : '';
  };

  return ConditionalRule;
}();

var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};
var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var KeyframesRule = /*#__PURE__*/function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.key = void 0;
    this.name = void 0;
    this.id = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
       true ? warning(false, "[JSS] Bad keyframes name " + key) : undefined;
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "\n" + children + "\n";
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();

var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }

       true ? warning(false, "[JSS] Referenced keyframes rule \"" + name + "\" is not defined.") : undefined;
      return match;
    });
  }

  return val;
};
/**
 * Replace the reference for a animation name.
 */


var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var plugin = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var KeyframeRule = /*#__PURE__*/function (_BaseStyleRule) {
  _inheritsLoose(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
    _this.renderable = void 0;
    return _this;
  }

  var _proto = KeyframeRule.prototype;
  /**
   * Generates a CSS string.
   */

  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);

var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule = /*#__PURE__*/function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.at, this.style[index]);
        if (this.style[index + 1]) str += '\n';
      }

      return str;
    }

    return toCss(this.at, this.style, options);
  };

  return FontFaceRule;
}();

var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule = /*#__PURE__*/function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();

var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule = /*#__PURE__*/function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.key = void 0;
    this.value = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();

var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};
var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];
var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var RuleList = /*#__PURE__*/function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = _extends({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped,
      name: name
    }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
    // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
    // we need to make the key unique within this RuleList instance scope.


    var key = name;

    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    } // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // E.g. rules inside of @media container
      options.selector = "." + escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  }
  /**
   * Get a rule.
   */
  ;

  _proto.get = function get(name) {
    return this.map[name];
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  }
  /**
   * Run `onProcessRule()` plugins on every rule.
   */
  ;

  _proto.process = function process() {
    var plugins$$1 = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins$$1.onProcessRule, plugins$$1);
  }
  /**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */
  ;

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  }
  /**
   * Unregister a rule.
   */
  ;

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe

      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.updateOne(this.map[name], data, options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.updateOne(this.index[index], data, options);
      }
    }
  }
  /**
   * Execute plugins, update rule props.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins$$1 = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var styleRule = rule;
    var style = styleRule.style;
    plugins$$1.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== styleRule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins$$1.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

      for (var prop in styleRule.style) {
        var nextValue = styleRule.style[prop];
        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (nextValue !== prevValue) {
          styleRule.prop(prop, nextValue, forceUpdateOptions);
        }
      } // Remove props.


      for (var _prop in style) {
        var _nextValue = styleRule.style[_prop];
        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (_nextValue == null && _nextValue !== _prevValue) {
          styleRule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += '\n';
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(styles, options) {
    this.options = void 0;
    this.deployed = void 0;
    this.attached = void 0;
    this.rules = void 0;
    this.renderer = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.queue = void 0;
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  }
  /**
   * Remove renderable from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  }
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */
  ;

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  }
  /**
   * Insert rule into the StyleSheet
   */
  ;

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  }
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */
  ;

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  }
  /**
   * Get a rule by name.
   */
  ;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */
  ;

  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === 'object' ? name : this.rules.get(name);
    if (!rule) return false;
    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Deploy pure CSS string to a renderable.
   */
  ;

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  }
  /**
   * Updates a single rule.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry = /*#__PURE__*/function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = void 0;
  }

  var _proto = PluginsRegistry.prototype;
  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */

  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  }
  /**
   * Call `onProcessRule` hooks.
   */
  ;

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  }
  /**
   * Call `onProcessStyle` hooks.
   */
  ;

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      // $FlowFixMe
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  }
  /**
   * Call `onProcessSheet` hooks.
   */
  ;

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  }
  /**
   * Call `onUpdate` hooks.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  }
  /**
   * Call `onChangeValue` hooks.
   */
  ;

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  }
  /**
   * Register a plugin.
   */
  ;

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
           true ? warning(false, "[JSS] Unknown hook \"" + name + "\".") : undefined;
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();
/**
 * Sheets registry to access them all at one place.
 */


var SheetsRegistry = /*#__PURE__*/function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;
  /**
   * Register a Style Sheet.
   */

  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  ;

  _proto.reset = function reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  ;

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  ;

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = _objectWithoutPropertiesLoose(_ref, ["attached"]);

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += '\n';
      css += sheet.toString(options);
    }

    return css;
  };

  _createClass$1(SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();
/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */


var sheets = new SheetsRegistry();
/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028

var globalThis = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis[ns] == null) globalThis[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = globalThis[ns]++;
var maxRules = 1e10;
/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */

var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;
  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
       true ? warning(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : undefined;
    }

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };
};
/**
 * Cache the value from the first time a function is called.
 */


var memoize$1 = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};
/**
 * Get a style property value.
 */


function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
}
/**
 * Set a style property.
 */


function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    } // Support CSSTOM.


    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
}
/**
 * Remove a style property.
 */


function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
     true ? warning(false, "[JSS] DOMException \"" + err.message + "\" was thrown. Tried to remove property \"" + prop + "\".") : undefined;
  }
}
/**
 * Set the selector.
 */


function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
}
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize$1(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}
/**
 * Find a node before which we can insert the sheet.
 */


function findPrevNode(options) {
  var registry = sheets.registry;

  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.


     true ? warning(false, "[JSS] Insertion point \"" + insertionPoint + "\" not found.") : undefined;
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else  true ? warning(false, '[JSS] Insertion point is not in the DOM.') : undefined;
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize$1(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

  if (index === undefined || index > maxIndex) {
    // eslint-disable-next-line no-param-reassign
    index = maxIndex;
  }

  try {
    if ('insertRule' in container) {
      var c = container;
      c.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
        var _c = container;

        _c.appendRule(rule);
      }
  } catch (err) {
     true ? warning(false, "[JSS] " + err.message) : undefined;
    return false;
  }

  return container.cssRules[index];
};

var createStyle = function createStyle() {
  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
  // insert rules after we insert the style tag.
  // It seems to kick-off the source order specificity algorithm.

  el.textContent = '\n';
  return el;
};

var DomRenderer = /*#__PURE__*/function () {
  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.element = void 0;
    this.sheet = void 0;
    this.hasInsertedRules = false; // There is no sheet when the renderer is used from a standalone StyleRule.

    if (sheet) sheets.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // most browsers create a new CSSStyleSheet, except of all IEs.

    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  }
  /**
   * Remove style element from render tree.
   */
  ;

  _proto.detach = function detach() {
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element);
  }
  /**
   * Inject CSS string into element.
   */
  ;

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  }
  /**
   * Insert RuleList into an element.
   */
  ;

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  }
  /**
   * Insert a rule into element.
   */
  ;

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        // We need to render the container without children first.
        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), index);

        if (latestNativeParent === false) {
          return false;
        }
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    } // IE keeps the CSSStyleSheet after style node has been reattached,
    // so we need to check if the `renderable` reference the right style sheet and not
    // rerender those rules.


    if (rule.renderable && rule.renderable.parentStyleSheet === this.element.sheet) {
      return rule.renderable;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;

    var nativeRule = _insertRule(nativeParent, ruleStr, index);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    rule.renderable = nativeRule;
    return nativeRule;
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    return true;
  }
  /**
   * Get index of a CSS Rule.
   */
  ;

  _proto.indexOf = function indexOf(cssRule) {
    var cssRules = this.element.sheet.cssRules;

    for (var index = 0; index < cssRules.length; index++) {
      if (cssRule === cssRules[index]) return index;
    }

    return -1;
  }
  /**
   * Generate a new CSS rule and replace the existing one.
   *
   * Only used for some old browsers because they can't set a selector.
   */
  ;

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    return this.insertRule(rule, index);
  }
  /**
   * Get all rules elements.
   */
  ;

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var Jss = /*#__PURE__*/function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.1.1";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: isBrowser ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = _extends({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  }
  /**
   * Create a Style Sheet.
   */
  ;

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = sheets.index === 0 ? 0 : sheets.index + 1;
    }

    var sheet = new StyleSheet(styles, _extends({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  }
  /**
   * Detach the Style Sheet and remove it from the registry.
   */
  ;

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  }
  /**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */
  ;

  _proto.createRule = function createRule$$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    } // Enable rule without name for inline styles.


    if (typeof name === 'object') {
      return this.createRule(undefined, name, style);
    }

    var ruleOptions = _extends({}, options, {
      name: name,
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};
    var rule = createRule(name, style, ruleOptions);
    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */
  ;

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins$$1 = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins$$1[_key] = arguments[_key];
    }

    plugins$$1.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();
/**
 * Extracts a styles object with only props that contain function values.
 */


function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}
/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */

/**
 * Export a constant indicating if this browser has CSSTOM support.
 * https://developers.google.com/web/updates/2018/03/cssom
 */


var hasCSSTOMSupport = typeof CSS !== 'undefined' && CSS && 'number' in CSS;
/**
 * Creates a new instance of Jss.
 */

var create = function create(options) {
  return new Jss(options);
};
/**
 * A global Jss instance.
 */


var index = create();
var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;

function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = createRule(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      // We need to extract function values from the declaration, so that we can keep core unaware of them.
      // We need to do that only once.
      // We don't need to extract functions on each style update, since this can happen only once.
      // We don't support function values inside of function rules.
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      } // $FlowFixMe


      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.

      if (fnRule) {
        // Empty object will remove all currently defined props
        // in case function rule returns a falsy value.
        styleRule.style = fnRule(data) || {};

        if (true) {
          for (var prop in styleRule.style) {
            if (typeof styleRule.style[prop] === 'function') {
               true ? warning(false, '[JSS] Function values inside function rules are not supported.') : undefined;
              break;
            }
          }
        }
      }

      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
}

var at = '@global';
var atPrefix = '@global ';

var GlobalContainerRule = /*#__PURE__*/function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at;
    this.rules = void 0;
    this.options = void 0;
    this.key = void 0;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString() {
    return this.rules.toString();
  };

  return GlobalContainerRule;
}();

var GlobalPrefixedRule = /*#__PURE__*/function () {
  function GlobalPrefixedRule(key, style, options) {
    this.type = 'global';
    this.at = at;
    this.options = void 0;
    this.rule = void 0;
    this.isProcessed = false;
    this.key = void 0;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;

  for (var name in rules) {
    options.sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at];
}

function handlePrefixedGlobalRule(rule) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    options.sheet.addRule(selector, style[prop], _extends({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule) {
    if (rule.type !== 'style') return;
    handleNestedGlobalContainerRule(rule);
    handlePrefixedGlobalRule(rule);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

var separatorRegExp$1 = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp$1 = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        rule = rule;
        return rule.selector;
      }

       true ? warning(false, "[JSS] Could not find the referenced rule \"" + key + "\" in \"" + (container.options.meta || container.toString()) + "\".") : undefined;
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp$1);
    var nestedSelectors = nestedProp.split(separatorRegExp$1);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, prevOptions) {
    // Options has been already created, now we only increase index.
    if (prevOptions) return _extends({}, prevOptions, {
      index: prevOptions.index + 1
    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    var options = _extends({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

    });

    delete options.name;
    return options;
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.

        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

        selector = selector.replace(refRegExp$1, replaceRef);
        container.addRule(selector, style[prop], _extends({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, {}, options) // Flow expects more options but they aren't required
        // And flow doesn't know this will always be a StyleRule which has the addRule method
        // $FlowFixMe
        .addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}
/* eslint-disable no-var, prefer-template */


var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function toHyphenLower(match) {
  return '-' + match.toLowerCase();
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name];
  }

  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? '-' + hName : hName;
}
/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */


function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    var key = prop.indexOf('--') === 0 ? prop : hyphenateStyleName(prop);
    converted[key] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    if (prop.indexOf('--') === 0) {
      return value;
    }

    var hyphenatedProp = hyphenateStyleName(prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
var ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 *
 * @type object
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': ms,
  'animation-duration': ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': ms,
  'transition-duration': ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};
/**
 * Clones the object and adds a camel cased property version.
 */

function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var _key in obj) {
    newObj[_key] = obj[_key];
    newObj[_key.replace(regExp, replace)] = obj[_key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 */

function iterate(prop, value, options) {
  if (!value) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === 'number') {
    var unit = options[prop] || units[prop];

    if (unit) {
      return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
    }

    return value.toString();
  }

  return value;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
} // Export javascript style and css style vendor prefixes.


var js = '';
var css = '';
var vendor = '';
var browser = '';
var isTouch = isBrowser && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

if (isBrowser) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      style = _document$createEleme.style;

  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  } // Correctly detect the Edge browser.


  if (js === 'Webkit' && 'msHyphens' in style) {
    js = 'ms';
    css = jsCssMap.ms;
    browser = 'edge';
  } // Correctly detect the Safari browser.


  if (js === 'Webkit' && '-apple-trailing-word' in style) {
    vendor = 'apple';
  }
}
/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */


var prefix = {
  js: js,
  css: css,
  vendor: vendor,
  browser: browser,
  isTouch: isTouch
};
/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */

function supportedKeyframes(key) {
  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
  if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
  // https://caniuse.com/#search=keyframes

  if (prefix.js === 'ms') return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
} // https://caniuse.com/#search=appearance


var appearence = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (prefix.js === 'ms') return "-webkit-" + prop;
    return prefix.css + prop;
  }
}; // https://caniuse.com/#search=color-adjust

var colorAdjust = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
    return prop;
  }
};
var regExp = /[-\s]+(.)?/g;
/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}
/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


function camelize(str) {
  return str.replace(regExp, toUpper);
}
/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


function pascalize(str) {
  return camelize("-" + str);
} // but we can use a longhand property instead.
// https://caniuse.com/#search=mask


var mask = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var longhand = 'mask-image';

      if (camelize(longhand) in style) {
        return prop;
      }

      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }

    return prop;
  }
}; // https://caniuse.com/#search=text-orientation

var textOrientation = {
  noPrefill: ['text-orientation'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'text-orientation') return false;

    if (prefix.vendor === 'apple' && !prefix.isTouch) {
      return prefix.css + prop;
    }

    return prop;
  }
}; // https://caniuse.com/#search=transform

var transform = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;

    if (options.transform) {
      return prop;
    }

    return prefix.css + prop;
  }
}; // https://caniuse.com/#search=transition

var transition = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;

    if (options.transition) {
      return prop;
    }

    return prefix.css + prop;
  }
}; // https://caniuse.com/#search=writing-mode

var writingMode = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;

    if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
      return prefix.css + prop;
    }

    return prop;
  }
}; // https://caniuse.com/#search=user-select

var userSelect = {
  noPrefill: ['user-select'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'user-select') return false;

    if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
      return prefix.css + prop;
    }

    return prop;
  }
}; // https://caniuse.com/#search=multicolumn
// https://github.com/postcss/autoprefixer/issues/491
// https://github.com/postcss/autoprefixer/issues/177

var breakPropsOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }

    if (prefix.js === 'Moz') {
      var _jsProp = "page" + pascalize(prop);

      return _jsProp in style ? "page-" + prop : false;
    }

    return false;
  }
}; // See https://github.com/postcss/autoprefixer/issues/324.

var inlineLogicalOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (prefix.js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
}; // Camelization is required because we can't test using.
// CSS syntax for e.g. in FF.

var unprefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};
var prefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

    if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

    if (prop[0] === '-' && prop[1] === '-') return prop;
    if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

    if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
    return false;
  }
}; // https://caniuse.com/#search=scroll-snap

var scrollSnap = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;

    if (prefix.js === 'ms') {
      return "" + prefix.css + prop;
    }

    return prop;
  }
}; // https://caniuse.com/#search=overscroll-behavior

var overscrollBehavior = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;

    if (prefix.js === 'ms') {
      return prefix.css + "scroll-chaining";
    }

    return prop;
  }
};
var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

}; // Support old flex spec from 2012.

var flex2012 = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};
var propMap$1 = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};
var propKeys = Object.keys(propMap$1);

var prefixCss = function prefixCss(p) {
  return prefix.css + p;
}; // Support old flex spec from 2009.


var flex2009 = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];

      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }

      if (!multiple) return false;

      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }

      return newProp.map(prefixCss);
    }

    return false;
  }
}; // plugins = [
//   ...plugins,
//    breakPropsOld,
//    inlineLogicalOld,
//    unprefixed,
//    prefixed,
//    scrollSnap,
//    flex2012,
//    flex2009
// ]
// Plugins without 'noPrefill' value, going last.
// 'flex-*' plugins should be at the bottom.
// 'flex2009' going after 'flex2012'.
// 'prefixed' going after 'unprefixed'

var plugins$1 = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins$1.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});
var noPrefill = plugins$1.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, _toConsumableArray$1(p.noPrefill));
  return a;
}, []);
var el;
var cache$1 = {};

if (isBrowser) {
  el = document.createElement('p'); // We test every property on vendor prefix requirement.
  // Once tested, result is cached. It gives us up to 70% perf boost.
  // http://jsperf.com/element-style-object-access-vs-plain-object
  //
  // Prefill cache with known css properties to reduce amount of
  // properties we need to feature test at runtime.
  // http://davidwalsh.name/vendor-prefix

  var computed = window.getComputedStyle(document.documentElement, '');

  for (var key$1 in computed) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(key$1)) cache$1[computed[key$1]] = computed[key$1];
  } // Properties that cannot be correctly detected using the
  // cache prefill method.


  noPrefill.forEach(function (x) {
    return delete cache$1[x];
  });
}
/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */


function supportedProperty(prop, options) {
  if (options === void 0) {
    options = {};
  } // For server-side rendering.


  if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

  if ( true && cache$1[prop] != null) {
    return cache$1[prop];
  } // Check if 'transition' or 'transform' natively supported in browser.


  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el.style;
  } // Find a plugin for current prefix property.


  for (var i = 0; i < propertyDetectors.length; i++) {
    cache$1[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

    if (cache$1[prop]) break;
  } // Reset styles for current property.
  // Firefox can even throw an error for invalid properties, e.g., "0".


  try {
    el.style[prop] = '';
  } catch (err) {
    return false;
  }

  return cache$1[prop];
}

var cache$1$1 = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */

function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'var') return 'var';
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
  if (!prefixedValue) return p1 || p2;
  return prefixedValue;
}

if (isBrowser) el$1 = document.createElement('p');
/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  var prefixedValue = value;
  if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  // eslint-disable-next-line no-restricted-globals

  if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  } // Create cache key for current value.


  var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

  if ( true && cache$1$1[cacheKey] != null) {
    return cache$1$1[cacheKey];
  } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


  try {
    // Test value as it is.
    el$1.style[property] = prefixedValue;
  } catch (err) {
    // Return false if value not supported.
    cache$1$1[cacheKey] = false;
    return false;
  } // If 'transition' or 'transition-property' property.


  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === '') {
    // Value with a vendor prefix.
    prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

    if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

    el$1.style[property] = prefixedValue; // Return false if value not supported.

    if (el$1.style[property] === '') {
      cache$1$1[cacheKey] = false;
      return false;
    }
  } // Reset styles for current property.


  el$1.style[property] = ''; // Write current value to cache.

  cache$1$1[cacheKey] = prefixedValue;
  return cache$1$1[cacheKey];
}
/**
 * Add vendor prefix to a property name when needed.
 *
 * @api public
 */


function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = supportedKeyframes(atRule.at);
    }
  }

  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];

      if (prop === 'fallbacks' && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }

      var changeProp = false;
      var supportedProp = supportedProperty(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$$1 = supportedValue(supportedProp, toCssValue(value));
      if (supportedValue$$1 && supportedValue$$1 !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$$1 || value;
      }
    }

    return style;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    return prefixStyle(style);
  }

  function onChangeValue(value, prop) {
    return supportedValue(prop, toCssValue(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}
/**
 * Sort props by length.
 */


function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

function jssPreset() {
  return {
    plugins: [functionPlugin(), jssGlobal(), jssNested(), camelCase(), defaultUnit(), // Disable the vendor prefixer server-side, it does nothing.
    // This way, we can get a performance boost.
    // In the documentation, we are using `autoprefixer` to solve this problem.
    typeof window === 'undefined' ? null : jssVendorPrefixer(), jssPropsSort()]
  };
}

function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseClasses = options.baseClasses,
      newClasses = options.newClasses,
      Component = options.Component;

  if (!newClasses) {
    return baseClasses;
  }

  var nextClasses = _extends({}, baseClasses);

  if (true) {
    if (typeof newClasses === 'string') {
      console.error(["Material-UI: the value `".concat(newClasses, "` ") + "provided to the classes prop of ".concat(getDisplayName(Component), " is incorrect."), 'You might want to use the className prop instead.'].join('\n'));
      return baseClasses;
    }
  }

  Object.keys(newClasses).forEach(function (key) {
    if (true) {
      if (!baseClasses[key] && newClasses[key]) {
        console.error(["Material-UI: the key `".concat(key, "` ") + "provided to the classes prop is not implemented in ".concat(getDisplayName(Component), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(','), ".")].join('\n'));
      }

      if (newClasses[key] && typeof newClasses[key] !== 'string') {
        console.error(["Material-UI: the key `".concat(key, "` ") + "provided to the classes prop is not valid for ".concat(getDisplayName(Component), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join('\n'));
      }
    }

    if (newClasses[key]) {
      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }
  });
  return nextClasses;
} // Used https://github.com/thinkloop/multi-key-cache as inspiration


var multiKeyStore = {
  set: function set(cache, key1, key2, value) {
    var subCache = cache.get(key1);

    if (!subCache) {
      subCache = new Map();
      cache.set(key1, subCache);
    }

    subCache.set(key2, value);
  },
  get: function get(cache, key1, key2) {
    var subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : undefined;
  },
  delete: function _delete(cache, key1, key2) {
    var subCache = cache.get(key1);
    subCache.delete(key2);
  }
};
var ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);

if (true) {
  ThemeContext.displayName = 'ThemeContext';
}

function useTheme() {
  var theme = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(ThemeContext);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useDebugValue(theme);
  }

  return theme;
}

var jss = create(jssPreset()); // Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.

var generateClassName = createGenerateClassName(); // Exported for test purposes

var sheetsManager = new Map();
var defaultOptions = {
  disableGeneration: false,
  generateClassName: generateClassName,
  jss: jss,
  sheetsCache: null,
  sheetsManager: sheetsManager,
  sheetsRegistry: null
};
var StylesContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultOptions);

if (true) {
  StylesContext.displayName = 'StylesContext';
}

var injectFirstNode;

function StylesProvider(props) {
  var children = props.children,
      _props$injectFirst = props.injectFirst,
      injectFirst = _props$injectFirst === void 0 ? false : _props$injectFirst,
      _props$disableGenerat = props.disableGeneration,
      disableGeneration = _props$disableGenerat === void 0 ? false : _props$disableGenerat,
      localOptions = _objectWithoutProperties(props, ["children", "injectFirst", "disableGeneration"]);

  var outerOptions = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StylesContext);

  var context = _extends({}, outerOptions, {
    disableGeneration: disableGeneration
  }, localOptions);

  if (true) {
    if (typeof window === 'undefined' && !context.sheetsManager) {
      console.error('Material-UI: you need to use the ServerStyleSheets API when rendering on the server.');
    }
  }

  if (true) {
    if (context.jss.options.insertionPoint && injectFirst) {
      console.error('Material-UI: you cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.');
    }
  }

  if (true) {
    if (injectFirst && localOptions.jss) {
      console.error('Material-UI: you cannot use the jss and injectFirst props at the same time.');
    }
  }

  if (!context.jss.options.insertionPoint && injectFirst && typeof window !== 'undefined') {
    if (!injectFirstNode) {
      var head = document.head;
      injectFirstNode = document.createComment('mui-inject-first');
      head.insertBefore(injectFirstNode, head.firstChild);
    }

    context.jss = create({
      plugins: jssPreset().plugins,
      insertionPoint: injectFirstNode
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StylesContext.Provider, {
    value: context
  }, children);
}

 true ? StylesProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
   */
  disableGeneration: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * JSS's class name generator.
   */
  generateClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override Material-UI's styles, set this prop.
   */
  injectFirst: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * JSS's instance.
   */
  jss: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  serverGenerateClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   *
   * Beta feature.
   *
   * Cache for the sheets.
   */
  sheetsCache: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   *
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   *
   * Collect the sheets.
   */
  sheetsRegistry: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
} : undefined;

if (true) {
   true ? StylesProvider.propTypes = exactProp(StylesProvider.propTypes) : undefined;
}
/* eslint-disable import/prefer-default-export */
// Global index counter to preserve source order.
// We create the style sheet during at the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any child's styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.


var indexCounter = -1e9;

function increment() {
  indexCounter += 1;

  if (true) {
    if (indexCounter >= 0) {
      console.warn(['Material-UI: you might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join('\n'));
    }
  }

  return indexCounter;
} // We use the same empty object to ref count the styles that don't need a theme object.


var noopTheme = {};

function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';

  if (true) {
    if (_typeof(stylesOrCreator) !== 'object' && !themingEnabled) {
      console.error(['Material-UI: the `styles` argument provided is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n'));
    }
  }

  return {
    create: function create(theme, name) {
      var styles;

      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (true) {
          if (themingEnabled === true && theme === noopTheme) {
            // TODO: prepend error message/name instead
            console.error(['Material-UI: the `styles` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
          }
        }

        throw err;
      }

      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }

      var overrides = theme.overrides[name];

      var stylesWithOverrides = _extends({}, styles);

      Object.keys(overrides).forEach(function (key) {
        if (true) {
          if (!stylesWithOverrides[key]) {
            console.warn(['Material-UI: you are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n'));
          }
        }

        stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key]);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

function getClasses(_ref, classes, Component) {
  var state = _ref.state,
      stylesOptions = _ref.stylesOptions;

  if (stylesOptions.disableGeneration) {
    return classes || {};
  }

  if (!state.cacheClasses) {
    state.cacheClasses = {
      // Cache for the finalized classes value.
      value: null,
      // Cache for the last used classes prop pointer.
      lastProp: null,
      // Cache for the last used rendered classes pointer.
      lastJSS: {}
    };
  } // Tracks if either the rendered classes or classes prop has changed,
  // requiring the generation of a new finalized classes object.


  var generate = false;

  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }

  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }

  if (generate) {
    state.cacheClasses.value = mergeClasses({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component: Component
    });
  }

  return state.cacheClasses.value;
}

function attach(_ref2, props) {
  var state = _ref2.state,
      theme = _ref2.theme,
      stylesOptions = _ref2.stylesOptions,
      stylesCreator = _ref2.stylesCreator,
      name = _ref2.name;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);

  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    multiKeyStore.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }

  var options = _extends({}, stylesCreator.options, {}, stylesOptions, {
    theme: theme,
    flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
  });

  options.generateId = options.serverGenerateClassName || options.generateClassName;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    var staticSheet;

    if (stylesOptions.sheetsCache) {
      staticSheet = multiKeyStore.get(stylesOptions.sheetsCache, stylesCreator, theme);
    }

    var styles = stylesCreator.create(theme, name);

    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles, _extends({
        link: false
      }, options));
      staticSheet.attach();

      if (stylesOptions.sheetsCache) {
        multiKeyStore.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }

    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }

    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = getDynamicStyles(styles);
  }

  if (sheetManager.dynamicStyles) {
    var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends({
      link: true
    }, options));
    dynamicSheet.update(props);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = mergeClasses({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });

    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }

  sheetManager.refs += 1;
}

function update(_ref3, props) {
  var state = _ref3.state;

  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}

function detach(_ref4) {
  var state = _ref4.state,
      theme = _ref4.theme,
      stylesOptions = _ref4.stylesOptions,
      stylesCreator = _ref4.stylesCreator;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    multiKeyStore.delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }

  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}

function useSynchronousEffect(func, values) {
  var key = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef([]);
  var output; // Store "generation" key. Just returns a new object every time

  var currentKey = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    return {};
  }, values); // eslint-disable-line react-hooks/exhaustive-deps
  // "the first render", or "memo dropped the value"

  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    return function () {
      if (output) {
        output();
      }
    };
  }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
  );
}

function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var name = options.name,
      classNamePrefixOption = options.classNamePrefix,
      Component = options.Component,
      _options$defaultTheme = options.defaultTheme,
      defaultTheme = _options$defaultTheme === void 0 ? noopTheme : _options$defaultTheme,
      stylesOptions2 = _objectWithoutProperties(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

  var stylesCreator = getStylesCreator(stylesOrCreator);
  var classNamePrefix = name || classNamePrefixOption || 'makeStyles';
  stylesCreator.options = {
    index: increment(),
    name: name,
    meta: classNamePrefix,
    classNamePrefix: classNamePrefix
  };

  var useStyles = function useStyles() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var theme = useTheme() || defaultTheme;

    var stylesOptions = _extends({}, react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StylesContext), {}, stylesOptions2);

    var instance = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    var shouldUpdate = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
    useSynchronousEffect(function () {
      var current = {
        name: name,
        state: {},
        stylesCreator: stylesCreator,
        stylesOptions: stylesOptions,
        theme: theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return function () {
        detach(current);
      };
    }, [theme, stylesCreator]);
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }

      shouldUpdate.current = true;
    });
    var classes = getClasses(instance.current, props.classes, Component);

    if (true) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      react__WEBPACK_IMPORTED_MODULE_0___default.a.useDebugValue(classes);
    }

    return classes;
  };

  return useStyles;
}

var defaultTheme = createMuiTheme();

function makeStyles$1(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return makeStyles(stylesOrCreator, _extends({
    defaultTheme: defaultTheme
  }, options));
}

var dailyItems = ["Waschen und Baden", "Frühstück", "Wanderungen machen", "Sprechstunde des Lagerarztes", "Lagerruhe - Post- und Zeitungsausgabe", "Tagung des Lagerparlaments", "Gemeinsame Veranstaltungen", "Zeltruhe"];
var schedule = ["6 Uhr", "8 Uhr", "8 ½ – 12 Uhr ", "8 ½ – 9 ½", "12 ½ – 14 ½ ", "18 – 19 Uhr", "19 ½ – 21 Uhr", "21 Uhr"];
var description = "Um die einzelnen Tagespunkte in die richtige Reihenfolge zu bringen, ziehe sie einfach auf das Plakat. Klicke auf 'Tagesplan anzeigen!', um dir den originalen Tagesablauf anzusehen.";

var Daily = function Daily(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      result = _useState2[0],
      setResult = _useState2[1];

  var handleClick = function handleClick() {
    setResult(true); //props.onCheckDaily();
  };

  var getItems = function getItems() {
    if (result) return;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "items"
    }, dailyItems.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: index,
        className: "item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_drag_drop_container__WEBPACK_IMPORTED_MODULE_2__["DragDropContainer"], {
        targetKey: "box",
        dragData: {
          label: item
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item)));
    }));
  };

  var showStatus = function showStatus() {
    if (result) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
        value: 'daily_result'
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
      targetKey: "box"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: 'button',
      className: 'link-button show',
      onClick: function onClick() {
        return handleClick();
      }
    }, "Tagesplan anzeigen!"));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "daily"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "description"
  }, description), getItems(), showStatus());
};

var Box = function Box(props) {
  var useStyles = makeStyles$1(function () {
    return {
      box: {
        background: 'url(./assets/daily.webp) no-repeat center center'
      }
    };
  });
  var classes = useStyles();

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      boxItems = _useState4[0],
      setBoxItems = _useState4[1];

  var handleDrop = function handleDrop(e) {
    var items = boxItems.slice();
    items.push({
      label: e.dragData.label,
      uid: shortid__WEBPACK_IMPORTED_MODULE_3___default.a.generate()
    });
    setBoxItems(items);
    e.containerElem.style.visibility = "hidden";
  };

  var swap = function swap(fromIndex, toIndex, dragData) {
    var items = boxItems.slice();
    var item = {
      label: dragData.label,
      uid: shortid__WEBPACK_IMPORTED_MODULE_3___default.a.generate()
    };
    items.splice(toIndex, 0, item);
    setBoxItems(items);
  };

  var kill = function kill(uid) {
    var items = boxItems.slice();
    var index = items.findIndex(function (item) {
      return item.uid === uid;
    });

    if (index !== -1) {
      items.splice(index, 1);
    }

    setBoxItems(items);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_drag_drop_container__WEBPACK_IMPORTED_MODULE_2__["DropTarget"], {
    onHit: handleDrop,
    targetKey: props.targetKey,
    dropData: {
      name: props.name
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_drag_drop_container__WEBPACK_IMPORTED_MODULE_2__["DropTarget"], {
    onHit: handleDrop,
    targetKey: "boxItem",
    dropData: {
      name: props.name
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "component_box ".concat(classes.box)
  }, boxItems.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxItem, {
      key: item.uid,
      uid: item.uid,
      kill: kill,
      index: index,
      swap: swap
    }, item.label);
  }))));
};

var BoxItem = function BoxItem(props) {
  var handleDrop = function handleDrop(e) {
    e.stopPropagation();
    props.swap(e.dragData.index, props.index, e.dragData);
    e.containerElem.style.visibility = "hidden";
  };

  var deleteMe = function deleteMe() {
    props.kill(props.uid);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box_item_component"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_drag_drop_container__WEBPACK_IMPORTED_MODULE_2__["DragDropContainer"], {
    targetKey: "boxItem",
    dragData: {
      label: props.children,
      index: props.index
    },
    onDrop: deleteMe,
    disappearDraggedElement: true,
    dragHandleClassName: "grabber"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_drag_drop_container__WEBPACK_IMPORTED_MODULE_2__["DropTarget"], {
    onHit: handleDrop,
    targetKey: "boxItem"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "outer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "grabber"
  }, "\u2237"), schedule[props.index], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u2003"), props.children)))));
};

var Square = function Square(_ref) {
  var value = _ref.value,
      onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    role: "button",
    tabIndex: 0,
    className: 'square',
    onClick: onClick
  }, value);
};

var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
var userSymbol = "X";
var computerSymbol = "O";

var TicTacToe = function TicTacToe(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AppContext),
      _useContext2 = _slicedToArray(_useContext, 2),
      character = _useContext2[0],
      setCharacter = _useContext2[1];

  var status = "Um zu spielen, setze dein Kreuz in eines der K\xE4stchen, indem du dort hinein klickst. Danach ist ".concat(character, " dran. Um zu gewinnen, musst du drei Kreuze in einer waagerechten, senkrechten oder diagonalen Reihe platzieren.");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Array(9).fill(null)),
      _useState2 = _slicedToArray(_useState, 2),
      squares = _useState2[0],
      setSquares = _useState2[1];

  var winner = calculateWinner(squares);

  function getStatus() {
    if (winner) {
      document.querySelector('.result').scrollIntoView({
        behavior: 'smooth'
      });
      return winner === "X" ? "Du hast gewonnen!" : "Es ist ja nur ein Spiel!";
    } else if (isBoardFull(squares)) {
      document.querySelector('.result').scrollIntoView({
        behavior: 'smooth'
      });
      return "Ein solidarisches Remis!";
    } else {
      return '';
    }
  }

  function renderSquare(i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Square, {
      value: squares[i],
      key: i,
      onClick: function onClick() {
        if (squares[i] != null || winner != null) {
          return;
        }

        var nextSquares = squares.slice();
        nextSquares[i] = userSymbol;
        setSquares(nextSquares);

        if (!calculateWinner(nextSquares)) {
          setTimeout(function () {
            var generatedSquares = nextSquares.slice();
            var generatedSquare = setGeneratedSquare(generatedSquares);

            if (generatedSquare != null) {
              generatedSquares[generatedSquare] = computerSymbol;
              setSquares(generatedSquares);
            }
          }, 300);
        }
      }
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'game'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'status'
  }, status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'board'
  }, squares.map(function (value, index) {
    return renderSquare(index);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'result'
  }, getStatus()));
};

function setGeneratedSquare(squares) {
  for (var i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return i;
    }
  }

  return null;
}

function calculateWinner(squares) {
  // go over all possibly winning lines and check if they consist of only X's/only O's
  for (var i = 0; i < lines.length; i++) {
    var _lines$i = _slicedToArray(lines[i], 3),
        a = _lines$i[0],
        b = _lines$i[1],
        c = _lines$i[2];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function isBoardFull(squares) {
  for (var i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      return false;
    }
  }

  return true;
}

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var globals = createCommonjsModule(function (module, exports) {
  function insertRule(e) {
    try {
      return sheet.insertRule(e, sheet.cssRules.length);
    } catch (e) {
      console.warn("react-reveal - animation failed");
    }
  }

  function cascade(e, n, t, o, r) {
    var s = Math.log(o),
        i = Math.log(r),
        a = (i - s) / (t - n);
    return Math.exp(s + a * (e - n));
  }

  function animation(e) {
    if (!sheet) return "";
    var n = "@keyframes " + (name + counter) + "{" + e + "}",
        t = effectMap[e];
    return t ? "" + name + t : (sheet.insertRule(n, sheet.cssRules.length), effectMap[e] = counter, "" + name + counter++);
  }

  function hideAll() {
    globalHide || (exports.globalHide = globalHide = !0, window.removeEventListener("scroll", hideAll, !0), insertRule("." + namespace + " { opacity: 0; }"), window.removeEventListener("orientationchange", hideAll, !0), window.document.removeEventListener("visibilitychange", hideAll));
  }

  function config(e) {
    var n = e.ssrFadeout;
    exports.fadeOutEnabled = fadeOutEnabled = n;
  }

  Object.defineProperty(exports, "__esModule", {
    value: !0
  }), exports.insertRule = insertRule, exports.cascade = cascade, exports.animation = animation, exports.hideAll = hideAll, exports.default = config;

  var namespace = exports.namespace = "react-reveal",
      defaults = exports.defaults = {
    duration: 1e3,
    delay: 0,
    count: 1
  },
      ssr = exports.ssr = !0,
      observerMode = exports.observerMode = !1,
      raf = exports.raf = function (e) {
    return window.setTimeout(e, 66);
  },
      disableSsr = exports.disableSsr = function () {
    return exports.ssr = ssr = !1;
  },
      fadeOutEnabled = exports.fadeOutEnabled = !1,
      ssrFadeout = exports.ssrFadeout = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return exports.fadeOutEnabled = fadeOutEnabled = e;
  },
      globalHide = exports.globalHide = !1,
      ie10 = exports.ie10 = !1,
      collapseend = exports.collapseend = void 0,
      counter = 1,
      effectMap = {},
      sheet = !1,
      name = namespace + "-" + Math.floor(1e15 * Math.random()) + "-";

  if ("undefined" != typeof window && "nodejs" !== window.name && window.document && "undefined" != typeof navigator) {
    exports.observerMode = observerMode = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype && /\{\s*\[native code\]\s*\}/.test("" + IntersectionObserver), exports.raf = raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || raf, exports.ssr = ssr = window.document.querySelectorAll("div[data-reactroot]").length > 0, -1 !== navigator.appVersion.indexOf("MSIE 10") && (exports.ie10 = ie10 = !0), ssr && "performance" in window && "timing" in window.performance && "domContentLoadedEventEnd" in window.performance.timing && window.performance.timing.domLoading && Date.now() - window.performance.timing.domLoading < 300 && (exports.ssr = ssr = !1), ssr && window.setTimeout(disableSsr, 1500), observerMode || (exports.collapseend = collapseend = document.createEvent("Event"), collapseend.initEvent("collapseend", !0, !0));
    var element = document.createElement("style");
    document.head.appendChild(element), element.sheet && element.sheet.cssRules && element.sheet.insertRule && (sheet = element.sheet, window.addEventListener("scroll", hideAll, !0), window.addEventListener("orientationchange", hideAll, !0), window.document.addEventListener("visibilitychange", hideAll));
  }
});
unwrapExports(globals);
var globals_1 = globals.globalHide;
var globals_2 = globals.fadeOutEnabled;
var globals_3 = globals.insertRule;
var globals_4 = globals.cascade;
var globals_5 = globals.animation;
var globals_6 = globals.hideAll;
var globals_7 = globals.namespace;
var globals_8 = globals.defaults;
var globals_9 = globals.ssr;
var globals_10 = globals.observerMode;
var globals_11 = globals.raf;
var globals_12 = globals.disableSsr;
var globals_13 = globals.ssrFadeout;
var globals_14 = globals.ie10;
var globals_15 = globals.collapseend;
var RevealBase_1 = createCommonjsModule(function (module, exports) {
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  function _defineProperty(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = i, e;
  }

  function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }

  function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });

  var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  },
      _slicedToArray = function () {
    function e(e, t) {
      var i = [],
          s = !0,
          o = !1,
          n = void 0;

      try {
        for (var r, a = e[Symbol.iterator](); !(s = (r = a.next()).done) && (i.push(r.value), !t || i.length !== t); s = !0) {
          ;
        }
      } catch (e) {
        o = !0, n = e;
      } finally {
        try {
          !s && a.return && a.return();
        } finally {
          if (o) throw n;
        }
      }

      return i;
    }

    return function (t, i) {
      if (Array.isArray(t)) return t;
      if (Symbol.iterator in Object(t)) return e(t, i);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(),
      _extends = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];

      for (var s in i) {
        Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
      }
    }

    return e;
  },
      _createClass = function () {
    function e(e, t) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }

    return function (t, i, s) {
      return i && e(t.prototype, i), s && e(t, s), t;
    };
  }(),
      _react2 = _interopRequireDefault(react__WEBPACK_IMPORTED_MODULE_0___default.a),
      inOut = (0, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape)({
    make: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    duration: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
    delay: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
    forever: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    count: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
    style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
    reverse: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
  }),
      propTypes = {
    collapse: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    collapseEl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.element,
    cascade: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    wait: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    force: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    fraction: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    refProp: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    onReveal: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    inEffect: inOut.isRequired,
    outEffect: (0, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType)([inOut, (0, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf)([!1])]).isRequired,
    ssrReveal: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    collapseOnly: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    ssrFadeout: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
  },
      defaultProps = {
    fraction: .2,
    refProp: "ref"
  },
      contextTypes = {
    transitionGroup: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
  },
      RevealBase = function (e) {
    function t(e, i) {
      _classCallCheck(this, t);

      var s = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));

      return s.isOn = void 0 === e.when || !!e.when, s.state = {
        collapse: e.collapse ? t.getInitialCollapseStyle(e) : void 0,
        style: {
          opacity: s.isOn && !e.ssrReveal || !e.outEffect ? void 0 : 0
        }
      }, s.savedChild = !1, s.isShown = !1, globals.observerMode ? s.handleObserve = s.handleObserve.bind(s) : (s.revealHandler = s.makeHandler(s.reveal), s.resizeHandler = s.makeHandler(s.resize)), s.saveRef = s.saveRef.bind(s), s;
    }

    return _inherits(t, e), _createClass(t, [{
      key: "saveRef",
      value: function value(e) {
        this.childRef && this.childRef(e), this.props.innerRef && this.props.innerRef(e), this.el !== e && (this.el = e && "offsetHeight" in e ? e : void 0, this.observe(this.props, !0));
      }
    }, {
      key: "invisible",
      value: function value() {
        this && this.el && (this.savedChild = !1, this.isShown || (this.setState({
          hasExited: !0,
          collapse: this.props.collapse ? _extends({}, this.state.collapse, {
            visibility: "hidden"
          }) : null,
          style: {
            opacity: 0
          }
        }), !globals.observerMode && this.props.collapse && window.document.dispatchEvent(globals.collapseend)));
      }
    }, {
      key: "animationEnd",
      value: function value(e, t, i) {
        var s = this,
            o = i.forever,
            n = i.count,
            r = i.delay,
            a = i.duration;

        if (!o) {
          var l = function l() {
            s && s.el && (s.animationEndTimeout = void 0, e.call(s));
          };

          this.animationEndTimeout = window.setTimeout(l, r + (a + (t ? a : 0) * n));
        }
      }
    }, {
      key: "getDimensionValue",
      value: function value() {
        return this.el.offsetHeight + parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top"), 10) + parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom"), 10);
      }
    }, {
      key: "collapse",
      value: function value(e, t, i) {
        var s = i.duration + (t.cascade ? i.duration : 0),
            o = this.isOn ? this.getDimensionValue() : 0,
            n = void 0,
            r = void 0;
        if (t.collapseOnly) n = i.duration / 3, r = i.delay;else {
          var a = s >> 2,
              l = a >> 1;
          n = a, r = i.delay + (this.isOn ? 0 : s - a - l), e.style.animationDuration = s - a + (this.isOn ? l : -l) + "ms", e.style.animationDelay = i.delay + (this.isOn ? a - l : 0) + "ms";
        }
        return e.collapse = {
          height: o,
          transition: "height " + n + "ms ease " + r + "ms",
          overflow: t.collapseOnly ? "hidden" : void 0
        }, e;
      }
    }, {
      key: "animate",
      value: function value(e) {
        if (this && this.el && (this.unlisten(), this.isShown !== this.isOn)) {
          this.isShown = this.isOn;
          var t = !this.isOn && e.outEffect,
              i = e[t ? "outEffect" : "inEffect"],
              s = "style" in i && i.style.animationName || void 0,
              o = void 0;
          e.collapseOnly ? o = {
            hasAppeared: !0,
            hasExited: !1,
            style: {
              opacity: 1
            }
          } : ((e.outEffect || this.isOn) && i.make && (s = i.make), o = {
            hasAppeared: !0,
            hasExited: !1,
            collapse: void 0,
            style: _extends({}, i.style, {
              animationDuration: i.duration + "ms",
              animationDelay: i.delay + "ms",
              animationIterationCount: i.forever ? "infinite" : i.count,
              opacity: 1,
              animationName: s
            }),
            className: i.className
          }), this.setState(e.collapse ? this.collapse(o, e, i) : o), t ? (this.savedChild = _react2.default.cloneElement(this.getChild()), this.animationEnd(this.invisible, e.cascade, i)) : this.savedChild = !1, this.onReveal(e);
        }
      }
    }, {
      key: "onReveal",
      value: function value(e) {
        e.onReveal && this.isOn && (this.onRevealTimeout && (this.onRevealTimeout = window.clearTimeout(this.onRevealTimeout)), e.wait ? this.onRevealTimeout = window.setTimeout(e.onReveal, e.wait) : e.onReveal());
      }
    }, {
      key: "componentWillUnmount",
      value: function value() {
        this.unlisten(), globals.ssr && (0, globals.disableSsr)();
      }
    }, {
      key: "handleObserve",
      value: function value(e, t) {
        _slicedToArray(e, 1)[0].intersectionRatio > 0 && (t.disconnect(), this.observer = null, this.reveal(this.props, !0));
      }
    }, {
      key: "observe",
      value: function value(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

        if (this.el && globals.observerMode) {
          if (this.observer) {
            if (!t) return;
            this.observer.disconnect();
          } else if (t) return;

          this.observer = new IntersectionObserver(this.handleObserve, {
            threshold: e.fraction
          }), this.observer.observe(this.el);
        }
      }
    }, {
      key: "reveal",
      value: function value(e) {
        var t = this,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        globals.globalHide || (0, globals.hideAll)(), this && this.el && (e || (e = this.props), globals.ssr && (0, globals.disableSsr)(), this.isOn && this.isShown && void 0 !== e.spy ? (this.isShown = !1, this.setState({
          style: {}
        }), window.setTimeout(function () {
          return t.reveal(e);
        }, 200)) : i || this.inViewport(e) || e.force ? this.animate(e) : globals.observerMode ? this.observe(e) : this.listen());
      }
    }, {
      key: "componentDidMount",
      value: function value() {
        var e = this;

        if (this.el && !this.props.disabled) {
          this.props.collapseOnly || ("make" in this.props.inEffect && this.props.inEffect.make(!1, this.props), void 0 !== this.props.when && this.props.outEffect && "make" in this.props.outEffect && this.props.outEffect.make(!0, this.props));
          var i = this.context.transitionGroup,
              s = i && !i.isMounting ? !("enter" in this.props && !1 === this.props.enter) : this.props.appear;
          return this.isOn && ((void 0 !== this.props.when || void 0 !== this.props.spy) && !s || globals.ssr && !globals.fadeOutEnabled && !this.props.ssrFadeout && this.props.outEffect && !this.props.ssrReveal && t.getTop(this.el) < window.pageYOffset + window.innerHeight) ? (this.isShown = !0, this.setState({
            hasAppeared: !0,
            collapse: this.props.collapse ? {
              height: this.getDimensionValue()
            } : this.state.collapse,
            style: {
              opacity: 1
            }
          }), void this.onReveal(this.props)) : globals.ssr && (globals.fadeOutEnabled || this.props.ssrFadeout) && this.props.outEffect && t.getTop(this.el) < window.pageYOffset + window.innerHeight ? (this.setState({
            style: {
              opacity: 0,
              transition: "opacity 1000ms 1000ms"
            }
          }), void window.setTimeout(function () {
            return e.reveal(e.props, !0);
          }, 2e3)) : void (this.isOn && (this.props.force ? this.animate(this.props) : this.reveal(this.props)));
        }
      }
    }, {
      key: "cascade",
      value: function value(e) {
        var t = this,
            i = void 0;
        i = "string" == typeof e ? e.split("").map(function (e, t) {
          return _react2.default.createElement("span", {
            key: t,
            style: {
              display: "inline-block",
              whiteSpace: "pre"
            }
          }, e);
        }) : _react2.default.Children.toArray(e);
        var s = this.props[this.isOn || !this.props.outEffect ? "inEffect" : "outEffect"],
            o = s.duration,
            n = s.reverse,
            r = i.length,
            a = 2 * o;
        this.props.collapse && (a = parseInt(this.state.style.animationDuration, 10), o = a / 2);
        var l = n ? r : 0;
        return i = i.map(function (e) {
          return "object" === (void 0 === e ? "undefined" : _typeof(e)) && e ? _react2.default.cloneElement(e, {
            style: _extends({}, e.props.style, t.state.style, {
              animationDuration: Math.round((0, globals.cascade)(n ? l-- : l++, 0, r, o, a)) + "ms"
            })
          }) : e;
        });
      }
    }, {
      key: "componentWillReceiveProps",
      value: function value(e) {
        if (void 0 !== e.when && (this.isOn = !!e.when), e.fraction !== this.props.fraction && this.observe(e, !0), !this.isOn && e.onExited && "exit" in e && !1 === e.exit) return void e.onExited();
        e.disabled || (e.collapse && !this.props.collapse && (this.setState({
          style: {},
          collapse: t.getInitialCollapseStyle(e)
        }), this.isShown = !1), e.when === this.props.when && e.spy === this.props.spy || this.reveal(e), this.onRevealTimeout && !this.isOn && (this.onRevealTimeout = window.clearTimeout(this.onRevealTimeout)));
      }
    }, {
      key: "getChild",
      value: function value() {
        if (this.savedChild && !this.props.disabled) return this.savedChild;

        if ("object" === _typeof(this.props.children)) {
          var e = _react2.default.Children.only(this.props.children);

          return "type" in e && "string" == typeof e.type || "ref" !== this.props.refProp ? e : _react2.default.createElement("div", null, e);
        }

        return _react2.default.createElement("div", null, this.props.children);
      }
    }, {
      key: "render",
      value: function value() {
        var e = void 0;
        e = this.state.hasAppeared ? !this.props.unmountOnExit || !this.state.hasExited || this.isOn : !this.props.mountOnEnter || this.isOn;
        var t = this.getChild();
        "function" == typeof t.ref && (this.childRef = t.ref);
        var i = !1,
            s = t.props,
            o = s.style,
            n = s.className,
            r = s.children,
            a = this.props.disabled ? n : (this.props.outEffect ? globals.namespace : "") + (this.state.className ? " " + this.state.className : "") + (n ? " " + n : "") || void 0,
            l = void 0;
        "function" == typeof this.state.style.animationName && (this.state.style.animationName = this.state.style.animationName(!this.isOn, this.props)), this.props.cascade && !this.props.disabled && r && this.state.style.animationName ? (i = this.cascade(r), l = _extends({}, o, {
          opacity: 1
        })) : l = this.props.disabled ? o : _extends({}, o, this.state.style);

        var p = _extends({}, this.props.props, _defineProperty({
          className: a,
          style: l
        }, this.props.refProp, this.saveRef)),
            h = _react2.default.cloneElement(t, p, e ? i || r : void 0);

        return void 0 !== this.props.collapse ? this.props.collapseEl ? _react2.default.cloneElement(this.props.collapseEl, {
          style: _extends({}, this.props.collapseEl.style, this.props.disabled ? void 0 : this.state.collapse),
          children: h
        }) : _react2.default.createElement("div", {
          style: this.props.disabled ? void 0 : this.state.collapse,
          children: h
        }) : h;
      }
    }, {
      key: "makeHandler",
      value: function value(e) {
        var t = this,
            i = function i() {
          e.call(t, t.props), t.ticking = !1;
        };

        return function () {
          t.ticking || ((0, globals.raf)(i), t.ticking = !0);
        };
      }
    }, {
      key: "inViewport",
      value: function value(e) {
        if (!this.el || window.document.hidden) return !1;
        var i = this.el.offsetHeight,
            s = window.pageYOffset - t.getTop(this.el),
            o = Math.min(i, window.innerHeight) * (globals.globalHide ? e.fraction : 0);
        return s > o - window.innerHeight && s < i - o;
      }
    }, {
      key: "resize",
      value: function value(e) {
        this && this.el && this.isOn && this.inViewport(e) && (this.unlisten(), this.isShown = this.isOn, this.setState({
          hasExited: !this.isOn,
          hasAppeared: !0,
          collapse: void 0,
          style: {
            opacity: this.isOn || !e.outEffect ? 1 : 0
          }
        }), this.onReveal(e));
      }
    }, {
      key: "listen",
      value: function value() {
        globals.observerMode || this.isListener || (this.isListener = !0, window.addEventListener("scroll", this.revealHandler, {
          passive: !0
        }), window.addEventListener("orientationchange", this.revealHandler, {
          passive: !0
        }), window.document.addEventListener("visibilitychange", this.revealHandler, {
          passive: !0
        }), window.document.addEventListener("collapseend", this.revealHandler, {
          passive: !0
        }), window.addEventListener("resize", this.resizeHandler, {
          passive: !0
        }));
      }
    }, {
      key: "unlisten",
      value: function value() {
        !globals.observerMode && this.isListener && (window.removeEventListener("scroll", this.revealHandler, {
          passive: !0
        }), window.removeEventListener("orientationchange", this.revealHandler, {
          passive: !0
        }), window.document.removeEventListener("visibilitychange", this.revealHandler, {
          passive: !0
        }), window.document.removeEventListener("collapseend", this.revealHandler, {
          passive: !0
        }), window.removeEventListener("resize", this.resizeHandler, {
          passive: !0
        }), this.isListener = !1), this.onRevealTimeout && (this.onRevealTimeout = window.clearTimeout(this.onRevealTimeout)), this.animationEndTimeout && (this.animationEndTimeout = window.clearTimeout(this.animationEndTimeout));
      }
    }], [{
      key: "getInitialCollapseStyle",
      value: function value(e) {
        return {
          height: 0,
          visibility: e.when ? void 0 : "hidden"
        };
      }
    }, {
      key: "getTop",
      value: function value(e) {
        for (; void 0 === e.offsetTop;) {
          e = e.parentNode;
        }

        for (var t = e.offsetTop; e.offsetParent; t += e.offsetTop) {
          e = e.offsetParent;
        }

        return t;
      }
    }]), t;
  }(_react2.default.Component);

  RevealBase.propTypes = propTypes, RevealBase.defaultProps = defaultProps, RevealBase.contextTypes = contextTypes, RevealBase.displayName = "RevealBase", exports.default = RevealBase, module.exports = exports.default;
});
unwrapExports(RevealBase_1);
var wrap_1 = createCommonjsModule(function (module, exports) {
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  function wrap(e, t, a, r) {
    return "in" in e && (e.when = e.in), _react2.default.Children.count(r) < 2 ? _react2.default.createElement(_RevealBase2.default, _extends({}, e, {
      inEffect: t,
      outEffect: a,
      children: r
    })) : (r = _react2.default.Children.map(r, function (r) {
      return _react2.default.createElement(_RevealBase2.default, _extends({}, e, {
        inEffect: t,
        outEffect: a,
        children: r
      }));
    }), "Fragment" in _react2.default ? _react2.default.createElement(_react2.default.Fragment, null, r) : _react2.default.createElement("span", null, r));
  }

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });

  var _extends = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];

      for (var r in a) {
        Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
      }
    }

    return e;
  };

  exports.default = wrap;

  var _react2 = _interopRequireDefault(react__WEBPACK_IMPORTED_MODULE_0___default.a),
      _RevealBase2 = _interopRequireDefault(RevealBase_1);

  module.exports = exports.default;
});
unwrapExports(wrap_1);
var Shake_1 = createCommonjsModule(function (module, exports) {
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  function _objectWithoutProperties(e, r) {
    var o = {};

    for (var t in e) {
      r.indexOf(t) >= 0 || Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t]);
    }

    return o;
  }

  function make() {
    return name || (name = (0, globals.animation)(rule));
  }

  function Shake() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globals.defaults,
        r = e.children,
        o = (e.out, e.timeout),
        t = e.duration,
        a = void 0 === t ? globals.defaults.duration : t,
        n = e.delay,
        u = void 0 === n ? globals.defaults.delay : n,
        p = e.count,
        l = void 0 === p ? globals.defaults.count : p,
        i = e.forever,
        s = _objectWithoutProperties(e, ["children", "out", "timeout", "duration", "delay", "count", "forever"]),
        d = {
      make: make,
      duration: void 0 === o ? a : o,
      delay: u,
      forever: i,
      count: l,
      style: {
        animationFillMode: "both"
      }
    };

    return (0, _wrap2.default)(s, d, !1, r, !0);
  }

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });

  var _wrap2 = _interopRequireDefault(wrap_1),
      propTypes = {
    duration: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    timeout: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    delay: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    count: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    forever: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
  },
      rule = "\nfrom, to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    transform: translate3d(10px, 0, 0);\n}\n",
      name = !1;

  Shake.propTypes = propTypes, exports.default = Shake, module.exports = exports.default;
});
var Shake = unwrapExports(Shake_1);
var Jump_1 = createCommonjsModule(function (module, exports) {
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  function _objectWithoutProperties(e, r) {
    var t = {};

    for (var n in e) {
      r.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }

    return t;
  }

  function make() {
    return name || (name = (0, globals.animation)(rule));
  }

  function Jump() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globals.defaults,
        r = e.children,
        t = (e.out, e.timeout),
        n = e.duration,
        o = void 0 === n ? globals.defaults.duration : n,
        a = e.delay,
        i = void 0 === a ? globals.defaults.delay : a,
        u = e.count,
        p = void 0 === u ? globals.defaults.count : u,
        l = e.forever,
        s = _objectWithoutProperties(e, ["children", "out", "timeout", "duration", "delay", "count", "forever"]),
        d = {
      make: make,
      duration: void 0 === t ? o : t,
      delay: i,
      forever: l,
      count: p,
      style: {
        animationFillMode: "both"
      }
    };

    return (0, _wrap2.default)(s, d, !1, r, !0);
  }

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });

  var _wrap2 = _interopRequireDefault(wrap_1),
      propTypes = {
    duration: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    timeout: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    delay: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    count: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    forever: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
  },
      rule = "\n from, 20%, 53%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -4px, 0);\n}\n",
      name = !1;

  Jump.propTypes = propTypes, exports.default = Jump, module.exports = exports.default;
});
var Jump = unwrapExports(Jump_1);
var _this = undefined;

var Suitcase = function Suitcase(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AppContext),
      _useContext2 = _slicedToArray(_useContext, 2),
      character = _useContext2[0],
      setCharacter = _useContext2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      drag = _useState2[0],
      setDrag = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      bagCounter = _useState4[0],
      setBagCounter = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showResult = _useState6[0],
      setShowResult = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState8 = _slicedToArray(_useState7, 2),
      falseCounter = _useState8[0],
      setFalseCounter = _useState8[1];

  var dropped = function dropped(e) {
    e.containerElem.style.visibility = "hidden";
    setBagCounter(bagCounter + 1);
    setDrag("".concat(character, " packt ").concat(e.dragData.label, " ein."));

    if (bagCounter === 5) {
      _this.props.onCheckBag();
    }
  };

  var droppedFalseItem = function droppedFalseItem(e) {
    setDrag("".concat(character, " braucht ").concat(e.dragData.label, " wohl eher nicht."));
    setFalseCounter(falseCounter + 1);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'suitcase'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'items'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Items, {
    targetKey: 'bag',
    label: 'ein Hemd',
    image: 'suitcase_hemd'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Items, {
    targetKey: 'bag',
    label: 'eine Feldflasche',
    image: 'suitcase_feldflasche'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Items, {
    targetKey: 'negative',
    label: 'ein Radio',
    image: 'suitcase_radio'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Items, {
    targetKey: 'bag',
    label: 'eine Seife',
    image: 'suitcase_seife'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Items, {
    targetKey: 'negative',
    label: 'ein Smartphone',
    image: 'suitcase_smartphone'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Items, {
    targetKey: 'bag',
    label: "eine Zahnb\xFCrste",
    image: "suitcase_zahnb\xFCrste"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Items, {
    targetKey: 'negative',
    label: 'eine Karaffe',
    image: 'suitcase_karaffe'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Items, {
    targetKey: 'negative',
    label: 'eine Topfpflanze',
    image: 'suitcase_topfpflanze'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Items, {
    targetKey: 'bag',
    label: "einen L\xF6ffel",
    image: "suitcase_l\xF6ffel"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Items, {
    targetKey: 'negative',
    label: 'einen Hammer',
    image: 'suitcase_hammer'
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_drag_drop_container__WEBPACK_IMPORTED_MODULE_2__["DropTarget"], {
    onHit: function onHit(e) {
      return dropped(e);
    },
    targetKey: 'bag'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_drag_drop_container__WEBPACK_IMPORTED_MODULE_2__["DropTarget"], {
    onHit: function onHit(e) {
      return droppedFalseItem(e);
    },
    targetKey: 'negative'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Jump, {
    spy: bagCounter
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Shake, {
    spy: falseCounter
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'bag'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    value: 'suitcase'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'dragText'
  }, drag)))))));
};

var Items = function Items(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_drag_drop_container__WEBPACK_IMPORTED_MODULE_2__["DragDropContainer"], {
    targetKey: props.targetKey,
    dragData: {
      label: props.label
    },
    render: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
        value: props.image
      });
    }
  });
};

var Title = function Title(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, props.text));
};

var Scrollicon = function Scrollicon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'icon-scroll'
  });
};

var Header = function Header(props) {
  var useStyles = makeStyles$1(function () {
    return {
      chapter: {
        backgroundImage: "url(".concat("./assets/" + props.link + _gerdesque_data__WEBPACK_IMPORTED_MODULE_1__["IMAGE_SUFFIX"], ")"),
        boxShadow: '0 0 8px 8px #dcd5cc inset',
        flexDirection: 'column'
      }
    };
  });
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: 'parallax__group parallax__header'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "parallax__layer parallax__layer--base fade-in-scale ".concat(classes.chapter)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    text: props.name
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Scrollicon, null)));
};

var Video = function Video(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPlaying = _useState2[0],
      setPlaying = _useState2[1];

  var playVideo = function playVideo(playing) {
    setPlaying(playing);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chapter_video ".concat(props.layer, " ").concat(isPlaying ? 'theater' : '')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
    controls: true,
    onPlaying: function onPlaying() {
      return playVideo(true);
    },
    onPause: function onPause() {
      return playVideo(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    type: 'video/mp4',
    src: "./assets/movies/" + props.value + _gerdesque_data__WEBPACK_IMPORTED_MODULE_1__["VIDEO_SUFFIX"]
  }), "Your browser does not support the video tag."));
};

var Fade_1 = createCommonjsModule(function (module, exports) {
  function _interopRequireDefault(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }

  function _objectWithoutProperties(o, e) {
    var r = {};

    for (var t in o) {
      e.indexOf(t) >= 0 || Object.prototype.hasOwnProperty.call(o, t) && (r[t] = o[t]);
    }

    return r;
  }

  function make(o, e) {
    var r = e.distance,
        t = e.left,
        p = e.right,
        a = e.up,
        l = e.down,
        i = e.top,
        u = e.bottom,
        n = e.big,
        s = e.mirror,
        d = e.opposite,
        _ = (r ? r.toString() : 0) + ((t ? 1 : 0) | (p ? 2 : 0) | (i || l ? 4 : 0) | (u || a ? 8 : 0) | (s ? 16 : 0) | (d ? 32 : 0) | (o ? 64 : 0) | (n ? 128 : 0));

    if (lookup.hasOwnProperty(_)) return lookup[_];
    var f = t || p || a || l || i || u,
        y = void 0,
        b = void 0;

    if (f) {
      if (!s != !(o && d)) {
        var v = [p, t, u, i, l, a];
        t = v[0], p = v[1], i = v[2], u = v[3], a = v[4], l = v[5];
      }

      var c = r || (n ? "2000px" : "100%");
      y = t ? "-" + c : p ? c : "0", b = l || i ? "-" + c : a || u ? c : "0";
    }

    return lookup[_] = (0, globals.animation)((o ? "to" : "from") + " {opacity: 0;" + (f ? " transform: translate3d(" + y + ", " + b + ", 0);" : "") + "}\n     " + (o ? "from" : "to") + " {opacity: 1;transform: none;} "), lookup[_];
  }

  function Fade() {
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : globals.defaults,
        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = o.children,
        t = (o.out, o.forever),
        p = o.timeout,
        a = o.duration,
        l = void 0 === a ? globals.defaults.duration : a,
        i = o.delay,
        u = void 0 === i ? globals.defaults.delay : i,
        n = o.count,
        s = void 0 === n ? globals.defaults.count : n,
        d = _objectWithoutProperties(o, ["children", "out", "forever", "timeout", "duration", "delay", "count"]),
        _ = {
      make: make,
      duration: void 0 === p ? l : p,
      delay: u,
      forever: t,
      count: s,
      style: {
        animationFillMode: "both"
      },
      reverse: d.left
    };

    return e ? (0, _wrap2.default)(d, _, _, r) : _;
  }

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });

  var _wrap2 = _interopRequireDefault(wrap_1),
      propTypes = {
    out: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    left: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    right: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    top: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    big: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    mirror: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    opposite: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    duration: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    timeout: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    distance: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    delay: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    count: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    forever: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
  },
      lookup = {};

  Fade.propTypes = propTypes, exports.default = Fade, module.exports = exports.default;
});
var Fade = unwrapExports(Fade_1);
var Reveal_1 = createCommonjsModule(function (module, exports) {
  function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }

  function _objectWithoutProperties(e, t) {
    var r = {};

    for (var o in e) {
      t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
    }

    return r;
  }

  function Reveal(e) {
    function t(e) {
      return e ? _ ? {
        duration: n,
        delay: f,
        count: s,
        forever: d,
        className: _,
        style: {}
      } : y : i ? {
        duration: void 0 === o ? u : o,
        delay: p,
        count: a,
        forever: l,
        className: i,
        style: {}
      } : c;
    }

    var r = e.children,
        o = e.timeout,
        u = e.duration,
        p = e.delay,
        a = e.count,
        l = e.forever,
        n = e.durationOut,
        f = e.delayOut,
        s = e.countOut,
        d = e.foreverOut,
        i = e.effect,
        _ = e.effectOut,
        c = e.inEffect,
        y = e.outEffect,
        O = _objectWithoutProperties(e, ["children", "timeout", "duration", "delay", "count", "forever", "durationOut", "delayOut", "countOut", "foreverOut", "effect", "effectOut", "inEffect", "outEffect"]);

    return (0, _wrap2.default)(O, t(!1), t(!0), r);
  }

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });

  var _extends = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];

      for (var o in r) {
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
      }
    }

    return e;
  },
      _wrap2 = _interopRequireDefault(wrap_1),
      _Fade2 = _interopRequireDefault(Fade_1),
      propTypes = {
    in: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    out: (0, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, (0, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf)([!1])]),
    effect: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    effectOut: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    duration: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    timeout: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    delay: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    count: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    forever: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    durationOut: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    delayOut: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    countOut: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    foreverOut: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
  },
      defaultProps = _extends({}, globals.defaults, {
    durationOut: globals.defaults.duration,
    delayOut: globals.defaults.delay,
    countOut: globals.defaults.count,
    foreverOut: globals.defaults.forever,
    inEffect: (0, _Fade2.default)(globals.defaults),
    outEffect: (0, _Fade2.default)(_extends({
      out: !0
    }, globals.defaults))
  });

  Reveal.propTypes = propTypes, Reveal.defaultProps = defaultProps, exports.default = Reveal, module.exports = exports.default;
});
var Reveal = unwrapExports(Reveal_1);

var Text = function Text(props) {
  var isRevealing = props.title === 'reveal';

  if (isRevealing) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'box'
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Reveal, {
      effect: "reveal",
      duration: 100
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.value.split("").map(function (_char, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "aria-hidden": "true",
        key: index,
        style: {
          animationDelay: 0.1 + index / 10 + "s"
        }
      }, _char);
    }))));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box ".concat(props.layer)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fade, {
    bottom: true,
    duration: 5000
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.value)));
};

var Decission = function Decission(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'box'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.value), "!");
};

var Smokingpit = function Smokingpit(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'smokingPit'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    value: 'daheim_arbeiterschaft'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'smoke'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: 's0'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: 's1'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: 's2'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: 's3'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: 's4'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: 's5'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: 's6'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: 's7'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: 's8'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: 's9'
  })));
};

var Puzzle = /*#__PURE__*/function (_Component) {
  _inherits(Puzzle, _Component);

  var _super = _createSuper(Puzzle);

  function Puzzle() {
    var _this;

    _classCallCheck(this, Puzzle);

    _this = _super.apply(this, arguments);
    _this.state = {
      pieces: [],
      shuffled: [],
      solved: []
    };
    return _this;
  }

  _createClass(Puzzle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var pieces = _toConsumableArray(Array(16)).map(function (_, i) {
        return {
          img: "daheim_puzzle_".concat(("0" + (i + 1)).substr(-2), ".webp"),
          order: i,
          board: "shuffled"
        };
      });

      this.setState({
        pieces: pieces,
        shuffled: this.shufflePieces(pieces),
        solved: _toConsumableArray(Array(16))
      });
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(e, index, targetName) {
      var _this$setState;

      e.preventDefault();
      var target = this.state[targetName];
      if (target[index]) return;
      var pieceOrder = e.dataTransfer.getData("text");
      var pieceData = this.state.pieces.find(function (p) {
        return p.order === +pieceOrder;
      });
      var origin = this.state[pieceData.board];
      if (targetName === pieceData.board) target = origin;
      origin[origin.indexOf(pieceData)] = undefined;
      target[index] = pieceData;
      pieceData.board = targetName;
      this.setState((_this$setState = {}, _defineProperty(_this$setState, pieceData.board, origin), _defineProperty(_this$setState, targetName, target), _this$setState));
    }
  }, {
    key: "handleDragStart",
    value: function handleDragStart(e, order) {
      var dt = e.dataTransfer;
      dt.setData("text/plain", order);
      dt.effectAllowed = "move";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'puzzle'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: 'puzzle__shuffled-board'
      }, this.state.shuffled.map(function (piece, i) {
        return _this2.renderPieceContainer(piece, i, "shuffled");
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
        className: 'puzzle__solved-board',
        style: {
          backgroundImage: "url(./assets/daheim_puzzle.webp)"
        }
      }, this.state.solved.map(function (piece, i) {
        return _this2.renderPieceContainer(piece, i, "solved");
      })));
    }
  }, {
    key: "renderPieceContainer",
    value: function renderPieceContainer(piece, index, boardName) {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: index,
        onDragOver: function onDragOver(e) {
          return e.preventDefault();
        },
        onDrop: function onDrop(e) {
          return _this3.handleDrop(e, index, boardName);
        }
      }, piece && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        draggable: true,
        alt: "",
        onDragStart: function onDragStart(e) {
          return _this3.handleDragStart(e, piece.order);
        },
        src: "./assets/".concat(piece.img)
      }));
    }
  }, {
    key: "shufflePieces",
    value: function shufflePieces(pieces) {
      var shuffled = _toConsumableArray(pieces);

      for (var i = shuffled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref = [shuffled[j], shuffled[i]];
        shuffled[i] = _ref[0];
        shuffled[j] = _ref[1];
      }

      return shuffled;
    }
  }]);

  return Puzzle;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var RedirectComponent = function RedirectComponent(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      redirect = _useState2[0],
      setRedirect = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: 'button',
    className: 'link-button redirect',
    onClick: function onClick() {
      return setRedirect(true);
    }
  }, props.value), redirect && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Redirect"], {
    exact: true,
    to: props.layer
  }));
};

var Info = function Info(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fade, {
    left: true,
    delay: 2000
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "infoLink"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "infoText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: props.value
    }
  }))));
};

var ContentType = {
  text: Text,
  redirect: RedirectComponent,
  video: Video,
  image: Image,
  smokingpit: Smokingpit,
  puzzle: Puzzle,
  memory: Memory,
  suitcase: Suitcase,
  tictactoe: TicTacToe,
  daily: Daily,
  decission: Decission
};

var Group = function Group(_ref) {
  var grouped = _ref.grouped,
      row = _ref.row,
      info = _ref.info,
      background = _ref.background,
      contentList = _ref.content;

  var renderBackground = function renderBackground() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "parallax__layer parallax__layer--back"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
      value: background,
      layer: 'bg'
    }));
  };

  var renderGroupContent = function renderGroupContent() {
    var chapterGroupedContent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "parallax__layer parallax__layer--base grouped ".concat(row ? 'row' : 'column')
    }, info && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Info, {
      value: info
    }), contentList.map(function (content, index) {
      return renderContent(content, index);
    }));
    var chapterContent = contentList.map(function (content, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: index,
        className: "parallax__layer parallax__layer--".concat(content.layer)
      }, info && content.layer === 'fore' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Info, {
        value: info
      }), renderContent(content, index));
    });
    return grouped ? chapterGroupedContent : chapterContent;
  };

  var renderContent = function renderContent(content, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentType[content.type], Object.assign({}, content)));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, background && renderBackground(), contentList && renderGroupContent());
};

var Footer = function Footer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Footer"));
};

var Nav = function Nav(props) {
  var renderChapterNav = function renderChapterNav() {
    return props.chapters.map(function (chapter, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: 'navigation--item',
        key: index
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
        to: "/chapter/".concat(chapter.link)
      }));
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "app-nav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: 'navigation'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: 'navigation--item'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
    exact: true,
    to: "/"
  })), renderChapterNav()));
};

var isProduction$1 = "development" === 'production';
var prefix$1 = 'Invariant failed';

function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction$1) {
    throw new Error(prefix$1);
  }

  throw new Error(prefix$1 + ": " + (message || ''));
}

function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var INSTANCE_MAP = new Map();
var OBSERVER_MAP = new Map();
var ROOT_IDS = new Map();
var consecutiveRootId = 0;
/**
 * Generate a unique ID for the root element
 * @param root
 */

function getRootId(root) {
  if (!root) return '';
  if (ROOT_IDS.has(root)) return ROOT_IDS.get(root);
  consecutiveRootId += 1;
  ROOT_IDS.set(root, consecutiveRootId.toString());
  return ROOT_IDS.get(root) + '_';
}
/**
 * Monitor element, and trigger callback when element becomes inView
 * @param element {HTMLElement}
 * @param callback {Function} Called with inView
 * @param options {Object} InterSection observer options
 * @param options.threshold {Number} Number between 0 and 1, indicating how much of the element should be inView before triggering
 * @param options.root {HTMLElement}
 * @param options.rootMargin {String} The CSS margin to apply to the root element.
 */


function observe(element, callback, options) {
  if (options === void 0) {
    options = {};
  } // IntersectionObserver needs a threshold to trigger, so set it to 0 if it's not defined.
  // Modify the options object, since it's used in the onChange handler.


  if (!options.threshold) options.threshold = 0;
  var _options = options,
      root = _options.root,
      rootMargin = _options.rootMargin,
      threshold = _options.threshold; // Validate that the element is not being used in another <Observer />

  !!INSTANCE_MAP.has(element) ?  true ? invariant(false, "react-intersection-observer: Trying to observe %s, but it's already being observed by another instance.\nMake sure the `ref` is only used by a single <Observer /> instance.\n\n%s") : undefined : void 0;
  /* istanbul ignore if */

  if (!element) return; // Create a unique ID for this observer instance, based on the root, root margin and threshold.
  // An observer with the same options can be reused, so lets use this fact

  var observerId = getRootId(root) + (rootMargin ? threshold.toString() + "_" + rootMargin : threshold.toString());
  var observerInstance = OBSERVER_MAP.get(observerId);

  if (!observerInstance) {
    observerInstance = new IntersectionObserver(onChange, options);
    /* istanbul ignore else  */

    if (observerId) OBSERVER_MAP.set(observerId, observerInstance);
  }

  var instance = {
    callback: callback,
    element: element,
    inView: false,
    observerId: observerId,
    observer: observerInstance,
    // Make sure we have the thresholds value. It's undefined on a browser like Chrome 51.
    thresholds: observerInstance.thresholds || (Array.isArray(threshold) ? threshold : [threshold])
  };
  INSTANCE_MAP.set(element, instance);
  observerInstance.observe(element);
  return instance;
}
/**
 * Stop observing an element. If an element is removed from the DOM or otherwise destroyed,
 * make sure to call this method.
 * @param element {Element}
 */


function unobserve(element) {
  if (!element) return;
  var instance = INSTANCE_MAP.get(element);

  if (instance) {
    var observerId = instance.observerId,
        observer = instance.observer;
    var root = observer.root;
    observer.unobserve(element); // Check if we are still observing any elements with the same threshold.

    var itemsLeft = false; // Check if we still have observers configured with the same root.

    var rootObserved = false;
    /* istanbul ignore else  */

    if (observerId) {
      INSTANCE_MAP.forEach(function (item, key) {
        if (key !== element) {
          if (item.observerId === observerId) {
            itemsLeft = true;
            rootObserved = true;
          }

          if (item.observer.root === root) {
            rootObserved = true;
          }
        }
      });
    }

    if (!rootObserved && root) ROOT_IDS["delete"](root);

    if (observer && !itemsLeft) {
      // No more elements to observe for threshold, disconnect observer
      observer.disconnect();
    } // Remove reference to element


    INSTANCE_MAP["delete"](element);
  }
}

function onChange(changes) {
  changes.forEach(function (intersection) {
    var isIntersecting = intersection.isIntersecting,
        intersectionRatio = intersection.intersectionRatio,
        target = intersection.target;
    var instance = INSTANCE_MAP.get(target); // Firefox can report a negative intersectionRatio when scrolling.

    /* istanbul ignore else */

    if (instance && intersectionRatio >= 0) {
      // If threshold is an array, check if any of them intersects. This just triggers the onChange event multiple times.
      var inView = instance.thresholds.some(function (threshold) {
        return instance.inView ? intersectionRatio > threshold : intersectionRatio >= threshold;
      });

      if (isIntersecting !== undefined) {
        // If isIntersecting is defined, ensure that the element is actually intersecting.
        // Otherwise it reports a threshold of 0
        inView = inView && isIntersecting;
      }

      instance.inView = inView;
      instance.callback(inView, intersection);
    }
  });
}

function isPlainChildren(props) {
  return typeof props.children !== 'function';
}
/**
 * Monitors scroll, and triggers the children function with updated props
 *
 <InView>
 {({inView, ref}) => (
   <h1 ref={ref}>{`${inView}`}</h1>
 )}
 </InView>
 */


var InView = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose$1(InView, _React$Component);

  function InView() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty$2(_assertThisInitialized$2(_this), "state", {
      inView: false,
      entry: undefined
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "node", null);

    _defineProperty$2(_assertThisInitialized$2(_this), "handleNode", function (node) {
      if (_this.node) {
        unobserve(_this.node);

        if (!node && !_this.props.triggerOnce) {
          _this.setState({
            inView: false,
            entry: undefined
          });
        }
      }

      _this.node = node ? node : null;

      _this.observeNode();
    });

    _defineProperty$2(_assertThisInitialized$2(_this), "handleChange", function (inView, entry) {
      // Only trigger a state update if inView has changed.
      // This prevents an unnecessary extra state update during mount, when the element stats outside the viewport
      if (inView !== _this.state.inView || inView) {
        _this.setState({
          inView: inView,
          entry: entry
        });
      }

      if (_this.props.onChange) {
        // If the user is actively listening for onChange, always trigger it
        _this.props.onChange(inView, entry);
      }
    });

    return _this;
  }

  var _proto = InView.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !this.node ?  true ? invariant(false, "react-intersection-observer: No DOM node found. Make sure you forward \"ref\" to the root DOM element you want to observe.") : undefined : void 0;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If a IntersectionObserver option changed, reinit the observer
    if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold) {
      unobserve(this.node);
      this.observeNode();
    }

    if (prevState.inView !== this.state.inView) {
      if (this.state.inView && this.props.triggerOnce) {
        unobserve(this.node);
        this.node = null;
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.node) {
      unobserve(this.node);
      this.node = null;
    }
  };

  _proto.observeNode = function observeNode() {
    if (!this.node) return;
    var _this$props = this.props,
        threshold = _this$props.threshold,
        root = _this$props.root,
        rootMargin = _this$props.rootMargin;
    observe(this.node, this.handleChange, {
      threshold: threshold,
      root: root,
      rootMargin: rootMargin
    });
  };

  _proto.render = function render() {
    var _this$state = this.state,
        inView = _this$state.inView,
        entry = _this$state.entry;

    if (!isPlainChildren(this.props)) {
      return this.props.children({
        inView: inView,
        entry: entry,
        ref: this.handleNode
      });
    }

    var _this$props2 = this.props,
        children = _this$props2.children,
        as = _this$props2.as,
        tag = _this$props2.tag,
        triggerOnce = _this$props2.triggerOnce,
        threshold = _this$props2.threshold,
        root = _this$props2.root,
        rootMargin = _this$props2.rootMargin,
        onChange = _this$props2.onChange,
        props = _objectWithoutPropertiesLoose$1(_this$props2, ["children", "as", "tag", "triggerOnce", "threshold", "root", "rootMargin", "onChange"]);

    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(as || tag || 'div', _extends$1({
      ref: this.handleNode
    }, props), children);
  };

  return InView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty$2(InView, "displayName", 'InView');

_defineProperty$2(InView, "defaultProps", {
  threshold: 0,
  triggerOnce: false
});

var Chapter = function Chapter(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AppContext),
      _useContext2 = _slicedToArray(_useContext, 2),
      character = _useContext2[0],
      setCharacter = _useContext2[1];

  var audio = new Audio("./assets/sounds/".concat(props.link, ".mp3"));
  audio.loop = true;

  var startAudio = function startAudio(inView) {
    inView ? audio.play() : audio.pause();
  };

  var renderChapterGroups = function renderChapterGroups() {
    return props.groups.map(function (group, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        key: index
      }, (!group.character || group.character === character) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InView, {
        threshold: 0.5
      }, function (_ref) {
        var inView = _ref.inView,
            ref = _ref.ref,
            entry = _ref.entry;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
          ref: ref,
          key: index,
          className: "parallax__group ".concat(group.background ? 'back' : '', " ").concat(inView ? 'active' : '')
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Group, Object.assign({}, group)));
      }));
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InView, {
    as: "div",
    onChange: function onChange(inView, entry) {
      return audio && startAudio(inView);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'parallax'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, Object.assign({}, props)), props.groups && renderChapterGroups()));
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

module.exports = ":root {\n  --color-text: #850101;\n  --color-title: #BF6422;\n  --color-link: #008080;\n  --color-link-highlighted: #E3000F;\n}\n\n@font-face {\n  font-family: \"FundamentalBrigade\";\n  font-display: swap;\n  src: url('Fundamental_Brigade_Schlank.ttf') format(\"truetype\");\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nhtml {\n  overflow: hidden;\n  min-height: 100vh;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.2;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n\nbody {\n  background-image: url('background.webp');\n  color: var(--color-text);\n  font-size: clamp(1em, 1em + 2vw, 3em);\n  font-family: FundamentalBrigade, arial, sans-serif;\n  font-weight: normal;\n  height: 100%;\n  overflow-x: hidden;\n  -webkit-perspective: 1px;\n          perspective: 1px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2FwcHMvZGVtb2wvc3JjL2FwcC9hcHAuc2NzcyIsImFwcHMvZGVtb2wvc3JjL2FwcC9hcHAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsOERBQUE7QUNDRjs7QURFQTs7O0VBR0Usc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFBO0VBQ0EsVUFBQTtFQUNDLFNBQUE7QUNBRjs7QURHQTtFQUNFLHdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtVQUFBLGdCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQ0FGIiwiZmlsZSI6ImFwcHMvZGVtb2wvc3JjL2FwcC9hcHAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgLS1jb2xvci10ZXh0OiAjODUwMTAxO1xuICAtLWNvbG9yLXRpdGxlOiAjQkY2NDIyO1xuICAtLWNvbG9yLWxpbms6ICMwMDgwODA7XG4gIC0tY29sb3ItbGluay1oaWdobGlnaHRlZDogI0UzMDAwRjtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnRnVuZGFtZW50YWxCcmlnYWRlJztcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0Z1bmRhbWVudGFsX0JyaWdhZGVfU2NobGFuay50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5odG1sIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2JhY2tncm91bmQud2VicCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgZm9udC1zaXplOiAjeydjbGFtcCgxZW0sIDFlbSArIDJ2dywgM2VtKSd9O1xuICBmb250LWZhbWlseTogRnVuZGFtZW50YWxCcmlnYWRlLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBlcnNwZWN0aXZlOiAxcHg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59IiwiOnJvb3Qge1xuICAtLWNvbG9yLXRleHQ6ICM4NTAxMDE7XG4gIC0tY29sb3ItdGl0bGU6ICNCRjY0MjI7XG4gIC0tY29sb3ItbGluazogIzAwODA4MDtcbiAgLS1jb2xvci1saW5rLWhpZ2hsaWdodGVkOiAjRTMwMDBGO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiRnVuZGFtZW50YWxCcmlnYWRlXCI7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvRnVuZGFtZW50YWxfQnJpZ2FkZV9TY2hsYW5rLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5odG1sIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9iYWNrZ3JvdW5kLndlYnApO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMWVtLCAxZW0gKyAydncsIDNlbSk7XG4gIGZvbnQtZmFtaWx5OiBGdW5kYW1lbnRhbEJyaWdhZGUsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGVyc3BlY3RpdmU6IDFweDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn0iXX0= */"

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

/***/ "./app/app.json":
/*!**********************!*\
  !*** ./app/app.json ***!
  \**********************/
/*! exports provided: chapters, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"chapters\":[{\"id\":1,\"name\":\"Zu Hause\",\"link\":\"daheim\",\"groups\":[{\"grouped\":false,\"row\":false,\"info\":\"<p>Diese Website entstand im Rahmen des <a href='https://codingdavinci.de/events/westfalen-ruhrgebiet/' target='_blank' rel='noopener noreferrer'>Coding da Vinci Westfalen-Ruhrgebiet</a> von Oktober bis Dezember 2019. Wir danken dem <a href='https://arbeiterjugend.de/' target='_blank' rel='noopener noreferrer'>Archiv der Arbeiterjugendbewegung</a>, welches die Fotografien und Bildkärtchen unter einer CC BY-SA 3.0 DE Lizenz zur Verfügung gestellt hat.</p>\",\"content\":[{\"type\":\"text\",\"value\":\"Es ist Ende der 1920er Jahre. In der Weimarer Republik leben viele Kinder und Jugendliche, deren Eltern zur großen Arbeiterschaft gehören, die im Bergbau, in Webereien, Fabriken und Stahlwerken arbeiten. Dazu gehören Anna, Karl und Gerda.\",\"layer\":\"fore\",\"title\":\"reveal\"},{\"type\":\"image\",\"layer\":\"back\",\"value\":\"daheim_karte\"},{\"type\":\"smokingpit\",\"layer\":\"base\",\"value\":\"smokingpit\"}]},{\"grouped\":true,\"row\":false,\"info\":\"<a href='https://arbeiterjugend.de/' target='_blank' rel='noopener noreferrer'>Archiv der Arbeiterjugendbewegung</a>\",\"content\":[{\"type\":\"text\",\"layer\":\"fore\",\"value\":\"Anna und Karl sind 12 Jahre alt und ihr letztes Schuljahr steht bald bevor. Gerda ist 16 Jahre alt und macht eine Lehre in einer Buchbinderei.\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"daheim_kinder\"},{\"type\":\"text\",\"layer\":\"fore\",\"value\":\"Begleite die drei dabei, wie sie ihren Weg zu einer „Kinderrepublik“ der Reichsarbeitsgemeinschaft der Kinderfreunde finden und was sie dort erleben.\"}]},{\"grouped\":true,\"row\":true,\"content\":[{\"type\":\"text\",\"layer\":\"fore\",\"value\":\"Wen möchtest du auf diesem Weg begleiten?\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"daheim_karl\",\"title\":\"Karl\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"daheim_gerda\",\"title\":\"Gerda\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"daheim_anna\",\"title\":\"Anna\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Anna\",\"content\":[{\"value\":\"Anna lebt mit ihrer Familie im Ruhrgebiet. Sie ist gerade 12 Jahre alt geworden. Ihr Vater arbeitet unter Tage im Bergbau. Ihre Mutter kümmert sich um Anna, ihre 3 Geschwister sowie ihren alten Großvater. Der Lohn des Vaters reicht gerade aus, um sie alle zu versorgen.\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"second\",\"value\":\"daheim_familie\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Karl\",\"content\":[{\"value\":\"Karl wohnt mit seiner Familie in Schlesien. Er ist 12 Jahre alt und wird bald 13. Seine Eltern arbeiten beide in einer der örtlichen Webereien. Der Lohn der beiden reicht gerade dafür aus, um Karl und seine 5 Geschwister sowie seine alte Großmutter zu versorgen.\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"second\",\"value\":\"daheim_familie\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"value\":\"Gerda ist 16 Jahre alt und lebt mit ihrer Mutter und ihren 2 kleineren Geschwistern in Leipzig. Sie macht seit 2 Jahren eine Ausbildung in einer Buchbinderei und kann damit etwas Geld zum Familieneinkommen beitragen. Ihre Mutter arbeitet in einer Fabrik für Elektroschaltgeräte.\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"second\",\"value\":\"daheim_familie\"}]},{\"grouped\":true,\"row\":true,\"character\":\"Anna\",\"background\":\"daheim_familie2\",\"content\":[{\"value\":\"Worüber möchtest du mehr erfahren?\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"video\",\"layer\":\"fourth\",\"value\":\"3_Annas_Alltag_mit_Hühnern\",\"title\":\"Annas Alltag\"},{\"type\":\"video\",\"layer\":\"fourth\",\"value\":\"4_Annas_Zuhause\",\"title\":\"Annas Umfeld\"},{\"type\":\"video\",\"layer\":\"fourth\",\"value\":\"2_Anna_Familie\",\"title\":\"Annas Familie\"},{\"type\":\"video\",\"layer\":\"fourth\",\"value\":\"1_Anna_Großvater\",\"title\":\"Annas Großvater\"},{\"type\":\"redirect\",\"layer\":\"probezeltlager\",\"value\":\"Interessiert mich nicht, ich will wissen, wie sie zur Kinderrepublik kommt.\"}]},{\"grouped\":true,\"row\":true,\"character\":\"Karl\",\"background\":\"daheim_familie2\",\"content\":[{\"value\":\"Worüber möchtest du mehr erfahren?\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"video\",\"layer\":\"fourth\",\"value\":\"7_Karl_Alltag\",\"title\":\"Karls_Alltag\"},{\"type\":\"video\",\"layer\":\"fourth\",\"value\":\"6_Karl_Familie\",\"title\":\"Karls Familie\"},{\"type\":\"video\",\"layer\":\"fourth\",\"value\":\"5_Karl_Großmutter\",\"title\":\"Karls Großmutter\"},{\"type\":\"video\",\"layer\":\"fourth\",\"value\":\"8_Karls_Zuhause\",\"title\":\"Karls Zuhause\"},{\"type\":\"redirect\",\"layer\":\"probezeltlager\",\"value\":\"Interessiert mich nicht, ich will wissen, wie er zur Kinderrepublik kommt.\"}]},{\"grouped\":true,\"row\":true,\"character\":\"Gerda\",\"background\":\"daheim_familie2\",\"content\":[{\"value\":\"Worüber möchtest du mehr erfahren?\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"video\",\"layer\":\"fourth\",\"value\":\"9_Gerdas_Familie\",\"title\":\"Gerdas Familie\"},{\"type\":\"video\",\"layer\":\"fourth\",\"value\":\"10_Gerdas_Alltag_mit_Musik\",\"title\":\"Gerdas Alltag\"},{\"type\":\"video\",\"layer\":\"fourth\",\"value\":\"11_Gerdas_Zuhause\",\"title\":\"Gerdas Zuhause\"},{\"type\":\"redirect\",\"layer\":\"probezeltlager\",\"value\":\"Interessiert mich nicht, ich will wissen, wie sie zur Kinderrepublik kommt.\"}]},{\"grouped\":false,\"row\":false,\"character\":\"Anna\",\"content\":[{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Eines Tages klingelt es an der Tür. Anna öffnet und davor stehen zwei Jugendliche, die nur wenige Jahre älter aussehen als sie. Sie heißen Erna und Hans. Die beiden erzählen ihr, dass sie sich in einem Verein namens 'Reichsarbeitsgemeinschaft der Kinderfreunde' engagieren und nach neuen Mitgliedern für die Ortsgruppe des Vereins suchen.\"}]},{\"grouped\":false,\"row\":false,\"character\":\"Karl\",\"content\":[{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Karl hört seinen Brüdern manchmal zu, wenn sie über Politik diskutieren. Sie erklären ihm die Zusammenhänge zwischen dem Staat, der Demokratie, der Arbeit und der Lebenssituation ihrer Familie.\"}]},{\"grouped\":false,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Gerda ist seit einiger Zeit bei der Sozialistischen Arbeiterjugend und hat bisher nur an Veranstaltungen teilgenommen. Nun soll jedoch für den Sommer ein großes demokratisches und großteils selbstorganisiertes Zeltlager der Kinderfreunde stattfinden.\"}]},{\"grouped\":false,\"row\":false,\"character\":\"Anna\",\"content\":[{\"type\":\"image\",\"layer\":\"fore\",\"value\":\"daheim_werbung\"}]},{\"grouped\":false,\"row\":false,\"character\":\"Anna\",\"content\":[{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Anna hört ihnen interessiert zu. Sie erfährt, dass der Verein sich um die Arbeiterkinder kümmert. Die Ortsgruppe ist durch die Kinder und Jugendlichen weitestgehend selbst organisiert und veranstaltet Spielenachmittage, Zeltlager und Vorträge. Sie ist neugierig und verspricht den Beiden, morgen vorbeizuschauen.\"}]},{\"grouped\":false,\"row\":false,\"character\":\"Karl\",\"content\":[{\"type\":\"image\",\"layer\":\"fore\",\"value\":\"daheim_werbung\"}]},{\"grouped\":false,\"row\":false,\"character\":\"Karl\",\"content\":[{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Sie erzählen ihm auch von dem Verband, in dem sie Mitglieder sind: der Sozialistischen Arbeiterjugend. Karl ist für diese Gruppe noch zu jung, aber es gibt auch eine sozialistische Vereinigung für Kinder: die Kinderfreunde, die auch eine Ortsgruppe in seiner Nähe haben. Karl will sich das einmal anschauen, denn bei den Kinderfreunden ist viel los. Es gibt Spielenachmittage, Zeltlager und auch Themennachmittage.\"}]},{\"grouped\":false,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"type\":\"image\",\"layer\":\"fore\",\"value\":\"daheim_werbung\"}]},{\"grouped\":false,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Die Kinderfreunde stehen der Sozialistischen Arbeiterjugend nahe und kümmern sich vor allem um die Jüngeren. Gerda hat zwar wenig Zeit, möchte aber gern anderen Arbeiterkindern dabei helfen, eine Ablenkung von ihrem tristen Alltag zu erleben. Deshalb meldet sie sich als freiwillige Helferin für die Organisation und Durchführung des Zeltlagers. Es soll als Kinderrepublik bezeichnet werden und Platz für Tausende Kinder aus der ganzen Weimarer Republik bieten.\"}]},{\"grouped\":false,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_12_(4)\"}]},{\"grouped\":false,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Zur Vorbereitung treffen sich die Helferinnen und Helfer bei der Ortsgruppe der Kinderfreunde. Das Treffen findet in Räumen der SPD statt, deren Mitglieder oft ebenfalls bei den Kinderfreunden oder der Sozialistischen Arbeiterjugend engagiert sind.\"}]},{\"grouped\":false,\"row\":false,\"character\":\"Anna\",\"content\":[{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"daheim_karte\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Anna\",\"content\":[{\"type\":\"text\",\"layer\":\"fore\",\"value\":\"Anna hat einen Stadtplan mit dem eingezeichneten Weg zur Ortsgruppe bekommen. Nur leider ist dieser in mehrere Teile zerrissen.\"},{\"type\":\"text\",\"layer\":\"fore\",\"value\":\"Hilf Anna, ihn wieder zusammenzufügen, um zum Treffpunkt der Ortsgruppe zu gelangen. Ziehe dazu die durcheinandergewürfelten Kartenausschnitte in das entsprechende vorgezeichnete Feld. Wenn du das Puzzle richtig gelöst hast, kommst du zum nächsten Kapitel.\"},{\"type\":\"puzzle\",\"layer\":\"base\",\"value\":\"puzzle\"},{\"type\":\"redirect\",\"layer\":\"ortsgruppe\",\"value\":\"Du kennst eine Abkürzung und überholst Anna auf dem Weg zur Ortsgruppe.\"}]},{\"grouped\":false,\"row\":false,\"character\":\"Karl\",\"content\":[{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"daheim_karte\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Karl\",\"content\":[{\"type\":\"text\",\"layer\":\"fore\",\"value\":\"Karl hat einen Stadtplan mit dem eingezeichneten Weg zur Ortsgruppe bekommen. Nur leider ist dieser in mehrere Teile zerrissen.\"},{\"type\":\"text\",\"layer\":\"fore\",\"value\":\"Hilf Karl, ihn wieder zusammenzufügen, um zum Treffpunkt der Ortsgruppe zu gelangen. Ziehe dazu die durcheinandergewürfelten Kartenausschnitte in das entsprechende vorgezeichnete Feld. Wenn du das Puzzle richtig gelöst hast, kommst du zum nächsten Kapitel.\"},{\"type\":\"puzzle\",\"layer\":\"base\",\"value\":\"puzzle\"},{\"type\":\"redirect\",\"layer\":\"ortsgruppe\",\"value\":\"Du kennst eine Abkürzung und überholst Karl auf dem Weg zur Ortsgruppe.\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"type\":\"text\",\"layer\":\"fore\",\"value\":\"Gerda hat einen Stadtplan mit dem eingezeichneten Weg zur Ortsgruppe bekommen. Nur leider ist dieser in mehrere Teile zerrissen.\"},{\"type\":\"text\",\"layer\":\"fore\",\"value\":\"Hilf Gerda, ihn wieder zusammenzufügen, um zum Treffpunkt der Ortsgruppe zu gelangen. Ziehe dazu die durcheinandergewürfelten Kartenausschnitte in das entsprechende vorgezeichnete Feld. Wenn du das Puzzle richtig gelöst hast, kommst du zum nächsten Kapitel.\"},{\"type\":\"puzzle\",\"layer\":\"base\",\"value\":\"puzzle\"},{\"type\":\"redirect\",\"layer\":\"ortsgruppe\",\"value\":\"Du kennst eine Abkürzung und überholst Gerda auf dem Weg zur Ortsgruppe.\"}]}]},{\"id\":2,\"name\":\"Die Ortsgruppe\",\"link\":\"ortsgruppe\",\"groups\":[{\"grouped\":false,\"row\":false,\"character\":\"Anna\",\"info\":\"Hier könnte ein Link sein.\",\"content\":[{\"type\":\"text\",\"value\":\"Anna betritt das Jugendheim der Kinderfreunde, wo die Treffen der Ortsgruppe stattfinden. Sie wird direkt von Erna und Hans begrüßt. Sie freuen sich, dass sie tatsächlich gekommen ist. \",\"layer\":\"fore\",\"title\":\"reveal\"},{\"type\":\"image\",\"layer\":\"back\",\"value\":\"daheim_karte\"},{\"type\":\"image\",\"layer\":\"second\",\"value\":\"02_45_(5)\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Anna\",\"content\":[{\"value\":\"In dem Raum sind 17 Mädchen und Jungen versammelt. Einige von ihnen kennt sie aus ihrer Siedlung. Alle kommen wie Anna aus ärmlichen Verhältnissen und erhoffen sich durch die Betätigung in der Ortsgruppe etwas Ablenkung vom oft tristen Alltag.\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_1455_(68)\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"2_214_Seite142\"},{\"type\":\"video\",\"layer\":\"fourth\",\"value\":\"12_Anna_Ortsgruppe\"},{\"type\":\"redirect\",\"layer\":\"gruppenvorbereitung\",\"value\":\"Ich möchte noch mehr über Annas Ortsgruppe erfahren.\"},{\"type\":\"redirect\",\"layer\":\"probezeltlager\",\"value\":\"Ich möchte lieber so schnell wie möglich zur Kinderrepublik kommen.\"}]},{\"grouped\":false,\"row\":false,\"character\":\"Karl\",\"info\":\"Hier könnte ein Link sein.\",\"content\":[{\"type\":\"text\",\"value\":\"Karl betritt das Jugendheim der Kinderfreunde, wo die Treffen der Ortsgruppe stattfinden. Er wird direkt von zwei Kindern begrüßt, die sich als Erika und Otto vorstellen. Sie freuen sich, dass mal jemand neues dabei ist.\",\"layer\":\"fore\",\"title\":\"reveal\"},{\"type\":\"image\",\"layer\":\"back\",\"value\":\"daheim_karte\"},{\"type\":\"image\",\"layer\":\"second\",\"value\":\"02_45_(5)\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Karl\",\"content\":[{\"value\":\"In dem Raum sind 21 Mädchen und Jungen versammelt. Einige von ihnen kennt Karl aus dem Dorf. Die Gruppe diskutiert gerade über ein Zeltlager, dass im Sommer stattfinden soll und für das viel vorbereitet werden muss.\",\"type\":\"text\",\"layer\":\"base\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_1455_(68)\"},{\"type\":\"image\",\"layer\":\"back\",\"value\":\"02_84_(2)\"},{\"type\":\"video\",\"layer\":\"fourth\",\"value\":\"13_Karl_Ortsgruppe\"},{\"type\":\"redirect\",\"layer\":\"gruppenvorbereitung\",\"value\":\"Ich möchte noch mehr über Karls Ortsgruppe erfahren.\"},{\"type\":\"redirect\",\"layer\":\"probezeltlager\",\"value\":\"Ich möchte lieber so schnell wie möglich zur Kinderrepublik kommen.\"}]},{\"grouped\":false,\"row\":false,\"character\":\"Gerda\",\"info\":\"Hier könnte ein Link sein.\",\"content\":[{\"type\":\"text\",\"value\":\"Gerda betritt den großen Raum, in dem sich bereits einige Dutzend Menschen versammelt haben. Darunter sind auch ein paar Jugendliche in ihrem Alter, die sie von den Treffen der SAJ kennt. Manche der Helfer*innen sind wesentlich älter als sie.\",\"layer\":\"fore\",\"title\":\"reveal\"},{\"type\":\"image\",\"layer\":\"back\",\"value\":\"daheim_karte\"},{\"type\":\"image\",\"layer\":\"second\",\"value\":\"02_45_(5)\"},{\"value\":\"Eine der älteren Helfer*innen ist Berta, die bis vor einigen Jahren mit Gerdas Mutter zusammen in der Fabrik gearbeitet hat. Sie wurde letztes Jahr gekündigt, weil sie angeblich zu langsam gearbeitet hätte. Da es in ihrem Alter schwierig ist, eine Anstellung zu finden, ist Berta arbeitslos. Berta engagiert sich seitdem bei den Kinderfreunden. Sie hofft damit einen Beitrag dafür zu leisten, dass ihre Kinder und Enkel es besser haben würden und ihre Rechte in der neuen Republik zu verteidigen lernten.\",\"type\":\"text\",\"layer\":\"third\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_1455_(103)\"},{\"value\":\"Die Helfer*innen teilen sich auf verschiedene Ortsgruppen auf und begleiten die Kinder bei ihren Vorbereitungen auf das Zeltlager. Die älteren und erfahreneren Helfer*innen organisieren die Fahrkarten, das benötigte Zeltmaterial sowie die Übernachtungen bei Genoss*innen auf dem Weg zur Kinderrepublik. \",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_1455_(105)\"},{\"value\":\"Gerda trifft sich fortan mit 26 Kindern sowie 4 anderen Helfer*innen, um sich auf das Zeltlager vorzubereiten.\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"video\",\"layer\":\"fourth\",\"value\":\"14_Gerda_Ortsgruppe\"},{\"type\":\"redirect\",\"layer\":\"gruppenvorbereitung\",\"value\":\"Ich möchte noch mehr über die Arbeit der Ortsgruppe sowie über die Rolle der Helfer*innen erfahren.\"},{\"type\":\"redirect\",\"layer\":\"probezeltlager\",\"value\":\"Ich möchte lieber so schnell wie möglich zur Kinderrepublik kommen.\"}]}]},{\"id\":3,\"name\":\"Die Arbeit der Ortsgruppe\",\"link\":\"gruppenvorbereitung\",\"groups\":[{\"grouped\":true,\"row\":false,\"character\":\"Anna\",\"info\":\"Hier könnte ein Link sein.\",\"content\":[{\"type\":\"text\",\"value\":\"Annas Ortsgruppe trifft sich einmal pro Woche. Neben den Spiele- und Bildungsabenden, gibt es regelmäßige Gesangsrunden, in denen die Kinder gemeinsam mit den Helfer*innen Lieder singen. Dazu gehören Lieder wie 'Vorwärts ihr Frauen' oder 'Im blauen Hemd'. Letzteres ist die Hymne der Roten Falken. \",\"layer\":\"fore\",\"title\":\"reveal\"},{\"type\":\"image\",\"layer\":\"back\",\"value\":\"daheim_karte\"},{\"type\":\"image\",\"layer\":\"second\",\"value\":\"2_31_g\"},{\"value\":\"Als Rote Falken werden alle 12- bis 14-Jährigen im Verband der Kinderfreunde genannt.\",\"type\":\"text\",\"layer\":\"second\"},{\"value\":\"Anna ist stolz, ein 'Roter Falke' zu sein und ein blaues Hemd zu tragen. Endlich hat sie einen Ort gefunden, wo sie sich zugehörig und verstanden fühlt.\",\"type\":\"text\",\"layer\":\"third\"},{\"type\":\"image\",\"layer\":\"back\",\"value\":\"02_1455_(14)\"},{\"value\":\"Um noch mehr Mitglieder zu gewinnen, hat die Ortsgruppe der Kinderfreunde eine kleine Ausstellung vorbereitet. Die Roten Falken haben dafür Wandzeitungen gestaltet, gebastelt, Wimpel genäht und einige Gebrauchsgegenstände angefertigt. \",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_1455_(21)\"},{\"value\":\"Die Ausstellung kann gegen einen Eintritt von 10 Pfennig besucht werden. Neben einigen Leuten von der örtlichen Presse kommen auch viele Eltern vorbei. Einige der Ausstellungsobjekte spendet die Ortsgruppe der Arbeiterwohlfahrt.\",\"type\":\"text\",\"layer\":\"fourth\"},{\"type\":\"image\",\"layer\":\"back\",\"value\":\"02_1455_(49)\"},{\"value\":\"Die Bildungsabende beschäftigen sich neben politischen auch mit praktischen Themen, wie zum Beispiel der Hygiene.\",\"type\":\"text\",\"layer\":\"fifth\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"2_30_2\"},{\"value\":\"Anna lernt während eines Vortrags, dass das Elend der Arbeiterklasse oft durch mangelnde Sauberkeit und schlecht versorgte Wunden und Krankheiten verschärft wird. Die Sauberkeit des eigenen Körpers und des eigenen Heims sind dabei besonders wichtig. Auch der Umgang mit ansteckenden Krankheiten in der eigenen Familien wird dabei angesprochen.\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"back\",\"value\":\"2_31_h\"},{\"value\":\"Inzwischen ist Anna schon über ein halbes Jahr regelmäßig zu den Treffen der Roten Falken gegangen. Für den Sommer ist ein großes Zeltlager unter dem Titel 'Kinderrepublik' geplant. Dort sollen sich Tausende Kinder für 3 Wochen mehrheitlich selbst organisieren. \",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_1455_(58)\"},{\"value\":\"Das kostet natürlich viel Geld. Um die 'Kinderrepublik' zu finanzieren, sammeln alle Ortsgruppen der Kinderfreunde fleißig Spenden, verkaufen symbolische Bausteine und selbst die Kleinsten geben einen Teil ihres Taschengeldes ab.\",\"type\":\"text\",\"layer\":\"fore\"},{\"value\":\"Das Zeltlager soll in der Nähe von Kiel auf einem unbestellten Feld durchgeführt werden. Auf einer Karte hat Annas Ortsgruppe markiert, aus welchen Städten der Weimarer Republik sich Kinder- und Jugendgruppen angemeldet haben.\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_1455_(72)\"},{\"value\":\"Auf der Karte kannst du dir ansehen, woher die Kinder kommen.\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"back\",\"value\":\"Karte_Weimarer_Republik\"},{\"type\":\"redirect\",\"layer\":\"probezeltlager\",\"value\":\"Endlich geht es zur ersten Bewährungsprobe für die Gruppe: zum Probezeltlager.\"}]},{\"grouped\":true,\"row\":false,\"info\":\"Hier könnte ein Link sein.\",\"character\":\"Karl\",\"content\":[{\"type\":\"image\",\"layer\":\"back\",\"value\":\"daheim_karte\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"2_31_g\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Karl\",\"content\":[{\"type\":\"text\",\"value\":\"Karl gehört in seiner Ortsgruppe der Kinderfreunde zu den 'Roten Falken'. Diese Bezeichnung wird für alle 12- bis 14-jährigen Mitglieder verwendet.\",\"layer\":\"base\",\"title\":\"reveal\"},{\"value\":\"Karls Falkengruppe trifft sich mehrmals die Woche. Oft gibt es Bildungsabende, Liederrunden oder auch sportliche Gruppenaktivitäten.\",\"type\":\"text\",\"layer\":\"second\"},{\"value\":\"Im Moment besteht die Hauptaufgabe der Gruppe darin, sich auf die bevorstehende 'Kinderrepublik', das große Zeltlager im Sommer, vorzubereiten. Dort sollen sich Tausende Kinder für 3 Wochen mehrheitlich selbst organisieren.\",\"type\":\"text\",\"layer\":\"third\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"02_1455_(14)\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Karl\",\"content\":[{\"value\":\"Dafür nähen die Kinder Wimpel mit dem Symbol der 'Roten Falken' und sorgen dafür, dass jede*r genug Material für einen eigenen Schlafsack erhält. \",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_1455_(21)\"},{\"value\":\"Das Zeltlager kostet natürlich auch viel Geld. Um die 'Kinderrepublik' zu finanzieren, sammeln alle Ortsgruppen der Kinderfreunde fleißig Spenden, verkaufen symbolische Bausteine und selbst die Kleinsten geben einen Teil ihres Taschengeldes ab.\",\"type\":\"text\",\"layer\":\"fourth\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_1455_(49)\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Karl\",\"content\":[{\"value\":\"Auch Karl beteiligt sich emsig und zieht mit einigen Freunden von Haus zu Haus, um Unterstützer*innen für die Kasse der 'Kinderrepublik' zu finden. Am Ende können sie 27 RM zum Guthaben der Ortsgruppe beisteuern.\",\"type\":\"text\",\"layer\":\"base\"},{\"type\":\"image\",\"layer\":\"base\",\"value\":\"2_30_2\"},{\"value\":\"Inzwischen steht fest, an welchem Ort das Lager aufgebaut wird. In der Nähe der Stadt Kiel. Auf einer Karte hat Karls Ortsgruppe markiert, aus welchen Städten der Weimarer Republik sich Kinder- und Jugendgruppen angemeldet haben.\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_1455_(72)\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Karl\",\"content\":[{\"value\":\"Auf der Karte kannst du dir ansehen, woher die Kinder kommen.\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"base\",\"value\":\"Karte_Weimarer_Republik\"},{\"type\":\"redirect\",\"layer\":\"probezeltlager\",\"value\":\"Endlich geht es zur ersten Bewährungsprobe für die Gruppe: zum Probezeltlager.\"}]},{\"grouped\":true,\"row\":false,\"info\":\"Hier könnte ein Link sein.\",\"character\":\"Gerda\",\"content\":[{\"type\":\"image\",\"layer\":\"back\",\"value\":\"daheim_karte\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"2_31_g\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"type\":\"text\",\"value\":\"Gerda hat noch nie die Aktivitäten einer Kindergruppe organisiert. Um ihre Aufgaben besser zu kennen liest sie das Buch 'Im Zeltlager - ein technisches Handbuch für rote Falkenführer von Hermann Neddermayer. Das Buch wurde gerade erst herausgegeben und sammelt wertvolle Erfahrungen aus den bisherigen Zeltlagern der Kinderfreunde. \",\"layer\":\"base\",\"title\":\"reveal\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"2_214_Seite142\"},{\"value\":\"Gerda liest wissbegierig die pädagogischen Überlegungen. Daneben finden sich auch praktische Hinweise zur Gestaltung des Zeltdorfes, zur Struktur des Lagerparlamentes und zu den organisatorischen Abläufen in der 'Kinderrepublik'. Die Helfer*innen spielen dabei eine unterstützende, aber keine leitende Rolle.\",\"type\":\"text\",\"layer\":\"base\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"02_1455_(14)\"},{\"value\":\"In Leipzig wird für die Helfer*innen eine Schulungsreihe angeboten. Gerda kann sich so mit der sozialistischen Pädagogik der Kinderfreunde vertraut machen, denn vieles ist ihr neu. Sie nimmt an einem Wochenendkurs unter dem Titel 'Psychologie und sozialistische Pädagogik als Grundlage unserer Jugendarbeit' teil. Dieser wird von Dr. Kurt Löwenstein, dem Vorsitzenden der Reichsarbeitsgemeinschaft der Kinderfreunde, geleitet.\",\"type\":\"text\",\"layer\":\"base\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"value\":\"Um sich praktisch zu bilden, nimmt Gerda zusätzlich an einer Schulung 'Methoden der Hordenarbeit' teil. Auch das 'Soziale Wandern' ist solch eine Methode, die in den Gruppen (auch 'Horden' genannt) oft genutzt wird. Dabei bildet das Wandern eine Möglichkeit, die Welt und fremde Gegenden zu erkunden und gleichzeitig die Lebens- und Wirtschaftsumstände der Menschen zu analysieren.\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_1455_(21)\"},{\"value\":\"Gerda sieht darin eine tiefgreifende Auseinandersetzung mit einem anderen Ort. Diese Methode wird sich daher auch gut für die Kinderrepublik eignen.\",\"type\":\"text\",\"layer\":\"fourth\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_1455_(49)\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"value\":\"Der Verband hat Schwierigkeiten, insbesondere jugendliche Helfer*innen zu finden, die länger freiwillig mitarbeiten. Oft helfen sie nur einige Zeit und haben dann wichtigere Dinge zu tun. Daher organisiert der Verband regelmäßig Aktivitäten ausschließlich für die Helfer*innen, damit diese sich kennenlernen und neben den verantwortlichen Aufgaben auch den Zusammenhalt in der Gruppe der Helfer*innen erleben. \",\"type\":\"text\",\"layer\":\"base\"},{\"type\":\"image\",\"layer\":\"base\",\"value\":\"2_30_2\"},{\"value\":\"Gerda nimmt an einer Wanderung teil, zu der alle Helfer*innen aus ihrer Stadt eingeladen sind. Am Ende sind sie immerhin 16 Jugendliche, die alle zwischen 15 und 18 Jahre alt sind. Die meisten von ihnen werden ebenfalls als Helfer*innen bei der 'Kinderrepublik' dabei sein. Gerda freut sich darauf, mit ihnen gemeinsam dorthin zu fahren.\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_1455_(72)\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"type\":\"video\",\"layer\":\"base\",\"value\":\"18_Gerda_Vorbereitung\"},{\"value\":\"Inzwischen steht auch fest, an welchem Ort das Zeltlager aufgebaut wird. In der Nähe der Stadt Kiel. Auf einer Karte hat Gerdas Ortsgruppe markiert, aus welchen Städten der Weimarer Republik sich Kinder- und Jugendgruppen angemeldet haben\",\"type\":\"text\",\"layer\":\"fore\"},{\"value\":\"Auf der Karte kannst du dir ansehen, woher die Kinder kommen.\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"base\",\"value\":\"Karte_Weimarer_Republik\"},{\"type\":\"redirect\",\"layer\":\"probezeltlager\",\"value\":\"Endlich geht es zur ersten Bewährungsprobe für die Gruppe: zum Probezeltlager.\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"value\":\"Wenige Wochen bevor die 'Kinderrepublik' stattfindet, haben die Kinderfreunde begonnen, eine Zeltlagerzeitung herauszugeben. Auch Gerdas Gruppe hat sich mit Artikeln und Bildern daran beteiligt. Die Zeitung soll alle Teilnehmenden, aber auch Eltern und Interessierte auf das Zeltlager vorbereiten.\",\"type\":\"text\",\"layer\":\"base\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_12_(9)\"},{\"value\":\"Außerdem dient sie dazu, Bauernhöfe und Bäckerereien zur Kooperation zu gewinnen sowie zum Spenden von Lebensmitteln. Schließlich soll kein Kind während des Zeltlagers hungern müssen.\",\"type\":\"text\",\"layer\":\"fore\"},{\"type\":\"redirect\",\"layer\":\"probezeltlager\",\"value\":\"Endlich geht es zur ersten Bewährungsprobe für die Gruppe: zum Probezeltlager.\"}]}]},{\"id\":4,\"name\":\"Das Probezeltlager\",\"link\":\"probezeltlager\",\"groups\":[{\"grouped\":true,\"row\":false,\"info\":\"Hier könnte ein Link sein.\",\"content\":[{\"type\":\"image\",\"layer\":\"back\",\"value\":\"daheim_karte\"},{\"type\":\"image\",\"layer\":\"second\",\"value\":\"02_45_(5)\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Anna\",\"content\":[{\"type\":\"video\",\"layer\":\"fore\",\"value\":\"15_Anna_Probezeltlager\"},{\"type\":\"text\",\"value\":\"Das Probezeltlager von Annas Ortsgruppe hat gut geklappt. Alle haben sich voller Freude in die Arbeit eingebracht, Zelte aufgebaut, gekocht, das Abendprogramm gestaltet und die Wanderwege herausgesucht. Nun fiebern alle der 'Kinderrepublik' entgegen.\",\"layer\":\"second\"},{\"type\":\"image\",\"layer\":\"back\",\"value\":\"daheim_karte\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"02_2480_(1)\"},{\"type\":\"text\",\"layer\":\"fourth\",\"value\":\"Vor einigen Wochen haben die Kinder begonnen, ihre eigene Zeitung herauszugeben, die alle Teilnehmenden, aber auch Eltern und Interessierte auf das Zeltlager vorbereiten soll. Außerdem soll sie dazu dienen, Bauern und Bäcker zur Kooperation zu gewinnen, damit es auch genügend Lebensmittel für alle geben wird. Schließlich soll kein Kind während des Zeltlagers hungern müssen.\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_278_(7)\"},{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Nun steht die Abreise endlich bevor. Anna muss ihre Sachen packen, damit sie die nächsten drei Wochen alles dabei hat, was sie braucht.\"},{\"type\":\"text\",\"layer\":\"second\",\"value\":\"Hilf Anna beim Packen ihres Rucksacks. Welche Dinge wird sie in der Kinderrepublik benötigen?\"},{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Um einen Gegenstand einzupacken, ziehe ihn direkt auf den Rucksack. Tipp: Manche Dinge werden in der Kinderrepublik dringend benötigt, andere gab es Ende der 1920er Jahre noch gar nicht. Wenn du fertig gepackt hast, kommst du zum nächsten Kapitel.\"},{\"type\":\"suitcase\",\"layer\":\"base\",\"value\":\"rucksack\"},{\"type\":\"redirect\",\"layer\":\"ankunft\",\"value\":\"Du bist schon mit einer anderen Gruppe voraus gefahren und wartest auf Anna in der Kinderrepublik.\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Karl\",\"content\":[{\"type\":\"video\",\"layer\":\"fore\",\"value\":\"16_Karl_Probezeltlager\"},{\"type\":\"text\",\"value\":\"Das Probezeltlager von Karls Ortsgruppe hat recht gut geklappt. Die meisten haben sich voller Freude in die Arbeit eingebracht, Zelte aufgebaut, gekocht, das Abendprogramm gestaltet und die Wanderwege herausgesucht.\",\"layer\":\"base\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"daheim_karte\"},{\"type\":\"image\",\"layer\":\"second\",\"value\":\"02_2480_(1)\"},{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Nur Kurt war mit wenig Interesse dabei, hat sich vor der Arbeit gedrückt und oft von der Gruppe entfernt. Die Gruppe hat daher einstimmig entschieden, dass Kurt nicht mehr an den Unternehmungen der Gruppe teilnehmen darf, wenn er nicht bereit ist, sich einzubringen.\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Karl\",\"content\":[{\"type\":\"text\",\"value\":\"Wenige Wochen vor der 'Kinderrepublik' haben die Kinder begonnen, ihre eigene Zeitung herauszugeben, die alle Teilnehmenden, aber auch Eltern und Interessierte auf das Zeltlager vorbereiten soll. Außerdem dient sie dazu, Bauernhöfe und Bäckerereien zur Kooperation zu gewinnen, damit es auch genügend Lebensmittel für alle gibt. Schließlich soll kein Kind während des Zeltlagers hungern müssen.\",\"layer\":\"third\"},{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Nun steht die Abreise endlich bevor. Karl muss seine Sachen packen, damit er die nächsten drei Wochen alles dabei hat, was er braucht.\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Karl\",\"content\":[{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Hilf Karl beim Packen seines Rucksacks. Welche Dinge wird er in der Kinderrepublik benötigen?\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_2424_(1)\"},{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Um einen Gegenstand einzupacken, ziehe ihn direkt auf den Rucksack. Tipp: Manche Dinge werden in der Kinderrepublik dringend benötigt, andere gab es Ende der 1920er Jahre noch gar nicht. Wenn du fertig gepackt hast, kommst du zum nächsten Kapitel.\"},{\"type\":\"suitcase\",\"layer\":\"base\",\"value\":\"rucksack\"},{\"type\":\"redirect\",\"layer\":\"ankunft\",\"value\":\"Du bist schon mit einer anderen Gruppe voraus gefahren und wartest auf Karl in der Kinderrepublik.\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"type\":\"video\",\"layer\":\"fore\",\"value\":\"17_Gerda_Probezeltlager\"},{\"type\":\"text\",\"value\":\"Das Probezeltlager von Gerdas Ortsgruppe hat recht gut geklappt. Die meisten haben sich voller Freude in die Arbeit eingebracht, Zelte aufgebaut, gekocht, das Abendprogramm gestaltet und die Wanderwege herausgesucht.\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"daheim_karte\"},{\"type\":\"image\",\"layer\":\"second\",\"value\":\"02_2480_(1)\"},{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Gerda fand es trotzdem aufregend, da sie als Helferin auch die Verantwortung für das Wohlergehen der Kinder hatte. Zum Glück haben sich alle vorbildlich verhalten, niemand hat sich verletzt und es gab keinen Ärger zwischen den Kindern und Helfer*innen.\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"type\":\"text\",\"value\":\"Nun muss Gerda noch mit ihrem Meister klären, ob sie für 3 Wochen von der Arbeit fernbleiben darf. Gerda hat viel Glück. Ihr Buchbindermeister ist selbst bei der SPD und freut sich über Gerdas Einsatz. Er stellt sie für die drei Wochen unbezahlt frei, kauft Gerda dafür aber noch einige Spendenbausteine ab.\",\"layer\":\"fore\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_1455_(49)\"},{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Ihre Sachen hat Gerda auch noch nicht gepackt. 3 Wochen sind eine lange Zeit.\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Hilf Gerda beim Packen ihres Rucksacks. Welche Dinge wird sie in der Kinderrepublik benötigen?\"},{\"type\":\"image\",\"layer\":\"back\",\"value\":\"02_2424_(1)\"},{\"type\":\"text\",\"layer\":\"base\",\"value\":\"Um einen Gegenstand einzupacken, ziehe ihn direkt auf den Rucksack. Tipp: Manche Dinge werden in der Kinderrepublik dringend benötigt, andere gab es Ende der 1920er Jahre noch gar nicht. Wenn du fertig gepackt hast, kommst du zum nächsten Kapitel.\"},{\"type\":\"suitcase\",\"layer\":\"base\",\"value\":\"rucksack\"},{\"type\":\"redirect\",\"layer\":\"ankunft\",\"value\":\"Du bist schon mit einer anderen Gruppe voraus gefahren und wartest auf Gerda in der Kinderrepublik.\"}]}]},{\"id\":5,\"name\":\"Der Weg zur Kinderrepublik\",\"link\":\"reise\",\"groups\":[{\"grouped\":true,\"row\":false,\"info\":\"Hier könnte ein Link sein.\",\"content\":[{\"type\":\"image\",\"layer\":\"back\",\"value\":\"daheim_karte\"},{\"type\":\"image\",\"layer\":\"base\",\"value\":\"02_1455_(69)\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Anna\",\"content\":[{\"type\":\"text\",\"value\":\"Nachdem Anna fertig gepackt hat, ist ihr Rucksack voll und schwer. Sie freut sich riesig, denn nun kann es endlich losgehen. Ihre Eltern und ihr Großvater sind etwas traurig, denn Anna war noch nie länger von zu Hause weg - und schon gar nicht allein.\",\"layer\":\"second\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"02_1455_(56)\"},{\"type\":\"text\",\"layer\":\"fourth\",\"value\":\"Mit 35 anderen Kindern und einigen Helfer*innen als Begleitung fährt Anna im Zug Richtung Norden.\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_2453_(1)\"},{\"type\":\"text\",\"layer\":\"fore\",\"value\":\"Um sich die Zeit zu vertreiben, spielen die Kinder verschiedene Spiele. Anna möchte mit dir 'Drei gewinnt' spielen, weil ihr langweilig ist.\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Anna\",\"content\":[{\"type\":\"text\",\"value\":\"Um zu spielen, setze dein Kreuz in eines der Kästchen, indem du dort hinein klickst. Danach ist Anna dran. Um zu gewinnen, musst du drei Kreuze in einer waagerechten, senkrechten oder diagonalen Reihe platzieren.\",\"layer\":\"second\"},{\"type\":\"tictactoe\",\"layer\":\"base\",\"value\":\"Drei gewinnt\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"02_278_(3)\"},{\"type\":\"text\",\"layer\":\"fourth\",\"value\":\"Nach einem halben Tag kommen die Kinder und Helfer*innen erschöpft, aber freudig in Kiel an, wo sie eine Nacht bei den Kieler Genoss*innen übernachten werden, bevor es am nächsten Tag gemeinsam mit allen anderen zum Zielort gehen soll.\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Anna\",\"content\":[{\"type\":\"text\",\"value\":\"Am Sonntagmorgen versammeln sich alle angereisten Kinder in der Kieler Nordostseehalle, es gibt Ansprachen und Musik. Am Ende singt der Chorverein „Brüder, zur Sonne, zur Freiheit“. Nun geht es endlich los zur Kinderrepublik.\",\"layer\":\"second\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"02_1455_(61)\"},{\"type\":\"text\",\"layer\":\"fourth\",\"value\":\"Den letzten Weg legen alle mit dem Dampfer zurück, während die Zelte bereits mit Autos zum Zielort gebracht wurden.\"},{\"type\":\"redirect\",\"layer\":\"ankunft\",\"value\":\"Betrete die Kinderrepublik!\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Karl\",\"content\":[{\"type\":\"text\",\"value\":\"Nachdem Karl fertig gepackt hat, ist sein Rucksack voll und schwer. Er freut sich riesig, denn nun kann es endlich losgehen. Seine Eltern und seine Großmutter sind etwas traurig, denn Karl war noch nie länger von zu Hause weg - und schon gar nicht allein.\",\"layer\":\"second\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"02_1455_(56)\"},{\"type\":\"text\",\"layer\":\"fourth\",\"value\":\"Mit 42 anderen Kindern und einigen Helfer*innen als Begleitung fährt Karl im Zug Richtung Nordwesten.\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_2453_(1)\"},{\"type\":\"text\",\"layer\":\"fore\",\"value\":\"Um sich die Zeit zu vertreiben, spielen die Kinder verschiedene Spiele. Karl möchte mit dir 'Drei gewinnt' spielen, weil ihr langweilig ist.\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Karl\",\"content\":[{\"type\":\"text\",\"value\":\"Um zu spielen, setze dein Kreuz in eines der Kästchen, indem du dort hinein klickst. Danach ist Karl dran. Um zu gewinnen, musst du drei Kreuze in einer waagerechten, senkrechten oder diagonalen Reihe platzieren.\",\"layer\":\"second\"},{\"type\":\"tictactoe\",\"layer\":\"base\",\"value\":\"Drei gewinnt\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"02_278_(3)\"},{\"type\":\"text\",\"layer\":\"fourth\",\"value\":\"Nach einem halben Tag kommen die Kinder und Helfer*innen erschöpft, aber freudig in Kiel an, wo sie eine Nacht bei den Kieler Genoss*innen übernachten werden, bevor es am nächsten Tag gemeinsam mit allen anderen zum Zielort gehen soll.\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Karl\",\"content\":[{\"type\":\"text\",\"value\":\"Am Sonntagmorgen versammeln sich alle angereisten Kinder in der Kieler Nordostseehalle, es gibt Ansprachen und Musik. Am Ende singt der Chorverein „Brüder, zur Sonne, zur Freiheit“. Nun geht es endlich los zur Kinderrepublik.\",\"layer\":\"second\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"02_1455_(61)\"},{\"type\":\"text\",\"layer\":\"fourth\",\"value\":\"Den letzten Weg legen alle mit dem Dampfer zurück, während die Zelte bereits mit Autos zum Zielort gebracht wurden.\"},{\"type\":\"redirect\",\"layer\":\"ankunft\",\"value\":\"Betrete die Kinderrepublik!\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"type\":\"text\",\"value\":\"Nachdem Gerda fertig gepackt hat, ist ihr Rucksack voll und schwer. Sie freut sich riesig, denn nun kann es endlich losgehen. Trotzdem hat sie ein schlechtes Gewissen, wenn sie ihre Mutter für drei Wochen allein mit ihren beiden Geschwistern lässt.\",\"layer\":\"second\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"2_1590_Seite_138\"},{\"type\":\"text\",\"layer\":\"fourth\",\"value\":\"Aber ihre Mutter hat ihr versichert, dass sie es schon schaffen wird. Und im Moment hat sie einen sehr höflichen und ordentlichen Schlafburschen, der ihr auch ab und zu im Haushalt zur Hand geht.\"},{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_2453_(1)\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"type\":\"text\",\"layer\":\"fore\",\"value\":\"Nun sitzt Gerda mit 28 Kindern und einigen anderen Helfer*innen im Zug, der sich langsam Richtung Norden bewegt.\"},{\"type\":\"text\",\"value\":\"Um sich die Zeit zu vertreiben, spielen die Kinder verschiedene Spiele. Gerda hat dafür keine Zeit, denn sie muss ein Auge darauf haben, dass niemand sich zu weit aus dem Fenster lehnt und herausfällt.\",\"layer\":\"second\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"02_1455_(51)\"},{\"type\":\"text\",\"layer\":\"fourth\",\"value\":\"Nach einem halben Tag kommen die Kinder und Helfer*innen erschöpft, aber freudig in Kiel an, wo sie eine Nacht bei den Kieler Genoss*innen übernachten werden, bevor es am nächsten Tag gemeinsam mit allen anderen zum Zielort gehen soll.\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"02_278_(3)\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Gerda\",\"content\":[{\"type\":\"text\",\"value\":\"Am Sonntagmorgen versammeln sich alle angereisten Kinder in der Kieler Nordostseehalle, es gibt Ansprachen und Musik. Am Ende singt der Chorverein „Brüder, zur Sonne, zur Freiheit“. Nun geht es endlich los zur Kinderrepublik.\",\"layer\":\"second\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"02_1455_(61)\"},{\"type\":\"text\",\"layer\":\"fourth\",\"value\":\"Den letzten Weg legen alle mit dem Dampfer zurück, während die Zelte bereits mit Autos zum Zielort gebracht wurden.\"},{\"type\":\"redirect\",\"layer\":\"ankunft\",\"value\":\"Betrete die Kinderrepublik!\"}]}]},{\"id\":6,\"name\":\"Die Kinderrepublik\",\"link\":\"ankunft\",\"groups\":[{\"grouped\":true,\"row\":false,\"info\":\"Hier könnte ein Link sein.\",\"content\":[{\"type\":\"image\",\"layer\":\"back\",\"value\":\"daheim_karte\"},{\"type\":\"image\",\"layer\":\"base\",\"value\":\"02_1455_(1)\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Anna\",\"content\":[{\"type\":\"text\",\"value\":\"Anna ist jetzt endlich in der Kinderrepublik angekommen und hat ihr Zelt gemeinsam mit mehreren anderen Kindern bezogen. Sie verschafft sich sofort einen Überblick über das Gelände und das Lager.\",\"layer\":\"fore\"},{\"type\":\"video\",\"layer\":\"base\",\"value\":\"32_Anna_Zeltobfrau\"},{\"type\":\"image\",\"layer\":\"third\",\"value\":\"02_1455_(75)\"},{\"type\":\"text\",\"layer\":\"fourth\",\"value\":\"Anna findet diese neue Aufgabe spannend und freut sich, dass sie sofort mithelfen kann. Ihre Zeltgemeinschaft ist dabei nur ein winziger Teil des Zeltlagers, aber trotzdem hat sie das Gefühl, ein wichtiger Teil der demokratischen Ordnung der Kinderrepublik zu sein.\"}]},{\"grouped\":true,\"row\":false,\"character\":\"Anna\",\"content\":[{\"type\":\"image\",\"layer\":\"deep\",\"value\":\"02_167_(4)\"},{\"type\":\"text\",\"layer\":\"fore\",\"value\":\"In der Kinderrepublik gibt es viel zu entdecken. Was möchtest du als nächstes tun?\"},{\"type\":\"redirect\",\"layer\":\"ankunft\",\"value\":\"Du bist schon mit einer anderen Gruppe voraus gefahren und wartest auf Anna in der Kinderrepublik.\"}]}]}]}");

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
/* harmony import */ var _scrollintoview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollintoview */ "./app/scrollintoview.tsx");
/* harmony import */ var _usepersistedstate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usepersistedstate */ "./app/usepersistedstate.tsx");
/* harmony import */ var _gerdesque_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gerdesque/home */ "../../../dist/libs/home/home.esm.js");
/* harmony import */ var _gerdesque_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gerdesque/ui */ "../../../dist/libs/ui/ui.esm.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.scss */ "./app/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.json */ "./app/app.json");
var _app_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./app.json */ "./app/app.json", 1);








var App = () => {
  var [character, setCharacter] = Object(_usepersistedstate__WEBPACK_IMPORTED_MODULE_3__["default"])('character', 'default');

  var renderChapter = routerProps => {
    var chapterLink = routerProps.match.params.link;
    var chapter = _app_json__WEBPACK_IMPORTED_MODULE_7__.chapters.find(chapterObj => chapterObj.link === chapterLink);
    return chapter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gerdesque_ui__WEBPACK_IMPORTED_MODULE_5__["Chapter"], chapter);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gerdesque_ui__WEBPACK_IMPORTED_MODULE_5__["AppContext"].Provider, {
    value: [character, setCharacter]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    basename: "/demokratieerleben2020"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gerdesque_ui__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
    chapters: _app_json__WEBPACK_IMPORTED_MODULE_7__.chapters
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_scrollintoview__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true,
    component: _gerdesque_home__WEBPACK_IMPORTED_MODULE_4__["Home"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/chapter/:link",
    render: renderChapter
  })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/scrollintoview.tsx":
/*!********************************!*\
  !*** ./app/scrollintoview.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var ScrollIntoView = (_ref) => {
  var {
    children,
    location
  } = _ref;
  var prevLocation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (prevLocation.current !== location.pathname) {
      document.querySelector('.parallax__header').scrollIntoView({
        behavior: 'smooth'
      });
      prevLocation.current = location.pathname;
    }
  }, [location]);
  return children;
};

ScrollIntoView.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ScrollIntoView));

/***/ }),

/***/ "./app/usepersistedstate.tsx":
/*!***********************************!*\
  !*** ./app/usepersistedstate.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePersistedState; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function usePersistedState(key, defaultValue) {
  var [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(() => {
    var persistedState = localStorage.getItem(key);
    return persistedState ? JSON.parse(persistedState) : defaultValue;
  });
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, setState];
}

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
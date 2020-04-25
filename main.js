(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../dist/libs/adminui/adminui.esm.js":
/*!********************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/gerdesque/dist/libs/adminui/adminui.esm.js ***!
  \********************************************************************************************************/
/*! exports provided: Adminui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adminui", function() { return Adminui; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-admin */ "../../../node_modules/react-admin/esm/index.js");
/* harmony import */ var ra_data_json_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ra-data-json-server */ "../../../node_modules/ra-data-json-server/esm/index.js");




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

function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
} // About 1.5x faster than the two-arg version of Array#splice()


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
} // This implementation is based heavily on node's url.parse


function resolvePathname(to, from) {
  if (from === undefined) from = '';
  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';
  var hasTrailingSlash;

  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;

  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }
  if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');
  var result = fromParts.join('/');
  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';
  return result;
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

var isProduction$1 = "development" === 'production';
var prefix = 'Invariant failed';

function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction$1) {
    throw new Error(prefix);
  }

  throw new Error(prefix + ": " + (message || ''));
}

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}

function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}

function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}

function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}

function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}

function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     true ? warning(prompt == null, 'A history supports only one prompt at a time') : undefined;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           true ? warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : undefined;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */


function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */


function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */


function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  true ? invariant(false, 'Browser history needs a DOM') : undefined : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     true ? warning(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : undefined;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     true ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : undefined;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     true ? warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         true ? warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : undefined;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var ChapterList = function ChapterList(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["List"], Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Datagrid"], {
    rowClick: "edit"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    source: "id"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    source: "name"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    source: "path"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["EditButton"], null)));
};

var ChapterEdit = function ChapterEdit(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Edit"], Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SimpleForm"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    disabled: true,
    source: "id"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    source: "name"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    source: "path"
  })));
};

var ChapterCreate = function ChapterCreate(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Create"], Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SimpleForm"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["ReferenceInput"], {
    source: "userId",
    reference: "users"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["SelectInput"], {
    optionText: "name"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    source: "name"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["TextInput"], {
    source: "path"
  })));
};

var history = createBrowserHistory();
var dataProvider = Object(ra_data_json_server__WEBPACK_IMPORTED_MODULE_2__["default"])('http://localhost:3000');

var Adminui = function Adminui(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Admin"], {
    dataProvider: dataProvider,
    history: history
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_1__["Resource"], {
    name: "chapter",
    options: {
      label: 'Kapitel'
    },
    list: ChapterList,
    edit: ChapterEdit,
    create: ChapterCreate
  }));
};



/***/ }),

/***/ "../../../dist/libs/home/home.esm.js":
/*!**************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/gerdesque/dist/libs/home/home.esm.js ***!
  \**************************************************************************************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gerdesque_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gerdesque/ui */ "../../../dist/libs/ui/ui.esm.js");


var introText = "Es ist 1927. Irgendwo im Ruhrgebiet leben zwei Kinder: Anna und Karl. Die Eltern der beiden gehören zur großen Arbeiterschaft, die im Bergbau, in Webereien, Fabriken und Stahlwerken arbeiten.";

var Home = function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gerdesque_ui__WEBPACK_IMPORTED_MODULE_1__["Chapter"], {
    "class": "intro"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gerdesque_ui__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    text: ["Demokratie ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "er"), "leben"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'box'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, introText)));
};



/***/ }),

/***/ "../../../dist/libs/ui/ui.esm.js":
/*!**********************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/gerdesque/dist/libs/ui/ui.esm.js ***!
  \**********************************************************************************************/
/*! exports provided: Chapter, Nav, Title, Ui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chapter", function() { return Chapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ui", function() { return Ui; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Nav = function Nav(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      chapter = _useState2[0],
      setChapter = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch('http://localhost:3000/chapter').then(function (_) {
      return _.json();
    }).then(setChapter);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "app-nav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: 'navigation'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: 'navigation--item'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: props.path
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: 'navigation--item'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: "/adminui"
  })), chapter.map(function (c, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: 'navigation--item',
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      exact: true,
      to: c.path
    }));
  })));
};

var Title = function Title(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, props.text));
};

var Chapter = function Chapter(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "parallax ".concat(props["class"])
  }, props.children[0] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: 'header',
    className: 'parallax__group'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'parallax__layer parallax__layer--base'
  }, props.children[0])), props.children[1] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: 'group2',
    className: 'parallax__group'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'parallax__layer parallax__layer--base'
  }, props.children[1]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'parallax__layer parallax__layer--deep'
  })), props.children[2] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: 'group3',
    className: 'parallax__group'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'parallax__layer parallax__layer--base'
  }, props.children[2]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'parallax__layer parallax__layer--back'
  })), props.children[3] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: 'group4',
    className: 'parallax__group'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'parallax__layer parallax__layer--fore'
  }, props.children[3])), props.children[4] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: 'group5',
    className: 'parallax__group'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'parallax__layer parallax__layer--fore'
  }, props.children[4]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'parallax__layer parallax__layer--base'
  })), props.children[5] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: 'group6',
    className: 'parallax__group'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'parallax__layer parallax__layer--back'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'parallax__layer parallax__layer--base'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'parallax__layer parallax__layer--fore'
  }, props.children[5])), props.children[6] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: 'group7',
    className: 'parallax__group'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'parallax__layer parallax__layer--fore'
  }, props.children[6]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'parallax__layer parallax__layer--back'
  })));
};

var Ui = function Ui(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to ui component!"));
};



/***/ }),

/***/ "../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/lib/loader.js?!./app/app.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/gm/Development/playground/demokratieerleben2020/gerdesque/node_modules/postcss-loader/src??embedded!/home/gm/Development/playground/demokratieerleben2020/gerdesque/node_modules/sass-loader/lib/loader.js??ref--5-oneOf-3-2!./app/app.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"FundamentalBrigade\";\n  font-display: swap;\n  src: url('Fundamental_Brigade_Schlank.ttf') format(\"truetype\");\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/* Remove default padding */\nul[class],\nol[class] {\n  padding: 0;\n  list-style: none;\n}\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nul[class],\nol[class],\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\nhtml {\n  overflow: hidden;\n  min-height: 100vh;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.6;\n}\nbody {\n  background-image: url('background.webp');\n  color: darkred;\n  font-size: calc(10px + 2vmin);\n  font-family: FundamentalBrigade, arial, sans-serif;\n  font-weight: normal;\n  height: 100%;\n  overflow-x: hidden;\n  padding: 0;\n  -webkit-perspective: 1px;\n          perspective: 1px;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dtL0RldmVsb3BtZW50L3BsYXlncm91bmQvZGVtb2tyYXRpZWVybGViZW4yMDIwL2dlcmRlc3F1ZS9hcHBzL2RlbW9sL3NyYy9hcHAvYXBwLnNjc3MiLCJhcHBzL2RlbW9sL3NyYy9hcHAvYXBwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsOERBQUE7QUNDRjtBREVBOzs7RUFHRSxzQkFBQTtBQ0FGO0FER0EsMkJBQUE7QUFDQTs7RUFFRSxVQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREdBLDBCQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0VBY0UsU0FBQTtBQ0FGO0FER0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQTtFQUNFLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtVQUFBLGdCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQ0FGIiwiZmlsZSI6ImFwcHMvZGVtb2wvc3JjL2FwcC9hcHAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0Z1bmRhbWVudGFsQnJpZ2FkZSc7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoJy4vRnVuZGFtZW50YWxfQnJpZ2FkZV9TY2hsYW5rLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyAqL1xudWxbY2xhc3NdLFxub2xbY2xhc3NdIHtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5wLFxudWxbY2xhc3NdLFxub2xbY2xhc3NdLFxubGksXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuYmxvY2txdW90ZSxcbmRsLFxuZGQge1xuICBtYXJnaW46IDA7XG59XG5cbmh0bWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYmFja2dyb3VuZC53ZWJwKTtcbiAgY29sb3I6IGRhcmtyZWQ7XG4gIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMnZtaW4pO1xuICBmb250LWZhbWlseTogRnVuZGFtZW50YWxCcmlnYWRlLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIHBlcnNwZWN0aXZlOiAxcHg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZ1bmRhbWVudGFsQnJpZ2FkZVwiO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKFwiLi9GdW5kYW1lbnRhbF9CcmlnYWRlX1NjaGxhbmsudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyAqL1xudWxbY2xhc3NdLFxub2xbY2xhc3NdIHtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5wLFxudWxbY2xhc3NdLFxub2xbY2xhc3NdLFxubGksXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuYmxvY2txdW90ZSxcbmRsLFxuZGQge1xuICBtYXJnaW46IDA7XG59XG5cbmh0bWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYmFja2dyb3VuZC53ZWJwKTtcbiAgY29sb3I6IGRhcmtyZWQ7XG4gIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgMnZtaW4pO1xuICBmb250LWZhbWlseTogRnVuZGFtZW50YWxCcmlnYWRlLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIHBlcnNwZWN0aXZlOiAxcHg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59Il19 */"

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
/* harmony import */ var _gerdesque_adminui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gerdesque/adminui */ "../../../dist/libs/adminui/adminui.esm.js");
/* harmony import */ var _gerdesque_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gerdesque/ui */ "../../../dist/libs/ui/ui.esm.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.scss */ "./app/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_5__);






var App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gerdesque_ui__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    path: "/"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true,
    component: _gerdesque_home__WEBPACK_IMPORTED_MODULE_2__["Home"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/adminui",
    exact: true,
    component: _gerdesque_adminui__WEBPACK_IMPORTED_MODULE_3__["Adminui"]
  }))));
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

module.exports = __webpack_require__(/*! /home/gm/Development/playground/demokratieerleben2020/gerdesque/apps/demol/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
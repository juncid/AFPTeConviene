module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);





const Footer = () => {
  const {
    0: datosPrevisionales,
    1: setDatosPrevisionales
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const aacento = "\u00e1";
  const eacento = "\u00e9";
  const iacento = "\u00ed";
  const oacento = "\u00f3";
  const uacento = "\u00fa";
  const enhe = '\u00f1';
  const interrogacion = '\u00BF';
  const comillaIzquierda = '\u201C';
  const comillaDerecha = '\u201D';
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const obtenerDatosPrevisionales = async () => {
      const filejson = await fetch("./datosPrevisionales.json");
      const resultado = await filejson.json();
      setDatosPrevisionales({
        mes: resultado["mes"],
        anio: resultado["anio"],
        capital: resultado["capital"],
        cuprum: resultado["cuprum"],
        habitat: resultado["habitat"],
        modelo: resultado["modelo"],
        planvital: resultado["planvital"],
        provida: resultado["provida"],
        uno: resultado["uno"]
      });
    };

    obtenerDatosPrevisionales();
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("footer", {
    className: "footer",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "disclaimer text-white text-justify",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
        children: ["AFP Modelo no se hace cargo de la veracidad de los datos que ingrese el usuario a esta calculadora. La variaci", oacento, "n de sueldo l", iacento, "quido aproximada despu", eacento, "s de impuestos, sin asignaciones de colaci", oacento, "n y/o movilizaci", oacento, "n. Tabla de impuestos de segunda categor", iacento, "a actualizada a ", datosPrevisionales.mes, " de ", datosPrevisionales.anio, ". ", comillaIzquierda, "La rentabilidad es variable, por lo que nada garantiza que las rentabilidades pasadas se repitan en el futuro. Inf", oacento, "rmese sobre la rentabilidad de su Fondo de Pensiones, las comisiones y la calidad de servicio de las AFP en el sitio web de la Superintendencia de Pensiones: www.spensiones.cl.", comillaDerecha, " ", comillaIzquierda, "Estructura de comisiones por dep", oacento, "sitos de cotizaciones vigentes a ", datosPrevisionales.mes, " de ", datosPrevisionales.anio, " - Capital: ", datosPrevisionales.capital, "%, Cuprum: ", datosPrevisionales.cuprum, "%, Habitat: ", datosPrevisionales.habitat, "%, Modelo: ", datosPrevisionales.modelo, "%, Planvital: ", datosPrevisionales.planvital, "%, Provida: ", datosPrevisionales.provida, "%, Uno ", datosPrevisionales.uno, "%", comillaDerecha, ". Para afiliados dependientes, independientes y voluntarios. Fuente: Superintendencia de Pensiones."]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/img/logo.png */ "./public/assets/img/logo.png");
/* harmony import */ var _public_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__);





const Header = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
  className: "nav-fill w-100 navbar-dark bg-dark",
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default.a.Brand, {
    href: "/",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
      src: _public_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "logo-afp-modelo"
    })
  })
});

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





function Layout({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {}), children, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
}

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Resultados_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Resultados.css */ "./styles/Resultados.css");
/* harmony import */ var _styles_Resultados_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Resultados_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_regimenes_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/regimenes.css */ "./styles/regimenes.css");
/* harmony import */ var _styles_regimenes_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_regimenes_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_solicitud_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/solicitud.css */ "./styles/solicitud.css");
/* harmony import */ var _styles_solicitud_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_solicitud_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-gtm-module */ "react-gtm-module");
/* harmony import */ var react_gtm_module__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module__WEBPACK_IMPORTED_MODULE_12__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function MyApp({
  Component,
  pageProps
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    const tagManagerArgs = {
      gtmId: ""
    };

    if (false) {}
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_redux__WEBPACK_IMPORTED_MODULE_9__["Provider"], {
    store: _store_store__WEBPACK_IMPORTED_MODULE_11__["default"],
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, _objectSpread({}, pageProps))
    })
  });
}

const makestore = () => _store_store__WEBPACK_IMPORTED_MODULE_11__["default"];

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__["createWrapper"])(makestore);
/* harmony default export */ __webpack_exports__["default"] = (wrapper.withRedux(MyApp));

/***/ }),

/***/ "./public/assets/img/logo.png":
/*!************************************!*\
  !*** ./public/assets/img/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAAmCAYAAACvU/X+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjgxQjdGNkQ2NDQyMTFFODkzMTFGM0Y0RjQwNTc3MjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjgxQjdGNkU2NDQyMTFFODkzMTFGM0Y0RjQwNTc3MjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGODFCN0Y2QjY0NDIxMUU4OTMxMUYzRjRGNDA1NzcyOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGODFCN0Y2QzY0NDIxMUU4OTMxMUYzRjRGNDA1NzcyOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PijElhYAAA/vSURBVHja7F0HeFRV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"

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _postReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postReducer */ "./store/reducers/postReducer.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  post: _postReducer__WEBPACK_IMPORTED_MODULE_1__["postReducer"]
}));

/***/ }),

/***/ "./store/reducers/postReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/postReducer.js ***!
  \***************************************/
/*! exports provided: postReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postReducer", function() { return postReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  posts: [],
  post: {},
  loading: false,
  error: null
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.payload,
        loading: false,
        error: null
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.js");




const initialState = {};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/*! exports provided: GET_POSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS", function() { return GET_POSTS; });
const GET_POSTS = 'GET_POSTS';

/***/ }),

/***/ "./styles/Resultados.css":
/*!*******************************!*\
  !*** ./styles/Resultados.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/regimenes.css":
/*!******************************!*\
  !*** ./styles/regimenes.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/solicitud.css":
/*!******************************!*\
  !*** ./styles/solicitud.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react-gtm-module":
/*!***********************************!*\
  !*** external "react-gtm-module" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-gtm-module");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ltZy9sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9wb3N0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS90eXBlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ndG0tbW9kdWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJkYXRvc1ByZXZpc2lvbmFsZXMiLCJzZXREYXRvc1ByZXZpc2lvbmFsZXMiLCJ1c2VTdGF0ZSIsImFhY2VudG8iLCJlYWNlbnRvIiwiaWFjZW50byIsIm9hY2VudG8iLCJ1YWNlbnRvIiwiZW5oZSIsImludGVycm9nYWNpb24iLCJjb21pbGxhSXpxdWllcmRhIiwiY29taWxsYURlcmVjaGEiLCJ1c2VFZmZlY3QiLCJvYnRlbmVyRGF0b3NQcmV2aXNpb25hbGVzIiwiZmlsZWpzb24iLCJmZXRjaCIsInJlc3VsdGFkbyIsImpzb24iLCJtZXMiLCJhbmlvIiwiY2FwaXRhbCIsImN1cHJ1bSIsImhhYml0YXQiLCJtb2RlbG8iLCJwbGFudml0YWwiLCJwcm92aWRhIiwidW5vIiwiSGVhZGVyIiwibG9nbyIsIkxheW91dCIsImNoaWxkcmVuIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0YWdNYW5hZ2VyQXJncyIsImd0bUlkIiwicHJvY2VzcyIsIk5FWFRfUFVCTElDX0dUTV9JRCIsInN0b3JlIiwibWFrZXN0b3JlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJ3aXRoUmVkdXgiLCJjb21iaW5lUmVkdWNlcnMiLCJwb3N0IiwicG9zdFJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJwb3N0cyIsImxvYWRpbmciLCJlcnJvciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInR5cGVzIiwicGF5bG9hZCIsIm1pZGRsZXdhcmUiLCJ0aHVuayIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiR0VUX1BPU1RTIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVAsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZGF0b3NQcmV2aXNpb25hbGVzLCBzZXREYXRvc1ByZXZpc2lvbmFsZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBhYWNlbnRvID0gXCJcXHUwMGUxXCI7XHJcbiAgICBjb25zdCBlYWNlbnRvID0gXCJcXHUwMGU5XCI7XHJcbiAgICBjb25zdCBpYWNlbnRvID0gXCJcXHUwMGVkXCI7XHJcbiAgICBjb25zdCBvYWNlbnRvID0gXCJcXHUwMGYzXCI7XHJcbiAgICBjb25zdCB1YWNlbnRvID0gXCJcXHUwMGZhXCI7XHJcbiAgICBjb25zdCBlbmhlID0gJ1xcdTAwZjEnO1xyXG4gICAgY29uc3QgaW50ZXJyb2dhY2lvbiA9ICdcXHUwMEJGJztcclxuICAgIGNvbnN0IGNvbWlsbGFJenF1aWVyZGEgPSAnXFx1MjAxQyc7XHJcbiAgICBjb25zdCBjb21pbGxhRGVyZWNoYSA9ICdcXHUyMDFEJztcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyRGF0b3NQcmV2aXNpb25hbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlanNvbiA9IGF3YWl0IGZldGNoKFwiLi9kYXRvc1ByZXZpc2lvbmFsZXMuanNvblwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgZmlsZWpzb24uanNvbigpO1xyXG5cclxuICAgICAgICAgICAgc2V0RGF0b3NQcmV2aXNpb25hbGVzKHtcclxuICAgICAgICAgICAgICAgIG1lczogcmVzdWx0YWRvW1wibWVzXCJdLFxyXG4gICAgICAgICAgICAgICAgYW5pbzogcmVzdWx0YWRvW1wiYW5pb1wiXSxcclxuICAgICAgICAgICAgICAgIGNhcGl0YWw6IHJlc3VsdGFkb1tcImNhcGl0YWxcIl0sXHJcbiAgICAgICAgICAgICAgICBjdXBydW06IHJlc3VsdGFkb1tcImN1cHJ1bVwiXSxcclxuICAgICAgICAgICAgICAgIGhhYml0YXQ6IHJlc3VsdGFkb1tcImhhYml0YXRcIl0sXHJcbiAgICAgICAgICAgICAgICBtb2RlbG86IHJlc3VsdGFkb1tcIm1vZGVsb1wiXSxcclxuICAgICAgICAgICAgICAgIHBsYW52aXRhbDogcmVzdWx0YWRvW1wicGxhbnZpdGFsXCJdLFxyXG4gICAgICAgICAgICAgICAgcHJvdmlkYTogcmVzdWx0YWRvW1wicHJvdmlkYVwiXSxcclxuICAgICAgICAgICAgICAgIHVubzogcmVzdWx0YWRvW1widW5vXCJdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2J0ZW5lckRhdG9zUHJldmlzaW9uYWxlcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNjbGFpbWVyIHRleHQtd2hpdGUgdGV4dC1qdXN0aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBBRlAgTW9kZWxvIG5vIHNlIGhhY2UgY2FyZ28gZGUgbGEgdmVyYWNpZGFkIGRlIGxvcyBkYXRvcyBxdWUgaW5ncmVzZSBlbCB1c3VhcmlvIGFcclxuICAgICAgICAgICAgICAgICAgICBlc3RhIGNhbGN1bGFkb3JhLiBMYSB2YXJpYWNpe29hY2VudG99biBkZSBzdWVsZG8gbHtpYWNlbnRvfXF1aWRvIGFwcm94aW1hZGEgZGVzcHV7ZWFjZW50b31zIGRlIGltcHVlc3RvcyxcclxuICAgICAgICAgICAgICAgICAgICBzaW4gYXNpZ25hY2lvbmVzIGRlIGNvbGFjaXtvYWNlbnRvfW4geS9vIG1vdmlsaXphY2l7b2FjZW50b31uLiBUYWJsYSBkZSBpbXB1ZXN0b3MgZGUgc2VndW5kYVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J7aWFjZW50b31hIGFjdHVhbGl6YWRhIGEge2RhdG9zUHJldmlzaW9uYWxlcy5tZXN9IGRlIHtkYXRvc1ByZXZpc2lvbmFsZXMuYW5pb30uIHtjb21pbGxhSXpxdWllcmRhfUxhIHJlbnRhYmlsaWRhZCBlcyB2YXJpYWJsZSwgcG9yIGxvIHF1ZVxyXG4gICAgICAgICAgICAgICAgICAgIG5hZGEgZ2FyYW50aXphIHF1ZSBsYXMgcmVudGFiaWxpZGFkZXMgcGFzYWRhcyBzZSByZXBpdGFuIGVuIGVsIGZ1dHVyby4gSW5me29hY2VudG99cm1lc2VcclxuICAgICAgICAgICAgICAgICAgICBzb2JyZSBsYSByZW50YWJpbGlkYWQgZGUgc3UgRm9uZG8gZGUgUGVuc2lvbmVzLCBsYXMgY29taXNpb25lcyB5IGxhIGNhbGlkYWQgZGVcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNpbyBkZSBsYXMgQUZQIGVuIGVsIHNpdGlvIHdlYiBkZSBsYSBTdXBlcmludGVuZGVuY2lhIGRlIFBlbnNpb25lczpcclxuICAgICAgICAgICAgICAgICAgICB3d3cuc3BlbnNpb25lcy5jbC57Y29taWxsYURlcmVjaGF9IHtjb21pbGxhSXpxdWllcmRhfUVzdHJ1Y3R1cmEgZGUgY29taXNpb25lcyBwb3IgZGVwe29hY2VudG99c2l0b3MgZGUgY290aXphY2lvbmVzIHZpZ2VudGVzXHJcbiAgICAgICAgICAgICAgICAgICAgYSB7ZGF0b3NQcmV2aXNpb25hbGVzLm1lc30gZGUge2RhdG9zUHJldmlzaW9uYWxlcy5hbmlvfSAtIENhcGl0YWw6IHtkYXRvc1ByZXZpc2lvbmFsZXMuY2FwaXRhbH0lLFxyXG4gICAgICAgICAgICAgICAgICAgIEN1cHJ1bToge2RhdG9zUHJldmlzaW9uYWxlcy5jdXBydW19JSwgSGFiaXRhdDoge2RhdG9zUHJldmlzaW9uYWxlcy5oYWJpdGF0fSUsXHJcbiAgICAgICAgICAgICAgICAgICAgTW9kZWxvOiB7ZGF0b3NQcmV2aXNpb25hbGVzLm1vZGVsb30lLCBQbGFudml0YWw6IHtkYXRvc1ByZXZpc2lvbmFsZXMucGxhbnZpdGFsfSUsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvdmlkYToge2RhdG9zUHJldmlzaW9uYWxlcy5wcm92aWRhfSUsIFVubyB7ZGF0b3NQcmV2aXNpb25hbGVzLnVub30le2NvbWlsbGFEZXJlY2hhfS4gUGFyYVxyXG4gICAgICAgICAgICAgICAgICAgIGFmaWxpYWRvcyBkZXBlbmRpZW50ZXMsIGluZGVwZW5kaWVudGVzIHkgdm9sdW50YXJpb3MuIEZ1ZW50ZTogU3VwZXJpbnRlbmRlbmNpYSBkZVxyXG4gICAgICAgICAgICAgICAgICAgIFBlbnNpb25lcy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvaW1nL2xvZ28ucG5nXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgICA8TmF2YmFyIGNsYXNzTmFtZT1cIm5hdi1maWxsIHctMTAwIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cclxuICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCIgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2xvZ299XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvLWFmcC1tb2RlbG9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgPC9OYXZiYXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcydcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9pbmRleC5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL1Jlc3VsdGFkb3MuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9yZWdpbWVuZXMuY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvc29saWNpdHVkLmNzcyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IFRhZ01hbmFnZXIgZnJvbSAncmVhY3QtZ3RtLW1vZHVsZSdcclxuXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRhZ01hbmFnZXJBcmdzID0ge1xyXG4gICAgICAgICAgICBndG1JZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR1RNX0lEXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgICAgIFRhZ01hbmFnZXIuaW5pdGlhbGl6ZSh0YWdNYW5hZ2VyQXJncyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBtYWtlc3RvcmUgPSAoKSA9PiBzdG9yZTtcclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZXN0b3JlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTndBQUFBbUNBWUFBQUN2VS9YK0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBeUpwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVNeTFqTURFeElEWTJMakUwTlRZMk1Td2dNakF4TWk4d01pOHdOaTB4TkRvMU5qb3lOeUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWlCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJZ2VHMXNibk02YzNSU1pXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl6Vkhsd1pTOVNaWE52ZFhKalpWSmxaaU1pSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5UTmlBb1YybHVaRzkzY3lraUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlJqZ3hRamRHTmtRMk5EUXlNVEZGT0Rrek1URkdNMFkwUmpRd05UYzNNamtpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UmpneFFqZEdOa1UyTkRReU1URkZPRGt6TVRGR00wWTBSalF3TlRjM01qa2lQaUE4ZUcxd1RVMDZSR1Z5YVhabFpFWnliMjBnYzNSU1pXWTZhVzV6ZEdGdVkyVkpSRDBpZUcxd0xtbHBaRHBHT0RGQ04wWTJRalkwTkRJeE1VVTRPVE14TVVZelJqUkdOREExTnpjeU9TSWdjM1JTWldZNlpHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEcEdPREZDTjBZMlF6WTBOREl4TVVVNE9UTXhNVVl6UmpSR05EQTFOemN5T1NJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BpakVsaFlBQUEvdlNVUkJWSGphN0YwSGVGUlZGajVKaGhJTkVBZ3RDbElGRVdsMlJBRUZrU3FpZmhSRnZ4VUZGWEJYWkYxRVVVQkFjVVZGZEJjUldiR2dvQ2lLaWdGREVTbEtNd2lDdEtVdElRSUpnWVNFVlBZL21UTnc1ODU3Yjk2Yk5Qanl6dmVkN3pGdmJzdTU5NytuM1R1RW5UbHpobHh5eWFXU29UQlhCUDQwUHA2aThPZ003Z2h1RGI0Y1hCMWNYb29jQng4RWJ3ZXZBdjh3dGpQdGNDWG5rZ3M0WjBCcmc4ZFQ0RDdnaXgxVzN3aWVDWjROOEdXNTBuVEpCWnc1MEJyaDhRYTRWeEUwbHdRZUJmNEl3SE50ZFpkS0IzRHdFejJpT2ZxQ1c0QXZBVmNDL3hnV0Z0YXhsSURHZi90dzhLdmdDa1hjL0RMd0F3QmRvcnZFaW13TnZZREhJT1ZWZDZ5ZGJjWFFEN3NKZGVUak52VFJ2U2piRHk4QlFYWERZeWY0TS9DOTRLWUN0dExVYWd5d3VlQnB4UUEycHR2QUNlaW5yUXVWSXFOcTRIb0tseSttZnVvb2ZWeFMxSTJIRnpQWVJ1T3hDTnpnUERJaEw4TGplOUcyeFVrMXdFdlJYeWNYS3k0Vk8rQUF0aWZ3ZU1uZ3E3MEN3cS9KRytVclNiQkY0REVmZkdzSmRSa0ovZ2I5WHVjdU5aZUtEWEFBVzNNOFh0TmVyd2ZmQkp1NEliZ0grQzd3bUJMK2V5ZUN1NVZ3bnd5NkJRQmREWGU1dVZSY0dtNGN1Snp5K1Fmd0xRRFkybEkwSlR2ZzhVd3BkWDhwZWRNR0xybUFLM0x0eGdHUjNzcXJrK0Q3QWJhc1VnUWJSMG1ubDNTLzBSVXVwYXRqaDFLTFdnOVJaRG5xalhIMGNKZGMyU2FQQ1dncTR0R1R0Wkxzemh3aE9nSk9BQzhNRW81dG8ybTNPU2gvTkFUZ2N0aitKakJycHJyZ0t1QlU4Ry9nYjlIbS94dzBOeERjck5DN0UwWlVwMUlIcWxYcEdvcXFFRXNaT2NsMEpEMkJEcVRHVVo2U2RmTmdHK3ZVNkY5MGZkMUhLU3dzb3VCZGR0NDBXclI5eExUeDhlOHRjcHFqZ3l6Q1pTNXVKMjhVTFJxY0R2NWRaTEhGb2k2YnRGM0I3Y0dYZ1hsQXllQk5iT3FpYm1JSWMxTlgydVFjSnB2S21XQStiYk1FN2UwSW9UMGVZeGR3Sy9KR0Jpc2FGTHZlb2J6YUNUZVE5Y2pyWlEzNEo0enhWQkVwbDJpUncxWGdtdndLL0Yvd2orQmYwRS9BUElkcERUQUFueFRUSzhhaXJ5WGdwOURnN3dhRDZJL0hwOHFySVNnMzArRWYwbC9NMHFabVJjQmZnSjlGMjd0c2FEZytoblZGWVlUYk92Wnh1cVhCS0tvYVdTL2d1NU5aaHlsKzUyamFldVFEcWdnSjN0ZHFIZFdKRG95VDVKL0pwV1c3eHo1MmU1T1haamlRUlQ4OEpwRDNpSmtaclFDUGhDdzJHY3dsSitLcm05VExBODhEajBiZEF6Ykd3Z3ZyWlhBUE1zL2hycFI1V1cyanZTaFphOE5rRTNGQ2JkQkhnc0VtL1RDWVl3UDFUT3BsaUhrL0FmV1REY2EwVDZtN0dXVmFHNVNwemNzSy9CY3lUMC93bW5zUjllY2FBZzZOOEU2MVFIWUZPOFFtNGlBMCtJazJHQjdFKzhxclBpanpsWU9kanV2MnN6a0czbGtIby8wNUZtQzdFWStRZmNmeTJDdjdYUFV0TmEwUjNCcGN0UDFKYWhrN0VHQzcxclRNZ2RRMUIrdFZiWGVaRFZtVUYxbmNaM09vdWVDL1F4WnZ5bHd1Qk45b3MrNEpjSC9VamJNWXoxQThwbXJXaXhWTkFqOXZ0TXNyZ1RVZVk4TVFwOFlQY0dpdmltd2VkOWlzZjVoZEg3U3gzZ25nOEQxYkdYUEY2ck5EckJnZVJEc1paMDFLOGJ1V2t2Y1VpQkd3MGcwMEhpZU1QMExkSERUMnVVV0hOVkdtdnNsM3AxRTNTY1lRSVlDL3c0SFFHYUFmODg0Ryt0aWt6RjJGTVNIN3RscE9EYXQxdEZXK2U3T3BKb3MxSDZhbDExMnVVK1g2dXJ1VGw5Wm9ITlBwYUJCemVwN0YySGsrb2d6Y2c2bWlOVGpIMk5KRW8yV0wzRlRpeGJvUWRYdEJqb3NOeGpNQ2o5Y2RpdTg1YWZjSmcvYXVGSzFjdlloTU96WkJPYmZxNUtCQkxEZ2VkVHZpYi83VlpqOThxUDA3QjVzTzB6ME1UdFR0aW42eWZVR1RmeHVBamJYR0RUdzVLRmhkQURkY2RnWTE2RExiQWxCTWJEN3ROV0ZWM2Y3REFHdy9rZmRJV0xUNEh1d3pQQTMrVXl2M0hzWmc1cU9GbkhqdTNHaWFJZGh5OHpMcDhNbk5sSmx6M0xSdVR2N3BBbzAzZVhrWXZiR3FNaDA2c1ZGQTdPSDZqd1RwZXFnQjJGYUpLVmNSODhFYlpGWHdRK0E5V3JtSkJtQ2JJOXF1UE9wZUpMN2NzK1M5K2VBalhrU2ZRSTQxdFVYRzZucUsxaDc3UXlOa1BpTEZ4eDRNL2tNck4xemNBeDBjWDJwZ3k1RjF3ajc3eFdFR2hQZHZXc2pyVlFPd3NWWFZXVGFtQ0hFcEpvaFY1S1BLNFBrWTA4VTJ3RlpOMW1zNUxTQTRTWHhQbGtNdEFkaEtyZnF0VW83QzBGQWJjYURQdWhxaUF1ZVlkTXoyNjJKdFVtZWovRU1tSnFVVkZaeWxsRFozay84cGZVNmFqekV5U2FRODcyaXF1djhLWmZ0bzVtUzQyT3lPajIvRlZycVJIcmx1OVZuTnhIUXEreGpGN3hwRFcvK2NVUkFrNGVESXpmVW1VL3VHb3dMcWYvL0hTRnAvNkp4U3FCMTFMUTI1d1d1OTdFbFp0aGdhcnF1SmZLdUk0NjJhTEp6VGZOcEVGbEZpR1hRMmFJN244Z0hkN0ZmcTFoZkxSalhycHFMOENLWE1LczNONExudml6SW5EZHBqT1grZ3VRUjhsYWt4Nys1U2hvVTFXZmsraGJ6bkluOEpzdURaZlBpYmJsTGlmV01CZW9UaTM3T3JNOXZDRDEwaUdzNUg0MUIrdkpWSmlmY00rTDhxZFRnNHhGcHJuMGsvWXdUZ3FuWFJsRmZUNDFyWlY2eDhJakVCNzJSelVIbDlIenFvV2dpcllKQUd0aS9RejNObTlyK01vWWY0SGo3cUxkRXpsZXBTaUdjbGIyczh5UTlzV2JscE5Idmp6YlE1YWNiWmlHUXVsdk9LdmMvUTVrUi9jV1htcE5DdmgvMHRzS1QwRFpTZTVWWE01Y0lyMXJQb3VyOEd0amd6c0lrczJMeThXN1JPZ0I5bEJqYXB5NHVsbHl3R0h6MHNXb2dYelhVYTJGaWIzbU1FTm1tUDNZOEh3UnUwT1ZBM1FuMjlEUWdHdGlEMG1BSzJBbTFuQWJZcUVuWFgreHNxTG8wWjJIbHRxbFlKci8yZVptQVRXYkNsTVV0NXhlMC9HaTVoZHg5bFN4VEtrdERZZmp3K1ZHTUxFclkyb25rUzBURmluMkJ1TTdEL2c0MkJ3OW5UdFFCUUY2MVlTSnRBVmVDaFVUWC8wMStyOXIxR3lSbkdFZTgxK3lmNWZkNlhzcklBakViUlRLOGRYaTdTQ3V2YTV4Zk13S2JJSW8wQ1QvWmthSnJFck80Mm1TTWZWVktDTFowTUFId3FTSHU4aHNacXI3dkt3bTJzUlErWG8veVNRcnB3M2JVZzJzdHFJQkRjaDdVamVKTm8wemdEYzUzTjZHc3QrbUJ6OVNMbDh5eU1lN2VOc2IwZ1ZvYVB1bmxrQi9MUkpwazhPOFNteFJEbHMxblllcTZOS0tVNmhvTU9jam5ma2YvcEVUMzBIeDNLRERhT3VTY2c2cjBseVR4dmZqUmplNEgyaXFwUVM3VFpWc055RWJJUm44NU5EYk1waTFPYXRnZzJIeXI5NG91TTJheXJSa09iU2xCRDE4UjJ3ZkdEK0dVK2Y2ZTVQT3NibEN0c3NFVDEzZmxXU2xlODU1eGplNlZmVzBhTmdlWWprM0hia2dNckJRRzZEOHhYZUxTSVZhcURBYVpvbnd0ejVhYW1SYnRXcE9kUjlPaFJha2lEaVdvZUVBQTVtWFhFc3M3eHpIMW5BWGZzbFBHNWdISWU3eWFabHAyVVlsTVd4NEpwTnkzTVRacERUeUhXalZTaWwrUjBiakRtSEN5MEUwcGdwTHdTcExDYVB5dlM1NWJOT2oxQnpzR0xUMjIyeDlwd3JRVG1lSE5aWjFHMmNpaHk4TzNIYWlUWkl5OThCMnNiVWVsUXFCZGg5WjFIMTg3SFEyazBzcngvdERvN056MW9uWno4VEFWOGdkWUdweGdxVi9CZXIwbzhzWDZ2UlZPZVVwQi9qbzNGUXVML0JEV2xKSkJUelFEOCtxNVZ4OEVZR3hpQU5VT0NKSGJXejBrQjJBcUpJbTd3QlhJY2dzWW5oMURXNktsd0xaUjdPWVRWbWk0YzBoUGtDZHBuanBBVitneG5SVTl3NVoyYmZ5NkdsSllWbU5hSmlXeE9ub2hJeXNoT3BzMUpiNjI0UU9TN1UvdHNONmQ1Ti9tZjAvWE5pdzdXM3BKekRBWmczZ0ZWcHpxUmp3c0tZTXlPR2ZKbXkxZkFSb0k1K0ZNTjVUbXFPQm04UmdVYlI3MnRnaWFnWGFISVFaTDdxc203bVlXeVFDdjNOZ3FXTzk5WGd1U0hCaXF2MG5YYmVtem5Bb2QxaTlPMk03T1ArZnRlNFJXZ25XcGExc25LOVc3aWVmazVkQ29uTitEN2hqRTl2VTd5b2ZjNW9MTHhBZ0hjSXUzemFNZzlOc2k4UkV0QVRLVUZZbW9tYVQ0cHA1WWV0akdPbHpUejhVdmwzd3Uxc3Z2SW0xT09rU3RncjROWm0rVXBZNHdGRHdUUEJMUENXYWwrYjBDY3oxRnp2LzFRcjEwUU9ZUWJCTEsrNUpjek5aWEpEWEV5TU9ZOEJodEgwYjRsLzNEd2V5WUJuNlZPMjAvSkNMU2FZcVBhMjZxYmtXMThnS1JsN1FFRmdaWFYrNS9Pa0FrODd3bnlaTk5YVFN1d21SZ0grVGN3bVpkYU1pK3FHZldybUhFK21tU3d3UTh3VzdSZ0xqOVllYzNBVUpQZzc1QTN1cTZhY0lQSi9HQitGN0hxUGlKdnFKOERSRk9DeUlINy9LZm1BbjFsQmpySlIvNkgvQTl5c0U4N3k4TjVITG1kclo3NjREemJIcnpuUWYwczBUSXFpb0NFSFJmS3hLeU5GR0hlS2Faa21HWTZqak5wanlPa281d01ZUCtKbFlFT1JFd24ycEU4UDJqZHRPekE0RXI5Nk01VXUxSUwraVRoTHNyS28rK2dlYlBwd2lIK21ZeWVTdUNBdGRJMnpCRWZidUREQjZ5MWVIUHVKQXU5aWdhT1lXcmdoeVBXcUx0WVdZeThPUG1FeXhBQndYWUJ5OVhTbmg1cG5LS0c1UG5RTmVweXp1dEZwUXducUx2Zy9Uc1NETWtSWURHdzlVT3hISm1jWlVNT2I0czJ2bEkrczVuN0UvcmdzNUo4dEpGVFpSd1ZZMlhBdVVIOXZPd3pHR3VxUndZOUR4V3YwQll0QzI2NHNCRVYxODhVTkpGZDBTNnhMY2Vtd3dtakw3RzRmeDRmWDdDajJiNHRrSGh5TmFXZFRxUktGYy85aGt5VDZqMG9icWNORFplam1hUFlGcm8ybVVyZi8vRVU3VW41aG1UbnUyQklGdlFBMmJoOHJnYWJkNDlUWUJKYnAyRW1sNDdaRlZoTzNtc3RQdW9vYkVVc3dERW1KaWVmbUZJVDdEemZVNE8wZDRpOGlmdzhHM0xJaGh6WU4xMUY1Nkt2dk9uZksyeEYwMUgvSFZJZFd6bmE4aWo1bnpVNzM0bWQyWGJxdFJRVGVzVnB3NzhsK2QycW9Pakl1dFN3cXZrdnBvV0pkWnVXbGVUMy9xWjZFMkJHVHFFTmlXLzZnZ2VMNlFJanlKZDl1VzRHVVVaVFJVL2VFeVF6VE5vN0p1QnlrdlJtTFhRdjZ1YWFtSHg5eWZxOHBVNGJaTzBjY2lDSEhlSnkyWTBMNUlzL084ejNJbHhyOEYySnFrd25aM21ja2lZK1pjSUo3NVlZODFZYjVUK213SU8xbHJUdTRNU0MrMnNxdGEwLzByUjhCVStVK0hESE5PQytTMXYrbk8zNytQeUYrZ094a1BOU01jdFltNWpsenpKazdUVFY3NEVadE1kdGRCWHRZR2JSc0t6WXZ1K0M4bzlZaGZFWmlPQW5CUkNMeWYrRWgwbzdSVE8zbFJOVFR1WEE5YThSeTIrdkJkQVd5UG9jNTJkU1d3UW1QS0x5T1NwVmd3Si9qaUZPQk9hakJPVXc2YzNLKzJYQkxqZWlUcXBpK3pPWVhqVW9saTNCSGQ1bHRxTE5mQ2VDa3Q4MFdlR2tUcDhyNTFLTFdQL013OHgxTjlEaHRNQWM2WUJXY1hSNTlUc29mdGZ6dE9iQVJLUG12Z2JZZ29hVElRdGVnTDZyTituNE8rZmJHYXZjbjFOUGl4eEEzV1UyNjliVzVuS2QxYTEraWNCeHFOMTM0NXNUd1h5VzA4bnBGcjNOdXRKbUxmSDlPQm0vVnJSaEtPMVZrWFhZUU5ZdSsvbmJncDFpUXIxQmlyOTYxT3Bjc1pSdkpsSFJtbUlkc3NaY2IzUzUxUkp3SlJ4MVZBRm5lTXUyS0FpZ20rd2tnRkk5c2drOTF2YjNnaXMxUHRxVHZKVG1KQVFlekwrL2RYekJWWjR2dGc2aWJVYytOUElWcmdiZ2pwQkxaWnJLR3VBaXhQRzIvVk41WFJxL1JjMXErZDM2b2MrMzlDc0lyS2pFMTIrU016ZFFUcUQ3emJ0ZUI0QnR2YnZjWENwVGdCUFFjZWlXYzBVbDhXT3dETFplQU50U2Q2bTVSRlFDLzdmQStVWlkvQm1pNFQ0cjVxN1kzK3prZ3MybE1nMDRBUjJmcitTTG5ueUR1RGgrTDVOelRLM1J6MXAzaWJsVXBrMUtBeFBUL2YvaFhDcHpnT1BRcSs4bkZ2YXF2NmxSZ3NCei93ZFVsOG9HNE00bmN2K1BiNWVLay80dndBRGFGS0owRTVWcDN3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7cG9zdFJlZHVjZXJ9IGZyb20gXCIuL3Bvc3RSZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgcG9zdDogcG9zdFJlZHVjZXJcclxufSk7IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgcG9zdHM6IFtdLFxyXG4gICAgcG9zdDp7fSxcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZXJyb3I6IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIHR5cGVzLkdFVF9QT1NUUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcG9zdHM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5cclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcbiIsImV4cG9ydCBjb25zdCBHRVRfUE9TVFMgPSAnR0VUX1BPU1RTJzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ndG0tbW9kdWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9
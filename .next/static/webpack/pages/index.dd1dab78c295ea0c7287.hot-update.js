webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ApvForm.js":
/*!*******************************!*\
  !*** ./components/ApvForm.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _WizardComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WizardComponent */ "./components/WizardComponent.js");
/* harmony import */ var _utils_validationSchemaWizard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/validationSchemaWizard */ "./utils/validationSchemaWizard.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_inputMask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/inputMask */ "./utils/inputMask.js");
/* harmony import */ var _utils_cleanInputMask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/cleanInputMask */ "./utils/cleanInputMask.js");




var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var APVForm = function APVForm(props) {
  _s();

  var aacento = "\xE1";
  var eacento = "\xE9";
  var iacento = "\xED";
  var oacento = "\xF3";
  var uacento = "\xFA";
  var enhe = "\xF1";
  var interrogacion = "\xBF";
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var initialValues = {
    nombre: '',
    rut: '',
    correo: '',
    celular: '',
    sueldo: '',
    ahorro: '',
    afp: '',
    terminosycondiciones: false,
    retiro10: 'false'
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    className: "wizardForm",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])(_WizardComponent__WEBPACK_IMPORTED_MODULE_4__["Wizard"], {
      initialValues: initialValues,
      onSubmit: function onSubmit(values) {
        console.log(values);
        /*
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${props.token}`
        };
          const url = `${props.urlPostSimulacion}`;
          const body = {
            nombre: values.nombre,
            rut: cleanRut(values.rut),
            correo: values.correo,
            celular: cleanDigitos(values.celular),
            sueldo: cleanDigitos(values.sueldo),
            ahorro: cleanDigitos(values.ahorro)
        };
          axios
            .post(url, body, { headers: headers })
            .then((response) => {
                let data = response.data;
                    if (data.idSimulacion) {
                    router.push({
                        pathname: "/resultado",
                        query: {
                            id: data.idSimulacion,
                        },
                    });
                }
            })
            .catch(e => {
                console.log(e);
            });
          */
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])(_WizardComponent__WEBPACK_IMPORTED_MODULE_4__["WizardStep"], {
        onSubmit: function onSubmit() {
          return console.log('Step1 onSubmit');
        },
        validationSchema: _utils_validationSchemaWizard__WEBPACK_IMPORTED_MODULE_5__["Step1Schema"],
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          name: "nombre",
          children: function children(_ref) {
            var field = _ref.field,
                meta = _ref.meta;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
              className: "form-group input-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("label", {
                htmlFor: "nombre",
                className: "control-label",
                children: "Nombre"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", _objectSpread(_objectSpread({}, field), {}, {
                type: "text",
                className: "form-control form-control-lg \n                                        ".concat(meta.touched ? meta.error ? "is-invalid" : "is-valid" : ""),
                id: "nombre",
                "aria-describedby": "nombreAyuda",
                placeholder: "Nombre"
              })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("small", {
                id: "nombreAyuda",
                className: "form-text ".concat(meta.touched && meta.error ? "is-invalid" : ""),
                children: meta.touched && meta.error ? meta.error : "Indicanos tu nombre y apellido."
              })]
            });
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          name: "rut",
          children: function children(_ref2) {
            var field = _ref2.field,
                meta = _ref2.meta;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
              className: "form-group input-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("label", {
                htmlFor: "rut",
                className: "control-label",
                children: "RUT"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_text_mask__WEBPACK_IMPORTED_MODULE_8___default.a, _objectSpread(_objectSpread({}, field), {}, {
                type: "text",
                mask: _utils_inputMask__WEBPACK_IMPORTED_MODULE_9__["rutMask"],
                className: "form-control form-control-lg \n                                    ".concat(meta.touched ? meta.error ? "is-invalid" : "is-valid" : ""),
                id: "rut",
                "aria-describedby": "rutAyuda",
                placeholder: "RUT"
              })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("small", {
                id: "rutAyuda",
                className: "form-text ".concat(meta.touched && meta.error ? "is-invalid" : ""),
                children: meta.touched && meta.error ? meta.error : "Ej. 12.345.678-9."
              })]
            });
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          name: "correo",
          children: function children(_ref3) {
            var field = _ref3.field,
                meta = _ref3.meta;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
              className: "form-group input-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("label", {
                htmlFor: "correo",
                className: "control-label",
                children: "Correo"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", _objectSpread(_objectSpread({}, field), {}, {
                type: "email",
                className: "form-control form-control-lg \n                                        ".concat(meta.touched ? meta.error ? "is-invalid" : "is-valid" : ""),
                id: "correo",
                "aria-describedby": "correoAyuda",
                placeholder: "Correo"
              })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("small", {
                id: "correoAyuda",
                className: "form-text ".concat(meta.touched && meta.error ? "is-invalid" : ""),
                children: meta.touched && meta.error ? meta.error : "Ej. aumentatusueldo@afpmodelo.cl"
              })]
            });
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          name: "celular",
          children: function children(_ref4) {
            var field = _ref4.field,
                meta = _ref4.meta;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
              className: "form-group input-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("label", {
                htmlFor: "celular",
                className: "control-label",
                children: "Celular"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_text_mask__WEBPACK_IMPORTED_MODULE_8___default.a, _objectSpread(_objectSpread({}, field), {}, {
                type: "text",
                mask: _utils_inputMask__WEBPACK_IMPORTED_MODULE_9__["celularMask"],
                className: "form-control form-control-lg \n                                    ".concat(meta.touched ? meta.error ? "is-invalid" : "is-valid" : ""),
                id: "celular",
                "aria-describedby": "celularAyuda",
                placeholder: "9 ____ ____"
              })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("small", {
                id: "celularAyuda",
                className: "form-text ".concat(meta.touched && meta.error ? "is-invalid" : ""),
                children: meta.touched && meta.error ? meta.error : "Ej. 9 1112 23XX"
              })]
            });
          }
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])(_WizardComponent__WEBPACK_IMPORTED_MODULE_4__["WizardStep"], {
        onSubmit: function onSubmit() {
          return console.log('Step2 onSubmit');
        },
        validationSchema: _utils_validationSchemaWizard__WEBPACK_IMPORTED_MODULE_5__["Step2Schema"],
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          name: "sueldo",
          children: function children(_ref5) {
            var field = _ref5.field,
                meta = _ref5.meta;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
              className: "form-group input-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("label", {
                htmlFor: "sueldo",
                className: "control-label",
                children: "sueldo"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_text_mask__WEBPACK_IMPORTED_MODULE_8___default.a, _objectSpread(_objectSpread({}, field), {}, {
                type: "text",
                mask: _utils_inputMask__WEBPACK_IMPORTED_MODULE_9__["dineroMask"],
                className: "form-control form-control-lg \n                                    ".concat(meta.touched ? meta.error ? "is-invalid" : "is-valid" : ""),
                id: "sueldo",
                "aria-describedby": "sueldoAyuda",
                placeholder: "Sueldo L".concat(iacento, "quido")
              })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("small", {
                id: "sueldoAyuda",
                className: "form-text ".concat(meta.touched && meta.error ? "is-invalid" : ""),
                children: meta.touched && meta.error ? meta.error : "El sueldo l".concat(iacento, "quido que recibes luego de los descuentos legales.")
              })]
            });
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          name: "ahorro",
          children: function children(_ref6) {
            var field = _ref6.field,
                meta = _ref6.meta;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
              className: "form-group input-wrapper",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("label", {
                htmlFor: "ahorro",
                className: "control-label",
                children: "Monto Ahorro"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_text_mask__WEBPACK_IMPORTED_MODULE_8___default.a, _objectSpread(_objectSpread({}, field), {}, {
                type: "text",
                mask: _utils_inputMask__WEBPACK_IMPORTED_MODULE_9__["dineroMask"],
                className: "form-control form-control-lg \n                                    ".concat(meta.touched ? meta.error ? "is-invalid" : "is-valid" : ""),
                id: "ahorro",
                "aria-describedby": "ahorroAyuda",
                placeholder: "Ahorro Mensual"
              })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("small", {
                id: "ahorroAyuda",
                className: "form-text ".concat(meta.touched && meta.error ? "is-invalid" : ""),
                children: meta.touched && meta.error ? meta.error : "El monto en pesos que invertir".concat(iacento, "as en tu APV.")
              })]
            });
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          name: "afp",
          children: function children(_ref7) {
            var field = _ref7.field,
                meta = _ref7.meta;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
              className: "form-group input-wrapper select",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("label", {
                htmlFor: "afp",
                children: ["Ind", iacento, "canos tu AFP actual:"]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("select", _objectSpread(_objectSpread({}, field), {}, {
                className: "form-control form-control-lg",
                id: "afp",
                name: "afp",
                children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
                  value: "default",
                  children: "Seleccione una AFP"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
                  value: "0",
                  children: "AFP Capital"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
                  value: "1",
                  children: "AFP Cuprum"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
                  value: "2",
                  children: "AFP Habitat"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
                  value: "3",
                  children: "AFP Plan Vital"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
                  value: "4",
                  children: "AFP Provida"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
                  value: "6",
                  children: "AFP Uno"
                })]
              })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("small", {
                id: "ahorroAyuda",
                className: "form-text ".concat(meta.touched && meta.error ? "is-invalid" : ""),
                children: meta.touched && meta.error
              })]
            });
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          name: "multifondo",
          children: function children(_ref8) {
            var field = _ref8.field,
                meta = _ref8.meta;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("div", {
              className: "form-group input-wrapper select",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("label", {
                htmlFor: "multifondo",
                children: ["Ind", iacento, "canos tu Multifondo actual:"]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxs"])("select", _objectSpread(_objectSpread({}, field), {}, {
                className: "form-control form-control-lg",
                id: "multifondo",
                name: "multifondo",
                children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
                  value: "default",
                  children: "Seleccione un Multi Fondo"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
                  value: "0",
                  children: "A"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
                  value: "1",
                  children: "B"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
                  value: "2",
                  children: "C"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
                  value: "3",
                  children: "D"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("option", {
                  value: "4",
                  children: "E"
                })]
              })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("small", {
                id: "multifondoAyuda",
                className: "form-text \n                                        ".concat(meta.touched && meta.error ? "is-invalid" : ""),
                children: meta.touched && meta.error
              })]
            });
          }
        })]
      })]
    })
  });
};

_s(APVForm, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = APVForm;
/* harmony default export */ __webpack_exports__["default"] = (APVForm);

var _c;

$RefreshReg$(_c, "APVForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/WizardComponent.js":
/*!***************************************!*\
  !*** ./components/WizardComponent.js ***!
  \***************************************/
/*! exports provided: sleep, Wizard, WizardStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wizard", function() { return Wizard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStep", function() { return WizardStep; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _public_assets_svg_joven2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/assets/svg/joven2.svg */ "./public/assets/svg/joven2.svg");
/* harmony import */ var _public_assets_svg_joven2_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_svg_joven2_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_stepper_horizontal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-stepper-horizontal */ "./node_modules/react-stepper-horizontal/lib/index.js");
/* harmony import */ var react_stepper_horizontal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_stepper_horizontal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _TerminosModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TerminosModal */ "./components/TerminosModal.js");







var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};
var Wizard = function Wizard(_ref) {
  _s();

  var _children = _ref.children,
      initialValues = _ref.initialValues,
      onSubmit = _ref.onSubmit;
  var aacento = "\xE1";
  var eacento = "\xE9";
  var iacento = "\xED";
  var oacento = "\xF3";
  var uacento = "\xFA";
  var enhe = "\xF1";
  var interrogacion = "\xBF";
  var comillaIzquierda = "\u201C";
  var comillaDerecha = "\u201D";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      modalShow = _useState[0],
      setModalShow = _useState[1];

  var handleClose = function handleClose() {
    return setModalShow(false);
  };

  var handleShow = function handleShow() {
    return setModalShow(true);
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      stepNumber = _useState2[0],
      setStepNumber = _useState2[1];

  var steps = react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.toArray(_children);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialValues),
      snapshot = _useState3[0],
      setSnapshot = _useState3[1];

  var step = steps[stepNumber];
  var totalSteps = steps.length;
  var isLastStep = stepNumber === totalSteps - 1;

  var next = function next(values) {
    setSnapshot(values);
    setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(values, bag) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!step.props.onSubmit) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return step.props.onSubmit(values, bag);

            case 3:
              if (!isLastStep) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", onSubmit(values, bag));

            case 7:
              bag.setTouched({});
              next(values);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    className: "row",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      className: "col-sm-12 col-md-10 bloque form",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
        className: "card formulario",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_stepper_horizontal__WEBPACK_IMPORTED_MODULE_7___default.a, {
            steps: [{
              title: ''
            }, {
              title: ''
            }],
            activeStep: stepNumber,
            activeColor: "#72B500",
            completeColor: "#72B500"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
          className: "card-body",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("p", {
            children: ["Conoce cu", aacento, "l es la Afp que hace crecer tus ahorros:"]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
            initialValues: snapshot,
            onSubmit: handleSubmit,
            validationSchema: step.props.validationSchema,
            children: function children(formik) {
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
                children: [step, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
                  className: "d-flex justify-content-center flex-column",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
                    children: " Indicanos si retiraste el 10%"
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
                    name: "retiro10",
                    children: function children(_ref3) {
                      var field = _ref3.field,
                          meta = _ref3.meta;
                      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
                        className: "form-group input-wrapper",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
                          className: "form-check form-check-inline",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", _objectSpread(_objectSpread({}, field), {}, {
                            className: "form-check-input",
                            type: "radio",
                            name: "retiro10",
                            id: "inlineRadio1",
                            value: "true"
                          })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
                            className: "form-check-label",
                            htmlFor: "inlineRadio1",
                            children: "Si"
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
                          className: "form-check form-check-inline",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", _objectSpread(_objectSpread({}, field), {}, {
                            className: "form-check-input",
                            type: "radio",
                            name: "retiro10",
                            id: "inlineRadio2",
                            value: "false"
                          })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
                            className: "form-check-label",
                            htmlFor: "inlineRadio2",
                            children: "No"
                          })]
                        })]
                      });
                    }
                  }), console.log(formik.values), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
                    className: "form-check",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
                      name: "terminosycondiciones",
                      children: function children(_ref4) {
                        var field = _ref4.field,
                            _ref4$form = _ref4.form,
                            touched = _ref4$form.touched,
                            errors = _ref4$form.errors;
                        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("label", {
                            className: "form-check-label mt-auto",
                            htmlFor: "terminosycondiciones",
                            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", _objectSpread(_objectSpread({}, field), {}, {
                              type: "checkbox",
                              className: "form-check-input"
                            })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("small", {
                              className: "terminosycondiciones",
                              children: ["Acepto las", " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("a", {
                                onClick: handleShow,
                                className: "modal-wizard",
                                children: ["condiciones del servicio y la pol", iacento, "tica de privacidad."]
                              })]
                            })]
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("small", {
                            id: "terminosAyuda",
                            className: "form-text ".concat(touched.terminosycondiciones && errors.terminosycondiciones ? 'is-invalid' : ''),
                            children: touched.terminosycondiciones && errors.terminosycondiciones ? errors.terminosycondiciones : ""
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_TerminosModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            show: modalShow,
                            onHide: handleClose
                          })]
                        });
                      }
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
                    className: "col justify-content-center d-flex",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
                      type: "submit",
                      id: stepNumber > 0 ? 'P2_lead' : 'P1_ingreso_datos_personales',
                      className: "btn btn-lg btn-block purple",
                      disabled: !(formik.isValid && formik.dirty),
                      children: stepNumber > 0 ? 'Calcular' : 'Comenzar'
                    })
                  })]
                })]
              });
            }
          })]
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      className: "col-md-2 desktop",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
        src: _public_assets_svg_joven2_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "joven modelo"
      })
    })]
  });
};

_s(Wizard, "duFVL1Yc+0IfcTXu9R7fx2EzF0M=");

_c = Wizard;
var WizardStep = function WizardStep(_ref5) {
  var children = _ref5.children;
  return children;
};
_c2 = WizardStep;

var _c, _c2;

$RefreshReg$(_c, "Wizard");
$RefreshReg$(_c2, "WizardStep");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHZGb3JtLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dpemFyZENvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJBUFZGb3JtIiwicHJvcHMiLCJhYWNlbnRvIiwiZWFjZW50byIsImlhY2VudG8iLCJvYWNlbnRvIiwidWFjZW50byIsImVuaGUiLCJpbnRlcnJvZ2FjaW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwiaW5pdGlhbFZhbHVlcyIsIm5vbWJyZSIsInJ1dCIsImNvcnJlbyIsImNlbHVsYXIiLCJzdWVsZG8iLCJhaG9ycm8iLCJhZnAiLCJ0ZXJtaW5vc3ljb25kaWNpb25lcyIsInJldGlybzEwIiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsIlN0ZXAxU2NoZW1hIiwiZmllbGQiLCJtZXRhIiwidG91Y2hlZCIsImVycm9yIiwicnV0TWFzayIsImNlbHVsYXJNYXNrIiwiU3RlcDJTY2hlbWEiLCJkaW5lcm9NYXNrIiwic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIldpemFyZCIsImNoaWxkcmVuIiwib25TdWJtaXQiLCJjb21pbGxhSXpxdWllcmRhIiwiY29taWxsYURlcmVjaGEiLCJ1c2VTdGF0ZSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hvdyIsInN0ZXBOdW1iZXIiLCJzZXRTdGVwTnVtYmVyIiwic3RlcHMiLCJSZWFjdCIsIkNoaWxkcmVuIiwidG9BcnJheSIsInNuYXBzaG90Iiwic2V0U25hcHNob3QiLCJzdGVwIiwidG90YWxTdGVwcyIsImxlbmd0aCIsImlzTGFzdFN0ZXAiLCJuZXh0IiwiTWF0aCIsIm1pbiIsImhhbmRsZVN1Ym1pdCIsImJhZyIsInNldFRvdWNoZWQiLCJ0aXRsZSIsInZhbGlkYXRpb25TY2hlbWEiLCJmb3JtaWsiLCJmb3JtIiwiZXJyb3JzIiwiaXNWYWxpZCIsImRpcnR5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O0FBQUssNkJBQVMsRUFBQyxtQ0FBZjtBQUFBLDJDQUNJO0FBQ0ksMEJBQUksRUFBQyxRQURUO0FBRUksd0JBQUUsRUFBRUUsVUFBVSxHQUFHLENBQWIsR0FBaUIsU0FBakIsR0FBNkIsNkJBRnJDO0FBR0ksK0JBQVMsRUFBQyw2QkFIZDtBQUlJLDhCQUFRLEVBQUUsRUFBRW9CLE1BQU0sQ0FBQ0csT0FBUCxJQUFrQkgsTUFBTSxDQUFDSSxLQUEzQixDQUpkO0FBQUEsZ0NBTUt4QixVQUFVLEdBQUcsQ0FBYixHQUFpQixVQUFqQixHQUE4QjtBQU5uQztBQURKLG9CQXRGSjtBQUFBLGtCQUZKO0FBQUEsZ0JBRkg7QUFBQTtBQUxMLFlBRko7QUFBQSxVQVRKO0FBQUE7QUFESixNQURKLGVBOEhJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsNkJBQ0s7QUFBSyxXQUFHLEVBQUV5QixvRUFBVjtBQUFrQixXQUFHLEVBQUM7QUFBdEI7QUFETCxNQTlISjtBQUFBLElBREo7QUFvSUgsQ0FoTE07O0dBQU1uQyxNOztLQUFBQSxNO0FBa0xOLElBQU1vQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUduQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFrQkEsUUFBbEI7QUFBQSxDQUFuQjtNQUFNbUMsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZDFkYWI3OGMyOTVlYTBjNzI4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZpZWxkfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7IFdpemFyZCwgV2l6YXJkU3RlcCB9IGZyb20gXCIuL1dpemFyZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTdGVwMVNjaGVtYSwgU3RlcDJTY2hlbWF9IGZyb20gXCIuLi91dGlscy92YWxpZGF0aW9uU2NoZW1hV2l6YXJkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IE1hc2tlZElucHV0IGZyb20gXCJyZWFjdC10ZXh0LW1hc2tcIjtcclxuaW1wb3J0IHsgY2VsdWxhck1hc2ssIGRpbmVyb01hc2ssIHJ1dE1hc2sgfSBmcm9tIFwiLi4vdXRpbHMvaW5wdXRNYXNrXCJcclxuaW1wb3J0IHsgY2xlYW5EaWdpdG9zLCBjbGVhblJ1dCB9IGZyb20gXCIuLi91dGlscy9jbGVhbklucHV0TWFza1wiXHJcblxyXG5jb25zdCBBUFZGb3JtID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgYWFjZW50byA9IFwiXFx1MDBlMVwiO1xyXG4gICAgY29uc3QgZWFjZW50byA9IFwiXFx1MDBlOVwiO1xyXG4gICAgY29uc3QgaWFjZW50byA9IFwiXFx1MDBlZFwiO1xyXG4gICAgY29uc3Qgb2FjZW50byA9IFwiXFx1MDBmM1wiO1xyXG4gICAgY29uc3QgdWFjZW50byA9IFwiXFx1MDBmYVwiO1xyXG4gICAgY29uc3QgZW5oZSA9ICdcXHUwMGYxJztcclxuICAgIGNvbnN0IGludGVycm9nYWNpb24gPSAnXFx1MDBCRic7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gICAgICAgIG5vbWJyZTogJycsXHJcbiAgICAgICAgcnV0OiAnJyxcclxuICAgICAgICBjb3JyZW86ICcnLFxyXG4gICAgICAgIGNlbHVsYXI6ICcnLFxyXG4gICAgICAgIHN1ZWxkbzogJycsXHJcbiAgICAgICAgYWhvcnJvOiAnJyxcclxuICAgICAgICBhZnA6JycsXHJcbiAgICAgICAgdGVybWlub3N5Y29uZGljaW9uZXM6IGZhbHNlLFxyXG4gICAgICAgIHJldGlybzEwOiAnZmFsc2UnXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dpemFyZEZvcm0nPlxyXG4gICAgICAgICAgICA8V2l6YXJkXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e3ZhbHVlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogYEJlYXJlciAke3Byb3BzLnRva2VufWBcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm9wcy51cmxQb3N0U2ltdWxhY2lvbn1gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmU6IHZhbHVlcy5ub21icmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1dDogY2xlYW5SdXQodmFsdWVzLnJ1dCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlbzogdmFsdWVzLmNvcnJlbyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsdWxhcjogY2xlYW5EaWdpdG9zKHZhbHVlcy5jZWx1bGFyKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VlbGRvOiBjbGVhbkRpZ2l0b3ModmFsdWVzLnN1ZWxkbyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFob3JybzogY2xlYW5EaWdpdG9zKHZhbHVlcy5haG9ycm8pXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBvc3QodXJsLCBib2R5LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmlkU2ltdWxhY2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3Jlc3VsdGFkb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGRhdGEuaWRTaW11bGFjaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8V2l6YXJkU3RlcFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoKSA9PiBjb25zb2xlLmxvZygnU3RlcDEgb25TdWJtaXQnKX1cclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtTdGVwMVNjaGVtYX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb21icmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21ldGEudG91Y2hlZCA/IChtZXRhLmVycm9yID8gXCJpcy1pbnZhbGlkXCIgOiBcImlzLXZhbGlkXCIpIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJub21icmVBeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5vbWJyZUF5dWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS10ZXh0ICR7bWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3IgPyBcImlzLWludmFsaWRcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1ldGEuZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJJbmRpY2Fub3MgdHUgbm9tYnJlIHkgYXBlbGxpZG8uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJydXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInJ1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUlVUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFza2VkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s9e3J1dE1hc2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWV0YS50b3VjaGVkID8gKG1ldGEuZXJyb3IgPyBcImlzLWludmFsaWRcIiA6IFwiaXMtdmFsaWRcIikgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicnV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInJ1dEF5dWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSVVRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicnV0QXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLXRleHQgJHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvciA/IFwiaXMtaW52YWxpZFwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1ldGEuZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJFai4gMTIuMzQ1LjY3OC05LlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiY29ycmVvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJjb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcnJlb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWV0YS50b3VjaGVkID8gKG1ldGEuZXJyb3IgPyBcImlzLWludmFsaWRcIiA6IFwiaXMtdmFsaWRcIikgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29ycmVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImNvcnJlb0F5dWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3JyZW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29ycmVvQXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLXRleHQgJHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvciA/IFwiaXMtaW52YWxpZFwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1ldGEuZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJFai4gYXVtZW50YXR1c3VlbGRvQGFmcG1vZGVsby5jbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiY2VsdWxhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY2VsdWxhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2VsdWxhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hc2tlZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrPXtjZWx1bGFyTWFza31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHttZXRhLnRvdWNoZWQgPyAobWV0YS5lcnJvciA/IFwiaXMtaW52YWxpZFwiIDogXCJpcy12YWxpZFwiKSA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjZWx1bGFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImNlbHVsYXJBeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgOSBfX19fIF9fX19gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2VsdWxhckF5dWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS10ZXh0ICR7bWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3IgPyBcImlzLWludmFsaWRcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtZXRhLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiRWouIDkgMTExMiAyM1hYXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9XaXphcmRTdGVwPlxyXG4gICAgICAgICAgICAgICAgPFdpemFyZFN0ZXBcclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KCkgPT4gY29uc29sZS5sb2coJ1N0ZXAyIG9uU3VibWl0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17U3RlcDJTY2hlbWF9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJzdWVsZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInN1ZWxkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjb250cm9sLWxhYmVsXCJ9PnN1ZWxkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hc2tlZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrPXtkaW5lcm9NYXNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21ldGEudG91Y2hlZCA/IChtZXRhLmVycm9yID8gXCJpcy1pbnZhbGlkXCIgOiBcImlzLXZhbGlkXCIpIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN1ZWxkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzdWVsZG9BeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgU3VlbGRvIEwke2lhY2VudG99cXVpZG9gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3VlbGRvQXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLXRleHQgJHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvciA/IFwiaXMtaW52YWxpZFwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1ldGEuZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYEVsIHN1ZWxkbyBsJHtpYWNlbnRvfXF1aWRvIHF1ZSByZWNpYmVzIGx1ZWdvIGRlIGxvcyBkZXNjdWVudG9zIGxlZ2FsZXMuYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJhaG9ycm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImFob3Jyb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9udG8gQWhvcnJvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFza2VkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s9e2RpbmVyb01hc2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWV0YS50b3VjaGVkID8gKG1ldGEuZXJyb3IgPyBcImlzLWludmFsaWRcIiA6IFwiaXMtdmFsaWRcIikgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWhvcnJvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImFob3Jyb0F5dWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBaG9ycm8gTWVuc3VhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhaG9ycm9BeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tdGV4dCAke21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yID8gXCJpcy1pbnZhbGlkXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbWV0YS5lcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgRWwgbW9udG8gZW4gcGVzb3MgcXVlIGludmVydGlyJHtpYWNlbnRvfWFzIGVuIHR1IEFQVi5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJhZnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LXdyYXBwZXIgc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5ke2lhY2VudG99Y2Fub3MgdHUgQUZQIGFjdHVhbDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhZnBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWZwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjY2lvbmUgdW5hIEFGUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj5BRlAgQ2FwaXRhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkFGUCBDdXBydW08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5BRlAgSGFiaXRhdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPkFGUCBQbGFuIFZpdGFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+QUZQIFByb3ZpZGE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjZcIj5BRlAgVW5vPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWhvcnJvQXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLXRleHQgJHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvciA/IFwiaXMtaW52YWxpZFwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cIm11bHRpZm9uZG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LXdyYXBwZXIgc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtdWx0aWZvbmRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZHtpYWNlbnRvfWNhbm9zIHR1IE11bHRpZm9uZG8gYWN0dWFsOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm11bHRpZm9uZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibXVsdGlmb25kb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY2Npb25lIHVuIE11bHRpIEZvbmRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPkE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5CPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Qzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPkQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5FPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibXVsdGlmb25kb0F5dWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS10ZXh0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvciA/IFwiaXMtaW52YWxpZFwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1dpemFyZFN0ZXA+XHJcbiAgICAgICAgICAgIDwvV2l6YXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFQVkZvcm07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGb3JtaWssIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgam92ZW4yIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL3N2Zy9qb3ZlbjIuc3ZnXCJcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSAncmVhY3Qtc3RlcHBlci1ob3Jpem9udGFsJztcclxuaW1wb3J0IFRlcm1pbm9zTW9kYWwgZnJvbSBcIi4vVGVybWlub3NNb2RhbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsZWVwID0gbXMgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFdpemFyZCA9ICh7IGNoaWxkcmVuLCBpbml0aWFsVmFsdWVzLCBvblN1Ym1pdCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgYWFjZW50byA9IFwiXFx1MDBlMVwiO1xyXG4gICAgY29uc3QgZWFjZW50byA9IFwiXFx1MDBlOVwiO1xyXG4gICAgY29uc3QgaWFjZW50byA9IFwiXFx1MDBlZFwiO1xyXG4gICAgY29uc3Qgb2FjZW50byA9IFwiXFx1MDBmM1wiO1xyXG4gICAgY29uc3QgdWFjZW50byA9IFwiXFx1MDBmYVwiO1xyXG4gICAgY29uc3QgZW5oZSA9ICdcXHUwMGYxJztcclxuICAgIGNvbnN0IGludGVycm9nYWNpb24gPSAnXFx1MDBCRic7XHJcbiAgICBjb25zdCBjb21pbGxhSXpxdWllcmRhID0gJ1xcdTIwMUMnO1xyXG4gICAgY29uc3QgY29taWxsYURlcmVjaGEgPSAnXFx1MjAxRCc7XHJcblxyXG4gICAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0TW9kYWxTaG93KGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZVNob3cgPSAoKSA9PiBzZXRNb2RhbFNob3codHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgW3N0ZXBOdW1iZXIsIHNldFN0ZXBOdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBzdGVwcyA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xyXG4gICAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWVzKTtcclxuXHJcbiAgICBjb25zdCBzdGVwID0gc3RlcHNbc3RlcE51bWJlcl07XHJcbiAgICBjb25zdCB0b3RhbFN0ZXBzID0gc3RlcHMubGVuZ3RoO1xyXG4gICAgY29uc3QgaXNMYXN0U3RlcCA9IHN0ZXBOdW1iZXIgPT09IHRvdGFsU3RlcHMgLSAxO1xyXG5cclxuICAgIGNvbnN0IG5leHQgPSB2YWx1ZXMgPT4ge1xyXG4gICAgICAgIHNldFNuYXBzaG90KHZhbHVlcyk7XHJcbiAgICAgICAgc2V0U3RlcE51bWJlcihNYXRoLm1pbihzdGVwTnVtYmVyICsgMSwgdG90YWxTdGVwcyAtIDEpKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMsIGJhZykgPT4ge1xyXG4gICAgICAgIGlmIChzdGVwLnByb3BzLm9uU3VibWl0KSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHN0ZXAucHJvcHMub25TdWJtaXQodmFsdWVzLCBiYWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNMYXN0U3RlcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gb25TdWJtaXQodmFsdWVzLCBiYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJhZy5zZXRUb3VjaGVkKHt9KTtcclxuICAgICAgICAgICAgbmV4dCh2YWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC0xMCBibG9xdWUgZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGZvcm11bGFyaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RlcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcHM9e1t7IHRpdGxlOiAnJyB9LCB7IHRpdGxlOiAnJyB9ICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3RlcD17c3RlcE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNvbG9yPXtcIiM3MkI1MDBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlQ29sb3I9e1wiIzcyQjUwMFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbm9jZSBjdXthYWNlbnRvfWwgZXMgbGEgQWZwIHF1ZSBoYWNlIGNyZWNlciB0dXMgYWhvcnJvczo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3NuYXBzaG90fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3N0ZXAucHJvcHMudmFsaWRhdGlvblNjaGVtYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhmb3JtaWspID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gSW5kaWNhbm9zIHNpIHJldGlyYXN0ZSBlbCAxMCU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInJldGlybzEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXRpcm8xMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW5saW5lUmFkaW8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImlubGluZVJhZGlvMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmV0aXJvMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlubGluZVJhZGlvMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiaW5saW5lUmFkaW8yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Tm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhmb3JtaWsudmFsdWVzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwidGVybWlub3N5Y29uZGljaW9uZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtOiB7IHRvdWNoZWQsIGVycm9ycyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgbXQtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ0ZXJtaW5vc3ljb25kaWNpb25lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRlcm1pbm9zeWNvbmRpY2lvbmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2VwdG8gbGFze1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLXdpemFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGljaW9uZXMgZGVsIHNlcnZpY2lvIHkgbGEgcG9se2lhY2VudG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGljYSBkZSBwcml2YWNpZGFkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGVybWlub3NBeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZm9ybS10ZXh0ICR7dG91Y2hlZC50ZXJtaW5vc3ljb25kaWNpb25lcyAmJiBlcnJvcnMudGVybWlub3N5Y29uZGljaW9uZXMgPyAnaXMtaW52YWxpZCcgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdWNoZWQudGVybWlub3N5Y29uZGljaW9uZXMgJiYgZXJyb3JzLnRlcm1pbm9zeWNvbmRpY2lvbmVzID8gZXJyb3JzLnRlcm1pbm9zeWNvbmRpY2lvbmVzIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXJtaW5vc01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wganVzdGlmeS1jb250ZW50LWNlbnRlciBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17c3RlcE51bWJlciA+IDAgPyAnUDJfbGVhZCcgOiAnUDFfaW5ncmVzb19kYXRvc19wZXJzb25hbGVzJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLWJsb2NrIHB1cnBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshKGZvcm1pay5pc1ZhbGlkICYmIGZvcm1pay5kaXJ0eSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcE51bWJlciA+IDAgPyAnQ2FsY3VsYXInIDogJ0NvbWVuemFyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgezxpbWcgc3JjPXtqb3ZlbjJ9IGFsdD1cImpvdmVuIG1vZGVsb1wiIC8+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgV2l6YXJkU3RlcCA9ICh7IGNoaWxkcmVuIH0pID0+IGNoaWxkcmVuO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
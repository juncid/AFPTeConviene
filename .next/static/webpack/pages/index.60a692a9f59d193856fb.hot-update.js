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
    terminosycondiciones: false
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
                            value: "option2"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHZGb3JtLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dpemFyZENvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJBUFZGb3JtIiwicHJvcHMiLCJhYWNlbnRvIiwiZWFjZW50byIsImlhY2VudG8iLCJvYWNlbnRvIiwidWFjZW50byIsImVuaGUiLCJpbnRlcnJvZ2FjaW9uIiwicm91dGVyIiwidXNlUm91dGVyIiwiaW5pdGlhbFZhbHVlcyIsIm5vbWJyZSIsInJ1dCIsImNvcnJlbyIsImNlbHVsYXIiLCJzdWVsZG8iLCJhaG9ycm8iLCJhZnAiLCJ0ZXJtaW5vc3ljb25kaWNpb25lcyIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJTdGVwMVNjaGVtYSIsImZpZWxkIiwibWV0YSIsInRvdWNoZWQiLCJlcnJvciIsInJ1dE1hc2siLCJjZWx1bGFyTWFzayIsIlN0ZXAyU2NoZW1hIiwiZGluZXJvTWFzayIsInNsZWVwIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJXaXphcmQiLCJjaGlsZHJlbiIsIm9uU3VibWl0IiwiY29taWxsYUl6cXVpZXJkYSIsImNvbWlsbGFEZXJlY2hhIiwidXNlU3RhdGUiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJoYW5kbGVDbG9zZSIsImhhbmRsZVNob3ciLCJzdGVwTnVtYmVyIiwic2V0U3RlcE51bWJlciIsInN0ZXBzIiwiUmVhY3QiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJzbmFwc2hvdCIsInNldFNuYXBzaG90Iiwic3RlcCIsInRvdGFsU3RlcHMiLCJsZW5ndGgiLCJpc0xhc3RTdGVwIiwibmV4dCIsIk1hdGgiLCJtaW4iLCJoYW5kbGVTdWJtaXQiLCJiYWciLCJzZXRUb3VjaGVkIiwidGl0bGUiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiZm9ybWlrIiwiZm9ybSIsImVycm9ycyIsImlzVmFsaWQiLCJkaXJ0eSIsImpvdmVuMiIs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O0FBQ0ksMEJBQUksRUFBQyxRQURUO0FBRUksd0JBQUUsRUFBRUUsVUFBVSxHQUFHLENBQWIsR0FBaUIsU0FBakIsR0FBNkIsNkJBRnJDO0FBR0ksK0JBQVMsRUFBQyw2QkFIZDtBQUlJLDhCQUFRLEVBQUUsRUFBRW9CLE1BQU0sQ0FBQ0csT0FBUCxJQUFrQkgsTUFBTSxDQUFDSSxLQUEzQixDQUpkO0FBQUEsZ0NBTUt4QixVQUFVLEdBQUcsQ0FBYixHQUFpQixVQUFqQixHQUE4QjtBQU5uQztBQURKLG9CQXJGSjtBQUFBLGtCQUZKO0FBQUEsZ0JBRkg7QUFBQTtBQUxMLFlBRko7QUFBQSxVQVRKO0FBQUE7QUFESixNQURKLGVBNkhJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsNkJBQ0s7QUFBSyxXQUFHLEVBQUV5QixvRUFBVjtBQUFrQixXQUFHLEVBQUM7QUFBdEI7QUFETCxNQTdISjtBQUFBLElBREo7QUFtSUgsQ0EvS007O0dBQU1uQyxNOztLQUFBQSxNO0FBaUxOLElBQU1vQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUduQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFrQkEsUUFBbEI7QUFBQSxDQUFuQjtNQUFNbUMsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MGE2OTJhOWY1OWQxOTM4NTZmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZpZWxkfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7IFdpemFyZCwgV2l6YXJkU3RlcCB9IGZyb20gXCIuL1dpemFyZENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTdGVwMVNjaGVtYSwgU3RlcDJTY2hlbWF9IGZyb20gXCIuLi91dGlscy92YWxpZGF0aW9uU2NoZW1hV2l6YXJkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IE1hc2tlZElucHV0IGZyb20gXCJyZWFjdC10ZXh0LW1hc2tcIjtcclxuaW1wb3J0IHsgY2VsdWxhck1hc2ssIGRpbmVyb01hc2ssIHJ1dE1hc2sgfSBmcm9tIFwiLi4vdXRpbHMvaW5wdXRNYXNrXCJcclxuaW1wb3J0IHsgY2xlYW5EaWdpdG9zLCBjbGVhblJ1dCB9IGZyb20gXCIuLi91dGlscy9jbGVhbklucHV0TWFza1wiXHJcblxyXG5jb25zdCBBUFZGb3JtID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgYWFjZW50byA9IFwiXFx1MDBlMVwiO1xyXG4gICAgY29uc3QgZWFjZW50byA9IFwiXFx1MDBlOVwiO1xyXG4gICAgY29uc3QgaWFjZW50byA9IFwiXFx1MDBlZFwiO1xyXG4gICAgY29uc3Qgb2FjZW50byA9IFwiXFx1MDBmM1wiO1xyXG4gICAgY29uc3QgdWFjZW50byA9IFwiXFx1MDBmYVwiO1xyXG4gICAgY29uc3QgZW5oZSA9ICdcXHUwMGYxJztcclxuICAgIGNvbnN0IGludGVycm9nYWNpb24gPSAnXFx1MDBCRic7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBpbml0aWFsVmFsdWVzID0ge1xyXG4gICAgICAgIG5vbWJyZTogJycsXHJcbiAgICAgICAgcnV0OiAnJyxcclxuICAgICAgICBjb3JyZW86ICcnLFxyXG4gICAgICAgIGNlbHVsYXI6ICcnLFxyXG4gICAgICAgIHN1ZWxkbzogJycsXHJcbiAgICAgICAgYWhvcnJvOiAnJyxcclxuICAgICAgICBhZnA6JycsXHJcbiAgICAgICAgdGVybWlub3N5Y29uZGljaW9uZXM6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aXphcmRGb3JtJz5cclxuICAgICAgICAgICAgPFdpemFyZFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlc31cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXt2YWx1ZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHtwcm9wcy50b2tlbn1gXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7cHJvcHMudXJsUG9zdFNpbXVsYWNpb259YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiB2YWx1ZXMubm9tYnJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydXQ6IGNsZWFuUnV0KHZhbHVlcy5ydXQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JyZW86IHZhbHVlcy5jb3JyZW8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbHVsYXI6IGNsZWFuRGlnaXRvcyh2YWx1ZXMuY2VsdWxhciksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1ZWxkbzogY2xlYW5EaWdpdG9zKHZhbHVlcy5zdWVsZG8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhaG9ycm86IGNsZWFuRGlnaXRvcyh2YWx1ZXMuYWhvcnJvKVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wb3N0KHVybCwgYm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5pZFNpbXVsYWNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi9yZXN1bHRhZG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBkYXRhLmlkU2ltdWxhY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFdpemFyZFN0ZXBcclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KCkgPT4gY29uc29sZS5sb2coJ1N0ZXAxIG9uU3VibWl0Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17U3RlcDFTY2hlbWF9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJub21icmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9tYnJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHttZXRhLnRvdWNoZWQgPyAobWV0YS5lcnJvciA/IFwiaXMtaW52YWxpZFwiIDogXCJpcy12YWxpZFwiKSA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibm9tYnJlQXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJub21icmVBeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tdGV4dCAke21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yID8gXCJpcy1pbnZhbGlkXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtZXRhLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiSW5kaWNhbm9zIHR1IG5vbWJyZSB5IGFwZWxsaWRvLlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwicnV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJydXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJVVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hc2tlZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrPXtydXRNYXNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21ldGEudG91Y2hlZCA/IChtZXRhLmVycm9yID8gXCJpcy1pbnZhbGlkXCIgOiBcImlzLXZhbGlkXCIpIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJ1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJydXRBeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUlVUXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJ1dEF5dWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS10ZXh0ICR7bWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3IgPyBcImlzLWludmFsaWRcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtZXRhLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiRWouIDEyLjM0NS42NzgtOS5cIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImNvcnJlb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiY29ycmVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JyZW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21ldGEudG91Y2hlZCA/IChtZXRhLmVycm9yID8gXCJpcy1pbnZhbGlkXCIgOiBcImlzLXZhbGlkXCIpIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvcnJlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjb3JyZW9BeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29ycmVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvcnJlb0F5dWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS10ZXh0ICR7bWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3IgPyBcImlzLWludmFsaWRcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtZXRhLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiRWouIGF1bWVudGF0dXN1ZWxkb0BhZnBtb2RlbG8uY2xcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cImNlbHVsYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImNlbHVsYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENlbHVsYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXNrZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzaz17Y2VsdWxhck1hc2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtbGcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWV0YS50b3VjaGVkID8gKG1ldGEuZXJyb3IgPyBcImlzLWludmFsaWRcIiA6IFwiaXMtdmFsaWRcIikgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2VsdWxhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjZWx1bGFyQXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YDkgX19fXyBfX19fYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNlbHVsYXJBeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tdGV4dCAke21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yID8gXCJpcy1pbnZhbGlkXCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbWV0YS5lcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkVqLiA5IDExMTIgMjNYWFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvV2l6YXJkU3RlcD5cclxuICAgICAgICAgICAgICAgIDxXaXphcmRTdGVwXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eygpID0+IGNvbnNvbGUubG9nKCdTdGVwMiBvblN1Ym1pdCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e1N0ZXAyU2NoZW1hfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwic3VlbGRvXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzdWVsZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiY29udHJvbC1sYWJlbFwifT5zdWVsZG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXNrZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzaz17ZGluZXJvTWFza31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHttZXRhLnRvdWNoZWQgPyAobWV0YS5lcnJvciA/IFwiaXMtaW52YWxpZFwiIDogXCJpcy12YWxpZFwiKSA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdWVsZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwic3VlbGRvQXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17YFN1ZWxkbyBMJHtpYWNlbnRvfXF1aWRvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN1ZWxkb0F5dWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS10ZXh0ICR7bWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3IgPyBcImlzLWludmFsaWRcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtZXRhLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGBFbCBzdWVsZG8gbCR7aWFjZW50b31xdWlkbyBxdWUgcmVjaWJlcyBsdWVnbyBkZSBsb3MgZGVzY3VlbnRvcyBsZWdhbGVzLmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiYWhvcnJvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJhaG9ycm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vbnRvIEFob3Jyb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1hc2tlZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXNrPXtkaW5lcm9NYXNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21ldGEudG91Y2hlZCA/IChtZXRhLmVycm9yID8gXCJpcy1pbnZhbGlkXCIgOiBcImlzLXZhbGlkXCIpIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFob3Jyb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhaG9ycm9BeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWhvcnJvIE1lbnN1YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWhvcnJvQXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLXRleHQgJHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvciA/IFwiaXMtaW52YWxpZFwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGEudG91Y2hlZCAmJiBtZXRhLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG1ldGEuZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYEVsIG1vbnRvIGVuIHBlc29zIHF1ZSBpbnZlcnRpciR7aWFjZW50b31hcyBlbiB0dSBBUFYuYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiYWZwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBpbnB1dC13cmFwcGVyIHNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWZwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZHtpYWNlbnRvfWNhbm9zIHR1IEFGUCBhY3R1YWw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWZwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFmcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY2Npb25lIHVuYSBBRlBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+QUZQIENhcGl0YWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5BRlAgQ3VwcnVtPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+QUZQIEhhYml0YXQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5BRlAgUGxhbiBWaXRhbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPkFGUCBQcm92aWRhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2XCI+QUZQIFVubzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFob3Jyb0F5dWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS10ZXh0ICR7bWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3IgPyBcImlzLWludmFsaWRcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJtdWx0aWZvbmRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBpbnB1dC13cmFwcGVyIHNlbGVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibXVsdGlmb25kb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmR7aWFjZW50b31jYW5vcyB0dSBNdWx0aWZvbmRvIGFjdHVhbDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtdWx0aWZvbmRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm11bHRpZm9uZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWNjaW9uZSB1biBNdWx0aSBGb25kb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjBcIj5BPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+Qjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPkM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5EPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+RTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm11bHRpZm9uZG9BeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tdGV4dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWV0YS50b3VjaGVkICYmIG1ldGEuZXJyb3IgPyBcImlzLWludmFsaWRcIiA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhLnRvdWNoZWQgJiYgbWV0YS5lcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9XaXphcmRTdGVwPlxyXG4gICAgICAgICAgICA8L1dpemFyZD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBUFZGb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgRm9ybWlrLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IGpvdmVuMiBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9zdmcvam92ZW4yLnN2Z1wiXHJcbmltcG9ydCBTdGVwcGVyIGZyb20gJ3JlYWN0LXN0ZXBwZXItaG9yaXpvbnRhbCc7XHJcbmltcG9ydCBUZXJtaW5vc01vZGFsIGZyb20gXCIuL1Rlcm1pbm9zTW9kYWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGVlcCA9IG1zID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBXaXphcmQgPSAoeyBjaGlsZHJlbiwgaW5pdGlhbFZhbHVlcywgb25TdWJtaXQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGFhY2VudG8gPSBcIlxcdTAwZTFcIjtcclxuICAgIGNvbnN0IGVhY2VudG8gPSBcIlxcdTAwZTlcIjtcclxuICAgIGNvbnN0IGlhY2VudG8gPSBcIlxcdTAwZWRcIjtcclxuICAgIGNvbnN0IG9hY2VudG8gPSBcIlxcdTAwZjNcIjtcclxuICAgIGNvbnN0IHVhY2VudG8gPSBcIlxcdTAwZmFcIjtcclxuICAgIGNvbnN0IGVuaGUgPSAnXFx1MDBmMSc7XHJcbiAgICBjb25zdCBpbnRlcnJvZ2FjaW9uID0gJ1xcdTAwQkYnO1xyXG4gICAgY29uc3QgY29taWxsYUl6cXVpZXJkYSA9ICdcXHUyMDFDJztcclxuICAgIGNvbnN0IGNvbWlsbGFEZXJlY2hhID0gJ1xcdTIwMUQnO1xyXG5cclxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldE1vZGFsU2hvdyhmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0TW9kYWxTaG93KHRydWUpO1xyXG5cclxuICAgIGNvbnN0IFtzdGVwTnVtYmVyLCBzZXRTdGVwTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgc3RlcHMgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcclxuICAgIGNvbnN0IFtzbmFwc2hvdCwgc2V0U25hcHNob3RdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlcyk7XHJcblxyXG4gICAgY29uc3Qgc3RlcCA9IHN0ZXBzW3N0ZXBOdW1iZXJdO1xyXG4gICAgY29uc3QgdG90YWxTdGVwcyA9IHN0ZXBzLmxlbmd0aDtcclxuICAgIGNvbnN0IGlzTGFzdFN0ZXAgPSBzdGVwTnVtYmVyID09PSB0b3RhbFN0ZXBzIC0gMTtcclxuXHJcbiAgICBjb25zdCBuZXh0ID0gdmFsdWVzID0+IHtcclxuICAgICAgICBzZXRTbmFwc2hvdCh2YWx1ZXMpO1xyXG4gICAgICAgIHNldFN0ZXBOdW1iZXIoTWF0aC5taW4oc3RlcE51bWJlciArIDEsIHRvdGFsU3RlcHMgLSAxKSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAodmFsdWVzLCBiYWcpID0+IHtcclxuICAgICAgICBpZiAoc3RlcC5wcm9wcy5vblN1Ym1pdCkge1xyXG4gICAgICAgICAgICBhd2FpdCBzdGVwLnByb3BzLm9uU3VibWl0KHZhbHVlcywgYmFnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTGFzdFN0ZXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9uU3VibWl0KHZhbHVlcywgYmFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiYWcuc2V0VG91Y2hlZCh7fSk7XHJcbiAgICAgICAgICAgIG5leHQodmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtMTAgYmxvcXVlIGZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBmb3JtdWxhcmlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBzPXtbeyB0aXRsZTogJycgfSwgeyB0aXRsZTogJycgfSAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN0ZXA9e3N0ZXBOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcj17XCIjNzJCNTAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZUNvbG9yPXtcIiM3MkI1MDBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Db25vY2UgY3V7YWFjZW50b31sIGVzIGxhIEFmcCBxdWUgaGFjZSBjcmVjZXIgdHVzIGFob3Jyb3M6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtzbmFwc2hvdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtzdGVwLnByb3BzLnZhbGlkYXRpb25TY2hlbWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZm9ybWlrKSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IEluZGljYW5vcyBzaSByZXRpcmFzdGUgZWwgMTAlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJyZXRpcm8xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmV0aXJvMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlubGluZVJhZGlvMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJpbmxpbmVSYWRpbzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJldGlybzEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbmxpbmVSYWRpbzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm9wdGlvbjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiaW5saW5lUmFkaW8yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Tm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKGZvcm1pay52YWx1ZXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJ0ZXJtaW5vc3ljb25kaWNpb25lc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IHsgdG91Y2hlZCwgZXJyb3JzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBtdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInRlcm1pbm9zeWNvbmRpY2lvbmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGVybWlub3N5Y29uZGljaW9uZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjZXB0byBsYXN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtd2l6YXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaWNpb25lcyBkZWwgc2VydmljaW8geSBsYSBwb2x7aWFjZW50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNhIGRlIHByaXZhY2lkYWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZXJtaW5vc0F5dWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBmb3JtLXRleHQgJHt0b3VjaGVkLnRlcm1pbm9zeWNvbmRpY2lvbmVzICYmIGVycm9ycy50ZXJtaW5vc3ljb25kaWNpb25lcyA/ICdpcy1pbnZhbGlkJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG91Y2hlZC50ZXJtaW5vc3ljb25kaWNpb25lcyAmJiBlcnJvcnMudGVybWlub3N5Y29uZGljaW9uZXMgPyBlcnJvcnMudGVybWlub3N5Y29uZGljaW9uZXMgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRlcm1pbm9zTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzdGVwTnVtYmVyID4gMCA/ICdQMl9sZWFkJyA6ICdQMV9pbmdyZXNvX2RhdG9zX3BlcnNvbmFsZXMnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tYmxvY2sgcHVycGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyEoZm9ybWlrLmlzVmFsaWQgJiYgZm9ybWlrLmRpcnR5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwTnVtYmVyID4gMCA/ICdDYWxjdWxhcicgOiAnQ29tZW56YXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBkZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgICB7PGltZyBzcmM9e2pvdmVuMn0gYWx0PVwiam92ZW4gbW9kZWxvXCIgLz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBXaXphcmRTdGVwID0gKHsgY2hpbGRyZW4gfSkgPT4gY2hpbGRyZW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
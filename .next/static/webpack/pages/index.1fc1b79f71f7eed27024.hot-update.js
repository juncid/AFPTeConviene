webpackHotUpdate_N_E("pages/index",{

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
                  }), formik.values.retiro10 === "true" ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
                    name: "retiros_realizados",
                    children: function children(_ref4) {
                      var field = _ref4.field;
                      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
                        className: "form-group input-wrapper",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
                          className: "form-check form-check-inline",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", _objectSpread(_objectSpread({}, field), {}, {
                            className: "form-check-input",
                            type: "radio",
                            name: "retiros_realizados",
                            id: "retiros1",
                            value: "1"
                          })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
                            className: "form-check-label",
                            htmlFor: "retiros1",
                            children: "Primero"
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
                          className: "form-check form-check-inline",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", _objectSpread(_objectSpread({}, field), {}, {
                            className: "form-check-input",
                            type: "radio",
                            name: "retiros_realizados",
                            id: "retiros2",
                            value: "2"
                          })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
                            className: "form-check-label",
                            htmlFor: "retiros2",
                            children: "Segundo"
                          })]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
                          className: "form-check form-check-inline",
                          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("input", _objectSpread(_objectSpread({}, field), {}, {
                            className: "form-check-input",
                            type: "radio",
                            name: "retiros_realizados",
                            id: "retiros3",
                            value: "3"
                          })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
                            className: "form-check-label",
                            htmlFor: "retiros3",
                            children: "Ambos"
                          })]
                        })]
                      });
                    }
                  }) : formik.setFieldValue, console.log(formik.values), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
                    className: "form-check",
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
                      name: "terminosycondiciones",
                      children: function children(_ref5) {
                        var field = _ref5.field,
                            _ref5$form = _ref5.form,
                            touched = _ref5$form.touched,
                            errors = _ref5$form.errors;
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
var WizardStep = function WizardStep(_ref6) {
  var children = _ref6.children;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaXphcmRDb21wb25lbnQuanMiXSwibmFtZXMiOlsic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIldpemFyZCIsImNoaWxkcmVuIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwiYWFjZW50byIsImVhY2VudG8iLCJpYWNlbnRvIiwib2FjZW50byIsInVhY2VudG8iLCJlbmhlIiwiaW50ZXJyb2dhY2lvbiIsImNvbWlsbGFJenF1aWVyZGEiLCJjb21pbGxhRGVyZWNoYSIsInVzZVN0YXRlIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTaG93Iiwic3RlcE51bWJlciIsInNldFN0ZXBOdW1iZXIiLCJzdGVwcyIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5Iiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsInN0ZXAiLCJ0b3RhbFN0ZXBzIiwibGVuZ3RoIiwiaXNMYXN0U3RlcCIsIm5leHQiLCJ2YWx1ZXMiLCJNYXRoIiwibWluIiwiaGFuZGxlU3VibWl0IiwiYmFnIiwicHJvcHMiLCJzZXRUb3VjaGVkIiwidGl0bGUiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiZm9ybWlrIiwiZmllbGQiLCJtZXRhIiwicmV0aXJvMTAiLCJzZXRGaWVsZFZhbHVlIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJ0b3VjaGVkIiwiZXJyb3JzIiwidGVybWlub3N5Y29uZGljaW9uZXMiLCJpc1ZhbGlkIiwiZGlydHkiLCJqb3ZlbjIiLCJXaXphcmRTdGVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBQyxFQUFFO0FBQUEsU0FBSSxJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTztBQUFB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QUFDQyxvQkFBdkMsR0FBOERELE1BQU0sQ0FBQ0Msb0JBQXJFLEdBQTRGO0FBTGpHLDRCQXJCSixlQTRCSSw4REFBQyxzREFBRDtBQUNJLGdDQUFJLEVBQUVwQyxTQURWO0FBRUksa0NBQU0sRUFBRUU7QUFGWiw0QkE1Qko7QUFBQSwwQkFKSDtBQUFBO0FBREw7QUFESixvQkFuR0osZUE2SUk7QUFBSyw2QkFBUyxFQUFDLG1DQUFmO0FBQUEsMkNBQ0k7QUFDSSwwQkFBSSxFQUFDLFFBRFQ7QUFFSSx3QkFBRSxFQUFFRSxVQUFVLEdBQUcsQ0FBYixHQUFpQixTQUFqQixHQUE2Qiw2QkFGckM7QUFHSSwrQkFBUyxFQUFDLDZCQUhkO0FBSUksOEJBQVEsRUFBRSxFQUFFc0IsTUFBTSxDQUFDVyxPQUFQLElBQWtCWCxNQUFNLENBQUNZLEtBQTNCLENBSmQ7QUFBQSxnQ0FNS2xDLFVBQVUsR0FBRyxDQUFiLEdBQWlCLFVBQWpCLEdBQThCO0FBTm5DO0FBREosb0JBN0lKO0FBQUEsa0JBRko7QUFBQSxnQkFGSDtBQUFBO0FBTEwsWUFGSjtBQUFBLFVBVEo7QUFBQTtBQURKLE1BREosZUFxTEk7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw2QkFDSztBQUFLLFdBQUcsRUFBRW1DLG9FQUFWO0FBQWtCLFdBQUcsRUFBQztBQUF0QjtBQURMLE1BckxKO0FBQUEsSUFESjtBQTJMSCxDQXZPTTs7R0FBTXJELE07O0tBQUFBLE07QUF5T04sSUFBTXNELFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR3JELFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQWtCQSxRQUFsQjtBQUFBLENBQW5CO01BQU1xRCxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFmYzFiNzlmNzFmN2VlZDI3MDI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgRm9ybWlrLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IGpvdmVuMiBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9zdmcvam92ZW4yLnN2Z1wiXHJcbmltcG9ydCBTdGVwcGVyIGZyb20gJ3JlYWN0LXN0ZXBwZXItaG9yaXpvbnRhbCc7XHJcbmltcG9ydCBUZXJtaW5vc01vZGFsIGZyb20gXCIuL1Rlcm1pbm9zTW9kYWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGVlcCA9IG1zID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBXaXphcmQgPSAoeyBjaGlsZHJlbiwgaW5pdGlhbFZhbHVlcywgb25TdWJtaXQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGFhY2VudG8gPSBcIlxcdTAwZTFcIjtcclxuICAgIGNvbnN0IGVhY2VudG8gPSBcIlxcdTAwZTlcIjtcclxuICAgIGNvbnN0IGlhY2VudG8gPSBcIlxcdTAwZWRcIjtcclxuICAgIGNvbnN0IG9hY2VudG8gPSBcIlxcdTAwZjNcIjtcclxuICAgIGNvbnN0IHVhY2VudG8gPSBcIlxcdTAwZmFcIjtcclxuICAgIGNvbnN0IGVuaGUgPSAnXFx1MDBmMSc7XHJcbiAgICBjb25zdCBpbnRlcnJvZ2FjaW9uID0gJ1xcdTAwQkYnO1xyXG4gICAgY29uc3QgY29taWxsYUl6cXVpZXJkYSA9ICdcXHUyMDFDJztcclxuICAgIGNvbnN0IGNvbWlsbGFEZXJlY2hhID0gJ1xcdTIwMUQnO1xyXG5cclxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldE1vZGFsU2hvdyhmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0TW9kYWxTaG93KHRydWUpO1xyXG5cclxuICAgIGNvbnN0IFtzdGVwTnVtYmVyLCBzZXRTdGVwTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgc3RlcHMgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcclxuICAgIGNvbnN0IFtzbmFwc2hvdCwgc2V0U25hcHNob3RdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlcyk7XHJcblxyXG4gICAgY29uc3Qgc3RlcCA9IHN0ZXBzW3N0ZXBOdW1iZXJdO1xyXG4gICAgY29uc3QgdG90YWxTdGVwcyA9IHN0ZXBzLmxlbmd0aDtcclxuICAgIGNvbnN0IGlzTGFzdFN0ZXAgPSBzdGVwTnVtYmVyID09PSB0b3RhbFN0ZXBzIC0gMTtcclxuXHJcbiAgICBjb25zdCBuZXh0ID0gdmFsdWVzID0+IHtcclxuICAgICAgICBzZXRTbmFwc2hvdCh2YWx1ZXMpO1xyXG4gICAgICAgIHNldFN0ZXBOdW1iZXIoTWF0aC5taW4oc3RlcE51bWJlciArIDEsIHRvdGFsU3RlcHMgLSAxKSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAodmFsdWVzLCBiYWcpID0+IHtcclxuICAgICAgICBpZiAoc3RlcC5wcm9wcy5vblN1Ym1pdCkge1xyXG4gICAgICAgICAgICBhd2FpdCBzdGVwLnByb3BzLm9uU3VibWl0KHZhbHVlcywgYmFnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTGFzdFN0ZXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9uU3VibWl0KHZhbHVlcywgYmFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiYWcuc2V0VG91Y2hlZCh7fSk7XHJcbiAgICAgICAgICAgIG5leHQodmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtMTAgYmxvcXVlIGZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBmb3JtdWxhcmlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBzPXtbeyB0aXRsZTogJycgfSwgeyB0aXRsZTogJycgfSAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN0ZXA9e3N0ZXBOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcj17XCIjNzJCNTAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZUNvbG9yPXtcIiM3MkI1MDBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Db25vY2UgY3V7YWFjZW50b31sIGVzIGxhIEFmcCBxdWUgaGFjZSBjcmVjZXIgdHVzIGFob3Jyb3M6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtzbmFwc2hvdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtzdGVwLnByb3BzLnZhbGlkYXRpb25TY2hlbWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZm9ybWlrKSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IEluZGljYW5vcyBzaSByZXRpcmFzdGUgZWwgMTAlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJyZXRpcm8xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmV0aXJvMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlubGluZVJhZGlvMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJpbmxpbmVSYWRpbzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJldGlybzEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbmxpbmVSYWRpbzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImlubGluZVJhZGlvMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPk5vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtaWsudmFsdWVzLnJldGlybzEwID09PSBcInRydWVcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInJldGlyb3NfcmVhbGl6YWRvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXRpcm9zX3JlYWxpemFkb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJldGlyb3MxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInJldGlyb3MxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lcm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJldGlyb3NfcmVhbGl6YWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmV0aXJvczJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicmV0aXJvczJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TZWd1bmRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXRpcm9zX3JlYWxpemFkb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJldGlyb3MzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInJldGlyb3MzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+QW1ib3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPiA6IGZvcm1pay5zZXRGaWVsZFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coZm9ybWlrLnZhbHVlcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInRlcm1pbm9zeWNvbmRpY2lvbmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybTogeyB0b3VjaGVkLCBlcnJvcnMgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG10LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwidGVybWlub3N5Y29uZGljaW9uZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXJtaW5vc3ljb25kaWNpb25lc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNlcHRvIGxhc3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2hvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC13aXphcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpY2lvbmVzIGRlbCBzZXJ2aWNpbyB5IGxhIHBvbHtpYWNlbnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2EgZGUgcHJpdmFjaWRhZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRlcm1pbm9zQXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGZvcm0tdGV4dCAke3RvdWNoZWQudGVybWlub3N5Y29uZGljaW9uZXMgJiYgZXJyb3JzLnRlcm1pbm9zeWNvbmRpY2lvbmVzID8gJ2lzLWludmFsaWQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3VjaGVkLnRlcm1pbm9zeWNvbmRpY2lvbmVzICYmIGVycm9ycy50ZXJtaW5vc3ljb25kaWNpb25lcyA/IGVycm9ycy50ZXJtaW5vc3ljb25kaWNpb25lcyA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGVybWlub3NNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGp1c3RpZnktY29udGVudC1jZW50ZXIgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3N0ZXBOdW1iZXIgPiAwID8gJ1AyX2xlYWQnIDogJ1AxX2luZ3Jlc29fZGF0b3NfcGVyc29uYWxlcycgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1ibG9jayBwdXJwbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IShmb3JtaWsuaXNWYWxpZCAmJiBmb3JtaWsuZGlydHkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXBOdW1iZXIgPiAwID8gJ0NhbGN1bGFyJyA6ICdDb21lbnphcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIGRlc2t0b3BcIj5cclxuICAgICAgICAgICAgICAgIHs8aW1nIHNyYz17am92ZW4yfSBhbHQ9XCJqb3ZlbiBtb2RlbG9cIiAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdpemFyZFN0ZXAgPSAoeyBjaGlsZHJlbiB9KSA9PiBjaGlsZHJlbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
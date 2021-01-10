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
                  children: [isLastStep && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
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
                    }) : '']
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaXphcmRDb21wb25lbnQuanMiXSwibmFtZXMiOlsic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIldpemFyZCIsImNoaWxkcmVuIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwiYWFjZW50byIsImVhY2VudG8iLCJpYWNlbnRvIiwib2FjZW50byIsInVhY2VudG8iLCJlbmhlIiwiaW50ZXJyb2dhY2lvbiIsImNvbWlsbGFJenF1aWVyZGEiLCJjb21pbGxhRGVyZWNoYSIsInVzZVN0YXRlIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTaG93Iiwic3RlcE51bWJlciIsInNldFN0ZXBOdW1iZXIiLCJzdGVwcyIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5Iiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsInN0ZXAiLCJ0b3RhbFN0ZXBzIiwibGVuZ3RoIiwiaXNMYXN0U3RlcCIsIm5leHQiLCJ2YWx1ZXMiLCJNYXRoIiwibWluIiwiaGFuZGxlU3VibWl0IiwiYmFnIiwicHJvcHMiLCJzZXRUb3VjaGVkIiwidGl0bGUiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiZm9ybWlrIiwiZmllbGQiLCJtZXRhIiwicmV0aXJvMTAiLCJmb3JtIiwidG91Y2hlZCIsImVycm9ycyIsInRlcm1pbm9zeWNvbmRpY2lvbmVzIiwiaXNWYWxpZCIsImRpcnR5Iiwiam92ZW4yIiwiV2l6YXJkU3RlcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQUMsRUFBRTtBQUFBLFNBQUksSUFBSUMsT0FBSixDQUFZLFVBQUFDLE9BQU87QUFBQSxXQUFJQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFB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OERBQUMsc0RBQUQ7QUFDSSxnQ0FBSSxFQUFFakMsU0FEVjtBQUVJLGtDQUFNLEVBQUVFO0FBRlosNEJBNUJKO0FBQUEsMEJBSkg7QUFBQTtBQURMO0FBREosb0JBcEdKLGVBOElJO0FBQUssNkJBQVMsRUFBQyxtQ0FBZjtBQUFBLDJDQUNJO0FBQ0ksMEJBQUksRUFBQyxRQURUO0FBRUksd0JBQUUsRUFBRUUsVUFBVSxHQUFHLENBQWIsR0FBaUIsU0FBakIsR0FBNkIsNkJBRnJDO0FBR0ksK0JBQVMsRUFBQyw2QkFIZDtBQUlJLDhCQUFRLEVBQUUsRUFBRXNCLE1BQU0sQ0FBQ1EsT0FBUCxJQUFrQlIsTUFBTSxDQUFDUyxLQUEzQixDQUpkO0FBQUEsZ0NBTUsvQixVQUFVLEdBQUcsQ0FBYixHQUFpQixVQUFqQixHQUE4QjtBQU5uQztBQURKLG9CQTlJSjtBQUFBLGtCQUhKO0FBQUEsZ0JBRkg7QUFBQTtBQUxMLFlBRko7QUFBQSxVQVRKO0FBQUE7QUFESixNQURKLGVBdUxJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsNkJBQ0s7QUFBSyxXQUFHLEVBQUVnQyxvRUFBVjtBQUFrQixXQUFHLEVBQUM7QUFBdEI7QUFETCxNQXZMSjtBQUFBLElBREo7QUE2TEgsQ0F6T007O0dBQU1sRCxNOztLQUFBQSxNO0FBMk9OLElBQU1tRCxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdsRCxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUFrQkEsUUFBbEI7QUFBQSxDQUFuQjtNQUFNa0QsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNDBhOWFhOGI3OTBlNmQ5Yjc3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIEZvcm1paywgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBqb3ZlbjIgZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvc3ZnL2pvdmVuMi5zdmdcIlxyXG5pbXBvcnQgU3RlcHBlciBmcm9tICdyZWFjdC1zdGVwcGVyLWhvcml6b250YWwnO1xyXG5pbXBvcnQgVGVybWlub3NNb2RhbCBmcm9tIFwiLi9UZXJtaW5vc01vZGFsXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2xlZXAgPSBtcyA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgV2l6YXJkID0gKHsgY2hpbGRyZW4sIGluaXRpYWxWYWx1ZXMsIG9uU3VibWl0IH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBhYWNlbnRvID0gXCJcXHUwMGUxXCI7XHJcbiAgICBjb25zdCBlYWNlbnRvID0gXCJcXHUwMGU5XCI7XHJcbiAgICBjb25zdCBpYWNlbnRvID0gXCJcXHUwMGVkXCI7XHJcbiAgICBjb25zdCBvYWNlbnRvID0gXCJcXHUwMGYzXCI7XHJcbiAgICBjb25zdCB1YWNlbnRvID0gXCJcXHUwMGZhXCI7XHJcbiAgICBjb25zdCBlbmhlID0gJ1xcdTAwZjEnO1xyXG4gICAgY29uc3QgaW50ZXJyb2dhY2lvbiA9ICdcXHUwMEJGJztcclxuICAgIGNvbnN0IGNvbWlsbGFJenF1aWVyZGEgPSAnXFx1MjAxQyc7XHJcbiAgICBjb25zdCBjb21pbGxhRGVyZWNoYSA9ICdcXHUyMDFEJztcclxuXHJcbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRNb2RhbFNob3coZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHNldE1vZGFsU2hvdyh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbc3RlcE51bWJlciwgc2V0U3RlcE51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHN0ZXBzID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XHJcbiAgICBjb25zdCBbc25hcHNob3QsIHNldFNuYXBzaG90XSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZXMpO1xyXG5cclxuICAgIGNvbnN0IHN0ZXAgPSBzdGVwc1tzdGVwTnVtYmVyXTtcclxuICAgIGNvbnN0IHRvdGFsU3RlcHMgPSBzdGVwcy5sZW5ndGg7XHJcbiAgICBjb25zdCBpc0xhc3RTdGVwID0gc3RlcE51bWJlciA9PT0gdG90YWxTdGVwcyAtIDE7XHJcblxyXG4gICAgY29uc3QgbmV4dCA9IHZhbHVlcyA9PiB7XHJcbiAgICAgICAgc2V0U25hcHNob3QodmFsdWVzKTtcclxuICAgICAgICBzZXRTdGVwTnVtYmVyKE1hdGgubWluKHN0ZXBOdW1iZXIgKyAxLCB0b3RhbFN0ZXBzIC0gMSkpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKHZhbHVlcywgYmFnKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0ZXAucHJvcHMub25TdWJtaXQpIHtcclxuICAgICAgICAgICAgYXdhaXQgc3RlcC5wcm9wcy5vblN1Ym1pdCh2YWx1ZXMsIGJhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0xhc3RTdGVwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvblN1Ym1pdCh2YWx1ZXMsIGJhZyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYmFnLnNldFRvdWNoZWQoe30pO1xyXG4gICAgICAgICAgICBuZXh0KHZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTEwIGJsb3F1ZSBmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgZm9ybXVsYXJpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGVwcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwcz17W3sgdGl0bGU6ICcnIH0sIHsgdGl0bGU6ICcnIH0gIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdGVwPXtzdGVwTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ29sb3I9e1wiIzcyQjUwMFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVDb2xvcj17XCIjNzJCNTAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29ub2NlIGN1e2FhY2VudG99bCBlcyBsYSBBZnAgcXVlIGhhY2UgY3JlY2VyIHR1cyBhaG9ycm9zOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17c25hcHNob3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17c3RlcC5wcm9wcy52YWxpZGF0aW9uU2NoZW1hfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGZvcm1paykgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNMYXN0U3RlcCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gSW5kaWNhbm9zIHNpIHJldGlyYXN0ZSBlbCAxMCU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJyZXRpcm8xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXRpcm8xMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlubGluZVJhZGlvMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImlubGluZVJhZGlvMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJldGlybzEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW5saW5lUmFkaW8yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImlubGluZVJhZGlvMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5Ob1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWlrLnZhbHVlcy5yZXRpcm8xMCA9PT0gXCJ0cnVlXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInJldGlyb3NfcmVhbGl6YWRvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBpbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJldGlyb3NfcmVhbGl6YWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZXRpcm9zMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicmV0aXJvczFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lcm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXRpcm9zX3JlYWxpemFkb3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmV0aXJvczJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInJldGlyb3MyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TZWd1bmRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmV0aXJvc19yZWFsaXphZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJldGlyb3MzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJyZXRpcm9zM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+QW1ib3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD4gOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInRlcm1pbm9zeWNvbmRpY2lvbmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybTogeyB0b3VjaGVkLCBlcnJvcnMgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsIG10LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwidGVybWlub3N5Y29uZGljaW9uZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXJtaW5vc3ljb25kaWNpb25lc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNlcHRvIGxhc3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2hvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC13aXphcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpY2lvbmVzIGRlbCBzZXJ2aWNpbyB5IGxhIHBvbHtpYWNlbnRvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2EgZGUgcHJpdmFjaWRhZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRlcm1pbm9zQXl1ZGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGZvcm0tdGV4dCAke3RvdWNoZWQudGVybWlub3N5Y29uZGljaW9uZXMgJiYgZXJyb3JzLnRlcm1pbm9zeWNvbmRpY2lvbmVzID8gJ2lzLWludmFsaWQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0b3VjaGVkLnRlcm1pbm9zeWNvbmRpY2lvbmVzICYmIGVycm9ycy50ZXJtaW5vc3ljb25kaWNpb25lcyA/IGVycm9ycy50ZXJtaW5vc3ljb25kaWNpb25lcyA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGVybWlub3NNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGp1c3RpZnktY29udGVudC1jZW50ZXIgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3N0ZXBOdW1iZXIgPiAwID8gJ1AyX2xlYWQnIDogJ1AxX2luZ3Jlc29fZGF0b3NfcGVyc29uYWxlcycgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1ibG9jayBwdXJwbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IShmb3JtaWsuaXNWYWxpZCAmJiBmb3JtaWsuZGlydHkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXBOdW1iZXIgPiAwID8gJ0NhbGN1bGFyJyA6ICdDb21lbnphcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIGRlc2t0b3BcIj5cclxuICAgICAgICAgICAgICAgIHs8aW1nIHNyYz17am92ZW4yfSBhbHQ9XCJqb3ZlbiBtb2RlbG9cIiAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdpemFyZFN0ZXAgPSAoeyBjaGlsZHJlbiB9KSA9PiBjaGlsZHJlbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
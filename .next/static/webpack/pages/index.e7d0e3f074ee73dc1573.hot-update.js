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
                children: [step, isLastStep && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
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
                  }) : '', console.log(formik.values), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaXphcmRDb21wb25lbnQuanMiXSwibmFtZXMiOlsic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIldpemFyZCIsImNoaWxkcmVuIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwiYWFjZW50byIsImVhY2VudG8iLCJpYWNlbnRvIiwib2FjZW50byIsInVhY2VudG8iLCJlbmhlIiwiaW50ZXJyb2dhY2lvbiIsImNvbWlsbGFJenF1aWVyZGEiLCJjb21pbGxhRGVyZWNoYSIsInVzZVN0YXRlIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTaG93Iiwic3RlcE51bWJlciIsInNldFN0ZXBOdW1iZXIiLCJzdGVwcyIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5Iiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsInN0ZXAiLCJ0b3RhbFN0ZXBzIiwibGVuZ3RoIiwiaXNMYXN0U3RlcCIsIm5leHQiLCJ2YWx1ZXMiLCJNYXRoIiwibWluIiwiaGFuZGxlU3VibWl0IiwiYmFnIiwicHJvcHMiLCJzZXRUb3VjaGVkIiwidGl0bGUiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiZm9ybWlrIiwiZmllbGQiLCJtZXRhIiwicmV0aXJvMTAiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsInRvdWNoZWQiLCJlcnJvcnMiLCJ0ZXJtaW5vc3ljb25kaWNpb25lcyIsImlzVmFsaWQiLCJkaXJ0eSIsImpvdmVuMiIsIldpemFyZFN0ZXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUFDLEVBQUU7QUFBQSxTQUFJLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPO0FBQUEsV0FBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBZDtBQUFBLEdBQW5CLENBQUo7QUFBQSxDQUFoQjtBQUdBLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTJDO0FBQUE7O0FBQUEsTUFBeENDLFNBQXdDLFFBQXhDQSxRQUF3QztBQUFBLE1BQTlCQyxhQUE4QixRQUE5QkEsYUFBOEI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFFN0QsTUFBTUMsT0FBTyxHQUFHLE1BQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQWhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsTUFBdEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxRQUF6QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxRQUF2Qjs7QUFWNkQsa0JBWTNCQyxzREFBUSxDQUFDLEtBQUQsQ0FabUI7QUFBQSxNQVl0REMsU0Fac0Q7QUFBQSxNQVkzQ0MsWUFaMkM7O0FBYTdELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTUQsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxHQUFwQjs7QUFDQSxNQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1GLFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUEsR0FBbkI7O0FBZDZELG1CQWdCekJGLHNEQUFRLENBQUMsQ0FBRCxDQWhCaUI7QUFBQSxNQWdCdERLLFVBaEJzRDtBQUFBLE1BZ0IxQ0MsYUFoQjBDOztBQWlCN0QsTUFBTUMsS0FBSyxHQUFHQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJ0QixTQUF2QixDQUFkOztBQWpCNkQsbUJBa0I3Qlksc0RBQVEsQ0FBQ1gsYUFBRCxDQWxCcUI7QUFBQSxNQWtCdERzQixRQWxCc0Q7QUFBQSxNQWtCNUNDLFdBbEI0Qzs7QUFvQjdELE1BQU1DLElBQUksR0FBR04sS0FBSyxDQUFDRixVQUFELENBQWxCO0FBQ0EsTUFBTVMsVUFBVSxHQUFHUCxLQUFLLENBQUNRLE1BQXpCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHWCxVQUFVLEtBQUtTLFVBQVUsR0FBRyxDQUEvQzs7QUFFQSxNQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFBQyxNQUFNLEVBQUk7QUFDbkJOLGVBQVcsQ0FBQ00sTUFBRCxDQUFYO0FBQ0FaLGlCQUFhLENBQUNhLElBQUksQ0FBQ0MsR0FBTCxDQUFTZixVQUFVLEdBQUcsQ0FBdEIsRUFBeUJTLFVBQVUsR0FBRyxDQUF0QyxDQUFELENBQWI7QUFDSCxHQUhEOztBQU1BLE1BQU1PLFlBQVk7QUFBQSxpTUFBRyxpQkFBT0gsTUFBUCxFQUFlSSxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDYlQsSUFBSSxDQUFDVSxLQUFMLENBQVdqQyxRQURFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBRVB1QixJQUFJLENBQUNVLEtBQUwsQ0FBV2pDLFFBQVgsQ0FBb0I0QixNQUFwQixFQUE0QkksR0FBNUIsQ0FGTzs7QUFBQTtBQUFBLG1CQUliTixVQUphO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUtOMUIsUUFBUSxDQUFDNEIsTUFBRCxFQUFTSSxHQUFULENBTEY7O0FBQUE7QUFPYkEsaUJBQUcsQ0FBQ0UsVUFBSixDQUFlLEVBQWY7QUFDQVAsa0JBQUksQ0FBQ0MsTUFBRCxDQUFKOztBQVJhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpHLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBY0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGlDQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsZ0NBQ0k7QUFBQSxpQ0FDSSw4REFBQywrREFBRDtBQUNJLGlCQUFLLEVBQUUsQ0FBQztBQUFFSSxtQkFBSyxFQUFFO0FBQVQsYUFBRCxFQUFnQjtBQUFFQSxtQkFBSyxFQUFFO0FBQVQsYUFBaEIsQ0FEWDtBQUVJLHNCQUFVLEVBQUVwQixVQUZoQjtBQUdJLHVCQUFXLEVBQUUsU0FIakI7QUFJSSx5QkFBYSxFQUFFO0FBSm5CO0FBREosVUFESixlQVNJO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0k7QUFBQSxvQ0FBYWQsT0FBYjtBQUFBLFlBREosZUFFSSw4REFBQyw2Q0FBRDtBQUNJLHlCQUFhLEVBQUVvQixRQURuQjtBQUVJLG9CQUFRLEVBQUVVLFlBRmQ7QUFHSSw0QkFBZ0IsRUFBRVIsSUFBSSxDQUFDVSxLQUFMLENBQVdHLGdCQUhqQztBQUFBLHNCQUtLLGtCQUFDQyxNQUFEO0FBQUEsa0NBRUcsK0RBQUMsMkNBQUQ7QUFBQSwyQkFDS2QsSUFETCxFQUVLRyxVQUFVLGlCQUFJO0FBQUssMkJBQVMsRUFBQywyQ0FBZjtBQUFBLDBDQUNYO0FBQUE7QUFBQSxvQkFEVyxlQUVYLDhEQUFDLDRDQUFEO0FBQU8sd0JBQUksRUFBQyxVQUFaO0FBQUEsOEJBQ0s7QUFBQSwwQkFDS1ksS0FETCxTQUNLQSxLQURMO0FBQUEsMEJBRUtDLElBRkwsU0FFS0EsSUFGTDtBQUFBLDBDQUlHO0FBQUssaUNBQVMsRUFBQywwQkFBZjtBQUFBLGdEQUNJO0FBQUssbUNBQVMsRUFBQyw4QkFBZjtBQUFBLGtEQUNJLHVHQUNRRCxLQURSO0FBRUkscUNBQVMsRUFBQyxrQkFGZDtBQUdJLGdDQUFJLEVBQUMsT0FIVDtBQUlJLGdDQUFJLEVBQUMsVUFKVDtBQUtJLDhCQUFFLEVBQUMsY0FMUDtBQU1JLGlDQUFLLEVBQUM7QUFOViw2QkFESixlQVNJO0FBQ0kscUNBQVMsRUFBQyxrQkFEZDtBQUVJLG1DQUFPLEVBQUMsY0FGWjtBQUFBO0FBQUEsNEJBVEo7QUFBQSwwQkFESixlQWlCSTtBQUFLLG1DQUFTLEVBQUMsOEJBQWY7QUFBQSxrREFDSSx1R0FDUUEsS0FEUjtBQUVJLHFDQUFTLEVBQUMsa0JBRmQ7QUFHSSxnQ0FBSSxFQUFDLE9BSFQ7QUFJSSxnQ0FBSSxFQUFDLFVBSlQ7QUFLSSw4QkFBRSxFQUFDLGNBTFA7QUFNSSxpQ0FBSyxFQUFDO0FBTlYsNkJBREosZUFTSTtBQUNJLHFDQUFTLEVBQUMsa0JBRGQ7QUFFSSxtQ0FBTyxFQUFDLGNBRlo7QUFBQTtBQUFBLDRCQVRKO0FBQUEsMEJBakJKO0FBQUEsd0JBSkg7QUFBQTtBQURMLG9CQUZXLEVBMENWRCxNQUFNLENBQUNULE1BQVAsQ0FBY1ksUUFBZCxLQUEyQixNQUEzQixnQkFDRyw4REFBQyw0Q0FBRDtBQUFPLHdCQUFJLEVBQUMsb0JBQVo7QUFBQSw4QkFDSztBQUFBLDBCQUNLRixLQURMLFNBQ0tBLEtBREw7QUFBQSwwQ0FHRztBQUFLLGlDQUFTLEVBQUMsMEJBQWY7QUFBQSxnREFDSTtBQUFLLG1DQUFTLEVBQUMsOEJBQWY7QUFBQSxrREFDSSx1R0FDUUEsS0FEUjtBQUVJLHFDQUFTLEVBQUMsa0JBRmQ7QUFHSSxnQ0FBSSxFQUFDLE9BSFQ7QUFJSSxnQ0FBSSxFQUFDLG9CQUpUO0FBS0ksOEJBQUUsRUFBQyxVQUxQO0FBTUksaUNBQUssRUFBQztBQU5WLDZCQURKLGVBU0k7QUFDSSxxQ0FBUyxFQUFDLGtCQURkO0FBRUksbUNBQU8sRUFBQyxVQUZaO0FBQUE7QUFBQSw0QkFUSjtBQUFBLDBCQURKLGVBaUJJO0FBQUssbUNBQVMsRUFBQyw4QkFBZjtBQUFBLGtEQUNJLHVHQUNRQSxLQURSO0FBRUkscUNBQVMsRUFBQyxrQkFGZDtBQUdJLGdDQUFJLEVBQUMsT0FIVDtBQUlJLGdDQUFJLEVBQUMsb0JBSlQ7QUFLSSw4QkFBRSxFQUFDLFVBTFA7QUFNSSxpQ0FBSyxFQUFDO0FBTlYsNkJBREosZUFTSTtBQUNJLHFDQUFTLEVBQUMsa0JBRGQ7QUFFSSxtQ0FBTyxFQUFDLFVBRlo7QUFBQTtBQUFBLDRCQVRKO0FBQUEsMEJBakJKLGVBZ0NJO0FBQUssbUNBQVMsRUFBQyw4QkFBZjtBQUFBLGtEQUNJLHVHQUNRQSxLQURSO0FBRUkscUNBQVMsRUFBQyxrQkFGZDtBQUdJLGdDQUFJLEVBQUMsT0FIVDtBQUlJLGdDQUFJLEVBQUMsb0JBSlQ7QUFLSSw4QkFBRSxFQUFDLFVBTFA7QUFNSSxpQ0FBSyxFQUFDO0FBTlYsNkJBREosZUFTSTtBQUNJLHFDQUFTLEVBQUMsa0JBRGQ7QUFFSSxtQ0FBTyxFQUFDLFVBRlo7QUFBQTtBQUFBLDRCQVRKO0FBQUEsMEJBaENKO0FBQUEsd0JBSEg7QUFBQTtBQURMLG9CQURILEdBc0RjLEVBaEdKLEVBa0dWRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsTUFBTSxDQUFDVCxNQUFuQixDQWxHVSxlQW1HWDtBQUFLLDZCQUFTLEVBQUMsWUFBZjtBQUFBLDJDQUNJLDhEQUFDLDRDQUFEO0FBQU8sMEJBQUksRUFBQyxzQkFBWjtBQUFBLGdDQUNLO0FBQUEsNEJBQ0tVLEtBREwsU0FDS0EsS0FETDtBQUFBLCtDQUVLSyxJQUZMO0FBQUEsNEJBRWFDLE9BRmIsY0FFYUEsT0FGYjtBQUFBLDRCQUVzQkMsTUFGdEIsY0FFc0JBLE1BRnRCO0FBQUEsNENBSUc7QUFBQSxrREFDSTtBQUNJLHFDQUFTLEVBQUMsMEJBRGQ7QUFFSSxtQ0FBTyxFQUFDLHNCQUZaO0FBQUEsb0RBSUksdUdBQ1FQLEtBRFI7QUFFSSxrQ0FBSSxFQUFDLFVBRlQ7QUFHSSx1Q0FBUyxFQUFDO0FBSGQsK0JBSkosZUFTSTtBQUFPLHVDQUFTLEVBQUMsc0JBQWpCO0FBQUEsdURBQ2UsR0FEZixlQUVJO0FBQ0ksdUNBQU8sRUFBRXhCLFVBRGI7QUFFSSx5Q0FBUyxFQUFDLGNBRmQ7QUFBQSxnRkFJc0NYLE9BSnRDO0FBQUEsZ0NBRko7QUFBQSw4QkFUSjtBQUFBLDRCQURKLGVBcUJJO0FBQ0ksOEJBQUUsRUFBQyxlQURQO0FBRUkscUNBQVMsc0JBQ1F5QyxPQUFPLENBQUNFLG9CQUFSLElBQWdDRCxNQUFNLENBQUNDLG9CQUF2QyxHQUE4RCxZQUE5RCxHQUE2RSxFQURyRixDQUZiO0FBQUEsc0NBS0tGLE9BQU8sQ0FBQ0Usb0JBQVIsSUFBZ0NELE1BQU0sQ0FBQ0Msb0JBQXZDLEdBQThERCxNQUFNLENBQUNDLG9CQUFyRSxHQUE0RjtBQUxqRyw0QkFyQkosZUE0QkksOERBQUMsc0RBQUQ7QUFDSSxnQ0FBSSxFQUFFbkMsU0FEVjtBQUVJLGtDQUFNLEVBQUVFO0FBRlosNEJBNUJKO0FBQUEsMEJBSkg7QUFBQTtBQURMO0FBREosb0JBbkdXLGVBNklYO0FBQUssNkJBQVMsRUFBQyxtQ0FBZjtBQUFBLDJDQUNJO0FBQ0ksMEJBQUksRUFBQyxRQURUO0FBRUksd0JBQUUsRUFBRUUsVUFBVSxHQUFHLENBQWIsR0FBaUIsU0FBakIsR0FBNkIsNkJBRnJDO0FBR0ksK0JBQVMsRUFBQyw2QkFIZDtBQUlJLDhCQUFRLEVBQUUsRUFBRXNCLE1BQU0sQ0FBQ1UsT0FBUCxJQUFrQlYsTUFBTSxDQUFDVyxLQUEzQixDQUpkO0FBQUEsZ0NBTUtqQyxVQUFVLEdBQUcsQ0FBYixHQUFpQixVQUFqQixHQUE4QjtBQU5uQztBQURKLG9CQTdJVztBQUFBLGtCQUZuQjtBQUFBLGdCQUZIO0FBQUE7QUFMTCxZQUZKO0FBQUEsVUFUSjtBQUFBO0FBREosTUFESixlQXNMSTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDZCQUNLO0FBQUssV0FBRyxFQUFFa0Msb0VBQVY7QUFBa0IsV0FBRyxFQUFDO0FBQXRCO0FBREwsTUF0TEo7QUFBQSxJQURKO0FBNExILENBeE9NOztHQUFNcEQsTTs7S0FBQUEsTTtBQTBPTixJQUFNcUQsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFHcEQsUUFBSCxTQUFHQSxRQUFIO0FBQUEsU0FBa0JBLFFBQWxCO0FBQUEsQ0FBbkI7TUFBTW9ELFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTdkMGUzZjA3NGVlNzNkYzE1NzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBGb3JtaWssIEZpZWxkIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgam92ZW4yIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL3N2Zy9qb3ZlbjIuc3ZnXCJcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSAncmVhY3Qtc3RlcHBlci1ob3Jpem9udGFsJztcclxuaW1wb3J0IFRlcm1pbm9zTW9kYWwgZnJvbSBcIi4vVGVybWlub3NNb2RhbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsZWVwID0gbXMgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFdpemFyZCA9ICh7IGNoaWxkcmVuLCBpbml0aWFsVmFsdWVzLCBvblN1Ym1pdCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgYWFjZW50byA9IFwiXFx1MDBlMVwiO1xyXG4gICAgY29uc3QgZWFjZW50byA9IFwiXFx1MDBlOVwiO1xyXG4gICAgY29uc3QgaWFjZW50byA9IFwiXFx1MDBlZFwiO1xyXG4gICAgY29uc3Qgb2FjZW50byA9IFwiXFx1MDBmM1wiO1xyXG4gICAgY29uc3QgdWFjZW50byA9IFwiXFx1MDBmYVwiO1xyXG4gICAgY29uc3QgZW5oZSA9ICdcXHUwMGYxJztcclxuICAgIGNvbnN0IGludGVycm9nYWNpb24gPSAnXFx1MDBCRic7XHJcbiAgICBjb25zdCBjb21pbGxhSXpxdWllcmRhID0gJ1xcdTIwMUMnO1xyXG4gICAgY29uc3QgY29taWxsYURlcmVjaGEgPSAnXFx1MjAxRCc7XHJcblxyXG4gICAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0TW9kYWxTaG93KGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZVNob3cgPSAoKSA9PiBzZXRNb2RhbFNob3codHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgW3N0ZXBOdW1iZXIsIHNldFN0ZXBOdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBzdGVwcyA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xyXG4gICAgY29uc3QgW3NuYXBzaG90LCBzZXRTbmFwc2hvdF0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWVzKTtcclxuXHJcbiAgICBjb25zdCBzdGVwID0gc3RlcHNbc3RlcE51bWJlcl07XHJcbiAgICBjb25zdCB0b3RhbFN0ZXBzID0gc3RlcHMubGVuZ3RoO1xyXG4gICAgY29uc3QgaXNMYXN0U3RlcCA9IHN0ZXBOdW1iZXIgPT09IHRvdGFsU3RlcHMgLSAxO1xyXG5cclxuICAgIGNvbnN0IG5leHQgPSB2YWx1ZXMgPT4ge1xyXG4gICAgICAgIHNldFNuYXBzaG90KHZhbHVlcyk7XHJcbiAgICAgICAgc2V0U3RlcE51bWJlcihNYXRoLm1pbihzdGVwTnVtYmVyICsgMSwgdG90YWxTdGVwcyAtIDEpKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMsIGJhZykgPT4ge1xyXG4gICAgICAgIGlmIChzdGVwLnByb3BzLm9uU3VibWl0KSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHN0ZXAucHJvcHMub25TdWJtaXQodmFsdWVzLCBiYWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNMYXN0U3RlcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gb25TdWJtaXQodmFsdWVzLCBiYWcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJhZy5zZXRUb3VjaGVkKHt9KTtcclxuICAgICAgICAgICAgbmV4dCh2YWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC0xMCBibG9xdWUgZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGZvcm11bGFyaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RlcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcHM9e1t7IHRpdGxlOiAnJyB9LCB7IHRpdGxlOiAnJyB9ICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU3RlcD17c3RlcE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNvbG9yPXtcIiM3MkI1MDBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlQ29sb3I9e1wiIzcyQjUwMFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbm9jZSBjdXthYWNlbnRvfWwgZXMgbGEgQWZwIHF1ZSBoYWNlIGNyZWNlciB0dXMgYWhvcnJvczo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3NuYXBzaG90fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e3N0ZXAucHJvcHMudmFsaWRhdGlvblNjaGVtYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhmb3JtaWspID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNMYXN0U3RlcCAmJiA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gSW5kaWNhbm9zIHNpIHJldGlyYXN0ZSBlbCAxMCU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInJldGlybzEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXRpcm8xMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW5saW5lUmFkaW8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImlubGluZVJhZGlvMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmV0aXJvMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlubGluZVJhZGlvMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiaW5saW5lUmFkaW8yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Tm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1pay52YWx1ZXMucmV0aXJvMTAgPT09IFwidHJ1ZVwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInJldGlyb3NfcmVhbGl6YWRvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmV0aXJvc19yZWFsaXphZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmV0aXJvczFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJyZXRpcm9zMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaW1lcm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmV0aXJvc19yZWFsaXphZG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmV0aXJvczJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJyZXRpcm9zMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TZWd1bmRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJldGlyb3NfcmVhbGl6YWRvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJldGlyb3MzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicmV0aXJvczNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+QW1ib3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+IDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhmb3JtaWsudmFsdWVzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwidGVybWlub3N5Y29uZGljaW9uZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtOiB7IHRvdWNoZWQsIGVycm9ycyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWwgbXQtYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ0ZXJtaW5vc3ljb25kaWNpb25lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRlcm1pbm9zeWNvbmRpY2lvbmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2VwdG8gbGFze1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLXdpemFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGljaW9uZXMgZGVsIHNlcnZpY2lvIHkgbGEgcG9se2lhY2VudG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGljYSBkZSBwcml2YWNpZGFkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGVybWlub3NBeXVkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZm9ybS10ZXh0ICR7dG91Y2hlZC50ZXJtaW5vc3ljb25kaWNpb25lcyAmJiBlcnJvcnMudGVybWlub3N5Y29uZGljaW9uZXMgPyAnaXMtaW52YWxpZCcgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdWNoZWQudGVybWlub3N5Y29uZGljaW9uZXMgJiYgZXJyb3JzLnRlcm1pbm9zeWNvbmRpY2lvbmVzID8gZXJyb3JzLnRlcm1pbm9zeWNvbmRpY2lvbmVzIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXJtaW5vc01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wganVzdGlmeS1jb250ZW50LWNlbnRlciBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17c3RlcE51bWJlciA+IDAgPyAnUDJfbGVhZCcgOiAnUDFfaW5ncmVzb19kYXRvc19wZXJzb25hbGVzJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLWJsb2NrIHB1cnBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshKGZvcm1pay5pc1ZhbGlkICYmIGZvcm1pay5kaXJ0eSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcE51bWJlciA+IDAgPyAnQ2FsY3VsYXInIDogJ0NvbWVuemFyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBkZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgICB7PGltZyBzcmM9e2pvdmVuMn0gYWx0PVwiam92ZW4gbW9kZWxvXCIgLz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBXaXphcmRTdGVwID0gKHsgY2hpbGRyZW4gfSkgPT4gY2hpbGRyZW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
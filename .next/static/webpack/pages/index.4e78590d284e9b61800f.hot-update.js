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
                  }), formik.values.retiro10 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
                    name: "retiro10",
                    children: function children(_ref4) {
                      var field = _ref4.field,
                          meta = _ref4.meta;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaXphcmRDb21wb25lbnQuanMiXSwibmFtZXMiOlsic2xlZXAiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIldpemFyZCIsImNoaWxkcmVuIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwiYWFjZW50byIsImVhY2VudG8iLCJpYWNlbnRvIiwib2FjZW50byIsInVhY2VudG8iLCJlbmhlIiwiaW50ZXJyb2dhY2lvbiIsImNvbWlsbGFJenF1aWVyZGEiLCJjb21pbGxhRGVyZWNoYSIsInVzZVN0YXRlIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTaG93Iiwic3RlcE51bWJlciIsInNldFN0ZXBOdW1iZXIiLCJzdGVwcyIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5Iiwic25hcHNob3QiLCJzZXRTbmFwc2hvdCIsInN0ZXAiLCJ0b3RhbFN0ZXBzIiwibGVuZ3RoIiwiaXNMYXN0U3RlcCIsIm5leHQiLCJ2YWx1ZXMiLCJNYXRoIiwibWluIiwiaGFuZGxlU3VibWl0IiwiYmFnIiwicHJvcHMiLCJzZXRUb3VjaGVkIiwidGl0bGUiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiZm9ybWlrIiwiZmllbGQiLCJtZXRhIiwicmV0aXJvMTAiLCJjb25zb2xlIiwibG9nIiwiZm9ybSIsInRvdWNoZWQiLCJlcnJvcnMiLCJ0ZXJtaW5vc3ljb25kaWNpb25lcyIsImlzVmFsaWQiLCJkaXJ0eSIsImpvdmVuMiIsIldpemFyZFN0ZXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUFDLEVBQUU7QUFBQSxTQUFJLElBQUlDLE9BQUosQ0FBWSxVQUFBQyxPQUFPO0FBQUEsV0FBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLEVBQVYsQ0FBZDtBQUFBLEdBQW5CLENBQUo7QUFBQSxDQUFoQjtBQUdBLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTJDO0FBQUE7O0FBQUEsTUFBeENDLFNBQXdDLFFBQXhDQSxRQUF3QztBQUFBLE1BQTlCQyxhQUE4QixRQUE5QkEsYUFBOEI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFFN0QsTUFBTUMsT0FBTyxHQUFHLE1BQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQWhCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQWhCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLE1BQWI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsTUFBdEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxRQUF6QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxRQUF2Qjs7QUFWNkQsa0JBWTNCQyxzREFBUSxDQUFDLEtBQUQsQ0FabUI7QUFBQSxNQVl0REMsU0Fac0Q7QUFBQSxNQVkzQ0MsWUFaMkM7O0FBYTdELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTUQsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxHQUFwQjs7QUFDQSxNQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1GLFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUEsR0FBbkI7O0FBZDZELG1CQWdCekJGLHNEQUFRLENBQUMsQ0FBRCxDQWhCaUI7QUFBQSxNQWdCdERLLFVBaEJzRDtBQUFBLE1BZ0IxQ0MsYUFoQjBDOztBQWlCN0QsTUFBTUMsS0FBSyxHQUFHQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJ0QixTQUF2QixDQUFkOztBQWpCNkQsbUJBa0I3Qlksc0RBQVEsQ0FBQ1gsYUFBRCxDQWxCcUI7QUFBQSxNQWtCdERzQixRQWxCc0Q7QUFBQSxNQWtCNUNDLFdBbEI0Qzs7QUFvQjdELE1BQU1DLElBQUksR0FBR04sS0FBSyxDQUFDRixVQUFELENBQWxCO0FBQ0EsTUFBTVMsVUFBVSxHQUFHUCxLQUFLLENBQUNRLE1BQXpCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHWCxVQUFVLEtBQUtTLFVBQVUsR0FBRyxDQUEvQzs7QUFFQSxNQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFBQyxNQUFNLEVBQUk7QUFDbkJOLGVBQVcsQ0FBQ00sTUFBRCxDQUFYO0FBQ0FaLGlCQUFhLENBQUNhLElBQUksQ0FBQ0MsR0FBTCxDQUFTZixVQUFVLEdBQUcsQ0FBdEIsRUFBeUJTLFVBQVUsR0FBRyxDQUF0QyxDQUFELENBQWI7QUFDSCxHQUhEOztBQU1BLE1BQU1PLFlBQVk7QUFBQSxpTUFBRyxpQkFBT0gsTUFBUCxFQUFlSSxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDYlQsSUFBSSxDQUFDVSxLQUFMLENBQVdqQyxRQURFO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBRVB1QixJQUFJLENBQUNVLEtBQUwsQ0FBV2pDLFFBQVgsQ0FBb0I0QixNQUFwQixFQUE0QkksR0FBNUIsQ0FGTzs7QUFBQTtBQUFBLG1CQUliTixVQUphO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQUtOMUIsUUFBUSxDQUFDNEIsTUFBRCxFQUFTSSxHQUFULENBTEY7O0FBQUE7QUFPYkEsaUJBQUcsQ0FBQ0UsVUFBSixDQUFlLEVBQWY7QUFDQVAsa0JBQUksQ0FBQ0MsTUFBRCxDQUFKOztBQVJhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpHLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBY0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGlDQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsZ0NBQ0k7QUFBQSxpQ0FDSSw4REFBQywrREFBRDtBQUNJLGlCQUFLLEVBQUUsQ0FBQztBQUFFSSxtQkFBSyxFQUFFO0FBQVQsYUFBRCxFQUFnQjtBQUFFQSxtQkFBSyxFQUFFO0FBQVQsYUFBaEIsQ0FEWDtBQUVJLHNCQUFVLEVBQUVwQixVQUZoQjtBQUdJLHVCQUFXLEVBQUUsU0FIakI7QUFJSSx5QkFBYSxFQUFFO0FBSm5CO0FBREosVUFESixlQVNJO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0k7QUFBQSxvQ0FBYWQsT0FBYjtBQUFBLFlBREosZUFFSSw4REFBQyw2Q0FBRDtBQUNJLHlCQUFhLEVBQUVvQixRQURuQjtBQUVJLG9CQUFRLEVBQUVVLFlBRmQ7QUFHSSw0QkFBZ0IsRUFBRVIsSUFBSSxDQUFDVSxLQUFMLENBQVdHLGdCQUhqQztBQUFBLHNCQUtLLGtCQUFDQyxNQUFEO0FBQUEsa0NBRUcsK0RBQUMsMkNBQUQ7QUFBQSwyQkFDS2QsSUFETCxlQUVJO0FBQUssMkJBQVMsRUFBQywyQ0FBZjtBQUFBLDBDQUNJO0FBQUE7QUFBQSxvQkFESixlQUVJLDhEQUFDLDRDQUFEO0FBQU8sd0JBQUksRUFBQyxVQUFaO0FBQUEsOEJBQ0s7QUFBQSwwQkFDS2UsS0FETCxTQUNLQSxLQURMO0FBQUEsMEJBRUtDLElBRkwsU0FFS0EsSUFGTDtBQUFBLDBDQUlHO0FBQUssaUNBQVMsRUFBQywwQkFBZjtBQUFBLGdEQUNJO0FBQUssbUNBQVMsRUFBQyw4QkFBZjtBQUFBLGtEQUNJLHVHQUNRRCxLQURSO0FBRUkscUNBQVMsRUFBQyxrQkFGZDtBQUdJLGdDQUFJLEVBQUMsT0FIVDtBQUlJLGdDQUFJLEVBQUMsVUFKVDtBQUtJLDhCQUFFLEVBQUMsY0FMUDtBQU1JLGlDQUFLLEVBQUM7QUFOViw2QkFESixlQVNJO0FBQ0kscUNBQVMsRUFBQyxrQkFEZDtBQUVJLG1DQUFPLEVBQUMsY0FGWjtBQUFBO0FBQUEsNEJBVEo7QUFBQSwwQkFESixlQWlCSTtBQUFLLG1DQUFTLEVBQUMsOEJBQWY7QUFBQSxrREFDSSx1R0FDUUEsS0FEUjtBQUVJLHFDQUFTLEVBQUMsa0JBRmQ7QUFHSSxnQ0FBSSxFQUFDLE9BSFQ7QUFJSSxnQ0FBSSxFQUFDLFVBSlQ7QUFLSSw4QkFBRSxFQUFDLGNBTFA7QUFNSSxpQ0FBSyxFQUFDO0FBTlYsNkJBREosZUFTSTtBQUNJLHFDQUFTLEVBQUMsa0JBRGQ7QUFFSSxtQ0FBTyxFQUFDLGNBRlo7QUFBQTtBQUFBLDRCQVRKO0FBQUEsMEJBakJKO0FBQUEsd0JBSkg7QUFBQTtBQURMLG9CQUZKLEVBMENLRCxNQUFNLENBQUNULE1BQVAsQ0FBY1ksUUFBZCxpQkFDRCw4REFBQyw0Q0FBRDtBQUFPLHdCQUFJLEVBQUMsVUFBWjtBQUFBLDhCQUNLO0FBQUEsMEJBQ0tGLEtBREwsU0FDS0EsS0FETDtBQUFBLDBCQUVLQyxJQUZMLFNBRUtBLElBRkw7QUFBQSwwQ0FJRztBQUFLLGlDQUFTLEVBQUMsMEJBQWY7QUFBQSxnREFDSTtBQUFLLG1DQUFTLEVBQUMsOEJBQWY7QUFBQSxrREFDSSx1R0FDUUQsS0FEUjtBQUVJLHFDQUFTLEVBQUMsa0JBRmQ7QUFHSSxnQ0FBSSxFQUFDLE9BSFQ7QUFJSSxnQ0FBSSxFQUFDLFVBSlQ7QUFLSSw4QkFBRSxFQUFDLGNBTFA7QUFNSSxpQ0FBSyxFQUFDO0FBTlYsNkJBREosZUFTSTtBQUNJLHFDQUFTLEVBQUMsa0JBRGQ7QUFFSSxtQ0FBTyxFQUFDLGNBRlo7QUFBQTtBQUFBLDRCQVRKO0FBQUEsMEJBREosZUFpQkk7QUFBSyxtQ0FBUyxFQUFDLDhCQUFmO0FBQUEsa0RBQ0ksdUdBQ1FBLEtBRFI7QUFFSSxxQ0FBUyxFQUFDLGtCQUZkO0FBR0ksZ0NBQUksRUFBQyxPQUhUO0FBSUksZ0NBQUksRUFBQyxVQUpUO0FBS0ksOEJBQUUsRUFBQyxjQUxQO0FBTUksaUNBQUssRUFBQztBQU5WLDZCQURKLGVBU0k7QUFDSSxxQ0FBUyxFQUFDLGtCQURkO0FBRUksbUNBQU8sRUFBQyxjQUZaO0FBQUE7QUFBQSw0QkFUSjtBQUFBLDBCQWpCSjtBQUFBLHdCQUpIO0FBQUE7QUFETCxvQkEzQ0osRUFvRktHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxNQUFNLENBQUNULE1BQW5CLENBcEZMLGVBcUZJO0FBQUssNkJBQVMsRUFBQyxZQUFmO0FBQUEsMkNBQ0ksOERBQUMsNENBQUQ7QUFBTywwQkFBSSxFQUFDLHNCQUFaO0FBQUEsZ0NBQ0s7QUFBQSw0QkFDS1UsS0FETCxTQUNLQSxLQURMO0FBQUEsK0NBRUtLLElBRkw7QUFBQSw0QkFFYUMsT0FGYixjQUVhQSxPQUZiO0FBQUEsNEJBRXNCQyxNQUZ0QixjQUVzQkEsTUFGdEI7QUFBQSw0Q0FJRztBQUFBLGtEQUNJO0FBQ0kscUNBQVMsRUFBQywwQkFEZDtBQUVJLG1DQUFPLEVBQUMsc0JBRlo7QUFBQSxvREFJSSx1R0FDUVAsS0FEUjtBQUVJLGtDQUFJLEVBQUMsVUFGVDtBQUdJLHVDQUFTLEVBQUM7QUFIZCwrQkFKSixlQVNJO0FBQU8sdUNBQVMsRUFBQyxzQkFBakI7QUFBQSx1REFDZSxHQURmLGVBRUk7QUFDSSx1Q0FBTyxFQUFFeEIsVUFEYjtBQUVJLHlDQUFTLEVBQUMsY0FGZDtBQUFBLGdGQUlzQ1gsT0FKdEM7QUFBQSxnQ0FGSjtBQUFBLDhCQVRKO0FBQUEsNEJBREosZUFxQkk7QUFDSSw4QkFBRSxFQUFDLGVBRFA7QUFFSSxxQ0FBUyxzQkFDUXlDLE9BQU8sQ0FBQ0Usb0JBQVIsSUFBZ0NELE1BQU0sQ0FBQ0Msb0JBQXZDLEdBQThELFlBQTlELEdBQTZFLEVBRHJGLENBRmI7QUFBQSxzQ0FLS0YsT0FBTyxDQUFDRSxvQkFBUixJQUFnQ0QsTUFBTSxDQUFDQyxvQkFBdkMsR0FBOERELE1BQU0sQ0FBQ0Msb0JBQXJFLEdBQTRGO0FBTGpHLDRCQXJCSixlQTRCSSw4REFBQyxzREFBRDtBQUNJLGdDQUFJLEVBQUVuQyxTQURWO0FBRUksa0NBQU0sRUFBRUU7QUFGWiw0QkE1Qko7QUFBQSwwQkFKSDtBQUFBO0FBREw7QUFESixvQkFyRkosZUErSEk7QUFBSyw2QkFBUyxFQUFDLG1DQUFmO0FBQUEsMkNBQ0k7QUFDSSwwQkFBSSxFQUFDLFFBRFQ7QUFFSSx3QkFBRSxFQUFFRSxVQUFVLEdBQUcsQ0FBYixHQUFpQixTQUFqQixHQUE2Qiw2QkFGckM7QUFHSSwrQkFBUyxFQUFDLDZCQUhkO0FBSUksOEJBQVEsRUFBRSxFQUFFc0IsTUFBTSxDQUFDVSxPQUFQLElBQWtCVixNQUFNLENBQUNXLEtBQTNCLENBSmQ7QUFBQSxnQ0FNS2pDLFVBQVUsR0FBRyxDQUFiLEdBQWlCLFVBQWpCLEdBQThCO0FBTm5DO0FBREosb0JBL0hKO0FBQUEsa0JBRko7QUFBQSxnQkFGSDtBQUFBO0FBTEwsWUFGSjtBQUFBLFVBVEo7QUFBQTtBQURKLE1BREosZUF1S0k7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw2QkFDSztBQUFLLFdBQUcsRUFBRWtDLG9FQUFWO0FBQWtCLFdBQUcsRUFBQztBQUF0QjtBQURMLE1BdktKO0FBQUEsSUFESjtBQTZLSCxDQXpOTTs7R0FBTXBELE07O0tBQUFBLE07QUEyTk4sSUFBTXFELFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR3BELFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQWtCQSxRQUFsQjtBQUFBLENBQW5CO01BQU1vRCxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRlNzg1OTBkMjg0ZTliNjE4MDBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgRm9ybWlrLCBGaWVsZCB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IGpvdmVuMiBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9zdmcvam92ZW4yLnN2Z1wiXHJcbmltcG9ydCBTdGVwcGVyIGZyb20gJ3JlYWN0LXN0ZXBwZXItaG9yaXpvbnRhbCc7XHJcbmltcG9ydCBUZXJtaW5vc01vZGFsIGZyb20gXCIuL1Rlcm1pbm9zTW9kYWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGVlcCA9IG1zID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBXaXphcmQgPSAoeyBjaGlsZHJlbiwgaW5pdGlhbFZhbHVlcywgb25TdWJtaXQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGFhY2VudG8gPSBcIlxcdTAwZTFcIjtcclxuICAgIGNvbnN0IGVhY2VudG8gPSBcIlxcdTAwZTlcIjtcclxuICAgIGNvbnN0IGlhY2VudG8gPSBcIlxcdTAwZWRcIjtcclxuICAgIGNvbnN0IG9hY2VudG8gPSBcIlxcdTAwZjNcIjtcclxuICAgIGNvbnN0IHVhY2VudG8gPSBcIlxcdTAwZmFcIjtcclxuICAgIGNvbnN0IGVuaGUgPSAnXFx1MDBmMSc7XHJcbiAgICBjb25zdCBpbnRlcnJvZ2FjaW9uID0gJ1xcdTAwQkYnO1xyXG4gICAgY29uc3QgY29taWxsYUl6cXVpZXJkYSA9ICdcXHUyMDFDJztcclxuICAgIGNvbnN0IGNvbWlsbGFEZXJlY2hhID0gJ1xcdTIwMUQnO1xyXG5cclxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldE1vZGFsU2hvdyhmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0TW9kYWxTaG93KHRydWUpO1xyXG5cclxuICAgIGNvbnN0IFtzdGVwTnVtYmVyLCBzZXRTdGVwTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgc3RlcHMgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcclxuICAgIGNvbnN0IFtzbmFwc2hvdCwgc2V0U25hcHNob3RdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlcyk7XHJcblxyXG4gICAgY29uc3Qgc3RlcCA9IHN0ZXBzW3N0ZXBOdW1iZXJdO1xyXG4gICAgY29uc3QgdG90YWxTdGVwcyA9IHN0ZXBzLmxlbmd0aDtcclxuICAgIGNvbnN0IGlzTGFzdFN0ZXAgPSBzdGVwTnVtYmVyID09PSB0b3RhbFN0ZXBzIC0gMTtcclxuXHJcbiAgICBjb25zdCBuZXh0ID0gdmFsdWVzID0+IHtcclxuICAgICAgICBzZXRTbmFwc2hvdCh2YWx1ZXMpO1xyXG4gICAgICAgIHNldFN0ZXBOdW1iZXIoTWF0aC5taW4oc3RlcE51bWJlciArIDEsIHRvdGFsU3RlcHMgLSAxKSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAodmFsdWVzLCBiYWcpID0+IHtcclxuICAgICAgICBpZiAoc3RlcC5wcm9wcy5vblN1Ym1pdCkge1xyXG4gICAgICAgICAgICBhd2FpdCBzdGVwLnByb3BzLm9uU3VibWl0KHZhbHVlcywgYmFnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTGFzdFN0ZXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9uU3VibWl0KHZhbHVlcywgYmFnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBiYWcuc2V0VG91Y2hlZCh7fSk7XHJcbiAgICAgICAgICAgIG5leHQodmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtMTAgYmxvcXVlIGZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBmb3JtdWxhcmlvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0ZXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBzPXtbeyB0aXRsZTogJycgfSwgeyB0aXRsZTogJycgfSAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN0ZXA9e3N0ZXBOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcj17XCIjNzJCNTAwXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZUNvbG9yPXtcIiM3MkI1MDBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Db25vY2UgY3V7YWFjZW50b31sIGVzIGxhIEFmcCBxdWUgaGFjZSBjcmVjZXIgdHVzIGFob3Jyb3M6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtzbmFwc2hvdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtzdGVwLnByb3BzLnZhbGlkYXRpb25TY2hlbWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoZm9ybWlrKSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RlcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IEluZGljYW5vcyBzaSByZXRpcmFzdGUgZWwgMTAlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJyZXRpcm8xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGlucHV0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmV0aXJvMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlubGluZVJhZGlvMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJpbmxpbmVSYWRpbzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJldGlybzEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpbmxpbmVSYWRpbzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImlubGluZVJhZGlvMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPk5vXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtaWsudmFsdWVzLnJldGlybzEwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInJldGlybzEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXRpcm8xMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW5saW5lUmFkaW8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImlubGluZVJhZGlvMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmV0aXJvMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlubGluZVJhZGlvMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiaW5saW5lUmFkaW8yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Tm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKGZvcm1pay52YWx1ZXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJ0ZXJtaW5vc3ljb25kaWNpb25lc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IHsgdG91Y2hlZCwgZXJyb3JzIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbCBtdC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInRlcm1pbm9zeWNvbmRpY2lvbmVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGVybWlub3N5Y29uZGljaW9uZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjZXB0byBsYXN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3d9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtd2l6YXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaWNpb25lcyBkZWwgc2VydmljaW8geSBsYSBwb2x7aWFjZW50b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNhIGRlIHByaXZhY2lkYWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZXJtaW5vc0F5dWRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBmb3JtLXRleHQgJHt0b3VjaGVkLnRlcm1pbm9zeWNvbmRpY2lvbmVzICYmIGVycm9ycy50ZXJtaW5vc3ljb25kaWNpb25lcyA/ICdpcy1pbnZhbGlkJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dG91Y2hlZC50ZXJtaW5vc3ljb25kaWNpb25lcyAmJiBlcnJvcnMudGVybWlub3N5Y29uZGljaW9uZXMgPyBlcnJvcnMudGVybWlub3N5Y29uZGljaW9uZXMgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRlcm1pbm9zTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzdGVwTnVtYmVyID4gMCA/ICdQMl9sZWFkJyA6ICdQMV9pbmdyZXNvX2RhdG9zX3BlcnNvbmFsZXMnIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tYmxvY2sgcHVycGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyEoZm9ybWlrLmlzVmFsaWQgJiYgZm9ybWlrLmRpcnR5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGVwTnVtYmVyID4gMCA/ICdDYWxjdWxhcicgOiAnQ29tZW56YXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBkZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgICB7PGltZyBzcmM9e2pvdmVuMn0gYWx0PVwiam92ZW4gbW9kZWxvXCIgLz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBXaXphcmRTdGVwID0gKHsgY2hpbGRyZW4gfSkgPT4gY2hpbGRyZW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
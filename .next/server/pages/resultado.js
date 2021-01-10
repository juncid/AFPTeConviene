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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/resultado.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/resultado.jsx":
/*!*****************************!*\
  !*** ./pages/resultado.jsx ***!
  \*****************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resultado; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_svg_mujersac_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/assets/svg/mujersac.svg */ "./public/assets/svg/mujersac.svg");
/* harmony import */ var _public_assets_svg_mujersac_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_assets_svg_mujersac_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_assets_svg_corazon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/svg/corazon.svg */ "./public/assets/svg/corazon.svg");
/* harmony import */ var _public_assets_svg_corazon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_svg_corazon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/postAction */ "./store/actions/postAction.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-text-mask */ "react-text-mask");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_inputMask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/inputMask */ "./utils/inputMask.js");
/* harmony import */ var _utils_cleanInputMask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/cleanInputMask */ "./utils/cleanInputMask.js");














function Resultado(props) {
  const aacento = "\u00e1";
  const eacento = "\u00e9";
  const iacento = "\u00ed";
  const oacento = "\u00f3";
  const uacento = "\u00fa";
  const enhe = '\u00f1';
  const interrogacion = '\u00BF';
  const comillaIzquierda = '\u201C';
  const comillaDerecha = '\u201D';
  const headers = {
    "Content-Type": "application/json"
  };
  const {
    0: modalShow,
    1: setModalShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleClose = () => setModalShow(false);

  const handleShow = () => setModalShow(true);

  const {
    0: regimenData,
    1: setRegimenData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});

  const handleSubmit = values => {
    setIsLoading(true);
    /*
    const nombre = regimenData.nombre !== undefined && regimenData.nombre;
    const rutPrimero = regimenData.rut !== undefined && regimenData.rut;
    const rutDv = regimenData.rutDv !== undefined && regimenData.rutDv;
    const rut = rutPrimero + "-" + rutDv;
    const correo = regimenData.correo !== undefined && regimenData.correo;
    const celular = regimenData.celular !== undefined && regimenData.celular;
    const sueldo = regimenData.sueldoLiquidoConsulta !== undefined && regimenData.sueldoLiquidoConsulta;
      const body = {
        nombre: nombre,
        rut: rut,
        correo: correo,
        celular: celular,
        sueldo: sueldo,
        ahorro: cleanDigitos(values.ahorro)
    };
      axios
        .post(props.urlIngresarSimulacion, body, { headers: headers })
        .then((response) => {
            let data = response.data;
              if (data.idSimulacion) {
                setRegimenData(data);
            }
              setIsLoading(false);
        })
        .catch(e => {
            console.log(e);
        });
    */
  };

  const texto_regimen = `En  base a tu renta mensual y el monto del aporte quieres realizar el 15% de bonificaci${oacento}n por parte del Estado es el que m${aacento}s te conviene.`;
  const body_eventos = {
    "sessionId": "string",
    "eventoId": 0,
    "result0": 0,
    "result1": 0,
    "result2": 0,
    "rut": props.rut
  };

  function contactarme() {
    body_eventos.EventoId = 8;
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(props.urlIngresarEvento, body_eventos, {
      headers: headers
    }).then(response => {
      let data = response.data;

      if (data) {
        window.location.href = "/solicitud";
      }
    }).catch(e => {
      console.log(e);
    });
  }

  function apertura_afiliado() {
    body_eventos.EventoId = 10;
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(props.urlIngresarEvento, body_eventos, {
      headers: headers
    }).then(response => {
      let data = response.data;

      if (data) {
        window.location.href = "https://www.afpmodelo.cl/Portal-Afiliado/Operaciones/Ahorro-Previsional-Voluntario/Mi-APV/Abrir-un-APV-Paso1.aspx?acceder&utm_source=QueAPVConviene&utm_medium=referal&utm_campaign=QueAPVConviene&utm_content=BotonAccion";
      }
    }).catch(e => {
      console.log(e);
    });
  }

  const dudas_texto = `Nuestros ejecutivos pueden asesorarte en l${iacento}nea o v${iacento}a tel${eacento}fonica. Queremos ayudarte a resolver todas tus inquietudes o darte todas las opciones para tu traspaso.`;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("title", {
        children: ["Ahorro Previsional Voluntario | Resultado Simulaci", oacento, "n | AFP Modelo"]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "description",
        content: `Aumenta tu sueldo l${iacento}quido, pagando una menor comisi${oacento}n de AFP. Simula tu aumento de sueldo al cambiarte a AFP Modelo.`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "robots",
        content: "noindex, follow"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "resultado",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "col-12 mx-auto text-left header",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "offset-1 d-flex justify-content-left flex-column",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "row",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h2", {
                  children: "Tus ahorros crecen con Afp Modelo "
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                  src: _public_assets_svg_corazon_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
                  alt: "corazon"
                })]
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "La combinanci\xF3n de la rentabilidad que obtienes con AFP Modelo menos la comisi\xF3n que pagar\xEDas da como resultado un mayor ahorro para ti."
              })]
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "col-md-5 offset-md-1 d-flex flex-column",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
              children: "El ahorro en tu fondo obligatario aumenta"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: "La rentabilidad obtenida en tu actual Afp versus la que podr\xEDas haber obtenido durante el mismo per\xEDodo de tiempo en AFP Modelo es mayor. Te invitamos a ver tu resultado."
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Table"], {
                  responsive: true,
                  className: "table-borderless",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("thead", {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        children: ''
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        className: "text-right",
                        children: ''
                      })]
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tbody", {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: "Rentabilidad AFP Actual:"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right",
                        children: "Valor A"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: "Rentabilidad AFP Modelo:"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right",
                        children: "Valor B"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "green-tabla",
                        children: "Diferencia de rentabilidad:"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right green-tabla",
                        children: "Valor C"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("td", {
                        children: ["Ahorro en comisi", oacento, "n"]
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right",
                        children: "VD = (VA-(VB-VC))"
                      })]
                    })]
                  })]
                })
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "col-md-5 d-flex flex-column calcularApv",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
              children: "C\xF3mo hacer crecer tu pensi\xF3n"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: "Tu ahorro en comisi\xF3n puede hacer la diferencia, en Modelo solo pagas un 0,77%. Si hubieras invertido este monto en un APV hoy en d\xEDa tendr\xEDas el siguiente monto:"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Card"].Body, {
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Table"], {
                  responsive: true,
                  className: "table-borderless",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("thead", {
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        children: ''
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("th", {
                        className: "text-right",
                        children: ''
                      })]
                    })
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tbody", {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("td", {
                        children: ["Ahorro en comisi", oacento, "n:"]
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right",
                        children: "Valor A"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: "Ahorro APV anual:"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right",
                        children: "Valor B"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("td", {
                        className: "green-tabla",
                        children: ["Bonificaci", oacento, "n fiscal:"]
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right green-tabla",
                        children: "Valor C"
                      })]
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        children: "Total APV"
                      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("td", {
                        className: "text-right",
                        children: "VD = (VA-(VB-VC))"
                      })]
                    })]
                  })]
                })
              })
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "row ctas",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "col-md-4 text-center d-block offset-md-2 container",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
              children: [interrogacion, "No eres afiliado de Afp Modelo?"]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "d-flex justify-content-center",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("button", {
                type: "button",
                id: "Apertura_Afiliado",
                className: "btn btn-lg btn-block",
                onClick: apertura_afiliado,
                children: ["C", aacento, "mbiate a AFP Modelo"]
              })
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "col-md-5 text-center d-block container",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
              children: [interrogacion, "Quieres saber los beneficios de abrir una APV? "]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "d-flex justify-content-center",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                type: "button",
                id: "Apertura_no_Afiliado",
                className: "btn btn-lg btn-block blueBtn",
                onClick: contactarme,
                children: "Ir a Que APV me conviene"
              })
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "row container-padre dudas",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "col-md-2 d-flex desktop",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: _public_assets_svg_mujersac_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
              alt: "Dudas"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "col-sm-12 col-md-6 offset-md-2 d-flex flex-column contenedor",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "txtDesktop parrafo2",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
                className: "container-title",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h2", {
                  children: [interrogacion, "A", uacento, "n tienes dudas?"]
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                  children: dudas_texto
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
                  type: "button",
                  id: "Solicitud_Contacto",
                  className: "btn btn-lg btn-block whiteBtn",
                  onClick: contactarme,
                  children: "Quiero que me contacten"
                })]
              })
            })
          })]
        })]
      })
    })]
  });
}
async function getServerSideProps(context) {
  const uriBackend = process.env.URI_BACKEND;
  const urlIngresarSimulacion = `${uriBackend}${process.env.URI_INGRESAR_SIMULACION}`;
  const urlIngresarEvento = `${uriBackend}${process.env.URI_ENVIAR_EVENTO}`;
  const {
    id
  } = context.query;
  /*
  const response = await axios
      .get(`${uriBackend}${process.env.URI_OBTENER_SIMULACION}?id=${id}`)
    const data = await response.data
  */

  const props = {
    //data,
    urlIngresarSimulacion,
    urlIngresarEvento
  };
  return {
    props: props
  };
}

/***/ }),

/***/ "./public/assets/svg/corazon.svg":
/*!***************************************!*\
  !*** ./public/assets/svg/corazon.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4NCiAgICAgICAgPHBhdGggZD0iTTU1LjI0NjkgMzQuNDM1NEM1OC43OTkxIDE5LjM4NSA0OS40NzggNC4zMDQ1NCAzNC40Mjc1IDAuNzUyMzA5QzE5LjM3NzEgLTIuNzk5OTIgNC4yOTY2MSA2LjUyMTIzIDAuNzQ0MzggMjEuNTcxN0MtMi44MDc4NSAzNi42MjIxIDYuNTEzMyA1MS43MDI2IDIxLjU2MzggNTUuMjU0OEMzNi42MTQyIDU4LjgwNyA1MS42OTQ3IDQ5LjQ4NTkgNTUuMjQ2OSAzNC40MzU0WiIgZmlsbD0iI0ZGM0M2RSIvPg0KICAgICAgICA8cGF0aCBkPSJNNDQuMzgzOSAyNC4wOTM5QzQ0LjM4MzkgMTguNjAzNCA0MC4xNDkyIDE0LjY3NTQgMzUuODI2OSAxNC42NzU0QzM0LjA3NTcgMTQuNjY4IDMyLjM2ODcgMTUuMjI1MSAzMC45NTg5IDE2LjI2NEMyOS41NDkxIDE3LjMwMjkgMjguNTExNiAxOC43Njg0IDI4IDIwLjQ0MzNDMjcuNDg4NSAxOC43Njg0IDI2LjQ1MSAxNy4zMDI5IDI1LjA0MTIgMTYuMjY0QzIzLjYzMTQgMTUuMjI1MSAyMS45MjQ0IDE0LjY2OCAyMC4xNzMyIDE0LjY3NTRDMTUuODUwOSAxNC42NzU0IDExLjYxNjIgMTguNjAzNCAxMS42MTYyIDI0LjA5MzlDMTEuNjE2MiAzMi40MTcyIDI0LjM4NiA0MS45NDUyIDI3LjUzMjggNDIuOTM4MkwyNy43MjI2IDQyLjk5NjZDMjcuODA2MiA0My4wMTggMjcuODkxOSA0My4wMzAzIDI3Ljk3ODEgNDMuMDMzMUgyOC4wMjE5QzI4LjExMDYgNDMuMDI5OCAyOC4xOTg2IDQzLjAxNzYgMjguMjg0OCA0Mi45OTY2TDI4LjQ2NzMgNDIuOTM4MkMzMS42MjE0IDQxLjkzMDYgNDQuMzgzOSAzMi40MDI2IDQ0LjM4MzkgMjQuMDkzOVoiIGZpbGw9IiNGREZERkQiLz4NCiAgICA8L2c+DQogICAgPGRlZnM+DQogICAgICAgIDxjbGlwUGF0aCBpZD0iY2xpcDAiPg0KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBmaWxsPSJ3aGl0ZSIvPg0KICAgICAgICA8L2NsaXBQYXRoPg0KICAgIDwvZGVmcz4NCjwvc3ZnPg=="

/***/ }),

/***/ "./public/assets/svg/mujersac.svg":
/*!****************************************!*\
  !*** ./public/assets/svg/mujersac.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mujersac-3d18626c60c9dbe99ab928e5fa2ec42d.svg";

/***/ }),

/***/ "./store/actions/postAction.js":
/*!*************************************!*\
  !*** ./store/actions/postAction.js ***!
  \*************************************/
/*! exports provided: fetchposts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchposts", function() { return fetchposts; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const fetchposts = () => async dispatch => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://apvbackendmanager.azurewebsites.net/ApvSimulacion/obtenerporid?id=7');
  console.log(res);
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS"],
    payload: res.data
  });
};

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

/***/ "./utils/cleanInputMask.js":
/*!*********************************!*\
  !*** ./utils/cleanInputMask.js ***!
  \*********************************/
/*! exports provided: cleanDigitos, cleanRut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanDigitos", function() { return cleanDigitos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanRut", function() { return cleanRut; });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_0__);

const cleanDigitos = value => {
  const regex = /[^\d]/g;
  return value.replace(regex, '');
};
const cleanRut = value => {
  const regex = /\./g;
  return value.replace(regex, '');
};

/***/ }),

/***/ "./utils/inputMask.js":
/*!****************************!*\
  !*** ./utils/inputMask.js ***!
  \****************************/
/*! exports provided: rutMask, dineroMask, celularMask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rutMask", function() { return rutMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dineroMask", function() { return dineroMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "celularMask", function() { return celularMask; });
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! text-mask-addons/dist/createNumberMask */ "text-mask-addons/dist/createNumberMask");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var text_mask_rut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! text-mask-rut */ "text-mask-rut");
/* harmony import */ var text_mask_rut__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(text_mask_rut__WEBPACK_IMPORTED_MODULE_1__);


const rutMask = text_mask_rut__WEBPACK_IMPORTED_MODULE_1___default()();
const dineroMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_0___default()({
  prefix: '$',
  thousandsSeparatorSymbol: '.'
});
const celularMask = ["9", " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/];

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-text-mask":
/*!**********************************!*\
  !*** external "react-text-mask" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-text-mask");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "text-mask-addons/dist/createNumberMask":
/*!*********************************************************!*\
  !*** external "text-mask-addons/dist/createNumberMask" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("text-mask-addons/dist/createNumberMask");

/***/ }),

/***/ "text-mask-rut":
/*!********************************!*\
  !*** external "text-mask-rut" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("text-mask-rut");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVzdWx0YWRvLmpzeCIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3N2Zy9jb3Jhem9uLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3N2Zy9tdWplcnNhYy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9wb3N0QWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3R5cGVzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NsZWFuSW5wdXRNYXNrLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2lucHV0TWFzay5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvcm1pa1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10ZXh0LW1hc2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRleHQtbWFzay1hZGRvbnMvZGlzdC9jcmVhdGVOdW1iZXJNYXNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGV4dC1tYXNrLXJ1dFwiIl0sIm5hbWVzIjpbIlJlc3VsdGFkbyIsInByb3BzIiwiYWFjZW50byIsImVhY2VudG8iLCJpYWNlbnRvIiwib2FjZW50byIsInVhY2VudG8iLCJlbmhlIiwiaW50ZXJyb2dhY2lvbiIsImNvbWlsbGFJenF1aWVyZGEiLCJjb21pbGxhRGVyZWNoYSIsImhlYWRlcnMiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU2hvdyIsInJlZ2ltZW5EYXRhIiwic2V0UmVnaW1lbkRhdGEiLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJ0ZXh0b19yZWdpbWVuIiwiYm9keV9ldmVudG9zIiwicnV0IiwiY29udGFjdGFybWUiLCJFdmVudG9JZCIsImF4aW9zIiwicG9zdCIsInVybEluZ3Jlc2FyRXZlbnRvIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhcGVydHVyYV9hZmlsaWFkbyIsImR1ZGFzX3RleHRvIiwiY29yYXpvbiIsIm11amVyU0FDIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInVyaUJhY2tlbmQiLCJwcm9jZXNzIiwiZW52IiwiVVJJX0JBQ0tFTkQiLCJ1cmxJbmdyZXNhclNpbXVsYWNpb24iLCJVUklfSU5HUkVTQVJfU0lNVUxBQ0lPTiIsIlVSSV9FTlZJQVJfRVZFTlRPIiwiaWQiLCJxdWVyeSIsImZldGNocG9zdHMiLCJkaXNwYXRjaCIsInJlcyIsImdldCIsInR5cGUiLCJ0eXBlcyIsInBheWxvYWQiLCJHRVRfUE9TVFMiLCJjbGVhbkRpZ2l0b3MiLCJ2YWx1ZSIsInJlZ2V4IiwicmVwbGFjZSIsImNsZWFuUnV0IiwicnV0TWFzayIsImNyZWF0ZVJ1dE1hc2siLCJkaW5lcm9NYXNrIiwiY3JlYXRlTnVtYmVyTWFzayIsInByZWZpeCIsInRob3VzYW5kc1NlcGFyYXRvclN5bWJvbCIsImNlbHVsYXJNYXNrIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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ZDtBQUVBLFNBQU9ELEtBQUssQ0FBQ0UsT0FBTixDQUFjRCxLQUFkLEVBQXFCLEVBQXJCLENBQVA7QUFDSCxDQUpNO0FBT0EsTUFBTUUsUUFBUSxHQUFJSCxLQUFELElBQVc7QUFDL0IsUUFBTUMsS0FBSyxHQUFHLEtBQWQ7QUFDQSxTQUFPRCxLQUFLLENBQUNFLE9BQU4sQ0FBY0QsS0FBZCxFQUFxQixFQUFyQixDQUFQO0FBQ0gsQ0FITSxDOzs7Ozs7Ozs7Ozs7QUNUUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1HLE9BQU8sR0FBR0Msb0RBQWEsRUFBN0I7QUFFQSxNQUFNQyxVQUFVLEdBQUdDLDZFQUFnQixDQUFDO0FBQ3ZDQyxRQUFNLEVBQUUsR0FEK0I7QUFFdkNDLDBCQUF3QixFQUFFO0FBRmEsQ0FBRCxDQUFuQztBQUtBLE1BQU1DLFdBQVcsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixJQUF2QixFQUE2QixJQUE3QixFQUFtQyxHQUFuQyxFQUF3QyxJQUF4QyxFQUE4QyxJQUE5QyxFQUFvRCxJQUFwRCxFQUEwRCxJQUExRCxDQUFwQixDOzs7Ozs7Ozs7OztBQ1ZQLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL3Jlc3VsdGFkby5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcmVzdWx0YWRvLmpzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBtdWplclNBQyBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9zdmcvbXVqZXJzYWMuc3ZnXCJcclxuaW1wb3J0IGNvcmF6b24gZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvc3ZnL2NvcmF6b24uc3ZnXCJcclxuXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBmZXRjaHBvc3RzIH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvcG9zdEFjdGlvblwiO1xyXG5pbXBvcnQgeyBDYXJkLCBDb2wsIFRhYmxlLCBTcGlubmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBNYXNrZWRJbnB1dCBmcm9tIFwicmVhY3QtdGV4dC1tYXNrXCI7XHJcbmltcG9ydCB7IGRpbmVyb01hc2sgfSBmcm9tIFwiLi4vdXRpbHMvaW5wdXRNYXNrXCJcclxuaW1wb3J0IHsgY2xlYW5EaWdpdG9zIH0gZnJvbSAnLi4vdXRpbHMvY2xlYW5JbnB1dE1hc2snO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bHRhZG8ocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBhYWNlbnRvID0gXCJcXHUwMGUxXCI7XHJcbiAgICBjb25zdCBlYWNlbnRvID0gXCJcXHUwMGU5XCI7XHJcbiAgICBjb25zdCBpYWNlbnRvID0gXCJcXHUwMGVkXCI7XHJcbiAgICBjb25zdCBvYWNlbnRvID0gXCJcXHUwMGYzXCI7XHJcbiAgICBjb25zdCB1YWNlbnRvID0gXCJcXHUwMGZhXCI7XHJcbiAgICBjb25zdCBlbmhlID0gJ1xcdTAwZjEnO1xyXG4gICAgY29uc3QgaW50ZXJyb2dhY2lvbiA9ICdcXHUwMEJGJztcclxuICAgIGNvbnN0IGNvbWlsbGFJenF1aWVyZGEgPSAnXFx1MjAxQyc7XHJcbiAgICBjb25zdCBjb21pbGxhRGVyZWNoYSA9ICdcXHUyMDFEJztcclxuXHJcbiAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRNb2RhbFNob3coZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlU2hvdyA9ICgpID0+IHNldE1vZGFsU2hvdyh0cnVlKTtcclxuICAgIGNvbnN0IFtyZWdpbWVuRGF0YSwgc2V0UmVnaW1lbkRhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSB2YWx1ZXMgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICBjb25zdCBub21icmUgPSByZWdpbWVuRGF0YS5ub21icmUgIT09IHVuZGVmaW5lZCAmJiByZWdpbWVuRGF0YS5ub21icmU7XHJcbiAgICAgICAgY29uc3QgcnV0UHJpbWVybyA9IHJlZ2ltZW5EYXRhLnJ1dCAhPT0gdW5kZWZpbmVkICYmIHJlZ2ltZW5EYXRhLnJ1dDtcclxuICAgICAgICBjb25zdCBydXREdiA9IHJlZ2ltZW5EYXRhLnJ1dER2ICE9PSB1bmRlZmluZWQgJiYgcmVnaW1lbkRhdGEucnV0RHY7XHJcbiAgICAgICAgY29uc3QgcnV0ID0gcnV0UHJpbWVybyArIFwiLVwiICsgcnV0RHY7XHJcbiAgICAgICAgY29uc3QgY29ycmVvID0gcmVnaW1lbkRhdGEuY29ycmVvICE9PSB1bmRlZmluZWQgJiYgcmVnaW1lbkRhdGEuY29ycmVvO1xyXG4gICAgICAgIGNvbnN0IGNlbHVsYXIgPSByZWdpbWVuRGF0YS5jZWx1bGFyICE9PSB1bmRlZmluZWQgJiYgcmVnaW1lbkRhdGEuY2VsdWxhcjtcclxuICAgICAgICBjb25zdCBzdWVsZG8gPSByZWdpbWVuRGF0YS5zdWVsZG9MaXF1aWRvQ29uc3VsdGEgIT09IHVuZGVmaW5lZCAmJiByZWdpbWVuRGF0YS5zdWVsZG9MaXF1aWRvQ29uc3VsdGE7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIG5vbWJyZTogbm9tYnJlLFxyXG4gICAgICAgICAgICBydXQ6IHJ1dCxcclxuICAgICAgICAgICAgY29ycmVvOiBjb3JyZW8sXHJcbiAgICAgICAgICAgIGNlbHVsYXI6IGNlbHVsYXIsXHJcbiAgICAgICAgICAgIHN1ZWxkbzogc3VlbGRvLFxyXG4gICAgICAgICAgICBhaG9ycm86IGNsZWFuRGlnaXRvcyh2YWx1ZXMuYWhvcnJvKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5wb3N0KHByb3BzLnVybEluZ3Jlc2FyU2ltdWxhY2lvbiwgYm9keSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmlkU2ltdWxhY2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlZ2ltZW5EYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAqL1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB0ZXh0b19yZWdpbWVuID0gYEVuICBiYXNlIGEgdHUgcmVudGEgbWVuc3VhbCB5IGVsIG1vbnRvIGRlbCBhcG9ydGUgcXVpZXJlcyByZWFsaXphciBlbCAxNSUgZGUgYm9uaWZpY2FjaSR7b2FjZW50b31uIHBvciBwYXJ0ZSBkZWwgRXN0YWRvIGVzIGVsIHF1ZSBtJHthYWNlbnRvfXMgdGUgY29udmllbmUuYFxyXG5cclxuICAgIGNvbnN0IGJvZHlfZXZlbnRvcyA9IHtcclxuICAgICAgICBcInNlc3Npb25JZFwiOiBcInN0cmluZ1wiLFxyXG4gICAgICAgIFwiZXZlbnRvSWRcIjogMCxcclxuICAgICAgICBcInJlc3VsdDBcIjogMCxcclxuICAgICAgICBcInJlc3VsdDFcIjogMCxcclxuICAgICAgICBcInJlc3VsdDJcIjogMCxcclxuICAgICAgICBcInJ1dFwiOiBwcm9wcy5ydXRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb250YWN0YXJtZSgpIHtcclxuXHJcbiAgICAgICAgYm9keV9ldmVudG9zLkV2ZW50b0lkID0gODtcclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAucG9zdChwcm9wcy51cmxJbmdyZXNhckV2ZW50bywgYm9keV9ldmVudG9zLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3NvbGljaXR1ZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXBlcnR1cmFfYWZpbGlhZG8oKSB7XHJcbiAgICAgICAgYm9keV9ldmVudG9zLkV2ZW50b0lkID0gMTA7XHJcblxyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5wb3N0KHByb3BzLnVybEluZ3Jlc2FyRXZlbnRvLCBib2R5X2V2ZW50b3MsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy5hZnBtb2RlbG8uY2wvUG9ydGFsLUFmaWxpYWRvL09wZXJhY2lvbmVzL0Fob3Jyby1QcmV2aXNpb25hbC1Wb2x1bnRhcmlvL01pLUFQVi9BYnJpci11bi1BUFYtUGFzbzEuYXNweD9hY2NlZGVyJnV0bV9zb3VyY2U9UXVlQVBWQ29udmllbmUmdXRtX21lZGl1bT1yZWZlcmFsJnV0bV9jYW1wYWlnbj1RdWVBUFZDb252aWVuZSZ1dG1fY29udGVudD1Cb3RvbkFjY2lvblwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZHVkYXNfdGV4dG8gPVxyXG4gICAgICAgIGBOdWVzdHJvcyBlamVjdXRpdm9zIHB1ZWRlbiBhc2Vzb3JhcnRlIGVuIGwke2lhY2VudG99bmVhIG8gdiR7aWFjZW50b31hIHRlbCR7ZWFjZW50b31mb25pY2EuIFF1ZXJlbW9zIGF5dWRhcnRlIGEgcmVzb2x2ZXIgdG9kYXMgdHVzIGlucXVpZXR1ZGVzIG8gZGFydGUgdG9kYXMgbGFzIG9wY2lvbmVzIHBhcmEgdHUgdHJhc3Bhc28uYDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkFob3JybyBQcmV2aXNpb25hbCBWb2x1bnRhcmlvIHwgUmVzdWx0YWRvIFNpbXVsYWNpe29hY2VudG99biB8IEFGUCBNb2RlbG88L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YEF1bWVudGEgdHUgc3VlbGRvIGwke2lhY2VudG99cXVpZG8sIHBhZ2FuZG8gdW5hIG1lbm9yIGNvbWlzaSR7b2FjZW50b31uIGRlIEFGUC4gU2ltdWxhIHR1IGF1bWVudG8gZGUgc3VlbGRvIGFsIGNhbWJpYXJ0ZSBhIEFGUCBNb2RlbG8uYH0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleCwgZm9sbG93XCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0YWRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgbXgtYXV0byB0ZXh0LWxlZnQgaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb2Zmc2V0LTEgZC1mbGV4IGp1c3RpZnktY29udGVudC1sZWZ0IGZsZXgtY29sdW1uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+VHVzIGFob3Jyb3MgY3JlY2VuIGNvbiBBZnAgTW9kZWxvIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjb3Jhem9ufSBhbHQ9XCJjb3Jhem9uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxhIGNvbWJpbmFuY2nDs24gZGUgbGEgcmVudGFiaWxpZGFkIHF1ZSBvYnRpZW5lcyBjb24gQUZQIE1vZGVsbyBtZW5vcyBsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21pc2nDs24gcXVlIHBhZ2Fyw61hcyBkYSBjb21vIHJlc3VsdGFkbyB1biBtYXlvciBhaG9ycm8gcGFyYSB0aS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNSBvZmZzZXQtbWQtMSBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5FbCBhaG9ycm8gZW4gdHUgZm9uZG8gb2JsaWdhdGFyaW8gYXVtZW50YTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MYSByZW50YWJpbGlkYWQgb2J0ZW5pZGEgZW4gdHUgYWN0dWFsIEFmcCB2ZXJzdXMgbGEgcXVlIHBvZHLDrWFzXHJcbmhhYmVyIG9idGVuaWRvIGR1cmFudGUgZWwgbWlzbW8gcGVyw61vZG8gZGUgdGllbXBvIGVuIEFGUCBNb2RlbG8gZXMgbWF5b3IuIFRlIGludml0YW1vcyBhIHZlciB0dSByZXN1bHRhZG8uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYmxlLWJvcmRlcmxlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57Jyd9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj57Jyd9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlJlbnRhYmlsaWRhZCBBRlAgQWN0dWFsOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+VmFsb3IgQTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5SZW50YWJpbGlkYWQgQUZQIE1vZGVsbzo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlZhbG9yIEI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ3JlZW4tdGFibGFcIj5EaWZlcmVuY2lhIGRlIHJlbnRhYmlsaWRhZDo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBncmVlbi10YWJsYVwiPlZhbG9yIEM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+QWhvcnJvIGVuIGNvbWlzaXtvYWNlbnRvfW48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlZEID0gKFZBLShWQi1WQykpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNSBkLWZsZXggZmxleC1jb2x1bW4gY2FsY3VsYXJBcHZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Dw7NtbyBoYWNlciBjcmVjZXIgdHUgcGVuc2nDs248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VHUgYWhvcnJvIGVuIGNvbWlzacOzbiBwdWVkZSBoYWNlciBsYSBkaWZlcmVuY2lhLCBlbiBNb2RlbG8gc29sbyBwYWdhcyB1biAwLDc3JS4gU2kgaHViaWVyYXMgaW52ZXJ0aWRvIGVzdGUgbW9udG8gZW4gdW4gQVBWIGhveSBlbiBkw61hIHRlbmRyw61hcyBlbCBzaWd1aWVudGUgbW9udG86PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSByZXNwb25zaXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZS1ib3JkZXJsZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD57Jyd9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPnsnJ308L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkFob3JybyBlbiBjb21pc2l7b2FjZW50b31uOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5WYWxvciBBPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkFob3JybyBBUFYgYW51YWw6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlZhbG9yIEI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiZ3JlZW4tdGFibGFcIj5Cb25pZmljYWNpe29hY2VudG99biBmaXNjYWw6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodCBncmVlbi10YWJsYVwiPlZhbG9yIEM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VG90YWwgQVBWPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlZEID0gKFZBLShWQi1WQykpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGN0YXMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IHRleHQtY2VudGVyIGQtYmxvY2sgb2Zmc2V0LW1kLTIgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aW50ZXJyb2dhY2lvbn1ObyBlcmVzIGFmaWxpYWRvIGRlIEFmcCBNb2RlbG8/PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkFwZXJ0dXJhX0FmaWxpYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthcGVydHVyYV9hZmlsaWFkb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+Q3thYWNlbnRvfW1iaWF0ZSBhIEFGUCBNb2RlbG88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNSB0ZXh0LWNlbnRlciBkLWJsb2NrIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2ludGVycm9nYWNpb259UXVpZXJlcyBzYWJlciBsb3MgYmVuZWZpY2lvcyBkZSBhYnJpciB1bmEgQVBWPyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiQXBlcnR1cmFfbm9fQWZpbGlhZG9cIiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1ibG9jayBibHVlQnRuXCIgb25DbGljaz17Y29udGFjdGFybWV9PklyIGEgUXVlIEFQViBtZSBjb252aWVuZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbnRhaW5lci1wYWRyZSBkdWRhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0yIGQtZmxleCBkZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bXVqZXJTQUN9IGFsdD1cIkR1ZGFzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC02IG9mZnNldC1tZC0yIGQtZmxleCBmbGV4LWNvbHVtbiBjb250ZW5lZG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR4dERlc2t0b3AgcGFycmFmbzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2ludGVycm9nYWNpb259QXt1YWNlbnRvfW4gdGllbmVzIGR1ZGFzPzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkdWRhc190ZXh0b308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiU29saWNpdHVkX0NvbnRhY3RvXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1sZyBidG4tYmxvY2sgd2hpdGVCdG5cIiBvbkNsaWNrPXtjb250YWN0YXJtZX0+UXVpZXJvIHF1ZSBtZSBjb250YWN0ZW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHVyaUJhY2tlbmQgPSBwcm9jZXNzLmVudi5VUklfQkFDS0VORDtcclxuICAgIGNvbnN0IHVybEluZ3Jlc2FyU2ltdWxhY2lvbiA9IGAke3VyaUJhY2tlbmR9JHtwcm9jZXNzLmVudi5VUklfSU5HUkVTQVJfU0lNVUxBQ0lPTn1gO1xyXG4gICAgY29uc3QgdXJsSW5ncmVzYXJFdmVudG8gPSBgJHt1cmlCYWNrZW5kfSR7cHJvY2Vzcy5lbnYuVVJJX0VOVklBUl9FVkVOVE99YFxyXG4gICAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcclxuXHJcbiAgICAvKlxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1xyXG4gICAgICAgIC5nZXQoYCR7dXJpQmFja2VuZH0ke3Byb2Nlc3MuZW52LlVSSV9PQlRFTkVSX1NJTVVMQUNJT059P2lkPSR7aWR9YClcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YVxyXG4gICAgKi9cclxuICAgIGNvbnN0IHByb3BzID0ge1xyXG4gICAgICAgIC8vZGF0YSxcclxuICAgICAgICB1cmxJbmdyZXNhclNpbXVsYWNpb24sXHJcbiAgICAgICAgdXJsSW5ncmVzYXJFdmVudG9cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9wczogcHJvcHMgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5UWWlJR2hsYVdkb2REMGlOVFlpSUhacFpYZENiM2c5SWpBZ01DQTFOaUExTmlJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5DaUFnSUNBOFp5QmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjREFwSWo0TkNpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUVTFMakkwTmprZ016UXVORE0xTkVNMU9DNDNPVGt4SURFNUxqTTROU0EwT1M0ME56Z2dOQzR6TURRMU5DQXpOQzQwTWpjMUlEQXVOelV5TXpBNVF6RTVMak0zTnpFZ0xUSXVOems1T1RJZ05DNHlPVFkyTVNBMkxqVXlNVEl6SURBdU56UTBNemdnTWpFdU5UY3hOME10TWk0NE1EYzROU0F6Tmk0Mk1qSXhJRFl1TlRFek15QTFNUzQzTURJMklESXhMalUyTXpnZ05UVXVNalUwT0VNek5pNDJNVFF5SURVNExqZ3dOeUExTVM0Mk9UUTNJRFE1TGpRNE5Ua2dOVFV1TWpRMk9TQXpOQzQwTXpVMFdpSWdabWxzYkQwaUkwWkdNME0yUlNJdlBnMEtJQ0FnSUNBZ0lDQThjR0YwYUNCa1BTSk5ORFF1TXpnek9TQXlOQzR3T1RNNVF6UTBMak00TXprZ01UZ3VOakF6TkNBME1DNHhORGt5SURFMExqWTNOVFFnTXpVdU9ESTJPU0F4TkM0Mk56VTBRek0wTGpBM05UY2dNVFF1TmpZNElETXlMak0yT0RjZ01UVXVNakkxTVNBek1DNDVOVGc1SURFMkxqSTJORU15T1M0MU5Ea3hJREUzTGpNd01qa2dNamd1TlRFeE5pQXhPQzQzTmpnMElESTRJREl3TGpRME16TkRNamN1TkRnNE5TQXhPQzQzTmpnMElESTJMalExTVNBeE55NHpNREk1SURJMUxqQTBNVElnTVRZdU1qWTBRekl6TGpZek1UUWdNVFV1TWpJMU1TQXlNUzQ1TWpRMElERTBMalkyT0NBeU1DNHhOek15SURFMExqWTNOVFJETVRVdU9EVXdPU0F4TkM0Mk56VTBJREV4TGpZeE5qSWdNVGd1TmpBek5DQXhNUzQyTVRZeUlESTBMakE1TXpsRE1URXVOakUyTWlBek1pNDBNVGN5SURJMExqTTROaUEwTVM0NU5EVXlJREkzTGpVek1qZ2dOREl1T1RNNE1rd3lOeTQzTWpJMklEUXlMams1TmpaRE1qY3VPREEyTWlBME15NHdNVGdnTWpjdU9Ea3hPU0EwTXk0d016QXpJREkzTGprM09ERWdORE11TURNek1VZ3lPQzR3TWpFNVF6STRMakV4TURZZ05ETXVNREk1T0NBeU9DNHhPVGcySURRekxqQXhOellnTWpndU1qZzBPQ0EwTWk0NU9UWTJUREk0TGpRMk56TWdOREl1T1RNNE1rTXpNUzQyTWpFMElEUXhMamt6TURZZ05EUXVNemd6T1NBek1pNDBNREkySURRMExqTTRNemtnTWpRdU1Ea3pPVm9pSUdacGJHdzlJaU5HUkVaRVJrUWlMejROQ2lBZ0lDQThMMmMrRFFvZ0lDQWdQR1JsWm5NK0RRb2dJQ0FnSUNBZ0lEeGpiR2x3VUdGMGFDQnBaRDBpWTJ4cGNEQWlQZzBLSUNBZ0lDQWdJQ0FnSUNBZ1BISmxZM1FnZDJsa2RHZzlJalUySWlCb1pXbG5hSFE5SWpVMklpQm1hV3hzUFNKM2FHbDBaU0l2UGcwS0lDQWdJQ0FnSUNBOEwyTnNhWEJRWVhSb1BnMEtJQ0FnSUR3dlpHVm1jejROQ2p3dmMzWm5QZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbXVqZXJzYWMtM2QxODYyNmM2MGM5ZGJlOTlhYjkyOGU1ZmEyZWM0MmQuc3ZnXCI7IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNocG9zdHMgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXB2YmFja2VuZG1hbmFnZXIuYXp1cmV3ZWJzaXRlcy5uZXQvQXB2U2ltdWxhY2lvbi9vYnRlbmVycG9yaWQ/aWQ9NycpO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfUE9TVFMsXHJcbiAgICAgICAgcGF5bG9hZDpyZXMuZGF0YVxyXG4gICAgfSk7XHJcbn0iLCJleHBvcnQgY29uc3QgR0VUX1BPU1RTID0gJ0dFVF9QT1NUUyc7IiwiaW1wb3J0IHsgcmVwbGFjZSB9IGZyb20gXCJmb3JtaWtcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhbkRpZ2l0b3MgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gL1teXFxkXS9nO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHJlZ2V4LCAnJyk7IFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNsZWFuUnV0ID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCByZWdleCA9IC9cXC4vZztcclxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHJlZ2V4LCAnJylcclxufVxyXG4iLCJpbXBvcnQgY3JlYXRlTnVtYmVyTWFzayBmcm9tICd0ZXh0LW1hc2stYWRkb25zL2Rpc3QvY3JlYXRlTnVtYmVyTWFzayc7XHJcbmltcG9ydCBjcmVhdGVSdXRNYXNrIGZyb20gJ3RleHQtbWFzay1ydXQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJ1dE1hc2sgPSBjcmVhdGVSdXRNYXNrKCk7XHJcblxyXG5leHBvcnQgY29uc3QgZGluZXJvTWFzayA9IGNyZWF0ZU51bWJlck1hc2soe1xyXG4gICAgcHJlZml4OiAnJCcsXHJcbiAgICB0aG91c2FuZHNTZXBhcmF0b3JTeW1ib2w6ICcuJyxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2VsdWxhck1hc2sgPSBbXCI5XCIsIFwiIFwiLCAvXFxkLywgL1xcZC8sIC9cXGQvLCAvXFxkLywgXCIgXCIsIC9cXGQvLCAvXFxkLywgL1xcZC8sIC9cXGQvXTtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcm1pa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRleHQtbWFza1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0ZXh0LW1hc2stYWRkb25zL2Rpc3QvY3JlYXRlTnVtYmVyTWFza1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0ZXh0LW1hc2stcnV0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [fade, setFade] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('in');\n    // 커스텀 커서 위치/상태\n    const [cursor, setCursor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: 0,\n        y: 0\n    });\n    const [isTriangle, setIsTriangle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"App.useEffect\": ()=>{\n            const move = {\n                \"App.useEffect.move\": (e)=>setCursor({\n                        x: e.clientX,\n                        y: e.clientY\n                    })\n            }[\"App.useEffect.move\"];\n            const down = {\n                \"App.useEffect.down\": ()=>setIsTriangle(true)\n            }[\"App.useEffect.down\"];\n            const up = {\n                \"App.useEffect.up\": ()=>setIsTriangle(false)\n            }[\"App.useEffect.up\"];\n            window.addEventListener('mousemove', move);\n            window.addEventListener('mousedown', down);\n            window.addEventListener('mouseup', up);\n            return ({\n                \"App.useEffect\": ()=>{\n                    window.removeEventListener('mousemove', move);\n                    window.removeEventListener('mousedown', down);\n                    window.removeEventListener('mouseup', up);\n                }\n            })[\"App.useEffect\"];\n        }\n    }[\"App.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"App.useEffect\": ()=>{\n            setFade('out');\n            const timeout = setTimeout({\n                \"App.useEffect.timeout\": ()=>setFade('in')\n            }[\"App.useEffect.timeout\"], 80);\n            return ({\n                \"App.useEffect\": ()=>clearTimeout(timeout)\n            })[\"App.useEffect\"];\n        }\n    }[\"App.useEffect\"], [\n        router.asPath\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `custom-cursor${isTriangle ? ' triangle' : ''}`,\n                style: {\n                    left: cursor.x,\n                    top: cursor.y\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\82104\\\\Desktop\\\\inter\\\\inter\\\\pages\\\\_app.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `fade-${fade}`,\n                style: {\n                    width: '100vw',\n                    height: '100vh'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\82104\\\\Desktop\\\\inter\\\\inter\\\\pages\\\\_app.js\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\82104\\\\Desktop\\\\inter\\\\inter\\\\pages\\\\_app.js\",\n                lineNumber: 38,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNhO0FBQ0o7QUFFekIsU0FBU0csSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO0lBRWpDLGVBQWU7SUFDZixNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7UUFBRVUsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDbEQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzdDRCxnREFBU0E7eUJBQUM7WUFDUixNQUFNZTtzQ0FBTyxDQUFDQyxJQUFNTixVQUFVO3dCQUFFQyxHQUFHSyxFQUFFQyxPQUFPO3dCQUFFTCxHQUFHSSxFQUFFRSxPQUFPO29CQUFDOztZQUMzRCxNQUFNQztzQ0FBTyxJQUFNTCxjQUFjOztZQUNqQyxNQUFNTTtvQ0FBSyxJQUFNTixjQUFjOztZQUMvQk8sT0FBT0MsZ0JBQWdCLENBQUMsYUFBYVA7WUFDckNNLE9BQU9DLGdCQUFnQixDQUFDLGFBQWFIO1lBQ3JDRSxPQUFPQyxnQkFBZ0IsQ0FBQyxXQUFXRjtZQUNuQztpQ0FBTztvQkFDTEMsT0FBT0UsbUJBQW1CLENBQUMsYUFBYVI7b0JBQ3hDTSxPQUFPRSxtQkFBbUIsQ0FBQyxhQUFhSjtvQkFDeENFLE9BQU9FLG1CQUFtQixDQUFDLFdBQVdIO2dCQUN4Qzs7UUFDRjt3QkFBRyxFQUFFO0lBRUxwQixnREFBU0E7eUJBQUM7WUFDUlEsUUFBUTtZQUNSLE1BQU1nQixVQUFVQzt5Q0FBVyxJQUFNakIsUUFBUTt3Q0FBTztZQUNoRDtpQ0FBTyxJQUFNa0IsYUFBYUY7O1FBQzVCO3dCQUFHO1FBQUNsQixPQUFPcUIsTUFBTTtLQUFDO0lBRWxCLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQ0NDLFdBQVcsQ0FBQyxhQUFhLEVBQUVoQixhQUFhLGNBQWMsSUFBSTtnQkFDMURpQixPQUFPO29CQUFFQyxNQUFNdEIsT0FBT0UsQ0FBQztvQkFBRXFCLEtBQUt2QixPQUFPRyxDQUFDO2dCQUFDOzs7Ozs7MEJBRTNDLDhEQUFDZ0I7Z0JBQUlDLFdBQVcsQ0FBQyxLQUFLLEVBQUV0QixNQUFNO2dCQUFFdUIsT0FBTztvQkFBRUcsT0FBTztvQkFBU0MsUUFBUTtnQkFBUTswQkFDdkUsNEVBQUM5QjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSTlCIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXDgyMTA0XFxEZXNrdG9wXFxpbnRlclxcaW50ZXJcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtmYWRlLCBzZXRGYWRlXSA9IHVzZVN0YXRlKCdpbicpO1xuXG4gIC8vIOy7pOyKpO2FgCDsu6TshJwg7JyE7LmYL+yDge2DnFxuICBjb25zdCBbY3Vyc29yLCBzZXRDdXJzb3JdID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBbaXNUcmlhbmdsZSwgc2V0SXNUcmlhbmdsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbW92ZSA9IChlKSA9PiBzZXRDdXJzb3IoeyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9KTtcbiAgICBjb25zdCBkb3duID0gKCkgPT4gc2V0SXNUcmlhbmdsZSh0cnVlKTtcbiAgICBjb25zdCB1cCA9ICgpID0+IHNldElzVHJpYW5nbGUoZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZG93bik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB1cCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb3duKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdXApO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZhZGUoJ291dCcpO1xuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHNldEZhZGUoJ2luJyksIDgwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB9LCBbcm91dGVyLmFzUGF0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgY3VzdG9tLWN1cnNvciR7aXNUcmlhbmdsZSA/ICcgdHJpYW5nbGUnIDogJyd9YH1cbiAgICAgICAgc3R5bGU9e3sgbGVmdDogY3Vyc29yLngsIHRvcDogY3Vyc29yLnkgfX1cbiAgICAgIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9e2BmYWRlLSR7ZmFkZX1gfSBzdHlsZT17eyB3aWR0aDogJzEwMHZ3JywgaGVpZ2h0OiAnMTAwdmgnIH19PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufSAiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJmYWRlIiwic2V0RmFkZSIsImN1cnNvciIsInNldEN1cnNvciIsIngiLCJ5IiwiaXNUcmlhbmdsZSIsInNldElzVHJpYW5nbGUiLCJtb3ZlIiwiZSIsImNsaWVudFgiLCJjbGllbnRZIiwiZG93biIsInVwIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImFzUGF0aCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ \"./node_modules/react-bootstrap/esm/NavDropdown.js\");\n/* harmony import */ var _TopHeader_TopHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopHeader/TopHeader */ \"./components/Header/TopHeader/TopHeader.js\");\n\n\n\n\n\nfunction Header() {\n    //const location = useLocation();\n    // Array dei percorsi delle voci di menu\n    const menuItems = [\n        {\n            path: \"/\",\n            text: \"Home\"\n        },\n        {\n            path: \"/#chi-sono\",\n            text: \"Chi sono\"\n        },\n        {\n            path: \"/#contatti\",\n            text: \"Contatti\"\n        }\n    ];\n    const menuSubItems = [\n        {\n            path: \"/servizi\",\n            text: \"Tutti i servizi\"\n        },\n        {\n            path: \"/servizi/conversioni-serrature-porte-blindate\",\n            text: \"Conversioni serrature porte blindate\"\n        },\n        {\n            path: \"/servizi/fornitura-e-installazioni-zanzariere\",\n            text: \"Fornitura e installazioni zanzariere\"\n        },\n        {\n            path: \"/servizi/riparazioni-e-sostituzioni-basculanti-e-sezionali\",\n            text: \"Riparazioni e sostituzioni basculanti e sezionali\"\n        },\n        {\n            path: \"/servizi/sostituzione-serrature-di-tutti-i-tipi\",\n            text: \"Sostituzione serrature di tutti i tipi\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TopHeader_TopHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                expand: \"sm\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Toggle, {\n                            \"aria-controls\": \"basic-navbar-nav\",\n                            className: \"ms-auto\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Collapse, {\n                            id: \"basic-navbar-nav\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"mx-auto mt-2 mt-sm-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n                                        className: \"\",\n                                        href: \"/\",\n                                        children: menuItems[0].text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        title: \"Servizi\",\n                                        id: \"basic-nav-dropdown\",\n                                        children: menuSubItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n                                                href: item.path,\n                                                className: \"\",\n                                                children: item.text\n                                            }, item.path, false, {\n                                                fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n                                        className: \"\",\n                                        href: \"/#chi-sono\",\n                                        children: menuItems[1].text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n                                        className: \"nav-link\",\n                                        href: \"/#contatti\",\n                                        children: menuItems[2].text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                                lineNumber: 68,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUNVO0FBQ1I7QUFLOUMsU0FBU0k7SUFFUCxpQ0FBaUM7SUFFakMsd0NBQXdDO0lBQ3hDLE1BQU1DLFlBQVk7UUFFaEI7WUFBRUMsTUFBTTtZQUFLQyxNQUFNO1FBQU87UUFDMUI7WUFBRUQsTUFBTTtZQUFjQyxNQUFNO1FBQVc7UUFDdkM7WUFBRUQsTUFBTTtZQUFjQyxNQUFNO1FBQVc7S0FFeEM7SUFDRCxNQUFNQyxlQUFlO1FBQ25CO1lBQUVGLE1BQU07WUFBWUMsTUFBTTtRQUFrQjtRQUM1QztZQUFFRCxNQUFNO1lBQWlEQyxNQUFNO1FBQXVDO1FBQ3RHO1lBQUVELE1BQU07WUFBaURDLE1BQU07UUFBdUM7UUFDdEc7WUFBRUQsTUFBTTtZQUE4REMsTUFBTTtRQUFvRDtRQUNoSTtZQUFFRCxNQUFNO1lBQW1EQyxNQUFNO1FBQXlDO0tBRTNHO0lBRUQscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ04sNERBQVNBOzs7OzswQkFDYiw4REFBQ0YsOERBQU1BO2dCQUFDUyxRQUFPOzBCQUNaLDRFQUFDQztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNYLHFFQUFhOzRCQUFDYSxpQkFBYzs0QkFBbUJGLFdBQVU7Ozs7OztzQ0FDMUQsOERBQUNYLHVFQUFlOzRCQUFDZSxJQUFHO3NDQWdDcEIsNEVBQUNoQiwyREFBR0E7Z0NBQUNZLFdBQVU7O2tEQUNmLDhEQUFDWixnRUFBUTt3Q0FBQ1ksV0FBVTt3Q0FBR00sTUFBSztrREFBS2IsU0FBUyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSTs7Ozs7O2tEQUM5Qyw4REFBQ0wsbUVBQVdBO3dDQUFDaUIsT0FBTTt3Q0FBVUgsSUFBRztrREFDN0JSLGFBQWFZLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ2hCLDhEQUFDbkIsd0VBQWdCO2dEQUVmZ0IsTUFBTUcsS0FBS2YsSUFBSTtnREFDZk0sV0FBVTswREFDVFMsS0FBS2QsSUFBSTsrQ0FITGMsS0FBS2YsSUFBSTs7Ozs7Ozs7OztrREFPdEIsOERBQUNOLGdFQUFRO3dDQUFDWSxXQUFVO3dDQUFHTSxNQUFLO2tEQUFjYixTQUFTLENBQUMsRUFBRSxDQUFDRSxJQUFJOzs7Ozs7a0RBQzNELDhEQUFDUCxnRUFBUTt3Q0FBQ1ksV0FBVTt3Q0FBV00sTUFBSztrREFBY2IsU0FBUyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM3RTtLQWpGU0g7QUFtRlQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzPzYxMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duJztcbmltcG9ydCBUb3BIZWFkZXIgZnJvbSAnLi9Ub3BIZWFkZXIvVG9wSGVhZGVyJztcblxuXG5cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuXG4gIC8vY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuXG4gIC8vIEFycmF5IGRlaSBwZXJjb3JzaSBkZWxsZSB2b2NpIGRpIG1lbnVcbiAgY29uc3QgbWVudUl0ZW1zID0gW1xuXG4gICAgeyBwYXRoOiAnLycsIHRleHQ6ICdIb21lJyB9LFxuICAgIHsgcGF0aDogJy8jY2hpLXNvbm8nLCB0ZXh0OiAnQ2hpIHNvbm8nIH0sXG4gICAgeyBwYXRoOiAnLyNjb250YXR0aScsIHRleHQ6ICdDb250YXR0aScgfSxcblxuICBdO1xuICBjb25zdCBtZW51U3ViSXRlbXMgPSBbXG4gICAgeyBwYXRoOiAnL3NlcnZpemknLCB0ZXh0OiAnVHV0dGkgaSBzZXJ2aXppJyB9LFxuICAgIHsgcGF0aDogJy9zZXJ2aXppL2NvbnZlcnNpb25pLXNlcnJhdHVyZS1wb3J0ZS1ibGluZGF0ZScsIHRleHQ6ICdDb252ZXJzaW9uaSBzZXJyYXR1cmUgcG9ydGUgYmxpbmRhdGUnIH0sXG4gICAgeyBwYXRoOiAnL3NlcnZpemkvZm9ybml0dXJhLWUtaW5zdGFsbGF6aW9uaS16YW56YXJpZXJlJywgdGV4dDogJ0Zvcm5pdHVyYSBlIGluc3RhbGxhemlvbmkgemFuemFyaWVyZScgfSxcbiAgICB7IHBhdGg6ICcvc2Vydml6aS9yaXBhcmF6aW9uaS1lLXNvc3RpdHV6aW9uaS1iYXNjdWxhbnRpLWUtc2V6aW9uYWxpJywgdGV4dDogJ1JpcGFyYXppb25pIGUgc29zdGl0dXppb25pIGJhc2N1bGFudGkgZSBzZXppb25hbGknIH0sXG4gICAgeyBwYXRoOiAnL3NlcnZpemkvc29zdGl0dXppb25lLXNlcnJhdHVyZS1kaS10dXR0aS1pLXRpcGknLCB0ZXh0OiAnU29zdGl0dXppb25lIHNlcnJhdHVyZSBkaSB0dXR0aSBpIHRpcGknIH0sXG5cbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXI+XG4gICAgICA8VG9wSGVhZGVyIC8+XG4gICA8TmF2YmFyIGV4cGFuZD1cInNtXCIgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgY2xhc3NOYW1lPSdtcy1hdXRvJy8+XG4gICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgey8qPE5hdiBjbGFzc05hbWU9XCJteC1hdXRvIG10LTJcIj5cbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL1wiPkhvbWU8L05hdi5MaW5rPlxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPVwiU2Vydml6aVwiIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCIgPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiL3NlcnZpemlcIj5UdXR0aSBpIHNlcnZpemkgPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiL3NlcnZpemkvY29udmVyc2lvbmktc2VycmF0dXJlLXBvcnRlLWJsaW5kYXRlXCI+Q29udmVyc2lvbmkgc2VycmF0dXJlIHBvcnRlIGJsaW5kYXRlPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiL3NlcnZpemkvZm9ybml0dXJhLWUtaW5zdGFsbGF6aW9uaS16YW56YXJpZXJlXCI+XG4gICAgICAgICAgICAgIEZvcm5pdHVyYSBlIGluc3RhbGxhemlvbmkgemFuemFyaWVyZVxuICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIvc2Vydml6aS9yaXBhcmF6aW9uaS1lLXNvc3RpdHV6aW9uaS1iYXNjdWxhbnRpLWUtc2V6aW9uYWxpXCI+UmlwYXJhemlvbmkgZSBzb3N0aXR1emlvbmkgYmFzY3VsYW50aSBlIHNlemlvbmFsaTwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIi9zZXJ2aXppL3Nvc3RpdHV6aW9uZS1zZXJyYXR1cmUtZGktdHV0dGktaS10aXBpXCI+XG4gICAgICAgICAgICAgIFNvc3RpdHV6aW9uZSBzZXJyYXR1cmUgZGkgdHV0dGkgaSB0aXBpXG4gICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi8jY2hpLXNvbm9cIj5DaGkgc29ubzwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi8jY29udGF0dGlcIj5Db250YXR0aTwvTmF2Lkxpbms+XG4gIDwvTmF2PlxuICA8bmF2PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvc2Vydml6aVwiPlNlcnZpemk8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvc2Vydml6aS9jb252ZXJzaW9uaS1zZXJyYXR1cmUtcG9ydGUtYmxpbmRhdGVcIj5Db252ZXJzaW9uaSBTZXJyYXR1cmUgZSBQb3J0ZSBCbGluZGF0ZTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9zZXJ2aXppL2Zvcm5pdHVyYS1lLWluc3RhbGxhemlvbmktemFuemFyaWVyZVwiPkZvcm5pdHVyYSBlIEluc3RhbGxhemlvbmkgWmFuemFyaWVyZTwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz1cIi9zZXJ2aXppL3JpcGFyYXppb25pLWUtc29zdGl0dXppb25pLWJhc2N1bGFudGktZS1zZXppb25hbGlcIj5SaXBhcmF6aW9uaSBlIFNvc3RpdHV6aW9uaSBCYXNjdWxhbnRpIGUgU2V6aW9uYWxpPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL3NlcnZpemkvc29zdGl0dXppb25lLXNlcnJhdHVyZS1kaS10dXR0aS1pLXRpcGlcIj5Tb3N0aXR1emlvbmk8L0xpbms+PC9saT5cblxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvI2NoaS1zb25vXCI+Q2hpIHNvbm88L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiLyNjb250YXR0aVwiPkNvbnRhdHRpPC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgPC9uYXY+Ki99XG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXgtYXV0byBtdC0yIG10LXNtLTBcIj5cbiAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cIlwiIGhyZWY9XCIvXCI+e21lbnVJdGVtc1swXS50ZXh0fTwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9XCJTZXJ2aXppXCIgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIiA+XG4gICAgICAgICAgICAgIHttZW51U3ViSXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ucGF0aH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0ucGF0aH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cIlwiIGhyZWY9XCIvI2NoaS1zb25vXCI+e21lbnVJdGVtc1sxXS50ZXh0fTwvTmF2Lkxpbms+XG4gICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi8jY29udGF0dGlcIj57bWVudUl0ZW1zWzJdLnRleHR9PC9OYXYuTGluaz5cbiAgICAgICAgXG4gICAgICAgICBcbiAgICAgIDwvTmF2PlxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTmF2YmFyPlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiTmF2IiwiTmF2YmFyIiwiTmF2RHJvcGRvd24iLCJUb3BIZWFkZXIiLCJIZWFkZXIiLCJtZW51SXRlbXMiLCJwYXRoIiwidGV4dCIsIm1lbnVTdWJJdGVtcyIsImhlYWRlciIsImV4cGFuZCIsImRpdiIsImNsYXNzTmFtZSIsIlRvZ2dsZSIsImFyaWEtY29udHJvbHMiLCJDb2xsYXBzZSIsImlkIiwiTGluayIsImhyZWYiLCJ0aXRsZSIsIm1hcCIsIml0ZW0iLCJJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header/Header.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/servizi",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ \"./node_modules/react-bootstrap/esm/NavDropdown.js\");\n/* harmony import */ var _TopHeader_TopHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopHeader/TopHeader */ \"./components/Header/TopHeader/TopHeader.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Header() {\n    _s();\n    //const location = useLocation();\n    // Array dei percorsi delle voci di menu\n    const menuItems = [\n        {\n            path: \"/\",\n            text: \"Home\"\n        },\n        {\n            path: \"/#chi-sono\",\n            text: \"Chi sono\"\n        },\n        {\n            path: \"/#contatti\",\n            text: \"Contatti\"\n        }\n    ];\n    const menuSubItems = [\n        {\n            path: \"/servizi\",\n            text: \"Tutti i servizi\"\n        },\n        {\n            path: \"/servizi/conversioni-serrature-e-porte-blindate\",\n            text: \"Conversioni serrature porte blindate\"\n        },\n        {\n            path: \"/servizi/fornitura-e-installazioni-zanzariere\",\n            text: \"Fornitura e installazioni zanzariere\"\n        },\n        {\n            path: \"/servizi/riparazioni-e-sostituzioni-basculanti-e-sezionali\",\n            text: \"Riparazioni e sostituzioni basculanti e sezionali\"\n        },\n        {\n            path: \"/servizi/sostituzione-serrature-di-tutti-i-tipi\",\n            text: \"Sostituzione serrature di tutti i tipi\"\n        }\n    ];\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isServiziSubMenuOpen, setIsServiziSubMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isSettoriSubMenuOpen, setIsSettoriSubMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const toggleMenu = ()=>{\n        setIsMenuOpen(!isMenuOpen);\n    };\n    const toggleServiziSubMenu = ()=>{\n        setIsServiziSubMenuOpen(!isServiziSubMenuOpen);\n    };\n    const closeSubMenuOnClickOutside = (event)=>{\n        if (menuRef.current && !menuRef.current.contains(event.target)) {\n            setIsServiziSubMenuOpen(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"click\", closeSubMenuOnClickOutside);\n        return ()=>{\n            document.removeEventListener(\"click\", closeSubMenuOnClickOutside);\n        };\n    }, []);\n    const isLinkActive = (href)=>{\n        // Use the useRouter() hook to get the current pathname\n        const currentPathname = router.pathname;\n        // Check if the current pathname matches the link's href\n        return currentPathname === href;\n    };\n    // Determine if a top-level menu item is active based on subpage URL\n    const isTopLevelMenuItemActive = (href)=>{\n        const currentPathname = router.pathname;\n        // Check if the current pathname starts with the link's href\n        return currentPathname.startsWith(href);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TopHeader_TopHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                expand: \"sm\",\n                className: \"\".concat(isMenuOpen ? \"open\" : \"\"),\n                ref: menuRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Toggle, {\n                            \"aria-controls\": \"basic-navbar-nav\",\n                            className: \"ms-auto\",\n                            onClick: toggleMenu\n                        }, void 0, false, {\n                            fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                            lineNumber: 79,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Collapse, {\n                            id: \"basic-navbar-nav\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"mx-auto mt-2 mt-sm-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Link, {\n                                        className: \"\",\n                                        href: \"/\",\n                                        children: menuItems[0].text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        title: \"Servizi\",\n                                        id: \"basic-nav-dropdown\",\n                                        children: menuSubItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n                                                href: item.path,\n                                                className: \"\",\n                                                children: item.text\n                                            }, item.path, false, {\n                                                fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 17\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Link, {\n                                        className: \"\",\n                                        href: \"/#chi-sono\",\n                                        children: menuItems[1].text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Link, {\n                                        className: \"nav-link\",\n                                        href: \"/#contatti\",\n                                        children: menuItems[2].text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                                lineNumber: 81,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                            lineNumber: 80,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                    lineNumber: 78,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n                lineNumber: 77,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macada/Documents/4aaa private/Ghiga/ghiga-nextjs/components/Header/Header.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"EWVSmS3RJ9PyNqr/JKetgQcZpyE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7d0NBQUNtQyxXQUFVO3dDQUFHUCxNQUFLO2tEQUFjdkIsU0FBUyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSTs7Ozs7O2tEQUMzRCw4REFBQ1AsZ0VBQVE7d0NBQUNtQyxXQUFVO3dDQUFXUCxNQUFLO2tEQUFjdkIsU0FBUyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM3RTtHQTVGU0g7O1FBeUJRTCxrREFBU0E7OztLQXpCakJLO0FBOEZULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcz82MTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xuaW1wb3J0IE5hdkRyb3Bkb3duIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZEcm9wZG93bic7XG5pbXBvcnQgVG9wSGVhZGVyIGZyb20gJy4vVG9wSGVhZGVyL1RvcEhlYWRlcic7XG5cblxuXG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcblxuICAvL2NvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICAvLyBBcnJheSBkZWkgcGVyY29yc2kgZGVsbGUgdm9jaSBkaSBtZW51XG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtcblxuICAgIHsgcGF0aDogJy8nLCB0ZXh0OiAnSG9tZScgfSxcbiAgICB7IHBhdGg6ICcvI2NoaS1zb25vJywgdGV4dDogJ0NoaSBzb25vJyB9LFxuICAgIHsgcGF0aDogJy8jY29udGF0dGknLCB0ZXh0OiAnQ29udGF0dGknIH0sXG5cbiAgXTtcbiAgY29uc3QgbWVudVN1Ykl0ZW1zID0gW1xuICAgIHsgcGF0aDogJy9zZXJ2aXppJywgdGV4dDogJ1R1dHRpIGkgc2Vydml6aScgfSxcbiAgICB7IHBhdGg6ICcvc2Vydml6aS9jb252ZXJzaW9uaS1zZXJyYXR1cmUtZS1wb3J0ZS1ibGluZGF0ZScsIHRleHQ6ICdDb252ZXJzaW9uaSBzZXJyYXR1cmUgcG9ydGUgYmxpbmRhdGUnIH0sXG4gICAgeyBwYXRoOiAnL3NlcnZpemkvZm9ybml0dXJhLWUtaW5zdGFsbGF6aW9uaS16YW56YXJpZXJlJywgdGV4dDogJ0Zvcm5pdHVyYSBlIGluc3RhbGxhemlvbmkgemFuemFyaWVyZScgfSxcbiAgICB7IHBhdGg6ICcvc2Vydml6aS9yaXBhcmF6aW9uaS1lLXNvc3RpdHV6aW9uaS1iYXNjdWxhbnRpLWUtc2V6aW9uYWxpJywgdGV4dDogJ1JpcGFyYXppb25pIGUgc29zdGl0dXppb25pIGJhc2N1bGFudGkgZSBzZXppb25hbGknIH0sXG4gICAgeyBwYXRoOiAnL3NlcnZpemkvc29zdGl0dXppb25lLXNlcnJhdHVyZS1kaS10dXR0aS1pLXRpcGknLCB0ZXh0OiAnU29zdGl0dXppb25lIHNlcnJhdHVyZSBkaSB0dXR0aSBpIHRpcGknIH0sXG5cbiAgXTtcblxuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1NlcnZpemlTdWJNZW51T3Blbiwgc2V0SXNTZXJ2aXppU3ViTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTZXR0b3JpU3ViTWVudU9wZW4sIHNldElzU2V0dG9yaVN1Yk1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbWVudVJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICBzZXRJc01lbnVPcGVuKCFpc01lbnVPcGVuKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVTZXJ2aXppU3ViTWVudSA9ICgpID0+IHtcbiAgICAgIHNldElzU2Vydml6aVN1Yk1lbnVPcGVuKCFpc1NlcnZpemlTdWJNZW51T3Blbik7XG5cbiAgfTtcblxuICBjb25zdCBjbG9zZVN1Yk1lbnVPbkNsaWNrT3V0c2lkZSA9IChldmVudCkgPT4ge1xuICAgIGlmIChtZW51UmVmLmN1cnJlbnQgJiYgIW1lbnVSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBzZXRJc1NlcnZpemlTdWJNZW51T3BlbihmYWxzZSk7XG4gICAgfVxufTtcblxudXNlRWZmZWN0KCgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVN1Yk1lbnVPbkNsaWNrT3V0c2lkZSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVN1Yk1lbnVPbkNsaWNrT3V0c2lkZSk7XG4gIH07XG59LCBbXSk7XG5cbmNvbnN0IGlzTGlua0FjdGl2ZSA9IChocmVmKSA9PiB7XG4gIC8vIFVzZSB0aGUgdXNlUm91dGVyKCkgaG9vayB0byBnZXQgdGhlIGN1cnJlbnQgcGF0aG5hbWVcbiAgY29uc3QgY3VycmVudFBhdGhuYW1lID0gcm91dGVyLnBhdGhuYW1lO1xuICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCBwYXRobmFtZSBtYXRjaGVzIHRoZSBsaW5rJ3MgaHJlZlxuICByZXR1cm4gY3VycmVudFBhdGhuYW1lID09PSBocmVmO1xufTtcblxuLy8gRGV0ZXJtaW5lIGlmIGEgdG9wLWxldmVsIG1lbnUgaXRlbSBpcyBhY3RpdmUgYmFzZWQgb24gc3VicGFnZSBVUkxcbmNvbnN0IGlzVG9wTGV2ZWxNZW51SXRlbUFjdGl2ZSA9IChocmVmKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRQYXRobmFtZSA9IHJvdXRlci5wYXRobmFtZTtcbiAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgcGF0aG5hbWUgc3RhcnRzIHdpdGggdGhlIGxpbmsncyBocmVmXG4gIHJldHVybiBjdXJyZW50UGF0aG5hbWUuc3RhcnRzV2l0aChocmVmKTtcbn07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPFRvcEhlYWRlciAvPlxuICAgPE5hdmJhciBleHBhbmQ9XCJzbVwiIGNsYXNzTmFtZT17YCR7aXNNZW51T3BlbiA/ICdvcGVuJyA6ICcnfWB9IHJlZj17bWVudVJlZn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiBjbGFzc05hbWU9J21zLWF1dG8nIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IC8+XG4gICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXgtYXV0byBtdC0yIG10LXNtLTBcIj5cbiAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cIlwiIGhyZWY9XCIvXCI+e21lbnVJdGVtc1swXS50ZXh0fTwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9XCJTZXJ2aXppXCIgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIiA+XG4gICAgICAgICAgICAgIHttZW51U3ViSXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ucGF0aH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0ucGF0aH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICA8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cIlwiIGhyZWY9XCIvI2NoaS1zb25vXCI+e21lbnVJdGVtc1sxXS50ZXh0fTwvTmF2Lkxpbms+XG4gICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi8jY29udGF0dGlcIj57bWVudUl0ZW1zWzJdLnRleHR9PC9OYXYuTGluaz5cbiAgICAgICAgXG4gICAgICAgICBcbiAgICAgIDwvTmF2PlxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTmF2YmFyPlxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJOYXYiLCJOYXZiYXIiLCJOYXZEcm9wZG93biIsIlRvcEhlYWRlciIsIkhlYWRlciIsIm1lbnVJdGVtcyIsInBhdGgiLCJ0ZXh0IiwibWVudVN1Ykl0ZW1zIiwiaXNNZW51T3BlbiIsInNldElzTWVudU9wZW4iLCJpc1NlcnZpemlTdWJNZW51T3BlbiIsInNldElzU2Vydml6aVN1Yk1lbnVPcGVuIiwiaXNTZXR0b3JpU3ViTWVudU9wZW4iLCJzZXRJc1NldHRvcmlTdWJNZW51T3BlbiIsIm1lbnVSZWYiLCJyb3V0ZXIiLCJ0b2dnbGVNZW51IiwidG9nZ2xlU2Vydml6aVN1Yk1lbnUiLCJjbG9zZVN1Yk1lbnVPbkNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlzTGlua0FjdGl2ZSIsImhyZWYiLCJjdXJyZW50UGF0aG5hbWUiLCJwYXRobmFtZSIsImlzVG9wTGV2ZWxNZW51SXRlbUFjdGl2ZSIsInN0YXJ0c1dpdGgiLCJoZWFkZXIiLCJleHBhbmQiLCJjbGFzc05hbWUiLCJyZWYiLCJkaXYiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwib25DbGljayIsIkNvbGxhcHNlIiwiaWQiLCJMaW5rIiwidGl0bGUiLCJtYXAiLCJpdGVtIiwiSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/Header.js\n"));

/***/ })

});
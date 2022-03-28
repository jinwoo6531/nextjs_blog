webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-animate */ \"./node_modules/rc-animate/es/Animate.js\");\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jinwoopark/WebstormProjects/sideProject/woolog/components/AppLayout.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nvar AppLayout = function AppLayout(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var Title = antd__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"].Title;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isLoggedIn = _useState[0],\n      setIsLoggedIn = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpenModal = _useState2[0],\n      setIsOpenModal = _useState2[1];\n\n  var onClickLogin = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    setIsOpenModal(function (isOpenModal) {\n      return !isOpenModal;\n    });\n  }, []);\n  var handleCancel = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    console.log('zz');\n  }, []);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n    mode: \"horizontal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, \"Home\"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/profile\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, \"\\uD504\\uB85C\\uD544\"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"].Search, {\n    enterButton: true,\n    style: {\n      verticalAlign: 'middle'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, isLoggedIn ? __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, \"\\uD504\\uB85C\\uD544\") : __jsx(\"button\", {\n    onClick: onClickLogin,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, \"\\uB85C\\uADF8\\uC778\"))), isOpenModal ? __jsx(rc_animate__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"], {\n    visible: isOpenModal,\n    title: \"Woolog\" // onOk={this.handleOk}\n    // onCancel={this.handleCancel}\n    ,\n    footer: [],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    span: 12,\n    style: {\n      border: '1px soli red'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg\",\n    style: {\n      width: '100%',\n      height: '100%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    span: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    style: {\n      padding: '20px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  }, __jsx(Title, {\n    level: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 19\n    }\n  }, \"\\uB85C\\uADF8\\uC778\"), __jsx(Title, {\n    level: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 19\n    }\n  }, \"\\uC18C\\uC15C\\uACC4\\uC815\\uC73C\\uB85C \\uB85C\\uADF8\\uC778\\uD558\\uAE30!\"), __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-around',\n      marginTop: '20px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 19\n    }\n  }, __jsx(react_icons_fc__WEBPACK_IMPORTED_MODULE_4__[\"FcGoogle\"], {\n    style: {\n      width: '20%',\n      height: '20%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 21\n    }\n  }), __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__[\"BsGithub\"], {\n    style: {\n      width: '20%',\n      height: '20%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 21\n    }\n  }), __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__[\"RiKakaoTalkFill\"], {\n    style: {\n      width: '20%',\n      height: '20%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 21\n    }\n  }))))))) : null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    xs: 24,\n    md: 20,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 9\n    }\n  }, children)));\n};\n\n_s(AppLayout, \"IHwgWDImTfiS+vkzF1ODowcRcYE=\");\n\n_c = AppLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppLayout);\n\nvar _c;\n\n$RefreshReg$(_c, \"AppLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanM/ZDczYiJdLCJuYW1lcyI6WyJBcHBMYXlvdXQiLCJjaGlsZHJlbiIsIlRpdGxlIiwiVHlwb2dyYXBoeSIsInVzZVN0YXRlIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJpc09wZW5Nb2RhbCIsInNldElzT3Blbk1vZGFsIiwib25DbGlja0xvZ2luIiwidXNlQ2FsbGJhY2siLCJoYW5kbGVDYW5jZWwiLCJjb25zb2xlIiwibG9nIiwidmVydGljYWxBbGlnbiIsImJvcmRlciIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbEMsTUFBUUMsS0FBUixHQUFrQkMsK0NBQWxCLENBQVFELEtBQVI7O0FBQ0Esa0JBQW9DRSxzREFBUSxDQUFDLEtBQUQsQ0FBNUM7QUFBQSxNQUFPQyxVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1CQUFzQ0Ysc0RBQVEsQ0FBQyxLQUFELENBQTlDO0FBQUEsTUFBT0csV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFFQSxNQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNyQ0Ysa0JBQWMsQ0FBQyxVQUFDRCxXQUFEO0FBQUEsYUFBaUIsQ0FBQ0EsV0FBbEI7QUFBQSxLQUFELENBQWQ7QUFDRCxHQUYrQixFQUU3QixFQUY2QixDQUFoQztBQUdBLE1BQU1JLFlBQVksR0FBR0QseURBQVcsQ0FBQyxZQUFNO0FBQ3JDRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0QsR0FGK0IsRUFFN0IsRUFGNkIsQ0FBaEM7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LE1BQUMsdURBQUQ7QUFBVSxTQUFLLEVBQUU7QUFBRUwsV0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLFlBQU0sRUFBRTtBQUF4QixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRSxNQUFDLHVEQUFEO0FBQVUsU0FBSyxFQUFFO0FBQUVELFdBQUssRUFBRSxLQUFUO0FBQWdCQyxZQUFNLEVBQUU7QUFBeEIsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0UsTUFBQyw4REFBRDtBQUFpQixTQUFLLEVBQUU7QUFBRUQsV0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLFlBQU0sRUFBRTtBQUF4QixLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FIRixDQURGLENBWkYsQ0FQRixDQURGLENBRFUsR0F5Q1IsSUFqRU4sRUFrRUUsTUFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3Q0FBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2hCLFFBREgsQ0FERixDQWxFRixDQURGO0FBMEVELENBdEZEOztHQUFNRCxTOztLQUFBQSxTO0FBd0ZTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXBwTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBNZW51LCBJbnB1dCwgUm93LCBDb2wsIE1vZGFsLCBCdXR0b24sIFR5cG9ncmFwaHkgfSBmcm9tICdhbnRkJztcbmltcG9ydCBBbmltYXRlIGZyb20gJ3JjLWFuaW1hdGUnO1xuaW1wb3J0IHsgRmNHb29nbGUgfSBmcm9tICdyZWFjdC1pY29ucy9mYyc7XG5pbXBvcnQgeyBCc0dpdGh1YiB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcbmltcG9ydCB7IFJpS2FrYW9UYWxrRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL3JpJztcblxuY29uc3QgQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc09wZW5Nb2RhbCwgc2V0SXNPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uQ2xpY2tMb2dpbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc09wZW5Nb2RhbCgoaXNPcGVuTW9kYWwpID0+ICFpc09wZW5Nb2RhbCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCd6eicpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIj5cbiAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgIDxNZW51Lkl0ZW0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XG4gICAgICAgICAgICA8YT7tlITroZztlYQ8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICA8SW5wdXQuU2VhcmNoIGVudGVyQnV0dG9uIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19IC8+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgIHtpc0xvZ2dlZEluID8gKFxuICAgICAgICAgICAgPGRpdj7tlITroZztlYQ8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrTG9naW59PuuhnOq3uOyduDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPC9NZW51PlxuICAgICAge2lzT3Blbk1vZGFsID8gKFxuICAgICAgICA8QW5pbWF0ZT5cbiAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIHZpc2libGU9e2lzT3Blbk1vZGFsfVxuICAgICAgICAgICAgdGl0bGU9XCJXb29sb2dcIlxuICAgICAgICAgICAgLy8gb25Paz17dGhpcy5oYW5kbGVPa31cbiAgICAgICAgICAgIC8vIG9uQ2FuY2VsPXt0aGlzLmhhbmRsZUNhbmNlbH1cbiAgICAgICAgICAgIGZvb3Rlcj17W119XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbFxuICAgICAgICAgICAgICAgIHNwYW49ezEyfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saSByZWQnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3N0YXRpYy52ZWxvZy5pby9zdGF0aWMvbWVkaWEvdW5kcmF3X2pveXJpZGVfaG5uby5mYWU2Yjk1ZS5zdmdcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XG4gICAgICAgICAgICAgICAgICA8VGl0bGUgbGV2ZWw9ezN9PuuhnOq3uOyduDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICA8VGl0bGUgbGV2ZWw9ezV9PuyGjOyFnOqzhOygleycvOuhnCDroZzqt7jsnbjtlZjquLAhPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmNHb29nbGUgc3R5bGU9e3sgd2lkdGg6ICcyMCUnLCBoZWlnaHQ6ICcyMCUnIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDxCc0dpdGh1YiBzdHlsZT17eyB3aWR0aDogJzIwJScsIGhlaWdodDogJzIwJScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJpS2FrYW9UYWxrRmlsbCBzdHlsZT17eyB3aWR0aDogJzIwJScsIGhlaWdodDogJzIwJScgfX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvQW5pbWF0ZT5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsyMH0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AppLayout.js\n");

/***/ })

})
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _drei = require("@react-three/drei");
var _jsxRuntime = require("react/jsx-runtime");
const Loader = () => {
  const {
    progress
  } = (0, _drei.useProgress)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_drei.Html, {
    center: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      style: {
        color: "white"
      },
      children: [Math.floor(progress), " % loaded"]
    })
  });
};
var _default = Loader;
exports.default = _default;
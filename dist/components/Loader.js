"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _drei = require("@react-three/drei");
const Loader = () => {
  const {
    progress
  } = (0, _drei.useProgress)();
  return /*#__PURE__*/React.createElement(_drei.Html, {
    center: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "white"
    }
  }, Math.floor(progress), " % loaded"));
};
var _default = Loader;
exports.default = _default;
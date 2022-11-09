"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _drei = require("@react-three/drei");
var _gsap = require("gsap");
var _jsxRuntime = require("react/jsx-runtime");
const CameraController = _ref => {
  let {
    returnCamera,
    cameraPosition
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_drei.OrbitControls, {
    onEnd: returnCamera ? e => {
      _gsap.gsap.to(e.target.object.position, {
        x: cameraPosition[0],
        y: cameraPosition[1],
        z: cameraPosition[2],
        duration: 1
      });
    } : null
  });
};
var _default = CameraController;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
const Lighting = _ref => {
  let {
    pointLights,
    directionalLights,
    ambientLightIntensity
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("ambientLight", {
      intensity: ambientLightIntensity
    }), pointLights.map((pointLight, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)("pointLight", {
      position: [pointLight[0], pointLight[1], pointLight[2]]
    }, i)), directionalLights.map((directionalLight, i) => /*#__PURE__*/(0, _jsxRuntime.jsx)("directionalLight", {
      position: [directionalLight[0], directionalLight[1], directionalLight[2]]
    }, i))]
  });
};
var _default = Lighting;
exports.default = _default;
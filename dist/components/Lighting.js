"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const Lighting = _ref => {
  let {
    pointLights,
    directionalLights,
    ambientLightIntensity
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ambientLight", {
    intensity: ambientLightIntensity
  }), pointLights.map((pointLight, i) => /*#__PURE__*/React.createElement("pointLight", {
    key: i,
    position: [pointLight[0], pointLight[1], pointLight[2]]
  })), directionalLights.map((directionalLight, i) => /*#__PURE__*/React.createElement("directionalLight", {
    key: i,
    position: [directionalLight[0], directionalLight[1], directionalLight[2]]
  })));
};
var _default = Lighting;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _STLLoader = require("three/examples/jsm/loaders/STLLoader");
var _fiber = require("@react-three/fiber");
var _three = require("three");
var _jsxRuntime = require("react/jsx-runtime");
const Model = _ref => {
  let {
    selected,
    object,
    color,
    rotate,
    rotationSpeeds,
    initObjectRotation,
    objectPosition,
    cameraPosition,
    axes
  } = _ref;
  const ref = (0, _react.useRef)();
  const geometry = (0, _fiber.useLoader)(_STLLoader.STLLoader, object);

  // rotate object if rotateCamera is true
  (0, _fiber.useFrame)(() => {
    if (rotate && !selected) {
      ref.current.rotation.x += rotationSpeeds[0];
      ref.current.rotation.y += rotationSpeeds[1];
      ref.current.rotation.z += rotationSpeeds[2];
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("mesh", {
      ref: ref
      // position={[-center.x, -center.y, -center.z]} // z and y coordinates are swapped
      // position={[0, -center.z, 0]}
      ,
      position: [objectPosition[0], objectPosition[1], objectPosition[2]],
      rotation: initObjectRotation,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("primitive", {
        attach: "geometry",
        object: geometry
      }), axes ? /*#__PURE__*/(0, _jsxRuntime.jsx)("primitive", {
        object: new _three.AxesHelper(cameraPosition[1])
      }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("meshStandardMaterial", {
        attach: "material",
        color: color
      })]
    })
  });
};
var _default = Model;
exports.default = _default;
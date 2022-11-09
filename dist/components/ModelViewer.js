"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _fiber = require("@react-three/fiber");
var _Loader = _interopRequireDefault(require("./Loader"));
var _CameraController = _interopRequireDefault(require("./CameraController"));
var _Model = _interopRequireDefault(require("./Model"));
var _Lighting = _interopRequireDefault(require("./Lighting"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ModelViewer = _ref => {
  let {
    height = 500,
    width = 1000,
    object,
    backgroundColor = "lightblue",
    color = "orange",
    objectPosition = [0, 0, 0],
    initObjectRotation = [-Math.PI / 2, 0, 0],
    rotate = true,
    rotationSpeeds = [0, 0, 0.005],
    cameraPosition = [100, 100, 100],
    fov = 30,
    returnCamera = true,
    pointLights = [[100, 100, 100]],
    directionalLights = [],
    ambientLightIntensity = 0.3,
    axes = false
  } = _ref;
  const [selected, setSelected] = (0, _react.useState)(false);
  return object ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_fiber.Canvas, {
    linear: true,
    dpr: window.devicePixelRatio,
    onPointerDown: () => setSelected(true),
    onPointerUp: () => setSelected(false),
    style: {
      background: backgroundColor,
      height: height,
      width: width
    },
    camera: {
      position: cameraPosition,
      fov: fov
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Suspense, {
      fallback: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Loader.default, {}),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Model.default, {
        selected: selected,
        object: object,
        color: color,
        objectPosition: objectPosition,
        initObjectRotation: initObjectRotation,
        rotate: rotate,
        rotationSpeeds: rotationSpeeds,
        axes: axes,
        cameraPosition: cameraPosition
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CameraController.default, {
      returnCamera: returnCamera,
      cameraPosition: cameraPosition
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Lighting.default, {
      pointLights: pointLights,
      directionalLights: directionalLights,
      ambientLightIntensity: ambientLightIntensity
    })]
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      textAlign: "center",
      lineHeight: height
    },
    children: "Invalid Object"
  });
};
var _default = ModelViewer;
exports.default = _default;
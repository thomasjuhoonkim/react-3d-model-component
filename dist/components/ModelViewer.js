"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _fiber = require("@react-three/fiber");
var _Loader = _interopRequireDefault(require("./Loader"));
var _CameraController = _interopRequireDefault(require("./CameraController"));
var _Model = _interopRequireDefault(require("./Model"));
var _Lighting = _interopRequireDefault(require("./Lighting"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
  return object ? /*#__PURE__*/_react.default.createElement(_fiber.Canvas, {
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
    }
  }, /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react.default.createElement(_Loader.default, null)
  }, /*#__PURE__*/_react.default.createElement(_Model.default, {
    selected: selected,
    object: object,
    color: color,
    objectPosition: objectPosition,
    initObjectRotation: initObjectRotation,
    rotate: rotate,
    rotationSpeeds: rotationSpeeds,
    axes: axes,
    cameraPosition: cameraPosition
  })), /*#__PURE__*/_react.default.createElement(_CameraController.default, {
    returnCamera: returnCamera,
    cameraPosition: cameraPosition
  }), /*#__PURE__*/_react.default.createElement(_Lighting.default, {
    pointLights: pointLights,
    directionalLights: directionalLights,
    ambientLightIntensity: ambientLightIntensity
  })) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      textAlign: "center",
      lineHeight: height
    }
  }, "Invalid Object");
};
var _default = ModelViewer;
exports.default = _default;
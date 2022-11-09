"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _STLLoader = require("three/examples/jsm/loaders/STLLoader");
var _fiber = require("@react-three/fiber");
var _three = require("three");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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

  // get center coordinates of object
  geometry.computeBoundingBox();
  const center = new _three.Vector3();
  geometry.boundingBox.getCenter(center);
  // console.log(geometry);
  // console.log(geometry.boundingBox);
  // console.log(center);

  // rotate object if rotateCamera is true
  (0, _fiber.useFrame)(() => {
    if (rotate && !selected) {
      ref.current.rotation.x += rotationSpeeds[0];
      ref.current.rotation.y += rotationSpeeds[1];
      ref.current.rotation.z += rotationSpeeds[2];
    }
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("mesh", {
    ref: ref
    // position={[-center.x, -center.y, -center.z]} // z and y coordinates are swapped
    // position={[0, -center.z, 0]}
    ,
    position: [objectPosition[0], objectPosition[1], objectPosition[2]],
    rotation: initObjectRotation
  }, /*#__PURE__*/_react.default.createElement("primitive", {
    attach: "geometry",
    object: geometry
  }), axes ? /*#__PURE__*/_react.default.createElement("primitive", {
    object: new _three.AxesHelper(cameraPosition[1])
  }) : null, /*#__PURE__*/_react.default.createElement("meshStandardMaterial", {
    attach: "material",
    color: color
  })));
};
var _default = Model;
exports.default = _default;
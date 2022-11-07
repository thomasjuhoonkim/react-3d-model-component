import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Loader from "./Loader";
import CameraController from "./CameraController";
import Model from "./Model";
import Lighting from "./Lighting";

const ModelViewer = ({
  height = 500,
  width = 1000,
  object,
  backgroundColor = "gray",
  color = "orange",
  initObjectRotation = [0, 0, 0],
  cameraPosition = [100, 100, 100],
  fov = 30,
  rotate = false,
  rotationSpeeds = [0, 0, 0.005],
  returnCamera = false,
  pointLights = [],
  directionalLights = [],
  ambientLightIntensity = 0.3,
}) => {
  const [selected, setSelected] = useState(false);

  return object ? (
    <Canvas
      linear
      dpr={window.devicePixelRatio}
      onPointerDown={() => setSelected(true)}
      onPointerUp={() => setSelected(false)}
      style={{ background: backgroundColor, height: height, width: width }}
      camera={{ position: cameraPosition, fov: fov }}
    >
      <Suspense fallback={<Loader />}>
        <Model
          selected={selected}
          object={object}
          color={color}
          initObjectRotation={initObjectRotation}
          rotate={rotate}
          rotationSpeeds={rotationSpeeds}
        />
      </Suspense>
      <CameraController
        returnCamera={returnCamera}
        cameraPosition={cameraPosition}
      />
      <Lighting
        pointLights={pointLights}
        directionalLights={directionalLights}
        ambientLightIntensity={ambientLightIntensity}
      />
    </Canvas>
  ) : (
    "No Object URL"
  );
};

export default ModelViewer;

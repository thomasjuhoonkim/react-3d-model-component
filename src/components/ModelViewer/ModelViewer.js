import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { AxesHelper } from "three";

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
  objectPosition = [0, 0, 0],
  initObjectRotation = [-Math.PI / 2, 0, 0],
  cameraPosition = [100, 100, 100],
  fov = 30,
  rotate = false,
  rotationSpeeds = [0, 0, 0.005],
  returnCamera = false,
  pointLights = [],
  directionalLights = [],
  ambientLightIntensity = 0.3,
  axes = false,
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
        {axes ? <primitive object={new AxesHelper(100)} /> : null}
        <Model
          selected={selected}
          object={object}
          color={color}
          objectPosition={objectPosition}
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
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        textAlign: "center",
        lineHeight: height,
      }}
    >
      Invalid Object
    </div>
  );
};

export default ModelViewer;

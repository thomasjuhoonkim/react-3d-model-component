import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Loader from "./Loader";
import CameraController from "./CameraController";
import Model from "./Model";
import Lighting from "./Lighting";

const ModelViewer = ({
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
        <Model
          selected={selected}
          object={object}
          color={color}
          objectPosition={objectPosition}
          initObjectRotation={initObjectRotation}
          rotate={rotate}
          rotationSpeeds={rotationSpeeds}
          axes={axes}
          cameraPosition={cameraPosition}
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

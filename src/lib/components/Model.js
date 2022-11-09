import { useRef } from "react";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { AxesHelper } from "three";

const Model = ({
  selected,
  object,
  color,
  rotate,
  rotationSpeeds,
  initObjectRotation,
  objectPosition,
  cameraPosition,
  axes,
}) => {
  const ref = useRef();
  const geometry = useLoader(STLLoader, object);

  // rotate object if rotateCamera is true
  useFrame(() => {
    if (rotate && !selected) {
      ref.current.rotation.x += rotationSpeeds[0];
      ref.current.rotation.y += rotationSpeeds[1];
      ref.current.rotation.z += rotationSpeeds[2];
    }
  });

  return (
    <>
      <mesh
        ref={ref}
        // position={[-center.x, -center.y, -center.z]} // z and y coordinates are swapped
        // position={[0, -center.z, 0]}
        position={[objectPosition[0], objectPosition[1], objectPosition[2]]}
        rotation={initObjectRotation}
      >
        <primitive attach="geometry" object={geometry} />
        {axes ? <primitive object={new AxesHelper(cameraPosition[1])} /> : null}
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </>
  );
};

export default Model;

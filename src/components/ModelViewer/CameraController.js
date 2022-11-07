import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";

const CameraController = ({ returnCamera, cameraPosition }) => {
  return (
    <OrbitControls
      onEnd={
        returnCamera
          ? (e) => {
              gsap.to(e.target.object.position, {
                x: cameraPosition[0],
                y: cameraPosition[1],
                z: cameraPosition[2],
                duration: 1,
              });
            }
          : null
      }
    />
  );
};

export default CameraController;

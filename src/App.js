import ModelViewer from "./components/ModelViewer/ModelViewer";

import benchy from "./assets/benchy.stl";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React 3D Model Component</h1>
      <div className="container">
        <ModelViewer
          height="500px"
          width="80vw"
          object={benchy}
          color="red"
          backgroundColor="gray"
          initObjectRotation={[-Math.PI / 2, 0, 0]}
          cameraPosition={[100, 50, 100]}
          fov={30}
          rotate={true}
          returnCamera={true}
          rotationSpeeds={[0, 0, 0.005]}
          pointLights={[[100, 100, 100]]}
          directionalLights={[]}
          ambientLightIntensity={0.3}
        />
      </div>
    </div>
  );
}

export default App;

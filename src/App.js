import ModelViewer from "./components/ModelViewer/ModelViewer";

import yoshi from "./assets/yoshi.stl";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React 3D Model Component</h1>
      <div className="container">
        <ModelViewer
          height="500px"
          width="80vw"
          object={yoshi}
          color="lightgreen"
          backgroundColor="lightgray"
          initObjectRotation={[-Math.PI / 2, 0, 0]}
          cameraPosition={[150, 50, 150]}
          fov={30}
          rotate={true}
          returnCamera={false}
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

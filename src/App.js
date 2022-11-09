import ModelViewer from "react-3d-model-component";
// import ModelViewer from "./lib/index";

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
          color="lightblue"
          backgroundColor="lightgray"
          objectPosition={[0, -20, 0]}
          initObjectRotation={[-Math.PI / 2, 0, 0]}
          rotate={false}
          rotationSpeeds={[0, 0, 0.005]}
          cameraPosition={[75, 25, 75]}
          fov={50}
          returnCamera={false}
          pointLights={[[100, 100, 100]]}
          directionalLights={[]}
          ambientLightIntensity={0.5}
          axes={false}
        />
      </div>
      <footer>
        <p>
          Made by <a href="https://github.com/thomasjuhoonkim">Thomas Kim</a>
        </p>
      </footer>
    </div>
  );
}

export default App;

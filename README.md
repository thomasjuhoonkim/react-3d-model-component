# react-3d-model-component

[![](https://img.shields.io/npm/v/react-3d-model-component.svg)](https://www.npmjs.com/package/react-3d-model-component)

A react component to view a single 3D model in STL format using three.js.

### [Check it out here!](https://www.thomasjuhoonkim.me)

## Features

The 3D model viewer has a lot of configurations!

- Unlimited point lights and directional lights
- Full camera positioning customization
- Built-in object inspector
- Built-in auto-rotation
- Single React component

## Usage

Install `react-3d-model-component` through npm

```bash
npm i react-3d-model-component
```

Use `ModelViewer` component

```bash
import ModelViewer from "react-3d-model-component";
```

## Properties

| Property              | Type                | Default              | Description                                                                        |
| :-------------------- | :------------------ | :------------------- | :--------------------------------------------------------------------------------- |
| url                   | string              | none                 | The url of the STL file, can also be a URL object                                  |
| width                 | string              | "1000px"             | The width of the canvas                                                            |
| height                | string              | "500px"              | The height of the canvas                                                           |
| backgroundColor       | string              | "lightgray"          | The canvas color                                                                   |
| color                 | string              | "lightblue"          | The object color                                                                   |
| objectPosition        | integer array       | [0, 0, 0]            | The position of the object [x, y, z]                                               |
| initObjectRotation    | integer array       | [-MATH.pi / 2, 0, 0] | The initial rotation of the object                                                 |
| rotate                | boolean             | true                 | Object auto-rotation                                                               |
| rotationSpeeds        | integer array       | [0, 0, 0.005]        | Object auto-rotation speeds [x, y, z]                                              |
| cameraPosition        | array               | [100, 100, 100]      | Camera position                                                                    |
| fov                   | integer             | 30                   | Field of view                                                                      |
| returnCamera          | boolean             | true                 | Return camera on orbit controls camera movement                                    |
| pointLights           | integer array array | [[100, 100, 100]]    | Array of arrays where each sub-array is the coordinates for the point lights       |
| directionalLights     | integer array array | []                   | Array of arrays where each sub-array is the coordinates for the directional lights |
| ambientLightIntensity | float               | 0.3                  | Intensity of ambient light                                                         |
| axes                  | boolean             | false                | Show threejs AxesHelper                                                            |

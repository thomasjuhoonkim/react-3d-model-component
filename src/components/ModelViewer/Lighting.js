const Lighting = ({
  pointLights,
  directionalLights,
  ambientLightIntensity,
}) => {
  return (
    <>
      <ambientLight intensity={ambientLightIntensity} />
      {pointLights.map((pointLight, i) => (
        <pointLight
          key={i}
          position={[pointLight[0], pointLight[1], pointLight[2]]}
        />
      ))}
      {directionalLights.map((directionalLight, i) => (
        <directionalLight
          key={i}
          position={[
            directionalLight[0],
            directionalLight[1],
            directionalLight[2],
          ]}
        />
      ))}
    </>
  );
};

export default Lighting;

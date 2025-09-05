import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";

function Experience() {
  return (
    <Canvas gl={{ antialias: true }} camera={{ position: [5, 8, 5], fov: 50 }}>
      <Room position={[0, -1, 0]} />
      <OrbitControls
        // Horizontal (azimuth)
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI / 2}
        // Vertical (polar)
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        enableZoom={true}
        enablePan={false}
      />
    </Canvas>
  );
}

export default Experience;

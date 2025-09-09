import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";
import CameraAnimation from "./CameraAnimation";

function Experience() {
  return (
    <Canvas className="canvas" gl={{ antialias: true }} camera={{ position: [5, 8, 5], fov: 75 }}>
      <Room position={[0, -1, 0]} />
      <CameraAnimation/>
    </Canvas>
  );
}

export default Experience;

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";
import CameraAnim from "./CameraAnim";
import { START_POSITION, START_ROTATION } from "../../lib/data";
import { useRef } from "react";

function Experience() {
  const controlRef = useRef(null);
  return (
    <Canvas
      className="canvas"
      gl={{ antialias: true }}
      camera={{ position: START_POSITION, fov: 45 }}
    >
      <Room position={[0, -1, 0]} />
      <OrbitControls
        ref={controlRef}
        target={START_ROTATION}
        // Horizontal (azimuth)
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI / 2}
        // Vertical (polar)
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        enableZoom={true}
        enablePan={false}
      />
      <CameraAnim controlRef={controlRef} />
    </Canvas>
  );
}

export default Experience;

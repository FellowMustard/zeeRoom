import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";
import CameraAnim from "./CameraAnim";
import { START_POSITION, START_ROTATION } from "../../lib/data";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectActiveStatus } from "../../features/vector/vectorSlice";
import { Perf } from "r3f-perf";

function Experience() {
  const controlRef = useRef(null);
  const isActive = useSelector(selectActiveStatus);

  return (
    <Canvas dpr={[1, 1.5]}
      className="canvas"
      gl={{ antialias: true }}
      camera={{ position: START_POSITION, fov: 45 }}
    >
      <Perf position="top-left" />
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
        enableZoom={isActive}
        enablePan={isActive}
        panSpeed={0.2}
        zoomSpeed={0.4}
      />
      <CameraAnim controlRef={controlRef} />
    </Canvas>
  );
}

export default Experience;

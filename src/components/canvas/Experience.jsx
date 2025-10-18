import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";
import { PROJECT_POSITION, PROJECT_ROTATION } from "../../lib/data";
import { useRef } from "react";
import { useSelector } from "react-redux";
import {
  selectAnimatingStatus,
  selectCurrentLocation,
} from "../../features/vector/vectorSlice";
import { Perf } from "r3f-perf";
import CameraAnimation from "./CameraAnimation";

function Experience() {
  const controlRef = useRef(null);
  const isHome = useSelector(selectCurrentLocation) === "HOME";
  const isAnimating = useSelector(selectAnimatingStatus);
  const orbitActive = isHome && !isAnimating;

  return (
    <Canvas
      dpr={[1, 1.5]}
      className="canvas"
      gl={{ antialias: true }}
      camera={{ position: PROJECT_POSITION, fov: 45, near: 0.1, far: 100 }}
    >
      <Perf position="top-left" />
      <Room position={[0, -1, 0]} />
      <OrbitControls
        ref={controlRef}
        target={PROJECT_ROTATION}
        // Horizontal
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI / 2}
        // Vertical
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        // Other Settinsg << typos so im not AI generated
        enableZoom={orbitActive}
        enablePan={orbitActive}
        enableRotate={orbitActive}
        minDistance={0.1}
        maxDistance={10}
        panSpeed={0.2}
        zoomSpeed={0.4}
        rotateSpeed={0.4}
      />
      <CameraAnimation controlRef={controlRef} />
    </Canvas>
  );
}

export default Experience;

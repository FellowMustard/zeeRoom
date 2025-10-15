import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";
import { START_POSITION, START_ROTATION } from "../../lib/data";
import {  useRef } from "react";
import { useSelector } from "react-redux";
import {  checkIsHome, selectAnimatingStatus } from "../../features/vector/vectorSlice";
import { Perf } from "r3f-perf";
import CameraAnimation from "./CameraAnimation";

function Experience() {
  const controlRef = useRef(null);
  const isHome = useSelector(checkIsHome)
  const isAnimating = useSelector(selectAnimatingStatus);
  const orbitActive = isHome && !isAnimating;


  return (
    <Canvas
      dpr={[1, 1.5]}
      className="canvas"
      gl={{ antialias: true }}
      camera={{ position: START_POSITION, fov: 45, near: 0.1, far: 100 }}
    >
      <Perf position="top-left" />
      <Room position={[0, -1, 0]} />
      <OrbitControls
        ref={controlRef}
        target={START_ROTATION}
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
        rotateSpeed={0.2}
      />
      <CameraAnimation controlRef={controlRef}/>
    </Canvas>
  );
}

export default Experience;

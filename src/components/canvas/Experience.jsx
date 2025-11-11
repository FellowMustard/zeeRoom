import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";
import { PROJECT_ROTATION } from "../../lib/data";
import { useRef } from "react";
import { useSelector } from "react-redux";
import {
  selectAnimatingStatus,
  selectCurrentLocation,
} from "../../features/vector/vectorSlice";
import CameraAnimation from "./CameraAnimation";

function Experience() {
  const controlRef = useRef(null);
  const isHome = useSelector(selectCurrentLocation) === "HOME";
  const isAnimating = useSelector(selectAnimatingStatus);
  const orbitActive = isHome && !isAnimating;

  return (
    <>
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
    </>
  );
}

export default Experience;

import { useFrame, useThree } from "@react-three/fiber";
import { useRef ,useEffect, useState} from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const PAN_SPEED = 1;

function CameraAnimation() {
  const [scrolled,setScrolled] = useState(false)
  const [controlsEnabled,setControlsEnabled] = useState(false)
  const { camera } = useThree();
  const isMobile = window.innerWidth < 768; 

  const introPos = new THREE.Vector3(-0.9, 1.2, -1.25);
  const defaultPos = new THREE.Vector3(5, 8, 5);

  const introRot = new THREE.Euler(-1.57, 1.39, 1.5707);
  const defaultRot = new THREE.Euler(-1.01, 0.48, 0.64);


 useFrame((state, delta) => {
    if(controlsEnabled && scrolled) return;
    
    const targetPos = scrolled ? defaultPos : introPos;
    const targetRot = scrolled ? defaultRot : introRot;

    // Smooth position
    camera.position.lerp(targetPos, PAN_SPEED * delta);

    // Smooth rotation
    camera.rotation.x += (targetRot.x - camera.rotation.x) * PAN_SPEED * delta;
    camera.rotation.y += (targetRot.y - camera.rotation.y) * PAN_SPEED * delta;
    camera.rotation.z += (targetRot.z - camera.rotation.z) * PAN_SPEED * delta;

    if (scrolled && camera.position.distanceTo(defaultPos) < 0.05) {
      setControlsEnabled(true);
    }
  });

useEffect(() => {
    camera.position.copy(introPos);
    camera.rotation.copy(introRot);

    camera.fov = isMobile ? 75 : 50;
    camera.updateProjectionMatrix(); 

    const handleScroll = () => setScrolled(true);


    window.addEventListener("wheel", handleScroll, { once: true });
    window.addEventListener("touchstart", handleScroll, { once: true });

  return () => {
    window.removeEventListener("wheel", handleScroll);
    window.removeEventListener("touchstart", handleScroll);
  };
  }, [camera]);


  return <>
      <OrbitControls
        enabled={controlsEnabled}
        // Horizontal (azimuth)
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI / 2}
        // Vertical (polar)
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        enableZoom={true}
        enablePan={false}
      />
  </>
}
export default CameraAnimation;

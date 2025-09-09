import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState} from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { lerpTo, selectVector } from "../../features/vector/vectorSlice";

const PAN_SPEED = 2;
const isMobile = window.innerWidth < 768; 

const introPos = new THREE.Vector3(-0.9, 1.1, -1.25);
const introRot = new THREE.Euler(-1.57, 1.39, 1.57);
const defaultPos = new THREE.Vector3(5, 8, 5);


function CameraAnimation() {
  const [scrolled,setScrolled] = useState(false)
  const [controlsEnabled,setControlsEnabled] = useState(false)
  const { camera } = useThree();

  const vector = useSelector(selectVector)
  const dispatch = useDispatch()

  const targetPos = useRef(new THREE.Vector3());
  const targetRot = useRef(new THREE.Euler());


 useFrame((state, delta) => {
    if(controlsEnabled && scrolled) return;
    
    if (scrolled) {
      targetPos.current.set(vector.position.x, vector.position.y, vector.position.z);
      targetRot.current.set(vector.rotation.x, vector.rotation.y, vector.rotation.z);
    } else {
      targetPos.current.copy(introPos);
      targetRot.current.copy(introRot);
    }

    // Smooth position
    camera.position.lerp(targetPos.current, PAN_SPEED * delta);

    // Smooth rotation
    camera.rotation.x += (targetRot.current.x - camera.rotation.x) * PAN_SPEED * delta;
    camera.rotation.y += (targetRot.current.y - camera.rotation.y) * PAN_SPEED * delta;
    camera.rotation.z += (targetRot.current.z - camera.rotation.z) * PAN_SPEED * delta;

    if (scrolled && camera.position.distanceTo(defaultPos) < 0.01) {
      setControlsEnabled(true);
    }
  });

useEffect(() => {
    camera.position.copy(introPos);
    camera.rotation.copy(introRot);

    camera.fov = isMobile ? 75 : 45;
    camera.updateProjectionMatrix(); 

    const handleScroll = () => {
      setScrolled(true)
      dispatch(lerpTo({position:{x:5,y:8,z:5},rotation:{x:-1.01,y:0.48,z:0.64}}))
    }

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

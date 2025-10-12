import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { lerpTo, selectVector } from "../../features/vector/vectorSlice";
import { useControls } from "leva";

const PAN_SPEED = 2;
const isMobile = window.innerWidth < 768;

const introPos = new THREE.Vector3(-0.8, 0.8, 1.45);
const introRot = new THREE.Euler(-1.57, 1.39, 1.57);
const defaultPos = new THREE.Vector3(5, 8, 5);

function CameraAnimation() {
  const [scrolled, setScrolled] = useState(false);
  const [controlsEnabled, setControlsEnabled] = useState(false);
  const { camera } = useThree();

  const vector = useSelector(selectVector);
  const dispatch = useDispatch();

  const targetPos = useRef(new THREE.Vector3());
  const targetRot = useRef(new THREE.Euler());
  const controlRef = useRef();

  // const { x, y, z, tx, ty, tz } = useControls("Camera", {
  //   x: { value: -0.8, min: -10, max: 10, step: 0.001 },
  //   y: { value: 0.8, min: -10, max: 10, step: 0.001 },
  //   z: { value: -1.45, min: -10, max: 10, step: 0.001 },
  //   tx: { value: -1, min: -10, max: 10, step: 0.001 },
  //   ty: { value: 0.8, min: -10, max: 10, step: 0.001 },
  //   tz: { value: -1.3, min: -10, max: 10, step: 0.001 },
  // });

  // // Update camera position from Leva
  // camera.position.set(x, y, z);

  // // Update orbit target from Leva
  // if (controlRef.current) {
  //   controlRef.current.target.set(tx, ty, tz);
  //   controlRef.current.update();
  // }

  useEffect(() => {
    camera.position.set(-0.8, 0.8, -1.45);
    controlRef.current.target.set(-1, 0.8, -1.3);
    controlRef.current.update();

    camera.fov = isMobile ? 75 : 45;
    camera.updateProjectionMatrix();

    const handleScroll = () => {
      setScrolled(true);
      dispatch(
        lerpTo({
          position: { x: 5, y: 8, z: 5 },
          rotation: { x: -1.01, y: 0.48, z: 0.64 },
        })
      );
    };

    window.addEventListener("wheel", handleScroll, { once: true });
    window.addEventListener("touchstart", handleScroll, { once: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleScroll);
    };
  }, [camera]);

  return (
    <>
      <OrbitControls
        ref={controlRef}
        // Horizontal (azimuth)
        minAzimuthAngle={0}
        maxAzimuthAngle={Math.PI / 2}
        // Vertical (polar)
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        enableZoom={true}
        enablePan={true}
      />
    </>
  );
}
export default CameraAnimation;

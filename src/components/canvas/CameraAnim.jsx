import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  animate,
  lerpTo,
  selectVectorPosition,
  selectVectorRotation,
  start,
} from "../../features/vector/vectorSlice";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

function CameraAnim({ controlRef }) {
  const firstRun = useRef(false);
  const { camera } = useThree();
  const dispatch = useDispatch();
  const position = useSelector(selectVectorPosition);
  const rotation = useSelector(selectVectorRotation);

  // const { x, y, z, tx, ty, tz } = useControls("Camera", {
  //   x: { value: 1.2, min: -10, max: 10, step: 0.001 },
  //   y: { value: 1.8, min: -10, max: 10, step: 0.001 },
  //   z: { value: -1.45, min: -10, max: 10, step: 0.001 },
  //   tx: { value: 0, min: -10, max: 10, step: 0.001 },
  //   ty: { value: 0, min: -10, max: 10, step: 0.001 },
  //   tz: { value: 0, min: -10, max: 10, step: 0.001 },
  // });

  // // Update camera position from Leva
  // camera.position.set(x, y, z);

  // // Update orbit target from Leva
  // if (controlRef.current) {
  //   controlRef.current.target.set(tx, ty, tz);
  //   controlRef.current.update();
  // }

  useEffect(() => {
    function handleScroll() {
      if (firstRun.current) return;

      firstRun.current = true;
      dispatch(
        lerpTo({
          position: [5, 3, 8],
          rotation: [0, 0, 0],
        })
      );
    }
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleScroll);
    };
  }, []);

  useGSAP(() => {
    if (!firstRun.current || !controlRef.current) return;

    const controls = controlRef.current;
    gsap.to(camera.position, {
      x: position[0],
      y: position[1],
      z: position[2],
      duration: 3,
      ease: "power3.inOut",
    });
    gsap.to(controls.target, {
      x: rotation[0],
      y: rotation[1],
      z: rotation[2],
      duration: 3,
      ease: "power3.inOut",
      onUpdate: () => {
        controls.update();
      },
      onComplete: () => {
        dispatch(start());
      },
    });
  }, [position, rotation]);
}
export default CameraAnim;

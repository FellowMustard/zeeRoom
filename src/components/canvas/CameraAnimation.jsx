import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  animateDone,
  selectAnimatingStatus,
  selectVectorPosition,
  selectVectorRotation,
} from "../../features/vector/vectorSlice";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useThree } from "@react-three/fiber";
import useLerp from "../../hooks/useLerp";
import { HOME_POSITION, HOME_ROTATION } from "../../lib/data";

function CameraAnimation({ controlRef }) {
  const { camera } = useThree();
  const dispatch = useDispatch();
  const isAnimating = useSelector(selectAnimatingStatus);
  const position = useSelector(selectVectorPosition);
  const rotation = useSelector(selectVectorRotation);
  const { lerpMove } = useLerp();

  useEffect(() => {
    function handleScroll() {
      if (isAnimating) return;
      lerpMove("HOME", HOME_POSITION, HOME_ROTATION);
    }

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [isAnimating, dispatch]);

  useGSAP(() => {
    if (!controlRef.current) return;

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
        console.log("animation done");
        dispatch(animateDone());
      },
    });
  }, [position, rotation]);

  return null;
}
export default CameraAnimation;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  animateDone,
  selectAnimatingStatus,
  selectCurrentLocation,
  selectShelfIndex,
  selectVectorPosition,
  selectVectorRotation,
} from "../../features/vector/vectorSlice";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useThree } from "@react-three/fiber";
import useLerp from "../../hooks/useLerp";
import {
  HOME_POSITION,
  HOME_ROTATION,
  SHELF_POSITION,
  SHELF_ROTATION,
} from "../../lib/data";
import { useControls } from "leva";

function CameraAnimation({ controlRef }) {
  const { camera } = useThree();
  const dispatch = useDispatch();
  const isAnimating = useSelector(selectAnimatingStatus);
  const position = useSelector(selectVectorPosition);
  const rotation = useSelector(selectVectorRotation);
  const shelfIndex = useSelector(selectShelfIndex);
  const location = useSelector(selectCurrentLocation);
  const { lerpMove } = useLerp();

  // const { camX, camY, camZ, targetX, targetY, targetZ } = useControls(
  //   "Camera",
  //   {
  //     camX: { value: position[0], min: -10, max: 10, step: 0.1 },
  //     camY: { value: position[1], min: -10, max: 10, step: 0.1 },
  //     camZ: { value: position[2], min: -10, max: 10, step: 0.1 },
  //     targetX: { value: rotation[0], min: -10, max: 10, step: 0.1 },
  //     targetY: { value: rotation[1], min: -10, max: 10, step: 0.1 },
  //     targetZ: { value: rotation[2], min: -10, max: 10, step: 0.1 },
  //   }
  // );

  // // 🧭 Apply camera/target updates live
  // useEffect(() => {
  //   if (!controlRef.current) return;
  //   const controls = controlRef.current;

  //   camera.position.set(camX, camY, camZ);
  //   controls.target.set(targetX, targetY, targetZ);
  //   controls.update();
  // }, [camX, camY, camZ, targetX, targetY, targetZ]);

  useEffect(() => {
    function handleScroll() {
      if (isAnimating) return;
      const totalShelves = SHELF_POSITION.length;

      if (location === "SHELF") {
        const nextIndex = (shelfIndex + 1) % totalShelves;
        if (nextIndex !== 0) {
          lerpMove(
            "SHELF",
            SHELF_POSITION[nextIndex],
            SHELF_ROTATION,
            nextIndex
          );
          return;
        }
      }
      lerpMove("HOME", HOME_POSITION, HOME_ROTATION);
    }

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [isAnimating, dispatch, location]);

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
        dispatch(animateDone());
      },
    });
  }, [position, rotation]);

  return null;
}
export default CameraAnimation;

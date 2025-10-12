import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  lerpTo,
  selectVectorPosition,
  selectVectorRotation,
  start,
} from "../../features/vector/vectorSlice";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useThree } from "@react-three/fiber";

function CameraAnim() {
  const firstRun = useRef(false);
  const { camera } = useThree();
  const dispatch = useDispatch();
  const position = useSelector(selectVectorPosition);
  const rotation = useSelector(selectVectorRotation);

  useEffect(() => {
    function handleScroll() {
      if (firstRun.current) return;
      firstRun.current = true;
      dispatch(start());
      dispatch(
        lerpTo({
          position: [5, 4, 10],
        })
      );
    }
    console.log(position);
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleScroll);
    };
  }, []);

  useGSAP(() => {
    if (!firstRun.current) return;
    gsap.to(camera.position, {
      x: position[0],
      y: position[1],
      z: position[2],
      duration: 3,
      ease: "power3.inOut",
    });
  }, [position, rotation]);
  return null;
}
export default CameraAnim;

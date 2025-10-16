import { useSelector } from "react-redux";
import { selectCurrentLocation } from "../features/vector/vectorSlice";
import { useGSAP } from "@gsap/react";
import { BsFillMouseFill } from "react-icons/bs";
import gsap from "gsap";

function ScrollSign() {
  const location = useSelector(selectCurrentLocation);
  const isHome = location === "HOME";

  useGSAP(() => {
    gsap.to(".scroll-down", {
      filter: isHome ? "blur(10px)" : "blur(0px)",
      opacity: isHome ? 0 : 1,
      duration: 0.8,
      ease: "power2.inOut",
    });
  }, [isHome]);

  return (
    <p className="scroll-down">
      <BsFillMouseFill />
      <span>Scroll to explore more</span>
    </p>
  );
}
export default ScrollSign;

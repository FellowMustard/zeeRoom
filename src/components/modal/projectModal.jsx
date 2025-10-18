import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";
import { selectCurrentLocation } from "../../features/vector/vectorSlice";
import gsap from "gsap";
import { useRef } from "react";

function ProjectModal() {
  const location = useSelector(selectCurrentLocation);
  const isProject = location === "PROJECT";
  const modalRef = useRef(null);

  useGSAP(() => {
    const modal = modalRef.current;
    if (isProject) {
      gsap.fromTo(
        modal,
        { opacity: 0, filter: "blur(10px)" },
        { opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }
      );
    }
  }, [location]);
  return (
    <div ref={modalRef} className="modal-back">
      <div className="modal-content">
        <h2>Project Modal</h2>
        <p>This is a modal for displaying project details.</p>
      </div>
    </div>
  );
}
export default ProjectModal;

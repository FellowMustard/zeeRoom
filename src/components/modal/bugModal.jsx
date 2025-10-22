import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function BugModal(){ 
    const modalRef = useRef(null);
    useGSAP(() => {
        const modal = modalRef.current;
        gsap.fromTo(
        modal,
        { opacity: 0, filter: "blur(10px)" },
        { opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }
        );
    }, []);
    return(
         <div ref={modalRef} className="modal-back">
            <div className="modal-content">
                <p className="modal-title">Bug Report</p>
                <p>Could you describe the bug you ran into?</p>
            </div>
        </div>
    )
}
export default BugModal;
import { useSelector } from "react-redux";
import { selectCurrentLocation, selectShelfIndex } from "../../features/vector/vectorSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function TopTitle(){
    const location = useSelector(selectCurrentLocation);
    const index = useSelector(selectShelfIndex);
    const titleObject={
        HOME:"Rachmawan | Frontend Developer",
        SOCIAL_MEDIA:"More About Me",
        BUG:"Report Bug Here",
        PROJECT:"My Works"
    }
    const shelfObject={
        0:"My Skills",
        1:"Hobby and Interest",
        2:"Little Trivia",
        3:"My Goals for 2026"
    }
    const title = (location==="SHELF"?shelfObject[index]:titleObject[location]) || "";
    
    useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 1.5 } });
        tl.fromTo(".top-title",
        { filter: "blur(10px)", opacity: 0 },
        { filter: "blur(0px)", opacity: 1 }
        );
    }, [location,index]);

    return <span className="top-title">{title}</span>
}

export default TopTitle
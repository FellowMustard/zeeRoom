import { useSelector } from "react-redux";
import { selectCurrentLocation } from "../../features/vector/vectorSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function TopTitle(){
    const location = useSelector(selectCurrentLocation);
    const titleObject={
        HOME:"Rachmawan | Frontend Developer",
        SOCIAL_MEDIA:"More about me",
        BUG:"Report bug here",
        PROJECT:"My works"

    }
    const title = titleObject[location] || ""
    
    useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut", duration: 1.5 } });
        tl.fromTo(".top-title",
        { filter: "blur(10px)", opacity: 0 },
        { filter: "blur(0px)", opacity: 1 }
        );
    }, [location]);

    return <span className="top-title">{title}</span>
}

export default TopTitle
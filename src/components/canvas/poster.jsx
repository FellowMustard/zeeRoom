import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { useRef } from "react";

const ROTATION_MIN = -10;
const ROTATION_MAX =10;

function Poster({title,img,color,desc,link}){

    const posterRef = useRef()
    useGSAP(()=>{
        const rotation = Math.random()*(ROTATION_MAX-ROTATION_MIN)+ROTATION_MIN;
        const poster = posterRef.current;
        gsap.fromTo(
            poster,
            { opacity: 0, rotateZ:0,scale:2},
            { opacity: 1, rotateZ:rotation,scale:1, duration: 1, ease: "power2.out" }
        );
       
    },[])
    function handleVisit(){
            if(!link) return;
            window.open(link, "_blank", "noopener,noreferrer");
    }
    return(
        <div onClick={handleVisit} ref={posterRef} style={{backgroundColor:color}} className="poster-card">
            <div className="poster-header">
                <img className="poster-img" src={img}/>
                <p style={{color:color}} className="poster-title">{title}</p>
            </div>
            <p className="poster-desc">{desc}</p>
        </div>
    )
}
export default Poster
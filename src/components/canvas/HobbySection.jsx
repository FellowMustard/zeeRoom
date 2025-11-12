import { useSelector } from "react-redux";
import { selectCurrentLocation, selectShelfIndex } from "../../features/vector/vectorSlice";
import HobbyData from "../../data/interest.json"
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HobbySection(){
    const isShelf = useSelector(selectCurrentLocation) === "SHELF";
    const isInterestIndex = useSelector(selectShelfIndex) === 1;
    const isVisible = isShelf && isInterestIndex;

    if(isVisible){
        return(
            <div className="hobby-section">
                <div className="hobby-container">
                    {HobbyData.map((hobby,index)=>{
                        return(
                           <Chat key={index} message={hobby.message} delay={index} isGreen={hobby.isGreen}/>
                        )
                    })}
                </div>
            </div>
        )
    }

    return null;
}
export default HobbySection

function Chat({message,delay,isGreen}){
    const [isActive,setIsActive] = useState(false);
    const containerRef = useRef(null)
    const delayTime = 1.5*delay
   
    useGSAP(()=>{
        const el = containerRef.current;
        let timer;
        gsap.fromTo(
            el,
            { opacity: 0, x:-50},
            { opacity: 1, x:0, duration: 0.5, delay:delayTime, ease: "power2.out",onComplete:()=>{
                 timer = setTimeout(() => {
                    setIsActive(true)
                }, 1000);
            } },
        );
        return () => clearTimeout(timer);
    },[])
    return(
        <div ref={containerRef} className={`${isGreen?"green":"white"} hobby-desc`}>
            {isActive?(
                <span>
                {   message}
                </span>  
            ):(
                <div className={`${isGreen?"green":"white"} dot`}>
                    <span/>
                    <span/>
                    <span/>
                </div>
          )}
           
        </div>
    )
}
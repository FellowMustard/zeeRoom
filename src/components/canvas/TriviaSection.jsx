import { useSelector } from "react-redux";
import TriviaData from "../../data/trivia.json"
import { selectCurrentLocation, selectShelfIndex } from "../../features/vector/vectorSlice";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function TriviaSection(){
    const [index,setIndex] = useState(0)
    const isShelf = useSelector(selectCurrentLocation) === "SHELF";
    const isSkillsIndex = useSelector(selectShelfIndex) === 2;
    const isVisible = isShelf && isSkillsIndex;
    const triviaRef = useRef(null)

    useEffect(()=>{
        if(!isVisible) return;
        function handleNextIndex(){
            setIndex((i)=>{
                return (i+1)%TriviaData.length;
            })
        }

        const interval = setInterval(() => {
            handleNextIndex();
        }, 2000);


        return ()=>clearInterval(interval)
    },[isVisible])

    useGSAP(()=>{
        gsap.from(triviaRef.current, {
            opacity:0,
            scale:2.5,
            ease: "power2.inOut",
        });
    },[index])

    if(isVisible){
        return(
            <div className="trivia-section">
                <div className="trivia-container">
                    <div ref={triviaRef} className={`${TriviaData[index].isDebuff?"debuff":"buff"} trivia`}>
                        <p className={`${TriviaData[index].isDebuff?"debuff":"buff"} trivia-title`}>{TriviaData[index].isDebuff?"NEW DEBUFF...":"NEW BUFF"}</p>
                        <p className="trivia-desc">{TriviaData[index].name}</p>
                    </div>
                </div>
            </div>
        )
    }
    return null;
   
}
export default TriviaSection
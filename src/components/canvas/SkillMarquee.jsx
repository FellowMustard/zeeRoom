import { useSelector } from "react-redux";
import { selectCurrentLocation, selectShelfIndex } from "../../features/vector/vectorSlice";
import ProjectData from "../../data/skills.json"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function SkillMarquee(){
    const isShelf = useSelector(selectCurrentLocation) === "SHELF";
    const isSkillsIndex = useSelector(selectShelfIndex) === 0;
    const isVisible = isShelf && isSkillsIndex;

    useGSAP(()=>{
        if(!isVisible) return;
        gsap.from(".skills-pill",
            {x:-100,opacity:0,stagger:{amount:1,from:"end"},delay:1,duration:0.6,ease:"power2.out"}
        )
    },[isVisible])
    

    if(isVisible){
        return (
            <div className="skills-marquee">
                <div className="skills-container">
                    {ProjectData.map((project,index)=>{
                        return(
                            <div key={index} style={{backgroundColor:project.bg,color:project.color}} className="skills-pill">
                                <img src={`/img/icon/${project.icon}.svg`} className="skills-icon" alt=""/>
                                <span>{project.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    return null;
}
export default SkillMarquee
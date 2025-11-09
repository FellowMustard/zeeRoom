import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import projectData from "../../data/projects.json";
import Poster from "../canvas/poster";

function ProjectModal() {
  const [index, setIndex] = useState(0);
  const modalRef = useRef(null);
  const posterRef = useRef(null)
  const buttonRef = useRef(null)

  useGSAP(() => {
    const modal = modalRef.current;
    gsap.fromTo(
      modal,
      { opacity: 0, filter: "blur(5px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.3, ease: "power2.out" }
    );
  }, []);

  function handleIncrement() {
    if(index === projectData.length-1){
      posterAnimation(()=>setIndex(-1),()=>setIndex(0));
      return;
    }
    setIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  }

  function posterAnimation(callback,callback2){
    const tl = gsap.timeline();
    const poster = posterRef.current;
    const button = buttonRef.current
    tl.fromTo(button,
    { y: 0, opacity: 1 },
    { 
        y: 100, 
        opacity: 0, 
        duration: 0.2, 
        ease: "power2.out" 
    }
).fromTo(poster, 
    { opacity:0},
    { 
        opacity:0, 
        duration: 0.1, 
        ease: "power2.out",
        onComplete: () => {
            if(callback) {
                callback();
            }
        }
    },
).fromTo(poster, 
    { opacity: 0 },
    { 
        opacity: 1, 
        duration: 0.1, 
        ease: "power2.out",
        onComplete: () => {
            if(callback2) {
                callback2();
            }
        }
    },
    "+=0.5"
).fromTo(button,
    { y: 100, opacity: 0 },
    { 
        y: 0, 
        opacity: 1, 
        duration: 0.2, 
        ease: "power2.out" 
    },
    "-=0.1"
);
  }

  return (
    <div ref={modalRef} className="blur-back">
      <div ref={posterRef} className="poster-container">
        {Array.from({length:index+1}).map((_,index)=>{
          return(
            <Poster 
              key={index} 
              color={projectData[index].color }
              img={projectData[index].pic} 
              title={projectData[index].name}
              desc={projectData[index].description}
              link={projectData[index].link}
              isFinished={projectData[index].isFinished}/>
          )
        })}
      </div>  
      <button ref={buttonRef} onClick={handleIncrement} className="poster-button">Next Project</button>
      
    </div>
  );
}
export default ProjectModal;

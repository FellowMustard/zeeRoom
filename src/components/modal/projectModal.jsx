import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import projectData from "../../data/projects.json";

function ProjectModal() {
  const [index, setIndex] = useState(0);
  const modalRef = useRef(null);

  useGSAP(() => {
    const modal = modalRef.current;
    gsap.fromTo(
      modal,
      { opacity: 0, filter: "blur(10px)" },
      { opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }
    );
  }, []);

  function handleIncrement() {
    console.log("increment");
    setIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  }

  function handleDecrement() {
    console.log("decrement");
    setIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  }

  return (
    <div ref={modalRef} className="modal-back">
      <div className="modal-content">
        <p className="modal-title">Project Showcase</p>
        <p>List of projects i've been working on:</p>
        <div className="modal-pagination">
          <button
            className="pagination-button"
            onClick={(e) => {
              e.stopPropagation();
              handleDecrement();
            }}
          >{`<`}</button>
          <div className="modal-body">
            <div className="project-info">
              <img
                className="project-pic"
                width={150}
                height={150}
                src={projectData[index].pic}
                alt={projectData[index].name}
              />
              <div>
                <p className="project-name">{projectData[index].name}</p>
                <div className="categories">
                  {projectData[index].categories.map((category, i) => (
                    <span key={i} className="category">
                      {category}
                    </span>
                  ))}
                </div>
                <p className="project-desc">{projectData[index].description}</p>
              </div>
            </div>
            <button
              disabled={!projectData[index].isFinished}
              className="visit-button"
            >
              {projectData[index].isFinished ? (
                <a
                  href={projectData[index].link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Project
                </a>
              ) : (
                <span>Coming Soon...</span>
              )}
            </button>
          </div>
          <button
            className="pagination-button"
            onClick={(e) => {
              e.stopPropagation();
              handleIncrement();
            }}
          >{`>`}</button>
        </div>
      </div>
    </div>
  );
}
export default ProjectModal;

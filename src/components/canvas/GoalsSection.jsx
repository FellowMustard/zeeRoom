import { useSelector } from "react-redux";
import GoalsData from "../../data/goals.json";
import {
  selectCurrentLocation,
  selectShelfIndex,
} from "../../features/vector/vectorSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function GoalsSection() {
  const isShelf = useSelector(selectCurrentLocation) === "SHELF";
  const isGoalsShelf = useSelector(selectShelfIndex) === 3;
  const isVisible = isShelf && isGoalsShelf;

  useGSAP(() => {
    if (!isVisible) return;
    gsap.from(".goal-item", {
      x: -100,
      opacity: 0,
      stagger: { amount: 1 },
      delay: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [isVisible]);

  if (isVisible) {
    return (
      <div className="goals-section">
        <div className="goals-container">
          {GoalsData.map((goal, index) => {
            return (
              <div key={index} className="goal-item">
                <p className="goal-title">{goal.title}</p>
                <p className="goal-desc">{goal.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
}
export default GoalsSection;

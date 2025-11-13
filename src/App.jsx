import { Suspense } from "react";
import Experience from "./components/canvas/Experience";
import SkillMarquee from "./components/canvas/SkillMarquee";
import ModalIndex from "./components/modal/modalIndex";
import ScrollSign from "./components/scrollSign";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PROJECT_POSITION } from "./lib/data";
import TopTitle from "./components/canvas/TopTitle";
import HobbySection from "./components/canvas/HobbySection";
import TriviaSection from "./components/canvas/TriviaSection";
import GoalsSection from "./components/canvas/GoalsSection";

function App() {
  return (
    <>
      <ModalIndex />
      <Canvas
        dpr={[1, 1.5]}
        className="canvas"
        gl={{ antialias: true }}
        camera={{ position: PROJECT_POSITION, fov: 45, near: 0.1, far: 100 }}
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <Loader />
      <ScrollSign />
      <SkillMarquee />
      <HobbySection />
      <TopTitle />
      <TriviaSection />
      <GoalsSection />
    </>
  );
}

export default App;

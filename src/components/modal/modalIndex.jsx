import { useSelector } from "react-redux";
import ProjectModal from "./projectModal";
import { selectCurrentLocation } from "../../features/vector/vectorSlice";
import BugModal from "./bugModal";

function ModalIndex() {
  const modalType = useSelector(selectCurrentLocation);

  switch (modalType) {
    case "PROJECT":
      return <ProjectModal />;
    case "BUG":
      return <BugModal/>
    default:
      return null;
  }
}
export default ModalIndex;

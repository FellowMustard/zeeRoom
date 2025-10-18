import { useSelector } from "react-redux";
import ProjectModal from "./projectModal";
import { selectCurrentLocation } from "../../features/vector/vectorSlice";

function ModalIndex() {
  const modalType = useSelector(selectCurrentLocation);

  switch (modalType) {
    case "PROJECT":
      return <ProjectModal />;
    default:
      return null;
  }
}
export default ModalIndex;

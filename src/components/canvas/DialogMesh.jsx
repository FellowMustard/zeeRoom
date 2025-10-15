import { Html} from "@react-three/drei";
import { useSelector } from "react-redux";
import { checkIsHome, } from "../../features/vector/vectorSlice";

function DialogMesh({ message, position }) {
  const isHome = useSelector(checkIsHome);

  if (isHome) {
    return (
      <>
        <Html position={position} center occlude>
          <div className="dialog-box">{message}</div>
        </Html>
      </>
    );
  }

  return null;
}
export default DialogMesh;

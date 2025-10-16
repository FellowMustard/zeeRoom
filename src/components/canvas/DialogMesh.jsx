import { Html } from "@react-three/drei";

function DialogMesh({ message, position, activator }) {
  if (activator) {
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

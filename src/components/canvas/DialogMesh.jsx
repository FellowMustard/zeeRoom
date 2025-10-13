import { Html, Outlines } from "@react-three/drei";
import { useState } from "react";

function DialogMesh({ message, position }) {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <Html position={position} center occlude>
        <div className="dialog-box">{message}</div>
      </Html>
      <Outlines
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => alert("woi")}
        angle={0}
        thickness={hovered ? 1.5 : 0}
        color="#ffa871"
      />
    </>
  );
}
export default DialogMesh;

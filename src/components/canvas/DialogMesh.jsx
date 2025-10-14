import { Html, Outlines } from "@react-three/drei";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectActiveStatus } from "../../features/vector/vectorSlice";

function DialogMesh({ message, position }) {
  const isActive = useSelector(selectActiveStatus);

  if (isActive) {
    return (
      <>
        <Html position={position} center occlude>
          <div className="dialog-box">{message}</div>
        </Html>
        <Outlines angle={0} thickness={1.5} color="#ffa871" />
      </>
    );
  }

  return null;
}
export default DialogMesh;

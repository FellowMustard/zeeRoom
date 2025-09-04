import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export function Room(props) {
  const { nodes } = useGLTF("models/pf.glb");
  const texture = useTexture("models/baked_na.webp");

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;

  const mapTexture = useMemo(
    () => new THREE.MeshBasicMaterial({ map: texture }),
    [texture]
  );

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.AC.geometry}
        material={mapTexture}
        position={[-1.259, 2.748, -2.35]}
      />
      <mesh
        geometry={nodes.sofa_body.geometry}
        material={mapTexture}
        position={[1.37, 1.111, 1.842]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.sofa_bottom.geometry}
        material={mapTexture}
        position={[1.37, 1.111, 1.878]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.sofa_cushion_02.geometry}
        material={mapTexture}
        position={[1.658, 0.76, 1.557]}
        rotation={[0, 0, 0.815]}
      />
      <mesh
        geometry={nodes.sofa_cushion_01.geometry}
        material={mapTexture}
        position={[1.37, 0.868, 2.231]}
        rotation={[-1.229, 0, 0]}
      />
      <mesh
        geometry={nodes.floor.geometry}
        material={mapTexture}
        position={[-2.394, 0.087, -1.427]}
      />
      <mesh
        geometry={nodes.room_bottom.geometry}
        material={mapTexture}
        position={[0, -0.022, 0]}
      />
      <mesh
        geometry={nodes.room_right.geometry}
        material={mapTexture}
        position={[0, -0.022, 0]}
      />
      <mesh
        geometry={nodes.room_left.geometry}
        material={mapTexture}
        position={[0, -0.022, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        geometry={nodes.photo.geometry}
        material={mapTexture}
        position={[-2.534, 2.223, -1.267]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.655, 1, 1]}
      />
      <mesh
        geometry={nodes.trash.geometry}
        material={mapTexture}
        position={[-2.294, 0.328, 0.319]}
      />
      <mesh
        geometry={nodes.curtain_bar.geometry}
        material={mapTexture}
        position={[1.341, 2.701, -2.409]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.029, 1.321, 0.029]}
      />
      <mesh
        geometry={nodes.curtain_right.geometry}
        material={mapTexture}
        position={[2.195, 1.773, -2.402]}
      />
      <mesh
        geometry={nodes.curtain_left.geometry}
        material={mapTexture}
        position={[0.507, 1.773, -2.402]}
      />
      <mesh
        geometry={nodes.ring_right.geometry}
        material={mapTexture}
        position={[2.536, 2.701, -2.409]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.ring_left.geometry}
        material={mapTexture}
        position={[0.185, 2.701, -2.409]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.holder_left.geometry}
        material={mapTexture}
        position={[0.183, 2.715, -2.466]}
      />
      <mesh
        geometry={nodes.holder_right.geometry}
        material={mapTexture}
        position={[2.536, 2.715, -2.466]}
      />
      <mesh
        geometry={nodes.window_border.geometry}
        material={mapTexture}
        position={[0, -0.022, 0.038]}
        scale={[1.083, 1, 1.083]}
      />
      <mesh
        geometry={nodes.guitar_body.geometry}
        material={mapTexture}
        position={[-1.123, 0.525, 0.22]}
        rotation={[1.274, 0.173, -0.5]}
      />
      <mesh
        geometry={nodes.guitar_neck.geometry}
        material={mapTexture}
        position={[-1.207, 1.02, 0.079]}
        rotation={[1.274, 0.173, -0.5]}
        scale={0.496}
      />
      <mesh
        geometry={nodes.guitar_hold.geometry}
        material={mapTexture}
        position={[-1.207, 1.02, 0.079]}
        rotation={[1.274, 0.173, -0.5]}
      />
      <mesh
        geometry={nodes.string_06.geometry}
        material={mapTexture}
        position={[-1.237, 1.021, 0.098]}
        rotation={[1.274, 0.173, -0.5]}
      />
      <mesh
        geometry={nodes.guitar_h.geometry}
        material={mapTexture}
        position={[-1.099, 0.431, 0.261]}
        rotation={[1.274, 0.173, -0.5]}
        scale={0.496}
      />
      <mesh
        geometry={nodes.Cylinder036.geometry}
        material={mapTexture}
        position={[-1.321, 1.601, -0.111]}
        rotation={[1.274, 0.173, -2.071]}
        scale={0.496}
      />
      <mesh
        geometry={nodes.guitar_head.geometry}
        material={mapTexture}
        position={[-1.324, 1.649, -0.116]}
        rotation={[1.274, 0.173, -0.5]}
        scale={0.496}
      />
      <mesh
        geometry={nodes.guitar_t.geometry}
        material={mapTexture}
        position={[-1.161, 0.75, 0.158]}
        rotation={[1.274, 0.173, -0.5]}
      />
      <mesh
        geometry={nodes.string_01.geometry}
        material={mapTexture}
        position={[-1.237, 1.021, 0.098]}
        rotation={[1.274, 0.173, -0.5]}
      />
      <mesh
        geometry={nodes.string_02.geometry}
        material={mapTexture}
        position={[-1.237, 1.021, 0.098]}
        rotation={[1.274, 0.173, -0.5]}
      />
      <mesh
        geometry={nodes.string_03.geometry}
        material={mapTexture}
        position={[-1.237, 1.021, 0.098]}
        rotation={[1.274, 0.173, -0.5]}
      />
      <mesh
        geometry={nodes.string_04.geometry}
        material={mapTexture}
        position={[-1.237, 1.021, 0.098]}
        rotation={[1.274, 0.173, -0.5]}
      />
      <mesh
        geometry={nodes.string_05.geometry}
        material={mapTexture}
        position={[-1.237, 1.021, 0.098]}
        rotation={[1.274, 0.173, -0.5]}
      />
      <mesh
        geometry={nodes.table_legs.geometry}
        material={mapTexture}
        position={[-1.713, 0.197, -0.254]}
      />
      <mesh
        geometry={nodes.table_stand.geometry}
        material={mapTexture}
        position={[-1.713, 1.087, -0.254]}
      />
      <mesh
        geometry={nodes.table_stand_side.geometry}
        material={mapTexture}
        position={[-1.712, 0.335, -0.311]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.table_body.geometry}
        material={mapTexture}
        position={[-1.717, 1.111, -1.177]}
      />
      <mesh
        geometry={nodes.table_holder.geometry}
        material={mapTexture}
        position={[-1.713, 1.087, -0.254]}
      />
      <mesh
        geometry={nodes.shelf_left.geometry}
        material={mapTexture}
        position={[-1.731, 1.068, 1.74]}
      />
      <mesh
        geometry={nodes.shelf_right.geometry}
        material={mapTexture}
        position={[-1.731, 1.068, 0.178]}
      />
      <mesh
        geometry={nodes.shelf_top.geometry}
        material={mapTexture}
        position={[-1.731, 1.068, 1.74]}
      />
      <mesh
        geometry={nodes.shelf_bot.geometry}
        material={mapTexture}
        position={[-1.731, -1.581, 1.74]}
        scale={[0.662, 1, 1]}
      />
      <mesh
        geometry={nodes.spray_body.geometry}
        material={mapTexture}
        position={[2.419, 0.377, -2.131]}
        rotation={[0, 0.649, 0]}
        scale={[0.07, 0.287, 0.07]}
      />
      <mesh
        geometry={nodes.spray_top.geometry}
        material={mapTexture}
        position={[2.419, 0.731, -2.131]}
        rotation={[0, 0.649, 0]}
        scale={[0.07, 0.393, 0.07]}
      />
    </group>
  );
}

useGLTF.preload("models/pf.glb");

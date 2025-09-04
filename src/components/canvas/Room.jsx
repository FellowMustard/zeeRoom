import { useGLTF, useTexture } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export function Room(props) {
  const { nodes } = useGLTF("models/pf.glb");
  const textures = useTexture([
  "models/baked_01.webp",
  "models/baked_02.webp",
]);

textures.forEach((tex) => {
  tex.flipY = false;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.generateMipmaps = false;
  tex.minFilter = THREE.LinearFilter;
});

const materials = useMemo(
  () => textures.map((tex) => new THREE.MeshBasicMaterial({ map: tex })),
  [textures]
);

  return (
    <group {...props} dispose={null}>
      {/* 01 */}
      <mesh geometry={nodes.AC.geometry} material={materials[0]} position={[-1.259, 2.748, -2.35]} />
      <mesh geometry={nodes.sofa_body.geometry} material={materials[0]} position={[1.37, 1.111, 1.842]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.sofa_bottom.geometry} material={materials[0]} position={[1.37, 1.111, 1.878]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.sofa_cushion_02.geometry} material={materials[0]} position={[1.658, 0.76, 1.557]} rotation={[0, 0, 0.815]} />
      <mesh geometry={nodes.sofa_cushion_01.geometry} material={materials[0]} position={[1.37, 0.868, 2.231]} rotation={[-1.229, 0, 0]} />
      <mesh geometry={nodes.floor.geometry} material={materials[0]} position={[-2.394, 0.087, -1.427]} />
      <mesh geometry={nodes.room_bottom.geometry} material={materials[0]} position={[0, -0.022, 0]} />
      <mesh geometry={nodes.room_right.geometry} material={materials[0]} position={[0, -0.022, 0]} />
      <mesh geometry={nodes.room_left.geometry} material={materials[0]} position={[0, -0.022, 0]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.photo.geometry} material={materials[0]} position={[-2.534, 2.223, -1.267]} rotation={[0, 0, -Math.PI / 2]} scale={[0.655, 1, 1]} />
      <mesh geometry={nodes.trash.geometry} material={materials[0]} position={[-2.294, 0.328, 0.319]} />
      <mesh geometry={nodes.curtain_bar.geometry} material={materials[0]} position={[1.341, 2.701, -2.409]} rotation={[0, 0, -Math.PI / 2]} scale={[0.029, 1.321, 0.029]} />
      <mesh geometry={nodes.curtain_right.geometry} material={materials[0]} position={[2.195, 1.773, -2.402]} />
      <mesh geometry={nodes.curtain_left.geometry} material={materials[0]} position={[0.507, 1.773, -2.402]} />
      <mesh geometry={nodes.ring_right.geometry} material={materials[0]} position={[2.536, 2.701, -2.409]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.ring_left.geometry} material={materials[0]} position={[0.185, 2.701, -2.409]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.holder_left.geometry} material={materials[0]} position={[0.183, 2.715, -2.466]} />
      <mesh geometry={nodes.holder_right.geometry} material={materials[0]} position={[2.536, 2.715, -2.466]} />
      <mesh geometry={nodes.window_border.geometry} material={materials[0]} position={[0, -0.022, 0.038]} scale={[1.083, 1, 1.083]} />
      <mesh geometry={nodes.guitar_body.geometry} material={materials[0]} position={[-1.123, 0.525, 0.22]} rotation={[1.274, 0.173, -0.5]} />
      <mesh geometry={nodes.guitar_neck.geometry} material={materials[0]} position={[-1.207, 1.02, 0.079]} rotation={[1.274, 0.173, -0.5]} scale={0.496} />
      <mesh geometry={nodes.guitar_hold.geometry} material={materials[0]} position={[-1.207, 1.02, 0.079]} rotation={[1.274, 0.173, -0.5]} />
      <mesh geometry={nodes.string_06.geometry} material={materials[0]} position={[-1.237, 1.021, 0.098]} rotation={[1.274, 0.173, -0.5]} />
      <mesh geometry={nodes.guitar_h.geometry} material={materials[0]} position={[-1.099, 0.431, 0.261]} rotation={[1.274, 0.173, -0.5]} scale={0.496} />
      <mesh geometry={nodes.string_hold.geometry} material={materials[0]} position={[-1.321, 1.601, -0.111]} rotation={[1.274, 0.173, -2.071]} scale={0.496} />
      <mesh geometry={nodes.guitar_head.geometry} material={materials[0]} position={[-1.324, 1.649, -0.116]} rotation={[1.274, 0.173, -0.5]} scale={0.496} />
      <mesh geometry={nodes.guitar_t.geometry} material={materials[0]} position={[-1.161, 0.75, 0.158]} rotation={[1.274, 0.173, -0.5]} />
      <mesh geometry={nodes.string_01.geometry} material={materials[0]} position={[-1.237, 1.021, 0.098]} rotation={[1.274, 0.173, -0.5]} />
      <mesh geometry={nodes.string_02.geometry} material={materials[0]} position={[-1.237, 1.021, 0.098]} rotation={[1.274, 0.173, -0.5]} />
      <mesh geometry={nodes.string_03.geometry} material={materials[0]} position={[-1.237, 1.021, 0.098]} rotation={[1.274, 0.173, -0.5]} />
      <mesh geometry={nodes.string_04.geometry} material={materials[0]} position={[-1.237, 1.021, 0.098]} rotation={[1.274, 0.173, -0.5]} />
      <mesh geometry={nodes.string_05.geometry} material={materials[0]} position={[-1.237, 1.021, 0.098]} rotation={[1.274, 0.173, -0.5]} />
      
      {/* 02 */}
      <mesh geometry={nodes.table_legs.geometry} material={materials[1]} position={[-1.713, 0.197, -0.254]} />
      <mesh geometry={nodes.table_stand.geometry} material={materials[1]} position={[-1.713, 1.087, -0.254]} />
      <mesh geometry={nodes.table_stand_side.geometry} material={materials[1]} position={[-1.712, 0.335, -0.311]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.table_body.geometry} material={materials[1]} position={[-1.717, 1.111, -1.177]} />
      <mesh geometry={nodes.table_holder.geometry} material={materials[1]} position={[-1.713, 1.087, -0.254]} />
      <mesh geometry={nodes.mousepad.geometry} material={materials[1]} position={[-1.298, 1.228, -1.924]} />
      <mesh geometry={nodes.cup.geometry} material={materials[1]} position={[-1.374, 1.309, -0.432]} rotation={[-Math.PI, 1.538, -Math.PI]} />
      <mesh geometry={nodes.tk_book.geometry} material={materials[1]} position={[-1.988, 1.262, -0.275]} rotation={[Math.PI / 2, 0, 0.722]} />
      <mesh geometry={nodes.box.geometry} material={materials[1]} position={[-1.99, 1.442, -1.296]} />
      <mesh geometry={nodes.deck02.geometry} material={materials[1]} position={[-2.063, 1.322, -0.614]} />
      <mesh geometry={nodes.deck01.geometry} material={materials[1]} position={[-2.22, 1.241, -0.614]} />
      <mesh geometry={nodes.scroll_wheel.geometry} material={materials[1]} position={[-1.391, 1.273, -1.991]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.017, 0.004, 0.017]} />
      <mesh geometry={nodes.mouse_body.geometry} material={materials[1]} position={[-1.327, 1.264, -1.991]} />
      <mesh geometry={nodes.mb_01.geometry} material={materials[1]} position={[-1.327, 1.264, -1.991]} scale={0.848} />
      <mesh geometry={nodes.mb_02.geometry} material={materials[1]} position={[-1.327, 1.264, -1.991]} scale={0.734} />
      <mesh geometry={nodes.keyboard_case.geometry} material={materials[1]} position={[-1.284, 1.262, -1.225]} scale={[0.766, 0.766, 0.816]} />
      <mesh geometry={nodes.keycaps.geometry} material={materials[1]} position={[-1.199, 1.283, -1.325]} scale={0.766} />
      <mesh geometry={nodes.Cube012.geometry} material={materials[1]} position={[-1.422, 1.26, -1.035]} rotation={[0, -Math.PI / 2, 0]} scale={0.766} />
      <mesh geometry={nodes.laptop_keyboard.geometry} material={materials[1]} position={[-2.148, 1.472, -1.425]} />
      <mesh geometry={nodes.laptop_body.geometry} material={materials[1]} position={[-1.976, 1.442, -1.239]} scale={1.176} />
      <mesh geometry={nodes.laptop_head.geometry} material={materials[1]} position={[-2.349, 1.688, -1.239]} rotation={[0, 0, -1.088]} />
      <mesh geometry={nodes.port_lap_key.geometry} material={materials[1]} position={[-2.092, 1.466, -0.883]} />
      <mesh geometry={nodes.port_lap_mouse.geometry} material={materials[1]} position={[-2.044, 1.466, -0.883]} />
      <mesh geometry={nodes.port_lap_hdd.geometry} material={materials[1]} position={[-1.891, 1.466, -1.596]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh geometry={nodes.port_hdd_lap.geometry} material={materials[1]} position={[-2.016, 1.458, -1.712]} rotation={[0, 1.571, 0]} />
      <mesh geometry={nodes.laptop_screen.geometry} material={materials[1]} position={[-2.349, 1.688, -1.239]} rotation={[0, 0, -1.088]} />
      <mesh geometry={nodes.cable_lap_key.geometry} material={materials[1]} position={[-1.119, 1.442, -0.254]} />
      <mesh geometry={nodes.hdd.geometry} material={materials[1]} position={[-2.15, 1.456, -1.713]} scale={[0.45, 0.214, 0.37]} />
      <mesh geometry={nodes.cable_lap_hdd.geometry} material={materials[1]} position={[-1.432, 1.486, -1.667]} scale={0.434} />
      <mesh geometry={nodes.spray_body.geometry} material={materials[1]} position={[2.419, 0.377, -2.131]} rotation={[0, 0.649, 0]} scale={[0.07, 0.287, 0.07]} />
      <mesh geometry={nodes.spray_top.geometry} material={materials[1]} position={[2.419, 0.731, -2.131]} rotation={[0, 0.649, 0]} scale={[0.07, 0.393, 0.07]} />
      <mesh geometry={nodes.af_side.geometry} material={materials[1]} position={[1.399, 0.359, -2.107]} />
      <mesh geometry={nodes.af_bar_h.geometry} material={materials[1]} position={[1.819, 0.161, -2.014]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.af_bar_v.geometry} material={materials[1]} position={[1.5, 0.356, -2.007]} rotation={[-Math.PI, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.af_metal.geometry} material={materials[1]} position={[1.431, 0.26, -2.109]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.af_lamp.geometry} material={materials[1]} position={[1.628, 0.26, -2.109]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.af_bot.geometry} material={materials[1]} position={[1.819, 0.114, -2.107]} />
      <mesh geometry={nodes.af_top.geometry} material={materials[1]} position={[1.819, 0.704, -2.107]} scale={[1.098, 1, 1]} />
      <mesh geometry={nodes.chair_top.geometry} material={materials[1]} position={[-0.282, 1.301, -1.265]} rotation={[0, 0.327, 0]} />
      <mesh geometry={nodes.chair_bot.geometry} material={materials[1]} position={[-0.564, 0.835, -1.157]} rotation={[0, 0.327, 0]} />
      <mesh geometry={nodes.chair_side.geometry} material={materials[1]} position={[-0.34, 0.964, -0.692]} rotation={[Math.PI / 2, 0, -0.327]} />
      <mesh geometry={nodes.chair_bot_plastic.geometry} material={materials[1]} position={[-0.566, 0.708, -1.157]} rotation={[0, 0.327, 0]} />
      <mesh geometry={nodes.chair_side_holder.geometry} material={materials[1]} position={[-0.503, 0.734, -1.178]} rotation={[0, 0.327, 0]} />
      <mesh geometry={nodes.chair_knee.geometry} material={materials[1]} position={[-0.566, 0.505, -1.157]} rotation={[0, 0.327, 0]} />
      <mesh geometry={nodes.chair_leg_holder.geometry} material={materials[1]} position={[-0.566, 0.653, -1.157]} rotation={[0, 0.327, 0]} />
      <mesh geometry={nodes.chair_skeleton.geometry} material={materials[1]} position={[-0.194, 1.186, -1.28]} rotation={[0, 0.327, 0]} />
      <mesh geometry={nodes.chair_back.geometry} material={materials[1]} position={[-0.165, 0.777, -1.294]} rotation={[0, 0.327, -Math.PI / 2]} />
      <mesh geometry={nodes.chair_spine.geometry} material={materials[1]} position={[-0.103, 1.083, -1.311]} rotation={[0, 0.327, 0]} />
      <mesh geometry={nodes.chair_set.geometry} material={materials[1]} position={[-0.351, 0.539, -1.23]} rotation={[0, 0.327, 0]} />
      <mesh geometry={nodes.chair_pipe.geometry} material={materials[1]} position={[-0.351, 0.632, -1.23]} rotation={[0, 0.327, 0]} />
      <mesh geometry={nodes.chair_leg.geometry} material={materials[1]} position={[-0.566, 0.218, -1.157]} rotation={[0, 0.327, 0]} />
      <mesh geometry={nodes.chair_wheel.geometry} material={materials[1]} position={[-0.991, 0.148, -0.839]} rotation={[-Math.PI, 0.93, Math.PI / 2]} />
      <mesh geometry={nodes.chair_wheel_stand.geometry} material={materials[1]} position={[-0.405, 0.18, -0.683]} rotation={[Math.PI, -0.327, Math.PI]} />
      <mesh geometry={nodes.shelf_left.geometry} material={materials[1]} position={[-1.731, 1.068, 1.74]} />
      <mesh geometry={nodes.shelf_right.geometry} material={materials[1]} position={[-1.731, 1.068, 0.178]} />
      <mesh geometry={nodes.shelf_top.geometry} material={materials[1]} position={[-1.731, 1.068, 1.74]} />
      <mesh geometry={nodes.shelf_bot.geometry} material={materials[1]} position={[-1.731, -1.581, 1.74]} scale={[0.662, 1, 1]} />
    </group>
  );
}

useGLTF.preload("models/pf.glb");

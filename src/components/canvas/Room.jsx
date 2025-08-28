import { useGLTF, useTexture } from '@react-three/drei'
import { useMemo } from 'react'
import * as THREE from "three"

export function Room(props) {
  const { nodes} = useGLTF('models/pf.glb')
  const texture = useTexture('models/baked_na.webp');

  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace

  
  const mapTexture = useMemo(()=> 
    new THREE.MeshBasicMaterial({map:texture}),[texture])

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.sofa_body.geometry} material={mapTexture} position={[1.37, 1.111, 1.842]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.sofa_bottom.geometry} material={mapTexture} position={[1.37, 1.111, 1.878]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.sofa_cushion_02.geometry} material={mapTexture} position={[1.658, 0.76, 1.557]} rotation={[0, 0, 0.815]} />
      <mesh geometry={nodes.sofa_cushion_01.geometry} material={mapTexture} position={[1.37, 0.868, 2.231]} rotation={[-1.229, 0, 0]} />
      <mesh geometry={nodes.floor.geometry} material={mapTexture} position={[-2.394, 0.087, -1.427]} />
      <mesh geometry={nodes.room_bottom.geometry} material={mapTexture} position={[0, -0.022, 0]} />
      <mesh geometry={nodes.room_right.geometry} material={mapTexture} position={[0, -0.022, 0]} />
      <mesh geometry={nodes.room_left.geometry} material={mapTexture} position={[0, -0.022, 0]} rotation={[0, Math.PI / 2, 0]} />
    </group>
  )
}

useGLTF.preload('models/pf.glb')

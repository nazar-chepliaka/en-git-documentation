import React, { Suspense, useState, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useCursor, OrbitControls, Html, useAspect, useVideoTexture, useTexture, MeshReflectorMaterial, Text } from '@react-three/drei'
import * as THREE from 'three';

function ClippingPlane() {
  const { gl } = useThree();
  gl.clippingPlanes = Object.freeze( [] );
  gl.localClippingEnabled = true;
  return <></>;
}

function ComposedBox(args) {

/*  let cube_size = 1;
  let lines_size = 0.05;

  let start_pos_x = 0;
  let start_pos_y = 0;
  let start_pos_z = 0;*/

  let cube_size = args.args[1];
  let lines_size = args.args[2];

  let start_pos_x = args.args[0][0];
  let start_pos_y = args.args[0][1];
  let start_pos_z = args.args[0][2];

  let cube_half_size = cube_size / 2;
  let lines_half_size = lines_size / 2;


  let lines_min_x = start_pos_x - cube_half_size + lines_half_size;
  let lines_max_x = start_pos_x + cube_half_size - lines_half_size;

  let lines_min_y = start_pos_y - cube_half_size + lines_half_size;
  let lines_max_y = start_pos_y + cube_half_size - lines_half_size;

  let lines_min_z = start_pos_z - cube_half_size + lines_half_size;
  let lines_max_z = start_pos_z + cube_half_size - lines_half_size;

  // width goes from position set in both directions simultaneously 
  let line_n1_width = cube_size;
  let line_n1_height = lines_size;
  let line_n1_depth = lines_size;

  let line_n1_pos_x = start_pos_x;
  let line_n1_pos_y = lines_min_y;
  let line_n1_pos_z = lines_min_z;


  let line_n2_width = lines_size;
  let line_n2_height = cube_size;
  let line_n2_depth = lines_size;

  let line_n2_pos_x = lines_min_x;
  let line_n2_pos_y = start_pos_y;
  let line_n2_pos_z = lines_min_z;


  let line_n3_width = lines_size;
  let line_n3_height = lines_size;
  let line_n3_depth = cube_size;

  let line_n3_pos_x = lines_min_x;
  let line_n3_pos_y = lines_min_y;
  let line_n3_pos_z = start_pos_z;




  let line_n4_width = cube_size;
  let line_n4_height = lines_size;
  let line_n4_depth = lines_size;

  let line_n4_pos_x = start_pos_x;
  let line_n4_pos_y = lines_min_y;
  let line_n4_pos_z = lines_max_z;


  let line_n5_width = lines_size;
  let line_n5_height = cube_size;
  let line_n5_depth = lines_size;

  let line_n5_pos_x = lines_max_x;
  let line_n5_pos_y = start_pos_y;
  let line_n5_pos_z = lines_max_z;


  let line_n6_width = lines_size;
  let line_n6_height = lines_size;
  let line_n6_depth = cube_size;

  let line_n6_pos_x = lines_max_x;
  let line_n6_pos_y = lines_min_y;
  let line_n6_pos_z = start_pos_z;




  let line_n7_width = cube_size;
  let line_n7_height = lines_size;
  let line_n7_depth = lines_size;

  let line_n7_pos_x = start_pos_x;
  let line_n7_pos_y = lines_max_y;
  let line_n7_pos_z = lines_min_z;


  let line_n8_width = lines_size;
  let line_n8_height = cube_size;
  let line_n8_depth = lines_size;

  let line_n8_pos_x = lines_max_x;
  let line_n8_pos_y = start_pos_y;
  let line_n8_pos_z = lines_min_z;


  let line_n9_width = lines_size;
  let line_n9_height = lines_size;
  let line_n9_depth = cube_size;

  let line_n9_pos_x = lines_max_x;
  let line_n9_pos_y = lines_max_y;
  let line_n9_pos_z = start_pos_z;




  let line_n10_width = cube_size;
  let line_n10_height = lines_size;
  let line_n10_depth = lines_size;

  let line_n10_pos_x = start_pos_x;
  let line_n10_pos_y = lines_max_y;
  let line_n10_pos_z = lines_max_z;


  let line_n11_width = lines_size;
  let line_n11_height = cube_size;
  let line_n11_depth = lines_size;

  let line_n11_pos_x = lines_min_x;
  let line_n11_pos_y = start_pos_y;
  let line_n11_pos_z = lines_max_z;


  let line_n12_width = lines_size;
  let line_n12_height = lines_size;
  let line_n12_depth = cube_size;

  let line_n12_pos_x = lines_min_x;
  let line_n12_pos_y = lines_max_y;
  let line_n12_pos_z = start_pos_z;

  return (
  <group position={[start_pos_x, start_pos_y, start_pos_z]}>
    <mesh position={[line_n1_pos_x, line_n1_pos_y, line_n1_pos_z]}>
       <boxGeometry args={[line_n1_width, line_n1_height, line_n1_depth]} />
       <meshStandardMaterial color={0x8ae2ec} />
    </mesh>
    <mesh position={[line_n2_pos_x, line_n2_pos_y, line_n2_pos_z]}>
       <boxGeometry args={[line_n2_width, line_n2_height, line_n2_depth]} />
       <meshStandardMaterial color={0x8ae2ec} />
    </mesh>
    <mesh position={[line_n3_pos_x, line_n3_pos_y, line_n3_pos_z]}>
       <boxGeometry args={[line_n3_width, line_n3_height, line_n3_depth]} />
       <meshStandardMaterial color={0x8ae2ec} />
    </mesh>


    <mesh position={[line_n4_pos_x, line_n4_pos_y, line_n4_pos_z]}>
       <boxGeometry args={[line_n4_width, line_n4_height, line_n4_depth]} />
       <meshStandardMaterial color={0x8ae2ec} />
    </mesh>
    <mesh position={[line_n5_pos_x, line_n5_pos_y, line_n5_pos_z]}>
       <boxGeometry args={[line_n5_width, line_n5_height, line_n5_depth]} />
       <meshStandardMaterial color={0x8ae2ec} />
    </mesh>
    <mesh position={[line_n6_pos_x, line_n6_pos_y, line_n6_pos_z]}>
       <boxGeometry args={[line_n6_width, line_n6_height, line_n6_depth]} />
       <meshStandardMaterial color={0x8ae2ec} />
    </mesh>


    <mesh position={[line_n7_pos_x, line_n7_pos_y, line_n7_pos_z]}>
       <boxGeometry args={[line_n7_width, line_n7_height, line_n7_depth]} />
       <meshStandardMaterial color={0x8ae2ec} />
    </mesh>
    <mesh position={[line_n8_pos_x, line_n8_pos_y, line_n8_pos_z]}>
       <boxGeometry args={[line_n8_width, line_n8_height, line_n8_depth]} />
       <meshStandardMaterial color={0x8ae2ec} />
    </mesh>
    <mesh position={[line_n9_pos_x, line_n9_pos_y, line_n9_pos_z]}>
       <boxGeometry args={[line_n9_width, line_n9_height, line_n9_depth]} />
       <meshStandardMaterial color={0x8ae2ec} />
    </mesh>


    <mesh position={[line_n10_pos_x, line_n10_pos_y, line_n10_pos_z]}>
       <boxGeometry args={[line_n10_width, line_n10_height, line_n10_depth]} />
       <meshStandardMaterial color={0x8ae2ec} />
    </mesh>
    <mesh position={[line_n11_pos_x, line_n11_pos_y, line_n11_pos_z]}>
       <boxGeometry args={[line_n11_width, line_n11_height, line_n11_depth]} />
       <meshStandardMaterial color={0x8ae2ec} />
    </mesh>
    <mesh position={[line_n12_pos_x, line_n12_pos_y, line_n12_pos_z]}>
       <boxGeometry args={[line_n12_width, line_n12_height, line_n12_depth]} />
       <meshStandardMaterial color={0x8ae2ec} />
    </mesh>
  </group>
  )
}


function IcosahedronWireframe() {
  const [size, set] = useState(0.5)
  return (
    <mesh position={[0, 0, 0]}>
     <icosahedronGeometry attach="geometry" args={[1.5, 3]} />

     <meshNormalMaterial wireframe clippingPlanes={[new THREE.Plane(new THREE.Vector3(0, -1, 0.2), -0.1)]}/>
    </mesh>
  )
}


export default function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 25, position: [0, 1, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -10]} />
      <ClippingPlane />
      
      <ComposedBox args={[[0, 0, 0], 1, 0.06]} />
      <ComposedBox args={[[0.375, 0.125, 0], 0.5, 0.04]} />

      <IcosahedronWireframe />
      <OrbitControls />
    </Canvas>
  )
}
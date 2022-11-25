import React, { Suspense, useState, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useCursor, OrbitControls, Html, useAspect, useVideoTexture, useTexture, MeshReflectorMaterial, Text } from '@react-three/drei'
import * as THREE from 'three';

function Box() {
  const [size, set] = useState(0.5)
  return (
  <group>
    <boxHelper args={[new THREE.Mesh( new THREE.BoxGeometry( 2, 2, 2 ) )]} >
      <meshBasicMaterial color={0x8ae2ec} />
    </boxHelper>
    
    <mesh position={[-1, -1, -1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={0}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0}
          maxDepthThreshold={1.4}
          color="#090909"
          metalness={0.5}
        />
      </mesh>
  </group>
  )
}

function ClippingPlane() {
    const { gl } = useThree();
    gl.clippingPlanes = Object.freeze( [] );
    gl.localClippingEnabled = true;
    return <></>;
  }

function BoxWireframe() {
  const [size, set] = useState(0.5)
  return (
    <mesh position={[0, 0, 0]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhongMaterial wireframe />
    </mesh>
  )
}


function Boxes() {
  const big_geometry = new THREE.BufferGeometry();

const big_vertices = new Float32Array([
  -0.5, -0.5, 0.5,
  -0.5,  0.5, 0.5, 
  0.5, 0.5,  0.5,
  0.5, -0.5,  0.5,
  -0.5, -0.5,  0.5,
  -0.5, -0.5,  -0.5,
  0.5, -0.5,  -0.5,
  0.5, -0.5,  0.5,
  0.5, 0.5,  0.5,
  0.5, 0.5,  -0.5,
  0.5, -0.5,  -0.5,
  0.5, 0.5,  -0.5,
  -0.5, 0.5,  -0.5,
  -0.5, -0.5,  -0.5,
  -0.5, 0.5,  -0.5,
  -0.5, 0.5,  0.5,
]);

big_geometry.setAttribute('position', new THREE.BufferAttribute(big_vertices, 3));

  const small_geometry = new THREE.BufferGeometry();

const small_vertices = new Float32Array([
  -0.2, -0.2, 0.2,
  -0.2,  0.2, 0.2, 
  0.2, 0.2,  0.2,
  0.2, -0.2,  0.2,
  -0.2, -0.2,  0.2,
  -0.2, -0.2,  -0.2,
  0.2, -0.2,  -0.2,
  0.2, -0.2,  0.2,
  0.2, 0.2,  0.2,
  0.2, 0.2,  -0.2,
  0.2, -0.2,  -0.2,
  0.2, 0.2,  -0.2,
  -0.2, 0.2,  -0.2,
  -0.2, -0.2,  -0.2,
  -0.2, 0.2,  -0.2,
  -0.2, 0.2,  0.2,
]);

small_geometry.setAttribute('position', new THREE.BufferAttribute(small_vertices, 3));

  return (
    <group>
      <group position={[0, 0, 0]}>
        <line geometry={big_geometry}>
          <lineBasicMaterial attach="material" color={'#60cbd7'} linewidth={10} linecap={'round'} linejoin={'round'} />
        </line>
      </group>
      <group position={[0, 0.72, 0.3]}>
        <line geometry={small_geometry}>
          <lineBasicMaterial attach="material" color={'#60cbd7'} linewidth={10} linecap={'round'} linejoin={'round'} />
        </line>
      </group>
    </group>
  )
}

function ComposedBox() {
  return (
  <group position={[-1, -0.5, -0.5]}>
    <boxHelper>
        <mesh position={[1, 1, 1]} args={[new THREE.BoxGeometry( 1, 0.1, 0.1 )]} />
        <meshBasicMaterial color={0x8ae2ec} />
    </boxHelper>
    <boxHelper>
        <mesh position={[0.5, 0.5, 1]} args={[new THREE.BoxGeometry( 0.1, 1, 0.1 )]} />
        <meshBasicMaterial color={0x8ae2ec} />
    </boxHelper>
    <boxHelper>
        <mesh position={[1.5, 0.5, 1]} args={[new THREE.BoxGeometry( 0.1, 1, 0.1 )]} />
        <meshBasicMaterial color={0x8ae2ec} />
    </boxHelper>
    <boxHelper>
        <mesh position={[1, 0, 1]} args={[new THREE.BoxGeometry( 1, 0.1, 0.1 )]} />
        <meshBasicMaterial color={0x8ae2ec} />
    </boxHelper>



    <boxHelper>
        <mesh position={[1, 1, 0]} args={[new THREE.BoxGeometry( 1, 0.1, 0.1 )]} />
        <meshBasicMaterial color={0x8ae2ec} />
    </boxHelper>
    <boxHelper>
        <mesh position={[0.5, 0.5, 0]} args={[new THREE.BoxGeometry( 0.1, 1, 0.1 )]} />
        <meshBasicMaterial color={0x8ae2ec} />
    </boxHelper>
    <boxHelper>
        <mesh position={[1.5, 0.5, 0]} args={[new THREE.BoxGeometry( 0.1, 1, 0.1 )]} />
        <meshBasicMaterial color={0x8ae2ec} />
    </boxHelper>
    <boxHelper>
        <mesh position={[1, 0, 0]} args={[new THREE.BoxGeometry( 1, 0.1, 0.1 )]} />
        <meshBasicMaterial color={0x8ae2ec} />
    </boxHelper>


    <boxHelper>
        <mesh position={[0.5, 0, 0.5]} args={[new THREE.BoxGeometry( 0.1, 0.1, 1 )]} />
        <meshBasicMaterial color={0x8ae2ec} />
    </boxHelper>
    <boxHelper>
        <mesh position={[0.5, 1, 0.5]} args={[new THREE.BoxGeometry( 0.1, 0.1, 1 )]} />
        <meshBasicMaterial color={0x8ae2ec} />
    </boxHelper>
    <boxHelper>
        <mesh position={[1.5, 0, 0.5]} args={[new THREE.BoxGeometry( 0.1, 0.1, 1 )]} />
        <meshBasicMaterial color={0x8ae2ec} />
    </boxHelper>
    <boxHelper>
        <mesh position={[1.5, 1, 0.5]} args={[new THREE.BoxGeometry( 0.1, 0.1, 1 )]} />
        <meshBasicMaterial color={0x8ae2ec} />
    </boxHelper>
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
      
      <ComposedBox />

      <IcosahedronWireframe />
      <OrbitControls />
    </Canvas>
  )
}
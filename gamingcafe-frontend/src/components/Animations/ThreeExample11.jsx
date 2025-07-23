import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useSprings, a } from '@react-spring/three';

import './ThreeExample11.css'; // Make sure this path is correctconst number = 35;
const number = 35;
// NEW & IMPROVED COLOR PALETTE - More distinct and bright RGB
const colors = [
  '#150AF2', // BLUE
  '#09ED11', // Green
  '#01BDF0', // 
  '#4F0566', // 
  '#F50A0A', // RED
  '#F20A21', // Teal/Cool Blue
  '#090979'  // Dark Blue 
];

const random = (i) => {
  const r = Math.random();
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, THREE.MathUtils.degToRad(Math.round(Math.random()) * 45)],
  };
};

const data = new Array(number).fill(null).map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
  };
});

function Content() {
  const [springs, api] = useSprings(number, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 150, friction: 50 }
  }));

  useEffect(() => {
    const intervalId = setInterval(() => api.start((i) => ({ ...random(i), delay: i * 40 })), 3000);
    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <>
      {data.map((d, index) => (
        <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
          <boxGeometry attach="geometry" args={d.args} />
          <a.meshStandardMaterial
            attach="material"
            color={springs[index].color}
            roughness={0.2}
            metalness={0.9}
            emissive={new THREE.Color(springs[index].color)}
            emissiveIntensity={0.8}
          />
        </a.mesh>
      ))}
    </>
  );
}

function Lights() {
  return (
    <group>
      <ambientLight intensity={3} />

      <directionalLight
        intensity={0.8}
        position={[-200, 200, 200]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-250}
        shadow-camera-right={250}
        shadow-camera-top={250}
        shadow-camera-bottom={250}
        shadow-camera-near={0.1}
        shadow-camera-far={500}
      />

      <directionalLight
        intensity={2}
        position={[200, -100, -150]}
        color={'#add8e6'}
      />

      <pointLight intensity={3} position={[0, 0, 100]} />

      <spotLight
        castShadow
        intensity={1.5}
        angle={Math.PI / 3}
        position={[150, 150, 150]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <hemisphereLight skyColor={"#add8e6"} groundColor={"#0a0a0a"} intensity={0.7} />

      {/* <Environment preset="night" /> */}
    </group>
  );
}


export default function ThreeExample11() {
  return (
    <div className="three-background-container">
      <Canvas linear flat shadows camera={{ position: [0, 0, 100], fov: 100 }}>
        {/* Suspense is good practice when loading external models or complex environments */}
        {/* <Suspense fallback={null}> */}
          <Lights />
          <Content />
        {/* </Suspense> */}
      </Canvas>
    </div>
  );
}

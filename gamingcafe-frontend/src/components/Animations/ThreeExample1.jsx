import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { useSprings, a } from '@react-spring/three';

import './ThreeExample1.css'; // Make sure this path is correct

const number = 35;
const colors = ['#05F52D', '#F20A21', '#00D4FF', '#ff993c', '#D91CC0']; // Removed 'e0feff' as it's similar to lightblue

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
    config: { mass: 20, tension: 150, friction: 50 },
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
          <a.meshStandardMaterial attach="material" color={springs[index].color} roughness={0.75} metalness={0.5} />
        </a.mesh>
      ))}
    </>
  );
}

// function Lights() {
//   return (
//     <group>
//       <pointLight intensity={0.3} />
//       <ambientLight intensity={2} />
//       <spotLight
//         castShadow
//         intensity={0.2}
//         angle={Math.PI / 7}
//         position={[150, 150, 250]}
//         penumbra={1}
//         shadow-mapSize-width={2048}
//         shadow-mapSize-height={2048}
//       />
//     </group>
//   );
// }

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
}export default function ThreeExample1() {
  return (
    // Changed class name to be more specific
    <div className="three-background-container">
      <Canvas linear flat shadows camera={{ position: [0, 0, 100], fov: 100 }}>
        <Lights />
        <Content />
      </Canvas>
    </div>
  );
}
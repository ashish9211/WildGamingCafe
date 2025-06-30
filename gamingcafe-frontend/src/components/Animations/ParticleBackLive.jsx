// import React from "react";
// import Particles from "react-tsparticles";
// import particle2 from "../config/particle2";
// import { useParams } from "react-router-dom";
// const ParticleBackLive = () => {
//     return  ( 
//     // <body className="m-0, p-0, overflow-hidden">
//     //     <div className="h-full w-full">
//     //         <Particles params={particle2}/>
//     //     </div>
//     // </body> 
//     <Particles params={particle2}/>);

   
// };

// export default ParticleBackLive;
// src/components/ParticleBackLive.jsx
import React, { useCallback, useId } from "react"; // Import useId
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // Important: To load the full engine
// OR import { loadSlim } from "tsparticles"; if you want a smaller bundle size

// Make sure your particle2.js export is default:
import particleConfig from "../config/particle2"; 

const ParticleBackLive = () => {
  // Use useId for unique ID, especially if this component might be reused
  const particlesId = useId(); 

  // useCallback to memoize the init function for performance
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // Load the full tsparticles engine
    // If you only need basic shapes/interactions, you could use loadSlim(engine);
  }, []);

  // Ensure the particle config includes fullScreen: true for a full background
  // If your particleConfig already has this, you don't need to spread it here.
  // We're adding it explicitly to ensure it covers the whole viewport.
  const fullScreenParticleConfig = {
    ...particleConfig, // Spread your imported config
    fullScreen: {
      enable: true, // This makes it cover the whole viewport
      zIndex: -1 // Place it behind everything else
    },
    background: {
      color: {
        value: "transparent" // Let the page's background color show through if desired
      }
    }
  };


  return (
    // Particles component
    <Particles
      id={`tsparticles-${particlesId}`} // Use unique ID
      init={particlesInit} // The engine initialization function
      options={fullScreenParticleConfig} // Pass the options (not params)
    />
  );
};

export default ParticleBackLive;
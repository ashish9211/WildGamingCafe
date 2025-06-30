// ParticlesBackgroundTri.jsx
import { useCallback, useId } from "react"; // Import useId
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackgroundTri() {
  const uniqueId = useId(); // Generate a unique ID for this instance

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // important
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    fullScreen: { 
      enable: false 
    },
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 3 },
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outMode: "out",
      },
      links: {
        enable: true,
        color: "#ffffff",
        distance: 150,
        opacity: 0.4,
        width: 1,
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id={`tsparticles-bg-${uniqueId}`} // Use the unique ID here
      init={particlesInit}
      options={particlesOptions}
      className="w-full h-full"
    />
  );
}
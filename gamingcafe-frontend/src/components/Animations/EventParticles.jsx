import { useCallback, useId } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function EventParticles() {
  const uniqueId = useId(); // Generate a unique ID for this instance

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // important for loading all shapes and presets
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent", // Keep background transparent to show your section's black background
      },
    },
    fpsLimit: 60,
    fullScreen: {
      enable: false, // Crucial: Set to false so particles only span their container/section
    },
    particles: {
      number: {
        value: 80, // Increased particle count slightly for more density
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        // Define an array of colors: mostly white, with a few RGB colors
        value: [
          "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", // More white particles
          "#ff0000", // Red
          "#00ff00", // Green
          "#0000ff", // Blue
          "#ffff00", // Yellow (optional)
          "#00ffff", // Cyan (optional)
          "#ff00ff", // Magenta (optional)
        ],
        // When random is true, it picks a color from the 'value' array randomly
        // This creates the mix of white and RGB glowing ones
        random: true,
      },
      shape: {
        type: "circle", // All particles are circles
      },
      opacity: {
        value: { min: 0.3, max: 0.7 }, // Slightly varied opacity for a more dynamic look
        random: true,
      },
      size: {
        value: { min: 1, max: 8 }, // Range for mini circles (1-3) and a few slightly larger ones (up to 8)
        random: true, // Randomize size within the defined range
      },
      links: {
        enable: false, // Disable links for a cleaner glowing circle effect
      },
      move: {
        enable: true,
        speed: 1.5, // Slightly increased speed for subtle movement
        direction: "none",
        random: true, // Randomize direction slightly
        straight: false,
        outMode: "out",
        bounce: false,
      },
      shadow: { // This creates the glowing effect
        enable: true,
        blur: 8, // Adjust blur for stronger/softer glow
        color: "#ffffff", // White glow for all particles, or you can try "random" for color
        // You can also set a specific color for the shadow, e.g., if you want a blue glow: color: "#00f"
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Particles will repel when mouse hovers over them
        },
        onclick: {
          enable: false, // Set to true and choose a mode (e.g., "push", "remove") if you want click interaction
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100, // How far particles repel
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id={`tsparticles-bg-${uniqueId}`} // Use the unique ID here
      init={particlesInit}
      options={particlesOptions}
      className="w-full h-full" // This ensures the canvas fills its parent div
    />
  );
}
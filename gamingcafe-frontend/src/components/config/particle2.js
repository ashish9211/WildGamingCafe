// src/config/particle2.js

const particle2 = {
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  background: {
    color: {
      value: "transparent" // Keep this as transparent if you want the page's bg-black to show
    }
  },
  particles: {
    number: {
      value: 6,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff" // Particles are white
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
        color: "#000"
      },
      polygon: {
        nb_sides: 6
      },
      // image: {
      //   src: "img/github.svg",
      //   width: 100,
      //   height: 100
      // }
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 160,
      random: false,
      anim: {
        enable: true,
        speed: 10,
        size_min: 40,
        sync: false
      }
    },
    line_linked: {
      enable: false, // Lines are still disabled by default in your config
      distance: 200,
      color: "#ffffff",
      opacity: 1,
      width: 2
    },
    move: {
      enable: true,
      speed: 8,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true, // --- CHANGED TO TRUE ---
        mode: "repulse" // --- SET HOVER MODE TO REPULSE ---
      },
      onclick: {
        enable: false, // --- Set to TRUE if you want click interaction ---
        mode: "push" // --- Set click mode (e.g., "push", "remove", "bubble") ---
      },
      resize: true
    },
    // The modes section defines how each interaction mode behaves
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200, // Distance for repulse effect
        duration: 0.4 // Duration of the repulse animation
      },
      push: {
        particles_nb: 4 // Number of particles to push on click
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

export default particle2;
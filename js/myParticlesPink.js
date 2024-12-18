// green
particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#FF007F" // Neon green color
      },
      shape: {
        type: "polygon",
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#FF007F", // Neon green for lines too
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        repulse: {
          distance: 100
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });



// grey

// particlesJS("particles-js", {
//     particles: {
//       number: {
//         value: 80, // Number of particles
//         density: {
//           enable: true,
//           value_area: 800 // Particle density in pixels
//         }
//       },
//       color: {
//         value: "#ffffff" // Particle color
//       },
//       shape: {
//         type: "circle", // Shape of particles (circle, edge, triangle, etc.)
//         stroke: {
//           width: 0,
//           color: "#000000"
//         }
//       },
//       opacity: {
//         value: 0.5, // Transparency level
//         random: false,
//         anim: {
//           enable: false
//         }
//       },
//       size: {
//         value: 5, // Particle size
//         random: true,
//         anim: {
//           enable: false
//         }
//       },
//       line_linked: {
//         enable: true, // Connect particles with lines
//         distance: 150,
//         color: "#ffffff",
//         opacity: 0.4,
//         width: 1
//       },
//       move: {
//         enable: true,
//         speed: 3, // Particle movement speed
//         direction: "none",
//         random: false,
//         straight: false,
//         out_mode: "out",
//         bounce: false
//       }
//     },
//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onhover: {
//           enable: true,
//           mode: "repulse" // Particles react to mouse hover
//         },
//         onclick: {
//           enable: true,
//           mode: "push" // Add particles on click
//         }
//       },
//       modes: {
//         repulse: {
//           distance: 100
//         },
//         push: {
//           particles_nb: 4 // Particles added on click
//         }
//       }
//     },
//     retina_detect: true // Optimized for retina displays
//   });
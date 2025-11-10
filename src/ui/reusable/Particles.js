import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { useDarkMode } from "@/functions/DarkModeContext";

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);
  const { isDarkMode } = useDarkMode();

  // Detect mobile
  const isMobile = typeof window !== "undefined" ? window.innerWidth <= 768 : false;

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = (container) => console.log(container);

  return (
    <div className="relative w-full min-h-screen">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          options={{
            background: {
              color: { value: isDarkMode ? "#000000" : "#f2f2f2" },
            },
            fullScreen: { enable: false },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: isMobile ? 2 : 4 },
                repulse: { distance: isMobile ? 100 : 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#ffffff" },
              links: {
                color: "#ffffff",
                distance: isMobile ? 80 : 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 3,
                straight: false,
              },
              number: { density: { enable: true, area: 800 }, value: isMobile ? 40 : 80 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: isMobile ? 0.5 : 1, max: isMobile ? 2.5 : 5 } },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
};

export default ParticlesContainer;

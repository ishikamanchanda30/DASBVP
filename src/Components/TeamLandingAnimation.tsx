import React, { useEffect, useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clouds from "../assets/Clouds/clouds.svg";

// Lazy-loaded components
const CoreTeam = lazy(() => import("../Components/CoreTeam"));
const Heads = lazy(() => import("../Components/Heads"));

interface TeamLandingAnimationProps {
  onFinish: () => void;
  onShowNavbar?: () => void; // Optional callback to show navbar
}

const TeamLandingAnimation: React.FC<TeamLandingAnimationProps> = ({ onFinish, onShowNavbar }) => {
  const [phase, setPhase] = useState<
    "text-large" | "text-shrink" | "clouds" | "content" | "done"
  >("text-large");

  // Preload components early
  useEffect(() => {
    import("../Components/CoreTeam");
    import("../Components/Heads");
  }, []);

  useEffect(() => {
    if (phase === "text-large") {
      const timer = setTimeout(() => setPhase("text-shrink"), 800);
      return () => clearTimeout(timer);
    } else if (phase === "text-shrink") {
      const timer = setTimeout(() => setPhase("clouds"), 1000);
      return () => clearTimeout(timer);
    } else if (phase === "clouds") {
      const timer = setTimeout(() => setPhase("content"), 1800); // Clouds up for 2s, content starts just before it ends
      return () => clearTimeout(timer);
    } else if (phase === "content") {
      if (onShowNavbar) onShowNavbar(); // Show navbar when content phase starts
      const timer = setTimeout(() => {
        setPhase("done");
        onFinish();
      }, 1900); // Optional: close overlay after content loads
      return () => clearTimeout(timer);
    }
  }, [phase, onFinish, onShowNavbar]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-[#0D0D0D] z-40 overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          onAnimationComplete={(definition) => {
            if (phase === "content" && definition === "exit") {
              setPhase("done");
              onFinish();
            }
          }}
        >
          {/* OUR TEAM Text */}
          <AnimatePresence>
            {(phase === "text-large" ||
              phase === "text-shrink" ||
              phase === "clouds") && (
              <motion.div
                key="our-team-text"
                className="absolute w-[80%] flex items-center justify-center"
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale:
                    phase === "text-shrink" || phase === "clouds" ? 0.625 : 1,
                  opacity: phase === "clouds" ? 0 : 1,
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{ zIndex: 10 }}
              >
                <h1 className="text-white font-extrabold text-6xl md:text-8xl text-center">
                  OUR TEAM
                </h1>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CLOUDS + CONTENT */}
          <AnimatePresence>
            {(phase === "clouds" || phase === "content") && (
              <>
                {/* CLOUDS */}
                <motion.div
                  key="clouds"
                  initial={{ y: "100%" }}
                  animate={{ y: "-100%" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute bottom-0 left-0 w-screen h-screen"
                  style={{ zIndex: 20 }}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={clouds}
                      alt="clouds"
                      className="absolute bottom-0 left-0 w-screen h-full"
                      style={{
                        objectFit: "cover",
                        objectPosition: "bottom",
                        width: "100vw",
                        minWidth: "100vw",
                        maxWidth: "100vw",
                      }}
                    />
                  </div>
                </motion.div>

                {/* TEAM CONTENT */}
                {phase === "content" && (
                <motion.div
                  key="team-content"
                  initial={{ y: 60, opacity: 0 }}           // Start farther down
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 2.2,
                    ease: "easeInOut",              // Changed from custom curve to simple ease
                  }}
                  className="absolute inset-0 w-full"
                  style={{
                    zIndex: 15,
                    willChange: "transform, opacity",
                    overflow: "hidden",
                    height: "100vh",
                  }}
                >


                    <div className="bg-[#0D0D0D] flex flex-col h-full">
                      <Suspense fallback={null}>
                        <div>
                          <div className="min-w-screen md:min-h-screen bg-[#0d0d0d]">
                            <CoreTeam />
                          </div>
                          <div className="min-w-screen bg-[#0d0d0d] md:h-[100vh] h-[135vh]">
                            <Heads />
                          </div>
                        </div>
                      </Suspense>
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamLandingAnimation;

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Loader from "./components/Loder";
import MouseFollower from "./components/MouseFollower";
import MaintenanceModal from "./components/MaintenanceModal";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMaintenance, setIsMaintenance] = useState(true); 
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(500, 33);

    window.lenis = lenis;

    return () => {
      window.lenis = null;
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#0A0A0A] min-h-screen relative selection:bg-[#FF4925] selection:text-white">
      {/* Maintenance Modal */}
      {isMaintenance && !isDismissed && (
        <MaintenanceModal onView={() => setIsDismissed(true)} />
      )}

      {/* Preloader Overlay (Preloads background site while active) */}
      {isLoading && <Loader setLoading={setIsLoading} />}

      {/* Main Website Structure (Pre-rendered in DOM for zero-lag smooth experience) */}
      <MouseFollower />
      <Navbar />
      <Home />
    </div>
  );
};

export default App;

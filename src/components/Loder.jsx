import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Loader = ({ setLoading }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Text reveal animation
    tl.fromTo(textRef.current, 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: "power4.out", delay: 0.2 }
    );

    // 2. Progress bar and percentage counter
    tl.to(progressRef.current, {
      width: "100%",
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: function() {
        const p = Math.round(this.progress() * 100);
        if (percentRef.current) percentRef.current.innerText = `${p}%`;
      }
    }, "-=0.3");

    // 3. Smooth slide-up transition
    tl.to(loaderRef.current, {
      yPercent: -100,
      duration: 0.9,
      ease: "expo.inOut",
      onComplete: () => {
        setLoading(false);
        ScrollTrigger.refresh();
      }
    });

  }, [setLoading]);

  return (
    <div 
      ref={loaderRef}
      className='fixed inset-0 flex flex-col justify-center items-center bg-[#FF4925] z-[999] overflow-hidden pointer-events-auto'
    >
      {/* Brand Name / Logo */}
      <div className="geist overflow-hidden h-24 flex items-center">
        <h1 
          ref={textRef}
          className='text-[#0A0A0A] text-6xl md:text-8xl font-black uppercase geist tracking-tighter'
        >
          ABDULLAH
        </h1>
      </div>

      {/* Modern Progress Line */}
      <div className="absolute bottom-16 left-8 right-8 md:left-16 md:right-16 flex flex-col gap-4">
        <div className="w-full h-[2px] bg-[#0A0A0A]/10 relative overflow-hidden rounded-full">
          <div 
            ref={progressRef}
            className="absolute left-0 top-0 h-full bg-[#0A0A0A] w-0 transition-all"
          ></div>
        </div>
        
        <div className="geist flex justify-between items-end text-[#0A0A0A] font-bold">
          <span className="text-xs uppercase tracking-widest opacity-80">Preloading Site Experience</span>
          <span ref={percentRef} className="text-3xl md:text-5xl geist font-extrabold">0%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
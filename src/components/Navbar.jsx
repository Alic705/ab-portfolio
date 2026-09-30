import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MdArrowOutward } from "react-icons/md";
import Sidebar from './Sidebar';
import RollingButton from './RollingButton';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [liveTime, setLiveTime] = useState("");
  const [liveTimezone, setLiveTimezone] = useState("");
  const [statusDate, setStatusDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Formatted live time (12-hour format, e.g. "6:48 PM")
      const timeStr = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      setLiveTime(timeStr);

      // Dynamically calculate GMT offset (e.g. GMT+5)
      const offsetMin = -now.getTimezoneOffset();
      const sign = offsetMin >= 0 ? '+' : '-';
      const hours = Math.floor(Math.abs(offsetMin) / 60);
      setLiveTimezone(`(GMT${sign}${hours})`);

      // Dynamic availability date: e.g. "MID SEP 2026"
      const day = now.getDate();
      const period = day <= 10 ? "EARLY" : day <= 20 ? "MID" : "LATE";
      const monthStr = now.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
      const yearStr = now.getFullYear();
      setStatusDate(`${period} ${monthStr} ${yearStr}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const showAnim = gsap.from(navRef.current, { 
      yPercent: -100,
      paused: true,
      duration: 0.3,
      ease: "power2.out"
    }).progress(1);

    let lastDirection = 0;

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction !== lastDirection) {
          lastDirection = self.direction;
          if (self.direction === 1) {
            showAnim.reverse();
          } else {
            showAnim.play();
          }
        }
      }
    });
  }, { scope: navRef });

  const scrollToContact = () => {
    if (window.lenis && typeof window.lenis.scrollTo === 'function') {
      window.lenis.scrollTo('#contact', { offset: 0, duration: 1.2 });
    } else {
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav 
        ref={navRef}
        className='w-full bg-black/30 backdrop-blur-md fixed top-0 left-0 z-[100] text-[#A3A3A3] py-6 px-6 md:px-10 flex justify-between items-center'
      >

        {/* LEFT SIDE: BRAND LOGO WITH FAVICON-STYLE 'AB' BADGE */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Abdullah Portfolio Home"
        >
          {/* Favicon-style Monogram Card with AB */}
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-[#1C1C1C] to-[#0A0A0A] border border-[#FF4925]/40 flex items-center justify-center shadow-[0_0_20px_rgba(255,73,37,0.25)] group-hover:border-[#FF4925] group-hover:shadow-[0_0_25px_rgba(255,73,37,0.45)] transition-all duration-300 shrink-0">
            <span className="geist font-black text-sm md:text-base tracking-tight bg-gradient-to-br from-[#FF6B4A] via-[#FF4925] to-white bg-clip-text text-transparent">
              AB
            </span>
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#FF4925] animate-pulse" />
          </div>

          {/* Name Typography */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="geist font-extrabold text-white text-base md:text-lg tracking-tight group-hover:text-[#FF4925] transition-colors leading-none">
                ABDULLAH
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4925]" />
            </div>
            <span className="geist text-[10px] text-[#777777] font-semibold uppercase tracking-widest leading-tight mt-0.5">
              Creative Developer
            </span>
          </div>
        </div>

        {/* RIGHT SIDE: STATUS, TIME, AND BUTTONS */}
        <div className="flex items-center gap-6 md:gap-10">

          {/* Status Section */}
          <div className="geist hidden md:flex flex-col text-[11px] leading-tight">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></span>
              <span className="font-bold text-[14px] text-white tracking-tight">Available for project</span>
            </div>
            <span className="text-[11px] text-[#777777] ml-4 font-medium uppercase tracking-wider">
              {statusDate || "MID SEP 2026"}
            </span>
          </div>

          {/* Time Section */}
          <div className="geist hidden lg:block text-[11px] leading-tight min-w-[70px]">
            <div className="font-bold text-[14px] text-white uppercase tracking-wider tabular-nums">
              {liveTime || "6:48 PM"}
            </div>
            <div className="text-[11px] text-[#777777] font-medium uppercase">
              {liveTimezone || "(GMT+5)"}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="geist flex items-center gap-4">
            {/* Signature Rolling Text Button (White Variant - Small) */}
            <RollingButton 
              text="LET'S TALK" 
              variant="white"
              size="sm"
              onClick={scrollToContact}
            />

            {/* Menu Icon (Burger) - Triggers Sidebar Drawer */}
            <div 
              onClick={() => setIsSidebarOpen(true)}
              className="flex flex-col gap-[6px] cursor-pointer group overflow-hidden p-2 rounded-full hover:bg-white/5 transition-colors"
              aria-label="Open Navigation Menu"
            >
              <div className="relative h-[2px] w-8 overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-white transition-transform duration-500 ease-in-out group-hover:-translate-y-full"></span>
                <span className="absolute inset-0 w-full h-full bg-[#FF4925] transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0"></span>
              </div>
              <div className="relative h-[2px] w-8 overflow-hidden self-end">
                <span className="absolute right-0 w-full h-full bg-white transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:w-5"></span>
                <span className="absolute right-0 w-5 h-full bg-[#FF4925] transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0"></span>
              </div>
            </div>
          </div>

        </div>
      </nav>

      {/* Navigation Sidebar Drawer */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
import React, { useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Service from './components/Service';
import Process from './components/Process';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Skill from './components/Skill';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const containerRef = useRef();
    const heroWrapperRef = useRef();
    const heroContentRef = useRef();
    const heroOverlayRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroWrapperRef.current,
                start: "top top",      
                end: "bottom top",        
                scrub: 1, // Fluid inertia smooth scrub
            }
        });

        // Smoothly fade dark overlay to 100% solid pitch black
        tl.to(heroOverlayRef.current, {
            opacity: 1,
            ease: "none",
        }, 0);

        // Scale down hero and fade out its opacity completely to avoid bleed-through
        tl.to(heroContentRef.current, {
            scale: 0.94,
            y: 40,
            opacity: 0,
            ease: "none",
        }, 0);

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="bg-[#0A0A0A] relative">
            {/* Hero Section (Sticky Container) */}
            <div id="hero" ref={heroWrapperRef} className="sticky top-0 h-screen w-full overflow-hidden z-0">
                <div ref={heroContentRef} className="w-full h-full relative origin-center will-change-transform">
                    <Hero />
                    {/* Dark Overlay Layer */}
                    <div 
                        ref={heroOverlayRef} 
                        className="absolute inset-0 bg-[#0A0A0A] pointer-events-none opacity-0 z-20 will-change-opacity"
                    />
                </div>
            </div>

            {/* Main Content Wrapper - Covers sticky hero cleanly with solid z-10 bg-[#0A0A0A] */}
            <div className="relative z-10 bg-[#0A0A0A] rounded-t-[32px] md:rounded-t-[48px] shadow-[0_-30px_60px_rgba(0,0,0,0.95)]">
                <div id="about"><About /></div>
                <div id="projects"><Project /></div>
                <div id="skills"><Skill /></div>
                <div id="services"><Service /></div>
                <div id="process"><Process /></div>
                <div id="faqs"><Faqs /></div>
                <Contact />
            </div>
        </div>
    );
};

export default Home;
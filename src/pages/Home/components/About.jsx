import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef();
    const textRef = useRef();
    const text = "I combine years of web design and branding expertise to craft meaningful, story-driven experiences.";

    useGSAP(() => {
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",   
                end: "+=150%",      
                scrub: 1,           
                pin: true, 
            }
        });

        tl.to(".char", {
            color: "#FFFFFF",
            stagger: 0.2,
            ease: "power2.out",
        });
    }, { scope: containerRef });

    return (
        
        <div ref={containerRef} className='w-full h-screen bg-[#0A0A0A] overflow-hidden'>
            
            <div className='w-full h-full flex items-center justify-center px-[5%] relative'>
                {/* Side Label */}
                <div className="absolute left-[5%] top-[20%]">
                    <span className="geist text-[12px] font-bold text-[#464646] uppercase tracking-widest">
                        (ABOUT)
                    </span>
                </div>

                {/* Main Text Content */}
                <div className="w-[80%]">
                    <p ref={textRef} className='geist text-[40px] md:text-[56px] font-bold text-center leading-[1.1] tracking-tight text-[#555555]'>
                        {text.split("").map((char, index) => (
                            <span key={index} className="char">
                                {char}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About
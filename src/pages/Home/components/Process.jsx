import React from 'react';
import { FiCompass, FiLayers, FiCode, FiSend } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { scrollToSection } from '../../../utils/scroll';

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Discovery & Strategy",
      tagline: "Phase 01 / Research & Blueprint",
      desc: "Deep dive into your brand goals, target audience, technical requirements, and competitive landscape to chart a clear roadmap.",
      deliverables: ["Goal Definition", "User Research", "Technical Specs", "Project Timeline"],
      icon: FiCompass
    },
    {
      id: "02",
      title: "Design & Architecture",
      tagline: "Phase 02 / Prototyping & Systems",
      desc: "Crafting intuitive wireframes, high-fidelity UI design systems, and interactive prototypes for seamless user experience.",
      deliverables: ["Wireframes", "Design System", "Interactive Prototype", "UI Components"],
      icon: FiLayers
    },
    {
      id: "03",
      title: "Development & Motion",
      tagline: "Phase 03 / Engineering & FX",
      desc: "Transforming designs into clean, scalable, high-performance code with fluid GSAP animations and micro-interactions.",
      deliverables: ["Frontend & Backend", "GSAP Animations", "Responsive Design", "API Integration"],
      icon: FiCode
    },
    {
      id: "04",
      title: "Testing & Deployment",
      tagline: "Phase 04 / Quality & Launch",
      desc: "Conducting rigorous cross-browser testing, SEO optimization, performance tuning, and seamless cloud deployment.",
      deliverables: ["Lighthouse Audit", "SEO Optimization", "Cross-Browser Test", "Live Launch"],
      icon: FiSend
    },
  ];

  return (
    <section className="bg-[#0A0A0A] text-[#CACACA] py-28 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="geist text-[12px] font-bold text-[#FF4925] uppercase tracking-widest block mb-4">
              (WORKFLOW & METHODOLOGY)
            </span>
            <h2 className="geist text-[36px] md:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
              How I Work <br className="hidden md:block" />
              <span className="text-[#555555]">A structured, result-driven process.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="geist text-[#888888] text-[15px] leading-relaxed">
              Every project follows a proven, transparent four-step workflow to ensure quality, efficiency, and exceptional final delivery.
            </p>
          </div>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className="group relative flex flex-col justify-between p-8 rounded-3xl border border-[#1F1F1F] bg-[#111111]/80 hover:bg-[#151515] hover:border-[#FF4925]/40 transition-all duration-500 hover:-translate-y-2 cursor-default overflow-hidden"
              >
                {/* Background Subtle Hover Glow */}
                <div className="absolute inset-0 bg-radial from-[#FF4925]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Section: Step Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <span className="geist text-[12px] font-mono text-[#FF4925] font-bold bg-[#FF4925]/10 border border-[#FF4925]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      STEP {step.id}
                    </span>
                    <div className="text-white/40 group-hover:text-[#FF4925] text-2xl transition-colors duration-300">
                      <IconComponent />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <span className="geist text-[11px] font-semibold text-[#666666] uppercase tracking-wider block mb-1">
                    {step.tagline}
                  </span>
                  <h3 className="geist text-[22px] font-bold text-white tracking-tight group-hover:text-[#FF4925] transition-colors duration-300 mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="geist text-[13px] text-[#888888] leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Section: Deliverables List */}
                <div className="pt-6 border-t border-[#1C1C1C] relative z-10">
                  <span className="geist text-[10px] font-bold text-[#555555] uppercase tracking-widest block mb-3">
                    DELIVERABLES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {step.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="geist text-[11px] text-[#A3A3A3] bg-[#171717] border border-[#222222] px-2.5 py-1 rounded-md group-hover:border-[#333333] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Process Bottom CTA Banner */}
        <div className="mt-16 p-8 md:p-10 rounded-3xl border border-[#1F1F1F] bg-gradient-to-r from-[#111111] via-[#141414] to-[#111111] flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#FF4925]/30 transition-all duration-500">
          <div>
            <span className="geist text-[12px] font-bold text-[#FF4925] uppercase tracking-widest block mb-2">
              READY TO START?
            </span>
            <h4 className="geist text-[24px] md:text-[28px] font-bold text-white tracking-tight">
              Have a project in mind? Let’s map out a custom strategy.
            </h4>
          </div>

          <button 
            onClick={() => scrollToSection("contact")}
            className="group cursor-pointer relative overflow-hidden border-2 border-[#FF4925] bg-[#220F0D] py-4 px-10 rounded-full flex items-center transition-colors duration-500 hover:bg-[#FF4925]"
          >
            <div className="relative h-7 cursor-pointer">
              <div className="flex items-center gap-3 text-[#FF4925] text-[18px] md:text-[20px] font-bold uppercase transition-all duration-500 transform group-hover:-translate-y-[150%] group-hover:text-white">
                START A PROJECT <MdArrowOutward className="text-2xl" />
              </div>
              <div className="absolute inset-0 flex items-center gap-3 text-white text-[18px] md:text-[20px] font-bold uppercase transition-all duration-500 transform translate-y-[150%] group-hover:translate-y-0">
                START A PROJECT <MdArrowOutward className="text-2xl" />
              </div>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Process;

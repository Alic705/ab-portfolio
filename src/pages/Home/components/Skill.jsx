import React, { useState } from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaJava
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiRedux, 
  SiGreensock, 
  SiFramer, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql 
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

// Zustand custom SVG icon
const ZustandIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const Skill = () => {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend & UI" },
    { id: "backend", label: "Backend & DB" },
    { id: "animation", label: "State & Motion" },
  ];

  const techStack = [
    { name: "HTML5", category: "frontend", icon: FaHtml5, color: "#E34F26", type: "Markup Language" },
    { name: "CSS3", category: "frontend", icon: FaCss3Alt, color: "#1572B6", type: "Styling & Layout" },
    { name: "JavaScript", category: "frontend", icon: FaJs, color: "#F7DF1E", type: "Core Language" },
    { name: "React", category: "frontend", icon: FaReact, color: "#61DAFB", type: "UI Library" },
    { name: "React Native", category: "frontend", icon: TbBrandReactNative, color: "#61DAFB", type: "Mobile Framework" },
    { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss, color: "#06B6D4", type: "CSS Framework" },
    { name: "Redux", category: "animation", icon: SiRedux, color: "#764ABC", type: "State Management" },
    { name: "Zustand", category: "animation", icon: ZustandIcon, color: "#E58E26", type: "State Management" },
    { name: "GSAP", category: "animation", icon: SiGreensock, color: "#88CE02", type: "Animation Engine" },
    { name: "Framer Motion", category: "animation", icon: SiFramer, color: "#0055FF", type: "Micro-Interactions" },
    { name: "Node.js", category: "backend", icon: FaNodeJs, color: "#339933", type: "JS Runtime" },
    { name: "Express.js", category: "backend", icon: SiExpress, color: "#FFFFFF", type: "Server Framework" },
    { name: "SQL", category: "backend", icon: SiPostgresql, color: "#4169E1", type: "Relational DB" },
    { name: "MongoDB", category: "backend", icon: SiMongodb, color: "#47A248", type: "NoSQL DB" },
    { name: "Java", category: "backend", icon: FaJava, color: "#EA2D2E", type: "OOP Language" },
  ];

  const filteredTech = activeTab === "all" 
    ? techStack 
    : techStack.filter(item => item.category === activeTab);

  return (
    <section className="bg-[#0A0A0A] text-[#CACACA] py-28 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 relative gap-6">
          {/* Side Label & Main Heading */}
          <div>
            <span className="geist text-[12px] font-bold text-[#FF4925] uppercase tracking-widest block mb-4">
              (TECH STACK & EXPERTISE)
            </span>
            <h2 className="geist text-[36px] md:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
              Tools & Technologies <br className="hidden md:block" />
              <span className="text-[#555555]">I use to bring visions to life.</span>
            </h2>
          </div>

          {/* Subtitle */}
          <div className="max-w-md">
            <p className="geist text-[#888888] text-[15px] leading-relaxed">
              Curated stack focused on performance, scalability, and seamless user experiences across web and mobile.
            </p>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-3 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`geist px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                activeTab === tab.id
                  ? "bg-[#FF4925] text-white border-[#FF4925] shadow-[0_0_20px_rgba(255,73,37,0.3)]"
                  : "bg-[#121212] text-[#888888] border-[#222222] hover:border-[#444444] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredTech.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.name}
                className="group relative flex flex-col justify-between p-6 rounded-2xl border border-[#1C1C1C] bg-[#111111]/80 hover:bg-[#161616] hover:border-[#FF4925]/40 transition-all duration-500 hover:-translate-y-1.5 cursor-default overflow-hidden"
              >
                {/* Background Subtle Hover Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${skill.color}15, transparent 70%)`
                  }}
                />

                {/* Top Row: Icon & Index */}
                <div className="flex items-start justify-between mb-8 relative z-10">
                  <div 
                    className="text-[36px] transition-transform duration-500 group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    <IconComponent />
                  </div>
                  <span className="geist text-[11px] font-mono text-[#444444] group-hover:text-[#FF4925] transition-colors">
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </span>
                </div>

                {/* Bottom Row: Name & Subtitle */}
                <div className="relative z-10">
                  <h3 className="geist text-[16px] font-bold text-white tracking-tight group-hover:text-[#FF4925] transition-colors">
                    {skill.name}
                  </h3>
                  <p className="geist text-[11px] text-[#666666] mt-1 font-medium">
                    {skill.type}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlights Bar (Replacing the cheap marquee) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-[#1C1C1C]">
          <div className="p-6 rounded-2xl bg-[#111111] border border-[#1C1C1C] flex flex-col justify-between hover:border-[#FF4925]/30 transition-all duration-300">
            <span className="geist text-[#FF4925] text-[12px] font-bold tracking-widest uppercase">01 / PERFORMANCE</span>
            <h4 className="geist text-white font-bold text-[18px] mt-4">Optimized Architecture</h4>
            <p className="geist text-[#777777] text-[13px] mt-2">Clean code structure focused on fast load times, accessibility, and high Lighthouse scores.</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#111111] border border-[#1C1C1C] flex flex-col justify-between hover:border-[#FF4925]/30 transition-all duration-300">
            <span className="geist text-[#FF4925] text-[12px] font-bold tracking-widest uppercase">02 / INTERACTIVITY</span>
            <h4 className="geist text-white font-bold text-[18px] mt-4">Fluid Motion & FX</h4>
            <p className="geist text-[#777777] text-[13px] mt-2">Crafting 60FPS scroll-triggered animations and micro-interactions using GSAP & Framer Motion.</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#111111] border border-[#1C1C1C] flex flex-col justify-between hover:border-[#FF4925]/30 transition-all duration-300">
            <span className="geist text-[#FF4925] text-[12px] font-bold tracking-widest uppercase">03 / SCALABILITY</span>
            <h4 className="geist text-white font-bold text-[18px] mt-4">Full Stack Capability</h4>
            <p className="geist text-[#777777] text-[13px] mt-2">End-to-end web & mobile solution design with robust state management and REST APIs.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skill;
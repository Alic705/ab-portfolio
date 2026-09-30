import React, { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";

const Service = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const services = [
    {
      id: "01",
      title: "Web Design & Development",
      desc: "Crafting modern, high-performance websites with responsive layouts, smooth animations, and clean scalable code.",
      tags: ["Responsive Layouts", "Interactive FX", "Performance & SEO", "CMS Integration"],
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "UI/UX & Product Design",
      desc: "Designing intuitive user experiences, wireframes, and high-fidelity interactive prototypes focused on engagement.",
      tags: ["User Research", "Wireframing", "Interactive Prototypes", "Design Systems"],
      img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Full-Stack Web Applications",
      desc: "Building end-to-end web applications with robust backend APIs, database architecture, and seamless state management.",
      tags: ["REST & GraphQL APIs", "Database Systems", "State Management", "Auth & Security"],
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Branding & Visual Identity",
      desc: "Creating distinctive brand identities, logo systems, color palettes, and guidelines that leave a lasting impression.",
      tags: ["Logo Systems", "Visual Identity", "Design Tokens", "Brand Guidelines"],
      img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2094&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-[#0A0A0A] text-[#CACACA] py-28 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="geist text-[12px] font-bold text-[#FF4925] uppercase tracking-widest block mb-4">
              (SERVICES & SOLUTIONS)
            </span>
            <h2 className="geist text-[36px] md:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
              How I Can Help You <br className="hidden md:block" />
              <span className="text-[#555555]">Tailored digital experiences.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="geist text-[#888888] text-[15px] leading-relaxed">
              Combining creative engineering with strategic design to turn complex ideas into refined, impactful digital products.
            </p>
          </div>
        </div>

        {/* Services Accordion List */}
        <div className="w-full border-t border-[#1F1F1F]">
          {services.map((service, index) => {
            const isSelected = hoveredIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`
                  group border-b border-[#1F1F1F] transition-all duration-500 overflow-hidden cursor-pointer
                  ${isSelected ? 'bg-[#111111]/90' : 'bg-transparent hover:bg-[#111111]/40'}
                `}
              >
                {/* Header Row */}
                <div className="py-8 px-4 md:px-8 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="geist text-[14px] md:text-[16px] font-mono text-[#FF4925] font-bold">
                      {service.id}
                    </span>
                    <h3 className={`geist text-[22px] md:text-[34px] font-bold tracking-tight transition-colors duration-300 ${isSelected ? 'text-white' : 'text-[#888888] group-hover:text-white'}`}>
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className={`hidden lg:block geist text-[12px] font-medium uppercase tracking-wider px-3.5 py-1 rounded-full border transition-all ${isSelected ? 'border-[#FF4925]/40 text-[#FF4925] bg-[#FF4925]/10' : 'border-[#222222] text-[#555555]'}`}>
                      {service.tags[0]}
                    </span>

                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isSelected ? 'border-[#FF4925] bg-[#FF4925] text-white rotate-45' : 'border-[#222222] text-[#666666] group-hover:border-[#444444] group-hover:text-white'}`}>
                      <MdArrowOutward className="text-xl" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                <div className={`
                  grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 md:px-8 transition-all duration-500 ease-out
                  ${isSelected ? 'max-h-[500px] opacity-100 pb-8 pt-2' : 'max-h-0 opacity-0 pb-0 pt-0 pointer-events-none'}
                `}>
                  {/* Left Column: Image Preview */}
                  <div className="lg:col-span-5 h-[220px] md:h-[260px] rounded-2xl overflow-hidden border border-[#222222] relative group/img">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Right Column: Description & Tags */}
                  <div className="lg:col-span-7 flex flex-col justify-between py-2">
                    <div>
                      <span className="geist text-[11px] font-bold text-[#FF4925] uppercase tracking-widest block mb-3">
                        (SCOPE & DELIVERABLES)
                      </span>
                      <p className="geist text-[16px] md:text-[18px] text-[#A3A3A3] leading-relaxed max-w-xl">
                        {service.desc}
                      </p>
                    </div>

                    <div className="mt-6">
                      <div className="flex flex-wrap gap-2.5">
                        {service.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="geist text-[12px] font-medium text-[#CCCCCC] bg-[#1A1A1A] border border-[#262626] px-4 py-1.5 rounded-lg uppercase tracking-wider hover:border-[#FF4925]/40 hover:text-white transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Service;
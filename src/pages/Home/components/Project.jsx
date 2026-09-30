import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MdArrowOutward, MdClose } from "react-icons/md";
import { FiExternalLink, FiCheckCircle, FiLock } from "react-icons/fi";
import RollingButton from '../../../components/RollingButton';
import { scrollToSection } from '../../../utils/scroll';

// Local real project cover images
import nexoraCover from '../../../assets/images/projects/nexora-cover.png';
import quranCover from '../../../assets/images/projects/quran-cover.jpg';
import nexusCover from '../../../assets/images/projects/nexus-cover.jpg';
import dropshipCover from '../../../assets/images/projects/dropship-cover.jpg';

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      id: "01", 
      title: "Nexora Technologies", 
      subtitle: "Enterprise Software, Cloud Architecture & IT Solutions Firm",
      category: "Enterprise Software & Cloud", 
      client: "Nexora Technologies • Global Software Consultancy",
      year: "2025",
      tags: ["React", "Tailwind CSS", "Cloud DevOps", "Docker & CI/CD", "Cybersecurity"],
      metric: "99.9% Uptime SLA",
      secondaryMetric: "Enterprise Architecture",
      img: nexoraCover,
      overview: "A premier enterprise technology consultancy and software development firm delivering mission-critical engineering. Specializes in scalable cloud architectures on AWS & Azure, enterprise web platforms, cross-platform mobile apps, and full cybersecurity auditing.",
      features: [
        "Custom enterprise web applications engineered with modern frontend frameworks & scalable microservices",
        "Automated CI/CD cloud pipelines with Docker containerization, AWS/Azure hosting, and 99.9% uptime SLA",
        "Comprehensive cybersecurity vulnerability auditing, IT audits, and infrastructure hardening"
      ],
      liveUrl: "https://nexora-technologiess.netlify.app/",
      isLive: true
    },
    { 
      id: "02", 
      title: "Al-Quran Academy", 
      subtitle: "Learn Quran Online with Certified Tutors from Home",
      category: "EdTech & Online Learning", 
      client: "Al-Quran Academy • Worldwide Islamic Education",
      year: "2025",
      tags: ["JavaScript", "HTML5 / Modern CSS", "EdTech", "Responsive Design", "1-on-1 Classes"],
      metric: "Global Students",
      secondaryMetric: "Certified Tutors",
      img: quranCover,
      overview: "An international online Islamic education portal offering personalized 1-on-1 Quran learning from the comfort of home with certified male and female tutors. Features flexible international scheduling, interactive trial booking, and progressive curricula from Noorani Qaida to Tajweed.",
      features: [
        "Comprehensive Courses: Noorani Qaida for beginners, Fluent Quran Reading, and Tajweed Mastery",
        "Interactive Trial Booking: Seamless scheduling for 1-on-1 free trial classes with certified tutors across global timezones",
        "Engaging E-Learning UI: Clean, responsive layout tailored for effortless student engagement on mobile and desktop"
      ],
      liveUrl: "https://alquranacademy.onrender.com/",
      isLive: true
    },
    { 
      id: "03", 
      title: "NEXUS Growth Agency", 
      subtitle: "Performance Marketing, Media Buying & SEO Agency",
      category: "Performance Marketing & SEO", 
      client: "NEXUS Growth Partner • Full-Service Marketing",
      year: "2025",
      tags: ["React", "Tailwind CSS", "Performance SEO", "Paid Media (Meta/Google)", "Conversion CRO"],
      metric: "4.8x Blended ROAS",
      secondaryMetric: "+246% Organic Traffic",
      img: nexusCover,
      overview: "A performance-first growth digital marketing agency platform helping ambitious brands scale revenue and acquire customers through strategic media buying on Meta & Google, technical SEO, and conversion-focused creative design.",
      features: [
        "Integrated Acquisition Ecosystem: Managing paid advertising across channels, technical SEO, and retention lifecycle funnels",
        "Interactive Comparison Engine: Contrasting traditional marketing agencies with modern dedicated performance growth units",
        "4-Step Working Framework: Discovery, creative testing, data tracking, and rapid sustainable revenue scaling"
      ],
      liveUrl: "https://nexusmarketi.netlify.app/",
      isLive: true
    },
    { 
      id: "04", 
      title: "AuraDrop — D2C Dropshipping Platform", 
      subtitle: "High-Converting Headless Dropshipping Storefront & Supplier Sync",
      category: "E-Commerce & Dropshipping", 
      client: "D2C Concept Store • Global Dropshipping",
      year: "2026",
      tags: ["Next.js", "Tailwind CSS", "Shopify Storefront", "Stripe Multi-Currency", "Supplier Sync"],
      metric: "+185% Conversion Rate",
      secondaryMetric: "Automated Fulfillment",
      img: dropshipCover,
      overview: "A modern, high-converting dropshipping e-commerce storefront engineered for global direct-to-consumer sales. Features automated AliExpress & CJ Dropshipping inventory synchronization, 1-click frictionless checkout, dynamic product bundle discounts, and multi-currency Stripe processing.",
      features: [
        "Automated Supplier API Sync: Real-time stock sync, product variant mapping, and 1-click order fulfillment webhooks",
        "Conversion-Focused Checkout: Frictionless single-page checkout drawer with Apple Pay, Google Pay & Stripe Elements",
        "Social Proof & Urgency: Real-time inventory countdown timers, verified customer reviews, and dynamic bundle discounts"
      ],
      liveUrl: null,
      isLive: false
    },
  ];

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const getScrollAmount = () => section.scrollWidth - window.innerWidth;

    gsap.to(section, {
      x: () => -getScrollAmount(),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: triggerRef });

  return (
    <section ref={triggerRef} className="bg-[#0A0A0A] overflow-hidden relative">
      <div className="min-h-screen w-full flex flex-col justify-center py-10 md:py-14">
        
        {/* Header Section */}
        <div className="px-6 md:px-16 mb-6 md:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="geist text-[12px] font-bold text-[#FF4925] uppercase tracking-widest block mb-2">
              (SELECTED WORKS • 04 FEATURED PROJECTS)
            </span>
            <h2 className="geist text-[28px] md:text-[44px] font-bold text-white leading-[1.1] tracking-tight">
              Featured Projects <br className="hidden md:block" />
              <span className="text-[#555555]">Production systems & live deployments.</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="geist text-[#888888] text-[13px] leading-relaxed">
              Explore live production web platforms, marketing agency funnels, and high-converting e-commerce dropshipping architectures.
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div 
          ref={sectionRef} 
          className="flex flex-row items-center gap-8 px-6 md:px-16 w-fit"
        >
          {projects.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedProject(item)}
              className="group flex-shrink-0 w-[82vw] md:w-[540px] cursor-pointer"
            >
              {/* Project Card Media */}
              <div className="relative h-[40vh] md:h-[350px] w-full overflow-hidden rounded-3xl border border-[#1F1F1F] bg-[#121212] transition-all duration-500 group-hover:border-[#FF4925]/60 group-hover:shadow-[0_10px_40px_rgba(255,73,37,0.15)]">
                
                {/* Background Image */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Top Badge: ID & Live Status */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                  <span className="geist bg-black/60 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                    {item.id} / {item.category}
                  </span>

                  {item.isLive && item.liveUrl ? (
                    <span className="geist bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      LIVE SITE
                    </span>
                  ) : (
                    <span className="geist bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-amber-400 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider uppercase flex items-center gap-1.5">
                      <FiLock className="text-xs" />
                      DROPSHIPPING CONCEPT
                    </span>
                  )}
                </div>

                {/* Center Hover Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {item.isLive && item.liveUrl ? (
                    <>
                      <a 
                        href={item.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2.5 bg-[#FF4925] hover:bg-[#ff3510] text-white rounded-full flex items-center gap-2 shadow-[0_0_25px_rgba(255,73,37,0.7)] geist font-bold text-xs uppercase tracking-wider transition-all transform hover:scale-105 cursor-pointer"
                      >
                        <span>LIVE PREVIEW</span>
                        <FiExternalLink className="text-sm" />
                      </a>
                      <div className="px-4 py-2.5 bg-black/75 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center gap-1.5 hover:bg-white/10 transition-all geist font-bold text-xs uppercase tracking-wider">
                        <span>DETAILS</span>
                        <MdArrowOutward className="text-sm" />
                      </div>
                    </>
                  ) : (
                    <div className="px-5 py-2.5 bg-black/85 backdrop-blur-md border border-amber-500/40 text-white rounded-full flex items-center gap-2 shadow-2xl geist font-bold text-xs uppercase tracking-wider">
                      <FiLock className="text-amber-400 text-sm" />
                      <span>VIEW STORE SPECS</span>
                      <MdArrowOutward className="text-sm" />
                    </div>
                  )}
                </div>

                {/* Bottom Card Title Overlay */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="geist text-[22px] md:text-[26px] font-bold text-white tracking-tight group-hover:text-[#FF4925] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <span className="geist text-[11px] font-bold text-[#FF4925] shrink-0">
                      {item.metric}
                    </span>
                  </div>
                  <p className="geist text-[#A3A3A3] text-[13px] line-clamp-1 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
              
              {/* Project Tech Tags & Info Bar */}
              <div className="geist mt-3 flex items-center justify-between px-2">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {item.tags.slice(0, 3).map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[11px] font-semibold text-[#888888] bg-[#141414] border border-[#222222] px-2.5 py-0.5 rounded-md uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="text-[10px] font-bold text-[#555555] bg-[#141414] border border-[#222222] px-2 py-0.5 rounded-md">
                      +{item.tags.length - 3}
                    </span>
                  )}
                </div>
                <span className="text-[12px] font-medium text-[#555555] ml-2 shrink-0">
                  {item.year}
                </span>
              </div>
            </div>
          ))}

          {/* End CTA Card */}
          <div className="geist flex-shrink-0 pr-16 pl-4">
            <div className="w-[75vw] md:w-[340px] h-[40vh] md:h-[350px] rounded-3xl border border-[#222222] bg-[#111111] p-6 md:p-8 flex flex-col justify-between hover:border-[#FF4925]/50 transition-all duration-500 group">
              <div>
                <span className="text-[#FF4925] text-[12px] font-bold tracking-widest uppercase block mb-2">
                  (START A PROJECT)
                </span>
                <h3 className="text-white text-[24px] md:text-[26px] font-bold leading-tight">
                  Have a vision for your next product?
                </h3>
                <p className="text-[#777777] text-[13px] mt-3 leading-relaxed">
                  Let’s collaborate to design and develop an unforgettable digital experience.
                </p>
              </div>

              <RollingButton 
                text="START A PROJECT" 
                variant="orange" 
                size="md"
                className="w-full"
                onClick={() => scrollToSection("contact")}
              />
            </div>
          </div>

        </div>

      </div>

      {/* Project Details Modal - Enhanced with wider max-w-5xl, fixed header/footer, and smooth scrollable body */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-5 md:p-8 overflow-hidden"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl lg:max-w-5xl bg-[#111111] border border-[#262626] rounded-3xl shadow-2xl flex flex-col max-h-[90vh] text-left geist overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF4925]/10 blur-[100px] pointer-events-none rounded-full" />

            {/* 1. FIXED HEADER */}
            <div className="p-5 md:p-6 border-b border-[#222222] flex items-center justify-between gap-4 shrink-0 bg-[#111111]/95 backdrop-blur-md z-10">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-[#FF4925] text-xs font-bold tracking-widest uppercase">
                    CASE STUDY • {selectedProject.id} / {selectedProject.category}
                  </span>
                  {selectedProject.isLive && selectedProject.liveUrl ? (
                    <span className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      LIVE PRODUCTION
                    </span>
                  ) : (
                    <span className="bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase flex items-center gap-1">
                      <FiLock className="text-xs" />
                      DROPSHIPPING CONCEPT
                    </span>
                  )}
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              <button 
                onClick={() => setSelectedProject(null)}
                className="w-10 h-10 rounded-full border border-[#262626] bg-[#161616] text-[#A3A3A3] hover:text-white hover:border-[#FF4925] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <MdClose className="text-xl" />
              </button>
            </div>

            {/* 2. SCROLLABLE BODY */}
            <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                
                {/* Left Column: Cover Image & Metrics */}
                <div className="md:col-span-5 space-y-4">
                  <div className="h-[220px] md:h-[280px] rounded-2xl overflow-hidden border border-[#222222] relative group">
                    <img 
                      src={selectedProject.img} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-bold gap-2">
                      <span className="bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-emerald-400">
                        {selectedProject.metric}
                      </span>
                      <span className="bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[#A3A3A3]">
                        {selectedProject.secondaryMetric}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#161616] border border-[#222222] flex flex-col gap-2 text-xs text-[#888888]">
                    <div className="flex justify-between items-center">
                      <span className="uppercase tracking-wider">Client:</span>
                      <span className="text-white font-semibold">{selectedProject.client}</span>
                    </div>
                    <div className="flex justify-between items-center border-t border-[#222222] pt-2">
                      <span className="uppercase tracking-wider">Release Year:</span>
                      <span className="text-white font-semibold">{selectedProject.year}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Project Overview, Features & Stack */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <span className="text-[#FF4925] text-xs font-bold uppercase tracking-wider block mb-2">
                      PROJECT OVERVIEW
                    </span>
                    <p className="text-[#CCCCCC] text-sm md:text-base leading-relaxed">
                      {selectedProject.overview}
                    </p>
                  </div>

                  <div>
                    <span className="text-[#888888] text-xs font-bold uppercase tracking-wider block mb-3">
                      KEY DELIVERABLES & FEATURES
                    </span>
                    <ul className="space-y-2.5 text-xs md:text-sm text-[#AAAAAA]">
                      {selectedProject.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#161616] border border-[#222222]">
                          <FiCheckCircle className="text-[#FF4925] text-base shrink-0 mt-0.5" />
                          <span className="leading-snug text-[#CCCCCC]">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[#888888] text-xs font-bold uppercase tracking-wider block mb-2.5">
                      TECHNOLOGIES UTILIZED
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs font-semibold text-[#CCCCCC] bg-[#161616] border border-[#262626] px-3 py-1.5 rounded-lg uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 3. FIXED FOOTER WITH ACTIONS */}
            <div className="p-4 md:p-5 border-t border-[#222222] shrink-0 bg-[#111111]/95 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 z-10">
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                {selectedProject.isLive && selectedProject.liveUrl ? (
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#22C55E] hover:bg-[#1ea750] text-black font-extrabold text-xs uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(34,197,94,0.35)]"
                  >
                    <span>LAUNCH LIVE SITE</span>
                    <FiExternalLink className="text-base" />
                  </a>
                ) : (
                  <div className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
                    <FiLock className="text-sm" />
                    <span>PRIVATE STORE (NO LIVE LINK)</span>
                  </div>
                )}

                <button 
                  onClick={() => {
                    setSelectedProject(null);
                    scrollToSection("contact");
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#FF4925] text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-[#ff3510] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,73,37,0.3)]"
                >
                  <span>INQUIRE SIMILAR PROJECT</span>
                  <MdArrowOutward className="text-base" />
                </button>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-[#888888] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                CLOSE
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
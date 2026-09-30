import React from 'react';
import { MdArrowOutward as ArrowIcon, MdClose as CloseIcon } from 'react-icons/md';
import { scrollToSection } from '../utils/scroll';

const Sidebar = ({ isOpen, onClose }) => {
  const navLinks = [
    { id: "01", name: "Home", href: "#hero" },
    { id: "02", name: "About", href: "#about" },
    { id: "03", name: "Projects", href: "#projects" },
    { id: "04", name: "Services", href: "#services" },
    { id: "05", name: "Process", href: "#process" },
    { id: "06", name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href) => {
    onClose();
    setTimeout(() => {
      scrollToSection(href);
    }, 100);
  };

  return (
    <>
      {/* Dark Overlay Backdrop */}
      <div 
        onClick={onClose}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[150] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Sliding Drawer Container */}
      <aside 
        className={`fixed top-0 right-0 h-full w-full sm:w-[480px] md:w-[540px] bg-[#0E0E0E] border-l border-[#1F1F1F] z-[160] p-8 md:p-12 flex flex-col justify-between transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0 shadow-[-20px_0_60px_rgba(0,0,0,0.9)]' : 'translate-x-full'
        }`}
      >
        {/* Top Bar: Label & Close Button */}
        <div className="flex items-center justify-between border-b border-[#1F1F1F] pb-6">
          <span className="geist text-[12px] font-bold text-[#FF4925] uppercase tracking-widest">
            (NAVIGATION)
          </span>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-[#222222] bg-[#141414] text-white flex items-center justify-center cursor-pointer hover:border-[#FF4925] hover:text-[#FF4925] transition-all duration-300"
            aria-label="Close menu"
          >
            <CloseIcon className="text-xl" />
          </button>
        </div>

        {/* Navigation Links List */}
        <div className="py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <div 
              key={link.id} 
              onClick={() => handleLinkClick(link.href)}
              className="group flex items-baseline gap-4 cursor-pointer py-1"
            >
              <span className="geist text-[13px] font-mono text-[#555555] group-hover:text-[#FF4925] transition-colors">
                {link.id}
              </span>
              <span className="geist text-[36px] md:text-[44px] font-bold text-[#A3A3A3] group-hover:text-white transition-colors duration-300">
                {link.name}
              </span>
              <ArrowIcon className="text-2xl text-[#FF4925] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto" />
            </div>
          ))}
        </div>

        {/* Bottom Info & Contact Details */}
        <div className="border-t border-[#1F1F1F] pt-6 flex flex-col gap-6">
          <div>
            <span className="geist text-[11px] font-bold text-[#555555] uppercase tracking-widest block mb-2">
              (GET IN TOUCH)
            </span>
            <a 
              href="mailto:chabdullah3824@gmail.com" 
              className="geist text-[16px] md:text-[18px] font-medium text-white hover:text-[#FF4925] transition-colors"
            >
              chabdullah3824@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-[13px] text-[#777777] geist font-medium">
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>

            {/* Availability Badge */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></span>
              <span className="geist text-[11px] font-bold text-[#22C55E] uppercase tracking-wider">Available</span>
            </div>
          </div>

          {/* Rolling Text Button */}
          <div className="geist mt-2">
            <button 
              onClick={() => handleLinkClick("#contact")}
              className="w-full group relative overflow-hidden border-2 border-[#FF4925] bg-[#220F0D] py-3.5 px-6 rounded-full flex items-center justify-center transition-colors duration-500 hover:bg-[#FF4925] cursor-pointer"
            >
              <div className="relative h-6 cursor-pointer">
                <div className="flex items-center gap-2 text-[#FF4925] text-[16px] font-bold uppercase transition-all duration-500 transform group-hover:-translate-y-[150%] group-hover:text-white">
                  START A PROJECT <ArrowIcon className="text-xl" />
                </div>
                <div className="absolute inset-0 flex items-center gap-2 text-white text-[16px] font-bold uppercase transition-all duration-500 transform translate-y-[150%] group-hover:translate-y-0">
                  START A PROJECT <ArrowIcon className="text-xl" />
                </div>
              </div>
            </button>
          </div>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;

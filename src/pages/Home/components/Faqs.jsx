import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { MdArrowOutward } from 'react-icons/md';
import { scrollToSection } from '../../../utils/scroll';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      id: "01",
      question: "What is your typical project timeline?",
      answer: "Standard web projects usually take 3 to 6 weeks from discovery to final launch. Timeline varies depending on design complexity, custom feature requirements, and feedback turnarounds."
    },
    {
      id: "02",
      question: "What full-stack services do you provide?",
      answer: "I provide end-to-end digital product design and engineering — including UI/UX research, wireframing, custom frontend development, backend REST APIs, GSAP animations, and SEO optimization."
    },
    {
      id: "03",
      question: "Which technologies do you specialize in?",
      answer: "My core stack includes React, Next.js, Tailwind CSS, GSAP, Framer Motion, Node.js, Express, SQL, and MongoDB, ensuring fast performance, accessibility, and high scalability."
    },
    {
      id: "04",
      question: "How do we collaborate & stay in touch?",
      answer: "Communication is transparent and structured. We use dedicated channels (Slack/Email) for daily async updates, alongside weekly video syncs and live staging preview links."
    },
    {
      id: "05",
      question: "Do you offer post-launch support & maintenance?",
      answer: "Yes, every project includes 30 days of complimentary post-launch support and bug fixes. Optional ongoing maintenance plans are also available for continuous updates and feature expansion."
    },
    {
      id: "06",
      question: "How are project payments structured?",
      answer: "Projects are typically split into milestones: 50% deposit upon project kickoff and alignment, and the remaining 50% due upon final approval prior to production deployment."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0A0A0A] text-[#CACACA] py-28 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="geist text-[12px] font-bold text-[#FF4925] uppercase tracking-widest block mb-4">
              (FREQUENTLY ASKED QUESTIONS)
            </span>
            <h2 className="geist text-[36px] md:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
              Got Questions? <br className="hidden md:block" />
              <span className="text-[#555555]">Here are the answers.</span>
            </h2>
          </div>

          <div className="max-w-xs">
            <p className="geist text-[#888888] text-[14px] leading-relaxed">
              Everything you need to know about working together, project processes, and technical execution.
            </p>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full border-t border-[#1F1F1F]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={item.id}
                className={`border-b border-[#1F1F1F] transition-all duration-300 ${isOpen ? 'bg-[#111111]/80' : 'bg-transparent hover:bg-[#111111]/30'}`}
              >
                {/* Accordion Header Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-7 px-4 md:px-6 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-6 md:gap-8 pr-4">
                    <span className="geist text-[13px] font-mono text-[#FF4925] font-bold">
                      {item.id}
                    </span>
                    <span className={`geist text-[18px] md:text-[24px] font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[#888888] group-hover:text-white'}`}>
                      {item.question}
                    </span>
                  </div>

                  {/* Toggle Button Icon */}
                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'border-[#FF4925] bg-[#FF4925] text-white rotate-180' : 'border-[#222222] text-[#666666] group-hover:border-[#444444] group-hover:text-white'}`}>
                    {isOpen ? <FiMinus className="text-lg" /> : <FiPlus className="text-lg" />}
                  </div>
                </button>

                {/* Accordion Answer Content */}
                <div 
                  className={`
                    grid transition-all duration-500 ease-out overflow-hidden
                    ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="pl-14 md:pl-20 pr-6 md:pr-10 pt-2">
                      <div className="border-l-2 border-[#FF4925] pl-6 py-1">
                        <p className="geist text-[15px] md:text-[17px] text-[#999999] leading-relaxed max-w-2xl">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center pt-8 border-t border-[#1C1C1C]">
          <p className="geist text-[#777777] text-[14px]">
            Have a question that isn't answered here?{" "}
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="text-[#FF4925] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              Reach out directly <MdArrowOutward className="inline" />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Faqs;
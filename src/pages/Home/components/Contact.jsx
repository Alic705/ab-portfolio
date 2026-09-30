import React, { useState } from 'react';
import { MdArrowOutward, MdCheck, MdContentCopy, MdEmail } from "react-icons/md";
import { FiClock, FiGlobe, FiSend } from "react-icons/fi";
import RollingButton from '../../../components/RollingButton';
import { scrollToSection } from '../../../utils/scroll';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const [selectedServices, setSelectedServices] = useState(["Web Development"]);
    const [selectedBudget, setSelectedBudget] = useState("$2,000 - $5,000");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterSuccess, setNewsletterSuccess] = useState(false);

    const servicesList = [
        "Web Development",
        "UI/UX & Product Design",
        "Full-Stack Web App",
        "GSAP & Motion FX",
        "Branding & Identity"
    ];

    const budgetList = [
        "< $2,000",
        "$2,000 - $5,000",
        "$5,000 - $10,000",
        "$10,000+"
    ];

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("chabdullah3824@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const toggleService = (service) => {
        if (selectedServices.includes(service)) {
            if (selectedServices.length > 1) {
                setSelectedServices(selectedServices.filter(s => s !== service));
            }
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 800);
    };

    const handleNewsletter = (e) => {
        e.preventDefault();
        if (!newsletterEmail) return;
        setNewsletterSuccess(true);
        setTimeout(() => {
            setNewsletterEmail("");
            setNewsletterSuccess(false);
        }, 4000);
    };

    return (
        <section id="contact" className="w-full min-h-screen bg-[#0A0A0A] text-white font-sans flex flex-col justify-between relative overflow-hidden">

            {/* Top Section: Hero Banner */}
            <div className="relative w-full py-20 px-6 md:px-16 lg:px-20 border-b border-[#1A1A1A]">
                <img
                    className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
                    src="https://framerusercontent.com/images/3X1HO3X74cUE2rChqeNy9aFq20.jpg"
                    alt="Background Grid"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-transparent pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
                    <div>
                        <span className="geist text-[12px] font-bold text-[#FF4925] uppercase tracking-widest block mb-4">
                            (LET'S CONNECT • CONTACT & INQUIRY)
                        </span>
                        <h1 className="geist text-[52px] md:text-[96px] lg:text-[110px] leading-[0.95] font-bold uppercase tracking-tight text-white">
                            Let's work <br />
                            <span className="text-[#555555]">together.</span>
                        </h1>
                    </div>

                    <div className="max-w-md text-left lg:text-right">
                        <p className="geist text-[#A3A3A3] text-[15px] md:text-[16px] leading-relaxed mb-6">
                            Have a vision, digital product, or custom web platform in mind? Let's engineer something extraordinary with precision and care.
                        </p>

                        <div className="flex items-center gap-3 justify-start lg:justify-end">
                            <span className="w-2.5 h-2.5 bg-[#22C55E] rounded-full animate-pulse" />
                            <span className="geist text-sm text-[#CCCCCC] font-medium">
                                Currently open for new commissions & collaborations
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section: Interactive Contact & Project Inquiry Form */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-16 lg:px-20 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Direct Communication & Availability Cards */}
                    <div className="lg:col-span-5 flex flex-col gap-8">

                        {/* Direct Email Card */}
                        <div className="p-8 rounded-3xl border border-[#1F1F1F] bg-[#111111]/90 backdrop-blur-sm relative overflow-hidden group hover:border-[#FF4925]/40 transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4925]/5 rounded-full blur-2xl pointer-events-none" />

                            <span className="geist text-[11px] font-bold text-[#FF4925] uppercase tracking-widest block mb-2">
                                DIRECT INQUIRY
                            </span>
                            <h3 className="geist text-2xl font-bold text-white tracking-tight mb-2">
                                Drop me an email
                            </h3>
                            <p className="geist text-sm text-[#888888] mb-6">
                                Feel free to reach out directly for consulting, project scopes, or direct questions.
                            </p>

                            <div className="p-4 rounded-2xl bg-[#161616] border border-[#262626] flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <MdEmail className="text-[#FF4925] text-xl shrink-0" />
                                    <a
                                        href="mailto:chabdullah3824@gmail.com"
                                        className="geist text-sm md:text-base font-semibold text-white hover:text-[#FF4925] transition-colors truncate"
                                    >
                                        chabdullah3824@gmail.com
                                    </a>
                                </div>

                                <button
                                    onClick={handleCopyEmail}
                                    className="px-3 py-1.5 rounded-lg bg-[#222222] hover:bg-[#FF4925] text-xs font-semibold text-white transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
                                    title="Copy email to clipboard"
                                >
                                    {copied ? (
                                        <>
                                            <MdCheck className="text-sm text-green-400" />
                                            <span>Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <MdContentCopy className="text-sm" />
                                            <span>Copy</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Availability & SLA Guarantee Card */}
                        <div className="p-8 rounded-3xl border border-[#1F1F1F] bg-[#111111]/90 backdrop-blur-sm flex flex-col gap-6 hover:border-[#FF4925]/40 transition-all duration-300">
                            <span className="geist text-[11px] font-bold text-[#FF4925] uppercase tracking-widest block">
                                COMMITMENT & TIMELINE
                            </span>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#262626] flex items-center justify-center shrink-0 text-[#FF4925]">
                                        <FiClock className="text-lg" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-[#666666] font-semibold uppercase block">Response Time</span>
                                        <span className="text-sm font-bold text-white">&lt; 24 Hours</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#262626] flex items-center justify-center shrink-0 text-[#22C55E]">
                                        <FiGlobe className="text-lg" />
                                    </div>
                                    <div>
                                        <span className="text-xs text-[#666666] font-semibold uppercase block">Location</span>
                                        <span className="text-sm font-bold text-white">Remote Worldwide</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-[#1F1F1F] text-xs text-[#777777] leading-relaxed">
                                Active working hours: Monday – Friday, 9:00 AM – 7:00 PM (GMT+5 / PKT). Available for asynchronous or video consultations upon request.
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Interactive Project Inquiry Form */}
                    <div className="lg:col-span-7 p-8 md:p-12 rounded-3xl border border-[#1F1F1F] bg-[#111111] relative overflow-hidden">

                        {isSubmitted ? (
                            /* Success State */
                            <div className="py-12 px-4 text-center flex flex-col items-center justify-center geist">
                                <div className="w-20 h-20 rounded-full bg-[#FF4925]/10 border-2 border-[#FF4925] flex items-center justify-center text-[#FF4925] text-4xl mb-6 shadow-[0_0_30px_rgba(255,73,37,0.3)] animate-pulse">
                                    <MdCheck />
                                </div>
                                <h3 className="text-3xl font-bold text-white tracking-tight mb-3">
                                    Inquiry Received!
                                </h3>
                                <p className="text-[#AAAAAA] text-base max-w-md mb-8 leading-relaxed">
                                    Thank you, <span className="text-white font-semibold">{formData.name}</span>! I have received your project details and selected services. Expect a personalized response at <span className="text-[#FF4925] font-semibold">{formData.email}</span> within 24 hours.
                                </p>

                                <button
                                    onClick={() => {
                                        setIsSubmitted(false);
                                        setFormData({ name: "", email: "", message: "" });
                                    }}
                                    className="px-8 py-3.5 bg-[#1F1F1F] hover:bg-[#FF4925] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer"
                                >
                                    SEND ANOTHER INQUIRY
                                </button>
                            </div>
                        ) : (
                            /* Active Inquiry Form */
                            <form onSubmit={handleSubmit} className="space-y-8 geist">
                                <div>
                                    <span className="text-[11px] font-bold text-[#FF4925] uppercase tracking-widest block mb-2">
                                        START A CONVERSATION
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                        Project Inquiry Form
                                    </h3>
                                    <p className="text-sm text-[#777777] mt-1">
                                        Tell me about what you want to build and your target timeframe.
                                    </p>
                                </div>

                                {/* Services Selection Chips */}
                                <div>
                                    <label className="block text-xs font-bold text-[#AAAAAA] uppercase tracking-wider mb-3">
                                        01 / WHAT SERVICES ARE YOU LOOKING FOR?
                                    </label>
                                    <div className="flex flex-wrap gap-2.5">
                                        {servicesList.map((service) => {
                                            const isSelected = selectedServices.includes(service);
                                            return (
                                                <button
                                                    type="button"
                                                    key={service}
                                                    onClick={() => toggleService(service)}
                                                    className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${isSelected
                                                        ? "bg-[#FF4925] text-white border-[#FF4925] shadow-[0_0_15px_rgba(255,73,37,0.3)]"
                                                        : "bg-[#161616] text-[#888888] border-[#262626] hover:border-[#444444] hover:text-white"
                                                        }`}
                                                >
                                                    {service}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Budget Tier Selection Chips */}


                                {/* Text Inputs */}
                                <div className="space-y-6 pt-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold text-[#888888] uppercase tracking-wider mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Alex Morgan"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-[#161616] border border-[#262626] focus:border-[#FF4925] focus:outline-none px-4 py-3.5 rounded-xl text-sm text-white placeholder-[#555555] transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-[#888888] uppercase tracking-wider mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="e.g. alex@company.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-[#161616] border border-[#262626] focus:border-[#FF4925] focus:outline-none px-4 py-3.5 rounded-xl text-sm text-white placeholder-[#555555] transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[#888888] uppercase tracking-wider mb-2">
                                            Project Brief & Objectives *
                                        </label>
                                        <textarea
                                            rows={4}
                                            required
                                            placeholder="Tell me about your product requirements, deadlines, or existing stack..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-[#161616] border border-[#262626] focus:border-[#FF4925] focus:outline-none px-4 py-3.5 rounded-xl text-sm text-white placeholder-[#555555] transition-colors resize-none"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <RollingButton
                                        text={isSubmitting ? "SENDING INQUIRY..." : "SUBMIT INQUIRY"}
                                        variant="orange"
                                        size="lg"
                                        type="submit"
                                        className="w-full"
                                    />
                                    <p className="text-center text-[11px] text-[#555555] mt-3">
                                        Your information is safe. No spam, only genuine engineering discussions.
                                    </p>
                                </div>
                            </form>
                        )}

                    </div>

                </div>
            </div>

            {/* Bottom Section: Footer Links */}
            <div className="geist px-6 md:px-16 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 items-start border-t border-[#1C1C1C] relative z-10">
                {/* Contact Info & Brand */}
                <div className="space-y-6">
                    {/* Brand Logo with AB Badge */}
                    <div 
                        className="flex items-center gap-3 cursor-pointer group" 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        title="Back to Top"
                    >
                        {/* Favicon-style Monogram Card with AB */}
                        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#1C1C1C] to-[#0A0A0A] border border-[#FF4925]/40 flex items-center justify-center shadow-[0_0_20px_rgba(255,73,37,0.25)] group-hover:border-[#FF4925] group-hover:shadow-[0_0_25px_rgba(255,73,37,0.45)] transition-all duration-300 shrink-0">
                            <span className="geist font-black text-sm tracking-tight bg-gradient-to-br from-[#FF6B4A] via-[#FF4925] to-white bg-clip-text text-transparent">
                                AB
                            </span>
                            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#FF4925] animate-pulse" />
                        </div>

                        {/* Name Typography */}
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1.5">
                                <span className="geist font-extrabold text-white text-base tracking-tight group-hover:text-[#FF4925] transition-colors leading-none">
                                    ABDULLAH
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4925]" />
                            </div>
                            <span className="geist text-[10px] text-[#777777] font-semibold uppercase tracking-widest leading-tight mt-0.5">
                                Creative Developer
                            </span>
                        </div>
                    </div>

                    <div>
                        <span className="text-[11px] font-bold text-[#555555] uppercase block mb-1">(EMAIL)</span>
                        <a href="mailto:chabdullah3824@gmail.com" className="text-base md:text-lg font-bold text-[#FF4925] hover:underline break-all">
                            chabdullah3824@gmail.com
                        </a>
                    </div>
                    <div>
                        <span className="text-[11px] font-bold text-[#555555] uppercase block mb-1">(STATUS)</span>
                        <p className="text-sm font-medium text-white flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></span>
                            Available for project
                        </p>
                    </div>
                </div>

                {/* Quick Navigation Links */}
                <div>
                    <span className="text-[11px] font-bold text-[#555555] uppercase block mb-4">(NAVIGATION)</span>
                    <ul className="space-y-2.5 text-sm font-medium">
                        <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-[#A3A3A3] hover:text-white transition-colors">Home</a></li>
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }} className="text-[#A3A3A3] hover:text-white transition-colors">About</a></li>
                        <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }} className="text-[#A3A3A3] hover:text-white transition-colors">Works</a></li>
                        <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection("services"); }} className="text-[#A3A3A3] hover:text-white transition-colors">Services</a></li>
                        <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection("process"); }} className="text-[#A3A3A3] hover:text-white transition-colors">Process</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <span className="text-[11px] font-bold text-[#555555] uppercase block mb-4">(SOCIALS)</span>
                    <ul className="space-y-2.5 text-sm font-medium">
                        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#A3A3A3] hover:text-[#FF4925] transition-colors flex items-center gap-1">LinkedIn <span className="text-xs">↗</span></a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#A3A3A3] hover:text-[#FF4925] transition-colors flex items-center gap-1">Instagram <span className="text-xs">↗</span></a></li>
                        <li><a href="https://github.com" target="_blank" rel="noreferrer" className="text-[#A3A3A3] hover:text-[#FF4925] transition-colors flex items-center gap-1">GitHub <span className="text-xs">↗</span></a></li>
                        <li><a href="https://x.com" target="_blank" rel="noreferrer" className="text-[#A3A3A3] hover:text-[#FF4925] transition-colors flex items-center gap-1">Twitter / X <span className="text-xs">↗</span></a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col space-y-4">
                    <span className="text-[11px] font-bold text-[#555555] uppercase block mb-1">(NEWSLETTER)</span>
                    <p className="text-xs text-[#888888] leading-relaxed">Sign up for monthly insights, engineering case studies, and updates.</p>

                    {newsletterSuccess ? (
                        <div className="p-3 bg-[#FF4925]/10 border border-[#FF4925] rounded-xl text-xs text-[#FF4925] font-semibold">
                            ✓ Subscribed! Thanks for joining.
                        </div>
                    ) : (
                        <form onSubmit={handleNewsletter} className="space-y-3">
                            <div className="relative border-b border-[#FF4925] pb-2">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter email address"
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    className="bg-transparent w-full outline-none text-sm py-1.5 text-white placeholder-[#555555]"
                                />
                            </div>
                            <div className="flex items-center justify-start pt-1">
                                <RollingButton text="SUBSCRIBE" variant="white" size="sm" type="submit" />
                            </div>
                        </form>
                    )}
                </div>
            </div>

            {/* Copyright Sub-footer */}
            <div className="geist px-6 md:px-16 lg:px-20 py-6 border-t border-[#141414] text-xs text-[#555555] flex flex-col sm:flex-row items-center justify-between gap-3">
                <p>© 2026 ABDULLAH. ALL RIGHTS RESERVED.</p>
                <p className="text-[#444444]">CRAFTED WITH PRECISION & PASSION</p>
            </div>
        </section >
    );
};

export default Contact;
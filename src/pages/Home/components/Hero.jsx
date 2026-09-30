import React from 'react';
import RollingButton from '../../../components/RollingButton';
import { scrollToSection } from '../../../utils/scroll';

const Hero = () => {
    return (
        <div className="bg-[#0A0A0A] w-full h-screen flex items-center justify-center relative">
            {/* CONTENT */}
            <div className="absolute left-[1%] bottom-[15%] w-[30%] text-[#A3A3A3]">
                <p className="geist text-[32px] font-bold leading-[1.1] tracking-tight indent-12">
                I build brands, websites, and digital experiences
                    <span className="text-[#464646]"> with intention, clarity and care.</span>
                </p>
            </div>
            {/* VIDEO */}
            <div className="w-[84%] h-[100%]">
                <video
                    className='w-full h-full object-cover'
                    autoPlay
                    muted
                    src="https://framerusercontent.com/assets/Qc6dhglAiYjaI04EEF5RsqHBU.mp4" />
            </div>
            {/* CONTENT */}
            <div className="geist text-[#A3A3A3] absolute w-[20%] leading-[1.1] top-[20%] right-[2%] text-end">
                <p className='font-bold text-[56px] text-[#757575] tracking-tight leading-[1]'>Beyond Visuals.</p>
                <p className='font-bold text-[56px] tracking-tight leading-[1]'>Built with Vision.</p>
            </div>

            {/* Rolling Button */}
            <div className="absolute right-[2%] bottom-[5%]">
                <RollingButton 
                    text="START A PROJECT" 
                    variant="orange" 
                    onClick={() => scrollToSection("contact")}
                />
            </div>
        </div>
    )
}

export default Hero
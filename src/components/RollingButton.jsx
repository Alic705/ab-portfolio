import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const RollingButton = ({ 
  text = "START A PROJECT", 
  variant = "orange", // "orange" | "white"
  size = "lg", // "sm" | "md" | "lg"
  icon: Icon = MdArrowOutward, 
  onClick, 
  type = "button",
  className = "" 
}) => {
  const isOrange = variant === "orange";

  // Size styling maps for perfect vertical/horizontal alignment & bold hierarchy
  const sizeStyles = {
    sm: {
      padding: "py-2.5 md:py-3 px-6 md:px-7",
      fontSize: "text-[13px] md:text-[14px]",
      height: "h-[20px]",
      iconSize: "text-[16px]",
    },
    md: {
      padding: "py-3.5 md:py-4 px-8 md:px-9",
      fontSize: "text-[15px] md:text-[17px]",
      height: "h-[24px] md:h-[26px]",
      iconSize: "text-[18px] md:text-[20px]",
    },
    lg: {
      padding: "py-4 md:py-5 px-9 md:px-11",
      fontSize: "text-[18px] md:text-[20px]",
      height: "h-[28px] md:h-[30px]",
      iconSize: "text-[22px] md:text-[24px]",
    }
  };

  const currentSize = sizeStyles[size] || sizeStyles.lg;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group cursor-pointer relative inline-flex items-center justify-center overflow-hidden rounded-full transition-all duration-500 geist ${
        isOrange
          ? "border-2 border-[#FF4925] bg-[#220F0D] hover:bg-[#FF4925]"
          : "border-2 border-white/20 hover:border-[#FF4925] bg-black/60 hover:bg-[#FF4925]"
      } ${currentSize.padding} ${className}`}
    >
      <div className={`relative ${currentSize.height} flex items-center justify-center overflow-hidden w-full`}>
        {/* Default Text State */}
        <div
          className={`flex items-center justify-center gap-3 ${currentSize.fontSize} font-bold uppercase tracking-wider whitespace-nowrap leading-none transition-all duration-500 transform group-hover:-translate-y-[180%] ${
            isOrange ? "text-[#FF4925]" : "text-white"
          } group-hover:text-white`}
        >
          <span className="leading-none inline-block">{text}</span>
          {Icon && <Icon className={`${currentSize.iconSize} leading-none flex-shrink-0 inline-block`} />}
        </div>

        {/* Hover Text State (Rolls up from bottom) */}
        <div className={`absolute inset-0 flex items-center justify-center gap-3 text-white ${currentSize.fontSize} font-bold uppercase tracking-wider whitespace-nowrap leading-none transition-all duration-500 transform translate-y-[180%] group-hover:translate-y-0`}>
          <span className="leading-none inline-block">{text}</span>
          {Icon && <Icon className={`${currentSize.iconSize} leading-none flex-shrink-0 inline-block`} />}
        </div>
      </div>
    </button>
  );
};

export default RollingButton;

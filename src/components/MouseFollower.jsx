import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;
    
    const moveFollower = (e) => {
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out"
      });
    };

    window.addEventListener('mousemove', moveFollower);

    const handleHover = () => {
      const targets = document.querySelectorAll('button, a, .cursor-pointer');
      
      targets.forEach(target => {
        target.addEventListener('mouseenter', () => {
          gsap.to(follower, { scale: 4, backgroundColor: 'rgba(255, 73, 37, 0.3)', border: 'none' });
        });
        target.addEventListener('mouseleave', () => {
          gsap.to(follower, { scale: 1, backgroundColor: 'transparent', border: '1px solid #FF4925' });
        });
      });
    };

    handleHover();

    return () => {
      window.removeEventListener('mousemove', moveFollower);
    };
  }, []);

  return (
    <div 
      ref={followerRef}
      className="fixed top-0 left-0 w-5 h-5 border border-[#FF4925] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-colors"
    >
      <div className="w-1 h-1 bg-[#FF4925] rounded-full"></div>
    </div>
  );
};

export default MouseFollower;
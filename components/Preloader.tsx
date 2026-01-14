import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
            onComplete: onComplete
          });
        }
      });

      // Animate progress number
      tl.to({}, {
        duration: 2.5,
        onUpdate: function() {
          setProgress(Math.round(this.progress() * 100));
        },
        ease: "expo.inOut"
      });

      // Animate bar width simultaneously
      gsap.to(barRef.current, {
        width: "100%",
        duration: 2.5,
        ease: "expo.inOut"
      });

      // Text glitch/reveal effect
      tl.to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        delay: 0.2
      });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-black"
    >
      <div className="w-full max-w-md px-8 relative">
        <div className="flex justify-between items-end mb-4 font-display uppercase tracking-widest text-sm text-brand-cyan/80">
          <span ref={textRef}>System Initialization</span>
          <span className="text-2xl font-bold text-brand-red">{progress}%</span>
        </div>
        
        {/* Progress Bar Container */}
        <div className="h-1 w-full bg-brand-dark overflow-hidden relative border border-white/10">
          {/* Active Bar */}
          <div 
            ref={barRef}
            className="h-full bg-gradient-to-r from-brand-red via-brand-yellow to-brand-cyan w-0 absolute top-0 left-0"
            style={{ boxShadow: '0 0 20px rgba(0, 242, 255, 0.5)' }}
          ></div>
        </div>

        <div className="mt-8 text-center opacity-40 font-mono text-xs text-white">
          AADI CAR AC • PREMIUM CLIMATE CONTROL
        </div>
      </div>
    </div>
  );
};

export default Preloader;
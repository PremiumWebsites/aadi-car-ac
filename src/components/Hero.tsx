import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom center", // Extended end point for smoother transition
          scrub: 1, // Added smoothing (1 second lag) to fix choppiness
        }
      });

      // Text scales down and fades out
      tl.to(textRef.current, {
        scale: 0.6,
        y: 150,
        opacity: 0,
        ease: "power2.inOut" // Smoother easing
      }, 0);

      // Background fades to black smoothly instead of vanishing
      tl.to(videoRef.current, {
        opacity: 0,
        scale: 1.1,
        ease: "power1.inOut"
      }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image - Unique Eye-catching Car Interior */}
      <div 
        ref={videoRef}
        className="absolute inset-0 z-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        <div className="absolute inset-0 bg-brand-red/5 mix-blend-overlay"></div>
      </div>

      <div ref={contentRef} className="relative z-10 text-center w-full px-4 will-change-transform">
        <div className="overflow-hidden mb-4">
           <p className="font-mono text-brand-yellow text-xs tracking-[0.5em] uppercase animate-pulse">
             System Status: Optimized
           </p>
        </div>
        <h1 
          ref={textRef}
          className="font-display font-bold text-[12vw] leading-[0.85] text-white tracking-tighter uppercase"
        >
          Precision<br />
          {/* Changed typography: Removed transparent stroke, added solid cyan color with glow for visibility */}
          <span className="text-[#00F2FF] drop-shadow-[0_0_25px_rgba(0,242,255,0.6)]">Cooling</span>
        </h1>
      </div>

      <div className="absolute bottom-10 left-6 md:left-12 flex flex-col gap-2 font-mono text-[10px] text-brand-white/50">
        <span>LAT: 21.097 N</span>
        <span>LNG: 81.032 E</span>
        <span>TEMP: 18°C</span>
      </div>
    </section>
  );
};

export default Hero;
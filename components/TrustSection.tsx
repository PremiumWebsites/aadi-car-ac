import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TrustSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple reveal animation instead of scrub parallax
      gsap.from(textRef.current, {
        x: -50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden bg-brand-red flex items-center justify-center min-h-[60vh]">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
        backgroundSize: '20px 20px' 
      }}></div>

      {/* Static Big Text (Background) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap opacity-10 pointer-events-none select-none w-full overflow-hidden">
        <h2 className="text-[20vw] font-display font-black text-black leading-none uppercase animate-[slide_20s_linear_infinite]">
          Master Technician Aadi Sahu Master Technician Aadi Sahu
        </h2>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div ref={textRef}>
          <div className="inline-block bg-black/20 backdrop-blur-sm border border-black/10 px-6 py-2 rounded-full mb-8">
              <span className="text-white font-mono uppercase tracking-widest text-xs">Verified Expert</span>
          </div>
          <h3 className="font-display text-4xl md:text-6xl font-bold text-white mb-8">
            "We don't just fix ACs. <br />
            <span className="text-brand-yellow">We engineer comfort.</span>"
          </h3>
          <p className="font-sans text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            With years of specialized experience in automotive thermodynamics, Aadi Sahu delivers factory-grade precision for every vehicle that enters the workshop.
          </p>
        </div>
      </div>
      
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default TrustSection;
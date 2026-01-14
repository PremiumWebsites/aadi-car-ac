import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Proprietor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        y: 100,
        scale: 1.1,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-brand-black text-brand-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        <div className="order-2 md:order-1">
          <span className="font-mono text-brand-red text-sm mb-6 block">[03] THE MASTERMIND</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 leading-none uppercase">
            Aadi<br />Sahu
          </h2>
          <p className="font-sans text-xl text-brand-white/70 mb-10 leading-relaxed">
            "Automotive climate control is not just about cold air. It's about thermodynamics, pressure balance, and the longevity of your machine. I treat every car like it's my own."
          </p>
          
          {/* Stats / Credentials - Restyled to not look like buttons */}
          <div className="flex flex-col gap-6">
             <div className="flex items-center gap-4 group">
               <span className="h-px w-12 bg-brand-yellow group-hover:w-20 transition-all duration-300"></span>
               <span className="font-mono text-sm tracking-widest text-brand-yellow uppercase font-bold">
                 Certified Master Technician
               </span>
             </div>
             <div className="flex items-center gap-4 group">
               <span className="h-px w-12 bg-brand-white/30 group-hover:w-20 transition-all duration-300"></span>
               <span className="font-mono text-sm tracking-widest text-brand-white uppercase">
                 15+ Years Experience
               </span>
             </div>
          </div>
        </div>

        <div className="order-1 md:order-2 relative h-[600px] w-full overflow-hidden border-2 border-brand-yellow">
          <div ref={imageRef} className="absolute inset-0 bg-cover bg-center grayscale contrast-125" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530047625168-4b29af8355de?q=80&w=2000')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

      </div>
    </section>
  );
};

export default Proprietor;
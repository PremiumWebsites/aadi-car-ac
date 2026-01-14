import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HorizontalScroll: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = sectionRef.current!.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      gsap.to(sectionRef.current, {
        x: -(scrollWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + scrollWidth,
          invalidateOnRefresh: true,
        }
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  const items = [
    { title: "FACTORY TOOLS", subtitle: "Precision Diagnostics Equipment" },
    { title: "RAPID SERVICE", subtitle: "45 Minute Turnaround" },
    { title: "OEM PARTS", subtitle: "Genuine Components Only" },
    { title: "SATISFACTION", subtitle: "100% Service Guarantee" },
  ];

  return (
    <section ref={triggerRef} className="relative h-screen overflow-hidden bg-brand-white text-brand-black">
      <div className="absolute top-12 left-12 z-10">
        <span className="font-mono text-brand-red text-sm">[02] THE STANDARD</span>
      </div>
      
      <div 
        ref={sectionRef} 
        className="flex h-full items-center pl-12 md:pl-32"
        style={{ width: 'fit-content' }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-[80vw] md:w-[60vw] px-12 border-l border-brand-black/10">
            <span className="font-display text-9xl md:text-[12rem] font-bold text-transparent stroke-text-black opacity-20 block mb-4">
              0{index + 1}
            </span>
            <h3 className="font-display text-5xl md:text-7xl font-bold uppercase mb-6 tracking-tighter">
              {item.title}
            </h3>
            <p className="font-mono text-xl md:text-2xl text-brand-red">
              {item.subtitle}
            </p>
          </div>
        ))}
        <div className="w-[20vw]"></div> {/* Spacer */}
      </div>

      <style>{`
        .stroke-text-black {
          -webkit-text-stroke: 2px #000;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default HorizontalScroll;
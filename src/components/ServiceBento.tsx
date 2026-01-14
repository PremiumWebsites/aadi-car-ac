import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wind, Gauge, Snowflake, Disc } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "LEAK DETECTION",
    description: "NITROGEN PRESSURE TESTING // UV DYE ANALYSIS",
    icon: Wind,
    span: "col-span-1 md:col-span-2",
  },
  {
    id: 2,
    title: "GAS RECHARGE",
    description: "R134a / R1234yf PURITY GRADE A",
    icon: Snowflake,
    span: "col-span-1",
  },
  {
    id: 3,
    title: "COMPRESSOR",
    description: "OEM REPLACEMENT & OVERHAUL",
    icon: Disc,
    span: "col-span-1",
  },
  {
    id: 4,
    title: "DIAGNOSTICS",
    description: "THERMAL IMAGING & SENSOR CALIBRATION",
    icon: Gauge,
    span: "col-span-1 md:col-span-2",
  },
];

const ServiceBento: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(".bento-item", {
        onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 px-4 md:px-12 bg-brand-black" ref={containerRef}>
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-20 border-t border-brand-white/20 pt-8 flex justify-between items-start">
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase">Service<br/>Matrix</h2>
          <span className="font-mono text-brand-red text-sm">[01] CAPABILITIES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bento-item interactive group relative bg-brand-gunmetal ${service.span} h-[400px] md:h-[500px] p-8 md:p-12 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:bg-brand-red opacity-0 translate-y-20`}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <service.icon className="w-12 h-12 text-brand-yellow drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
              </div>
              
              <div className="relative z-10 border-l-2 border-brand-white/20 pl-6 group-hover:border-brand-black transition-colors">
                <span className="font-mono text-xs text-brand-white/60 mb-4 block group-hover:text-brand-black">0{service.id} // SYSTEM</span>
                <h3 className="font-display text-3xl md:text-5xl font-bold leading-none mb-4 group-hover:text-black transition-colors">
                  {service.title}
                </h3>
              </div>

              <div className="relative z-10">
                 <p className="font-sans text-sm md:text-base font-medium text-brand-white/40 group-hover:text-black/80 tracking-wide uppercase">
                  {service.description}
                 </p>
              </div>

              {/* Hover Noise Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none bg-noise"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBento;
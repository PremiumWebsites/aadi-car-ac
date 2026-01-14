import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const TechAnatomy: React.FC = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const points = [
    { id: 1, x: 30, y: 40, label: "Condenser Core", detail: "High-efficiency aluminum alloy heat exchanger." },
    { id: 2, x: 60, y: 55, label: "Compressor Clutch", detail: "Magnetic engagement system for optimal power delivery." },
    { id: 3, x: 45, y: 70, label: "Expansion Valve", detail: "Precise refrigerant flow control for rapid cooling." },
  ];

  return (
    <section className="relative py-32 bg-brand-gunmetal overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-5"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Interactive Image Area */}
        <div className="relative aspect-square md:aspect-video bg-black/40 rounded-xl border border-brand-white/10 overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop" 
            alt="Engine Bay" 
            className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
          />
          
          {points.map((point) => (
            <button
              key={point.id}
              className={`interactive absolute w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${activePoint === point.id ? 'bg-brand-red scale-125' : 'bg-brand-yellow hover:scale-110'}`}
              style={{ top: `${point.y}%`, left: `${point.x}%` }}
              onMouseEnter={() => setActivePoint(point.id)}
              onClick={() => setActivePoint(point.id)}
            >
              <Plus className={`w-4 h-4 ${activePoint === point.id ? 'text-white rotate-45' : 'text-black'}`} />
            </button>
          ))}
        </div>

        {/* Info Panel */}
        <div className="flex flex-col justify-center h-full">
           <span className="font-mono text-brand-yellow text-sm mb-8">[03] ANATOMY</span>
           
           <div className="min-h-[200px]">
             {activePoint ? (
                <div className="animate-fade-in">
                  <h3 className="font-display text-4xl font-bold mb-4 text-brand-white">{points.find(p => p.id === activePoint)?.label}</h3>
                  <p className="font-sans text-xl text-brand-white/60">{points.find(p => p.id === activePoint)?.detail}</p>
                </div>
             ) : (
               <div className="opacity-30">
                 <h3 className="font-display text-4xl font-bold mb-4">SYSTEM SCAN</h3>
                 <p className="font-sans text-xl">Hover over the hotspots to reveal component specifications.</p>
               </div>
             )}
           </div>

           <div className="mt-12 pt-12 border-t border-brand-white/10 grid grid-cols-2 gap-8">
             <div>
               <h4 className="font-mono text-xs text-brand-red mb-2">TEMPERATURE</h4>
               <p className="font-display text-2xl">3.5°C</p>
             </div>
             <div>
               <h4 className="font-mono text-xs text-brand-red mb-2">PRESSURE</h4>
               <p className="font-display text-2xl">250 PSI</p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default TechAnatomy;
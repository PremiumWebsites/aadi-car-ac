import React from 'react';
import { MapPin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-brand-black pt-12 md:pt-32 pb-8 px-6 overflow-hidden">
      <div className="max-w-[1800px] mx-auto relative z-10">
        
        <div className="flex flex-col border-b-2 border-brand-red pb-12 mb-12">
          <h5 className="font-mono text-brand-red mb-4">[04] INITIATE CONTACT</h5>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase leading-tight mb-12">
            Ready to<br />Chill?
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:items-center justify-between">
            {/* Phone Number */}
            <a href="tel:6266472390" className="interactive group">
               <span className="font-mono text-xs text-brand-white/40 mb-2 block group-hover:text-brand-yellow transition-colors">VOICE LINE</span>
               <span className="font-display font-bold text-[8vw] lg:text-[7vw] leading-none text-brand-white group-hover:text-brand-yellow transition-colors tracking-tighter">
                6266472390
               </span>
            </a>

            {/* Map Link */}
            <a 
              href="https://maps.app.goo.gl/wYUv5amHGDCCch3C9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="interactive group relative overflow-hidden rounded-xl bg-brand-gunmetal border border-brand-white/10 p-8 min-w-[300px] lg:min-w-[400px] hover:border-brand-red transition-colors"
            >
               <div className="flex justify-between items-start mb-8">
                  <MapPin className="text-brand-red w-8 h-8" />
                  <span className="font-mono text-xs text-brand-white/40 group-hover:text-brand-white transition-colors">OPEN MAPS &rarr;</span>
               </div>
               <div className="space-y-1">
                 <h3 className="font-display text-2xl font-bold text-white group-hover:text-brand-red transition-colors">LOCATE WORKSHOP</h3>
                 <p className="font-sans text-brand-white/60 text-sm">Old Bus Stand, Tanka Para Road</p>
                 <p className="font-sans text-brand-white/60 text-sm">Rajnandgaon, CG</p>
               </div>
               {/* Hover Effect */}
               <div className="absolute inset-0 bg-brand-red/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-mono text-sm text-brand-white/60 mb-20">
           <div>
             <h6 className="text-white mb-4 font-bold">HQ LOCATION</h6>
             <p>Old Bus Stand</p>
             <p>Tanka Para Road</p>
             <p>Rajnandgaon, CG</p>
           </div>
           <div>
             <h6 className="text-white mb-4 font-bold">HOURS</h6>
             <p>MON - SAT</p>
             <p>08:00 AM - 08:00 PM</p>
           </div>
           <div>
             <h6 className="text-white mb-4 font-bold">SOCIAL</h6>
             <a 
               href="https://www.instagram.com/aadi_car_ac_work_/" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="interactive hover:text-brand-red cursor-pointer block mb-1"
             >
               INSTAGRAM
             </a>
             <a 
               href="https://wa.me/916266472390" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="interactive hover:text-brand-red cursor-pointer block"
             >
               WHATSAPP
             </a>
           </div>
           <div className="md:text-right">
             <p>&copy; {new Date().getFullYear()} AADI CAR AC</p>
             <p>PRECISION COOLING</p>
           </div>
        </div>

        {/* Creator Credit Section */}
        <div className="border-t border-brand-white/10 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300">
           <span className="font-sans text-xs tracking-widest uppercase text-brand-white/40">Created by</span>
           
           <div className="flex items-center gap-3">
              {/* Instagram Link (Icon Only) */}
              <a 
                href="https://www.instagram.com/avgec/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="interactive p-2.5 rounded-full bg-white/5 border border-white/5 hover:border-brand-yellow hover:bg-brand-yellow/10 transition-all duration-300 group"
                aria-label="Creator Instagram"
              >
                <Instagram size={16} className="text-brand-yellow group-hover:scale-110 transition-transform" />
              </a>

              {/* Portfolio Link (Name) */}
              <a 
                href="https://helptool.github.io/Aryaman-Gupta/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="interactive px-5 py-2 rounded-full bg-white/5 border border-white/5 hover:border-brand-white/30 hover:bg-white/10 transition-all duration-300"
              >
                <span className="font-display font-bold text-sm text-white tracking-wide">ARYAMAN V. GUPTA</span>
              </a>
           </div>
        </div>

      </div>
      
      {/* Background large text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-5">
        <h1 className="font-display font-black text-[20vw] leading-none text-white whitespace-nowrap">AADI AC</h1>
      </div>
    </footer>
  );
};

export default Footer;
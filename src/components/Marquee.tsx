import React from 'react';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left', speed = 30, className = '' }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap bg-brand-black ${className}`}>
      <div 
        className="inline-block animate-marquee" 
        style={{ 
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
          animationDuration: `${speed}s` 
        }}
      >
        {[...Array(8)].map((_, i) => (
           <span key={i} className="font-display font-bold text-4xl md:text-6xl text-brand-white/20 mx-8 uppercase">
             {text}
           </span>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
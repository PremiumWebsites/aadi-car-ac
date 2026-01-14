import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Navbar: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade out logo as user scrolls down the hero section
      gsap.to(logoRef.current, {
        opacity: 0,
        y: -20,
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "500px top", // Fades out within the first 500px of scroll
          scrub: true,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 mix-blend-difference pointer-events-none">
      <div className="flex justify-between items-center max-w-[1920px] mx-auto">
        <div ref={logoRef} className="flex flex-col pointer-events-auto">
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
            AADI CAR AC<span className="text-brand-red">.</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
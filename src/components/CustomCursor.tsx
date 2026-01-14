import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;

    if (!cursor || !ring) return;

    // Initial position off-screen
    gsap.set([cursor, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, opacity: 1 });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.5, opacity: 1 });
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .interactive')) {
        gsap.to(ring, { scale: 3, borderColor: '#E11D48', duration: 0.3 });
        gsap.to(cursor, { backgroundColor: '#E11D48', duration: 0.3 });
      } else if (target.closest('p, h1, h2, h3, h4, h5, h6')) {
        gsap.to(ring, { scale: 1.5, borderColor: '#FACC15', mixBlendMode: 'difference', duration: 0.3 });
        gsap.to(cursor, { backgroundColor: '#FACC15', duration: 0.3 });
      } else {
        gsap.to(ring, { scale: 1, borderColor: '#FFFFFF', mixBlendMode: 'normal', duration: 0.3 });
        gsap.to(cursor, { backgroundColor: '#FFFFFF', duration: 0.3 });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-brand-white rounded-full pointer-events-none z-[9999]"
      />
      <div 
        ref={ringRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-brand-white rounded-full pointer-events-none z-[9998]"
      />
    </>
  );
};

export default CustomCursor;
import React, { useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceBento from './components/ServiceBento';
import HorizontalScroll from './components/HorizontalScroll';
import Proprietor from './components/Proprietor';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  // Global scroll trigger refresh on mount
  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="relative bg-brand-black text-brand-white min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Marquee direction="left" text="PRECISION • COOLING • DIAGNOSTICS • PERFORMANCE •" />
        <ServiceBento />
        <HorizontalScroll />
        <Proprietor />
        <Marquee direction="right" text="MAHINDRA • MARUTI SUZUKI • TATA • TOYOTA • VOLKSWAGEN • FORD • BMW • AUDI •" speed={25} className="py-12 border-y border-brand-subtle" />
        <Footer />
      </main>
    </div>
  );
};

export default App;
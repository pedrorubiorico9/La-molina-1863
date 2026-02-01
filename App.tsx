
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import OliveCulture from './components/OliveCulture';
import FamilyHeritage from './components/FamilyHeritage';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Elementos decorativos de fondo */}
      <div className="fixed top-[-10%] right-[-5%] w-[40vw] h-[40vw] liquid-blob opacity-10 pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] liquid-blob opacity-5 pointer-events-none z-0"></div>

      <Navbar scrolled={scrolled} />
      
      <main className="relative z-10">
        <section id="inicio">
          <Hero />
        </section>

        <section id="productos" className="py-20">
          <ProductSection />
        </section>

        <section id="olivar" className="py-20 bg-[#f4f1ea]">
          <OliveCulture />
        </section>

        <section id="historia" className="py-20">
          <FamilyHeritage />
        </section>

        <section id="opiniones" className="py-20 bg-white">
          <Testimonials />
        </section>

        <section id="blog" className="py-20 bg-[#f4f1ea]">
          <BlogSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Imagen de fondo: Paisaje de olivos centenarios (Definitiva) */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d361e] via-transparent to-transparent opacity-90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
             <div className="w-12 h-[2px] bg-[#d4af37]"></div>
             <h4 className="text-[#fefae0] font-bold tracking-[0.4em] uppercase text-xs">
               Archidona • Legado desde 1863
             </h4>
          </div>
          <h1 className="text-6xl md:text-9xl font-serif mb-8 leading-[0.85] drop-shadow-2xl">
            El Alma de <br /> <span className="italic text-[#d4af37]">Nuestra Tierra</span>
          </h1>
          <p className="text-xl md:text-3xl mb-12 text-gray-100 font-light max-w-2xl leading-relaxed drop-shadow-md">
            Aceite de Oliva Virgen Extra de autor. Una joya líquida nacida del respeto absoluto al olivar centenario de Archidona.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-[#606c38] hover:bg-[#d4af37] hover:text-[#2d361e] text-white px-10 py-5 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-2xl">
              Nuestra Cosecha
            </button>
            <button className="bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white px-10 py-5 rounded-full text-lg font-bold transition-all">
              Visitar el Olivar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

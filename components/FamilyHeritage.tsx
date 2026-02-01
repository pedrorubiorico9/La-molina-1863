
import React from 'react';

const FamilyHeritage: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="bg-[#2d361e] rounded-[4rem] p-10 md:p-20 text-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative shadow-3xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#606c38]/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        
        <div className="lg:w-1/2 relative z-10">
          <span className="text-[#606c38] font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Nuestras Raíces</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-8 italic">El legado de <br />nuestra tierra</h2>
          <p className="text-gray-300 text-xl mb-10 leading-relaxed font-light">
            En Archidona, el apellido Molina es sinónimo de respeto por el olivo. Esta es nuestra historia: la de una familia que, desde 1863, ha sabido entender que la excelencia no se negocia, se hereda de generación en generación.
          </p>
          
          <div className="grid grid-cols-2 gap-10 border-t border-white/10 pt-10">
            <div>
              <p className="text-5xl font-serif text-[#606c38]">160</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Años de Tradición</p>
            </div>
            <div>
              <p className="text-5xl font-serif text-[#606c38]">5ª</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Generación Familiar</p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative group">
          <div className="absolute -inset-6 bg-[#606c38]/20 rounded-3xl scale-95 group-hover:scale-100 transition-all duration-700 blur-2xl"></div>
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-[#fefae0]/10">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695ce6958?q=80&w=2070&auto=format&fit=crop" 
              alt="Familia Molina - Nuestras Raíces" 
              className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-105"
              style={{ minHeight: '500px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d361e] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-10 left-8 right-8 text-center md:text-left">
               <p className="font-serif italic text-2xl text-[#fefae0] drop-shadow-md leading-tight">
                "Honramos el pasado para garantizar el sabor del futuro."
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyHeritage;
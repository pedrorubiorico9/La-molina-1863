
import React from 'react';

const OliveCulture: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative">
          <div className="absolute -top-16 -left-16 w-64 h-64 liquid-blob bg-[#606c38]/10 pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-2 gap-6">
            <div className="space-y-6">
              {/* Cesta de aceitunas frescas verdes */}
              <img 
                src="https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?q=80&w=1887&auto=format&fit=crop" 
                className="rounded-[2rem] shadow-2xl w-full aspect-[3/4] object-cover" 
                alt="Aceitunas recién cosechadas" 
              />
              <div className="bg-[#2d361e] p-8 rounded-[2rem] text-white text-center shadow-xl">
                <p className="text-4xl font-serif mb-1">Pura</p>
                <p className="text-xs uppercase tracking-widest text-[#606c38] font-bold">Esencia de la Oliva</p>
              </div>
            </div>
            <div className="pt-12 space-y-6">
              <div className="bg-[#fefae0] p-8 rounded-[2rem] border border-[#606c38]/20 flex items-center justify-center shadow-inner">
                 <div className="text-[#2d361e] font-serif italic text-xl">Archidona</div>
              </div>
              {/* Paisaje de olivos mediterráneos */}
              <img 
                src="https://images.unsplash.com/photo-1510629954389-c1e0da47d414?q=80&w=1887&auto=format&fit=crop" 
                className="rounded-[2rem] shadow-2xl w-full aspect-[4/5] object-cover" 
                alt="El olivar al atardecer" 
              />
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight text-[#2d361e]">
            Sabiduría en cada <span className="italic text-[#606c38]">Oliva</span>
          </h2>
          <p className="text-gray-700 text-xl mb-8 leading-relaxed font-light">
            En La Molina 1863, no solo cultivamos árboles; custodiamos una tradición. Entendemos que el aceite no es un producto industrial, sino el zumo natural de un fruto que debe ser mimado desde su nacimiento.
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Nuestra especialidad es la variedad <strong>Gordalilla</strong>. Una aceituna pequeña, robusta y con un carácter aromático único que solo las tierras de Archidona pueden otorgar.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white shadow-sm border-t-4 border-[#606c38]">
                <h4 className="font-bold text-[#2d361e] text-lg mb-2">Respeto al Ciclo</h4>
                <p className="text-gray-600 text-sm">Escuchamos al campo para recolectar el fruto en su momento exacto de madurez.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-sm border-t-4 border-[#d4af37]">
                <h4 className="font-bold text-[#2d361e] text-lg mb-2">Nuestra Gordalilla</h4>
                <p className="text-gray-600 text-sm">Nuestra variedad estrella: equilibrada, intensa y profundamente malagueña.</p>
            </div>
          </div>

          <div className="mt-12 p-10 rounded-3xl bg-[#2d361e] text-white flex items-center gap-8 shadow-2xl">
             <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#606c38] flex items-center justify-center font-serif italic text-4xl shadow-lg">M</div>
             <div>
                <p className="text-gray-200 italic text-lg leading-relaxed">"El aceite es la voz del olivar. Nosotros solo nos encargamos de que se escuche con claridad."</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OliveCulture;

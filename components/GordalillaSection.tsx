import React from 'react';

const GordalillaSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative">
          <div className="absolute -top-16 -left-16 w-64 h-64 liquid-blob bg-[#606c38]/10 pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-2 gap-6">
            <div className="space-y-6">
              {/* Imagen estilo Foto 1: Montón de aceitunas frescas */}
              <img 
                src="https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?q=80&w=1887&auto=format&fit=crop" 
                className="rounded-[2rem] shadow-2xl w-full aspect-[3/4] object-cover hover:scale-[1.02] transition-transform" 
                alt="Aceitunas Gordalilla recién cosechadas" 
              />
              <div className="bg-[#2d361e] p-8 rounded-[2rem] text-white text-center">
                <p className="text-4xl font-serif mb-1">Cosecha</p>
                <p className="text-xs uppercase tracking-widest text-[#606c38] font-bold">Octubre Temprana</p>
              </div>
            </div>
            <div className="pt-12 space-y-6">
              <div className="bg-[#fefae0] p-8 rounded-[2rem] border border-[#606c38]/20 flex items-center justify-center">
                 <img src="https://images.unsplash.com/photo-1541533260371-b8f3693f9c6a?q=80&w=2030&auto=format&fit=crop" className="w-16 h-16 rounded-full object-cover shadow-md" alt="Detalle olivar" />
              </div>
              {/* Imagen estilo Foto 5: Detalle en la rama */}
              <img 
                src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1887&auto=format&fit=crop" 
                className="rounded-[2rem] shadow-2xl w-full aspect-[4/5] object-cover hover:scale-[1.02] transition-transform" 
                alt="Maduración en el olivo" 
              />
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight text-[#2d361e]">
            La Aceituna <span className="italic text-[#606c38]">Gordalilla</span>
          </h2>
          <p className="text-gray-700 text-xl mb-8 leading-relaxed">
            Un fruto pequeño pero de una potencia aromática sin igual. Cultivada en las laderas de <strong>Archidona</strong>, la Gordalilla nos regala un aceite equilibrado, con un picor elegante y un amargor suave que enamora al primer contacto.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white shadow-sm border-l-4 border-[#606c38]">
                <h4 className="font-bold text-[#2d361e] text-lg mb-2">Color Verde Oro</h4>
                <p className="text-gray-600">Un reflejo de su frescura y su alto contenido en clorofila natural.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white shadow-sm border-l-4 border-[#d4af37]">
                <h4 className="font-bold text-[#2d361e] text-lg mb-2">Prensado en Frío</h4>
                <p className="text-gray-600">Extracción mecánica inmediata para evitar cualquier oxidación.</p>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-[#2d361e] text-white flex items-center gap-6 shadow-xl">
             <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#606c38] flex items-center justify-center font-serif italic text-3xl">100%</div>
             <div>
                <p className="text-gray-300 italic">"Zumo natural de aceituna. Sin aditivos, sin mezclas. Solo la verdad de nuestra tierra malagueña."</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GordalillaSection;
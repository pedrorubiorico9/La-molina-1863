
import React from 'react';

const products = [
  {
    id: 'p1',
    name: 'Formato Gourmet',
    size: '500 ml',
    price: 18.50,
    description: 'La máxima expresión de nuestra aceituna Gordalilla. Un virgen extra de autor con notas de hierba recién cortada y tomate.',
    image: 'https://images.unsplash.com/photo-1541533260371-b8f3693f9c6a?q=80&w=2030&auto=format&fit=crop' 
  },
  {
    id: 'p2',
    name: 'Garrafa de Autor',
    size: '2 Litros',
    price: 45.00,
    description: 'Nuestra cosecha familiar seleccionada, ideal para los que buscan la excelencia en su consumo diario.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbad8a0f?q=80&w=1952&auto=format&fit=crop'
  }
];

const ProductSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-serif mb-4 text-[#2d361e]">Nuestra Cosecha</h2>
        <div className="w-20 h-1 bg-[#606c38] mx-auto mb-6"></div>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg italic leading-relaxed">
          "Zumo natural de aceituna extraído en frío. Sin aditivos, sin prisas, solo la verdad de Archidona."
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {products.map((p) => (
          <div key={p.id} className="group glass-card rounded-[3rem] overflow-hidden flex flex-col items-center p-10 transition-all hover:shadow-3xl hover:-translate-y-2 border border-[#606c38]/10">
            <div className="relative mb-10 w-full aspect-square overflow-hidden rounded-[2rem] shadow-inner bg-white">
              <img 
                src={p.image} 
                alt={p.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 right-6 bg-[#2d361e] text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                {p.size}
              </div>
            </div>
            <h3 className="text-3xl font-serif font-bold mb-3 text-[#2d361e]">{p.name}</h3>
            <p className="text-gray-500 text-center mb-8 text-lg leading-relaxed">{p.description}</p>
            <div className="flex items-center justify-between w-full mt-auto pt-6 border-t border-gray-100">
              <div className="flex flex-col">
                 <span className="text-xs text-gray-400 uppercase font-bold tracking-widest">PVP</span>
                 <span className="text-4xl font-black text-[#2d361e]">{p.price.toFixed(2)}€</span>
              </div>
              <button className="bg-[#2d361e] text-white px-10 py-4 rounded-full font-bold hover:bg-[#606c38] transition-all transform shadow-lg">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;

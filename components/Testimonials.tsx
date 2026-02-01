
import React from 'react';

const reviews = [
  {
    id: 1,
    author: "Carmen R.",
    rating: 5,
    comment: "El sabor de la aceituna gordalilla en este aceite es espectacular. Se nota la recolección temprana por su frescor. ¡Un descubrimiento!",
    date: "12 Oct, 2023"
  },
  {
    id: 2,
    author: "Jordi M.",
    rating: 5,
    comment: "He probado muchos aceites premium pero el de La Molina 1863 tiene algo especial. El aroma a hierba fresca inunda la cocina.",
    date: "05 Nov, 2023"
  },
  {
    id: 3,
    author: "Elena S.",
    rating: 5,
    comment: "Ideal para el desayuno. Es un aceite que respeta el producto y aporta una elegancia única a los platos. Envío rapidísimo.",
    date: "20 Nov, 2023"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Lo que dicen nuestros clientes</h2>
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r) => (
          <div key={r.id} className="p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="font-bold text-lg">{r.author}</span>
              <span className="text-gray-400 text-sm">{r.date}</span>
            </div>
            <p className="text-gray-600 italic leading-relaxed">"{r.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

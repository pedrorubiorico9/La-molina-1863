
import React from 'react';

const posts = [
  {
    id: 1,
    title: "El milagro de la Oliva en Octubre",
    excerpt: "Descubre por qué este mes es crítico para la calidad final de nuestro aceite de oliva virgen extra de recolección temprana.",
    category: "Olivar",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop", // Detalle macro de oliva
    date: "12 Oct, 2024"
  },
  {
    id: 2,
    title: "Gordalilla: La joya de Archidona",
    excerpt: "Un análisis sensorial de nuestra variedad preferida y cómo maridarla con platos de la zona.",
    category: "Gastronomía",
    image: "https://images.unsplash.com/photo-1510629954389-c1e0da47d414?q=80&w=1887&auto=format&fit=crop",
    date: "05 Nov, 2024"
  },
  {
    id: 3,
    title: "Tradición y Paisaje Malagueño",
    excerpt: "Un recorrido por la historia de nuestros olivos centenarios en el corazón de Málaga.",
    category: "Historia",
    image: "https://images.unsplash.com/photo-1505933332328-5c9167e914de?q=80&w=2070&auto=format&fit=crop",
    date: "18 Dic, 2024"
  }
];

const BlogSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#2d361e]">Cuaderno del Olivar</h2>
          <p className="text-gray-600 text-lg">Historias sobre el fruto, la tierra y nuestra pasión.</p>
        </div>
        <button className="px-10 py-4 bg-[#2d361e] text-white rounded-full font-bold hover:bg-[#606c38] transition-all shadow-lg">
          Explorar el Blog
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded-[2.5rem] mb-8 aspect-[3/4] relative shadow-lg">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#2d361e]/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="px-4">
              <div className="flex items-center gap-3 mb-4">
                 <span className="w-10 h-[1px] bg-[#606c38]"></span>
                 <span className="text-xs font-black uppercase tracking-widest text-[#606c38]">{post.category}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-[#2d361e] group-hover:text-[#606c38] transition-colors leading-tight">{post.title}</h3>
              <p className="text-gray-500 mb-6 line-clamp-2 leading-relaxed font-light">{post.excerpt}</p>
              <div className="text-xs font-bold text-gray-400 italic tracking-widest">{post.date}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;

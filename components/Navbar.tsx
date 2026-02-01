import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className={`text-2xl font-serif font-bold tracking-tighter transition-colors ${scrolled ? 'text-[#2d361e]' : 'text-white'}`}>
            LA MOLINA <span className="text-[#606c38]">1863</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium">
          {['Inicio', 'Productos', 'El Olivar', 'Historia', 'Blog'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className={`transition-colors hover:text-[#d4af37] ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
        </div>

        <button className={`px-6 py-2 rounded-full font-semibold transition-all shadow-lg ${
          scrolled 
            ? 'bg-[#2d361e] text-white hover:bg-[#3d4a29]' 
            : 'bg-white text-[#2d361e] hover:bg-[#fefae0]'
        }`}>
          Comprar Online
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
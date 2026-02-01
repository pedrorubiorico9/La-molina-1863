import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d361e] text-white py-24 relative overflow-hidden">
      {/* Decorative texture or shape */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[#606c38]/10 rounded-full blur-[120px] -mb-64 -mr-64 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-serif font-bold mb-8">LA MOLINA <span className="text-[#606c38]">1863</span></h2>
            <p className="text-gray-400 max-w-sm mb-10 text-lg leading-relaxed">
              Exportando la esencia de Archidona a los paladares más exigentes. Aceite de Oliva Virgen Extra de autor, limitado y honesto.
            </p>
            <div className="flex gap-6">
              {['IG', 'FB', 'TW'].map(social => (
                <div key={social} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#606c38] hover:border-[#606c38] transition-all cursor-pointer font-bold text-sm">
                  {social}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Navegación</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#productos" className="hover:text-[#606c38] transition-colors">Catálogo Boutique</a></li>
              <li><a href="#gordalilla" className="hover:text-[#606c38] transition-colors">La Variedad</a></li>
              <li><a href="#historia" className="hover:text-[#606c38] transition-colors">Cinco Generaciones</a></li>
              <li><a href="#blog" className="hover:text-[#606c38] transition-colors">Historias del Campo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Cita Previa</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Archidona, Málaga, España</li>
              <li className="text-white font-bold">+34 952 00 00 00</li>
              <li>hola@lamolina1863.com</li>
              <li className="pt-4">
                 <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                    <p className="text-xs text-[#606c38] uppercase font-bold mb-2">Suscripción Premium</p>
                    <div className="flex gap-2">
                       <input type="email" placeholder="Email" className="bg-transparent border-b border-white/20 text-xs py-1 focus:outline-none focus:border-[#606c38] w-full" />
                       <button className="text-[#606c38]">→</button>
                    </div>
                 </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest font-bold">
          <p>© 2024 La Molina 1863. Archidona, España.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Gastos de Envío</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
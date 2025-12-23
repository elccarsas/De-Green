import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ChefAssistant from './components/ChefAssistant';
import { PRODUCTS } from './constants';
import { Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react';

const App: React.FC = () => {
  const [chefPrompt, setChefPrompt] = useState<string>('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAskChef = (productName: string) => {
    setChefPrompt(`Dame una receta rápida o idea para servir: ${productName}`);
    scrollToSection('ai-chef');
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-brand selection:text-black font-sans">
      <Navbar onNavigate={scrollToSection} />

      <Hero onExplore={() => scrollToSection('products')} />

      {/* Products Section */}
      <section id="products" className="py-24 px-4 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-brand uppercase tracking-[0.3em] text-sm font-bold">Nuestra Colección</span>
            <h2 className="font-script text-5xl md:text-7xl mt-4 mb-6">Sabores Intensos</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Cada frasco contiene una selección meticulosa de ingredientes frescos, preparados con técnicas tradicionales para llevar el verdadero sabor de lo natural a tu mesa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAskChef={handleAskChef}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Chef Section - Increased margin to mt-48 for better separation */}
      <section id="ai-chef" className="py-24 mt-48 px-4 bg-neutral-900 relative overflow-hidden">
        {/* Abstract shapes background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-brand/5 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-brand/5 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-brand uppercase tracking-[0.3em] text-sm font-bold">Innovación</span>
              <h2 className="font-script text-5xl md:text-6xl mt-4 mb-8">Tu Chef Personal</h2>
              <p className="text-neutral-300 mb-6 text-lg">
                ¿No sabes cómo combinar nuestro Antipasto de Atún? ¿Buscas una receta vegana con nuestra Pesto?
              </p>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Hemos integrado una inteligencia artificial experta en nuestros productos. Pregúntale cualquier duda culinaria y descubre nuevas formas de disfrutar De Green.
              </p>
              <div className="flex gap-4 flex-wrap">
                 {['Receta de pasta con pesto', 'Snack con pimentones', 'Maridaje para berenjenas'].map((tag, i) => (
                   <button 
                    key={i}
                    onClick={() => setChefPrompt(tag)}
                    className="px-4 py-2 border border-neutral-700 rounded-full text-sm text-neutral-400 hover:border-green-brand hover:text-green-brand transition-colors"
                   >
                     {tag}
                   </button>
                 ))}
              </div>
            </div>
            
            <div>
              <ChefAssistant initialPrompt={chefPrompt} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-black py-20 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="flex flex-col items-start">
             <div className="flex flex-col mb-6">
                <span className="font-script text-4xl text-white">De Green</span>
                <span className="font-sans text-[10px] tracking-[0.2em] text-neutral-500 uppercase">Cocina Artesanal</span>
              </div>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                Conservas gourmet hechas con amor y dedicación. Llevamos lo mejor de la tierra a tu cocina.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-green-brand hover:text-black transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white hover:bg-green-brand hover:text-black transition-all">
                  <Facebook size={18} />
                </a>
              </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8 text-sm">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-neutral-400 group cursor-pointer">
                <div className="p-2 bg-neutral-900 rounded group-hover:text-green-brand transition-colors"><Phone size={16} /></div>
                <span>+57 300 5953616</span>
              </div>
              <div className="flex items-center gap-4 text-neutral-400 group cursor-pointer">
                <div className="p-2 bg-neutral-900 rounded group-hover:text-green-brand transition-colors"><Mail size={16} /></div>
                <span>melissajimenezvivas@hotmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-neutral-400 group cursor-pointer">
                <div className="p-2 bg-neutral-900 rounded group-hover:text-green-brand transition-colors"><MapPin size={16} /></div>
                <span>Cali, Colombia</span>
              </div>
            </div>
          </div>

          {/* Newsletter (Visual only) */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8 text-sm">Novedades</h4>
            <p className="text-neutral-500 text-sm mb-4">Suscríbete para recibir recetas exclusivas y descuentos.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="bg-neutral-900 border-none text-white px-4 py-3 w-full focus:ring-1 focus:ring-green-brand outline-none"
              />
              <button className="bg-green-brand text-black px-6 font-bold uppercase text-xs hover:bg-white transition-colors">
                Ir
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-neutral-900 text-center text-neutral-600 text-xs uppercase tracking-wider">
          &copy; {new Date().getFullYear()} De Green Cocina Artesanal. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default App;
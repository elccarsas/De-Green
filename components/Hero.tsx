import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60&fm=webp"
          alt="Artisanal Vegetables"
          fetchPriority="high"
          className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-4 inline-block">
          <span className="px-4 py-1 border border-green-brand/50 rounded-full text-green-brand text-xs uppercase tracking-[0.3em] backdrop-blur-sm">
            100% Natural
          </span>
        </div>
        
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-white mb-6 drop-shadow-2xl">
          De Green
        </h1>
        
        <h2 className="font-sans font-bold text-2xl md:text-4xl text-neutral-200 mb-8 tracking-wide">
          <span className="text-green-brand">Es hora</span> de lo natural
        </h2>
        
        <p className="font-sans text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
           Descubre la intensidad de la cocina artesanal. Sabores auténticos, ingredientes seleccionados y pasión en cada frasco.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onExplore}
            className="group relative px-8 py-3 bg-green-brand text-black font-bold rounded-none overflow-hidden transition-all hover:scale-105"
          >
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 mix-blend-screen" />
            <span className="relative uppercase tracking-widest">Explorar Sabores</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/50 w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
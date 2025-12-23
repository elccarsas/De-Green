import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAskChef: (productName: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAskChef }) => {
  
  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const phoneNumber = "573005953616";
    const message = encodeURIComponent(`Hola De Green, estoy interesado en comprar: ${product.name}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="group relative bg-neutral-900 overflow-hidden h-96 cursor-pointer border border-neutral-800 hover:border-green-brand transition-colors duration-500">
      {/* Background Image - FULL COLOR, NO GRAYSCALE */}
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Content Overlay - Adjusted gradient for text readability over colorful images */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-black/70 to-transparent opacity-100 transition-all duration-300">
        
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold text-green-brand uppercase tracking-widest block drop-shadow-md">
              {product.category}
            </span>
            <span className="text-lg font-bold text-white drop-shadow-md">
              ${product.price.toLocaleString('es-CO')}
            </span>
          </div>
          <h3 className="font-script text-3xl text-white mb-2 leading-tight drop-shadow-lg">
            {product.name}
          </h3>
          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
            <p className="text-neutral-200 text-sm mb-4 font-sans leading-relaxed drop-shadow-md">
              {product.description}
            </p>
            <div className="flex gap-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onAskChef(product.name);
                }}
                className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/30 hover:border-green-brand text-white hover:text-green-brand px-4 py-2 text-xs uppercase tracking-wider transition-colors"
              >
                <span>Chef Tips</span>
              </button>
              <button 
                onClick={handleBuyClick}
                className="bg-green-brand text-black px-4 py-2 text-xs uppercase font-bold hover:bg-white transition-colors"
                aria-label="Comprar en WhatsApp"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
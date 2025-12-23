import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "573005953616";
    const message = encodeURIComponent("Hola De Green, quiero hacer un pedido.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const navLinks = [
    { name: 'Inicio', id: 'home' },
    { name: 'Conservas', id: 'products' },
    { name: 'Chef Virtual', id: 'ai-chef' },
    { name: 'Contacto', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-neutral-800 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo Area */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <Leaf className="w-8 h-8 text-green-brand transform group-hover:rotate-12 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="font-script text-3xl text-white leading-none">De Green</span>
            <span className="font-sans text-[10px] tracking-[0.2em] text-neutral-400 uppercase">Cocina Artesanal</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="font-sans text-sm font-semibold text-neutral-300 hover:text-green-brand transition-colors uppercase tracking-wider"
            >
              {link.name}
            </button>
          ))}
          <button 
            className="bg-green-brand text-black font-bold px-6 py-2 rounded-full hover:bg-white transition-colors duration-300 uppercase text-xs tracking-widest"
            onClick={handleWhatsAppClick}
          >
            Comprar
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-neutral-800 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsMobileMenuOpen(false);
              }}
              className="text-left font-sans font-semibold text-neutral-300 hover:text-green-brand py-2"
            >
              {link.name}
            </button>
          ))}
          <button 
            className="bg-green-brand text-black font-bold py-3 rounded-full hover:bg-white transition-colors uppercase text-xs tracking-widest w-full"
            onClick={handleWhatsAppClick}
          >
            Comprar en WhatsApp
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
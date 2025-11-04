import imgImmaginePng6SenzaSfondo1 from "figma:asset/782ca1a0148f8675d5398f877fc59f0a13556baa.png";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onNavigateToComingSoon: () => void;
}

export default function Navbar({ onNavigateToComingSoon }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
              <img 
                src={imgImmaginePng6SenzaSfondo1} 
                alt="Somnium Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[20px] sm:text-[28px] text-black tracking-[-0.84px]">
              Somnium
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-black hover:text-[#0470f9] transition-colors">
              Funzionalità
            </a>
            <a href="#how-it-works" className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-black hover:text-[#0470f9] transition-colors">
              Come Funziona
            </a>
            <a href="#about" className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-black hover:text-[#0470f9] transition-colors">
              Chi Siamo
            </a>
          </div>

          {/* Desktop CTA Button */}
          <button 
            onClick={onNavigateToComingSoon}
            className="hidden md:block bg-[#0470f9] hover:bg-[#0360d9] text-white px-8 py-3 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            Inizia Ora
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black hover:text-[#0470f9] transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-200 pt-4">
            <a 
              href="#features" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-black hover:text-[#0470f9] transition-colors py-2"
            >
              Funzionalità
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-black hover:text-[#0470f9] transition-colors py-2"
            >
              Come Funziona
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-black hover:text-[#0470f9] transition-colors py-2"
            >
              Chi Siamo
            </a>
            <button 
              onClick={() => {
                onNavigateToComingSoon();
                setIsMobileMenuOpen(false);
              }}
              className="bg-[#0470f9] hover:bg-[#0360d9] text-white px-8 py-3 rounded-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold transition-all shadow-lg w-full"
            >
              Inizia Ora
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

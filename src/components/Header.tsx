import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Exhibitions', href: '#exhibitions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-gray-100' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo - exact replica of structural geometry */}
        <a href="#home" className="flex items-center gap-1.5 focus:outline-none group">
          <div className="flex items-center gap-0.5">
            <span className="w-4 h-8 bg-black rounded-full block transition-transform group-hover:scale-y-110"></span>
            <span className="w-8 h-8 bg-black rounded-full block transition-transform group-hover:scale-95"></span>
            <span className="w-8 h-8 bg-black rounded-l-full block transition-transform group-hover:translate-x-1"></span>
          </div>
          <span className="ml-1 text-xs font-mono tracking-widest text-[#111111] uppercase select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            D. POETRY
          </span>
        </a>

        {/* Center menu - sleek divider style like "/ About" */}
        <nav className="hidden md:flex items-center justify-center font-sans">
          <div className="flex items-center bg-gray-50/70 border border-gray-100/95 py-1.5 px-6 rounded-full shadow-xs">
            {menuItems.map((item, index) => (
              <div key={item.name} className="flex items-center">
                {index > 0 && (
                  <span className="text-gray-300 text-[10px] uppercase mx-3 font-light select-none">/</span>
                )}
                <a
                  href={item.href}
                  className="text-xs tracking-wider text-gray-600 hover:text-black font-semibold transition-colors duration-200"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </nav>

        {/* Right tag with image - "Sala Canal, 22 Nov 23" */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#exhibitions"
            className="flex items-center gap-2 bg-[#F3AF24]/10 hover:bg-[#F3AF24]/20 border border-[#F3AF24]/20 px-4 py-2 rounded-full transition-all duration-300 group"
          >
            <span className="text-[#d88f11] text-[11px] font-semibold tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F3AF24] animate-pulse"></span>
              Sala Canal, 22 Nov 23
            </span>
            <div className="w-6 h-6 rounded-full overflow-hidden border border-white">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                alt="Artist Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#d88f11] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-4">
          <div className="flex items-center gap-1.5 bg-[#F3AF24]/10 px-3 py-1 rounded-full border border-[#F3AF24]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F3AF24] animate-pulse"></span>
            <span className="text-gray-700 text-[10px] font-semibold">Sala Canal</span>
          </div>
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full text-black hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg px-6 py-6 flex flex-col gap-4"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-gray-800 hover:text-black hover:bg-gray-50 py-2.5 px-4 rounded-xl transition-all"
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-gray-100 pt-4 mt-2 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-mono">NEXT EXHIBITION</span>
              <a
                href="#exhibitions"
                onClick={() => setIsOpen(false)}
                className="text-xs bg-[#F3AF24] hover:bg-amber-500 text-black px-4 py-2 rounded-full font-bold transition-all"
              >
                Sala Canal • Madrid
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { ArrowUp, Heart, Film } from 'lucide-react';

export default function Footer() {
  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0b0b] text-white/50 border-t border-white/5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/5">
          
          {/* Left section - Logo representation */}
          <div className="md:col-span-4 flex items-center gap-1.5">
            <span className="w-2.5 h-6 bg-white/80 rounded-full block"></span>
            <span className="w-5 h-5 bg-white/80 rounded-full block"></span>
            <span className="w-5 h-5 bg-white/80 rounded-l-full block"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-white/90 ml-2">
              D. POETRY
            </span>
          </div>

          {/* Center Links */}
          <div className="md:col-span-5 flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <span className="text-white/10 select-none">/</span>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <span className="text-white/10 select-none">/</span>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <span className="text-white/10 select-none">/</span>
            <a href="#exhibitions" className="hover:text-white transition-colors">Exhibitions</a>
            <span className="text-white/10 select-none">/</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Right section - Scroll to top */}
          <div className="md:col-span-3 flex justify-end">
            <button
              onClick={scrolltoTop}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-amber-400 hover:text-amber-400 text-white/70 flex items-center justify-center transition-all bg-white/5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] font-mono tracking-widest uppercase">
          <p>© 2026 Dmitry Poetry. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5 mt-2 sm:mt-0 text-gray-500">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>&amp; React for GitHub Pages</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

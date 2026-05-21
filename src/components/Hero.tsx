import { Globe, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const socialLinks = [
    { name: 'yt', url: '#' },
    { name: 'ig', url: '#' },
    { name: 'fb', url: '#' },
    { name: 'x', url: '#' },
  ];

  return (
    <section id="home" className="pt-32 pb-20 md:pb-32 px-6 md:px-12 bg-[#F7F7F7] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column - Titles & Stats */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          {/* Main Massive Headlines in Syne */}
          <div className="relative mb-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-7xl sm:text-8xl md:text-9xl font-display font-extrabold text-[#111111] leading-[0.85] tracking-tighter"
            >
              visual
            </motion.h1>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="text-7xl sm:text-8xl md:text-9xl font-display font-extrabold text-[#111111] leading-[0.85] tracking-tighter mt-1"
            >
              poetry
            </motion.h1>
          </div>

          {/* Description & Socials Block */}
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 mt-4 mb-10 max-w-xl">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:w-1/2"
            >
              <p className="text-xs text-gray-500 font-sans tracking-wide leading-relaxed font-medium">
                Welcome to a visual journey that transcends time and space. Discover the artistry of moments captured in motion.
              </p>
            </motion.div>
            
            {/* Round Outline Social Links */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-2 items-center md:pt-1"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full border border-gray-300 hover:border-black flex items-center justify-center text-xs font-mono text-gray-600 hover:text-black transition-all duration-300"
                >
                  {social.name}
                </a>
              ))}
            </motion.div>
          </div>

          <hr className="border-gray-200/80 mb-8 max-w-xl" />

          {/* Core Stats Section */}
          <div className="grid grid-cols-2 gap-8 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-3xl md:text-4xl font-display font-bold text-black mb-1 tracking-tight">
                +250k
              </h3>
              <p className="text-[10px] text-gray-400 font-sans leading-relaxed tracking-wider font-semibold uppercase">
                Videos reaching a wide audience and giving lasting impression
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-display font-bold text-black mb-1 tracking-tight">
                +800k
              </h3>
              <p className="text-[10px] text-gray-400 font-sans leading-relaxed tracking-wider font-semibold uppercase">
                Hours watched, engaging storytelling that captivates viewers
              </p>
            </motion.div>
          </div>

        </div>

        {/* Right Column - Highlight Golden Card & Dynamic Badges */}
        <div className="lg:col-span-6 relative flex flex-col justify-center lg:items-end">
          
          <div className="relative w-full max-w-[440px] aspect-[4/5] sm:aspect-square md:aspect-[4/5]">
            
            {/* Signature yellow-container exactly like screenshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 bg-[#F3AF24] rounded-[2.5rem] overflow-hidden p-8 shadow-xl flex flex-col justify-between group"
            >
              
              {/* Card top banner - Custom signature & Earth globe badge */}
              <div className="flex justify-between items-start z-10">
                <div className="relative select-none">
                  <span className="font-signature text-5xl sm:text-6xl text-white/95 leading-none block -rotate-3 select-none">
                    Dmitry
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-[#111111]/70 uppercase block ml-1 -mt-1 font-semibold">
                    Visual Poeta
                  </span>
                </div>
                
                {/* Globe symbol in black circle */}
                <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center border border-white/15 cursor-pointer group-hover:scale-110 group-hover:bg-black transition-all">
                  <Globe className="w-4 h-4 text-[#F3AF24] animate-[spin_8s_linear_infinite]" />
                </div>
              </div>

              {/* Central portrait overlay: Videographer holding retro camera */}
              <div className="absolute inset-x-0 bottom-0 h-[88%] flex justify-center items-end overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop"
                  alt="Dmitry holding vintage video camera"
                  referrerPolicy="no-referrer"
                  className="w-[105%] h-[105%] object-cover object-bottom transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

            </motion.div>

            {/* Embedded interactive thumbnail widgets inside Hero like the mobile overlay mockup */}
            <div className="absolute bottom-6 -left-6 sm:-left-8 flex flex-col gap-3.5 z-20">
              
              {/* Stacked circular creator icons */}
              <div className="bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md border border-white flex flex-col gap-1.5">
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                    alt="Work Thumbnail A"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="Work Thumbnail B"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* The big pointer click redirect button: arrow-up-right inside custom black circles */}
              <a
                href="#portfolio"
                id="hero-scroll-btn"
                className="w-12 h-12 rounded-full bg-[#111111] hover:bg-black flex items-center justify-center text-white shadow-lg border border-white/20 hover:scale-110 transition-transform group/btn"
              >
                <ArrowUpRight className="w-5 h-5 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

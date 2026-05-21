import { motion } from 'motion/react';
import { Camera, Maximize } from 'lucide-react';

export default function About() {
  // Generate 16 radial pills representing the beautiful white rays exactly like in the picture
  const rays = Array.from({ length: 16 }, (_, i) => i);

  return (
    <section id="about" className="relative bg-[#111111] text-white pt-10 pb-24 md:pb-32 overflow-hidden">
      
      {/* Infinite scrolling typography ticker: "about. about. about." above the dark segment */}
      <div className="w-full bg-[#F7F7F7] py-6 sm:py-8 border-y border-gray-200 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex text-6xl sm:text-7xl md:text-8xl font-display font-extrabold text-[#111111]/90 uppercase tracking-tighter">
          <span>about. about. about. about. about. about. about. about. about. about.about. about.&nbsp;</span>
          <span>about. about. about. about. about. about. about. about. about. about.about. about.&nbsp;</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 relative">
        
        {/* VIEWPORT CORNER ANCHORS - Representing high-end camera viewfinder */}
        <div className="absolute top-0 left-6 w-8 h-8 border-l border-t border-white/20"></div>
        <div className="absolute top-0 right-6 w-8 h-8 border-r border-t border-white/20"></div>
        <div className="absolute bottom-0 left-6 w-8 h-8 border-l border-b border-white/20"></div>
        <div className="absolute bottom-0 right-6 w-8 h-8 border-r border-b border-white/20"></div>

        {/* Reticles / Viewfinder fine crosshairs in margins */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/10 text-[9px] font-mono tracking-widest uppercase hidden md:block">
          🔴 REC • VIEW_M2 • AUTO_FOC_ACTIVE
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-10">
          
          {/* Left Block - The radial petal graphics centering the filmmaker */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[420px] sm:min-h-[500px]">
            
            {/* Viewfinder crosshairs for portrait focus */}
            <div className="absolute text-white/20 text-xs font-mono select-none pointer-events-none top-8 left-8 flex items-center gap-1.5 bg-[#1a1a1a] px-3 py-1 rounded-full border border-white/5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              FOCAL 50mm f/1.2
            </div>

            {/* RADIAL SUNBURST BEAMS (White petal rods rotated in a circle behind him) */}
            <div className="absolute w-full h-full flex items-center justify-center select-none pointer-events-none">
              <div className="relative w-1 h-1 flex items-center justify-center">
                {rays.map((ray, index) => {
                  const degree = index * 22.5; // Spread evenly across 360deg
                  return (
                    <motion.div
                      key={ray}
                      initial={{ scaleY: 0, opacity: 0 }}
                      whileInView={{ scaleY: 1, opacity: 0.95 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.8, delay: index * 0.03 + 0.2 }}
                      style={{
                        transform: `rotate(${degree}deg) translateY(-145px)`,
                        transformOrigin: 'bottom center',
                      }}
                      className="absolute w-4 h-28 sm:w-5 sm:h-36 bg-white rounded-full"
                    />
                  );
                })}
              </div>
            </div>

            {/* Central Circle Image Over the rays */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-[#111111] bg-black shadow-2xl z-10 hover:border-amber-400 cursor-pointer group transition-all"
            >
              <img
                src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop"
                alt="Dmitry focusing camera lens"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 duration-700"
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <Camera className="w-8 h-8 text-white scale-75 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.div>

          </div>

          {/* Right Block - Description & Credo */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-amber-400 font-mono text-[10px] tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full block"></span>
                Creative Statement / Dmitry Poetry
              </div>

              <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight">
                Capturing raw emotion, composition, & movement.
              </h2>
              
              <div className="space-y-4 font-sans text-xs text-gray-300 tracking-wide leading-relaxed font-normal">
                <p>
                  As an award-winning independent filmmaker and visual poet, I specialize in crafting elegant, atmospheric narratives that linger in memory. 
                  My style mixes modern architecture, extreme light-and-shadow compositions, and high-fashion aesthetics.
                </p>
                <p>
                  Every video is a canvas, and every sequence is timed to visual notes. I partner with museums, private galleries, boutique apparel, and high-prestige brands to design spatial video experiences and interactive visual exhibitions.
                </p>
              </div>

              {/* Dynamic camera equipment badges */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">CRAFT FOCUS</span>
                  <p className="text-xs text-white font-semibold">Cinematography, Art Direction, Motion Poetry</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">GEAR & SPECS</span>
                  <p className="text-xs text-white font-semibold">ARRI Alexa Mini LX, Cine-primes, Retro Super-8</p>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-white hover:bg-[#F3AF24] text-black px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 tracking-wider shadow-md hover:scale-105"
                >
                  CONNECT INQUIRE
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center border border-white/20 hover:border-white text-white px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 tracking-wider hover:bg-white/5"
                >
                  VIEW WORK REEL
                </a>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

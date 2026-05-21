import { useState, MouseEvent } from 'react';
import { projects } from '../data';
import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Heart, Calendar, Compass, Share2, Film, Check, X } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [likes, setLikes] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Film', 'Architecture', 'Visual Poetry', 'Experimental', 'Street'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const toggleLike = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="portfolio" className="bg-[#F7F7F7] py-20 md:py-32 overflow-hidden">
      
      {/* Upper Scrolling Header Ticker "folio. folio. folio." */}
      <div className="w-full bg-[#111111] py-6 sm:py-8 overflow-hidden select-none mb-16">
        <div className="animate-marquee whitespace-nowrap flex text-6xl sm:text-7xl md:text-8xl font-display font-extrabold text-white uppercase tracking-tighter">
          <span>portfolio. portfolio. portfolio. portfolio. portfolio. portfolio. portfolio.&nbsp;</span>
          <span>portfolio. portfolio. portfolio. portfolio. portfolio. portfolio. portfolio.&nbsp;</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Intro description and filter buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-[#F3AF24] uppercase font-semibold mb-2">
              / CURATED PORTFOLIO
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111111]">
              Atmospheric captures.
            </h2>
          </div>

          {/* Clean minimal categories filter layout */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#111111] text-white'
                    : 'bg-white text-gray-600 hover:text-black border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS Bento/Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group relative bg-[#111111] rounded-[2rem] overflow-hidden aspect-square flex flex-col justify-end p-6 md:p-8 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Visual Category Badge Accent */}
                <div className="absolute top-6 left-6 z-10 bg-white/10 backdrop-blur-md text-white text-[10px] font-mono tracking-widest uppercase py-1 px-3.5 rounded-full border border-white/10">
                  {project.category}
                </div>

                {/* Love interaction icon on card top-right */}
                <button
                  onClick={(e) => toggleLike(project.id, e)}
                  className="absolute top-6 right-6 z-10 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white hover:text-[#111111] text-white transition-all duration-300"
                >
                  <Heart className={`w-4 h-4 ${likes[project.id] ? 'fill-red-500 text-red-500' : ''}`} />
                </button>

                {/* Main high quality visual image */}
                <div className="absolute inset-x-0 inset-y-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Delicate darkness mask overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>

                {/* Card Content Footer info */}
                <div className="relative z-10 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] tracking-widest font-mono text-gray-300 uppercase block mb-1">
                        {project.year} / Dmitry Art
                      </span>
                      <h4 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                        {project.title}
                      </h4>
                    </div>
                    {/* Glowing expand Eye button */}
                    <div className="w-10 h-10 rounded-full bg-[#F3AF24] flex items-center justify-center text-black opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty placeholder search states */}
        {filteredProjects.length === 0 && (
          <div className="w-full py-20 text-center bg-white border border-gray-200 rounded-[2rem] flex flex-col items-center justify-center">
            <Film className="w-10 h-10 text-gray-300 mb-4 animate-bounce" />
            <p className="text-gray-500 font-sans font-medium text-sm">No captures found in &quot;{selectedCategory}&quot; category</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-4 px-5 py-2.5 bg-black hover:bg-[#F3AF24] text-white hover:text-black rounded-full text-xs font-semibold tracking-wider transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* RICH LIGHTBOX OVERLAY EXPANDER */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 overflow-y-auto flex items-center justify-center p-4 md:p-10"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-[#111111] max-w-5xl w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button top-right */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all shadow-md focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Visual Banner Left */}
                <div className="lg:col-span-7 relative aspect-square lg:aspect-auto min-h-[350px] lg:h-[600px] overflow-hidden bg-black flex items-center justify-center">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Subtle retro overlay line effect */}
                  <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)] opacity-80" />
                  
                  {/* Floating badge details */}
                  <div className="absolute bottom-6 left-6 bg-[#1a1a1a]/95 backdrop-blur-md border border-white/5 py-2 px-4 rounded-xl flex items-center gap-2.5 text-xs text-white">
                    <Compass className="w-3.5 h-3.5 text-[#F3AF24] animate-spin" />
                    <span>Exhibition Quality Capture</span>
                  </div>
                </div>

                {/* Details Right */}
                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#F3AF24] uppercase font-bold block mb-2">
                      {activeProject.category} / POETRY SELECTION
                    </span>
                    <h3 className="text-3xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
                      {activeProject.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-sans tracking-wide leading-relaxed mb-6 font-light">
                      This series captures the intimate interaction between geometric minimalism and ambient light. Hand-graded to replicate the organic tones of vintage 35mm film stock, the composition highlights raw organic shapes and silhouettes.
                    </p>

                    {/* Rich photography details specs */}
                    <div className="space-y-3 pt-6 border-t border-white/10">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 font-mono tracking-wider uppercase">RELEASE YEAR</span>
                        <span className="text-white font-mono font-bold flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          {activeProject.year}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 font-mono tracking-wider uppercase">FOCAL LENS</span>
                        <span className="text-white font-mono font-bold">50mm Retro-Prime</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 font-mono tracking-wider uppercase">SHUTTER ANGLE</span>
                        <span className="text-white font-mono font-bold">180 Degrees</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-500 font-mono tracking-wider uppercase">FORMAT COLOR</span>
                        <span className="text-white font-mono font-bold">ArriRaw D-Log</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={(e) => toggleLike(activeProject.id, e)}
                      className="flex-1 bg-white hover:bg-[#F3AF24] text-black py-3.5 rounded-full text-xs font-bold font-sans tracking-wide transition-all flex items-center justify-center gap-2"
                    >
                      <Heart className={`w-3.5 h-3.5 ${likes[activeProject.id] ? 'fill-red-500 text-red-500' : ''}`} />
                      <span>{likes[activeProject.id] ? 'FAVORITED WORK' : 'MARK AS FAVORITE'}</span>
                    </button>
                    <button
                      onClick={() => alert('Artwork link copied to clipboard')}
                      className="px-5 border border-white/20 hover:border-white text-white py-3.5 rounded-full text-xs font-bold font-sans tracking-wide transition-all flex items-center justify-center gap-2"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>SHARE</span>
                    </button>
                  </div>

                </div>

              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

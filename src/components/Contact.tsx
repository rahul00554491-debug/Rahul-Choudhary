import { useState, FormEvent } from 'react';
import { Send, Check, Loader2, Sparkles, AlertCircle, Mail, MapPin, Film } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    
    // Simulate lightweight server-side submit delay
    setTimeout(() => {
      setStatus('success');
      // Reset after success
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 2200);
  };

  return (
    <section id="contact" className="relative bg-[#111111] text-white py-20 md:py-32 overflow-hidden">
      
      {/* Corner viewfinders like previous slate sections */}
      <div className="absolute top-0 left-6 w-8 h-8 border-l border-t border-white/10"></div>
      <div className="absolute top-0 right-6 w-8 h-8 border-r border-t border-white/10"></div>
      <div className="absolute bottom-0 left-6 w-8 h-8 border-l border-b border-white/10"></div>
      <div className="absolute bottom-0 right-6 w-8 h-8 border-r border-b border-white/10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Block - General information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 font-mono text-[10px] tracking-widest uppercase mb-4 font-semibold">
                <span className="w-1.5 h-1.5 bg-amber-400 rounded-full block animate-ping"></span>
                / TRANSMIT COMMUNICATE
              </div>

              <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-white mb-6 leading-tight">
                Let&apos;s co-create timeless frames.
              </h2>
              
              <p className="text-xs text-gray-400 font-sans tracking-wide leading-relaxed font-light mb-10 max-w-sm">
                Inquire about custom video productions, interactive cinematic art rooms, global private gallery exhibits, or editorial brand direction.
              </p>
            </div>

            {/* Quick Contacts details */}
            <div className="space-y-6">
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F3AF24] group-hover:bg-[#F3AF24] group-hover:text-black transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">DIRECT MAIL</span>
                  <a href="mailto:dmitry@poetryinmotion.com" className="text-xs text-white hover:text-[#F3AF24] font-semibold transition-colors">
                    dmitry@poetryinmotion.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F3AF24] group-hover:bg-[#F3AF24] group-hover:text-black transition-all duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">MAIN HQ LAB</span>
                  <span className="text-xs text-white font-semibold">
                    Studio 402, Calle Gran Vía, Madrid, Spain
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F3AF24] group-hover:bg-[#F3AF24] group-hover:text-black transition-all duration-300">
                  <Film className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">TELEPHONE WIRE</span>
                  <a href="tel:+34912345678" className="text-xs text-white hover:text-[#F3AF24] font-semibold transition-colors">
                    +34 91 234 5678
                  </a>
                </div>
              </div>

            </div>

            <div className="hidden lg:block pt-10 text-[9.5px] font-mono text-gray-500 uppercase tracking-wider select-none leading-relaxed">
              📍 ESTABLISHED MCMXCIV — MADRID • LONDON • TOKYO • PARIS
            </div>
          </div>

          {/* Right Block - Premium Contact Form */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-md">
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center text-center justify-center h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-lg border-2 border-white mb-6">
                    <Check className="w-7 h-7" />
                  </div>

                  <h3 className="text-3xl font-display font-bold text-white tracking-tight mb-3">
                    Message Dispatched!
                  </h3>
                  
                  <p className="text-xs text-gray-300 font-sans max-w-sm leading-relaxed mb-6 font-medium">
                    Your inquiry has been routed directly to Dmitry&apos;s creative desk. Expect a custom callback or conceptual portfolio brief in <b>24-48 business hours</b>.
                  </p>

                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-3 bg-white hover:bg-amber-400 hover:text-black text-black font-semibold text-xs tracking-wider rounded-full transition-all flex items-center gap-2 font-bold shadow-md hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4 animate-spin" />
                    <span>TRANSMIT ANOTHER</span>
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-2xl font-display font-extrabold text-white tracking-tight mb-8">
                    Submit Project Inquiry
                  </h3>

                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    
                    {status === 'error' && (
                      <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/25 p-4 rounded-2xl text-red-400 text-xs font-sans font-medium">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>Please complete all mandatory fields.</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] font-mono tracking-wider font-semibold uppercase text-gray-400 block mb-1.5">
                          CREATIVE PARTNER NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name / Studio"
                          className="w-full bg-white/5 border border-white/10 focus:border-amber-400 focus:bg-white/10 py-3 px-4 rounded-xl text-xs font-sans outline-none font-medium transition-all text-white placeholder-gray-500"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-mono tracking-wider font-semibold uppercase text-gray-400 block mb-1.5">
                          CORRESPONDENCE EMAIL *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@agency.com"
                          className="w-full bg-white/5 border border-white/10 focus:border-amber-400 focus:bg-white/10 py-3 px-4 rounded-xl text-xs font-sans outline-none font-medium transition-all text-white placeholder-gray-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider font-semibold uppercase text-gray-400 block mb-1.5">
                        SUBJECT / INQUIRY TYPE
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Creative Direction / Project RFP / Screening Collab"
                        className="w-full bg-white/5 border border-white/10 focus:border-amber-400 focus:bg-white/10 py-3 px-4 rounded-xl text-xs font-sans outline-none font-medium transition-all text-white placeholder-gray-500"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono tracking-wider font-semibold uppercase text-gray-400 block mb-1.5">
                        STATEMENT & FOCUS *
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Detail your timeline, spatial coordinates, branding scope, or artistic vision..."
                        className="w-full bg-white/5 border border-white/10 focus:border-amber-400 focus:bg-white/10 py-3 px-4 rounded-xl text-xs font-sans outline-none font-medium transition-all text-white placeholder-gray-500 no-scrollbar resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-white hover:bg-[#F3AF24] hover:text-black text-black text-xs font-bold font-sans tracking-widest py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:bg-gray-700 disabled:text-gray-400"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>ROUTING TRANSMISSION...</span>
                        </>
                      ) : (
                        <>
                          <span>DISPATCH MESSAGE</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                  </form>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}

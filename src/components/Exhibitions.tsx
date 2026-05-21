import { useState, FormEvent } from 'react';
import { exhibitions } from '../data';
import { Exhibition } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, Check, Ticket, X, Users, Compass } from 'lucide-react';

export default function Exhibitions() {
  const [bookingExhibition, setBookingExhibition] = useState<Exhibition | null>(null);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [ticketQty, setTicketQty] = useState(1);
  const [bookedState, setBookedState] = useState(false);

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!buyerName || !buyerEmail) return;

    setBookedState(true);
    setTimeout(() => {
      // Clear states
      setBookingExhibition(null);
      setBuyerName('');
      setBuyerEmail('');
      setTicketQty(1);
      setBookedState(false);
    }, 3800);
  };

  return (
    <section id="exhibitions" className="bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Navigation Ticker Header ". exhibitions" like the screenshot */}
        <div className="flex items-center gap-1.5 text-amber-500 font-mono text-[10px] tracking-widest uppercase mb-4 font-semibold">
          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full block animate-pulse"></span>
          / GLOBAL TOURS
        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-[#111111]">
            . exhibitions
          </h2>
          <p className="max-w-md text-xs text-gray-500 font-sans tracking-wide leading-relaxed font-medium">
            Join me at live screenings, immersive projection rooms, and interactive workshops across European and international art galleries.
          </p>
        </div>

        {/* Dynamic Interactive Rows exactly like the visual mockup */}
        <div className="border-t border-gray-200 mt-10">
          {exhibitions.map((exh, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={exh.id}
              className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-100 group hover:bg-[#F7F7F7] px-4 -mx-4 rounded-2xl transition-all duration-300"
            >
              
              {/* Left Row info: Title & Location */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 pb-4 md:pb-0">
                <div className="w-10 h-10 rounded-full bg-[#111111]/5 flex items-center justify-center text-black font-mono text-xs font-bold font-sans">
                  0{index + 1}
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-display font-bold text-[#111111] group-hover:text-amber-600 transition-colors">
                    {exh.location}
                  </h4>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500 font-sans font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {exh.location.split(',')[1] || exh.location}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      {exh.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Row action: Booking state / Buy ticket button */}
              <div className="flex items-center gap-4 md:gap-8 justify-between sm:justify-start">
                <div className="hidden sm:block font-mono text-xs tracking-wider font-semibold uppercase text-gray-400 text-right">
                  {exh.ticketsAvailable ? (
                    <span className="text-emerald-600 font-sans flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping inline-block"></span>
                      Passes Available
                    </span>
                  ) : (
                    <span className="text-gray-400 font-sans">Fully Booked</span>
                  )}
                </div>

                {exh.ticketsAvailable ? (
                  <button
                    onClick={() => {
                      setBookingExhibition(exh);
                      setBookedState(false);
                    }}
                    className="inline-flex items-center gap-2 border border-black hover:bg-black hover:text-white text-black text-xs font-bold px-6 py-2.5 rounded-full transition-all duration-300 group/btn"
                  >
                    <span>Buy Ticket</span>
                    <Ticket className="w-3.5 h-3.5 group-hover/btn:rotate-12 transition-transform" />
                  </button>
                ) : (
                  <button
                    disabled
                    className="border border-gray-200 text-gray-300 cursor-not-allowed text-xs font-bold px-6 py-2.5 rounded-full"
                  >
                    Sold Out
                  </button>
                )}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Floating Call to Action */}
        <div className="mt-16 bg-[#F3AF24] rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-black shadow-lg">
          <div className="md:max-w-xl">
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-black/60 block mb-2">
              / PARTNERSHIP COLLABORATION
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-black leading-tight tracking-tight">
              Want to host a visual sculpture screening at your gallery?
            </h3>
            <p className="text-xs text-black/75 font-sans tracking-wide leading-relaxed mt-4 font-semibold">
              I collaborate with local curators and directors to build immersive high-contrast projection designs, custom soundscapes, and digital installations.
            </p>
          </div>
          <a
            href="#contact"
            className="w-full md:w-auto bg-black hover:bg-white text-white hover:text-black hover:scale-105 duration-300 px-8 py-4 rounded-full text-xs font-bold tracking-wider text-center"
          >
            REQUEST COLLAB REEL
          </a>
        </div>

      </div>

      {/* DYNAMIC TICKET PURCHASE SUCCESSFUL OVERLAY */}
      <AnimatePresence>
        {bookingExhibition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white text-[#111111] max-w-md w-full rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative border border-gray-200"
            >
              
              <button
                onClick={() => setBookingExhibition(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-black flex items-center justify-center transition-all focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {!bookedState ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex items-center gap-2.5 text-amber-500 font-mono text-[10px] tracking-widest uppercase font-bold mb-3">
                      <Ticket className="w-4 h-4" />
                      <span>SECURE RESERVATION</span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-black tracking-tight leading-tight">
                      {bookingExhibition.location}
                    </h3>
                    <p className="text-xs text-gray-500 font-sans mt-2 font-medium">
                      Date: <b className="text-black font-semibold">{bookingExhibition.date}</b>
                    </p>

                    <form onSubmit={handleBookingSubmit} className="mt-6 space-y-4">
                      <div>
                        <label className="text-[10px] font-mono tracking-wider font-semibold uppercase text-gray-500 block mb-1.5">
                          FULL NAME
                        </label>
                        <input
                          type="text"
                          required
                          value={buyerName}
                          onChange={(e) => setBuyerName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full bg-gray-50 border border-gray-200 focus:border-amber-400 py-3 px-4 rounded-xl text-xs font-sans outline-none font-medium transition-all"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-mono tracking-wider font-semibold uppercase text-gray-500 block mb-1.5">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          required
                          value={buyerEmail}
                          onChange={(e) => setBuyerEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          className="w-full bg-gray-50 border border-gray-200 focus:border-amber-400 py-3 px-4 rounded-xl text-xs font-sans outline-none font-medium transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-mono tracking-wider font-semibold uppercase text-gray-500 block mb-1.5">
                            QUANTITY
                          </label>
                          <select
                            value={ticketQty}
                            onChange={(e) => setTicketQty(Number(e.target.value))}
                            className="w-full bg-gray-50 border border-gray-200 focus:border-amber-400 py-3 px-4 rounded-xl text-xs font-sans outline-none font-bold transition-all"
                          >
                            <option value={1}>1 Ticket</option>
                            <option value={2}>2 Tickets</option>
                            <option value={3}>3 Tickets</option>
                            <option value={4}>4 Tickets</option>
                          </select>
                        </div>
                        <div className="flex flex-col justify-end">
                          <span className="text-[10px] text-gray-400 font-mono tracking-wide mb-1 block uppercase">TOTAL AMOUNT</span>
                          <span className="text-xl font-display font-black text-black">
                            ${ticketQty * 15}.00
                          </span>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-black hover:bg-[#F3AF24] hover:text-black text-white text-xs font-bold tracking-wide py-4 rounded-xl transition-all font-sans"
                      >
                        PURCHASE PASSES
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-6">
                      <Check className="w-8 h-8 animate-[bounce_1s_infinite]" />
                    </div>

                    <h3 className="text-2xl font-display font-black text-emerald-800 tracking-tight mb-2">
                      Booking Confirmed!
                    </h3>
                    
                    <p className="text-xs text-gray-500 font-sans max-w-xs leading-relaxed mb-6 font-medium">
                      Congratulations <b className="text-[#111111] font-semibold">{buyerName}</b>! {ticketQty} ticket(s) to the <b className="text-black font-semibold">{bookingExhibition.location}</b> show have been dispatched to <b className="text-[#111111] font-semibold">{buyerEmail}</b>.
                    </p>

                    <div className="bg-gray-50 p-4 border border-gray-100 rounded-2xl w-full text-left font-mono space-y-1.5 text-[10px] text-gray-500">
                      <div className="flex justify-between">
                        <span>TRANSACTION_ID:</span>
                        <span className="text-black font-semibold">#VP-EXH-84291</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CONFIRMATION_CODE:</span>
                        <span className="text-black font-semibold">TKT-74X2-VP</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ISSUED ON:</span>
                        <span className="text-black font-semibold">May 21, 2026</span>
                      </div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

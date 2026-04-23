import { motion } from "framer-motion";
import { Clock, Clock4 } from "lucide-react";

export function TimeSavings() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.01 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="md:col-span-4 lg:col-span-6 bento-card p-10 flex flex-col justify-center items-center text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-red-500/5" />
        <Clock4 className="w-16 h-16 text-red-400 mb-6 drop-shadow-[0_0_10px_rgba(248,113,113,0.5)]" />
        <h3 className="text-2xl font-black mb-3">Tradiční způsob</h3>
        <p className="text-muted-foreground font-medium text-lg">Ruční přepisování do Excelu — 45 minut + riziko chyb v přepisu</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.01, boxShadow: "0 0 30px rgba(20,184,166,0.2)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        className="md:col-span-4 lg:col-span-6 bento-card p-10 flex flex-col justify-center items-center text-center border-primary/30 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 bg-primary/20 text-primary text-xs font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-widest border-b border-l border-primary/30">
          TENDRAI
        </div>
        <div className="absolute inset-0 bg-primary/5" />
        <Clock className="w-16 h-16 text-primary mb-6 drop-shadow-[0_0_15px_rgba(20,184,166,0.8)]" />
        <h3 className="text-2xl font-black mb-3">S naší umělou inteligencí</h3>
        <p className="text-white font-bold text-lg">AI analýza — 2 minuty + kompletní přehled úspor</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="md:col-span-4 lg:col-span-12 bento-card p-8 grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10"
      >
        <div className="py-4 md:py-0">
          <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">2 min</div>
          <div className="text-primary font-bold uppercase tracking-widest text-sm drop-shadow-[0_0_5px_rgba(20,184,166,0.5)]">doba analýzy</div>
        </div>
        <div className="py-4 md:py-0">
          <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">0</div>
          <div className="text-primary font-bold uppercase tracking-widest text-sm drop-shadow-[0_0_5px_rgba(20,184,166,0.5)]">chyb v přepisu dat</div>
        </div>
        <div className="py-4 md:py-0">
          <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter">EU only</div>
          <div className="text-primary font-bold uppercase tracking-widest text-sm drop-shadow-[0_0_5px_rgba(20,184,166,0.5)]">uložení/GDPR</div>
        </div>
      </motion.div>
    </>
  );
}

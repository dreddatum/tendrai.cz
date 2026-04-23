import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Lock, Globe, Server, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="md:col-span-4 lg:col-span-12 row-span-4 bento-card p-8 md:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12"
    >
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-violet-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex-1 z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-foreground font-sans tracking-tighter leading-[1.1]">
            Přestaňte přeplácet za materiál. <br className="hidden md:block" />
            <span className="text-gradient">AI vybere nejlevnější nabídku.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl font-medium">
            Nahrajte až 5 cenových nabídek od dodavatelů (PDF/Excel). Systém je porovná na úrovni každé položky, ukáže nejlevnější variantu a pohlídá, že vás na faktuře nenatáhli.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Button size="lg" className="h-14 px-8 text-lg font-bold w-full rounded-xl shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] transition-shadow" asChild>
                <a href="#demo">
                  Zkušební analýza zdarma <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold w-full rounded-xl border-white/10 hover:bg-white/5" asChild>
                <a href="#funkce">Jak to funguje</a>
              </Button>
            </motion.div>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-muted-foreground uppercase tracking-wider">
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Bez kreditky</div>
            <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-primary" /> Šifrování AES-256</div>
            <div className="flex items-center gap-2"><Server className="w-4 h-4 text-primary" /> Servery v EU</div>
            <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> GDPR shoda</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="flex-1 w-full max-w-2xl relative z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-violet-500/10 rounded-2xl liquid-element pointer-events-none scale-105" />
        <motion.div 
          whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)" }}
          className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl overflow-hidden transition-all duration-500 relative"
        >
          <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center gap-2 backdrop-blur-lg">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
            </div>
            <div className="ml-4 text-xs font-mono font-bold text-muted-foreground bg-black/50 px-3 py-1 rounded border border-white/5">
              tendr-vystavba-haly-b.pdf
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
              <div>
                <h3 className="text-xl font-bold font-sans text-white">Výsledky porovnání nabídek</h3>
                <p className="text-sm text-muted-foreground mt-1 font-medium">Nalezeno 145 spárovaných položek z 5 dokumentů</p>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Celková úspora</div>
                <div className="text-2xl font-black text-primary font-mono text-gradient">+42 500 Kč</div>
              </div>
            </div>

            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-xl border border-primary/50 bg-primary/10 p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-[0_0_15px_rgba(20,184,166,0.15)]"
              >
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-black px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  NEJLEPŠÍ NABÍDKA
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                    <CheckCircle2 className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">STAVOMARKET s.r.o.</div>
                    <div className="text-sm text-primary/80 font-medium">Všechny položky skladem • Doprava zdarma</div>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-2xl font-black font-mono text-white">287 450 Kč</div>
                  <div className="text-sm font-bold text-primary drop-shadow-[0_0_5px_rgba(20,184,166,0.5)]">Úspora +42 500 Kč</div>
                </div>
              </motion.div>

              <div className="grid gap-3 pt-2">
                <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5">
                  <div className="font-bold text-muted-foreground">PROFIMAT CZ</div>
                  <div className="font-mono font-medium text-muted-foreground">302 100 Kč</div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5">
                  <div className="font-bold text-muted-foreground">Stavmat Hrazdil</div>
                  <div className="font-mono font-medium text-muted-foreground">315 890 Kč</div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5">
                  <div className="font-bold text-muted-foreground">BUILDEX a.s.</div>
                  <div className="font-mono font-medium text-muted-foreground">324 400 Kč</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

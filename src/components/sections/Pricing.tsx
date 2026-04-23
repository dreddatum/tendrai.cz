import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        id="cenik"
        className="md:col-span-4 lg:col-span-12 flex flex-col items-center text-center pb-4 pt-12"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Transparentní ceník</h2>
        <p className="text-xl text-muted-foreground mb-6 font-medium">
          Žádné skryté poplatky. Žádné překvapení na faktuře.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-bold uppercase tracking-wider bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md">
          <span>Jedna ušetřená zakázka obvykle pokryje roční plán.</span>
          <span className="hidden sm:inline text-muted-foreground">•</span>
          <span className="text-primary drop-shadow-[0_0_5px_rgba(20,184,166,0.5)]">Při roční platbě získáte 2 měsíce zdarma</span>
        </div>
      </motion.div>

      {/* Starter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        className="md:col-span-4 lg:col-span-4 bento-card p-8 flex flex-col"
      >
        <h3 className="text-2xl font-bold mb-2">Starter</h3>
        <p className="text-muted-foreground font-medium mb-6">Pro menší projekty a jednotlivce</p>
        
        <div className="mb-8">
          <span className="text-4xl font-black font-mono text-white">2 900 Kč</span>
          <span className="text-muted-foreground font-bold">/měs.</span>
        </div>
        
        <ul className="space-y-4 text-sm font-bold flex-1 mb-8">
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> 20 analýz měsíčně</li>
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Až 5 nabídek v analýze</li>
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Export do PDF</li>
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Historie analýz</li>
          <li className="flex items-center gap-3 text-muted-foreground/50"><X className="w-5 h-5" /> Týmová spolupráce</li>
          <li className="flex items-center gap-3 text-muted-foreground/50"><X className="w-5 h-5" /> Analýza smluv</li>
        </ul>
        
        <Button className="w-full rounded-xl" variant="outline" asChild>
          <a href="https://app.coredesk.cz/" target="_blank" rel="noreferrer">Začít zdarma</a>
        </Button>
      </motion.div>

      {/* Business */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(20,184,166,0.3)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="md:col-span-4 lg:col-span-4 bento-card p-8 flex flex-col border-primary/50 relative"
      >
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider border border-primary/30">
          DOPORUČUJEME
        </div>
        
        <h3 className="text-2xl font-bold mb-2">Business</h3>
        <p className="text-muted-foreground font-medium mb-6">Pro nákupní týmy a stavební firmy</p>
        
        <div className="mb-8">
          <span className="text-4xl font-black font-mono text-white text-gradient">7 500 Kč</span>
          <span className="text-muted-foreground font-bold">/měs.</span>
        </div>
        
        <ul className="space-y-4 text-sm font-bold flex-1 mb-8">
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary drop-shadow-[0_0_5px_rgba(20,184,166,0.8)]" /> Neomezené analýzy</li>
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary drop-shadow-[0_0_5px_rgba(20,184,166,0.8)]" /> Až 10 nabídek v analýze</li>
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary drop-shadow-[0_0_5px_rgba(20,184,166,0.8)]" /> Týmová spolupráce (5 uživatelů)</li>
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary drop-shadow-[0_0_5px_rgba(20,184,166,0.8)]" /> Analýza smluv AI</li>
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary drop-shadow-[0_0_5px_rgba(20,184,166,0.8)]" /> Párování faktur</li>
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary drop-shadow-[0_0_5px_rgba(20,184,166,0.8)]" /> Prioritní podpora</li>
        </ul>
        
        <Button className="w-full text-lg h-12 rounded-xl font-bold shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] transition-shadow" asChild>
          <a href="https://app.coredesk.cz/" target="_blank" rel="noreferrer">Začít zdarma</a>
        </Button>
      </motion.div>

      {/* Enterprise */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
        className="md:col-span-4 lg:col-span-4 bento-card p-8 flex flex-col"
      >
        <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
        <p className="text-muted-foreground font-medium mb-6">Pro velké organizace s vlastními požadavky</p>
        
        <div className="mb-8">
          <span className="text-4xl font-black text-white tracking-tighter">Na míru</span>
        </div>
        
        <ul className="space-y-4 text-sm font-bold flex-1 mb-8">
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Vše z Business</li>
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Neomezený počet uživatelů</li>
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Vlastní integrace (API)</li>
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> SLA garance</li>
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Školení týmu</li>
          <li className="flex items-center gap-3"><Check className="w-5 h-5 text-primary" /> Dedikovaný account manager</li>
        </ul>
        
        <Button className="w-full rounded-xl" variant="outline" asChild>
          <a href="mailto:info@tendrai.cz">Kontaktovat obchod</a>
        </Button>
      </motion.div>
    </>
  );
}

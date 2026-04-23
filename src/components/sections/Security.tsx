import { Shield, Lock, Server, Trash2, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const securityFeatures = [
  {
    icon: Lock,
    title: "Šifrování AES-256",
    description: "Vaše soubory jsou šifrované při přenosu i při uložení. Stejný standard jako internetové bankovnictví.",
    span: "md:col-span-2 lg:col-span-3"
  },
  {
    icon: Server,
    title: "Servery v EU",
    description: "Data jsou uložena výhradně na serverech v Evropské unii. Plná shoda s GDPR a českou legislativou.",
    span: "md:col-span-2 lg:col-span-3"
  },
  {
    icon: Trash2,
    title: "Automatické mazání",
    description: "Dočasné soubory jsou automaticky smazány ihned po dokončení analýzy. V systému zůstávají jen výsledky.",
    span: "md:col-span-2 lg:col-span-3"
  },
  {
    icon: Cpu,
    title: "AI netrénujeme na vašich datech",
    description: "Vaše nabídky nikdy nepoužijeme k trénování AI modelů. Data slouží výhradně pro vaši analýzu.",
    span: "md:col-span-2 lg:col-span-3"
  }
];

export function Security() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        id="bezpecnost"
        className="md:col-span-4 lg:col-span-12 bento-card p-10 md:p-14 flex flex-col justify-center relative overflow-hidden mt-12"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-[80px]" />
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-bold uppercase tracking-wider mb-6 w-fit backdrop-blur-md">
          <Shield className="w-4 h-4 text-violet-400" />
          <span className="text-violet-100">Bezpečnost dat</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tighter">
          Vaše ceníky jsou obchodní tajemství. <span className="text-violet-400">Chráníme je.</span>
        </h2>
        <p className="text-xl text-muted-foreground font-medium max-w-3xl">
          Nahráváte nám citlivá data — slevy u dodavatelů, interní ceny, obchodní podmínky. Bezpečnost proto bereme vážněji než výkon.
        </p>
      </motion.div>

      {securityFeatures.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(139,92,246,0.15)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 }}
          className={`bento-card p-8 flex flex-col justify-between ${feature.span} border-violet-500/20`}
        >
          <feature.icon className="w-8 h-8 text-violet-400 mb-6 drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
          <div>
            <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed font-medium text-sm">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
}

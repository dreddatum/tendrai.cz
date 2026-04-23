import { motion } from "framer-motion";
import { Scale, Zap, FileSearch } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Scale,
      title: "Srovnání jablek s jablky",
      description: "AI pochopí, že \"Roxor 12mm\" a \"Ocel betonářská 12\" je to samé. Spárujeme položky i z totálně odlišných formátů ceníků.",
      span: "md:col-span-2 lg:col-span-5"
    },
    {
      icon: Zap,
      title: "Okamžitá kalkulace",
      description: "Výpočet nejlevnější varianty a nejrychlejší dopravy na stavbu. Na jeden klik.",
      span: "md:col-span-2 lg:col-span-4"
    },
    {
      icon: FileSearch,
      title: "Auditor faktur",
      description: "Přišla konečná faktura? Nahrajte ji. Systém ji automaticky spáruje s vítěznou nabídkou a zařve, pokud se cena o haléř liší.",
      span: "md:col-span-4 lg:col-span-3"
    }
  ];

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="md:col-span-4 lg:col-span-12 flex items-end pb-4 pt-12" id="funkce"
      >
        <h2 className="text-4xl font-black tracking-tighter">Jak to funguje</h2>
      </motion.div>

      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(20,184,166,0.15)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 }}
          className={`bento-card p-8 flex flex-col justify-between ${feature.span}`}
        >
          <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 shadow-inner">
            <feature.icon className="w-7 h-7 text-primary drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3 tracking-tight">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed font-medium">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
}

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Jak přesné je párování položek?",
      answer: "Naše AI modely jsou trénované na tisících stavebních a průmyslových ceníků. Dosahujeme více než 98% přesnosti při párování i u zcela odlišně pojmenovaných položek. U zbylých 2 % systém nabídne položky k ručnímu schválení."
    },
    {
      question: "Jaké formáty souborů podporujete?",
      answer: "TendrAI aktuálně podporuje PDF (včetně skenovaných dokumentů díky OCR), všechny běžné formáty Excelu (.xlsx, .xls, .csv) a Word dokumenty. Můžete nahrávat i kombinace různých formátů v jedné analýze."
    },
    {
      question: "Jsou moje data v bezpečí?",
      answer: "Ano, bezpečnost je pro nás prioritou. Data jsou šifrována (AES-256) během přenosu i uložení a jsou zpracovávána výhradně na serverech v EU, plně v souladu s GDPR. Po dokončení analýzy jsou všechny nahrávané soubory automaticky smazány."
    },
    {
      question: "Lze systém napojit na náš stávající ERP?",
      answer: "V rámci plánu Enterprise nabízíme plnohodnotné API pro integraci s vaším podnikovým systémem (SAP, Helios, Pohoda a další). Pro menší plány poskytujeme exporty do formátů, které lze snadno importovat."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="md:col-span-4 lg:col-span-12 bento-card p-8 md:p-12 mt-12 mb-12"
    >
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Často kladené dotazy</h2>
          <p className="text-muted-foreground font-medium text-lg">Máte další otázky? Napište nám na podpora@tendrai.cz a rádi vám je zodpovíme.</p>
        </div>

        <div className="md:col-span-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 bg-white/5 rounded-xl px-6 data-[state=open]:bg-white/10 transition-colors">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-medium leading-relaxed text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
}

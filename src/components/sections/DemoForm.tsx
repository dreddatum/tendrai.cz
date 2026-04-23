import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileText, FileSpreadsheet, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  company: z.string().min(2, "Zadejte prosím název firmy"),
  email: z.string().email("Zadejte platný pracovní e-mail"),
  phone: z.string().optional(),
});

export function DemoForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Děkujeme! Ozveme se do 24 hodin.", {
      description: "Vaše žádost o analýzu byla úspěšně odeslána.",
    });
    form.reset();
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      id="demo"
      className="md:col-span-4 lg:col-span-12 bento-card p-8 md:p-12 mt-12 flex flex-col lg:flex-row gap-12 items-start"
    >
      <div className="flex-1 lg:max-w-xl">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">
          Každý tendr bez AI vás stojí peníze. <br/>
          <span className="text-gradient">Zastavte to.</span>
        </h2>
        <p className="text-lg text-muted-foreground font-medium mb-8">
          Získejte vzorovou analýzu do 5 minut. Nahrajte alespoň 2 nabídky od různých dodavatelů. Výsledek přijde na váš e-mail — spolu s doporučením a výpočtem úspory.
        </p>
        
        <div className="space-y-6 mb-8 font-bold">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
            <p className="text-white">Přijímáme PDF ceníky i rozsáhlé Excel tabulky.</p>
          </div>
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
            <p className="text-white">Spárujeme položky nehledě na jejich rozdílné formátování.</p>
          </div>
        </div>
        
        <div className="p-5 bg-white/5 border border-white/10 rounded-xl text-sm text-muted-foreground font-medium">
          <strong className="text-white block mb-1">Zabezpečení:</strong> Vaše soubory jsou šifrované a smazány ihned po analýze. Nikdy je nesdílíme ani nepoužíváme k trénování AI.
        </div>
      </div>

      <motion.div
        whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
        className="flex-1 w-full bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-white uppercase tracking-wider text-xs">Název firmy *</FormLabel>
                  <FormControl>
                    <Input className="h-12 bg-white/5 border-white/10 focus-visible:ring-primary/50 text-white font-medium rounded-xl" placeholder="STAVOMARKET s.r.o." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-white uppercase tracking-wider text-xs">Pracovní e-mail *</FormLabel>
                  <FormControl>
                    <Input className="h-12 bg-white/5 border-white/10 focus-visible:ring-primary/50 text-white font-medium rounded-xl" placeholder="jan.novak@stavomarket.cz" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-white uppercase tracking-wider text-xs">Telefon (pro konzultaci výsledků)</FormLabel>
                  <FormControl>
                    <Input className="h-12 bg-white/5 border-white/10 focus-visible:ring-primary/50 text-white font-medium rounded-xl" placeholder="+420 123 456 789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="space-y-2">
              <label className="font-bold text-white uppercase tracking-wider text-xs">Nabídky od dodavatelů * <span className="text-muted-foreground normal-case font-medium">(PDF nebo Excel, min. 2)</span></label>
              <motion.div 
                whileHover={{ scale: 1.02, borderColor: "rgba(20,184,166,0.5)", backgroundColor: "rgba(20,184,166,0.05)" }}
                className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center transition-all cursor-pointer group"
              >
                <div className="flex justify-center gap-4 mb-4">
                  <FileText className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors drop-shadow-[0_0_5px_rgba(20,184,166,0)] group-hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]" />
                  <FileSpreadsheet className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors drop-shadow-[0_0_5px_rgba(20,184,166,0)] group-hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]" />
                </div>
                <p className="text-sm font-bold text-white mb-1">Vyberte soubory nebo přetáhněte sem</p>
                <p className="text-xs text-muted-foreground font-medium">max. 10 MB na soubor</p>
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button type="submit" size="lg" className="w-full text-lg h-14 rounded-xl font-bold shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] transition-shadow">
                Spočítat úsporu
              </Button>
            </motion.div>
          </form>
        </Form>
      </motion.div>
    </motion.div>
  );
}

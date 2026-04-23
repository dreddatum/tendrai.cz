import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/40 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20"
    >
      <div className="container mx-auto px-4 max-w-7xl flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-black font-sans tracking-tighter text-foreground group-hover:text-primary transition-colors">
              Tendr<span className="text-primary">AI</span>
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide uppercase text-muted-foreground">
          <a href="#funkce" className="transition-colors hover:text-white">Funkce</a>
          <a href="#bezpecnost" className="transition-colors hover:text-white">Bezpečnost</a>
          <a href="#cenik" className="transition-colors hover:text-white">Ceník</a>
          <a href="#demo" className="transition-colors hover:text-white">Demo</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="rounded-full px-6 font-bold shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] transition-shadow border border-primary/50">
              <a href="#demo">Zkušební analýza</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

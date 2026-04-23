import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 py-12 relative z-10 backdrop-blur-md">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-black font-sans tracking-tighter text-white">
                Tendr<span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-muted-foreground font-medium max-w-xs mb-4">
              Přestaňte přeplácet za materiál. AI vybere nejlevnější nabídku.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">Odkazy</h4>
            <ul className="space-y-3 text-sm font-medium text-muted-foreground">
              <li><a href="#funkce" className="hover:text-primary transition-colors">Funkce</a></li>
              <li><a href="#bezpecnost" className="hover:text-primary transition-colors">Bezpečnost</a></li>
              <li><a href="#cenik" className="hover:text-primary transition-colors">Ceník</a></li>
              <li><a href="#demo" className="hover:text-primary transition-colors">Demo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">Kontakt</h4>
            <ul className="space-y-3 text-sm font-medium text-muted-foreground">
              <li><a href="mailto:info@tendrai.cz" className="hover:text-primary transition-colors">info@tendrai.cz</a></li>
              <li>
                <a href="#" className="hover:text-primary transition-colors block mt-6 text-xs">Ochrana osobních údajů (GDPR)</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors block text-xs">Obchodní podmínky</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-sm font-bold text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4 uppercase tracking-wider">
          <p>© 2026 TendrAI. Všechna práva vyhrazena.</p>
          <p>Vyrobeno v ČR</p>
        </div>
      </div>
    </footer>
  );
}

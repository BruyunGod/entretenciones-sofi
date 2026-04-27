import { Sparkles, Instagram, Facebook, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img 
              src="/logo-sofi.png" 
              alt="Logo Entretenciones Sofi" 
              className="h-11 w-11 object-contain" 
              />
              <span className="text-xl font-extrabold">Entretenciones Sofi</span>
            </div>
            <p className="mt-4 text-sm text-background/70">Arriendo de juegos inflables para fiestas, cumpleaños, colegios, eventos corporativos y más.</p>
          </div>
          <div>
            <h4 className="mb-3 font-bold">Contacto</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Osorno, Chile</li>
              <li>+56 9 9682 5756 |
                +56 9 6262 4980
              </li>
              <li>sofijuegosinflables@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-bold">Síguenos</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/juegosinflables_sofi/" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full bg-background/10 transition-bounce hover:bg-secondary hover:-translate-y-1">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61588709104290" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full bg-background/10 transition-bounce hover:bg-primary hover:-translate-y-1">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-background/10 pt-6 text-center text-sm text-background/60">
          © 2026 Entretenciones Sofi. Diversión inflable garantizada.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

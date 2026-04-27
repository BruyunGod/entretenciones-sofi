import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/70 border-b border-border/50">
      <nav className="container flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img 
          src="/logo-sofi.png" 
          alt="Logo Entretenciones Sofi" 
          className="h-11 w-11 object-contain" 
          />
          <span className="text-xl font-extrabold tracking-tight">
            Entretenciones<span className="text-primary"> Sofi</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#catalogo" className="hover:text-primary transition-smooth">Catálogo</a>
          <a href="#categorias" className="hover:text-primary transition-smooth">Categorías</a>
          <a href="#confianza" className="hover:text-primary transition-smooth">Por qué nosotros</a>
        </div>
        <a 
  href="https://wa.me/56996825756?text=Hola%20Entretenciones%20Sofi!%20Quiero%20consultar%20por%20la%20disponibilidad%20de%20juegos%20para%20un%20evento." 
  target="_blank" 
  rel="noreferrer"
  className="hidden md:block"
>
  <Button variant="hero" size="default">
    Cotizar ahora
  </Button>
</a>
      </nav>
    </header>
  );
};

export default Navbar;

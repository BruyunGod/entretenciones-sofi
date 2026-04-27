import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-castle.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Decorative floating shapes */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-20 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent/40 blur-3xl" />

      <div className="container relative grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center lg:py-32">
        <div className="space-y-8 animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 text-sm font-semibold shadow-soft">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            +100 eventos felices este año
          </span>
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            ¡Diversión <span className="text-primary">Inflable</span>
            <br />
            para tu <span className="text-secondary">Evento o Cumpleaños!</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
            Castillos, toboganes, taca-taca y camas elasticas para hacer de cualquier celebración un recuerdo inolvidable. Reserva en minutos por WhatsApp.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#catalogo">
                Ver Catálogo <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#confianza">Cómo trabajamos</a>
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div>
              <div className="text-3xl font-black text-primary">7</div>
              <div className="text-sm text-muted-foreground">Modelos disponibles</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-3xl font-black text-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Atención WhatsApp</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-3xl font-black text-foreground">5★</div>
              <div className="text-sm text-muted-foreground">+200 reseñas</div>
            </div>
          </div>
        </div>

        <div className="relative animate-pop-in">
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-warm rotate-3 scale-95" />
          <div className="relative overflow-hidden rounded-[3rem] bg-white shadow-bouncy h-[800px] md:h-[500px]">
            <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="h-full w-full object-cover"
            >
            <source src="/img/video-hero.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          </div>
          {/* Floating tags */}
          <div className="absolute -left-4 top-12 rounded-2xl bg-white px-4 py-3 shadow-card animate-float">
            <div className="text-xs text-muted-foreground">Desde</div>
            <div className="text-xl font-black text-primary">$25.000</div>
          </div>
          <div className="absolute -right-4 bottom-12 rounded-2xl bg-accent px-4 py-3 shadow-card animate-bounce-soft">
            <div className="text-sm font-bold">¡Entrega gratis dentro de Osorno y Fuera de Osorno con Costo Adicional!</div>
            <div className="text-xs">en La Region de los Lagos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

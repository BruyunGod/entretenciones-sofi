import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Ruler, Users } from "lucide-react";
import castle from "@/assets/product-castle.jpg";
import slide from "@/assets/product-slide.jpg";
import sports from "@/assets/product-sports.jpg";
import water from "@/assets/product-water.jpg";
import princess from "@/assets/product-princess.jpg";
import obstacle from "@/assets/product-obstacle.jpg";

type Category = "Todos" | "Castillos" | "Toboganes" | "Salón de Juegos" | "Camas Elasticas";

const categories: Category[] = ["Todos", "Castillos", "Toboganes", "Salón de Juegos", "Camas Elasticas"];

const products = [
  { name: "Castillo Royal", img: "/img/Castilloroyal.png", dims: "Alto: 2,5 m | Ancho: 3,5 m | Largo: 5 m", ages: "2-12 años", category: "Castillos", accent: "primary" },
  { name: "Tobogan Unilateral", img: "/img/toboganunilateral.png", dims: "Alto: 4 m | Ancho: 3 m | Largo: 5 m", ages: "5-15 años", category: "Toboganes", accent: "secondary" },
  { name: "Super Tobogan Doble", img: "/img/inflabledoble.png", dims: "Alto: 4 m | Ancho: 4,8 m | Largo: 5 m", ages: "8+ años", category: "Toboganes", accent: "primary" },
  { name: "Mega Tobogan Cuadrado Doble", img: "/img/Tobogan-Cuadrado-Doble.png", dims: "Alto 5 m | Ancho: 4 m | Largo: 6 m", ages: "3-10 años", category: "Toboganes", accent: "primary" },
  { name: "Cama Elastica Plus", img: "/img/camaelastica.png", dims: "Alto: 2,5 m | Ancho: 3,6 m", ages: "2-16 años", category: "Camas Elasticas", accent: "secondary" },
  { name: "Mesa de Air Hockey", img: "/img/mesa-hockey.png", dims: "Alto: 80 cm | Ancho: 1 m | Largo: 1.85 m", ages: "6+ años", category: "Salón de Juegos", accent: "accent" },
  { name: "Taca Taca", img: "/img/tacataca.png", dims: "Alto: 90 cm | Ancho: 75 cm | Largo: 1.5 m", ages: "6+ años", category: "Salón de Juegos", accent: "accent" },
];

const accentMap: Record<string, string> = {
  primary: "bg-primary/10",
  secondary: "bg-secondary/10",
  accent: "bg-accent/30",
};

const Catalog = () => {
  const [active, setActive] = useState<Category>("Todos");
  const filtered = active === "Todos" ? products : products.filter((p) => p.category === active);

  const waLink = (name: string) =>
    `https://wa.me/56996825756?text=${encodeURIComponent(`Hola! Me interesa arrendar el ${name}. ¿Está disponible?`)}`;

  return (
    <section id="catalogo" className="bg-gradient-sky py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-secondary/15 px-4 py-1 text-sm font-bold text-secondary">CATÁLOGO 2026</span>
          <h2 id="categorias" className="mt-4 text-4xl font-black md:text-5xl">Elige tu inflable favorito</h2>
          <p className="mt-3 text-muted-foreground">Filtra por categoría y consulta disponibilidad al instante.</p>
        </div>

        {/* Category filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-6 py-3 text-sm font-bold transition-bounce active:scale-95 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-bouncy -translate-y-0.5"
                  : "bg-card text-foreground shadow-soft hover:-translate-y-0.5 hover:bg-card/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, idx) => (
            <article
              key={p.name}
              className="group flex flex-col rounded-[2rem] bg-card p-5 shadow-card transition-bounce hover:-translate-y-2 hover:shadow-bouncy"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className={`mb-5 overflow-hidden rounded-3xl ${accentMap[p.accent]}`}>
                <img
                  src={p.img}
                  alt={p.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="aspect-square w-full object-contain transition-bounce group-hover:scale-110 group-hover:rotate-2"
                />
              </div>
              <div className="mb-4 flex-1 space-y-3 px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{p.category}</span>
                <h3 className="text-xl font-extrabold leading-tight">{p.name}</h3>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1">
                    <Ruler className="h-3.5 w-3.5" /> {p.dims}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1">
                    <Users className="h-3.5 w-3.5" /> {p.ages}
                  </span>
                </div>
              </div>
              <Button variant="whatsapp" size="lg" className="w-full" asChild>
                <a href={waLink(p.name)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> Consultar por WhatsApp
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default Catalog;

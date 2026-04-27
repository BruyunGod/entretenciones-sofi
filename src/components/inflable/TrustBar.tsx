import { Sparkles, ShieldCheck, Clock, Truck } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Limpieza Garantizada", desc: "Desinfección antes de cada evento" },
  { icon: ShieldCheck, title: "Instalación Segura", desc: "Equipo profesional certificado" },
  { icon: Clock, title: "Puntualidad", desc: "Entregamos cuando lo prometemos" },
  { icon: Truck, title: "Envío incluido", desc: "Cobertura en toda la región" },
];

const TrustBar = () => {
  return (
    <section id="confianza" className="container py-16 md:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-black md:text-4xl">Por qué cientos confían en nosotros</h2>
        <p className="mt-3 text-muted-foreground">Un servicio cuidado en cada detalle, para que solo te preocupes de disfrutar.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            className="group rounded-3xl bg-card p-8 text-center shadow-card transition-bounce hover:-translate-y-2 hover:shadow-bouncy"
          >
            <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl transition-bounce group-hover:rotate-6 ${
              i % 3 === 0 ? "bg-primary/15 text-primary" : i % 3 === 1 ? "bg-secondary/15 text-secondary" : "bg-accent/30 text-accent-foreground"
            }`}>
              <Icon className="h-8 w-8" />
            </div>
            <h3 className="mb-1 text-lg font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;

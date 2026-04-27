import { WhatsAppIcon } from "./Catalog";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/56996825756?text=Hola!%20Quiero%20cotizar%20un%20inflable"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp/40 animate-ping" />
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-float animate-bounce-soft transition-bounce group-hover:scale-110">
        <WhatsAppIcon className="h-8 w-8" />
      </span>
      <span className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background opacity-0 shadow-soft transition-smooth group-hover:opacity-100">
        ¡Escríbenos!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;

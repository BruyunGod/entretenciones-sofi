import Navbar from "@/components/inflable/Navbar";
import Hero from "@/components/inflable/Hero";
import TrustBar from "@/components/inflable/TrustBar";
import Catalog from "@/components/inflable/Catalog";
import FloatingWhatsApp from "@/components/inflable/FloatingWhatsApp";
import Footer from "@/components/inflable/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Catalog />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;

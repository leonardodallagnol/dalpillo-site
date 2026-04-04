import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Catalog from "@/components/Catalog";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Catalog />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}

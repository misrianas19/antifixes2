import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030305] text-white selection:bg-neon-cyan selection:text-black">
      <Navbar />
      <Hero />
      <Industries />
      <ContactForm />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import CVSection from "@/components/cv/CVSection";
import Process from "@/components/process/Process";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090e] text-[#f8fafc] selection:bg-[#00f2fe] selection:text-[#07090e]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <CVSection />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}

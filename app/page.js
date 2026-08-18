import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience/>
      <Projects/>
      <Expertise/>
      <Contact/>
      <Footer/>
      <Chatbot/>
      
      {/* Temporary Sections */}
      <section id="about" />

      <section id="skills"/>

      <section id="experience"/>

      <section id="projects"/>

      <section id="contact" />
    </main>
  );
}
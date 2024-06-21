import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Tech from "@/components/Tech";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* <div className="opacity-80"></div> */}
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Projects />
      <div className="relative z-0"> 
        <Contact />
      </div>
    </main>
  );
}

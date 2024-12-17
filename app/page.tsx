import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
    </main>
  );
}

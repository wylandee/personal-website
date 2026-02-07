import Navbar from "@/components/navbar";
import Landing from "@/components/landing";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <section id="landing">
        <Landing />
      </section>

      <section id="about" className="section-light bg-background text-foreground">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects" className="section-light bg-background text-foreground">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>
    </main>
  );
}

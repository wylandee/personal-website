import Navbar from "@/components/navbar.tsx";
import Landing from "@/components/landing.tsx";
import About from "@/components/about.tsx";
import Experience from "@/components/experience.tsx";
import Projects from "@/components/projects.tsx";
import Skills from "@/components/skills.tsx";

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

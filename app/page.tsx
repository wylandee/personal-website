import Landing from "@/components/landing.tsx";
import About from "@/components/about.tsx";
import Experience from "@/components/experience.tsx";
import Projects from "@/components/projects.tsx";
import Skills from "@/components/skills.tsx";

export default function Home() {
  return (
    <main>
      <section id="landing">
        <Landing />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>
    </main>
  );
}

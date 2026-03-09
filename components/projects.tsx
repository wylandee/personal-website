import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="min-h-screen w-full pt-32 md:pt-40 pb-24">
      <div className="max-w-5xl mx-auto px-6 w-full">
        
        {/* Sleeker section header */}
          <h2 className="text-4xl font-bold tracking-tighter mb-16 uppercase text-blue-500">
            / Projects
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-card/20 border border-border/50 rounded-3xl p-8 hover:bg-card/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                    {project.category}
                  </span>
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                      <span className="text-xs font-mono">SOURCE ↗</span>
                    </a>
                  )}
                </div>
                
                <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono text-muted-foreground border border-border/50 px-2 py-0.5 rounded uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
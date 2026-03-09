import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="min-h-screen w-full pt-32 md:pt-40 pb-24">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <h2 className="text-4xl font-bold tracking-tighter mb-16 uppercase text-blue-500">
          / Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l border-border/50 group">
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-blue-500 transition-colors" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground/60 uppercase tracking-widest pt-1">
                  {exp.period}
                </span>
              </div>
              
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
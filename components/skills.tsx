export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C", "TypeScript", "JavaScript", "SQL"],
      className: "md:col-span-2",
    },
    {
      title: "Frameworks",
      skills: ["Next.js", "Node.js", "Gradle"],
      className: "md:col-span-1",
    },
    {
      title: "Tools",
      skills: ["Git", "PostgreSQL"],
      className: "md:col-span-1",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold tracking-tighter mb-16 uppercase text-blue-500">
        / Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className={`p-8 rounded-3xl border border-border/50 bg-card/20 hover:border-blue-500/50 transition-colors ${category.className}`}
          >
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-6">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 rounded-full bg-secondary/30 text-foreground text-sm font-medium border border-border/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
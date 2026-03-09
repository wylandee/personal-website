export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C", "Javascript", "TypeScript", "SQL","Lua"],
      className: "md:col-span-2",
    },
    {
      title: "Tools",
      skills: ["Git", "PostgreSQL", "Vercel", "Jupyter"],
      className: "md:col-span-1",
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "Next.js", 
        "React", 
        "Tailwind CSS", 
        "Node.js", 
        "Pandas", 
        "Scikit-Learn", 
        "Matplotlib", 
        "NumPy"
      ],
      className: "md:col-span-3", 
    },
  ];

  return (
    <section className="min-h-screen w-full pt-32 md:pt-40 pb-24">
      <div className="max-w-5xl mx-auto px-6 w-full">    
          <h2 className="text-4xl font-serif tracking-tighter mb-16 uppercase text-blue-500">
            Skills
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-3xl border border-border/50 bg-card/20 hover:border-blue-500/50 transition-colors flex flex-col ${category.className}`}
            >
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 mt-auto">
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
    </section>
  );
}
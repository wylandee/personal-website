"use client";

import { motion } from "framer-motion";

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

  // 1. Container variants for staggered card entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Distinct gap between each category appearing
        delayChildren: 0.2,
      },
    },
  };

  // 2. Item variants for each skill card
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5, // Matches the "slow" cinematic duration of previous sections
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="min-h-screen w-full pt-32 md:pt-40 pb-24" id="skills">
      <div className="max-w-5xl mx-auto px-6 w-full">    
        {/* Unified animated header */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-6xl font-serif tracking-tighter mb-16 text-blue-500"
        >
          Skills
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.5)" }} // Subtle hover lift
              className={`p-8 rounded-3xl border border-border/50 bg-card/20 transition-colors flex flex-col ${category.className}`}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
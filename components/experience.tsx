"use client";

import { experiences } from "@/data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="min-h-screen w-full pt-32 md:pt-40 pb-24" id="experience">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-6xl font-serif tracking-tighter mb-16 text-blue-500"
        >
          Experience
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative pl-8 border-l border-border/50 group"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.4, duration: 0.5 }}
                className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-blue-500 transition-colors" 
              />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-2xl font-serif text-foreground">{exp.role}</h3>
                  <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm font-mono text-muted-foreground/60 uppercase tracking-widest pt-1">
                  {exp.period}
                </span>
              </div>
              
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
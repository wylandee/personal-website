"use client";

import { useCallback } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { projects } from "@/data/projects";

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const fadeInVariants : Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="min-h-screen w-full pt-32 md:pt-40 pb-24 overflow-hidden" id="projects">
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
        className="max-w-5xl mx-auto px-6 w-full mb-12"
      >
        <h2 className="text-5xl md:text-6xl font-serif tracking-tighter text-blue-500">
          Projects
        </h2>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
        transition={{ delay: 0.3 }}
        className="relative w-full group/carousel"
      >
        
        <button 
          onClick={scrollPrev}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-background/80 backdrop-blur-md border border-border text-foreground hover:bg-secondary hover:text-blue-500 transition-all hidden md:flex opacity-0 group-hover/carousel:opacity-100"
          aria-label="Previous project"
        >
          ←
        </button>

        <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6 py-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="flex-[0_0_85vw] md:flex-[0_0_28rem] lg:flex-[0_0_32rem] min-w-0 pl-6"
              >
                <div className="group h-full relative bg-card/20 border border-border/50 rounded-3xl p-6 md:p-8 hover:bg-card/40 transition-all duration-300 flex flex-col justify-between min-h-[320px]">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-xs font-mono text-blue-400 uppercase tracking-widest px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                        {project.category}
                      </span>
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                          <span className="text-xs font-mono">SOURCE ↗</span>
                        </a>
                      )}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>

                    {project.image && (
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-border/50 bg-muted">
                        {project.isMobile ? (
                          <>
                            <Image
                              src={project.image}
                              alt=""
                              fill
                              className="object-cover blur-2xl opacity-20 scale-110"
                            />
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-contain p-2 transition-transform duration-[1200ms] group-hover:scale-105"
                              sizes="(max-w-768px) 85vw, 32rem"
                            />
                          </>
                        ) : (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                            sizes="(max-w-768px) 85vw, 32rem"
                          />
                        )}
                      </div>
                    )}
                    
                    <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono text-muted-foreground border border-border/50 px-2 py-1 rounded-full uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={scrollNext}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-background/80 backdrop-blur-md border border-border text-foreground hover:bg-secondary hover:text-blue-500 transition-all hidden md:flex opacity-0 group-hover/carousel:opacity-100"
          aria-label="Next project"
        >
          →
        </button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-center md:hidden text-xs text-muted-foreground font-mono uppercase tracking-widest mt-4"
      >
        ← Swipe to view more →
      </motion.div>

    </section>
  );
}
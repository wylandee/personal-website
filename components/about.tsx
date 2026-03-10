"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.4,
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 40 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      transition: { 
        duration: 2,
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <section className="min-h-screen w-full pt-32 md:pt-40 pb-24" id="about">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-serif tracking-tighter mb-16 text-blue-500"
        >
          About
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-serif tracking-tighter text-foreground"
            >
              Hello! I&apos;m Dylan.
            </motion.h3>
            
            <motion.div 
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed space-y-4"
            >
              <p>
                I&apos;m a Year 2 Computer Science student currently studying at the National University of Singapore.
              </p>
              <p>
                I&apos;m passionate about building all sorts of things, always looking for ways to automate my life and be more efficient. Currently, I&apos;m learning and exploring more into Machine Learning and Exploratory Data Analysis!
              </p>
              <p>
                I&apos;m always happy to have a conversation. Let&apos;s connect!
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/50 bg-muted z-10">
              <Image
                src="/me.JPG"
                alt="Dylan Wee"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 0, y: 0 }}
              whileInView={{ opacity: 1, x: 24, y: -24 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -z-0 top-0 right-0 w-full h-full border-2 border-blue-500/20 rounded-2xl md:block hidden" 
            />
            <motion.div 
              initial={{ opacity: 0, x: 0, y: 0 }}
              whileInView={{ opacity: 1, x: -24, y: 24 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 1 }}
              className="absolute -z-0 bottom-0 left-0 w-full h-full border-2 border-border/40 rounded-2xl md:block hidden" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
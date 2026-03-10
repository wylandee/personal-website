"use client";

import { motion, useSpring, useMotionValue, useTransform, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function Landing() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const nameChars = "Dylan Wee".split("");

  const nameContainer : Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 },
    },
  };

  const charItem : Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 overflow-hidden" 
      id="landing"
    >
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
        }}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] z-0"
      />

      <div className="relative z-10 max-w-4xl text-center space-y-8">
        
        <motion.h1
          variants={nameContainer}
          initial="hidden"
          animate="visible"
          className="text-7xl md:text-9xl font-serif italic tracking-tighter flex justify-center gap-[0.02em]"
        >
          {nameChars.map((char, i) => (
            <motion.span key={i} variants={charItem} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Computer Science @ NUS
        </motion.p>

        <div className="pt-8 flex justify-center gap-12 text-sm font-mono text-muted-foreground">
          {[
            { label: "LINKEDIN", href: "https://linkedin.com/in/dylan-wee-lee-hon" },
            { label: "GITHUB", href: "https://github.com/wylandee" },
            { label: "RESUME", href: "/resume.pdf" },
            { label: "EMAIL", href: "mailto:mixedberries92@gmail.com" }
          ].map((link, i) => (
            <MagneticLink key={link.label} href={link.href} delay={1.8 + i * 0.1}>
              {link.label}
            </MagneticLink>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground/50 uppercase">Explore</span>
        <motion.div 
          animate={{ height: [0, 48, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-blue-500"
        />
      </motion.div>
    </section>
  );
}

function MagneticLink({ children, href, delay }: { children: React.ReactNode, href: string, delay: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set(clientX - centerX);
    y.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block hover:text-foreground transition-colors p-4 -m-4"
    >
      {children}
    </motion.a>
  );
}
"use client";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed bottom-8 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div className="flex items-center gap-6 px-8 py-4 rounded-full border border-border/30 bg-background/70 backdrop-blur-xl shadow-2xl pointer-events-auto animate-in slide-in-from-bottom-10 duration-[1500ms] fade-in">
        
        <a 
          href="#landing" 
          onClick={(e) => handleScroll(e, "#landing")}
          className="text-xl font-serif italic hover:text-blue-500 transition-colors mr-2"
        >
          Dylan
        </a>
        
        <div className="flex gap-6 items-center border-l border-border/50 pl-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
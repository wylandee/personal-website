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
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center p-6">
      <div className="flex items-center gap-6 px-6 py-3 rounded-full border border-border/40 bg-background/60 backdrop-blur-xl shadow-2xl">
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, "#home")}
          className="text-sm font-bold tracking-tighter hover:text-blue-500 transition-colors mr-4"
        >
          DW.
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
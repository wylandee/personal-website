export default function Landing() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6">
            <div className="max-w-4xl text-center space-y-6">
                {/* The Name: Bold and Tracking-Tighter for a modern look */}
                <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    Dylan Wee
                </h1>

                {/* The Description: Muted colors to let the name pop */}
                <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    Computer Science @ NUS
                </p>

                {/* Subtle Socials/Contact (Optional but recommended) */}
                <div className="pt-8 flex justify-center gap-8 text-sm font-mono text-muted-foreground animate-in fade-in duration-1000 delay-500">
                    <a href="#" className="hover:text-foreground transition-colors">LINKEDIN</a>
                    <a href="#" className="hover:text-foreground transition-colors">GITHUB</a>
                    <a href="mailto:hello@example.com" className="hover:text-foreground transition-colors">EMAIL</a>
                </div>
            </div>
        </section>
    )
}
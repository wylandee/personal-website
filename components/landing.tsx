export default function Landing() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6" id="landing">
            <div className="max-w-4xl text-center space-y-6">
                
                <h1 className="text-7xl md:text-9xl font-serif tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    Dylan Wee
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    Computer Science @ NUS
                </p>

                <div className="pt-8 flex justify-center gap-8 text-sm font-mono text-muted-foreground animate-in fade-in duration-1000 delay-500">
                    <a href="https://linkedin.com/in/dylan-wee-lee-hon" className="hover:text-foreground transition-colors">LINKEDIN</a>
                    <a href="https://github.com/wylandee" className="hover:text-foreground transition-colors">GITHUB</a>
                    <a href="mailto:mixedberries92@gmail.com" className="hover:text-foreground transition-colors">EMAIL</a>
                </div>
            </div>
        </section>
    )
}
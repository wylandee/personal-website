import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen w-full pt-32 md:pt-40 pb-24">
      <div className="max-w-5xl mx-auto px-6 w-full">       
        <h2 className="text-5xl md:text-6xl font-serif tracking-tighter mb-16 text-blue-500">
          About
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            
            {/* Bigger, bolder, and different greeting */}
            <h3 className="text-5xl md:text-6xl font-serif tracking-tighter text-foreground">
              Hello! I'm Dylan.
            </h3>
            
            {/* Split paragraphs for better readability */}
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                I'm a Year 2 Computer Science student currently studying at the National University of Singapore. 
              </p>
              <p>
                I'm passionate about building all sorts of things, always looking for ways to automate my life and be more efficient. Currently, I'm learning and exploring more into Machine Learning and Exploratory Data Analysis!
              </p>
              <p>
                I'm always happy to have a conversation. Let's connect!
              </p>
            </div>
          </div>

          <div className="relative group">
            {/* Added a subtle scale effect on hover to the image */}
            <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/50 bg-muted z-10">
              <Image
                src="/me.JPG"
                alt="Dylan Wee"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            
            {/* Enhanced decorative borders that react to hover */}
            <div className="absolute -z-0 top-6 -right-6 w-full h-full border-2 border-blue-500/20 rounded-2xl md:block hidden transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
            <div className="absolute -z-0 -bottom-6 -left-6 w-full h-full border-2 border-border/40 rounded-2xl md:block hidden transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
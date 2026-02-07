import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold tracking-tighter mb-12 uppercase text-blue-500">
        / About Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Hello! I'm Dylan, a Year 2 Computer Science student currently studying at the National University of Singapore. I'm passionate in building all sorts of things, always looking for ways to automate my life and be more efficient! Currently, I'm learning and exploring more into Machine Learning and Exploratory Data Analysis! 
          </p>
        </div>

        <div className="relative group">
          <div className="relative aspect-square md:aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/50 bg-muted">
            <Image
              src="/me.JPG"
              alt="Dylan Wee"
              fill
              className="object-cover transition-transform duration-500"
              priority
            />
          </div>
          <div className="absolute -z-10 top-4 -right-4 w-full h-full border border-blue-500/20 rounded-2xl md:block hidden" />
          <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full border border-border/40 rounded-2xl md:block hidden" />
        </div>
      </div>
    </div>
  );
}
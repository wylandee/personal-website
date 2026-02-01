export default function About() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold tracking-tighter mb-12 uppercase text-blue-500">
        / About Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nec dui et lacinia. Praesent dignissim, ex at vulputate dictum, magna purus mattis purus, a sollicitudin risus turpis at leo. Sed consectetur diam quis tellus commodo elementum. Donec feugiat quis velit at pretium. Integer efficitur erat eget nisl mattis, sed vestibulum nulla luctus. Etiam ut imperdiet nisl. Suspendisse cursus feugiat rutrum. Praesent eu ante in nisl laoreet sagittis vitae non libero. Nulla vel tellus id turpis ullamcorper elementum. Quisque pellentesque nulla id pulvinar ornare. Nunc a ipsum sed nunc aliquam malesuada.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nec dui et lacinia. Praesent dignissim, ex at vulputate dictum, magna purus mattis purus, a sollicitudin risus turpis at leo. Sed consectetur diam quis tellus commodo elementum. Donec feugiat quis velit at pretium. Integer efficitur erat eget nisl mattis, sed vestibulum nulla luctus. Etiam ut imperdiet nisl. Suspendisse cursus feugiat rutrum. Praesent eu ante in nisl laoreet sagittis vitae non libero. Nulla vel tellus id turpis ullamcorper elementum. Quisque pellentesque nulla id pulvinar ornare. Nunc a ipsum sed nunc aliquam malesuada.
          </p>
        </div>

        <div className="bg-card/30 p-8 rounded-2xl border border-border/50 backdrop-blur-sm">
          <h3 className="text-sm font-mono text-muted-foreground uppercase mb-6 tracking-widest">
            Lorem Ipsum
          </h3>
          <ul className="space-y-4 font-medium">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              Lorem Ipsum
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              Lorem Ipsum
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              Lorem Ipsum
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
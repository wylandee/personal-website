export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  skills?: string[]; // Optional: show what you used during this time
}

export const experiences: ExperienceItem[] = [
  {
    role: "Lorem Ipsum",
    company: "Lorem Ipsum",
    period: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nec dui et lacinia. Praesent dignissim, ex at vulputate dictum, magna purus mattis purus, a sollicitudin risus turpis at leo. Sed consectetur diam quis tellus commodo elementum. Donec feugiat quis velit at pretium. Integer efficitur erat eget nisl mattis, sed vestibulum nulla luctus. Etiam ut imperdiet nisl. Suspendisse cursus feugiat rutrum. Praesent eu ante in nisl laoreet sagittis vitae non libero. Nulla vel tellus id turpis ullamcorper elementum. Quisque pellentesque nulla id pulvinar ornare. Nunc a ipsum sed nunc aliquam malesuada.",
    skills: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]
  },
  {
    role: "Lorem Ipsum",
    company: "Lorem Ipsum",
    period: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nec dui et lacinia. Praesent dignissim, ex at vulputate dictum, magna purus mattis purus, a sollicitudin risus turpis at leo. Sed consectetur diam quis tellus commodo elementum. Donec feugiat quis velit at pretium. Integer efficitur erat eget nisl mattis, sed vestibulum nulla luctus. Etiam ut imperdiet nisl. Suspendisse cursus feugiat rutrum. Praesent eu ante in nisl laoreet sagittis vitae non libero. Nulla vel tellus id turpis ullamcorper elementum. Quisque pellentesque nulla id pulvinar ornare. Nunc a ipsum sed nunc aliquam malesuada.",
  },
  {
    role: "Lorem Ipsum",
    company: "Lorem Ipsum",
    period: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit nec dui et lacinia. Praesent dignissim, ex at vulputate dictum, magna purus mattis purus, a sollicitudin risus turpis at leo. Sed consectetur diam quis tellus commodo elementum. Donec feugiat quis velit at pretium. Integer efficitur erat eget nisl mattis, sed vestibulum nulla luctus. Etiam ut imperdiet nisl. Suspendisse cursus feugiat rutrum. Praesent eu ante in nisl laoreet sagittis vitae non libero. Nulla vel tellus id turpis ullamcorper elementum. Quisque pellentesque nulla id pulvinar ornare. Nunc a ipsum sed nunc aliquam malesuada.",
    skills: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"]
  }
];
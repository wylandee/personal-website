// src/data/projects.ts

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
  category: 'Software' | 'Machine Learning' | 'Lorem Ipsum';
}

export const projects: Project[] = [
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    techStack: ["Lorem Ipsum"],
    githubLink: "Lorem Ipsum",
    category: "Lorem Ipsum"
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    techStack: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    githubLink: "Lorem Ipsum",
    category: "Lorem Ipsum"
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    techStack: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    category: "Lorem Ipsum"
  },
  {
    title: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    techStack: ["Lorem Ipsum", "Lorem Ipsum"],
    githubLink: "Lorem Ipsum",
    category: "Lorem Ipsum"
  }
];
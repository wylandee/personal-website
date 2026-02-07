// src/data/projects.ts

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
  category: 'Webapp' | 'Machine Learning' | 'Software';
}

export const projects: Project[] = [
  {
    title: "Freepple",
    description: "An escrow web app built on the XRP Ledger, allowing freelancers to safely accept jobs and clients to engage freelancers without worrying about being scammed. Built for NUS Fintech Summit 2026.",
    techStack: ["React", "Node.js", "Javascript", "XRP Ledger"],
    githubLink: "https://github.com/wylandee/nus-fintech-summit-2026.git",
    category: "Webapp"
  },
  {
    title: "GymeRHbot",
    description: "Telegram bot to monitor the number of users in the Raffles Hall gym, notifies users when capacity is low and provides useful analytics.",
    techStack: ["Python", "python-telegram-bot", "Matplotlib", "SQL"],
    githubLink: "https://github.com/wylandee/gymeRHbot.git",
    category: "Software"
  },
  {
    title: "Exploring Machine Learning",
    description: "A bunch of random traditional machine learning projects. Using linear regression, logistic regression, decision trees and random forests to analyse different datasets from Kaggle.",
    techStack: ["Python", "sklearn", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    githubLink: "https://github.com/wylandee/credit-risk-deafult-random-forest.git",
    category: "Machine Learning"
  },
  {
    title: "Help Me Focus",
    description: "Fun little Chrome extension to help low attention-span individuals focus better by playing a gamplay video on the side.",
    techStack: ["Javascript", "Chrome Extension"],
    githubLink: "https://github.com/wylandee/help-me-focus.git",
    category: "Software"
  }
];
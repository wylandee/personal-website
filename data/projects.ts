export interface Project {
  title: string;
  description: string;
  techStack: string[];
  isMobile: boolean;
  githubLink?: string;
  liveLink?: string;
  image?: string;
  category: 'Webapp' | 'Machine Learning' | 'Software' | 'Telegram Bot' | 'Google Extension';
}

export const projects: Project[] = [
  {
    title: "Kratosk-AI",
    description: "Data processing pipeline to OCR historical colonial documents to transcribe them into digital text. Deployed a website to better index these files, along with a RAG-powered chatbot for fast retrieval of document information supported by secondary references. Built for Singapore AI + History Hackathon 2026.",
    techStack: ["Google Cloud", "VertexAI API", "Python", "Docker", "sklearn", "Streamlit"],
    isMobile: false,
    githubLink: "https://github.com/wylandee/history-hackathon.git",
    image: "/kratoskai.png", 
    category: "Webapp"
  },
  {
    title: "Freepple",
    description: "An escrow web app built on the XRP Ledger, allowing freelancers to safely accept jobs and clients to engage freelancers without worrying about being scammed. Built for NUS Fintech Summit 2026.",
    techStack: ["React", "Node.js", "Javascript", "XRP Ledger"],
    isMobile: false,
    githubLink: "https://github.com/wylandee/nus-fintech-summit-2026.git",
    image: "/freepple.png", 
    category: "Webapp"
  },
  {
    title: "Rollcall",
    description: "A local address book app built using Java which allows tuition centre admins to handle daily administrative tasks. Built for CS2103T, Introduction to Software Engineering.",
    techStack: ["Java", "JavaFX", "Gradle", "JUnit", "Github Actions"],
    isMobile: true,
    githubLink: "https://github.com/AY2526S1-CS2103T-F14a-4/tp.git",
    image: "/rollcall.png", 
    category: "Software"
  },
  {
    title: "Freepple",
    description: "An escrow web app built on the XRP Ledger, allowing freelancers to safely accept jobs and clients to engage freelancers without worrying about being scammed. Built for NUS Fintech Summit 2026.",
    techStack: ["React", "Node.js", "Javascript", "XRP Ledger"],
    isMobile: false,
    githubLink: "https://github.com/wylandee/nus-fintech-summit-2026.git",
    image: "/freepple.png", 
    category: "Webapp"
  },
  {
    title: "GymeRHbot",
    description: "Telegram bot to monitor the number of users in the Raffles Hall gym, notifies users when capacity is low and provides useful analytics.",
    techStack: ["Python", "python-telegram-bot", "Matplotlib", "SQL"],
    isMobile: false,
    githubLink: "https://github.com/wylandee/gymeRHbot.git",
    image: "/gymerhbot.png",
    category: "Telegram Bot"
  },
  {
    title: "Exploring Machine Learning",
    description: "A bunch of random traditional machine learning projects. Using linear regression, logistic regression, decision trees and random forests to analyse different datasets from Kaggle.",
    techStack: ["Python", "sklearn", "Pandas", "Numpy", "Matplotlib", "Seaborn"],
    isMobile: false,
    githubLink: "https://github.com/wylandee/credit-risk-deafult-random-forest.git",
    image: "/exploring_ml.png",
    category: "Machine Learning"
  },
  {
    title: "Help Me Focus",
    description: "Fun little Chrome extension to help low attention-span individuals focus better by playing a gamplay video on the side.",
    techStack: ["Javascript", "Chrome Extension"],
    isMobile: true,
    githubLink: "https://github.com/wylandee/help-me-focus.git",
    image: "/help_me_focus.png",
    category: "Google Extension"
  }
];
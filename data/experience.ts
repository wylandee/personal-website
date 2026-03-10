export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    company: "Defence Science and Technology Agency",
    period: "March 2024 - June 2024",
    description: "Developed a video generation tool using Python and OpenAI API which edits news report videos into bite-sized summaries for use in internal applications. Also worked on developing quests and resource management systems for a metaverse game on Roblox Studio.",
    skills: ["Python", "OpenAI API", "Lua", "Roblox Studio"]
  },
  {
    role: "Data Analyst Intern",
    company: "Ministry of Health",
    period: "January 2022 - March 2022",
    description: "Ran and troubleshot daily Python and R scripts to process raw Covid-19 vaccination data. Used Microsoft Word, Powerpoint and Tableau for data visualisation to be used to generate daily vaccination reports.",
    skills: ["Python", "R", "Tableau"]
  },
];
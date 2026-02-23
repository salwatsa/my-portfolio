// Define data structure for projects
export interface Project {
    title: string;
    desc: string;
    tags: string[];
    link?: string;
}

// Data Project
export const myProjects: Project[] = [
  {
    title: "Bicara.AI 2.0",
    desc: "An Android mobile application designed to assist users in preparing for the IELTS speaking test.",
    tags: ["Android Studio", "Kotlin", "XML"],
    link: "#",
  },
  {
    title: "GreeningHub",
    desc: "Information System website offers valuable resources on sustainability, helping individuals lead environmentally friendly lifestyles.",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap"],
    link: "#",
  },
  {
    title: "Bicara.AI",
    desc: "A web application aimed at improving English speaking skills.",
    tags: ["Ionic", "Javascript"],
    link: "#",
  },
];
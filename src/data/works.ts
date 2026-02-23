// Define data structure for works experience
export interface Works {
  date: string;
  title: string;
  company: string;
  description: string[];
  technologies: string[];
  link?: string;
}

// Data Experience Works
export const works: Works[] = [
  {
    date: "Jan 2025 - Apr 2025",
    title: "Frontend Developer",
    company: "Metranet",
    description: [
      "Implemented redesigned UI components for a B2B e-commerce platform using Next.js and Ant Design, including product carousels, based on UI/UX team specifications to enhance user experience.",
      "Built a dynamic CMS feature for the admin panel to manage homepage content and collaborated with backend developers for API integration.",
      "Integrated RESTful APIs to ensure accurate tax calculations across user/admin pages.",
    ],
    technologies: ["Next.js", "Ant Design", "JavaScript", "RESTful APIs"],
    link: "https://xooply.id/",
  },
  {
    date: "Sep 2024 - Dec 2024",
    title: "Frontend Developer Intern (MSIB)",
    company: "Metranet",
    description: [
      "Created dynamic data tables for the Vendor Management System using Next.js, implementing complex features like server-side sorting, filtering, and pagination.",
      "Built interactive forms with TypeScript that used conditional logic and strict type validation to ensure all submitted data was accurate.",
      "Developed main application pages, including the landing page, and worked closely with the backend team to integrate their APIs into the application.",
    ],
    technologies: ["Next.js", "Ant Design", "TypeScript", "RESTful APIs"],
    link: "#",
  },
];

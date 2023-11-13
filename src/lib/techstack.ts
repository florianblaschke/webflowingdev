export const techstack = [
  {
    tech: "Next.js",
    thumbnail: "next",
    url: "https://nextjs.org/",
  },
  { tech: "React", thumbnail: "react", url: "https://react.dev/" },
  {
    tech: "TypeScript",
    thumbnail: "ts",
    url: "https://www.typescriptlang.org/",
  },
  { tech: "Prisma", thumbnail: "prisma", url: "https://www.prisma.io/" },
  { tech: "Tailwind", thumbnail: "tailwind", url: "https://tailwindcss.com/" },
];

export const projects: {
  name: string;
  desc: string;
  site: string;
  repo: string;
}[] = [
  {
    name: "Beanerd",
    desc: "Exam-project for neuefische. For coffee enthusiasts which look for a simple way to save their brew recipes.",
    site: "https://capstone-project-beanerd.vercel.app/",
    repo: "https://github.com/florianblaschke/capstone-project-beanerd",
  },
  {
    name: "RepairDoc",
    desc: "An app for organizing repairs for professional Barista Equipment.",
    site: "https://repairdoc.vercel.app/",
    repo: "https://github.com/florianblaschke/repairdoc",
  },
  {
    name: "Breadit",
    desc: "A reddit clone from the course I took from Josh tried Coding.",
    site: "https://breadit-clone-eight.vercel.app/",
    repo: "https://github.com/florianblaschke/breadit-clone",
  },
];

export const courses: {
  id: number;
  academy: string;
  time: string;
  type: string;
  content: string[];
}[] = [
  {
    id: 1,
    academy: "neuefische",
    time: "2023",
    type: "6 month Bootcamp",
    content: [
      "HTML5",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "NoSQL",
      "REST",
      "Shell",
      "Git",
      "Tooling",
      "Agile Workflows",
      "PairProgramming",
    ],
  },
  {
    id: 2,
    academy: "Code With Mosh",
    time: "2023",
    type: "Online Course",
    content: ["Mastering Next.js 13 with TypeScript"],
  },
  {
    id: 3,
    academy: "Josh tried Coding",
    time: "2023",
    type: "Tutorial",
    content: ["Next.js 13", "React", "TypeScript", "ReactQuery", "redis"],
  },
  {
    id: 4,
    academy: "Code With Mosh",
    time: "2023",
    type: "Online Course",
    content: ["The Ultimate TypeScript Course"],
  },
  {
    id: 5,
    academy: "Code With Mosh",
    time: "2023",
    type: "Online Course",
    content: ["Next.js Projects: Build an Issue Tracker"],
  },
];

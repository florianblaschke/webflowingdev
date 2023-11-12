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

export const projects = [
  {
    name: "Beanerd",
    desc: "This was my exam project for 'neuefische'. It:&apos's an app for coffee enthusiasts which helps you recreating your favorite brews and discover new roasts.",
  },
  {
    name: "E-Commerce",
    desc: "A sample of an E-Commerce platform built with shopify",
  },
  {
    name: "Homepage",
    desc: "Your personal homepage! For your self, your company/restaurant! You name it!",
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
      "PairProgramming",
      "Node.js",
      "NoSQL",
      "REST",
      "Shell",
      "Git",
      "Tooling",
      "Agile Workflows",
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
    content: ["Next.js 14", "TypeScript", "React", "ReactQuery", "redis"],
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

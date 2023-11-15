export const techstack: {
  tech: string;
  thumbnail: string;
  url: string;
  title: string;
  desc: string;
}[] = [
  {
    tech: "Next.js",
    thumbnail: "next",
    url: "https://nextjs.org/",
    title: "The React Framework for the Web",
    desc: "Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features.",
  },
  {
    tech: "React",
    thumbnail: "react",
    url: "https://react.dev/",
    title: "The library for web and native user interfaces",
    desc: "Build user interfaces out of individual pieces called components. Create your own React components, then combine them into entire apps.",
  },
  {
    tech: "TypeScript",
    thumbnail: "ts",
    url: "https://www.typescriptlang.org/",
    title: "TypeScript is JavaScript with syntax for types.",
    desc: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
  },
  {
    tech: "Prisma",
    thumbnail: "prisma",
    url: "https://www.prisma.io/",
    title: "Next-generation Node.js and TypeScript ORM",
    desc: "Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model &type-safety.",
  },
  {
    tech: "Tailwind",
    thumbnail: "tailwind",
    url: "https://tailwindcss.com/",
    title: "Rapidly build modern websites without ever leaving your HTML.",
    desc: "A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.",
  },
];

export const projects: {
  name: string;
  desc: string;
  site: string;
  repo: string;
}[] = [
  {
    name: "Beanerd",
    desc: "Exam-project for neuefische. For coffee enthusiasts who look for a simple way to save their brew recipes.",
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
  {
    name: "My Homepage",
    desc: "What you see right now :)",
    site: "https://webdevflow.de",
    repo: "https://github.com/florianblaschke/webflowingdev",
  },
  /*   {
    name: "FakeTube",
    desc: "Built this for practice with tailwind.css",
    site: "https://faketube-drab.vercel.app/",
    repo: "https://github.com/florianblaschke/faketube",
  }, */
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

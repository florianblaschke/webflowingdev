import { projects } from "@/lib/techstack";
import { ExternalLink, GithubIcon } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="min-h-fit pb-10 flex flex-col items-center bg-black">
      <h3 className="p-10 text-5xl font-medium bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
        What I have built so far
      </h3>
      <ul className="p-10 flex flex-nowrap md:justify-center min-h-fit h-auto gap-2 overflow-x-scroll w-full scrollbar-hide overscroll-x-none">
        {projects.map((entry) => {
          return (
            <li key={entry.name} className="flex flex-col p-2 min-w-fit">
              <div className="flex justify-between">
                <h4 className=" text-green-100 text-2xl">{entry.name}</h4>
              </div>
              <p className=" text-green-100 max-w-[200px] h-24 text-sm">
                {entry.desc}
              </p>
              <div className="flex self-end">
                <span className=" text-green-100">
                  <Link href={entry.repo} target="_blank">
                    <GithubIcon size={22} />
                  </Link>
                </span>
                <span className=" text-green-100">
                  <Link href={entry.site} target="_blank">
                    <ExternalLink size={22} />
                  </Link>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

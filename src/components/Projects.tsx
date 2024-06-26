import { projects } from "@/lib/techstack";
import { ExternalLink, GithubIcon } from "lucide-react";

export default function Projects() {
  return (
    <section className="min-h-fit pb-10 flex flex-col items-center bg-black">
      <h3 className="p-10 text-5xl text-center font-medium bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
        What I have built so far
      </h3>
      <ul className="p-10 flex flex-nowrap md:justify-center min-h-fit h-auto gap-2 overflow-x-scroll w-full scrollbar-hide overscroll-x-none">
        {projects.map((entry) => {
          return (
            <li
              key={entry.name}
              className="flex flex-col p-2 min-w-[216px] max-w-[216px] min-h-[200px] justify-between"
            >
              <h4 className=" text-green-100 text-2xl">{entry.name}</h4>
              <p className=" text-green-100 max-w-[200px] h-24 text-sm">
                {entry.desc}
              </p>
              <div className="flex self-end">
                {entry.repo && (
                  <span className=" text-green-100">
                    <a href={entry.repo} target="_blank">
                      <GithubIcon size={22} />
                    </a>
                  </span>
                )}
                <span className=" text-green-100">
                  {entry.site && (
                    <a href={entry.site} target="_blank">
                      <ExternalLink size={22} />
                    </a>
                  )}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

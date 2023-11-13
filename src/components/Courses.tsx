import { courses } from "@/lib/techstack";
import { Button } from "./ui/Button";

const Tag = ({ text }: { text: string }) => {
  return (
    <span className="max-w-fit h-5 text-sm p-1 text-green-100 flex">
      {text}
    </span>
  );
};

export default function Courses() {
  return (
    <section className="min-h-fit pb-10 w-full flex flex-col items-center bg-black">
      <h3 className="p-10 text-5xl font-medium tracking-tighter bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
        Courses I took
      </h3>
      <ul className="p-10">
        <li className="grid grid-cols-3 md:grid-cols-4 first-of-type:text-xl first-of-type:pb-5">
          <h4 className="tracking-tighter text-green-100">where</h4>
          <span className="tracking-tighter text-green-100">when</span>
          <p className="tracking-tighter text-green-100">what</p>
          <p className="hidden md:block tracking-tighter text-green-100">
            contents
          </p>
        </li>
        {courses.map((entry) => (
          <li
            key={entry.id}
            className="grid grid-cols-3 md:grid-cols-4 max-h-fit"
          >
            <h4 className="tracking-tighter text-green-100">{entry.academy}</h4>
            <span className="tracking-tighter text-green-100">
              {entry.time}
            </span>
            <p className="tracking-tighter text-green-100">{entry.type}</p>
            <div className="hidden md:flex gap-1 box-border overflow-x-scroll scrollbar-hide">
              {entry.content.map((topic) => (
                <Tag key={topic} text={topic} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

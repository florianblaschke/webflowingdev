import { courses } from "@/lib/techstack";

export default function Courses() {
  return (
    <section className="min-h-fit pb-10 w-full flex flex-col items-center bg-black">
      <h3 className="p-10 text-5xl font-medium  bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
        Courses I took
      </h3>
      <ul className="p-10 flex md:justify-center max-h-fit gap-2 overflow-x-scroll w-full scrollbar-hide overscroll-x-none">
        {courses.map((entry) => {
          return (
            <li key={entry.id} className="p-2 min-w-fit ">
              <h4 className=" text-green-100">{entry.academy}</h4>
              <span className=" text-green-100">{entry.time}</span>
              <p className=" text-green-100">{entry.type}</p>
              <div className="flex flex-wrap gap-1 box-border min-w-fit pt-2 max-w-[200px]">
                {entry.content.map((topic) => (
                  <span key={topic} className="text-green-100 text-sm ">
                    {topic}
                  </span>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

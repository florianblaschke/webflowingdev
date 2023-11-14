import TechStackDesktop from "./TechStackDesktop";

export default function TechStack() {
  return (
    <section className="min-h-96 pb-20 flex flex-col justify-center items-center">
      <h3 className="p-10 text-5xl text-center font-medium bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
        What I specialize in
      </h3>
      {/* <div className="flex flex-col md:flex-row items-center justify-center mt-2 gap-2">
        {techstack.map((entry) => (
          <Link key={entry.tech} href={entry.url}>
            <TechCard logo={entry.thumbnail} />
          </Link>
        ))}
      </div> */}
      <TechStackDesktop />
    </section>
  );
}

export default function Greeting() {
  return (
    <section className="bg-black">
      <h1 className="px-10 pb-10 text-center tracking-tighter text-[2.5rem] md:text-9xl bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
        Frontend <br className="md:hidden" />
        and Fullstack <br className="hidden md:box" />
        Web Development
      </h1>
      <article className="h-96 flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
        <h2 className="text-xl font-normal text-center">
          Hi! I am Florian and I love coding and challenges ...and coffee!
        </h2>
        <p>
          So feel free to challenge me to build your dream Website or even a
          FullStack WebApp!
        </p>
      </article>
    </section>
  );
}

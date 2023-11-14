import TechStackDesktop from "./TechStackDesktop";
import TechStackMobile from "./TechStackMobile";

export default function TechStack() {
  return (
    <section className="min-h-96 pb-20 flex flex-col justify-center items-center">
      <h3 className="p-10 text-5xl text-center font-medium bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
        What I specialize in
      </h3>
      <TechStackMobile />
      <TechStackDesktop />
    </section>
  );
}

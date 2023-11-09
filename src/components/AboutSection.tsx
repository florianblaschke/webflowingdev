import profile from "@/app/public/profile.jpeg";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row gap-2 w-full items-center">
      <div className="rounded min-w-max">
        <Image
          priority
          src={profile}
          alt="Florian Blaschke"
          width={300}
          className="rounded"
        />
      </div>
      <article>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </article>
    </section>
  );
}

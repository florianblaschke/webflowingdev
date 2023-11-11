import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-end h-auto bg-black py-20">
      <div></div>
      <div className="flex justify-center items-center gap-2 w-full">
        <Link
          href={"https://www.linkedin.com/in/florian-blaschke-b3718928a/"}
          className="p-2"
        >
          <Linkedin color="rgb(220 252 231)" size={40} />
        </Link>
        <Link href={"https://www.github.com/florianblaschke"} className="p-2">
          <Github color="rgb(220 252 231)" size={40} />
        </Link>
      </div>
    </footer>
  );
}

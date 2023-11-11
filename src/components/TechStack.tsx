import { Card } from "@/components/ui/Card";
import { techstack } from "@/lib/techstack";
import Link from "next/link";
import Logo from "./Logo";

const TechCard = ({ logo }: { logo: string }) => {
  return (
    <Card className="w-48 h-36 flex flex-col items-center justify-evenly hover:scale-105 duration-75 bg-white">
      <Logo logo={logo} />
    </Card>
  );
};

export default function TechStack() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-2 gap-2">
      {techstack.map((entry) => (
        <Link key={entry.tech} href={entry.url}>
          <TechCard logo={entry.thumbnail} />
        </Link>
      ))}
    </div>
  );
}

"use client";

import { Card } from "@/components/ui/Card";
import { techstack } from "@/lib/techstack";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";

const TechCard = ({ logo }: { logo: string }) => {
  return (
    <Card className="w-48 h-36 flex flex-col items-center justify-evenly hover:scale-105 duration-75 ">
      <Logo logo={logo} />
    </Card>
  );
};

export default function TechStack() {
  return (
    <section className="min-h-96 pb-10 flex flex-col justify-center items-center">
      <h3 className="p-10 text-5xl text-center font-medium bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
        What I specialize in
      </h3>
      <div className="flex flex-col md:flex-row items-center justify-center mt-2 gap-2">
        {techstack.map((entry) => (
          <Link key={entry.tech} href={entry.url}>
            <TechCard logo={entry.thumbnail} />
          </Link>
        ))}
      </div>
    </section>
  );
}

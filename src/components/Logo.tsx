import ts from "@/app/public/typescriptlogo.svg";
import next from "@/app/public/nextjslogo.svg";
import prisma from "@/app/public/prismalogo.svg";
import tailwind from "@/app/public/tailwindlogo.svg";
import react from "@/app/public/reactlogo.svg";
import Image from "next/image";

export default function Logo({ logo }: { logo: string }) {
  if (logo === "ts")
    return <Image src={ts} width={100} height={100} alt="ts" />;
  if (logo === "next")
    return <Image src={next} width={100} height={100} alt="next" />;
  if (logo === "prisma")
    return <Image src={prisma} width={100} height={100} alt="prisma" />;
  if (logo === "tailwind")
    return <Image src={tailwind} width={100} height={100} alt="tailwind" />;
  if (logo === "react")
    return <Image src={react} width={100} height={100} alt="react" />;
}

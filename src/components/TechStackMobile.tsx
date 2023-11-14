import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { techstack } from "@/lib/techstack";
import { LucideExternalLink } from "lucide-react";
import Link from "next/link";

export default function TechStackMobile() {
  return (
    <Accordion type="single" collapsible className="w-full px-10 md:hidden">
      {techstack.map((entry, i) => (
        <AccordionItem value={`item-${i}`} key={entry.tech}>
          <AccordionTrigger className="text-green-100">
            {entry.tech}
          </AccordionTrigger>
          <AccordionContent className="text-green-100 h-fit flex flex-col ">
            <div className="text-sm font-medium leading-none text-green-100 pb-3">
              {entry.title}
            </div>
            <p className="text-sm leading-snug  text-green-100 pb-2">
              {entry.desc}
            </p>
            <Link
              href={entry.url}
              target="_blank"
              className="text-green-100 self-end flex items-center gap-1"
            >
              <LucideExternalLink size={18} />
            </Link>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

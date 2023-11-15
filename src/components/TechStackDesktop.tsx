"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/Navigation-menu";
import { ExternalLink } from "lucide-react";

import { techstack } from "@/lib/techstack";
import Link from "next/link";
import { Card } from "./ui/Card";
import Logo from "./Logo";
import React from "react";

export default function TechStackDesktop() {
  return (
    <NavigationMenu className="pt-10 hidden md:block">
      <NavigationMenuList className="flex flex-row items-center justify-center gap-1 md:flex-row">
        {techstack.map((entry) => (
          <NavigationMenuItem key={entry.tech}>
            <NavigationMenuTrigger className="bg-inherit border border-green-100 w-40 h-20 text-green-100 text-lg">
              {entry.tech}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 w-[832px] grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink className="flex justify-center items-center">
                    <TechCard logo={entry.thumbnail} />
                  </NavigationMenuLink>
                </li>
                <ListItem title="Introduction">{entry.title}</ListItem>
                <ListItem title="Description">{entry.desc}</ListItem>
                <ListItem title="Visit">
                  <Link
                    href={entry.url}
                    target="_blank"
                    className="flex justify-start items-center gap-1"
                  >
                    Visit their homepage to learn more{" "}
                    <ExternalLink size={20} />
                  </Link>
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export const ListItem = ({
  children,
  title,
}: {
  children: string | JSX.Element;
  title: string;
}) => {
  return (
    <li>
      <NavigationMenuLink>
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";

const TechCard = ({ logo }: { logo: string }) => {
  return (
    <Card className="w-48 h-36 flex flex-col items-center justify-evenly hover:scale-105 duration-75 ">
      <Logo logo={logo} />
    </Card>
  );
};

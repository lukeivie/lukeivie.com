import { ExternalLink } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import type { ImageMetadata } from "astro";

import { cn } from "@/utils";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";
import { Separator } from "./Separator";

import gilden from "public/images/projects/gilden.png";
import gifted from "public/images/projects/gifted.png";

interface Project {
  id: string;
  name: string;
  href: string;
  image: ImageMetadata;
  description: string;
}

const projects: Project[] = [
  {
    id: "p1",
    name: "Gilden",
    href: "https://playgilden.com",
    image: gilden,
    description:
      "A top-down medieval fantasy RPG I've been working on. It's 100% browser-based, written in Typescript using Phaser.js.",
  },
  {
    id: "p2",
    name: "Gifted",
    href: "https://getgifted.app",
    image: gifted,
    description:
      "An all-in-one gift management solution I built to make the holidays easier.",
  },
];

export const Projects = () => (
  <Section>
    <SectionHeader>Projects</SectionHeader>
    <ul className="flex flex-col gap-1">
      {projects.map(({ id, name, href, image, description }, i) => (
        <Fragment key={id}>
          <li>
            <a
              href={href}
              target="_blank"
              className={cn(
                "group",
                "flex flex-row items-center justify-between",
                "text-base",
                "rounded-lg p-4",
                "hover:bg-zinc-100",
                "dark:hover:bg-zinc-900"
              )}
            >
              <div className="flex gap-4">
                <img
                  src={image.src}
                  alt={name}
                  className="rounded-md w-12 h-12 bg-zinc-200 text-xs break-words shadow-lg border dark:border-zinc-700"
                />
                <div>
                  <h3 className="text-base font-medium">{name}</h3>
                  <p className="text-base text-zinc-500">{description}</p>
                </div>
              </div>
              <div className="p-4 text-zinc-600">
                <ExternalLink />
              </div>
            </a>
          </li>
          {!!projects[i + 1] && <Separator className="mx-4" />}
        </Fragment>
      ))}
    </ul>
  </Section>
);

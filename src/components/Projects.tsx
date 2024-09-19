import { ExternalLink } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import type { ImageMetadata } from "astro";

import { cn } from "@/utils";
import { Image } from "./Image";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";
import { Separator } from "./Separator";

import gildenDark from "public/images/projects/gilden/dark.png";
import gildenLight from "public/images/projects/gilden/light.png";
import giftedDark from "public/images/projects/gifted/dark.png";
import giftedLight from "public/images/projects/gifted/light.png";
import liDark from "public/images/projects/lukeivie-com/dark.png";
import liLight from "public/images/projects/lukeivie-com/light.png";
import { Badge } from "./Badge";

interface Project {
  id: number;
  name: string;
  href: string;
  image: { dark: ImageMetadata; light: ImageMetadata };
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Gilden",
    href: "https://playgilden.com",
    image: {
      dark: gildenDark,
      light: gildenLight,
    },
    description:
      "A top-down medieval fantasy RPG I've been working on in my spare time. It's written in Typescript using Phaser.js.",
  },
  {
    id: 2,
    name: "Gifted",
    href: "https://getgifted.app",
    image: {
      dark: giftedDark,
      light: giftedLight,
    },
    description:
      "An all-in-one gift management application I built to make the holidays easier. It's written in Typescript using Next.js.",
  },
  {
    id: 3,
    name: "Luke Ivie (.com)",
    href: "https://github.com/lukeivie/lukeivie.com",
    image: {
      dark: liDark,
      light: liLight,
    },
    description:
      "My personal website. Built with Astro & React, click to explore the code.",
  },
];

export const Projects = () => (
  <Section>
    <SectionHeader>Projects</SectionHeader>
    <ul className="flex flex-col gap-1">
      {projects.map(
        ({ id, name, href, image: { dark, light }, description }, i) => (
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
                  "dark:hover:bg-zinc-900 dark:active:bg-zinc-800"
                )}
              >
                <div className="flex gap-4">
                  <Image alt={name} dark={dark} light={light} />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3
                        className={cn(
                          "text-base font-medium",
                          "dark:group-hover:text-zinc-300 dark:group-active:text-zinc-200"
                        )}
                      >
                        {name}
                      </h3>
                      {id === 3 && <Badge>This Site</Badge>}
                    </div>
                    <p
                      className={cn(
                        "text-base text-zinc-500",
                        "dark:group-hover:text-zinc-400 dark:group-active:text-zinc-300"
                      )}
                    >
                      {description}
                    </p>
                  </div>
                </div>
                <div
                  className={cn(
                    "text-zinc-600 self-center",
                    "dark:group-hover:text-zinc-500 dark:group-active:text-zinc-400"
                  )}
                >
                  <ExternalLink />
                </div>
              </a>
            </li>
            {!!projects[i + 1] && <Separator className="mx-4" />}
          </Fragment>
        )
      )}
    </ul>
  </Section>
);

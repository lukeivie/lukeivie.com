import { cn } from "@/utils";
import { Section } from "./ui/Section";
import { Github, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SocialLink {
  id: string;
  href: string;
  label: string;
  icon: LucideIcon;
}

const links: SocialLink[] = [
  {
    id: "l1",
    href: "https://github.com/lukeivie",
    label: "GitHub profile (opens in new tab)",
    icon: Github,
  },
  {
    id: "l2",
    href: "https://linkedin.com/in/luke-ivie/",
    label: "LinkedIn profile (opens in new tab)",
    icon: Linkedin,
  },
  {
    id: "l3",
    href: "mailto:luke.ivie+inquiries@icloud.com",
    label: "Send an email",
    icon: Mail,
  },
];

export const SocialLinks = () => (
  <Section>
    <ul className="flex items-center gap-1 text-lg sm:text-xl -mt-3">
      {links.map(({ id, href, label, icon: Icon }) => (
        <li key={id}>
          <a
            target="_blank"
            href={href}
            aria-label={label}
            className={cn(
              "flex items-center gap-2 p-4 rounded-md",

              "bg-zinc-50 hover:bg-zinc-100 focus-visible:bg-zinc-100 active:bg-zinc-200",
              "text-zinc-700 hover:text-zinc-800 focus-visible:text-zinc-800 active:text-zinc-900",

              "dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:focus-visible:bg-zinc-900 dark:active:bg-zinc-800",
              "dark:text-zinc-400 dark:hover:text-zinc-300 dark:focus-visible:text-zinc-300 dark:active:text-zinc-200",
            )}
          >
            <Icon aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

import { cn } from "@/utils";
import { Section } from "./Section";
import { Github, Linkedin, Mail } from "lucide-react";

interface SocialLink {
  id: string;
  href: string;
  icon: any;
}

const links: SocialLink[] = [
  { id: "l1", href: "https://github.com/lukeivie", icon: Github },
  { id: "l2", href: "https://linkedin.com/in/luke-ivie/", icon: Linkedin },
  { id: "l3", href: "mailto:luke.ivie+inquiries@icloud.com", icon: Mail },
];

export const SocialLinks = () => (
  <Section>
    <ul className="flex items-center gap-1 text-lg sm:text-xl -mt-3">
      {links.map(({ id, href, icon: Icon }) => (
        <li key={id}>
          <a
            target="_blank"
            href={href}
            className={cn(
              "flex items-center gap-2 dark:opacity-75 p-4 rounded-md",
              "hover:bg-zinc-100",
              "text-zinc-700 hover:text-zinc-950",
              "dark:hover:bg-amber-200",
              "dark:text-amber-200 dark:hover:text-zinc-950"
            )}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

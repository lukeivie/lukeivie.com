import { cn } from "@/utils";
import type { ReactNode } from "react";

interface Props {
  href: string;
  children?: ReactNode;
}

export const Link = ({ href, children }: Props) => (
  <a href={href} target="_blank" className="relative inline-flex group">
    <span
      className={cn(
        "font-medium",
        "text-zinc-700 group-hover:text-zinc-900 group-active:text-amber-800",
        "dark:text-zinc-300 dark:group-hover:text-zinc-200 dark:group-active:text-zinc-100"
      )}
    >
      {children}
    </span>
    <span
      className={cn(
        "border-t-2 absolute bottom-0 rounded-full",
        "w-0 group-hover:w-full duration-200",
        "border-zinc-400",
        "dark:border-amber-200",
        "dark:opacity-75"
      )}
    />
  </a>
);

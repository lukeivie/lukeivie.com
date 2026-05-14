import { cn } from "@/utils";
import type { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"a"> {}

export const Link = ({ children, ...props }: Props) => (
  <a
    target="_blank"
    {...props}
    className="relative inline-flex group outline-offset-8"
  >
    <span
      className={cn(
        "font-medium",
        "text-zinc-700 group-hover:text-zinc-900 group-focus-visible:text-zinc-900 group-active:text-amber-800",

        "dark:text-zinc-300 dark:group-hover:text-zinc-100 dark:group-focus-visible:text-zinc-100 dark:group-active:text-zinc-50",
      )}
    >
      {children}
    </span>
    <span
      className={cn(
        "border-t-2 absolute bottom-0 rounded-full",
        "w-0 duration-200",
        "group-hover:w-full group-focus-visible:w-full",
        "border-zinc-400 group-active:border-zinc-600",
        "dark:border-amber-200 dark:group-active:border-amber-400",
        "dark:opacity-75",
      )}
    />
  </a>
);

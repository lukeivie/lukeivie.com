import { cn } from "@/utils";
import type { ComponentPropsWithoutRef } from "react";

export const SectionCard = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) => (
  <a
    target="_blank"
    {...props}
    className={cn(
      "group",
      "text-base",
      "rounded-lg p-4",
      "hover:bg-zinc-100 focus-visible:bg-zinc-100",
      "dark:hover:bg-zinc-900 dark:focus-visible:bg-zinc-900",
      className,
    )}
  >
    {children}
  </a>
);

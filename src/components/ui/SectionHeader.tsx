import { cn } from "@/utils";
import type { ComponentPropsWithoutRef } from "react";

export const SectionHeader = ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
  <h2 {...props} className={cn("text-lg sm:text-xl font-medium px-4")}>
    {children}
  </h2>
);

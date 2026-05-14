import { cn } from "@/utils";
import type { ComponentPropsWithoutRef } from "react";

export const Separator = ({ className, ...props }: ComponentPropsWithoutRef<"hr">) => (
  <hr
    {...props}
    className={cn("border-zinc-100 dark:border-zinc-900 border-b-2", className)}
  />
);

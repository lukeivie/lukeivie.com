import { cn } from "@/utils";
import type { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"span"> {
  color?: "success" | "info";
}

export const Badge = ({ children, color = "info", className, ...props }: Props) => (
  <span
    {...props}
    className={cn(
      "font-medium text-xs pl-1.5 pr-1.75 py-px rounded-full",
      {
        "bg-blue-100 text-blue-900": color === "info",
        "dark:bg-blue-700/40 dark:text-blue-300": color === "info",

        "bg-green-100 text-green-900": color === "success",
        "dark:bg-green-700/40 dark:text-green-300": color === "success",
      },
      className
    )}
  >
    {children}
  </span>
);

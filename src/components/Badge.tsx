import { cn } from "@/utils";
import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  color?: "success" | "info";
}

export const Badge = ({ children, color = "info" }: Props) => (
  <span
    className={cn(
      "font-medium text-xs pl-[6px] pr-[7px] py-[1px] rounded-full",
      {
        "bg-blue-100 text-blue-900": color === "info",
        "dark:bg-blue-700/40 dark:text-blue-300": color === "info",
        "bg-green-100 text-green-900": color === "success",
        "dark:bg-green-700/40 dark:text-green-300": color === "success",
      }
    )}
  >
    {children}
  </span>
);

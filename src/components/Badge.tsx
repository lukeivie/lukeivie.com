import { cn } from "@/utils";
import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Badge = ({ children }: Props) => (
  <span
    className={cn(
      "font-medium text-xs pl-[6px] pr-[7px] py-[1px] rounded-full",
      "bg-blue-100 text-blue-900",
      "dark:bg-blue-700/40 dark:text-blue-300"
    )}
  >
    {children}
  </span>
);

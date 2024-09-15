import { cn } from "@/utils";
import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const SectionHeader = ({ children }: Props) => (
  <h2 className={cn("text-lg sm:text-xl font-medium px-4")}>{children}</h2>
);

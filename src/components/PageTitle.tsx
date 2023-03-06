import { cn } from "@/utils";
import React, { ReactNode } from "react";

export default function PageTitle({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <h1
      className={cn("font-extrabold text-3xl md:text-4xl text-neutral-900 dark:text-white tracking-tight", className)}
    >
      {children}
    </h1>
  );
}

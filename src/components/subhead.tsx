import { cn } from "@/utils";
import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export default function Subhead({ className, children }: Props) {
  return (
    <p
      className={cn(
        "block text-lg mt-3 mb-6 md:mb-10 max-w-2xl text-white",
        className
      )}
    >
      {children}
    </p>
  );
}

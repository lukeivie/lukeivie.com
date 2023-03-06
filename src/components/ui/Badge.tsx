import { cn } from "@/utils";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Badge({ className, children, ...rest }: Props) {
  const badgeClasses = `inline-flex mr-3 mb-3 rounded-full px-3`;
  const colorClasses = `bg-black bg-indigo-100 border-2 border-indigo-500 text-indigo-900`;

  return (
    <span className={cn(badgeClasses, colorClasses, className)} {...rest}>
      {children}
    </span>
  );
}

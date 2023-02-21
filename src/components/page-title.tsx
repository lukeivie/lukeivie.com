import React, { ReactNode } from "react";

export default function PageTitle({ children }: { children: ReactNode }) {
  return <h1 className="font-extrabold text-3xl md:text-4xl text-neutral-900 dark:text-white">{children}</h1>;
}

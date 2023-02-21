import React, { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200">{children}</h1>;
}

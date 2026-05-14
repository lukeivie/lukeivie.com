import type { ComponentPropsWithoutRef } from "react";

export const Section = ({ children, ...props }: ComponentPropsWithoutRef<"section">) => (
  <section {...props} className="flex flex-col gap-4">
    {children}
  </section>
);

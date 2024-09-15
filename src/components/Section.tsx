import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Section = ({ children }: Props) => (
  <section className="flex flex-col gap-4">{children}</section>
);

import Meta from "./meta";
import { cn } from "@/utils";
import Header from "./header";
import { ReactNode } from "react";
import { satoshi } from "@/lib/font";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-white dark:bg-black">
        <div className={cn(satoshi.variable, "font-sans pt-6 pb-32 md:py-20 px-6")}>
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}

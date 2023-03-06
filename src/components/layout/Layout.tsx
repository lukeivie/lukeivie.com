import Meta from "../meta";
import { cn } from "@/utils";
import Header from "./Header";
import { ReactNode } from "react";
import { satoshi } from "@/lib/fonts";

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

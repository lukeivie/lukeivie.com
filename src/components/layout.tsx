import { ReactNode } from "react";

import Meta from "./meta";
import Header from "./header";
import { satoshi } from "@/lib/font";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-white dark:bg-black">
        <div className={`${satoshi.variable} font-sans pt-6 pb-32 md:py-20 px-6`}>
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}

import { ReactNode } from "react";
import localFont from "@next/font/local";

import Meta from "./meta";
import Header from "./header";

const satoshi = localFont({
  src: [
    {
      path: "../assets/fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../assets/fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Meta />
      <div className="h-screen bg-white dark:bg-black overflow-y-scroll">
        <div className={`${satoshi.variable} font-sans pt-6 pb-32 md:py-20 px-6`}>
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";

import Meta from "./meta";
import { Render } from ".";
import Header from "./header";
import Footer from "./footer";
import MobileFooter from "./mobile-footer";

import { useMenuItems } from "../hooks";

export default function Layout({ children }) {
  const [mounted, setMounted] = useState(false);
  const menuItems = useMenuItems();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Meta />
      <Render if={mounted}>
        <div>
          <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-black via-black to-gray-800/70 transition-colors duration-200 ease-linear bg-fixed">
            <Header menuItems={menuItems} />
            <main className="w-full h-full pb-16 lg:pt-0 lg:pb-0">
              {children}
            </main>
            <MobileFooter menuItems={menuItems} />
            <Footer />
          </div>
        </div>
      </Render>
    </>
  );
}

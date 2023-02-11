import React from "react";
import MobileMenuItem from "./mobile-menu-item";

export default function MobileFooter({ menuItems }) {
  return (
    <footer className="fixed bottom-0 lg:hidden bg-black border-t-2 border-gray-700 w-full flex p-2">
      {menuItems?.map((item) => (
        <MobileMenuItem key={item?.name} to={item?.pathname} icon={item?.icon}>
          {item?.name}
        </MobileMenuItem>
      ))}
    </footer>
  );
}

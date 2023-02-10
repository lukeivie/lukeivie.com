import React from "react";
import MobileMenuItem from "./mobile-menu-item";

export default function MobileFooter({ menuItems }) {
  return (
    <footer className="fixed bottom-0 lg:hidden text-white bg-black w-full flex">
      {menuItems?.map((item) => (
        <MobileMenuItem key={item?.name} to={item?.pathname} icon={item?.icon}>
          {item?.name}
        </MobileMenuItem>
      ))}
    </footer>
  );
}

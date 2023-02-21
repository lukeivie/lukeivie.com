import React from "react";
import { cn } from "@/utils";
import MenuItem from "./menu-item";
import { useMenuItems } from "@/hooks";

export default function Header() {
  const menuItems = useMenuItems();

  return (
    <header className="w-full fixed md:static bottom-0 inset-x-0 md:flex md:items-center md:justify-center z-50">
      <div
        className={cn(
          "md:hidden h-[5px] dark:h-[8px] backdrop-blur-sm",
          "bg-gradient-to-b from-white/0 to-white",
          "dark:bg-gradient-to-b dark:from-black/0 dark:to-black"
        )}
      />
      <nav className="flex items-center justify-center p-5 bg-white dark:bg-black">
        <ul className="w-full grid grid-cols-3 rounded-full p-1.5 gap-1 bg-neutral-100 dark:bg-slate-900/50">
          {menuItems.map((item) => (
            <li key={item.name} className="w-full">
              <MenuItem to={item.pathname}>{item.name}</MenuItem>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

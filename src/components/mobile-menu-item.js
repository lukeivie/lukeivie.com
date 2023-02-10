import React from "react";
import { cn } from "@utils";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MobileMenuItem({ children, icon, to }) {
  const router = useRouter();
  const active = router.pathname === to;

  return (
    <Link
      href={to}
      className="bg-black border-t-2 border-gray-700 group flex flex-col flex-grow justify-center items-center text-xl pt-3 pb-5"
    >
      {/* <FontAwesomeIcon
        icon={[active ? "fas" : "fal", icon]}
        className={`${
          active
            ? "text-indigo-400"
            : "text-gray-600 group-hover:text-indigo-400"
        } text-2xl mb-2`}
      /> */}
      <span
        className={cn("text-base border-b-2", {
          "text-white": active,
          "text-gray-600 group-hover:text-gray-400": !active,
          "border-white": active,
          "border-transparent": !active,
        })}
      >
        {children}
      </span>
      {/* <span
        className={cn("w-[6px] h-[6px] rounded-full mt-1", {
          "bg-white": active,
        })}
      /> */}
    </Link>
  );
}

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
      className={cn(
        "bg-black group flex flex-col flex-grow justify-center items-center rounded-m py-2 px-3 rounded-full",
        {
          "text-white": active,
          "text-gray-600 group-hover:text-gray-400": !active,
          "bg-indigo-600": active,
        }
      )}
    >
      {/* <FontAwesomeIcon
        icon={[active ? "fas" : "fal", icon]}
        className={`${
          active
            ? "text-indigo-400"
            : "text-gray-600 group-hover:text-indigo-400"
        } text-2xl mb-2`}
      /> */}
      <span>{children}</span>
      {/* <span
        className={cn("w-[6px] h-[6px] rounded-full mt-1", {
          "bg-white": active,
        })}
      /> */}
    </Link>
  );
}

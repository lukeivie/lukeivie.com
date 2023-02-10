import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuItem({ children, icon, to }) {
  const router = useRouter();

  const active =
    to !== "/" ? router.pathname.includes(to) : router.pathname === to;

  return (
    <Link
      href={to}
      className={classNames("text-xl border-b-2 mr-8 pb-1", {
        "border-white text-white": active,
        "text-gray-600 hover:text-gray-400 active:text-white border-transparent":
          !active,
        "hover:border-slate-700": !active,
      })}
    >
      {icon && (
        <FontAwesomeIcon
          icon={[active ? "fas" : "fal", icon]}
          className="mr-2 inline-block"
        />
      )}
      <span className="hidden lg:inline-flex">{children}</span>
    </Link>
  );
}

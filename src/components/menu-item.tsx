import Link from "next/link";
import { cn } from "@/utils";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  children: ReactNode;
  icon?: IconProp;
  to: string;
};

export default function MenuItem({ children, icon, to }: Props) {
  const router = useRouter();

  const active = to !== "/" ? router.pathname.includes(to) : router.pathname === to;

  return (
    <Link
      href={to}
      className={cn(
        "text-center block font-semibold text-base md:text-lg px-5 py-2 rounded-full transition-colors duration-200",
        {
          "text-white bg-neutral-900": active,
          "dark:text-white dark:bg-slate-800": active,
          "text-neutral-500 hover:text-neutral-800 active:text-neutral-900": !active,
          "dark:text-slate-500 dark:hover:text-slate-400 dark:active:text-white": !active,
        }
      )}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2 inline-block" />}
      <span>{children}</span>
    </Link>
  );
}

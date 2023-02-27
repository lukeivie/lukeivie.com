import React from "react";
import { cn } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/pro-regular-svg-icons";

type Props = {
  color: "warning";
  children: React.ReactNode;
};

export default function Alert({ color, children }: Props) {
  return (
    <div
      className={cn("px-4 pt-2 pb-3 rounded-lg font-normal leading-normal text-lg md:text-xl mb-5", {
        "bg-amber-50 text-amber-700": color === "warning",
        "dark:bg-amber-900/20 dark:text-amber-400 dark:border-[1.5px] dark:border-amber-600": color === "warning",
      })}
    >
      <span>
        <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2.5" />
      </span>
      <span>{children}</span>
    </div>
  );
}

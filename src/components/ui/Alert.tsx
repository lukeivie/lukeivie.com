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
      className={cn("px-4 pt-2 pb-3 rounded-lg font-medium leading-normal text-lg md:text-xl mb-5", {
        "bg-amber-50 text-amber-700": color === "warning",
      })}
    >
      <span>
        <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2.5" />
      </span>
      <span>{children}</span>
    </div>
  );
}

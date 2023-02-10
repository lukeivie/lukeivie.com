import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Badge({ children, ...rest }: Props) {
  const badgeClasses = `text-lg inline-flex mr-3 mb-3 rounded-full px-3`;
  const colorClasses = `bg-black bg-opacity-20 bg-indigo-600 border-2 border-indigo-700 text-indigo-200`;

  return (
    <span className={`${badgeClasses} ${colorClasses}`} {...rest}>
      {children}
    </span>
  );
}

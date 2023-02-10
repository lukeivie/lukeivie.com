import React from "react";
import Image from "next/image";

import normalLogo from "../../public/logo/normal.svg";

export default function logo({ width = 54, height = 40 }) {
  return (
    <span className="flex">
      <Image src={normalLogo} width={width} height={height} alt="Luke Ivie" />
    </span>
  );
}

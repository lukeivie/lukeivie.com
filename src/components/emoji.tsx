import React from "react";

export default function emoji({ symbol, label }: { symbol: string; label: string }) {
  return (
    <span role="img" aria-label={label} className="text-3xl">
      {symbol}
    </span>
  );
}

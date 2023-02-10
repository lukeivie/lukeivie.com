import React from "react";

export default function PageTitle({ children }) {
  return (
    <h1 className="text-2xl md:text-3xl text-center text-white font-bold mb-1">
      {children}
    </h1>
  );
}

import React from "react";

export default function Switch({ label, value, onChange }: { label: string; value: boolean; onChange: () => void }) {
  const toggleClasses =
    "w-14 h-8 flex items-center flex-shrink-0 p-1 bg-gray-300 rounded-full duration-300 ease-in-out";
  const toggleAfterClasses =
    "after:w-6 after:h-6 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6";

  return (
    <label className="flex justify-between items-center p-2 text-xl cursor-pointer">
      {label}
      <input type="checkbox" className="peer appearance-none" checked={value} onChange={onChange} />
      <span className={`${toggleClasses} ${toggleAfterClasses} peer-checked:bg-gray-700`}></span>
    </label>
  );
}

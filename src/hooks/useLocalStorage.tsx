import { useState, useEffect } from "react";

function getLocalStorageOrDefault(key: string, defaultValue: any) {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(key);
    if (!stored || stored === "undefined") {
      return defaultValue;
    }
    return JSON.parse(stored);
  }
}

export default function useLocalStorage(key: string, defaultValue: any) {
  const [value, setValue] = useState(getLocalStorageOrDefault(key, defaultValue));

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}

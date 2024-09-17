import { cn } from "@/utils";
import type { ImageMetadata } from "astro";
import type { CSSProperties } from "react";

interface Props {
  alt: string;
  className?: string;
  dark: ImageMetadata;
  light: ImageMetadata;
  style?: CSSProperties;
}

export const Image = ({ dark, light, alt, className, style }: Props) => {
  const baseClasses = cn(
    "rounded-md w-12 h-12 text-xs break-words shadow-lg",
    "border",
    "dark:border-zinc-800",
    className
  );

  const baseProps = { alt, style };

  return (
    <>
      <img
        {...baseProps}
        src={dark?.src}
        className={cn(baseClasses, "hidden dark:block")}
      />
      <img
        {...baseProps}
        src={light?.src}
        className={cn(baseClasses, "block dark:hidden")}
      />
    </>
  );
};

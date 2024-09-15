import { cn } from "@/utils";
import type { ImageMetadata } from "astro";

interface Props {
  dark: ImageMetadata;
  light: ImageMetadata;
  alt: string;
}

export const Image = ({ dark, light, alt }: Props) => {
  const baseClasses = cn(
    "rounded-md w-12 h-12 text-xs break-words shadow-lg border dark:border-zinc-800"
  );

  return (
    <>
      <img
        src={dark?.src}
        alt={alt}
        className={cn(baseClasses, "hidden dark:block")}
      />
      <img
        src={light?.src}
        alt={alt}
        className={cn(baseClasses, "block dark:hidden")}
      />
    </>
  );
};

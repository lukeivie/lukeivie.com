import { cn } from "@/utils";
import type { ImageMetadata } from "astro";
import type { ComponentPropsWithoutRef } from "react";

interface Props extends Omit<ComponentPropsWithoutRef<"img">, "src"> {
  dark: ImageMetadata;
  light: ImageMetadata;
}

export const Image = ({ dark, light, className, ...props }: Props) => {
  const baseClasses = cn(
    "rounded-md w-12 h-12 text-xs break-words shadow-lg",
    "border border-[1.5px]",
    "border-zinc-200 group-hover:border-zinc-300 group-focus-visible:border-zinc-300 group-active:border-zinc-300",

    "dark:border-zinc-800 dark:group-hover:border-zinc-700 dark:group-focus-visible:border-zinc-700 dark:group-active:border-zinc-600",

    className,
  );

  return (
    <>
      <img
        {...props}
        src={dark?.src}
        className={cn(baseClasses, "hidden dark:block")}
      />
      <img
        {...props}
        src={light?.src}
        className={cn(baseClasses, "block dark:hidden")}
      />
    </>
  );
};

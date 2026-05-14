import { cn } from "@/utils";

interface Props {
  start: string;
  end: string;
}

export const Timeline = ({ start, end }: Props) => (
  <div
    className={cn(
      "flex text-sm mt-3 sm:mt-0",
      "dark:group-hover:text-zinc-400 dark:group-active:text-zinc-300",
      "whitespace-nowrap"
    )}
  >
    {start} &mdash; {end}
  </div>
);

import { cn } from "@/utils";

interface Props {
  className?: string;
}

export const Separator = ({ className }: Props) => (
  <hr
    className={cn("border-zinc-100 dark:border-zinc-900 border-b-2", className)}
  />
);

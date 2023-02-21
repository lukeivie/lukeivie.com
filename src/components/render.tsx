import { ReactNode } from "react";

export default function Render({ if: show, children }: { if: boolean; children: ReactNode }) {
  return show === true ? children : null;
}

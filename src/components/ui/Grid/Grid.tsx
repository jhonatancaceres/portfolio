import type { PropsWithChildren } from "react";
import type React from "react";

interface GridProps extends PropsWithChildren {
  cols: number;
}

export const Grid: React.FC<GridProps> = ({ cols, children }) => {

  return <div className={"grid gap-6 grid-cols-" + cols}>
    {children}
  </div>
};
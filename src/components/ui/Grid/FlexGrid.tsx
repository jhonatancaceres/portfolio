import type { PropsWithChildren } from "react";
import type React from "react";

export const FlexGrid: React.FC<PropsWithChildren> = ({ children }) => {

  return <div className="flex">
    {children}
  </div>
}
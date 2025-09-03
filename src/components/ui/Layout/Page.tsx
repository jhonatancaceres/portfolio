import type { JSX, PropsWithChildren } from "react";
import type React from "react";

interface PageProps extends PropsWithChildren {
  title?: string;
  icon?: JSX.Element;
  rightPanel?: JSX.Element;
}

export const Page: React.FC<PageProps> = ({ title, icon, children, rightPanel }) => {

  return <div className="p-4">
    <h1 className="text-2xl font-bold flex mb-4">

      <div className="flex flex-1">
        {icon && <span className="mr-2">{icon}</span>}
        {title && title}
      </div>
      {rightPanel && <div className="flex-2">{rightPanel}</div>}
    </h1>

    {children}
  </div>

}
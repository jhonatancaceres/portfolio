import type { PropsWithChildren } from "react";
import type React from "react";

interface CardProps extends PropsWithChildren {
  title?: string;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {

  return <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
    {title && <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>}
    <div className="text-gray-600 mb-4">
      {children}
    </div>
  </div>
};

import type React from "react"


import type { PropsWithChildren } from "react";
import { ErrorBanner } from "../../../lib/error-handler";
import { LeftBar } from "./LeftBar";
import { TopBar } from "./TopBar";


export const Layout: React.FC<PropsWithChildren> = ({ children }) => {

  return <>
    <ErrorBanner />
    <div className="flex h-screen">
      <LeftBar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  </>
};
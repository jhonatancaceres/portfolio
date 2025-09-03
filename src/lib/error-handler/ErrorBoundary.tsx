import type { PropsWithChildren } from "react";
import type React from "react";

import { useError } from "./useError";
import { ErrorBoundaryClass } from "./ErrorBoundaryClass";

export const ErrorBoundary: React.FC<PropsWithChildren> = ({ children }) => {

  const { showError } = useError()

  return <ErrorBoundaryClass onError={showError}>
    {children}
  </ErrorBoundaryClass>

}
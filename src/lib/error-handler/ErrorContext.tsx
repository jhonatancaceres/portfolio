import React, { useEffect } from "react";

const { useState, createContext } = React;

// 1. Create Context
interface ErrorContextType {
  error: Error | null;
  showError: (error: Error) => void;
  clearError: () => void;
}

export const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

// 2. ErrorProvider Component
export const ErrorProvider = ({ children }: any) => {
  const [error, setError] = useState(null);

  const showError = (error: any) => {
    console.error("Error captured:", error);
    setError(error);
  };

  useEffect(() => {
    const handler = (e: Event) => {
      const detail: any = (e as CustomEvent<string>).detail;
      setError(detail);
    };
    window.addEventListener("app:error", handler as EventListener);
    return () => window.removeEventListener("app:error", handler as EventListener);
  }, []);

  const clearError = () => setError(null);

  return (
    <ErrorContext.Provider value={{ error, showError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};
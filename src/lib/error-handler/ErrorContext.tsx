import React from "react";

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

  const clearError = () => setError(null);

  return (
    <ErrorContext.Provider value={{ error, showError, clearError }}>
      {children}
    </ErrorContext.Provider>
  );
};
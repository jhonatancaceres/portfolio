import React from 'react';
import { useError } from './useError';


export const ErrorBanner: React.FC = () => {
  const { error, clearError } = useError();
  
  if (!error) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-fade-in-down">
      <div className="bg-red-500 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="font-bold text-lg">Something went wrong</h3>
              <p className="text-sm">{error.message}</p>
            </div>
          </div>
          <button
            onClick={clearError}
            className="bg-red-700 hover:bg-red-800 text-white rounded-full p-1 transition-colors"
            aria-label="Dismiss error"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
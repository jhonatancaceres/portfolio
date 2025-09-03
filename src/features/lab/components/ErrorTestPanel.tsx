import type React from "react";
import { useEffect, useState } from "react";

const ErrorTestPanel: React.FC = () => {

  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    if (countdown === null) return;
    if (countdown === 0) {
      throw new Error("Test error triggered after countdown!");
    }

    const timer = setTimeout(() => setCountdown((c) => (c !== null ? c - 1 : null)), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);



  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => setCountdown(3)}
        className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition"
      >
        Trigger Error
      </button>

      {countdown !== null && countdown > 0 && (
        <p className="text-gray-700">Error in {countdown}...</p>
      )}
    </div>
  );
}

export default ErrorTestPanel;
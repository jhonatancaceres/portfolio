import { useState } from "react";

export function AsyncErrorTestButton() {
  const [loading, setLoading] = useState(false);

  const triggerAsyncError = async () => {
    setLoading(true);
    try {
      await new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Async test error from API call!")), 2000)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={triggerAsyncError}
        disabled={loading}
        className="rounded bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-700 transition disabled:opacity-50"
      >
        {loading ? "Simulating..." : "Trigger Async Error"}
      </button>
      {loading && <p className="text-gray-600">Waiting for error...</p>}
    </div>
  );
}

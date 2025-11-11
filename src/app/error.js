'use client';

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center">
      <h1 className="text-2xl font-semibold text-red-600 mb-4">
        Something went wrong!
      </h1>
      <p className="text-gray-600 mb-6">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}

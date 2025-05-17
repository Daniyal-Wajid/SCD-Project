import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-9xl font-extrabold text-primary mb-6">404</h1>
      <p className="text-2xl font-semibold mb-4 text-gray-700">
        Oops! Page Not Found.
      </p>
      <p className="mb-8 text-gray-500 max-w-md text-center">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

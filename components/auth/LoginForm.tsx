"use client";

import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          placeholder="name@company.com"
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-1.5">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium">
            Forgot password?
          </a>
        </div>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            required
            className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
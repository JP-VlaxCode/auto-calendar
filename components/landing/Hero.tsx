import React from 'react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-6">
        Welcome to Our Platform
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
        We provide the tools you need to succeed. Start your journey today by exploring our features and getting started with our simple interface.
      </p>
      <div className="flex gap-4">
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg transition-colors">
          Get Started
        </button>
        <button className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
}
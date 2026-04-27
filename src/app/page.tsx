import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 p-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
          Welcome to Our Platform
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          The central hub for managing your tasks and projects efficiently. Get started by logging into your account.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link 
            href="/login" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Login
          </Link>
          <button className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}
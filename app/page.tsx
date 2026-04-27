import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 p-6">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Welcome to Auto Calendar
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Your efficient schedule management tool. Organize your time with ease.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link 
            href="/login" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
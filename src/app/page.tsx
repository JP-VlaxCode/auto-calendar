export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 p-6">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-10 border border-gray-100 dark:border-gray-800 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Welcome to the Application
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          You have successfully reached the home page. Please log in to access your dashboard.
        </p>
        <a 
          href="/login" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
        >
          Go to Login
        </a>
      </div>
    </main>
  );
}
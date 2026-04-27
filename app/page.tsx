import Hero from '../components/landing/Hero';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 relative">
      <div className="absolute top-0 right-0 p-4 sm:p-6 lg:p-8 z-10">
        <Link 
          href="/login" 
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-sm transition-colors duration-200"
        >
          Login
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
    </main>
  );
}

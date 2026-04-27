import Hero from '../components/landing/Hero';

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
    </main>
  );
}
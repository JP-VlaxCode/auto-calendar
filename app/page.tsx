import Hero from '../components/landing/Hero';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
    </main>
  );
}
"use client";

import { usePathname } from 'next/navigation';
import { BrandingLabel } from '@/components/ui/BrandingLabel';

export default function Footer() {
  const pathname = usePathname();

  if (pathname !== '/') return null;

  return (
    <footer className="w-full py-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <BrandingLabel />
      </div>
    </footer>
  );
}
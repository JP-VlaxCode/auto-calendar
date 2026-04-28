"use client";

import { useBranding } from '@/hooks/useBranding';

export function BrandingLabel() {
  const { data, loading } = useBranding();

  if (loading) {
    return (
      <div className="animate-pulse h-5 w-24 bg-gray-200 dark:bg-gray-800 rounded" />
    );
  }

  if (!data) return null;

  return (
    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
      {data.label}
    </span>
  );
}
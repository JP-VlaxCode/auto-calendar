"use client";

import { useState, useEffect } from 'react';
import { fetchBrandingSettings, BrandingSettings } from '@/services/settings';

export function useBranding() {
  const [data, setData] = useState<BrandingSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBrandingSettings()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
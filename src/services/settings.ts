export interface BrandingSettings {
  label: string;
}

export async function fetchBrandingSettings(): Promise<BrandingSettings> {
  const response = await fetch('/api/settings/branding');
  if (!response.ok) {
    throw new Error('Failed to fetch branding settings');
  }
  return response.json();
}
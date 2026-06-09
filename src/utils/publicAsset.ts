/** Public folder asset path, safe with or without a trailing slash on BASE_URL. */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return `${base}${path.replace(/^\//, '')}`;
}

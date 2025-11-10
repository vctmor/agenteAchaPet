// util/api.js
// util/api.js
export function apiUrl(path = '') {
  const base = (import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1')
    .replace(/\/+$/, '');
  return `${base}/${String(path).replace(/^\/+/, '')}`;
}


export const API_BASE =
  import.meta.env.VITE_API_URL?.replace(/\/+$/, '') || 'http://localhost:8080/api/v1';


export function apiUrl(path = '') {
  const base = import.meta.env.VITE_API_URL?.replace(/\/+$/, '') || 'http://localhost:8080/api/v1';
  return `${base}/${path.replace(/^\/+/, '')}`;
}

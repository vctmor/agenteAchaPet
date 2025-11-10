// util/api.js
export function apiUrl(path = '') {
  const base = ('http://agenteachapet.onrender.com/api/v1')
    .replace(/\/+$/, '');
  return `${base}/${String(path).replace(/^\/+/, '')}`;
}

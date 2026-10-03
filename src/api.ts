const BASE_URL = import.meta.env.VITE_API_URL || "";

export function api(path: string, options?: RequestInit) {
  return fetch(`${BASE_URL}${path}`, options);
}

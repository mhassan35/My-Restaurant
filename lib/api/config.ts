export const BASE_URL = "https://jsonvibe.com/api/restaurant"

export function buildUrl(path: string, query?: Record<string, any>) {
  const url = new URL(`${BASE_URL}${path}`)

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value === undefined || value === null) return

      if (Array.isArray(value)) {
        value.forEach((v) => url.searchParams.append(key, String(v)))
      } else {
        url.searchParams.set(key, String(value))
      }
    })
  }

  return url.toString()
}

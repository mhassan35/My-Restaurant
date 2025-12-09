import { buildUrl } from "./config"

async function parseJSON(response: Response) {
  const text = await response.text()
  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}

export async function request<T = any>(
  path: string,
  options: {
    method?: string
    body?: any
    token?: string | null
    query?: Record<string, any>
    headers?: Record<string, string>
  } = {}
): Promise<T> {
  const { method = "GET", body, token, query, headers = {} } = options

  const url = buildUrl(path, query)

  const init: RequestInit = {
    method,
    headers: {
      Accept: "application/json",
      ...headers,
    },
  }

  if (token) {
    init.headers = {
      ...init.headers,
      Authorization: `Bearer ${token}`,
    }
  }

  if (body !== undefined && body !== null) {
    if (body instanceof FormData) {
      init.body = body
    } else {
      init.headers = { ...init.headers, "Content-Type": "application/json" }
      init.body = JSON.stringify(body)
    }
  }

  const response = await fetch(url, init)

  const data = await parseJSON(response)

  if (!response.ok) {
    const error: any = new Error("API Error")
    error.status = response.status
    error.data = data
    throw error
  }

  return data as T
}

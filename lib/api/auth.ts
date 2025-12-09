import { request } from "./client"
import { AuthResponse } from "./types"

export async function login(data: { email: string; password: string }) {
  return request<AuthResponse>("/auth/login", {
    method: "POST",
    body: data,
  })
}

export function saveToken(token: string) {
  localStorage.setItem("api_token", token)
}

export function getToken() {
  return localStorage.getItem("api_token")
}

export function clearToken() {
  localStorage.removeItem("api_token")
}

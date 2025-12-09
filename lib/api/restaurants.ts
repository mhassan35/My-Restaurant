import { request } from "./client"
import { Restaurant } from "./types"

export async function getRestaurants(params?: { page?: number; per_page?: number }) {
  return request<{ data: Restaurant[]; meta?: any }>("/restaurants", {
    query: params,
  })
}

export async function getRestaurantById(id: string | number) {
  return request<Restaurant>(`/restaurants/${id}`)
}

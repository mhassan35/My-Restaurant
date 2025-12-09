import { request } from "./client"
import { MenuItem } from "./types"

export async function getMenuItems(params?: { restaurant_id?: number | string }) {
  return request<{ data: MenuItem[] }>("/menu-items", {
    query: params,
  })
}

export async function getMenuItemById(id: string | number) {
  return request<MenuItem>(`/menu-items/${id}`)
}

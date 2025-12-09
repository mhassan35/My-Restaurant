import { request } from "./client"

export async function getCategories() {
  return request<{ data: any[] }>("/categories")
}

export async function getCategoryById(id: string | number) {
  return request<any>(`/categories/${id}`)
}

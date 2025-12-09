import { request } from "./client"
import { Order } from "./types"
import { getToken } from "./auth"

export async function getOrders() {
  return request<{ data: Order[] }>("/orders", {
    token: getToken(),
  })
}

export async function getOrderById(id: string | number) {
  return request<Order>(`/orders/${id}`, {
    token: getToken(),
  })
}

import { request } from "./client"
import { DeliveryAddress } from "./types"
import { getToken } from "./auth"

export async function getDeliveryAddresses() {
  return request<{ data: DeliveryAddress[] }>("/delivery-addresses", {
    token: getToken(),
  })
}

export async function getDeliveryAddressById(id: string | number) {
  return request<DeliveryAddress>(`/delivery-addresses/${id}`, {
    token: getToken(),
  })
}

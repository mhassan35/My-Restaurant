import { request } from "./client"
import { Reservation } from "./types"
import { getToken } from "./auth"

export async function getReservations() {
  return request<{ data: Reservation[] }>("/reservations", {
    token: getToken(),
  })
}

export async function getReservationById(id: string | number) {
  return request<Reservation>(`/reservations/${id}`, {
    token: getToken(),
  })
}

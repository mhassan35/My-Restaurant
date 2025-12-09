export interface PaginationMeta {
    current_page?: number
    total?: number
    per_page?: number
  }
  
  export interface Restaurant {
    id?: number | string
    name: string
    slug?: string
    description?: string
    cuisine_type?: string
    logo?: string
    cover_image?: string
    address?: string
    city?: string
    phone?: string
    email?: string
    website?: string
    rating?: number
    reviews_count?: number
    price_range?: string
    opening_hours?: Record<string, string>
    delivery_time?: string
    minimum_order?: number
    delivery_fee?: number
    is_open?: boolean
    accepts_reservations?: boolean
  }
  
  export interface MenuItem {
    id?: number | string
    restaurant_id?: number | string
    name: string
    slug?: string
    description?: string
    image?: string
    price?: number
    original_price?: number
    category_name?: string
    ingredients?: string[]
    allergens?: string[]
    calories?: number
    is_vegetarian?: boolean
    is_vegan?: boolean
    is_gluten_free?: boolean
    is_spicy?: boolean
    spice_level?: number
    preparation_time?: string
    is_available?: boolean
    is_popular?: boolean
  }
  
  export interface AuthResponse {
    token?: string
    user?: {
      id?: number | string
      name?: string
      email?: string
    }
  }
  
  export interface Order {
    id?: number | string
    order_number?: string
    items?: Array<{ name: string; quantity: number; price: number }>
    subtotal?: number
  }
  
  export interface Reservation {
    id?: number | string
    reservation_number?: string
    restaurant_name?: string
    date?: string
    time?: string
    guests_count?: number
  }
  
  export interface DeliveryAddress {
    id?: number | string
    label?: string
    street_address?: string
    city?: string
    phone?: string
    is_default?: boolean
  }
  
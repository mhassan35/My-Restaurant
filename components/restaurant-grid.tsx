"use client"
import { useState, useEffect } from "react"
import RestaurantCard from "./restaurant-card"
import { Skeleton } from "@/components/ui/skeleton"
import { getRestaurants } from "@/lib/api"

interface Restaurant {
  id: string
  name: string
  image: string
  rating: number
  reviews: number
  cuisine: string
  deliveryTime: string
  deliveryFee: number
  minOrder: number
  category: string
  featured: boolean
  tags: string[]
}

interface RestaurantGridProps {
  category: string
  search: string
  activeFilter: string | null
}

export default function RestaurantGrid({ category, search, activeFilter }: RestaurantGridProps) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      let data = getRestaurants()
      // Category Filter
      if (category !== "all") {
        data = data.filter(r => r.category === category)
      }
      // Search Filter
      if ((search || "").trim()) {
        data = data.filter(r =>
          r.name.toLowerCase().includes(search.toLowerCase()) ||
          r.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
        )
      }
      // Filter Options
      if (activeFilter === "rating") {
        data = data.sort((a, b) => b.rating - a.rating)
      }
      if (activeFilter === "delivery") {
        data = data.sort((a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime))
      }
      if (activeFilter === "fee") {
        data = data.sort((a, b) => a.deliveryFee - b.deliveryFee)
      }
      if (activeFilter === "popular") {
        data = data.filter(r => r.featured === true)
      }
      setRestaurants(data)
      setLoading(false)
    }, 300)
  }, [category, search, activeFilter])

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? [...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-64 w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            ))
          : restaurants.length > 0
          ? restaurants.map(r => <RestaurantCard key={r.id} restaurant={r} />)
          : (
              <div className="col-span-full text-center py-24">
                <h2 className="text-2xl font-bold">No restaurants found</h2>
                <p className="text-muted-foreground">Try different search or filters</p>
              </div>
            )}
      </div>
    </section>
  )
}

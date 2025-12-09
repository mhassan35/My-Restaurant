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
}

export default function RestaurantGrid({ category }: RestaurantGridProps) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      const data = getRestaurants()
      const filteredByCategory = category === "all" ? data : data.filter(r => r.category === category)
      setRestaurants(filteredByCategory)
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [category])

  // Filter restaurants by search input
  const filteredRestaurants = restaurants.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Search Input */}
      {!loading && (
        <div className="mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search restaurants..."
            className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {!loading && (
            <p className="text-muted-foreground text-sm mt-2">
              {filteredRestaurants.length} restaurants found
            </p>
          )}
        </div>
      )}

      {/* Content */}
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
          : filteredRestaurants.length > 0
          ? filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          : (
              <div className="col-span-full text-center py-24">
                <h2 className="text-2xl font-bold text-foreground mb-2">No restaurants found</h2>
                <p className="text-muted-foreground">Try selecting a different category or search term</p>
              </div>
            )}
      </div>
    </section>
  )
}

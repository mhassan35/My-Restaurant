"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import MenuGrid from "@/components/menu-grid"
import RestaurantHeader from "@/components/restaurant-header"
import { Skeleton } from "@/components/ui/skeleton"

export default function RestaurantPage() {
  const params = useParams()
  const [restaurant, setRestaurant] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setRestaurant({
        id: params.id,
        name: "The Artisan Table",
        image: "/restaurant-banner.png",
        rating: 4.9,
        reviews: 2341,
        cuisine: "Italian",
        deliveryTime: "30-40 mins",
        deliveryFee: 2.99,
        minOrder: 25,
        description:
          "Authentic Italian cuisine prepared by award-winning chefs. Every dish tells a story of tradition and innovation.",
      })
      setLoading(false)
    }, 400)
    return () => clearTimeout(timer)
  }, [params.id])

  const isLoading = loading
  const hasData = Boolean(restaurant)

  return (
    <main className="min-h-screen bg-background">
      {isLoading || !hasData ? (
        <div>
          <Skeleton className="h-96 w-full" />
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-64 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <RestaurantHeader restaurant={restaurant} />
          <MenuGrid restaurantId={params.id as string} />
        </div>
      )}
    </main>
  )
}

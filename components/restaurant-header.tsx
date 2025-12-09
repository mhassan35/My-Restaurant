"use client"

import { Star, Clock, DollarSign } from "lucide-react"

interface RestaurantHeaderProps {
  restaurant: {
    name: string
    image: string
    rating: number
    reviews: number
    cuisine: string
    deliveryTime: string
    deliveryFee: number
    minOrder: number
    description: string
  }
}

export default function RestaurantHeader({ restaurant }: RestaurantHeaderProps) {
  return (
    <div className="bg-background">
      {/* Banner */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={restaurant.image || "/placeholder.svg"}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Info Section */}
      <div className="relative -mt-24 z-10 max-w-7xl mx-auto px-4">
        <div className="bg-card rounded-2xl border border-border p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-foreground mb-2">{restaurant.name}</h1>
              <p className="text-muted-foreground mb-4">
                {restaurant.cuisine} • {restaurant.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <Star className="w-5 h-5 fill-accent text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{restaurant.rating}</p>
                    <p className="text-xs text-muted-foreground">{restaurant.reviews} reviews</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{restaurant.deliveryTime}</p>
                    <p className="text-xs text-muted-foreground">Delivery</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 rounded-lg p-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">${restaurant.deliveryFee}</p>
                    <p className="text-xs text-muted-foreground">Delivery fee</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
              <h3 className="font-bold text-foreground mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground">Minimum Order</p>
                  <p className="font-bold text-foreground">${restaurant.minOrder}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Cuisines</p>
                  <p className="font-bold text-foreground">{restaurant.cuisine}</p>
                </div>
                <button className="w-full mt-4 py-3 px-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

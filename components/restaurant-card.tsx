"use client"

import Link from "next/link"
import { Star, Clock, DollarSign, Flame } from "lucide-react"

interface RestaurantCardProps {
  restaurant: {
    id: string
    name: string
    image: string
    rating: number
    reviews: number
    cuisine: string
    deliveryTime: string
    deliveryFee: number
    minOrder: number
    featured: boolean
    tags?: string[]
  }
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link href={`/restaurant/${restaurant.id}`}>
      <div className="group h-full rounded-xl sm:rounded-2xl overflow-hidden bg-card border border-border hover:border-primary transition-smooth hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer">
        {/* Image Container with Overlay */}
        <div className="relative h-48 sm:h-64 overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

          <img
            src={restaurant.image || "/placeholder.svg"}
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
          />

          {/* Featured Badge */}
          {restaurant.featured && (
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-linear-to-r from-primary to-accent text-primary-foreground px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 z-20 shadow-lg">
              <Flame className="w-3 h-3 sm:w-4 sm:h-4" />
              Featured
            </div>
          )}

          {/* Rating Badge */}
          <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-background/95 backdrop-blur-md px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg flex items-center gap-1.5 z-20 shadow-md border border-border/50">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent" />
            <span className="font-bold text-foreground text-xs sm:text-sm">{restaurant.rating}</span>
            <span className="text-muted-foreground text-[10px] sm:text-xs">
              ({(restaurant.reviews / 1000).toFixed(1)}k)
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-5">
          <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-smooth line-clamp-1">
            {restaurant.name}
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3">{restaurant.cuisine}</p>

          {/* Tags */}
          {restaurant.tags && restaurant.tags.length > 0 && (
            <div className="flex gap-1.5 mb-2 sm:mb-3 flex-wrap">
              {restaurant.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] sm:text-xs bg-muted text-muted-foreground px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Info Grid */}
          <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 pt-2 sm:pt-3 border-t border-border/50">
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-[10px] sm:text-xs">{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-0.5 text-muted-foreground text-[10px] sm:text-xs">
                <DollarSign className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                <span>${restaurant.deliveryFee}</span>
              </div>
            </div>

            <p className="text-[10px] sm:text-xs text-muted-foreground">
              Min. order: <span className="font-semibold text-foreground">${restaurant.minOrder}</span>
            </p>
          </div>

          {/* CTA Button */}
          <button className="w-full py-2 sm:py-2.5 px-3 sm:px-4 bg-linear-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-medium text-sm hover:shadow-lg transition-smooth group-hover:scale-105 active:scale-95">
            View Menu
          </button>
        </div>
      </div>
    </Link>
  )
}

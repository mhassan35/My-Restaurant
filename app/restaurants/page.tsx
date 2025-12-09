"use client"

import { useState, useEffect } from "react"
import RestaurantGrid from "@/components/restaurant-grid"
import { Search } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function RestaurantsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("featured")

  // Prevent body scroll lock when select dropdown is open
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (document.body.hasAttribute("data-scroll-locked")) {
        document.body.style.overflow = "visible"
        document.body.style.paddingRight = "0"
      }
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-scroll-locked"],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-linear-to-br from-primary/10 via-secondary/5 to-background border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Explore Restaurants</h1>
          <p className="text-muted-foreground text-lg">
            Discover thousands of restaurants offering great deals and fast delivery
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-background border-b border-border py-8 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search restaurants by name, cuisine..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-muted text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] h-auto px-4 py-3 rounded-lg bg-muted text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="delivery">Fastest Delivery</SelectItem>
                  <SelectItem value="price">Lowest Delivery Fee</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-background py-6 border-b border-border sticky top-32 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { value: "all", label: "All" },
              { value: "italian", label: "Italian" },
              { value: "asian", label: "Asian" },
              { value: "american", label: "American" },
              { value: "seafood", label: "Seafood" },
              { value: "dessert", label: "Dessert" },
            ].map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-5 py-2 rounded-full whitespace-nowrap font-medium transition-all text-sm ${
                  selectedCategory === cat.value
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <RestaurantGrid category={selectedCategory} />
    </main>
  )
}

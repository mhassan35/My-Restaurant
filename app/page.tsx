"use client"

import { useState } from "react"
import RestaurantGrid from "@/components/restaurant-grid"
import HeroSection from "@/components/hero-section"
import { buttonData } from "@/lib/mockData"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
        {/* Category Filter */}
        <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {buttonData.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                    selectedCategory === cat.value
                      ? "bg-primary text-primary-foreground shadow-lg"
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
      <RestaurantGrid category={selectedCategory} search={""} activeFilter={null} />
    </main>
  )
}

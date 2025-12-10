"use client"

import { useState } from "react"
import MenuItemComponent from "./menu-item"
import { mockItems, MenuItem } from "@/lib/mockData"

export default function MenuGrid({ restaurantId }: { restaurantId: string }) {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "appetizer", "pasta", "rice", "seafood", "meat", "dessert"]

  const filteredItems: MenuItem[] =
    selectedCategory === "all"
      ? mockItems
      : mockItems.filter((item) => item.category === selectedCategory)

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Category Filter */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Our Menu</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items Grid */}
      {filteredItems.length === 0 ? (
        <p className="text-center text-muted-foreground">No items available in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MenuItemComponent key={item.id} item={item} restaurantId={restaurantId} />
          ))}
        </div>
      )}
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import MenuItemComponent from "./menu-item"
import { Skeleton } from "@/components/ui/skeleton"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
}

export default function MenuGrid({ restaurantId }: { restaurantId: string }) {
  const [items, setItems] = useState<MenuItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      const mockItems: MenuItem[] = [
        {
          id: "1",
          name: "Spaghetti Carbonara",
          description: "Creamy pasta with guanciale, egg, and pecorino cheese",
          price: 16.99,
          image: "/spaghetti-carbonara.png",
          category: "pasta",
          rating: 4.8,
        },
        {
          id: "2",
          name: "Risotto ai Funghi",
          description: "Creamy risotto with mixed mushrooms and truffle oil",
          price: 18.5,
          image: "/mushroom-risotto.png",
          category: "rice",
          rating: 4.7,
        },
        {
          id: "3",
          name: "Branzino alla Griglia",
          description: "Grilled Mediterranean sea bass with lemon and herbs",
          price: 24.99,
          image: "/grilled-branzino-fish.jpg",
          category: "seafood",
          rating: 4.9,
        },
        {
          id: "4",
          name: "Osso Buco",
          description: "Braised veal shanks in white wine reduction",
          price: 28.5,
          image: "/osso-buco-veal-shanks.jpg",
          category: "meat",
          rating: 4.9,
        },
        {
          id: "5",
          name: "Caprese Salad",
          description: "Fresh mozzarella, tomatoes, basil, and balsamic",
          price: 12.99,
          image: "/caprese-salad.jpg",
          category: "appetizer",
          rating: 4.6,
        },
        {
          id: "6",
          name: "Tiramisu",
          description: "Classic Italian dessert with mascarpone and espresso",
          price: 8.5,
          image: "/classic-tiramisu.png",
          category: "dessert",
          rating: 4.8,
        },
        {
          id: "7",
          name: "Pappardelle al Ragù",
          description: "Wide ribbons pasta with slow-cooked beef ragù",
          price: 19.99,
          image: "/pappardelle-ragu.jpg",
          category: "pasta",
          rating: 4.7,
        },
        {
          id: "8",
          name: "Panna Cotta",
          description: "Silky vanilla panna cotta with berry coulis",
          price: 7.99,
          image: "/panna-cotta-berry.jpg",
          category: "dessert",
          rating: 4.8,
        },
      ]

      if (selectedCategory === "all") {
        setItems(mockItems)
      } else {
        setItems(mockItems.filter((item) => item.category === selectedCategory))
      }
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [selectedCategory])

  const categories = ["all", "appetizer", "pasta", "rice", "seafood", "meat", "dessert"]

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
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full rounded-xl" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <MenuItemComponent key={item.id} item={item} restaurantId={restaurantId} />
          ))}
        </div>
      )}
    </section>
  )
}

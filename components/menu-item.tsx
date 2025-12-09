"use client"

import { useState } from "react"
import { Star, Plus, Minus } from "lucide-react"
import { useCart } from "@/context/cart-context"

interface MenuItemProps {
  item: {
    id: string
    name: string
    description: string
    price: number
    image: string
    rating: number
  }
  restaurantId: string
}

export default function MenuItem({ item, restaurantId }: MenuItemProps) {
  const [quantity, setQuantity] = useState(0)
  const { addItem } = useCart()

  const handleAdd = () => {
    if (quantity > 0) {
      addItem({
        id: `${restaurantId}-${item.id}`,
        restaurantId,
        name: item.name,
        price: item.price,
        quantity: quantity,
        image: item.image,
      })
      setQuantity(0)
    }
  }

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden hover:border-primary hover:shadow-lg transition-all group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-background/95 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
          <Star className="w-3 h-3 fill-accent text-accent" />
          <span className="text-xs font-bold">{item.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="font-bold text-foreground text-sm mb-1 line-clamp-1">{item.name}</h4>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{item.description}</p>

        <div className="flex items-center justify-between">
          <p className="font-bold text-primary text-lg">${item.price.toFixed(2)}</p>
        </div>

        {/* Quantity Control */}
        {quantity === 0 ? (
          <button
            onClick={() => setQuantity(1)}
            className="w-full mt-3 py-2 px-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-between gap-2 mt-3">
            <button
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
              className="flex-1 py-2 px-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors flex items-center justify-center"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-bold text-foreground w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="flex-1 py-2 px-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={handleAdd}
              className="flex-1 py-2 px-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium text-sm"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

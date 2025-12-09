/**
 * Mock API for restaurants data
 * Centralized restaurant data management
 */

export interface Restaurant {
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

export function getRestaurants(): Restaurant[] {
  return [
    {
      id: "1",
      name: "The Artisan Table",
      image: "/elegant-italian-restaurant-interior-with-warm-ligh.jpg",
      rating: 4.9,
      reviews: 2341,
      cuisine: "Italian",
      deliveryTime: "30-40 mins",
      deliveryFee: 2.99,
      minOrder: 25,
      category: "italian",
      featured: true,
      tags: ["Pizza", "Pasta", "Romantic"],
    },
    {
      id: "2",
      name: "Sakura Dreams",
      image: "/modern-japanese-restaurant-with-minimalist-design.jpg",
      rating: 4.8,
      reviews: 1892,
      cuisine: "Japanese",
      deliveryTime: "25-35 mins",
      deliveryFee: 3.99,
      minOrder: 30,
      category: "asian",
      featured: true,
      tags: ["Sushi", "Ramen", "Premium"],
    },
    {
      id: "3",
      name: "Prime Cuts Steakhouse",
      image: "/luxury-steakhouse-interior-with-leather-seating.jpg",
      rating: 4.7,
      reviews: 1654,
      cuisine: "American",
      deliveryTime: "35-45 mins",
      deliveryFee: 4.99,
      minOrder: 40,
      category: "american",
      featured: false,
      tags: ["Steak", "Fine Dining", "Premium"],
    },
    {
      id: "4",
      name: "Coastal Gem",
      image: "/upscale-seafood-restaurant-elegant-ambiance.jpg",
      rating: 4.9,
      reviews: 2156,
      cuisine: "Seafood",
      deliveryTime: "28-38 mins",
      deliveryFee: 3.49,
      minOrder: 35,
      category: "seafood",
      featured: true,
      tags: ["Fresh Fish", "Oysters", "Upscale"],
    },
    {
      id: "5",
      name: "Dragon Palace",
      image: "/vibrant-asian-fusion-restaurant-modern-interior.jpg",
      rating: 4.6,
      reviews: 1423,
      cuisine: "Asian Fusion",
      deliveryTime: "32-42 mins",
      deliveryFee: 3.99,
      minOrder: 28,
      category: "asian",
      featured: false,
      tags: ["Fusion", "Noodles", "Contemporary"],
    },
    {
      id: "6",
      name: "Sweet Indulgence",
      image: "/beautiful-dessert-cafe-cozy-pastry-shop.jpg",
      rating: 4.8,
      reviews: 1789,
      cuisine: "Desserts",
      deliveryTime: "20-30 mins",
      deliveryFee: 2.49,
      minOrder: 15,
      category: "dessert",
      featured: false,
      tags: ["Cakes", "Pastries", "Coffee"],
    },
    {
      id: "7",
      name: "La Dolce Vita",
      image: "/warm-italian-restaurant-traditional-setting.jpg",
      rating: 4.7,
      reviews: 1556,
      cuisine: "Italian",
      deliveryTime: "33-43 mins",
      deliveryFee: 3.49,
      minOrder: 22,
      category: "italian",
      featured: false,
      tags: ["Traditional", "Authentic", "Family"],
    },
    {
      id: "8",
      name: "Burger Paradise",
      image: "/contemporary-burger-restaurant-modern-casual.jpg",
      rating: 4.5,
      reviews: 2089,
      cuisine: "American",
      deliveryTime: "25-35 mins",
      deliveryFee: 2.99,
      minOrder: 18,
      category: "american",
      featured: false,
      tags: ["Burgers", "Fries", "Casual"],
    },
    {
      id: "9",
      name: "Taste of Bangkok",
      image: "/colorful-thai-restaurant-vibrant-atmosphere.jpg",
      rating: 4.7,
      reviews: 1834,
      cuisine: "Thai",
      deliveryTime: "30-40 mins",
      deliveryFee: 3.49,
      minOrder: 26,
      category: "asian",
      featured: true,
      tags: ["Thai Curry", "Pad Thai", "Spiced"],
    },
  ]
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  reviews: number
}

export function getMenuItems(restaurantId: string): MenuItem[] {
  const menus: Record<string, MenuItem[]> = {
    "1": [
      {
        id: "1-1",
        name: "Margherita Pizza",
        description: "Fresh basil, mozzarella, tomato sauce",
        price: 14.99,
        image: "/margherita-pizza.png",
        category: "Pizza",
        rating: 4.8,
        reviews: 342,
      },
      {
        id: "1-2",
        name: "Fettuccine Alfredo",
        description: "Creamy sauce with parmesan and black pepper",
        price: 13.99,
        image: "/fettuccine-alfredo.png",
        category: "Pasta",
        rating: 4.7,
        reviews: 281,
      },
    ],
    "2": [
      {
        id: "2-1",
        name: "Salmon Sushi Roll",
        description: "Fresh salmon, cucumber, avocado",
        price: 12.99,
        image: "/salmon-sushi-roll.jpg",
        category: "Sushi",
        rating: 4.9,
        reviews: 456,
      },
      {
        id: "2-2",
        name: "Tonkotsu Ramen",
        description: "Pork broth with noodles and toppings",
        price: 11.99,
        image: "/tonkotsu-ramen.png",
        category: "Ramen",
        rating: 4.8,
        reviews: 389,
      },
    ],
  }

  return menus[restaurantId] || []
}

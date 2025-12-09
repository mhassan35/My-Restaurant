"use client"
import { useState } from "react"
import PaymentForm from "@/components/payment-form"
import CheckoutSummary from "@/components/checkout-summary"
import { useCart } from "@/context/cart-context"
import Link from "next/link"

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderId, setOrderId] = useState("")

  const handlePaymentSuccess = () => {
    const id = Math.random().toString(36).substring(7).toUpperCase()
    setOrderId(id)
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Order Placed!</h1>
          <p className="text-muted-foreground mb-6">Thank you for your order. Your food will be delivered shortly.</p>
          <div className="bg-card border border-border rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground mb-1">Order ID</p>
            <p className="text-2xl font-bold text-primary">{orderId}</p>
          </div>
          <div className="space-y-3">
            <Link href="/" className="block">
              <button className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Back to Home
              </button>
            </Link>
            <Link href="/" className="block">
              <button className="w-full py-3 px-4 bg-muted text-muted-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors">
                Order Again
              </button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h1>
          <Link href="/">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Continue Shopping
            </button>
          </Link>
        </div>
      </main>
    )
  }

  const deliveryFee = 3.99
  const tax = total * 0.08
  const finalTotal = total + deliveryFee + tax

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-12">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <PaymentForm onSuccess={handlePaymentSuccess} />
          </div>
          {/* Order Summary */}
          <CheckoutSummary total={total} deliveryFee={deliveryFee} tax={tax} finalTotal={finalTotal} />
        </div>
      </div>
    </main>
  )
}

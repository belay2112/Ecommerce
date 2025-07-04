"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import Categories from "@/components/categories"
import Newsletter from "@/components/newsletter"
import TrendingProducts from "@/components/trending-products"
import Testimonials from "@/components/testimonials"
import PaymentMethods from "@/components/payment-methods"
import { initializeData } from "@/lib/data"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    initializeData()
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <TrendingProducts />
      <PaymentMethods />
      <Testimonials />
      <Newsletter />
    </div>
  )
}

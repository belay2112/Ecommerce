"use client"

import { useEffect, useState } from "react"
import ProductCard from "./product-card"
import { getProducts } from "@/lib/data"
import type { Product } from "@/lib/types"

export default function TrendingProducts() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // Get trending products (highest rated)
    const allProducts = getProducts()
    const trending = allProducts.sort((a, b) => b.rating - a.rating).slice(0, 4)
    setProducts(trending)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Now</h2>
          <p className="text-gray-600">Most popular products this week</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

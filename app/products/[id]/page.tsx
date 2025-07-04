"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import ProductDetail from "@/components/product-detail"
import RelatedProducts from "@/components/related-products"
import ProductReviews from "@/components/product-reviews"
import { getProductById, getProducts } from "@/lib/data"
import type { Product } from "@/lib/types"

export default function ProductPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const foundProduct = getProductById(params.id as string)
      setProduct(foundProduct)

      if (foundProduct) {
        // Get related products from same category
        const allProducts = getProducts()
        const related = allProducts
          .filter((p) => p.categoryId === foundProduct.categoryId && p.id !== foundProduct.id)
          .slice(0, 4)
        setRelatedProducts(related)
      }

      setIsLoading(false)
    }
  }, [params.id])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <ProductDetail product={product} />
      <ProductReviews productId={product.id} />
      <RelatedProducts products={relatedProducts} />
    </div>
  )
}

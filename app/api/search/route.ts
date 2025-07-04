import { type NextRequest, NextResponse } from "next/server"
import { getProducts } from "@/lib/data"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")
    const category = searchParams.get("category")
    const minPrice = searchParams.get("minPrice")
    const maxPrice = searchParams.get("maxPrice")

    let products = getProducts()

    // Filter by search query
    if (query) {
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()),
      )
    }

    // Filter by category
    if (category && category !== "all") {
      products = products.filter((product) => product.categoryId === category)
    }

    // Filter by price range
    if (minPrice) {
      products = products.filter((product) => product.price >= Number.parseFloat(minPrice))
    }
    if (maxPrice) {
      products = products.filter((product) => product.price <= Number.parseFloat(maxPrice))
    }

    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: "Failed to search products" }, { status: 500 })
  }
}

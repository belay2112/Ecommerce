import { type NextRequest, NextResponse } from "next/server"
import { getProductReviews } from "@/lib/data"

export async function GET(request: NextRequest, { params }: { params: { productId: string } }) {
  try {
    const reviews = getProductReviews(params.productId)
    return NextResponse.json(reviews)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
  }
}

import { type NextRequest, NextResponse } from "next/server"
import { addReview } from "@/lib/data"

export async function POST(request: NextRequest) {
  try {
    const reviewData = await request.json()
    const newReview = addReview(reviewData)
    return NextResponse.json(newReview, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 })
  }
}

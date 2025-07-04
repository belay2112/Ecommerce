import { type NextRequest, NextResponse } from "next/server"
import { getAllOrders, createOrder } from "@/lib/data"

export async function GET() {
  try {
    const orders = getAllOrders()
    return NextResponse.json(orders)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()
    const newOrder = createOrder(orderData)
    return NextResponse.json(newOrder, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}

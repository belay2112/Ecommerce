import { type NextRequest, NextResponse } from "next/server"
import { loginUser } from "@/lib/data"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    const user = loginUser(email, password)

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Remove password from response
    const { password: _, ...safeUser } = user
    return NextResponse.json(safeUser)
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}

import { type NextRequest, NextResponse } from "next/server"
import { getUsers, registerUser } from "@/lib/data"

export async function GET() {
  try {
    const users = getUsers()
    // Remove passwords from response
    const safeUsers = users.map(({ password, ...user }) => user)
    return NextResponse.json(safeUsers)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()
    const newUser = registerUser(name, email, password)

    if (!newUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Remove password from response
    const { password: _, ...safeUser } = newUser
    return NextResponse.json(safeUser, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 })
  }
}

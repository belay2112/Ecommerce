import { type NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { tasks } from "@/lib/db"

export async function GET(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const userTasks = tasks.filter((task) => task.userId === token.id)
  return NextResponse.json(userTasks)
}

export async function POST(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const taskData = await request.json()

    const newTask = {
      id: Date.now().toString(),
      ...taskData,
      userId: token.id as string,
      createdAt: new Date().toISOString(),
    }

    tasks.push(newTask)

    return NextResponse.json(newTask, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create task" }, { status: 500 })
  }
}

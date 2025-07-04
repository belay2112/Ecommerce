import { type NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { tasks } from "@/lib/db"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const taskData = await request.json()
    const taskIndex = tasks.findIndex((task) => task.id === params.id && task.userId === token.id)

    if (taskIndex === -1) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 })
    }

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      ...taskData,
    }

    return NextResponse.json(tasks[taskIndex])
  } catch (error) {
    return NextResponse.json({ error: "Failed to update task" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const taskIndex = tasks.findIndex((task) => task.id === params.id && task.userId === token.id)

  if (taskIndex === -1) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 })
  }

  tasks.splice(taskIndex, 1)

  return NextResponse.json({ message: "Task deleted successfully" })
}

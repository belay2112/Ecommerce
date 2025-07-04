import { type NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { projects } from "@/lib/db"

export async function GET(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const userProjects = projects.filter((project) => project.userId === token.id)
  return NextResponse.json(userProjects)
}

export async function POST(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const projectData = await request.json()

    const newProject = {
      id: Date.now().toString(),
      ...projectData,
      userId: token.id as string,
      createdAt: new Date().toISOString(),
    }

    projects.push(newProject)

    return NextResponse.json(newProject, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 })
  }
}

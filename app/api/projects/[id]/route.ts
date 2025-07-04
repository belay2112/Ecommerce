import { type NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import { projects } from "@/lib/db"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const projectData = await request.json()
    const projectIndex = projects.findIndex((project) => project.id === params.id && project.userId === token.id)

    if (projectIndex === -1) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    projects[projectIndex] = {
      ...projects[projectIndex],
      ...projectData,
    }

    return NextResponse.json(projects[projectIndex])
  } catch (error) {
    return NextResponse.json({ error: "Failed to update project" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const projectIndex = projects.findIndex((project) => project.id === params.id && project.userId === token.id)

  if (projectIndex === -1) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 })
  }

  projects.splice(projectIndex, 1)

  return NextResponse.json({ message: "Project deleted successfully" })
}

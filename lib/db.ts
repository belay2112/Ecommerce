// In-memory database for demo purposes
// In a real application, you would use a proper database

export interface User {
  id: string
  name: string
  email: string
  password: string
  createdAt: string
}

export interface Task {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "completed"
  priority: "low" | "medium" | "high"
  dueDate: string
  projectId?: string
  userId: string
  createdAt: string
}

export interface Project {
  id: string
  name: string
  description: string
  status: "active" | "completed" | "on-hold"
  userId: string
  createdAt: string
}

export const users: User[] = []

export const tasks: Task[] = []

export const projects: Project[] = []

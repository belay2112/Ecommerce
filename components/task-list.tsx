"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Calendar, FolderOpen } from "lucide-react"

interface Task {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "completed"
  priority: "low" | "medium" | "high"
  dueDate: string
  projectId?: string
  createdAt: string
}

interface Project {
  id: string
  name: string
  description: string
  status: "active" | "completed" | "on-hold"
  createdAt: string
}

interface TaskListProps {
  tasks: Task[]
  projects: Project[]
  onEdit: (task: Task) => void
  onDelete: (taskId: string) => void
}

export default function TaskList({ tasks, projects, onEdit, onDelete }: TaskListProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-green-100 text-green-800"
    }
  }

  const getProjectName = (projectId?: string) => {
    if (!projectId) return null
    const project = projects.find((p) => p.id === projectId)
    return project?.name
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  const isOverdue = (dueDate: string, status: string) => {
    if (status === "completed") return false
    return new Date(dueDate) < new Date()
  }

  if (tasks.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="text-gray-400 mb-4">
            <Calendar className="h-12 w-12" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks yet</h3>
          <p className="text-gray-500 text-center">Get started by creating your first task</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid gap-4">
      {tasks.map((task) => (
        <Card key={task.id} className={`${task.status === "completed" ? "opacity-75" : ""}`}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className={`text-lg ${task.status === "completed" ? "line-through" : ""}`}>
                  {task.title}
                </CardTitle>
                <CardDescription className="mt-1">{task.description}</CardDescription>
              </div>
              <div className="flex space-x-2 ml-4">
                <Button variant="outline" size="sm" onClick={() => onEdit(task)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onDelete(task.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge className={getStatusColor(task.status)}>{task.status.replace("-", " ")}</Badge>
              <Badge className={getPriorityColor(task.priority)}>{task.priority} priority</Badge>
              {getProjectName(task.projectId) && (
                <Badge variant="outline" className="flex items-center gap-1">
                  <FolderOpen className="h-3 w-3" />
                  {getProjectName(task.projectId)}
                </Badge>
              )}
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span className={isOverdue(task.dueDate, task.status) ? "text-red-600 font-medium" : ""}>
                Due: {formatDate(task.dueDate)}
                {isOverdue(task.dueDate, task.status) && " (Overdue)"}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertCircle, Plus, LogOut, UserIcon, BarChart3, FolderOpen } from "lucide-react"
import TaskForm from "./task-form"
import ProjectForm from "./project-form"
import TaskList from "./task-list"
import ProjectList from "./project-list"
import { toast } from "@/hooks/use-toast"

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

interface DashboardProps {
  onSignOut: () => void
}

export default function Dashboard({ onSignOut }: DashboardProps) {
  const [user, setUser] = useState<any | null>(null)
  const [tasks, setTasks] = useState<Task[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [showTaskForm, setShowTaskForm] = useState(false)
  const [showProjectForm, setShowProjectForm] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  useEffect(() => {
    // Load user data
    const currentUser = localStorage.getItem("currentUser")
    if (currentUser) {
      setUser(JSON.parse(currentUser))
    }

    // Load tasks and projects
    loadTasks()
    loadProjects()
  }, [])

  const loadTasks = () => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }

  const loadProjects = () => {
    const savedProjects = localStorage.getItem("projects")
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects))
    }
  }

  const saveTasks = (newTasks: Task[]) => {
    localStorage.setItem("tasks", JSON.stringify(newTasks))
    setTasks(newTasks)
  }

  const saveProjects = (newProjects: Project[]) => {
    localStorage.setItem("projects", JSON.stringify(newProjects))
    setProjects(newProjects)
  }

  const handleTaskSubmit = (taskData: Omit<Task, "id" | "createdAt">) => {
    if (editingTask) {
      // Update existing task
      const updatedTasks = tasks.map((task) => (task.id === editingTask.id ? { ...task, ...taskData } : task))
      saveTasks(updatedTasks)
      toast({
        title: "Task updated",
        description: "Your task has been updated successfully.",
      })
    } else {
      // Create new task
      const newTask: Task = {
        id: Date.now().toString(),
        ...taskData,
        createdAt: new Date().toISOString(),
      }
      saveTasks([...tasks, newTask])
      toast({
        title: "Task created",
        description: "Your new task has been created successfully.",
      })
    }

    setShowTaskForm(false)
    setEditingTask(null)
  }

  const handleProjectSubmit = (projectData: Omit<Project, "id" | "createdAt">) => {
    if (editingProject) {
      // Update existing project
      const updatedProjects = projects.map((project) =>
        project.id === editingProject.id ? { ...project, ...projectData } : project,
      )
      saveProjects(updatedProjects)
      toast({
        title: "Project updated",
        description: "Your project has been updated successfully.",
      })
    } else {
      // Create new project
      const newProject: Project = {
        id: Date.now().toString(),
        ...projectData,
        createdAt: new Date().toISOString(),
      }
      saveProjects([...projects, newProject])
      toast({
        title: "Project created",
        description: "Your new project has been created successfully.",
      })
    }

    setShowProjectForm(false)
    setEditingProject(null)
  }

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    saveTasks(updatedTasks)
    toast({
      title: "Task deleted",
      description: "The task has been deleted successfully.",
    })
  }

  const handleDeleteProject = (projectId: string) => {
    const updatedProjects = projects.filter((project) => project.id !== projectId)
    saveProjects(updatedProjects)
    toast({
      title: "Project deleted",
      description: "The project has been deleted successfully.",
    })
  }

  const handleSignOut = () => {
    localStorage.removeItem("currentUser")
    onSignOut()
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    })
  }

  const completedTasks = tasks.filter((task) => task.status === "completed").length
  const totalTasks = tasks.length
  const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

  const urgentTasks = tasks.filter((task) => {
    const dueDate = new Date(task.dueDate)
    const today = new Date()
    const diffTime = dueDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 3 && task.status !== "completed"
  }).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-semibold text-gray-900">ShopMount</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <UserIcon className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-700">{user?.name}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="flex items-center space-x-2 bg-transparent"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalTasks}</div>
              <p className="text-xs text-muted-foreground">{completedTasks} completed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completionRate.toFixed(0)}%</div>
              <Progress value={completionRate} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Urgent Tasks</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{urgentTasks}</div>
              <p className="text-xs text-muted-foreground">Due within 3 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <FolderOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{projects.filter((p) => p.status === "active").length}</div>
              <p className="text-xs text-muted-foreground">{projects.length} total projects</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="tasks" className="space-y-6">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>

            <div className="flex space-x-2">
              <Button onClick={() => setShowTaskForm(true)} className="flex items-center space-x-2">
                <Plus className="h-4 w-4" />
                <span>New Task</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowProjectForm(true)}
                className="flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>New Project</span>
              </Button>
            </div>
          </div>

          <TabsContent value="tasks">
            <TaskList
              tasks={tasks}
              projects={projects}
              onEdit={(task) => {
                setEditingTask(task)
                setShowTaskForm(true)
              }}
              onDelete={handleDeleteTask}
            />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectList
              projects={projects}
              onEdit={(project) => {
                setEditingProject(project)
                setShowProjectForm(true)
              }}
              onDelete={handleDeleteProject}
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Task Form Modal */}
      {showTaskForm && (
        <TaskForm
          task={editingTask}
          projects={projects}
          onSubmit={handleTaskSubmit}
          onClose={() => {
            setShowTaskForm(false)
            setEditingTask(null)
          }}
        />
      )}

      {/* Project Form Modal */}
      {showProjectForm && (
        <ProjectForm
          project={editingProject}
          onSubmit={handleProjectSubmit}
          onClose={() => {
            setShowProjectForm(false)
            setEditingProject(null)
          }}
        />
      )}
    </div>
  )
}

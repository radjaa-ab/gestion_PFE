import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Search, Plus, Eye, Edit, Trash2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const initialProjects = [
  { id: 1, title: 'AI Research', supervisor: 'Dr. Smith', status: 'In Progress', type: 'Research', deadline: '2023-12-31' },
  { id: 2, title: 'Web App Development', supervisor: 'Prof. Johnson', status: 'Completed', type: 'Development', deadline: '2023-11-15' },
  { id: 3, title: 'Data Analysis', supervisor: 'Dr. Brown', status: 'Pending', type: 'Analysis', deadline: '2024-01-31' },
  { id: 4, title: 'Mobile App', supervisor: 'Prof. Davis', status: 'In Progress', type: 'Development', deadline: '2024-02-28' },
  { id: 5, title: 'Machine Learning Model', supervisor: 'Dr. Wilson', status: 'In Progress', type: 'Research', deadline: '2024-03-15' },
]

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [projects, setProjects] = useState(initialProjects)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newProject, setNewProject] = useState({
    title: '',
    supervisor: '',
    status: '',
    type: '',
    deadline: ''
  })
  const { toast } = useToast()
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    // Check for approaching deadlines
    const today = new Date()
    const oneWeekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
    
    const newAlerts = projects.filter(project => {
      const deadline = new Date(project.deadline)
      return deadline > today && deadline <= oneWeekFromNow
    }).map(project => ({
      id: project.id,
      type: 'warning',
      message: `Project "${project.title}" deadline is approaching (${project.deadline})`
    }))

    setAlerts(newAlerts)
  }, [projects])

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.supervisor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.type.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewProject(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setNewProject(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const id = projects.length + 1
    setProjects(prev => [...prev, { id, ...newProject }])
    toast({
      title: "Project created",
      description: `${newProject.title} has been successfully added.`,
    })
    setIsDialogOpen(false)
    setNewProject({ title: '', supervisor: '', status: '', type: '', deadline: '' })
  }

  const handleDelete = (id: number) => {
    setProjects(prev => prev.filter(project => project.id !== id))
    toast({
      title: "Project deleted",
      description: "The project has been successfully removed.",
      variant: "destructive",
    })
  }

  const handleAlertDismiss = (id: number) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Projects</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Project
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Project Title</Label>
                <Input id="title" name="title" value={newProject.title} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supervisor">Supervisor</Label>
                <Input id="supervisor" name="supervisor" value={newProject.supervisor} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select onValueChange={(value) => handleSelectChange('status', value)} value={newProject.status}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Project Type</Label>
                <Select onValueChange={(value) => handleSelectChange('type', value)} value={newProject.type}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Research">Research</SelectItem>
                    <SelectItem value="Development">Development</SelectItem>
                    <SelectItem value="Analysis">Analysis</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="deadline">Deadline</Label>
                <Input id="deadline" name="deadline" type="date" value={newProject.deadline} onChange={handleInputChange} required />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button type="submit">Create Project</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {alerts.map((alert) => (
        <Alert key={alert.id} variant={alert.type}>
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>{alert.message}</AlertDescription>
          <Button variant="outline" size="sm" onClick={() => handleAlertDismiss(alert.id)}>
            Dismiss
          </Button>
        </Alert>
      ))}

      <Card>
        <CardHeader>
          <CardTitle>Project Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="Search projects..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Supervisor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProjects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>{project.title}</TableCell>
                  <TableCell>{project.supervisor}</TableCell>
                  <TableCell>
                    <Badge variant={project.status === 'Completed' ? 'success' : project.status === 'In Progress' ? 'warning' : 'default'}>
                      {project.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{project.type}</TableCell>
                  <TableCell>{project.deadline}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(project.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardContent>
      </Card>
    </div>
  )
}


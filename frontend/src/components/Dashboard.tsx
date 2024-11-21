import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type UserType = 'admin' | 'teacher' | 'student' | 'company'

export default function Dashboard() {
  const [userType, setUserType] = useState<UserType>('admin')

  const renderDashboard = () => {
    switch (userType) {
      case 'admin':
        return (
          <>
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Button>Import Users</Button>
                <Button className="ml-2">Manage Users</Button>
              </CardContent>
            </Card>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Email Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <Button>Set Email Schedule</Button>
                <Button className="ml-2">Configure Deadlines</Button>
              </CardContent>
            </Card>
          </>
        )
      case 'teacher':
        return (
          <>
            <Card>
              <CardHeader>
                <CardTitle>Project Management</CardTitle>
              </CardHeader>
              <CardContent>
                <Button>Propose Project</Button>
                <Button className="ml-2">View My Projects</Button>
              </CardContent>
            </Card>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Supervision</CardTitle>
              </CardHeader>
              <CardContent>
                <Button>Select Projects to Supervise</Button>
              </CardContent>
            </Card>
          </>
        )
      case 'student':
        return (
          <>
            <Card>
              <CardHeader>
                <CardTitle>Project Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <Button>Propose Project</Button>
                <Button className="ml-2">Choose Project</Button>
              </CardContent>
            </Card>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>My Project</CardTitle>
              </CardHeader>
              <CardContent>
                <Button>View Assigned Project</Button>
              </CardContent>
            </Card>
          </>
        )
      case 'company':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Project Proposals</CardTitle>
            </CardHeader>
            <CardContent>
              <Button>Propose Project</Button>
              <Button className="ml-2">View Proposed Projects</Button>
            </CardContent>
          </Card>
        )
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="mb-4">
        <select 
          value={userType} 
          onChange={(e) => setUserType(e.target.value as UserType)}
          className="p-2 border rounded"
        >
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="company">Company</option>
        </select>
      </div>
      {renderDashboard()}
    </div>
  )
}
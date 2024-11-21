import { SetStateAction } from 'react'
import { Layout } from '../components/Layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react';


export default function StudentDashboard() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Student Dashboard</h2>
        <Card>
          <CardHeader>
            <CardTitle>My Project</CardTitle>
          </CardHeader>
          <CardContent>
            <p>View and manage your current project</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Track your submissions and deadlines</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Access helpful resources and guidelines</p>
          </CardContent>
        </Card>
      </div>

  )
}

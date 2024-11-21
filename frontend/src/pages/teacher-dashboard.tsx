import { Layout } from '../components/Layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TeacherDashboard() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Teacher Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>My Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p>View and manage your projects</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Student Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Track student progress and submissions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <p>View important dates and deadlines</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

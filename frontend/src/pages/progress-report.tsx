import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProgressReport() {
  const [report, setReport] = useState({
    projectName: '',
    progressSummary: '',
    challenges: '',
    nextSteps: '',
    resources: '',
    timeline: ''
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setReport(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Progress report submitted:', report)
    toast({
      title: "Progress Report Submitted",
      description: "Your progress report has been successfully submitted.",
    })
    setReport({
      projectName: '',
      progressSummary: '',
      challenges: '',
      nextSteps: '',
      resources: '',
      timeline: ''
    })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Progress Report</h2>
      <Card>
        <CardHeader>
          <CardTitle>Submit Progress Report</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="project-name">Project Name</Label>
              <Input 
                id="project-name" 
                name="projectName"
                placeholder="Enter project name" 
                value={report.projectName}
                onChange={handleInputChange}
                required
              />
            </div>
            <Tabs defaultValue="summary" className="w-full">
              <TabsList>
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="challenges">Challenges</TabsTrigger>
                <TabsTrigger value="next-steps">Next Steps</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              <TabsContent value="summary">
                <div className="space-y-2">
                  <Label htmlFor="progress-summary">Progress Summary</Label>
                  <Textarea 
                    id="progress-summary" 
                    name="progressSummary"
                    placeholder="Summarize your progress..." 
                    value={report.progressSummary}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </TabsContent>
              <TabsContent value="challenges">
                <div className="space-y-2">
                  <Label htmlFor="challenges">Challenges Faced</Label>
                  <Textarea 
                    id="challenges" 
                    name="challenges"
                    placeholder="Describe any challenges..." 
                    value={report.challenges}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </TabsContent>
              <TabsContent value="next-steps">
                <div className="space-y-2">
                  <Label htmlFor="next-steps">Next Steps</Label>
                  <Textarea 
                    id="next-steps" 
                    name="nextSteps"
                    placeholder="Outline your next steps..." 
                    value={report.nextSteps}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </TabsContent>
              <TabsContent value="resources">
                <div className="space-y-2">
                  <Label htmlFor="resources">Required Resources</Label>
                  <Textarea 
                    id="resources" 
                    name="resources"
                    placeholder="List any required resources..." 
                    value={report.resources}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2 mt-4">
                  <Label htmlFor="timeline">Updated Timeline</Label>
                  <Textarea 
                    id="timeline" 
                    name="timeline"
                    placeholder="Provide an updated project timeline..." 
                    value={report.timeline}
                    onChange={handleInputChange}
                  />
                </div>
              </TabsContent>
            </Tabs>
            <Button type="submit">Submit Report</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}


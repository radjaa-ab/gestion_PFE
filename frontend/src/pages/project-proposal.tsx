import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ProjectProposal() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Project Proposal</h2>
      <Card>
        <CardHeader>
          <CardTitle>Submit Project Proposal</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="project-title">Project Title</Label>
              <Input id="project-title" placeholder="Enter project title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="project-description">Project Description</Label>
              <Textarea id="project-description" placeholder="Describe your project..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="project-objectives">Project Objectives</Label>
              <Textarea id="project-objectives" placeholder="List your project objectives..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="required-resources">Required Resources</Label>
              <Textarea id="required-resources" placeholder="List required resources..." />
            </div>
            <Button type="submit">Submit Proposal</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}


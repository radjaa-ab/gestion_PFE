import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function FeedbackSubmission() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Feedback Submission</h2>
      <Card>
        <CardHeader>
          <CardTitle>Submit Your Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="feedback">Your Feedback</Label>
              <Textarea id="feedback" placeholder="Enter your feedback here..." />
            </div>
            <Button type="submit">Submit Feedback</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}


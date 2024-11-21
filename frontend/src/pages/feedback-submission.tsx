import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"

export default function FeedbackSubmission() {
  const [feedback, setFeedback] = useState({
    overall: '',
    content: '',
    usability: '',
    comments: ''
  })
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFeedback(prev => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFeedback(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Feedback submitted:', feedback)
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your feedback!",
    })
    setFeedback({ overall: '', content: '', usability: '', comments: '' })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Feedback Submission</h2>
      <Card>
        <CardHeader>
          <CardTitle>Submit Your Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label>Overall Experience</Label>
              <RadioGroup onValueChange={(value) => handleRadioChange('overall', value)} value={feedback.overall}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="excellent" id="overall-excellent" />
                  <Label htmlFor="overall-excellent">Excellent</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="good" id="overall-good" />
                  <Label htmlFor="overall-good">Good</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fair" id="overall-fair" />
                  <Label htmlFor="overall-fair">Fair</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="poor" id="overall-poor" />
                  <Label htmlFor="overall-poor">Poor</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Content Quality</Label>
              <RadioGroup onValueChange={(value) => handleRadioChange('content', value)} value={feedback.content}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="excellent" id="content-excellent" />
                  <Label htmlFor="content-excellent">Excellent</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="good" id="content-good" />
                  <Label htmlFor="content-good">Good</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fair" id="content-fair" />
                  <Label htmlFor="content-fair">Fair</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="poor" id="content-poor" />
                  <Label htmlFor="content-poor">Poor</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label>Usability</Label>
              <RadioGroup onValueChange={(value) => handleRadioChange('usability', value)} value={feedback.usability}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="excellent" id="usability-excellent" />
                  <Label htmlFor="usability-excellent">Excellent</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="good" id="usability-good" />
                  <Label htmlFor="usability-good">Good</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fair" id="usability-fair" />
                  <Label htmlFor="usability-fair">Fair</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="poor" id="usability-poor" />
                  <Label htmlFor="usability-poor">Poor</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="comments">Additional Comments</Label>
              <Textarea 
                id="comments" 
                name="comments"
                placeholder="Please provide any additional feedback here..." 
                value={feedback.comments}
                onChange={handleInputChange}
              />
            </div>
            <Button type="submit">Submit Feedback</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}


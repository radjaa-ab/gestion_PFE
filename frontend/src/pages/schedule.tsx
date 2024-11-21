import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, X } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Event = {
  id: number;
  title: string;
  date: Date;
  type: 'meeting' | 'deadline' | 'presentation';
}

export default function Schedule() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [events, setEvents] = useState<Event[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newEvent, setNewEvent] = useState<Omit<Event, 'id'>>({
    title: '',
    date: new Date(),
    type: 'meeting'
  })
  const { toast } = useToast()
  const [alerts, setAlerts] = useState<{ id: number; message: string }[]>([])

  useEffect(() => {
    // Check for upcoming events
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const upcomingEvents = events.filter(event => 
      event.date >= today && event.date <= tomorrow
    )

    setAlerts(upcomingEvents.map(event => ({
      id: event.id,
      message: `Upcoming ${event.type}: ${event.title} on ${event.date.toLocaleDateString()}`
    })))
  }, [events])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewEvent(prev => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setNewEvent(prev => ({ ...prev, date }))
    }
  }

  const handleTypeChange = (value: 'meeting' | 'deadline' | 'presentation') => {
    setNewEvent(prev => ({ ...prev, type: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const id = events.length + 1
    setEvents(prev => [...prev, { id, ...newEvent }])
    toast({
      title: "Event added",
      description: `${newEvent.title} has been successfully added to the schedule.`,
    })
    setIsDialogOpen(false)
    setNewEvent({ title: '', date: new Date(), type: 'meeting' })
  }

  const handleAlertDismiss = (id: number) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-foreground">Schedule</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Event
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Event</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title</Label>
                <Input id="title" name="title" value={newEvent.title} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Event Date</Label>
                <Calendar
                  mode="single"
                  selected={newEvent.date}
                  onSelect={handleDateChange}
                  className="rounded-md border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Event Type</Label>
                <Select onValueChange={handleTypeChange} value={newEvent.type}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="meeting">Meeting</SelectItem>
                    <SelectItem value="deadline">Deadline</SelectItem>
                    <SelectItem value="presentation">Presentation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button type="submit">Add Event</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {alerts.map((alert) => (
        <Alert key={alert.id} variant="warning">
          <AlertTitle>Upcoming Event</AlertTitle>
          <AlertDescription>{alert.message}</AlertDescription>
          <Button variant="outline" size="sm" onClick={() => handleAlertDismiss(alert.id)}>
            Dismiss
          </Button>
        </Alert>
      ))}

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-background border border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border border-border"
            />
          </CardContent>
        </Card>
        <Card className="bg-background border border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {events.map((event) => (
                <li key={event.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <h3 className="font-medium text-foreground">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {event.date.toLocaleDateString()} - {event.type}
                    </p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => {
                    setEvents(prev => prev.filter(e => e.id !== event.id))
                    toast({
                      title: "Event removed",
                      description: `${event.title} has been removed from the schedule.`,
                      variant: "destructive",
                    })
                  }}>
                    <X className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

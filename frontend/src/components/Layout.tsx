import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">PFE Platform</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/dashboard" className="text-primary-foreground hover:underline">Dashboard</Link></li>
              <li><Link to="/projects" className="text-primary-foreground hover:underline">Projects</Link></li>
              <li><Link to="/profile" className="text-primary-foreground hover:underline">Profile</Link></li>
            </ul>
          </nav>
          <Button variant="secondary">Logout</Button>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-secondary text-secondary-foreground p-4">
        <div className="container mx-auto text-center">
          © 2023 PFE Platform. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
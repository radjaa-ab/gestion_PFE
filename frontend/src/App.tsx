import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import ProjectProposalForm from './components/ProjectProposalForm'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/propose-project" element={<ProjectProposalForm />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  )
}
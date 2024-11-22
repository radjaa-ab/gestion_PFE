import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Layout} from './components/Layout';
import Dashboard from './components/Dashboard';
import Users from './pages/users';
import Projects from './pages/projects';
import Schedule from './pages/schedule';
import Settings from './pages/settings';
import FeedbackSubmission from './pages/feedback-submission';
import ProgressReport from './pages/progress-report';
import ProjectProposal from './pages/project-proposal';
import Register from './pages/register';
import ResourceRequest from './pages/resource-request';
import ScheduleManagement from './pages/schedule-management';
import SubmitProject from './pages/submit-project';
import TeacherEvaluation from './pages/teacher-evaluation';
import TeamFormation from './pages/team-formation';
import UserProfile from './pages/user-profile';
import Notifications from './pages/notification';
import Contact from './pages/Contact';
import PfeSelection from './pages/PfeSelection';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/feedback-submission" element={<FeedbackSubmission />} />
          <Route path="/progress-report" element={<ProgressReport />} />
          <Route path="/project-proposal" element={<ProjectProposal />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resource-request" element={<ResourceRequest />} />
          <Route path="/schedule-management" element={<ScheduleManagement />} />
          <Route path="/submit-project" element={<SubmitProject />} />
          <Route path="/teacher-evaluation" element={<TeacherEvaluation />} />
          <Route path="/team-formation" element={<TeamFormation />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pfe-selection" element={<PfeSelection />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;


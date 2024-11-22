import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Users, FileText, Calendar, Settings, MessageSquare, ClipboardList, FileSignature, UserPlus, Package, Clock, Upload, Star, Users2, User, Bell, Mail, BookOpen } from 'lucide-react';
import {
  Sidebar as UISidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const menuItems = [
  { id: 1, label: "Dashboard", icon: Home, link: "/" },
  { id: 2, label: "Users", icon: Users, link: "/users" },
  { id: 3, label: "Projects", icon: FileText, link: "/projects" },
  { id: 4, label: "Schedule", icon: Calendar, link: "/schedule" },
  { id: 5, label: "Feedback", icon: MessageSquare, link: "/feedback-submission" },
  { id: 6, label: "Progress Report", icon: ClipboardList, link: "/progress-report" },
  { id: 7, label: "Project Proposal", icon: FileSignature, link: "/project-proposal" },
  { id: 8, label: "Register", icon: UserPlus, link: "/register" },
  { id: 9, label: "Resource Request", icon: Package, link: "/resource-request" },
  { id: 10, label: "Schedule Management", icon: Clock, link: "/schedule-management" },
  { id: 11, label: "Submit Project", icon: Upload, link: "/submit-project" },
  { id: 12, label: "Teacher Evaluation", icon: Star, link: "/teacher-evaluation" },
  { id: 13, label: "Team Formation", icon: Users2, link: "/team-formation" },
  { id: 14, label: "User Profile", icon: User, link: "/user-profile" },
  { id: 15, label: "Notifications", icon: Bell, link: "/notifications" },
  { id: 16, label: "Contact", icon: Mail, link: "/contact" },
  { id: 17, label: "PFE Selection", icon: BookOpen, link: "/pfe-selection" },
  { id: 18, label: "Settings", icon: Settings, link: "/settings" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <UISidebar className="h-screen bg-background border-r border-border">
      <SidebarHeader className="flex items-center justify-between p-4">
        <span className="text-xl font-bold text-foreground">PFE Platform</span>
      </SidebarHeader>
      <SidebarContent className="flex-grow overflow-y-auto">
        <SidebarMenu>
          {menuItems.map(({ id, label, icon: Icon, link }) => {
            const isActive = location.pathname === link;
            return (
              <SidebarMenuItem key={id}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link to={link} className={cn(
                    "flex items-center py-2 px-4 text-sm font-medium rounded-md transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}>
                    <Icon className={cn("h-5 w-5 mr-3", isActive ? "text-primary-foreground" : "text-muted-foreground")} />
                    <span>{label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-border">
        <div className="flex items-center">
          <img src="/placeholder.svg?height=32&width=32" alt="User" className="h-8 w-8 rounded-full mr-3" />
          <span className="text-sm font-medium text-foreground">John Doe</span>
        </div>
      </SidebarFooter>
    </UISidebar>
  );
}


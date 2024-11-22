import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { SidebarProvider } from '@/components/ui/sidebar';

interface LayoutProps {
  hideSidebar?: boolean;
}

export function Layout({ hideSidebar = false }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
        {!hideSidebar && <Sidebar />}
        <div className="flex flex-col flex-1 w-0 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}


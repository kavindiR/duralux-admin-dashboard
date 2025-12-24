import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import SubHeader from './SubHeader';

interface LayoutProps {
  children: ReactNode;
  breadcrumbs: { label: string; path?: string }[];
  showSubHeader?: boolean;
  subHeaderDateRange?: string;
}

export default function Layout({ 
  children, 
  breadcrumbs, 
  showSubHeader = true,
  subHeaderDateRange 
}: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950 overflow-hidden">
      {/* Sidebar - Mobile overlay, Desktop fixed */}
      <div
        className={`fixed inset-0 z-50 lg:relative lg:z-auto transition-transform duration-300 ${
          isSidebarOpen ? 'block' : 'hidden lg:block'
        }`}
      >
        {/* Mobile backdrop */}
        <div
          className="absolute inset-0 bg-black/50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
        {/* Sidebar */}
        <div className="relative h-full">
          <Sidebar onNavigate={() => setIsSidebarOpen(false)} />
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header breadcrumbs={breadcrumbs} onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        {showSubHeader && (
          <SubHeader breadcrumbs={breadcrumbs} dateRange={subHeaderDateRange} />
        )}
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950 overflow-x-hidden">
          <div className="max-w-full w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}

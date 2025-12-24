import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Rocket,
  DollarSign,
  Users,
  Target,
  FolderKanban,
  Layout,
  Settings,
  HelpCircle,
  Download,
  ChevronDown,
  ChevronRight,
  AtSign,
  Power,
} from 'lucide-react';
import Logo from './Logo';

interface MenuItem {
  name: string;
  icon?: JSX.Element;
  path?: string;
  children?: { name: string; path: string; isCategory?: boolean }[];
  isCategory?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: 'Dashboards',
    icon: <LayoutDashboard size={18} />,
    children: [
      { name: 'CRM', path: '/crm', isCategory: true },
      { name: 'Analytics', path: '/' },
    ],
  },
  { name: 'Reports', icon: <FileText size={18} />, path: '/reports' },
  { name: 'Applications', icon: <Rocket size={18} />, path: '/applications' },
  { name: 'Proposal', icon: <AtSign size={18} strokeWidth={2.5} />, path: '/proposal' },
  { name: 'Payment', icon: <DollarSign size={18} />, path: '/payment' },
  {
    name: 'Customers',
    icon: <Users size={18} />,
    children: [
      { name: 'Customers', path: '/customers' },
      { name: 'Customers View', path: '/customers/view' },
      { name: 'Customers Create', path: '/customers/create' },
    ],
  },
  { name: 'Leads', icon: <Target size={18} />, path: '/leads' },
  {
    name: 'Projects',
    icon: <FolderKanban size={18} />,
    children: [
      { name: 'Projects', path: '/projects' },
      { name: 'Projects View', path: '/projects/view' },
      { name: 'Projects Create', path: '/projects/create' },
    ],
  },
  { name: 'Widgets', icon: <Layout size={18} />, path: '/widgets' },
  { name: 'Settings', icon: <Settings size={18} />, path: '/settings' },
  { name: 'Authentication', icon: <Power size={18} />, path: '/auth/login' },
  { name: 'Help Center', icon: <HelpCircle size={18} />, path: '/help' },
];

interface SidebarProps {
  onNavigate?: () => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(['Dashboards', 'Projects', 'Customers']);

  const toggleExpand = (name: string) => {
    setExpandedItems(prev =>
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    );
  };

  const isActive = (path: string) => location.pathname === path;
  const isParentActive = (children?: { path: string }[]) =>
    children?.some(child => location.pathname === child.path);

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-screen overflow-y-auto flex flex-col shadow-lg lg:shadow-none">
      <div className="border-b border-gray-200 dark:border-gray-800 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 flex items-center">
        <Logo size="small" onClick={onNavigate} className="w-full" />
      </div>

      <div className="flex-1 py-3 sm:py-4 lg:py-6">
        <div className="px-2 sm:px-3 lg:px-4 mb-2 sm:mb-3">
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            NAVIGATION
          </span>
        </div>

        <nav className="space-y-1 px-1.5 sm:px-2 lg:px-3">
          {menuItems.map(item => (
            <div key={item.name}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleExpand(item.name)}
                    className={`w-full flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
                      isParentActive(item.children)
                        ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    <span className="flex items-center gap-2 sm:gap-3">
                      <span className="w-4 h-4 sm:w-[18px] sm:h-[18px] flex-shrink-0">{item.icon}</span>
                      <span className="truncate">{item.name}</span>
                    </span>
                    <ChevronDown size={14} className="sm:w-4 sm:h-4 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                  </button>
                  {expandedItems.includes(item.name) && (
                    <div className="ml-6 sm:ml-7 lg:ml-9 mt-1 space-y-0">
                      {item.children.map((child) => {
                        if (child.isCategory) {
                          return (
                            <div key={child.path} className="px-2 sm:px-3 py-1 sm:py-1.5 mt-1">
                              <span className="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                {child.name}
                              </span>
                            </div>
                          );
                        }
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={onNavigate}
                            onMouseDown={e => e.preventDefault()}
                            className={`block px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
                              isActive(child.path)
                                ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}
                            style={{ fontWeight: 600 }}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path!}
                  onClick={onNavigate}
                  onMouseDown={e => e.preventDefault()}
                  className={`flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.path!)
                      ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <span className="w-4 h-4 sm:w-[18px] sm:h-[18px] flex-shrink-0">{item.icon}</span>
                    <span className="truncate">{item.name}</span>
                  </span>
                  <ChevronRight size={14} className="sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="p-2 sm:p-3 lg:p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2 sm:p-3 lg:p-4 text-center">
          <Download className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mx-auto mb-1.5 sm:mb-2 lg:mb-3 text-blue-600 dark:text-blue-400" />
          <h3 className="text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-900 dark:text-white mb-0.5 sm:mb-1">
            Downloading Center
          </h3>
          <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 mb-1.5 sm:mb-2 lg:mb-3">
            Duralux is a production ready CRM to get started up and running easily.
          </p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-[10px] sm:text-xs lg:text-sm font-medium py-1.5 sm:py-2 px-2 sm:px-3 lg:px-4 rounded-lg transition-colors">
            DOWNLOAD NOW
          </button>
        </div>
      </div>
    </aside>
  );
}

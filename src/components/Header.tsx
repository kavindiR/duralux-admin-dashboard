import { Menu, Search, Maximize, Bell, AlertCircle, Moon, Sun, LogOut, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useFirebaseAuth } from '../contexts/FirebaseAuth';

interface HeaderProps {
  breadcrumbs?: { label: string; path?: string }[];
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { isDark, toggleTheme } = useTheme();
  const { logout, user } = useFirebaseAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/auth/login', { replace: true });
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Toggle Icon */}
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Menu size={20} className="text-gray-700 dark:text-gray-300" />
          </button>

          {/* Circular Blue Plus Button */}
          <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors shadow-sm">
            <Plus size={20} className="text-white" strokeWidth={2.5} />
          </button>

          {/* MEGA MENU Button - Text Only */}
          <button className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <span className="text-gray-700 dark:text-gray-300 font-semibold uppercase">MEGA MENU</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <Search size={20} className="text-gray-700 dark:text-gray-300" />
          </button>

          <button className="hidden sm:block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <img
              src="https://flagcdn.com/w40/us.png"
              alt="US"
              className="w-5 h-4 rounded"
            />
          </button>

          <button className="hidden sm:block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <Maximize size={20} className="text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {isDark ? (
              <Sun size={20} className="text-gray-300" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>

          <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <AlertCircle size={20} className="text-gray-700 dark:text-gray-300" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-green-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <Bell size={20} className="text-gray-700 dark:text-gray-300" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              1
            </span>
          </button>

          <div className="flex items-center gap-2">
            {user && (
              <button
                onClick={handleLogout}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                title="Logout"
              >
                <LogOut size={20} className="text-gray-700 dark:text-gray-300" />
              </button>
            )}
            <button className="flex items-center gap-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

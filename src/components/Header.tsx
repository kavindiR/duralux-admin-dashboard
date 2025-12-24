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
      <div className="flex items-center justify-between px-2 sm:px-4 lg:px-6 py-2 sm:py-3 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 flex-shrink-0">
          {/* Hamburger Menu Toggle Icon */}
          <button
            onClick={onMenuClick}
            className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0"
          >
            <Menu size={18} className="sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Circular Blue Plus Button */}
          <button className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors shadow-sm flex-shrink-0">
            <Plus size={16} className="sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
          </button>

          {/* MEGA MENU Button - Text Only */}
          <button className="px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors hidden xs:block">
            <span className="text-gray-700 dark:text-gray-300 font-semibold uppercase whitespace-nowrap">MEGA MENU</span>
          </button>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 flex-shrink-0">
          <button className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0">
            <Search size={18} className="sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
          </button>

          <button className="hidden md:block p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0">
            <img
              src="https://flagcdn.com/w40/us.png"
              alt="US"
              className="w-4 h-3 sm:w-5 sm:h-4 rounded"
            />
          </button>

          <button className="hidden md:block p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0">
            <Maximize size={18} className="sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0"
          >
            {isDark ? (
              <Sun size={18} className="sm:w-5 sm:h-5 text-gray-300" />
            ) : (
              <Moon size={18} className="sm:w-5 sm:h-5 text-gray-700" />
            )}
          </button>

          <button className="relative p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0">
            <AlertCircle size={18} className="sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
            <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 text-white text-[8px] sm:text-[10px] font-bold rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          <button className="relative p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0">
            <Bell size={18} className="sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
            <span className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 text-white text-[8px] sm:text-[10px] font-bold rounded-full flex items-center justify-center">
              1
            </span>
          </button>

          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            {user && (
              <button
                onClick={handleLogout}
                className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0"
                title="Logout"
              >
                <LogOut size={18} className="sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
              </button>
            )}
            <button className="flex items-center gap-1 sm:gap-2 p-0.5 sm:p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Profile"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

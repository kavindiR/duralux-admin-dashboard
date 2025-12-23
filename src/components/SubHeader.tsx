import { Calendar, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SubHeaderProps {
  breadcrumbs: { label: string; path?: string }[];
  showDateRange?: boolean;
  showFilter?: boolean;
  dateRange?: string;
}

export default function SubHeader({ 
  breadcrumbs, 
  showDateRange = true, 
  showFilter = true,
  dateRange = 'DEC 01,25 - DEC 31,25'
}: SubHeaderProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left Section - Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((crumb, index) => {
            const isFirst = index === 0;
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <div key={index} className="flex items-center gap-2">
                {isFirst ? (
                  <>
                    {crumb.path ? (
                      <Link 
                        to={crumb.path}
                        className="font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {crumb.label}
                      </span>
                    )}
                    <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
                  </>
                ) : isLast ? (
                  <span className="text-gray-500 dark:text-gray-400">
                    {crumb.label}
                  </span>
                ) : (
                  <>
                    {crumb.path ? (
                      <Link 
                        to={crumb.path}
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300">
                        {crumb.label}
                      </span>
                    )}
                    <span className="text-gray-400 dark:text-gray-500 mx-1">&gt;</span>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Section - Action Buttons */}
        <div className="flex items-center gap-3">
          {showDateRange && (
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <Calendar size={14} className="text-gray-600 dark:text-gray-400" />
              <span className="text-sm text-gray-700 dark:text-gray-300">{dateRange}</span>
            </button>
          )}
          {showFilter && (
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-semibold">
              <Filter size={14} className="text-gray-600 dark:text-gray-400" />
              <span className="text-sm uppercase">FILTER</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


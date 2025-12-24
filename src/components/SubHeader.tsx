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
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 px-2 sm:px-4 lg:px-6 py-2 sm:py-3">
        {/* Left Section - Breadcrumbs */}
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm flex-wrap min-w-0 flex-1">
          {breadcrumbs.map((crumb, index) => {
            const isFirst = index === 0;
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <div key={index} className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                {isFirst ? (
                  <>
                    {crumb.path ? (
                      <Link 
                        to={crumb.path}
                        className="font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors truncate"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="font-semibold text-gray-700 dark:text-gray-300 truncate">
                        {crumb.label}
                      </span>
                    )}
                    <div className="w-px h-3 sm:h-4 bg-gray-300 dark:bg-gray-600 flex-shrink-0" />
                  </>
                ) : isLast ? (
                  <span className="text-gray-500 dark:text-gray-400 truncate">
                    {crumb.label}
                  </span>
                ) : (
                  <>
                    {crumb.path ? (
                      <Link 
                        to={crumb.path}
                        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors truncate"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300 truncate">
                        {crumb.label}
                      </span>
                    )}
                    <span className="text-gray-400 dark:text-gray-500 mx-0.5 sm:mx-1 flex-shrink-0">&gt;</span>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Section - Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 w-full sm:w-auto">
          {showDateRange && (
            <button className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors whitespace-nowrap">
              <Calendar size={12} className="sm:w-3.5 sm:h-3.5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 truncate">{dateRange}</span>
            </button>
          )}
          {showFilter && (
            <button className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-semibold whitespace-nowrap">
              <Filter size={12} className="sm:w-3.5 sm:h-3.5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm uppercase">FILTER</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


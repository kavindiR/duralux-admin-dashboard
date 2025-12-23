import { BarChart3, Filter, Paperclip } from 'lucide-react';
import Layout from '../../components/Layout';

export default function ProjectsCreate() {
  return (
    <Layout breadcrumbs={[{ label: 'Projects' }, { label: 'Home' }, { label: 'Create' }]} showSubHeader={false}>
      {/* Custom SubHeader matching image design */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Left Section - Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-gray-800 dark:text-gray-200">Projects</span>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
            <span className="text-gray-700 dark:text-gray-300">Home</span>
            <span className="text-gray-400 dark:text-gray-500 mx-1">&gt;</span>
            <span className="text-gray-500 dark:text-gray-400">Create</span>
          </div>

          {/* Right Section - Icon Buttons and Create Button */}
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>
            <button className="w-9 h-9 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center">
              <Filter className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>
            <button className="w-9 h-9 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center">
              <Paperclip className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors flex items-center gap-2 text-sm font-medium">
              <span>+</span>
              <span>CREATE PROJECT</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">{/* Header + footer only (no inner content yet) */}</div>
    </Layout>
  );
}



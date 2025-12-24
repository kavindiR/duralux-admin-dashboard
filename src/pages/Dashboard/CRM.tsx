import Layout from '../../components/Layout';
import StatCard from '../../components/StatCard';
import { Users, Building2, TrendingUp, DollarSign, Phone, Mail } from 'lucide-react';

export default function CRM() {
  const crmStats = [
    {
      icon: <Users size={24} />,
      value: '1,234',
      label: 'Total Leads',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: <Building2 size={24} />,
      value: '856',
      label: 'Active Customers',
      iconColor: 'text-green-600',
      iconBg: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      icon: <TrendingUp size={24} />,
      value: '92.5%',
      label: 'Conversion Rate',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      icon: <DollarSign size={24} />,
      value: '$245K',
      label: 'Revenue (MTD)',
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-50 dark:bg-orange-900/20',
    },
    {
      icon: <Phone size={24} />,
      value: '342',
      label: 'Calls Made',
      iconColor: 'text-cyan-600',
      iconBg: 'bg-cyan-50 dark:bg-cyan-900/20',
    },
    {
      icon: <Mail size={24} />,
      value: '1,089',
      label: 'Emails Sent',
      iconColor: 'text-pink-600',
      iconBg: 'bg-pink-50 dark:bg-pink-900/20',
    },
  ];

  return (
    <Layout 
      breadcrumbs={[{ label: 'Dashboards' }, { label: 'Home' }, { label: 'CRM' }]}
      subHeaderDateRange="DEC 01,25 - DEC 31,25"
    >
      <div className="p-3 sm:p-4 lg:p-6 min-h-screen">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white mb-1">CRM Dashboard</h1>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Customer Relationship Management Overview</p>
        </div>

        {/* CRM Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-4 sm:mb-6">
          {crmStats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* CRM Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4 sm:p-6 shadow-sm">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Recent Activities</h2>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="sm:w-[18px] sm:h-[18px] text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">New call scheduled</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="sm:w-[18px] sm:h-[18px] text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">Email sent to client</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users size={16} className="sm:w-[18px] sm:h-[18px] text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">New lead added</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">1 day ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4 sm:p-6 shadow-sm">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button className="p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors text-center">
                <Phone size={20} className="sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 mx-auto mb-1.5 sm:mb-2" />
                <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Add Call</p>
              </button>
              <button className="p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors text-center">
                <Mail size={20} className="sm:w-6 sm:h-6 text-green-600 dark:text-green-400 mx-auto mb-1.5 sm:mb-2" />
                <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Send Email</p>
              </button>
              <button className="p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 rounded-lg transition-colors text-center">
                <Users size={20} className="sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400 mx-auto mb-1.5 sm:mb-2" />
                <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">New Lead</p>
              </button>
              <button className="p-3 sm:p-4 bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/30 rounded-lg transition-colors text-center">
                <Building2 size={20} className="sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400 mx-auto mb-1.5 sm:mb-2" />
                <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">New Account</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


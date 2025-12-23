import Layout from '../../components/Layout';

export default function Settings() {
  return (
    <Layout breadcrumbs={[{ label: 'Settings' }, { label: 'Home' }, { label: 'General' }]}>
      <div className="p-4 sm:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Manage your application settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">General Settings</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Configure general application settings and preferences.
            </p>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
              Configure
            </button>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Profile Settings</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Update your profile information and account details.
            </p>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
              Edit Profile
            </button>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Security</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Manage security settings and authentication preferences.
            </p>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
              Security Options
            </button>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notifications</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Configure notification preferences and alerts.
            </p>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
              Notification Settings
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

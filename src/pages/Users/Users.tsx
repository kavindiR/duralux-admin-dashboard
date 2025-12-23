import Layout from '../../components/Layout';
import PaginatedTable from '../../components/PaginatedTable';
import { fetchUsers, User } from '../../lib/mockApi';

export default function Users() {
  return (
    <Layout breadcrumbs={[{ label: 'Users' }, { label: 'Home' }, { label: 'List' }]}>
      <div className="p-4 sm:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Users Management</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Manage and view all system users</p>
        </div>

        <PaginatedTable<User>
          fetchPage={(p, s, q) => fetchUsers(p, s, q)}
          columns={['ID', 'Name', 'Email', 'Role']}
          renderRow={(u) => (
            <>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{u.id}</td>
              <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{u.name}</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{u.email}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    u.role === 'Admin'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}
                >
                  {u.role}
                </span>
              </td>
            </>
          )}
        />
      </div>
    </Layout>
  );
}

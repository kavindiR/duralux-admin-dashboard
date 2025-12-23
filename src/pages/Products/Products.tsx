import Layout from '../../components/Layout';
import PaginatedTable from '../../components/PaginatedTable';
import { fetchProducts, Product } from '../../lib/mockApi';

export default function Products() {
  return (
    <Layout breadcrumbs={[{ label: 'Products' }, { label: 'Home' }, { label: 'List' }]}>
      <div className="p-4 sm:p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Products Management</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">View and manage product inventory</p>
        </div>

        <PaginatedTable<Product>
          fetchPage={(p, s, q) => fetchProducts(p, s, q)}
          columns={['ID', 'Name', 'SKU', 'Price']}
          renderRow={(p) => (
            <>
              <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">{p.id}</td>
              <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{p.name}</td>
              <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 font-mono">{p.sku}</td>
              <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">
                ${p.price.toFixed(2)}
              </td>
            </>
          )}
        />
      </div>
    </Layout>
  );
}

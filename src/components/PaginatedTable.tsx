import { useEffect, useMemo, useState } from 'react';

interface PaginatedTableProps<T> {
  fetchPage: (page: number, size: number, q?: string) => Promise<{ data: T[]; total: number }>;
  renderRow: (item: T) => JSX.Element;
  columns: string[];
  pageSizeOptions?: number[];
}

export default function PaginatedTable<T>({ fetchPage, renderRow, columns, pageSizeOptions = [5, 10, 20] }: PaginatedTableProps<T>) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(pageSizeOptions[1] || 10);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchPage(page, pageSize, query)
      .then(res => {
        if (!mounted) return;
        setData(res.data);
        setTotal(res.total);
        setLoading(false);
      })
      .catch(err => {
        if (!mounted) return;
        console.error('Error fetching data:', err);
        setLoading(false);
        setData([]);
        setTotal(0);
      });
    return () => {
      mounted = false;
    };
  }, [page, pageSize, query, fetchPage]);

  const pages = useMemo(() => Math.max(1, Math.ceil(total / pageSize)), [total, pageSize]);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
      <div className="p-2 sm:p-3 lg:p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 flex-1 sm:flex-initial">
            <input
              value={query}
              onChange={e => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search..."
              className="px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-700 rounded-md text-xs sm:text-sm w-full sm:w-48 lg:w-64 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-0"
            />
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <label className="whitespace-nowrap">Rows per page:</label>
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
              className="px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
            >
              {pageSizeOptions.map(n => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              {columns.map(col => (
                <th key={col} className="px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                  <div className="flex flex-col items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                    <span>Loading…</span>
                  </div>
                </td>
              </tr>
            ) : data.length ? (
              data.map((row: any) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {renderRow(row)}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="p-2 sm:p-3 lg:p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 text-xs sm:text-sm">
          <div className="text-gray-600 dark:text-gray-400">
            Showing <span className="font-medium text-gray-900 dark:text-white">{(page - 1) * pageSize + 1}</span> to{' '}
            <span className="font-medium text-gray-900 dark:text-white">{Math.min(page * pageSize, total)}</span> of{' '}
            <span className="font-medium text-gray-900 dark:text-white">{total}</span> results
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1 || loading}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs sm:text-sm whitespace-nowrap"
            >
              Previous
            </button>
            <div className="px-2 sm:px-4 py-1.5 sm:py-2 text-gray-700 dark:text-gray-300 whitespace-nowrap">
              Page <span className="font-medium">{page}</span> of <span className="font-medium">{pages}</span>
            </div>
            <button
              onClick={() => setPage(p => Math.min(pages, p + 1))}
              disabled={page === pages || loading}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs sm:text-sm whitespace-nowrap"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

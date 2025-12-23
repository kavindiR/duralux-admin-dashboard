type PageResult<T> = { data: T[]; total: number };

function timeout<T>(value: T, ms = 300) {
  return new Promise<T>(res => setTimeout(() => res(value), ms));
}

export interface User { id: number; name: string; email: string; role: string; }
export interface Product { id: number; name: string; sku: string; price: number; }

// API Base URL - defaults to localhost:4000, can be overridden via environment variable
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

// Fallback mock data (used when API server is unavailable)
const USERS: User[] = Array.from({ length: 123 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 3 === 0 ? 'Admin' : 'User',
}));

const PRODUCTS: Product[] = Array.from({ length: 87 }).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  sku: `SKU-${1000 + i}`,
  price: Math.round((Math.random() * 200 + 5) * 100) / 100,
}));

// Helper function to fetch from API with fallback to mock data
async function fetchFromAPI<T>(
  endpoint: string,
  page: number,
  pageSize: number,
  q: string,
  fallbackData: T[],
  filterFn: (item: T, query: string) => boolean
): Promise<PageResult<T>> {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
      ...(q && { q }),
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(`${API_BASE_URL}${endpoint}?${params}`, {
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const result = await response.json();
    return timeout(result, 100); // Small delay for smooth UX
  } catch (error) {
    // If API server is unavailable, fall back to mock data
    console.warn(`API server unavailable (${endpoint}), using mock data:`, error);
    
    const filtered = q ? fallbackData.filter(item => filterFn(item, q)) : fallbackData;
    const start = (page - 1) * pageSize;
    const data = filtered.slice(start, start + pageSize);
    return timeout({ data, total: filtered.length }, 300);
  }
}

export async function fetchUsers(page = 1, pageSize = 10, q = ''): Promise<PageResult<User>> {
  return fetchFromAPI<User>(
    '/api/users',
    page,
    pageSize,
    q,
    USERS,
    (user, query) => 
      user.name.toLowerCase().includes(query.toLowerCase()) || 
      user.email.toLowerCase().includes(query.toLowerCase())
  );
}

export async function fetchProducts(page = 1, pageSize = 10, q = ''): Promise<PageResult<Product>> {
  return fetchFromAPI<Product>(
    '/api/products',
    page,
    pageSize,
    q,
    PRODUCTS,
    (product, query) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.sku.toLowerCase().includes(query.toLowerCase())
  );
}

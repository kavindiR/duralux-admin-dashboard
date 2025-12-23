const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Simple in-memory datasets
const USERS = Array.from({ length: 50 }).map((_, i) => ({ id: i + 1, name: `User ${i + 1}`, email: `user${i + 1}@example.com`, role: i % 3 === 0 ? 'Admin' : 'User' }));
const PRODUCTS = Array.from({ length: 30 }).map((_, i) => ({ id: i + 1, name: `Product ${i + 1}`, sku: `SKU-${1000 + i}`, price: Math.round((Math.random() * 200 + 5) * 100) / 100 }));

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.get('/api/users', (req, res) => {
  const page = parseInt(req.query.page || '1', 10);
  const pageSize = parseInt(req.query.pageSize || '10', 10);
  const q = (req.query.q || '').toLowerCase();
  const filtered = q ? USERS.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)) : USERS;
  const start = (page - 1) * pageSize;
  res.json({ data: filtered.slice(start, start + pageSize), total: filtered.length });
});

app.get('/api/products', (req, res) => {
  const page = parseInt(req.query.page || '1', 10);
  const pageSize = parseInt(req.query.pageSize || '10', 10);
  const q = (req.query.q || '').toLowerCase();
  const filtered = q ? PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)) : PRODUCTS;
  const start = (page - 1) * pageSize;
  res.json({ data: filtered.slice(start, start + pageSize), total: filtered.length });
});

app.get('/api/analytics/overview', (req, res) => {
  // return sample analytics payload similar to the UI
  res.json({
    emailReports: {
      totalEmail: 50545,
      emailSent: 25000,
      emailsDelivered: 20354,
      emailOpened: 12422,
      emailClicked: 6248,
      emailBounce: 2047,
    },
    visitors: {
      labels: ['JAN22','FEB22','MAR22','APR22','MAY22','JUN22','JUL22'],
      series: [
        Array.from({ length: 7 }).map(() => Math.round(Math.random() * 80000 + 10000)),
        Array.from({ length: 7 }).map(() => Math.round(Math.random() * 70000 + 8000)),
      ],
    },
  });
});

app.listen(port, () => {
  console.log(`Duralux API server listening on http://localhost:${port}`);
});

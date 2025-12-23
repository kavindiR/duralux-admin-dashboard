# DURALUX Admin Dashboard

A modern, feature-rich admin dashboard built with React, TypeScript, Tailwind CSS, Firebase Authentication, and a custom Express API server. This project demonstrates clean architecture, reusable components, responsive design, and professional implementation patterns.

## ✨ Key Features

- **Multi-page Admin Dashboard** - Analytics, CRM, Customers, Projects, Users, Products, and Settings pages
- **Firebase Authentication** - Secure login/logout with protected routes
- **Client-side Routing** - React Router DOM with protected route wrapper
- **Theme Support** - Light/dark mode with persisted preference
- **Reusable Components** - Header, Sidebar, Layout, StatCard, PaginatedTable
- **Professional Paginated Table** - Searchable, sortable, responsive data table with loading states
- **Custom API Server** - Express.js backend for data fetching (bonus feature)
- **Mobile-first Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **TypeScript** - Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend:**
  - React 18 + TypeScript
  - Vite for fast development and build
  - Tailwind CSS for styling
  - React Router DOM for navigation
  - Firebase Auth for authentication
  - Lucide React for icons

- **Backend (Optional):**
  - Express.js
  - CORS enabled
  - RESTful API endpoints

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx       # Top navigation bar with breadcrumbs
│   ├── Sidebar.tsx     # Side navigation menu
│   ├── Layout.tsx      # Main layout wrapper
│   ├── StatCard.tsx    # Statistics card component
│   ├── PaginatedTable.tsx  # Professional paginated table
│   └── ProtectedRoute.tsx  # Route protection wrapper
├── contexts/           # React context providers
│   ├── ThemeContext.tsx    # Theme management (light/dark)
│   └── FirebaseAuth.tsx    # Firebase authentication context
├── lib/                # Utilities & API clients
│   └── mockApi.ts      # Mock API for local development
├── pages/              # Route pages
│   ├── Auth/
│   │   └── Login.tsx   # Login page with Firebase Auth
│   ├── Dashboard/
│   │   ├── Analytics.tsx   # Analytics dashboard
│   │   └── CRM.tsx         # CRM dashboard
│   ├── Customers/      # Customer management pages
│   ├── Projects/       # Project management pages
│   ├── Users/          # User management page
│   ├── Products/       # Product management page
│   └── Settings/       # Settings page
├── App.tsx             # Route definitions
└── main.tsx           # App bootstrap

server/                 # Express API server (optional)
├── index.js           # API server implementation
└── package.json       # Server dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase project (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "DURALUX Admin Dashboard"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Firebase Authentication (required for production)
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   
   # API Server URL (optional, defaults to http://localhost:4000)
   VITE_API_URL=http://localhost:4000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

### Running the API Server (Optional but Recommended)

The project includes a custom Express.js API server for data fetching. The frontend will automatically use the API server when available, and fall back to mock data if the server is not running.

1. **Navigate to server directory**
   ```bash
   cd server
   ```

2. **Install server dependencies**
   ```bash
   npm install
   ```

3. **Start the API server**
   ```bash
   npm start
   ```

   The API will be available at `http://localhost:4000`

   **Note:** The frontend will automatically connect to the API server. If the server is not running, the app will gracefully fall back to using mock data.

   **Available endpoints:**
   - `GET /api/health` - Health check
   - `GET /api/users?page=1&pageSize=10&q=search` - Paginated users
   - `GET /api/products?page=1&pageSize=10&q=search` - Paginated products
   - `GET /api/analytics/overview` - Analytics data

## 📱 Pages Overview

- **Analytics (`/`)** - Dashboard overview with email reports, visitor statistics, browser analytics, and key metrics
- **CRM (`/crm`)** - CRM dashboard (placeholder)
- **Customers (`/customers`)** - Customer list and management
- **Projects (`/projects`)** - Project management with status tracking
- **Users (`/users`)** - User management with paginated table
- **Products (`/products`)** - Product inventory with paginated table
- **Settings (`/settings`)** - Application settings and preferences
- **Login (`/auth/login`)** - Firebase authentication login page

## 🔐 Authentication

The application uses Firebase Authentication for secure user login:

1. **Protected Routes** - All dashboard routes are protected and require authentication
2. **Login Flow** - Users are redirected to `/auth/login` if not authenticated
3. **Auto-redirect** - After successful login, users are redirected to the dashboard
4. **Logout** - Logout button available in the header

### Setting up Firebase

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Email/Password authentication
3. Copy your Firebase configuration to the `.env` file
4. Create test users in Firebase Console > Authentication > Users

## 🎨 Features in Detail

### Responsive Design

- **Mobile (< 640px)**: Collapsible sidebar, stacked layouts, touch-friendly buttons
- **Tablet (640px - 1024px)**: Optimized spacing, responsive tables
- **Desktop (> 1024px)**: Full sidebar, multi-column layouts, enhanced navigation

### Paginated Table Component

The `PaginatedTable` component provides:
- Client-side pagination
- Real-time search filtering
- Configurable page sizes
- Loading states with spinner
- Empty state handling
- Responsive design
- Dark mode support

### Theme System

- Light and dark mode support
- Theme preference persisted in localStorage
- Smooth transitions between themes
- Accessible color contrasts

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

### Code Quality

- TypeScript for type safety
- ESLint for code linting
- Consistent code formatting
- Component-based architecture
- Reusable utility functions

## 📦 Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## 🚢 Deployment

### Vercel / Netlify

1. Connect your repository
2. Set environment variables in the platform dashboard
3. Deploy automatically on push

### Manual Deployment

1. Build the project: `npm run build`
2. Serve the `dist/` directory with a static file server
3. Ensure environment variables are set in your hosting platform

## 📝 Git Commits

This project follows conventional commit messages:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions/changes
- `chore:` - Build process or auxiliary tool changes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- Built with React and TypeScript
- Styled with Tailwind CSS
- Icons from Lucide React
- Authentication powered by Firebase

---

**Note:** This is a production-ready admin dashboard template. Customize it according to your needs and requirements.

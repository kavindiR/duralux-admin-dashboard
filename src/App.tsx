import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Analytics from './pages/Dashboard/Analytics';
import CRM from './pages/Dashboard/CRM';
import Customers from './pages/Customers/Customers';
import CustomerView from './pages/Customers/CustomerView';
import CustomersCreate from './pages/Customers/CustomersCreate';
import Projects from './pages/Projects/Projects';
import ProjectsView from './pages/Projects/ProjectsView';
import ProjectsCreate from './pages/Projects/ProjectsCreate';
import Settings from './pages/Settings/Settings';
import Users from './pages/Users/Users';
import Login from './pages/Auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/auth/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/crm"
          element={
            <ProtectedRoute>
              <CRM />
            </ProtectedRoute>
          }
        />

        {/* Customers */}
        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <Customers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customers/view"
          element={
            <ProtectedRoute>
              <CustomerView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customers/create"
          element={
            <ProtectedRoute>
              <CustomersCreate />
            </ProtectedRoute>
          }
        />

        {/* Projects */}
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects/view"
          element={
            <ProtectedRoute>
              <ProjectsView />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects/create"
          element={
            <ProtectedRoute>
              <ProjectsCreate />
            </ProtectedRoute>
          }
        />

        {/* Users */}
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

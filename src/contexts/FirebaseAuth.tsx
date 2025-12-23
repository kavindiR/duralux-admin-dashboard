import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User as FirebaseUser,
} from 'firebase/auth';

interface AuthContextValue {
  user: FirebaseUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Development mode mock user (only used when Firebase is not configured)
interface MockUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [devUser, setDevUser] = useState<MockUser | null>(null);

  // Development mode: Check if we should use mock authentication
  const isDevMode = import.meta.env.DEV && !import.meta.env.VITE_FIREBASE_PROJECT_ID;

  useEffect(() => {
    // In dev mode without Firebase, skip Firebase initialization
    if (isDevMode) {
      setLoading(false);
      return;
    }

    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
      appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
    };

    const hasFirebaseConfig = firebaseConfig.projectId && firebaseConfig.apiKey;

    if (!hasFirebaseConfig) {
      console.warn('Firebase config missing. Authentication will not work. Please set Firebase environment variables in .env file.');
      setLoading(false);
      return;
    }

    if (!getApps().length) {
      try {
        initializeApp(firebaseConfig);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('Firebase init error', e);
        setLoading(false);
        return;
      }
    }

    try {
      const auth = getAuth();
      const unsub = onAuthStateChanged(auth, u => {
        setUser(u);
        setLoading(false);
      });
      return () => unsub();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn('Firebase auth error', e);
      setLoading(false);
    }
  }, [isDevMode]);

  async function login(email: string, password: string) {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
    };
    const hasFirebaseConfig = firebaseConfig.projectId && firebaseConfig.apiKey;

    // Development mode: Use mock authentication
    if (isDevMode) {
      setLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Default test credentials for development
      const testEmail = 'admin@duralux.com';
      const testPassword = 'admin123';
      
      if (email === testEmail && password === testPassword) {
        const mockUser: MockUser = {
          uid: 'dev-user-123',
          email: testEmail,
          displayName: 'Development Admin',
        };
        setDevUser(mockUser);
        setLoading(false);
        return;
      } else {
        setLoading(false);
        throw new Error('Invalid credentials. Use: admin@duralux.com / admin123');
      }
    }

    if (!hasFirebaseConfig) {
      throw new Error('Firebase is not configured. Please set Firebase environment variables in .env file.');
    }
    setLoading(true);
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    if (isDevMode) {
      setDevUser(null);
      return;
    }

    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
    };
    const hasFirebaseConfig = firebaseConfig.projectId && firebaseConfig.apiKey;

    if (!hasFirebaseConfig) {
      setUser(null);
      return;
    }
    setLoading(true);
    try {
      const auth = getAuth();
      await signOut(auth);
    } finally {
      setLoading(false);
    }
  }

  // In dev mode, use mock user; otherwise use Firebase user
  // Create a mock FirebaseUser-like object for dev mode
  const currentUser = isDevMode && devUser
    ? ({
        uid: devUser.uid,
        email: devUser.email,
        displayName: devUser.displayName,
        emailVerified: true,
        isAnonymous: false,
        phoneNumber: null,
        photoURL: null,
        providerId: 'password',
        metadata: {} as any,
        providerData: [],
        refreshToken: '',
        tenantId: null,
        delete: async () => {},
        getIdToken: async () => '',
        getIdTokenResult: async () => ({} as any),
        reload: async () => {},
        toJSON: () => ({}),
      } as unknown as FirebaseUser)
    : user;

  return (
    <AuthContext.Provider value={{ user: currentUser, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useFirebaseAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useFirebaseAuth must be used within FirebaseAuthProvider');
  return ctx;
}

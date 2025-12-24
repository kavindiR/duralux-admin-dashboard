import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebaseAuth } from '../../contexts/FirebaseAuth';
import { Mail, Lock, Eye, EyeOff, Shield, Sparkles } from 'lucide-react';

export default function Login() {
  const { login, user, loading } = useFirebaseAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user && !loading) {
      navigate('/', { replace: true });
    }
  }, [user, loading, navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      await login(email, password);
      // Navigation will happen via useEffect when user state updates
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials.');
      setIsSubmitting(false);
    }
  }

  // Show loading only if we're actually loading, not if user exists
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-gray-600 dark:text-gray-400 font-medium">Loading...</div>
        </div>
      </div>
    );
  }

  // If user exists, redirect (handled by useEffect)
  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-gray-600 dark:text-gray-400 font-medium">Redirecting...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-mesh animate-gradient-mesh"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `rgba(${Math.random() > 0.5 ? '37, 99, 235' : '59, 130, 246'}, ${Math.random() * 0.5 + 0.3})`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          />
        ))}
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 dark:opacity-10 animate-orb-1"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 dark:opacity-10 animate-orb-2"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 dark:opacity-10 animate-orb-3"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-[90px] opacity-20 dark:opacity-8 animate-orb-4"></div>
      </div>

      {/* Animated Wave Layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-10 dark:opacity-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="url(#waveGradient)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="animate-wave-1"></path>
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-48 opacity-8 dark:opacity-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="url(#waveGradient2)" d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,186.7C672,203,768,213,864,197.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="animate-wave-2"></path>
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10 px-2">
        <form onSubmit={handleSubmit} className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-800/50">
          {/* Logo and Header */}
          <div className="text-center mb-6 sm:mb-8">
             <div className="mb-3 sm:mb-4 lg:mb-6">
               <h1 
                 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white mb-1 tracking-wide leading-none select-none"
                 style={{ 
                   fontFamily: '"Times New Roman", "Georgia", "Palatino", serif',
                   fontWeight: 900,
                   letterSpacing: '0.08em',
                   textShadow: 'none',
                   WebkitFontSmoothing: 'antialiased',
                   MozOsxFontSmoothing: 'grayscale'
                 }}
               >
                 DURALUX
               </h1>
             </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base lg:text-lg">Admin Dashboard</p>
            <div className="mt-2 sm:mt-3 lg:mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-2">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-center">Welcome back! Please sign in to continue</span>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-2 sm:gap-3 animate-shake">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-[10px] sm:text-xs font-bold">!</span>
              </div>
              <div className="text-red-600 dark:text-red-400 text-xs sm:text-sm flex-1">{error}</div>
            </div>
          )}

          {/* Form Fields */}
          <div className="space-y-4 sm:space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" strokeWidth={2} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 lg:py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="admin@duralux.com"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" strokeWidth={2} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2.5 sm:py-3 lg:py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="Enter your password"
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                  ) : (
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 sm:mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-blue-400 disabled:to-indigo-400 disabled:cursor-not-allowed text-white font-semibold py-2.5 sm:py-3 lg:py-3.5 px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Signing in...</span>
              </>
            ) : (
              <>
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
                <span>Sign In</span>
              </>
            )}
          </button>

          {/* Development Mode Info */}
          <div className="mt-4 sm:mt-6 space-y-2">
            {!import.meta.env.VITE_FIREBASE_PROJECT_ID && import.meta.env.DEV ? (
              <div className="p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                <p className="text-[10px] sm:text-xs font-bold text-blue-900 dark:text-blue-300 mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>Development Mode - Test Credentials</span>
                </p>
                <div className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs text-blue-700 dark:text-blue-400">
                  <p>
                    <span className="font-semibold">Email:</span>{' '}
                    <span className="font-mono bg-blue-100 dark:bg-blue-900/30 px-1.5 sm:px-2 py-0.5 rounded break-all">admin@duralux.com</span>
                  </p>
                  <p>
                    <span className="font-semibold">Password:</span>{' '}
                    <span className="font-mono bg-blue-100 dark:bg-blue-900/30 px-1.5 sm:px-2 py-0.5 rounded break-all">admin123</span>
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-[10px] sm:text-xs text-center text-gray-500 dark:text-gray-400 px-2">
                {import.meta.env.VITE_FIREBASE_PROJECT_ID
                  ? 'admin@duralux.com / admin123'
                  : 'Firebase not configured. Please set VITE_FIREBASE_* environment variables in .env file.'}
              </p>
            )}
          </div>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 DURALUX Admin Dashboard. All rights reserved.
          </p>
        </div>
      </div>

      {/* Professional Background Animations */}
      <style>{`
        /* Gradient Mesh Animation */
        .bg-gradient-mesh {
          background: 
            radial-gradient(at 0% 0%, rgba(37, 99, 235, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 0%, rgba(59, 130, 246, 0.15) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(96, 165, 250, 0.15) 0px, transparent 50%),
            radial-gradient(at 0% 100%, rgba(37, 99, 235, 0.15) 0px, transparent 50%);
          background-size: 200% 200%;
        }
        
        @keyframes gradientMesh {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        
        .animate-gradient-mesh {
          animation: gradientMesh 15s ease infinite;
        }

        /* Grid Movement */
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        /* Floating Particles */
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(20px, -30px) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translate(-15px, -50px) scale(0.8);
            opacity: 0.4;
          }
          75% {
            transform: translate(30px, -20px) scale(1.1);
            opacity: 0.5;
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }

        /* Orb Animations */
        @keyframes orb1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, -80px) scale(1.15);
          }
          66% {
            transform: translate(-30px, 40px) scale(0.95);
          }
        }
        
        @keyframes orb2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-60px, -50px) scale(1.1);
          }
          66% {
            transform: translate(40px, 60px) scale(0.9);
          }
        }
        
        @keyframes orb3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(70px, -40px) scale(1.2);
          }
          66% {
            transform: translate(-50px, 30px) scale(0.85);
          }
        }
        
        @keyframes orb4 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, -60px) scale(1.1);
          }
        }
        
        .animate-orb-1 {
          animation: orb1 20s ease-in-out infinite;
        }
        
        .animate-orb-2 {
          animation: orb2 25s ease-in-out infinite;
          animation-delay: -5s;
        }
        
        .animate-orb-3 {
          animation: orb3 22s ease-in-out infinite;
          animation-delay: -10s;
        }
        
        .animate-orb-4 {
          animation: orb4 18s ease-in-out infinite;
          animation-delay: -7s;
        }

        /* Wave Animations */
        @keyframes wave1 {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-25%) translateY(-10px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }
        
        @keyframes wave2 {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(25%) translateY(10px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }
        
        .animate-wave-1 {
          animation: wave1 12s ease-in-out infinite;
        }
        
        .animate-wave-2 {
          animation: wave2 15s ease-in-out infinite;
          animation-delay: -3s;
        }

        /* Shake Animation for Errors */
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}

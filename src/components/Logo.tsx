import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export default function Logo({ className = '', showSubtitle = false, size = 'medium', onClick }: LogoProps) {
  const sizeClasses = {
    small: 'text-2xl sm:text-3xl',
    medium: 'text-3xl sm:text-4xl',
    large: 'text-4xl sm:text-5xl md:text-6xl'
  };

  return (
    <Link 
      to="/" 
      onClick={onClick}
      className={`block ${className}`}
    >
      <div className="text-center">
        <h1 
          className={`${sizeClasses[size]} font-black text-black dark:text-white tracking-wide leading-none select-none`}
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
        {showSubtitle && (
          <p className="text-gray-600 dark:text-gray-400 font-medium text-xs sm:text-sm mt-1">
            Admin Dashboard
          </p>
        )}
      </div>
    </Link>
  );
}


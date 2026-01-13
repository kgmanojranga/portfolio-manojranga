import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning';
}

const Badge = ({ children, variant = 'default' }: BadgeProps) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${variants[variant]}`}
    >
      {children}
    </span>
  );
};

export default Badge;

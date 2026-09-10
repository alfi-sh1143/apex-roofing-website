import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap cursor-pointer select-none disabled:opacity-60 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 shadow-sm'
  };

  const variantStyles = {
    primary: 'bg-[#E8681A] hover:bg-[#D0560F] text-white focus:ring-[#E8681A] shadow-sm hover:shadow active:scale-[0.99]',
    secondary: 'bg-[#0B192C] hover:bg-[#162844] text-white focus:ring-[#0B192C] shadow-sm hover:shadow active:scale-[0.99]',
    outline: 'border border-[#CBD5E1] bg-transparent hover:bg-slate-100 text-[#0B192C] focus:ring-[#0B192C]',
    ghost: 'bg-transparent hover:bg-slate-100 text-[#0B192C] focus:ring-slate-300',
    white: 'bg-white hover:bg-slate-50 text-[#0B192C] shadow-sm hover:shadow focus:ring-white border border-slate-100'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
      {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  );
};

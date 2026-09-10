import React from 'react';
import { AlertCircle } from 'lucide-react';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  helperText,
  leftIcon,
  id,
  className = '',
  required,
  ...props
}) => {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="w-full flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-xs font-semibold text-[#0B192C] flex items-center justify-between">
        <span>
          {label}
          {required && <span className="text-[#E8681A] ml-0.5">*</span>}
        </span>
      </label>

      <div className="relative rounded-lg shadow-2xs">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            {leftIcon}
          </div>
        )}
        <input
          id={inputId}
          required={required}
          className={`w-full text-sm rounded-lg bg-white border py-2.5 px-3.5 transition-colors focus:outline-none focus:ring-2 placeholder:text-slate-400 ${
            leftIcon ? 'pl-10' : ''
          } ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-200 text-red-950'
              : 'border-slate-300 focus:border-[#E8681A] focus:ring-[#E8681A]/20 text-[#0B192C]'
          } ${className}`}
          {...props}
        />
      </div>

      {error ? (
        <div className="flex items-center gap-1 text-xs text-red-600 mt-0.5" role="alert">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      ) : helperText ? (
        <span className="text-xs text-slate-500 mt-0.5">{helperText}</span>
      ) : null}
    </div>
  );
};

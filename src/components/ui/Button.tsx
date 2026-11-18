import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  type = 'button',
  className = '',
  variant = 'primary',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'text-sm py-1.5 px-4',
    md: 'text-base lg:text-lg font-bold leading-6 py-2 px-6',
    lg: 'text-lg lg:text-xl font-bold py-3 px-8',
  }[size];

  if (variant === 'primary') {
    const inner = (
      <span className="custom-box-shadow-button relative flex cursor-pointer justify-center gap-[10px] w-full sm:w-auto">
        <span
          className={`text-white bg-[#2F39BA] border-[#2F39BA] border rounded-[6px] ${sizeClasses} inline-flex justify-center items-center gap-2 whitespace-nowrap custom-box-shadow-text relative z-10 w-full text-center`}
        >
          {children}
        </span>
        <span className="bg-[#F092DD] custom-box-shadow-2 absolute inset-px border border-[#0B0D2A] rounded-[6px]" />
        <span className="bg-[#FFC8EB] custom-box-shadow-1 absolute inset-px border border-[#0B0D2A] rounded-[6px]" />
      </span>
    );

    if (href) {
      const isExternal = href.startsWith('http');
      return isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block ${className}`}
        >
          {inner}
        </a>
      ) : (
        <Link href={href} className={`inline-block ${className}`}>
          {inner}
        </Link>
      );
    }

    return (
      <button type={type} onClick={onClick} className={`inline-block ${className}`}>
        {inner}
      </button>
    );
  }

  // Variant outline / secondary / dark
  const variantStyles = {
    secondary: 'text-[#3843D0] border-[#3843D0] border bg-white hover:bg-slate-50',
    dark: 'text-white bg-[#060419] border border-cyber-ink-400 hover:bg-cyber-ink-300',
    outline: 'text-white border border-subtle bg-surface-1 hover:bg-surface-2',
  }[variant];

  const defaultClasses = `rounded-[6px] ${sizeClasses} inline-flex justify-center items-center gap-2 whitespace-nowrap font-bold transition-all ${variantStyles} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    return isExternal ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={defaultClasses}>
        {children}
      </a>
    ) : (
      <Link href={href} className={defaultClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={defaultClasses}>
      {children}
    </button>
  );
};

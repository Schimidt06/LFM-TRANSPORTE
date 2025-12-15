import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  href,
  onClick,
  ...props 
}) => {
  const baseStyles = "font-bold py-3 px-8 rounded-sm transition-all duration-300 uppercase tracking-wider font-sans text-sm md:text-base inline-flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500 text-slate-950 shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.6)] transform hover:-translate-y-1 border-none",
    outline: "border-2 border-yellow-600 text-yellow-500 hover:bg-yellow-600/10 hover:text-yellow-400 bg-transparent"
  };

  const widthStyle = fullWidth ? "w-full" : "w-auto";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    // If it's an internal link (starts with #), handle smooth scroll manually
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Always call the original onClick prop if it exists
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLElement>)(e);
    }
  };

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        onClick={handleClick as React.MouseEventHandler<HTMLAnchorElement>}
        {...props as unknown as AnchorHTMLAttributes<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClasses} 
      onClick={handleClick as React.MouseEventHandler<HTMLButtonElement>}
      {...props as ButtonHTMLAttributes<HTMLButtonElement>}
    >
      {children}
    </button>
  );
};
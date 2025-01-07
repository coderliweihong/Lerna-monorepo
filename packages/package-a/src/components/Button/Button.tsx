import React from 'react';
import './Button.css';

export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger';

export interface ButtonProps {
  label: string;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({ 
  label, 
  type = 'default',
  disabled = false,
  onClick 
}: ButtonProps) => {
  const classes = [
    'button',
    `button--${type}`,
    disabled ? 'is-disabled' : ''
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={classes}
      type="button" 
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.displayName = 'Button'; 
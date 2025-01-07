export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger';

export interface ButtonProps {
  label: string;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
} 
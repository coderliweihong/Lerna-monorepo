declare module '@my-monorepo/package-b' {
  import { ComponentType } from 'react';

  export const Button: ComponentType<{
    type?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
    plain?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
  }>;
} 
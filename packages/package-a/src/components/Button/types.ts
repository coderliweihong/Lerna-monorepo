export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger';

export interface ButtonProps {
  /** 按钮文本 */
  label: string;
  /** 按钮类型 */
  type?: ButtonType;
  /** 是否禁用 */
  disabled?: boolean;
  /** 点击事件处理函数 */
  onClick?: () => void;
} 
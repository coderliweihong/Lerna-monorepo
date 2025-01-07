/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@my-monorepo/package-a' {
  import { FC } from 'react'
  export interface ButtonProps {
    label: string;
    onClick?: () => void;
  }
  export const Button: FC<ButtonProps>
}

declare module '@my-monorepo/package-b' {
  import { Plugin } from 'vue'
  const plugin: Plugin
  export default plugin
} 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    plugins: [vue(), react()],
    resolve: {
      dedupe: ['vue', 'react', 'react-dom'],
      alias: isDev ? {
        '@my-monorepo/package-a': resolve(__dirname, '../package-a/src'),
        '@my-monorepo/package-b': resolve(__dirname, '../package-b/src')
      } : {
        '@my-monorepo/package-a': resolve(__dirname, '../package-a'),
        '@my-monorepo/package-b': resolve(__dirname, '../package-b')
      }
    },
    build: {
      commonjsOptions: {
        transformMixedEsModules: true
      }
    },
    server: {
      hmr: {
        port: 24678,
        overlay: false
      },
      watch: {
        usePolling: true,
        interval: 100
      }
    },
    optimizeDeps: {
      include: ['@my-monorepo/package-a', '@my-monorepo/package-b'],
      force: isDev
    }
  }
}) 
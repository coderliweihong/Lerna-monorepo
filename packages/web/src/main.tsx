import React from 'react'
import ReactDOM from 'react-dom/client'
import { createApp } from 'vue'
import App from './App'
import VueApp from './VueApp.vue'
import PackageB from '@my-monorepo/package-b'
// import '@my-monorepo/package-b/dist/style.css'
// 挂载 React 应用
const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// 创建 Vue 应用并注册组件
const vueRoot = document.getElementById('vue-root')
if (vueRoot) {
  const vueApp = createApp(VueApp)
  vueApp.use(PackageB)
  vueApp.mount(vueRoot)
} 
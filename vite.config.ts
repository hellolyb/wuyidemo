import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // 服务器启动时自动在浏览器中打开应用程序
    open: true,
    // 服务器主机名
    host: '0.0.0.0',
    port: 8080
    // 自定义代理规则
    // proxy: {
    //   '^/api/': {
    //     // 后台服务器地址
    //     target: 'http://vue.mengxuegu.com/pro-api',
    //     changeOrigin: true /* 允许跨域 */,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  }
})

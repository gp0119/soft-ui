import type { LibraryFormats } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const bundlingConf = {
  lib: {
    entry: resolve(__dirname, 'components/index.ts'),
    name: 'SoftUI',
    formats: ['es', 'umd', 'cjs'] as LibraryFormats[],
    fileName: (format: string) => `soft-ui.${format}.js`,
  },
  rollupOptions: {
    // 确保外部化处理那些你不想打包进库的依赖
    external: ['vue'],
    output: {
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      globals: {
        vue: 'Vue',
      },
    },
  },
}

const build = process.env.BUNDLE ? bundlingConf : { outDir: 'docs' }
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {
      ...process.env,
      VITE_APP_VERSION: process.env.npm_package_version,
    },
  },
  resolve: {
    alias: [
      {
        find: /\/~\//,
        replacement: resolve(process.cwd(), '.', 'components') + '/',
      },
    ],
  },
  plugins: [vue()],
  build,
  publicDir: process.env.BUNDLE ? false : 'public',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
})

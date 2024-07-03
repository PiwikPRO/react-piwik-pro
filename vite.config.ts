import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'
import { dependencies } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    typescript({
      declaration: true,
      declarationDir: 'dist',
      sourceMap: true
    })
  ],
  build: {
    sourcemap: true,
    minify: false,
    lib: {
      entry: './src/index.ts',
      name: 'tracking-base-library',
      fileName: 'index'
    },
    rollupOptions: {
      external: Object.keys(dependencies)
    }
  }
})

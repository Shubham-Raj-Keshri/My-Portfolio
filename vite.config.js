import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '', // ← IMPORTANT: EMPTY STRING for GitHub Pages with docs folder
})

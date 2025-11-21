import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/My-Portfolio/', // ✅ must exactly match your GitHub repo name
  plugins: [react()],
});

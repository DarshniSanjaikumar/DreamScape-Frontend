import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Ensures correct routing on Render
  plugins: [react()],
  build: {
    rollupOptions: {
      treeshake: false
    }
  }
});
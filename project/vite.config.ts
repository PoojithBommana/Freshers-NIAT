import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Adjust this based on your deployment URL
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

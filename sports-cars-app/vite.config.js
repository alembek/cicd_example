import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/1st/', // Add this line! Important for deployment
  build: {
    rollupOptions: {
      input: {
        main: 'public/index.html',
      },
    },
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/1st/',
  build: {
    rollupOptions: {
      input: {
        main: 'public/index.html', // Important: Point to dist/index.html
      },
    },
  },
});
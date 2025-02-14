import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',  // Если index.html в корне, то корень остается как есть
  publicDir: 'public/index.html',  // Указываем Vite искать статические файлы в public
  build: {
    outDir: 'dist',
  },
});

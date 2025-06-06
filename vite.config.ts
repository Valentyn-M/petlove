import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],

  /* ────────  alias  ──────── */
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  /* ────────  scss  ──────── */
  css: {
    preprocessorOptions: {
      scss: {
        // Підключаємо глобальні змінні / функції в кожен .scss
        additionalData: `@use "@/styles/globals" as *;`,
      },
    },
  },
});

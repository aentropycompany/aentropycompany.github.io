// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://theaentropy.company',
  srcDir: 'source',
  outDir: 'dist',
  vite: {
    plugins: [tailwindcss()]
  }
});

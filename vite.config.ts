import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import eslint from 'vite-plugin-eslint';
import { viteStaticCopy as copy } from 'vite-plugin-static-copy';
import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    dts({
      include: ['src'],
    }),
    copy({
      targets: [
        {
          src: 'src/assets',
          dest: '.',
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve('src', 'index.ts'),
      name: packageJson.name,
      formats: ['es', 'umd'],
      fileName: (format) => `${packageJson.name}.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});

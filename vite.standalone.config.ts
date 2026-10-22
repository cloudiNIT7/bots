import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Builds a single self-contained IIFE bundle with React bundled in.
// Exposes window.RobotHeadsLib = { RobotHead, robotHeadShapes, robotHeadStates }
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-standalone',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'RobotHeadsLib',
      formats: ['iife'],
      fileName: () => 'robot-heads.iife.js',
    },
    rollupOptions: {
      // bundle everything including React
      external: [],
    },
  },
});

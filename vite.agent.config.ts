import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// window.RobotAgent = { mount, robotHeadShapes, robotHeadStates }, React bundled in.
export default defineConfig({
  plugins: [react()],
  define: { 'process.env.NODE_ENV': '"production"' },
  build: {
    outDir: '/private/tmp/claude-501/-Users-veera-Downloads/eda35eae-7ab5-4ccb-b1f7-069f3c22cac1/scratchpad/robot',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/agent-standalone.tsx'),
      name: 'RobotAgent',
      formats: ['iife'],
      fileName: () => 'robot-agent.js',
    },
  },
});

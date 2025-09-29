import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  test: {
    environment: 'jsdom',
    reporters: ['basic'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'cobertura', 'lcov', 'html']
    }
  },
  build: {
    lib: {
      name: 'reactts-webapp-lib',
      entry: 'src/index.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: [/^react/]
    }
  },
  plugins: [react(
    { jsxRuntime: 'classic' }
  ), dts({ rollupTypes: true })],
  esbuild: {
    jsxInject: `import React from 'react'`
  }
})

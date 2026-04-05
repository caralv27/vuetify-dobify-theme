import { defineConfig } from 'tsup'
import { copyFileSync, mkdirSync } from 'fs'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  external: ['vuetify'],
  onSuccess: async () => {
    // Copy SCSS files to dist
    mkdirSync('dist/styles', { recursive: true })
    copyFileSync('src/styles/settings.scss', 'dist/styles/settings.scss')
  },
})

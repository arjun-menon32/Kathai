import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const watchedDirectories = ['src', 'public']
const watchedFiles = new Set(['index.html', 'package.json', 'package-lock.json', 'vite.config.ts'])
const ignoreOutsideApplication = (filePath: string) => {
  const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(projectRoot, filePath)
  const relativePath = path.relative(projectRoot, absolutePath).replace(/\\/g, '/').replace(/\/+$/, '')
  if (!relativePath || relativePath === '.') return false
  if (relativePath.startsWith('../') || path.isAbsolute(relativePath)) return true
  if (watchedDirectories.some((directory) => relativePath === directory || relativePath.startsWith(`${directory}/`))) return false
  if (watchedFiles.has(relativePath) || /^tsconfig(?:\.[^/]+)?\.json$/.test(relativePath)) return false
  return true
}

export default defineConfig({
  base: '/Kathai/',
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      ignored: ignoreOutsideApplication,
    },
  },
})

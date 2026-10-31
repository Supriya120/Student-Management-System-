import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Basic Vite config using the React plugin.
// No extra setup is needed for this simple project.
export default defineConfig({
  plugins: [react()],
})

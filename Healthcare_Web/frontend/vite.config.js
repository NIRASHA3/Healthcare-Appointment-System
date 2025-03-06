import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {port:5414},
 // 5414 is the port number that the server will run on. 
 server: {
  mimeTypes: {
    'text/javascript': ['js', 'jsx', 'ts', 'tsx'],
  },
  port: 5414,
  strictPort: true,
  hmr: {
    overlay: true,
  },
},
build: {
  sourcemap: true, // Set to false if source map errors persist
},
}) 

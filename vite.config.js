import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // Allow external access
    port: process.env.PORT || 5173, // Use Render's assigned port
    strictPort: true, // Ensures it fails fast if port is unavailable
    allowedHosts: ['vt-showgo.onrender.com'], // Allow your Render domain
  }
});

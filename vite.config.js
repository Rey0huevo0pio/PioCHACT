import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Esto es crucial para manejar rutas en el lado del cliente
  },
  build: {
    sourcemap: false, // Deshabilita los source maps
  },
});

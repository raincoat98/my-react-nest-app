import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["ww57403.synology.me"], // Add your host here
    host: true, // 추가
    port: 5173,
  },
});

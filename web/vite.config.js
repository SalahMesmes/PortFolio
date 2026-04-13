import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  publicDir: "public",
  base:
    mode === "production" && process.env.GITHUB_PAGES === "true"
      ? "/PortFolio/"
      : "/",
}));

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3200,
  },
  envPrefix: "APP_",
  resolve: {
    alias: {
      src: path.resolve("src/"),
      app: path.resolve("src/app/"),
      api: path.resolve("src/api/"),
      auth: path.resolve("src/auth/"),
      lib: path.resolve("src/lib/"),
      pages: path.resolve("src/pages/"),
      core: path.resolve("src/core/"),
      components: path.resolve("src/components/"),
      layouts: path.resolve("src/layouts/"),
      views: path.resolve("src/views/"),
      routes: path.resolve("src/routes/"),
      assets: path.resolve("src/assets/"),
      hooks: path.resolve("src/hooks/"),
      services: path.resolve("src/services/"),
      resources: path.resolve("src/resources/"),
      graphQl: path.resolve("src/graphQl/"),
      utils: path.resolve("src/utils/"),
      store: path.resolve("src/store/"),
      config: path.resolve("src/config/"),
      "@common-ui": path.resolve("../../node_modules/common-ui/src/"),
      "@crylical-time": path.resolve("src/"),
    },
    extensions: [".js", ".jsx"],
  }
})

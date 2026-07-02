import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { execSync } from "node:child_process";
import { defineConfig, loadEnv, type Plugin } from "vite";

function tinaAdminPlugin(): Plugin {
  return {
    name: "tina-admin",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0] ?? "";
        if (url === "/admin" || url === "/admin/") {
          res.statusCode = 302;
          res.setHeader("Location", "/admin/index.html");
          res.end();
          return;
        }
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0] ?? "";
        if (url === "/admin" || url === "/admin/") {
          res.statusCode = 302;
          res.setHeader("Location", "/admin/index.html");
          res.end();
          return;
        }
        next();
      });
    },
  };
}

function generateContentPlugin(): Plugin {
  return {
    name: "generate-content",
    buildStart() {
      execSync("tsx scripts/generate-content.ts", { stdio: "inherit" });
    },
    configureServer(server) {
      const watchDirs = ["content/insights", "content/perspectives"];
      watchDirs.forEach((dir) => server.watcher.add(path.resolve(__dirname, dir)));
      server.watcher.on("change", (file) => {
        if (file.includes(`${path.sep}content${path.sep}`)) {
          execSync("tsx scripts/generate-content.ts", { stdio: "inherit" });
          server.ws.send({ type: "full-reload" });
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    plugins: [tinaAdminPlugin(), generateContentPlugin(), react(), tailwindcss()],
    define: {
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== "true",
    },
  };
});

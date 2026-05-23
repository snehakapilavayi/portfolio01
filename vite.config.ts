import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig(({ command }) => {
  return {
    plugins: [
      tsConfigPaths(),
      tailwindcss(),
      tanstackStart({
        server: { entry: "server" },
      }),
      react(),
      // Only include cloudflare plugin during build, otherwise it breaks dev server imports
      ...(command === "build" ? [cloudflare()] : []),
    ],
    resolve: {
      alias: {
        "@": `${process.cwd()}/src`
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core"
      ]
    }
  };
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function getGitHubPagesBase() {
  if (process.env.DEPLOY_TARGET !== "github-pages") {
    return "/";
  }

  const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];

  if (!repository || repository.toLowerCase().endsWith(".github.io")) {
    return "/";
  }

  return `/${repository}/`;
}

export default defineConfig({
  base: getGitHubPagesBase(),
  plugins: [react(), tailwindcss()],
});

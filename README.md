# Portfolio

React + Vite portfolio, ready for GitHub Pages deployment through GitHub Actions.

## Quick Deploy Setup

1. Create a GitHub repository and push this project to the main branch.
2. In repository settings, open Pages and set Build and deployment Source to GitHub Actions.
3. Keep the workflow file at .github/workflows/deploy.yml.
4. Every push to main will build and deploy automatically.

## Local Commands

- Install dependencies: npm install
- Run development server: npm run dev
- Build production output: npm run build

## First Push Commands

Use these commands from the project folder:

git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main

## Notes

- The Vite base path is already auto-configured for GitHub Pages in vite.config.js.
- If your repository name is <your-username>.github.io, it deploys at root (/).
- If your repository name is anything else, it deploys under /<repo-name>/.

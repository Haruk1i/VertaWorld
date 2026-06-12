# VertaWorld — Next.js + TypeScript

## Local test

```bash
pnpm install
pnpm dev
```

Open: http://localhost:3000

## GitHub Pages deploy

This project is configured for GitHub Pages static export.

1. Upload all files/folders in this ZIP to the root of your GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Go to **Actions** and run / wait for **Deploy VertaWorld to GitHub Pages**.
5. Your site should deploy to your custom domain: `vertaworld.space`.

Important: Do not use **Deploy from a branch / main root** for this Next.js source folder. GitHub Pages must build the project first, then publish the generated `out` folder.

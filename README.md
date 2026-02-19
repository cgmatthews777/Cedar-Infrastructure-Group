# Cedar-Infrastructure-Group
Cedar Infrastructure Group
# Cedar Infrastructure Group Website

This project is a React + Vite website for Cedar Infrastructure Group.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

A workflow is included at `.github/workflows/deploy.yml`.

1. In your GitHub repository settings, enable **Pages** and set **Source** to **GitHub Actions**.
2. Push to the `main` branch.
3. GitHub Actions will build and deploy the `dist/` output automatically.

The custom domain is configured via `public/CNAME`.

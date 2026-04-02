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

## Form Submissions

Intake and contact form submissions are handled by Cloudflare Pages Functions (`functions/api/intake.js` and `functions/api/contact.js`). On submit:

1. **Email** — Sent via Resend API to `join@hirecedar.com` (intake) / `projects@hirecedar.com` (contact) with file attachments. This is the primary review channel.
2. **R2 backup** — Stored in the `cedar-intake` R2 bucket under `intake/` or `contact/` prefixes, organized by date and submitter name.

### Syncing R2 submissions locally

All submissions can be bulk-downloaded to `~/Documents/cedar-submissions/` by running:

```bash
cedar-sync
```

This alias (defined in `~/.zshrc`) uses the AWS CLI to incrementally sync the R2 bucket — only new files are downloaded. PDFs, resumes, and submission JSONs land as regular files in Finder.

**R2 bucket:** `cedar-intake` (private, no public access)
**Local copy:** `~/Documents/cedar-submissions/`

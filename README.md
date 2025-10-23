# Qwen Web Builder (QWB)

Qwen Web Builder is an AI-powered website creation system that allows you to build, preview, and publish beautiful, functional websites from text prompts. Operates like a Replit environment with deterministic commands.

## Quick Start

### 1. Create a New Project
```bash
qwb new
# Choose framework (vite-react-ts, next, astro, sveltekit), deployer, and package manager
```

### 2. Run & Share
```bash
qwb dev
# → Local: http://localhost:5173
# → Public: https://yourname.loca.lt
```

### 3. Add a New Page
```bash
qwb add page /pricing --intent marketing --copy concise
```

### 4. Build & Preview
```bash
qwb build && qwb preview
```

### 5. Package & Share
```bash
qwb package --zip && qwb share --tunnel
```

### 6. Publish
```bash
qwb publish --prod
```

## Commands

| Command | Description |
|--------|-------------|
| `qwb new` | Scaffold a new project with the selected framework |
| `qwb dev` | Start development server with tunnel |
| `qwb build` | Build production bundle with SEO, sitemap, and accessibility checks |
| `qwb preview` | Serve built bundle locally and open tunnel |
| `qwb publish [--prod]` | Deploy to configured provider (Vercel, Netlify, GH Pages) |
| `qwb add page <route>` | Generate a responsive page with selected sections |
| `qwb check` | Verify Node, package manager, git, tunnel, disk |
| `qwb fix` | Fix common issues (reinstall deps, clear caches) |
| `qwb package [--single\|--zip]` | Export as single HTML or zip bundle |
| `qwb share [--tunnel\|--preview]` | Share via tunnel or preview build |
| `qwb feedback on\|off [endpoint]` | Toggle in-page feedback overlay |

## Features

- **Framework Support**: Vite, Next.js, Astro, SvelteKit
- **Design**: Tailwind CSS + shadcn/UI by default
- **Accessibility**: WCAG AA compliant by design
- **SEO**: Automatic meta tags, sitemap, and OpenGraph generation
- **Testing**: Unit and E2E testing configured
- **Deployment**: Vercel, Netlify, and GitHub Pages support
- **Quality Gates**: Type checking, linting, and performance checks

## Configuration

The `qwb.config.json` contains all configuration options:

```json
{
  "framework": "vite-react-ts",
  "port": 5173,
  "packageManager": "auto",
  "deployer": "vercel",
  "tunnel": "localtunnel",
  "testing": { "unit": true, "e2e": false },
  "lint": { "eslint": true, "prettier": true },
  "a11y": { "axe": true },
  "seo": { "inject": true },
  "ui": { "tailwind": true, "designSystem": "shadcn" },
  "feedbackEndpoint": null
}
```

## Project Structure

```
root/
  .qwb/                 # QWB state and logs
    state.json          # Actions, last publish, errors
    preview.json        # Local + public URLs
    prompts/            # Generated subtasks
    logs/               # Logs for each command
    share/              # Exported builds
  src/                  # App source
  public/               # Static assets
  scripts/              # Helper scripts
  tests/                # Unit/e2e tests
  qwb.config.json       # Framework, port, deployer, UI toolkit
  package.json
  README.md
  .env.example
  .env.local            # Local secrets (ignored)
  .gitignore
  .eslintrc.cjs
  tsconfig.json
  .prettierrc
```

## Quality Standards

- **Type Safety**: No fatal TypeScript errors
- **Code Quality**: ESLint + Prettier formatting
- **Accessibility**: WCAG AA compliance
- **Performance**: <300 kB gzipped JS bundle
- **SEO**: Valid meta tags and sitemap
- **No Broken Links**: All internal links work

## Error Recovery

QWB uses intelligent fallbacks:

- Node version mismatch → Creates `.nvmrc` and prompts to install
- Port busy → Auto-increments port
- Tunnel down → Swaps between localtunnel/cloudflared
- Build fail → Runs `qwb fix` and shows logs
- Missing deploy auth → Shows CLI login command

## Auto-Research Triggers

QWB automatically researches when needed:

- **A. Design Benchmark**: When requesting "modern/beautiful" UI
- **B. Copy/SEO Facts**: When making factual claims
- **C. API Discovery**: When using unknown libraries
- **D. Content Import**: When copying another site
- **E. Crawl/Migrate**: For multi-page imports

## Support

Need help? Join our community or open an issue in the repository.
# Pallaw Pathak — Portfolio

Personal portfolio website built with React, Tailwind CSS, and shadcn/ui. Live at [pallaw.github.io](https://pallaw.github.io).

## Repo Structure

This project uses two GitHub repos:

| Repo | Purpose |
|---|---|
| `pallaw/portfolio` | Source code — edit and develop here |
| `pallaw/pallaw.github.io` | Built output — auto-updated on deploy, never edit manually |

You only need `pallaw/portfolio` locally.

## Tech Stack

- **React 19** — component framework
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — pre-built UI primitives (`src/components/ui/`)
- **Material UI (MUI)** — additional UI components
- **CRACO** — Create React App config overrides for Tailwind
- **GitHub Actions** — automated CI/CD pipeline on push to `master`

## Project Structure

```
frontend/
├── public/                     # Static assets (images, resume PDF)
├── src/
│   ├── App.js                  # Root component, assembles all sections
│   ├── data/mock.js            # All content (single source of truth)
│   ├── components/             # One file per page section
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Blog.jsx
│   │   ├── HireMe.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── CalendlyModal.jsx
│   │   ├── ServicesCarousel.jsx
│   │   └── ui/                 # shadcn/ui components (do not edit)
│   └── styles/fonts.css        # Custom font imports
```

## Editing Content

All content lives in one file: `src/data/mock.js`

| To change... | Edit this export |
|---|---|
| Name, title, photo, social links | `personalInfo` |
| About section & highlights | `about` |
| Work history | `experience` |
| Skills | `skills` |
| Projects & current work | `projects`, `currentWork` |
| Blog articles | `articles` |
| "Let's Work Together" section | `hireMe` |

To change layout or design, edit the relevant `src/components/SectionName.jsx`.

## Local Development

```bash
cd frontend
npm install
PORT=3001 npm start   # use a custom port if 3000 is taken
# open http://localhost:3001
```

> If you get a port conflict on 3000, just set a different port via `PORT=XXXX npm start`.

## Deployment

Deployment is fully automated via **GitHub Actions**. There is no manual deploy step.

### How it works

```
You push to master
       ↓
GitHub Actions triggers (.github/workflows/)
       ↓
CI: npm install → npm run build
       ↓
Build output (frontend/build/) pushed to pallaw/pallaw.github.io
       ↓
GitHub Pages serves the live site at pallaw.github.io
```

### To deploy

```bash
git add .
git commit -m "your message"
git push origin master
```

That's it. The pipeline runs automatically and the live site updates in **2–3 minutes**.

### Monitoring the pipeline

**In the browser:**
```
https://github.com/pallaw/portfolio/actions
```

**In the terminal:**
```bash
gh run list --repo pallaw/portfolio --limit 5   # see recent runs
gh run watch --repo pallaw/portfolio             # stream live logs
```

### Static assets

Files placed in `frontend/public/` (images, PDFs, etc.) are automatically included in the build and deployed with the site. Reference them in code as `/filename.ext`.

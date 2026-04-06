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
- **gh-pages** — automated deployment to GitHub Pages

## Project Structure

```
frontend/
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
│   │   ├── HireMeFab.jsx       # Floating "Hire Me" button
│   │   ├── CalendlyModal.jsx
│   │   ├── ServicesCarousel.jsx
│   │   └── ui/                 # shadcn/ui components (do not edit)
│   ├── theme/md3Theme.js       # Material Design 3 color tokens
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
| Projects | `projects` |
| Blog articles | `articles` |
| "Hire Me" section | `hireMe` |

To change layout or design, edit the relevant `src/components/SectionName.jsx`.

## Local Development

```bash
cd frontend
npm install
npm start
# open http://localhost:3000
```

## Workflow

```
1. Edit    →  src/data/mock.js or src/components/
2. Preview →  npm start
3. Commit  →  git add . && git commit -m "message" && git push
4. Deploy  →  npm run deploy
```

`npm run deploy` builds the app and pushes the output to `pallaw/pallaw.github.io` automatically via the `gh-pages` package. The live site updates within 1-2 minutes.

# Portfolio - Marius Ledig

A modern portfolio website built with Nuxt 4.2.1, featuring a landing page with resume, projects showcase, and contact page.

## Features

- 🏠 **Landing Page** - Personal resume with skills, experience, and education
- 💼 **Projects Page** - Grid layout showcasing projects (3 per row)
- 📄 **Project Details** - Individual project pages with full descriptions
- 📧 **Contact Page** - Contact form and direct links

## Tech Stack

- Nuxt 4.2.1
- Vue 3
- TypeScript
- Modern CSS with CSS Variables

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit http://localhost:3000

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── assets/
│   └── css/
│       └── main.css
├── layouts/
│   └── default.vue
├── pages/
│   ├── index.vue (Landing/Resume)
│   ├── projects/
│   │   ├── index.vue (Projects List)
│   │   └── [id].vue (Project Detail)
│   └── contact.vue
├── app.vue
├── nuxt.config.ts
└── package.json
```

## Customization

You can easily customize:
- Personal information in `pages/index.vue`
- Projects in `pages/projects/index.vue` and `pages/projects/[id].vue`
- Contact information in `pages/contact.vue`
- Styling in `assets/css/main.css`
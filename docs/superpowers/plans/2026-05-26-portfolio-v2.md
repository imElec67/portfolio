# Portfolio V2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the Nuxt 4 portfolio — mobile filter dropdown, monogram project cards, readability fixes, hero badge/scroll-cue, and grouped skills section.

**Architecture:** Pure template + CSS changes across 5 existing files. No new dependencies, no new pages. Each task is self-contained and can be committed independently. Dev server (`npm run dev`) is the test harness — verify visually at the viewports stated.

**Tech Stack:** Nuxt 4, Vue 3, vanilla CSS (no framework). Fonts: Montserrat (body), Bungee (headings). CSS variables defined in `assets/css/main.css` `:root`.

---

## File Map

| File | What changes |
|------|-------------|
| `assets/css/main.css` | Card image dark gradient, `.card-monogram`, `.card-year`, `max-width: 70ch` on prose, `.hero::after` vignette |
| `pages/projects/index.vue` | Mobile `<select>` filter, card monogram template, h1 inline style cleanup, subtitle colour |
| `pages/projects/[id].vue` | Add `initials` to project data objects (data consistency) |
| `pages/contact.vue` | h1 inline style cleanup, subtitle colour |
| `pages/index.vue` | Hero badge + scroll cue, skills grouped by category |

---

## Task 1: Global CSS — card image restyle, line length cap, hero vignette

**Files:**
- Modify: `assets/css/main.css`

- [ ] **Step 1: Replace `.project-card-image` gradient and update its `::before`**

Find and replace the existing `.project-card-image` block and its pseudo-elements in `assets/css/main.css`:

```css
/* REPLACE THIS ENTIRE BLOCK: */
.project-card-image {
  width: 100%;
  height: 220px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  position: relative;
  overflow: hidden;
}

.project-card-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s;
}

.project-card:hover .project-card-image::before {
  opacity: 0;
}

/* WITH THIS: */
.project-card-image {
  width: 100%;
  height: 220px;
  background: linear-gradient(135deg, #1a0a0a 0%, #2d1010 50%, #1a1612 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.project-card-image::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 50%, rgba(220, 38, 38, 0.2) 0%, transparent 60%),
    radial-gradient(circle at 80% 70%, rgba(245, 158, 11, 0.1) 0%, transparent 50%);
  transition: opacity 0.3s;
}

.project-card:hover .project-card-image::before {
  opacity: 0.6;
}
```

- [ ] **Step 2: Add `.card-monogram` and `.card-year` after the block above**

Append immediately after the `.project-card:hover .project-card-image::before` rule:

```css
.card-monogram {
  font-family: 'Bungee', sans-serif;
  font-size: 3.25rem;
  letter-spacing: 4px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 20px rgba(220, 38, 38, 0.4));
  position: relative;
  z-index: 1;
  user-select: none;
}

.card-year {
  position: absolute;
  top: 12px;
  right: 14px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: var(--text-light);
  text-transform: uppercase;
  z-index: 1;
  opacity: 0.8;
}
```

- [ ] **Step 3: Add `max-width: 70ch` to `.resume-item p`**

Find the existing `.resume-item p` rule and add the property:

```css
/* FIND: */
.resume-item p {
  margin-bottom: 1rem;
}

/* REPLACE WITH: */
.resume-item p {
  margin-bottom: 1rem;
  max-width: 70ch;
}
```

- [ ] **Step 4: Add `max-width: 70ch` to `.project-detail-content p`**

Find the existing `.project-detail-content p` rule:

```css
/* FIND: */
.project-detail-content p {
  margin-bottom: 1.5rem;
}

/* REPLACE WITH: */
.project-detail-content p {
  margin-bottom: 1.5rem;
  max-width: 70ch;
}
```

- [ ] **Step 5: Add `.hero::after` bottom vignette**

Append after the existing `.hero::before` rule in `main.css`:

```css
.hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 140px;
  background: linear-gradient(to bottom, transparent, #1a1612);
  pointer-events: none;
  z-index: 0;
}
```

- [ ] **Step 6: Verify visually**

Run `npm run dev`, open `http://localhost:3000`. Check:
- Hero section: bottom fades smoothly into the dark background
- Scroll down: resume paragraphs don't exceed ~70 characters per line on wide screens

- [ ] **Step 7: Commit**

```bash
git add assets/css/main.css
git commit -m "style: dark card image gradient, monogram/year slots, 70ch line cap, hero vignette"
```

---

## Task 2: Projects page — mobile dropdown filter

**Files:**
- Modify: `pages/projects/index.vue`

- [ ] **Step 1: Add the `<select>` element to the template**

Find the `<div class="filter-container">` block and add the select *above* the existing `.filter-buttons` div:

```html
<!-- FIND: -->
<div class="filter-container">
  <div class="filter-buttons">

<!-- REPLACE WITH: -->
<div class="filter-container">
  <select
    class="filter-select"
    :value="selectedTech || ''"
    @change="selectedTech = $event.target.value || null"
  >
    <option value="">All Technologies</option>
    <option v-for="tech in allTechnologies" :key="tech" :value="tech">{{ tech }}</option>
  </select>
  <div class="filter-buttons">
```

- [ ] **Step 2: Add `.filter-select` styles to the component's `<style scoped>` block**

Append inside the existing `<style scoped>` in `pages/projects/index.vue`:

```css
.filter-select {
  display: none;
  width: 100%;
  max-width: 420px;
  padding: 0.75rem 2.5rem 0.75rem 1.25rem;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-color);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23dc2626' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 18px;
}

.filter-select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.2), 0 0 15px rgba(220, 38, 38, 0.15);
}

.filter-select option {
  background: #1f1b17;
  color: var(--text-color);
  font-weight: 600;
}

@media (max-width: 768px) {
  .filter-buttons {
    display: none;
  }
  .filter-select {
    display: block;
  }
}
```

- [ ] **Step 3: Verify at desktop (1280px) and mobile (375px)**

Desktop: dropdown is invisible, button row shows as before.  
Mobile (use browser devtools or resize): 8 buttons are gone, a single styled dropdown appears. Selecting "Vue.js" filters the cards, selecting "All Technologies" shows all 6.

- [ ] **Step 4: Commit**

```bash
git add pages/projects/index.vue
git commit -m "feat: mobile dropdown filter on projects page"
```

---

## Task 3: Projects page — card monogram (remove emoji, add initials)

**Files:**
- Modify: `pages/projects/index.vue`
- Modify: `pages/projects/[id].vue`

- [ ] **Step 1: Add `initials` to every project in `pages/projects/index.vue`**

In the `projects` array inside `<script setup>`, add `initials` to each object:

```js
const projects = [
  {
    id: 'affluence-dashboard',
    title: 'Affluence Dashboard',
    emoji: '📊',
    initials: 'AD',
    // ... rest unchanged
  },
  {
    id: 'affluence-website',
    title: 'Affluence Website',
    emoji: '👕',
    initials: 'AW',
    // ... rest unchanged
  },
  {
    id: 'proxcop',
    title: 'Proxcop.com',
    emoji: '👟',
    initials: 'PR',
    // ... rest unchanged
  },
  {
    id: 'pokecop',
    title: 'Pokecop.com',
    emoji: '⚡',
    initials: 'PO',
    // ... rest unchanged
  },
  {
    id: 'monitors',
    title: 'Monitors',
    emoji: '🔍',
    initials: 'MO',
    // ... rest unchanged
  },
  {
    id: 'monitor-manager',
    title: 'MonitorManager',
    emoji: '⚙️',
    initials: 'MM',
    // ... rest unchanged
  }
]
```

- [ ] **Step 2: Update the card image template in `pages/projects/index.vue`**

```html
<!-- FIND: -->
<div class="project-card-image">
  {{ project.emoji }}
</div>

<!-- REPLACE WITH: -->
<div class="project-card-image">
  <div class="card-monogram">{{ project.initials }}</div>
  <div class="card-year">{{ project.year }}</div>
</div>
```

- [ ] **Step 3: Add `initials` to every project in `pages/projects/[id].vue`**

Same `initials` values as Step 1 — apply to the duplicate `projects` array in `[id].vue`:

```js
// affluence-dashboard → initials: 'AD'
// affluence-website   → initials: 'AW'
// proxcop             → initials: 'PR'
// pokecop             → initials: 'PO'
// monitors            → initials: 'MO'
// monitor-manager     → initials: 'MM'
```

- [ ] **Step 4: Verify**

Open `http://localhost:3000/projects`. Each card image area shows:
- A dark moody gradient background (not an orange gradient)
- A Bungee gradient monogram (e.g. "AD") centered
- The year "2024" in amber at the top right
- No emoji visible

- [ ] **Step 5: Commit**

```bash
git add pages/projects/index.vue pages/projects/[id].vue
git commit -m "style: replace emoji with Bungee monogram on project cards"
```

---

## Task 4: Readability fixes — h1 clamp and subtitle colour

**Files:**
- Modify: `pages/projects/index.vue`
- Modify: `pages/contact.vue`

- [ ] **Step 1: Fix the projects page h1**

In `pages/projects/index.vue`, find the h1 with inline styles and strip them down:

```html
<!-- FIND: -->
<h1 style="text-align: left; font-size: 3rem; margin-bottom: 1rem; font-weight: 800; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">My Projects</h1>

<!-- REPLACE WITH: -->
<h1>My Projects</h1>
```

The global `h1` rule in `main.css` already handles: Bungee font, gradient text, clamp size, margin-bottom, letter-spacing. Nothing is lost.

- [ ] **Step 2: Fix the projects page subtitle colour**

```html
<!-- FIND: -->
<p style="text-align: left; color: var(--text-light); margin-bottom: 2rem; font-size: 1.125rem;">
  A selection of projects I've worked on. Click on any project to see more details.
</p>

<!-- REPLACE WITH: -->
<p style="text-align: left; color: var(--text-secondary); margin-bottom: 2rem; font-size: 1.125rem;">
  A selection of projects I've worked on. Click on any project to see more details.
</p>
```

- [ ] **Step 3: Fix the contact page h1**

In `pages/contact.vue`:

```html
<!-- FIND: -->
<h1 style="text-align: left; font-size: 3rem; margin-bottom: 1rem; font-weight: 800; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Get In Touch</h1>

<!-- REPLACE WITH: -->
<h1>Get In Touch</h1>
```

- [ ] **Step 4: Fix the contact page subtitle colour**

```html
<!-- FIND: -->
<p style="text-align: left; color: var(--text-light); margin-bottom: 3rem; font-size: 1.125rem;">

<!-- REPLACE WITH: -->
<p style="text-align: left; color: var(--text-secondary); margin-bottom: 3rem; font-size: 1.125rem;">
```

- [ ] **Step 5: Verify at desktop and mobile**

Desktop (`http://localhost:3000/projects`): "My Projects" heading looks identical but is now driven by the global clamp.  
Mobile (375px devtools): heading fits in ~1 line instead of wrapping to 3. Subtitle text is soft gray, not amber.  
Same check on `http://localhost:3000/contact`.

- [ ] **Step 6: Commit**

```bash
git add pages/projects/index.vue pages/contact.vue
git commit -m "style: remove hardcoded h1 size, subtitle amber→gray on projects and contact"
```

---

## Task 5: Home page — hero badge and scroll cue

**Files:**
- Modify: `pages/index.vue`

- [ ] **Step 1: Add badge and scroll cue to the hero template**

In `pages/index.vue`, update the hero section:

```html
<!-- FIND: -->
<section class="hero" :style="{ backgroundImage: `url(${landscapeImage})` }">
  <div class="container">
    <h1>Marius Ledig</h1>

<!-- REPLACE WITH: -->
<section class="hero" :style="{ backgroundImage: `url(${landscapeImage})` }">
  <div class="container">
    <div class="hero-badge">
      <span class="hero-badge-dot"></span>
      Open to opportunities
    </div>
    <h1>Marius Ledig</h1>
```

Then find the closing `</div>` of the `.hero-buttons` div and add the scroll cue after the buttons div, before the container closes:

```html
<!-- FIND: -->
        </div>
      </div>
    </section>

<!-- REPLACE WITH: -->
        </div>
        <div class="hero-scroll-cue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
            <path d="M7 10l5 5 5-5"/>
          </svg>
        </div>
      </div>
    </section>
```

- [ ] **Step 2: Add badge and scroll cue CSS to `<style scoped>` in `pages/index.vue`**

Append to the existing `<style scoped>` block:

```css
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.25);
  border-radius: 20px;
  padding: 5px 14px;
  margin-bottom: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #9ca3af;
  text-transform: uppercase;
}

.hero-badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.7);
  flex-shrink: 0;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 6px rgba(34, 197, 94, 0.5); }
  50%       { box-shadow: 0 0 16px rgba(34, 197, 94, 0.9), 0 0 24px rgba(34, 197, 94, 0.35); }
}

.hero-scroll-cue {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  color: rgba(255, 255, 255, 0.3);
  animation: hero-bob 2s ease-in-out infinite;
}

@keyframes hero-bob {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(7px); }
}

@media (prefers-reduced-motion: reduce) {
  .hero-badge-dot { animation: none; }
  .hero-scroll-cue { animation: none; }
}
```

- [ ] **Step 3: Verify**

Open `http://localhost:3000`. Check:
- A subtle green-border pill badge "Open to opportunities" appears above the name with a pulsing green dot
- A faint chevron at the bottom of the hero bobs gently up and down
- The hero bottom fades into the dark background (vignette from Task 1)
- Toggle `prefers-reduced-motion: reduce` in browser devtools → both animations stop

- [ ] **Step 4: Commit**

```bash
git add pages/index.vue
git commit -m "style: hero availability badge and animated scroll cue"
```

---

## Task 6: Home page — grouped skills section

**Files:**
- Modify: `pages/index.vue`

- [ ] **Step 1: Replace the flat skills grid with three labelled groups**

Find the skills `<div class="resume-item reveal">` block in `pages/index.vue` and replace its inner content:

```html
<!-- FIND: -->
          <div class="resume-item reveal">
            <h2>Skills</h2>
            <div class="skills-grid">
              <span class="skill-tag featured">Node.js</span>
              <span class="skill-tag featured">Vue.js</span>
              <span class="skill-tag featured">MongoDB</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">C</span>
              <span class="skill-tag">C++</span>
              <span class="skill-tag">Python</span>
              <span class="skill-tag">Go</span>
              <span class="skill-tag">React Native</span>
              <span class="skill-tag">Flutter</span>
            </div>
          </div>

<!-- REPLACE WITH: -->
          <div class="resume-item reveal">
            <h2>Skills</h2>

            <div class="skills-group-label">Core Stack</div>
            <div class="skills-grid" style="margin-bottom: 1.25rem;">
              <span class="skill-tag featured">Node.js</span>
              <span class="skill-tag featured">Vue.js</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">React Native</span>
              <span class="skill-tag">Flutter</span>
            </div>

            <div class="skills-group-label">Languages</div>
            <div class="skills-grid" style="margin-bottom: 1.25rem;">
              <span class="skill-tag">Python</span>
              <span class="skill-tag">Go</span>
              <span class="skill-tag">C</span>
              <span class="skill-tag">C++</span>
            </div>

            <div class="skills-group-label">Database</div>
            <div class="skills-grid">
              <span class="skill-tag featured">MongoDB</span>
            </div>
          </div>
```

- [ ] **Step 2: Add `.skills-group-label` to the `<style scoped>` block in `pages/index.vue`**

```css
.skills-group-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #6b7280;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.skills-group-label:first-of-type {
  margin-top: 0.25rem;
}
```

- [ ] **Step 3: Verify**

Open `http://localhost:3000` and scroll to the Skills card. Check:
- Three sections visible: "CORE STACK", "LANGUAGES", "DATABASE"
- Labels are small, muted uppercase text above each chip group
- Node.js, Vue.js, MongoDB have the gradient featured style
- All other chips have the glass border style
- On mobile (375px): chips wrap cleanly within each group

- [ ] **Step 4: Commit**

```bash
git add pages/index.vue
git commit -m "style: skills section grouped by Core Stack, Languages, Database"
```

---

## Self-Review Checklist

- [x] **Spec coverage:** All 8 items from the spec are covered (mobile filter, card monogram, subtitle colour, h1 clamp, 70ch cap, hero badge, scroll cue, skills grouping)
- [x] **No placeholders:** All steps include exact code — no "TBD" or "add appropriate styles"
- [x] **Type consistency:** `project.initials` added in Task 3 Step 1 and used in Task 3 Step 2; `project.year` already exists in the data
- [x] **CSS class names consistent:** `.card-monogram` defined in Task 1, used in Task 3. `.hero-badge`, `.hero-badge-dot`, `.hero-scroll-cue` defined and used in Task 5. `.skills-group-label` defined and used in Task 6. `.filter-select` defined and used in Task 2
- [x] **`.hero::after` vs `::before`:** `::before` already exists in `main.css` (radial gradient overlay). `::after` is used for the vignette — no conflict
- [x] **Scoped vs global CSS:** Badge/scroll-cue/skills-label go in index.vue scoped style (page-specific). Card monogram/year, vignette, line length go in main.css (shared across pages)

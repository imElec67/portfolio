# Portfolio V2 — Design Spec
**Date:** 2026-05-26  
**Scope:** Visual polish, readability, and mobile UX improvements across all pages

---

## Overview

A focused pass improving four areas of the Nuxt 4 portfolio site:
1. **Mobile UX** — filter bar on Projects page
2. **Project cards** — replace emoji with monogram design
3. **Readability** — text colour, heading size, line length
4. **Overall polish** — hero badge, scroll cue, skills grouping

No new pages, no backend changes, no dependency additions. Pure CSS and template changes.

---

## 1. Mobile Filter Bar (`pages/projects/index.vue`)

**Problem:** 8 filter buttons wrap to 4 rows on mobile, pushing project cards below the fold.

**Solution:** Replace the flat button list with a styled `<select>` dropdown on mobile, keeping the existing button row on desktop (≥769px).

**Implementation:**
- Keep `.filter-buttons` div as-is for desktop (hidden on mobile via CSS)
- Add a `<select class="filter-select">` element (hidden on desktop, visible on mobile)
- Both bind to the same `selectedTech` ref — selecting either updates the same computed
- Style `filter-select` to match the dojo theme: dark background, red border, Montserrat font, uppercase
- The select has `<option value="">All Technologies</option>` followed by one option per tech

**Behaviour:** Selecting a tech in the dropdown filters identically to clicking a button. The `TransitionGroup` animation still fires on both.

**CSS visibility rules:**
- `.filter-buttons` → `display: flex` (default), `display: none` at `max-width: 768px`
- `.filter-select` → `display: none` (default), `display: block` at `max-width: 768px`

---

## 2. Project Cards (`pages/projects/index.vue` + `assets/css/main.css`)

**Problem:** Emojis (📊👕👟) in the card image area look unprofessional and inconsistent across operating systems.

**Solution:** Replace the emoji with a Bungee-font monogram (project initials) on a dark moody gradient background with a red glow.

**Monogram derivation:** Multi-word titles → first letter of each word (max 2). Single-word titles → first 2 characters.
- "Affluence Dashboard" → `AD`
- "Affluence Website" → `AW`
- "Proxcop.com" → `PR`
- "Pokecop.com" → `PO`
- "Monitors" → `MO`
- "MonitorManager" → `MM`

**Add `initials` field to each project object in both `pages/projects/index.vue` and `pages/projects/[id].vue`.**

**Card image area changes:**
- Remove the emoji `{{ project.emoji }}` from `.project-card-image`
- Replace with:
  ```html
  <div class="card-monogram">{{ project.initials }}</div>
  <div class="card-year">{{ project.year }}</div>
  ```
- `.project-card-image` gets a dark gradient: `linear-gradient(135deg, #1a0a0a 0%, #2d1010 50%, #1a1612 100%)` with a red radial glow overlay via `::before`
- `.card-monogram`: Bungee font, ~52px, gradient text (red→amber), `filter: drop-shadow(0 0 20px rgba(220,38,38,0.4))`
- `.card-year`: absolute positioned top-right, Montserrat 11px, amber colour

**Emoji field** can remain in the data for the project detail page breadcrumb if needed, or be removed entirely.

---

## 3. Readability Fixes (global + per-page)

### 3a. Subtitle text colour
**Problem:** Page intro paragraphs use `color: var(--text-light)` which is amber `#fbbf24`. Amber is an accent colour — using it for multi-sentence body text causes eye strain.

**Fix:** Change subtitle `<p>` elements on Projects and Contact pages from `color: var(--text-light)` to `color: var(--text-secondary)` (`#d1d5db`). Reserve amber for short labels, dates, and decorative accents only.

### 3b. Responsive page headings
**Problem:** `<h1>` on Projects and Contact pages uses inline `font-size: 3rem` with no responsive scaling. On mobile (375px) this renders at 48px and wraps, consuming ~30% of the viewport before content.

**Fix:** Remove inline `font-size` styles on those page h1s. The global `h1` already has `font-size: clamp(2.5rem, 8vw, 5rem)` — let it apply. Also adjust the hero h1 override `.hero h1` to `clamp(2.8rem, 9vw, 5.5rem)` so it scales more gracefully.

**Pages affected:**
- `pages/projects/index.vue` — remove `font-size: 3rem` from inline style
- `pages/contact.vue` — remove `font-size: 3rem` from inline style

### 3c. Body text line length
**Problem:** Prose paragraphs inside `.resume-item` and project descriptions span the full container width (~1200px on desktop), producing very long lines that are fatiguing to read.

**Fix:** Add `max-width: 70ch` to paragraph text inside `.resume-item p` and `.project-detail-content p` in `main.css`. This caps lines at ~70 characters regardless of screen width, which is the typographic sweet spot for readability.

---

## 4. Overall Polish

### 4a. Hero — Availability badge
Add a small "Open to opportunities" badge above the h1 in `pages/index.vue`.

```html
<div class="hero-badge">
  <span class="hero-badge-dot"></span>
  Open to opportunities
</div>
```

**Styles:**
- `display: inline-flex`, `align-items: center`, `gap: 6px`
- Background: `rgba(220,38,38,0.08)`, border: `1px solid rgba(220,38,38,0.2)`, `border-radius: 20px`, padding `5px 14px`
- Green pulse dot: `width/height: 7px`, `border-radius: 50%`, `background: #22c55e`, `box-shadow: 0 0 8px rgba(34,197,94,0.6)`, CSS `@keyframes pulse-dot` animation for the glow
- Text: Montserrat 11px, font-weight 600, letter-spacing 1.5px, color `#9ca3af`, uppercase

### 4b. Hero — Bottom vignette + scroll cue
**Problem:** No visual signal that the page continues below the hero fold.

**Fix:** Add a `::after` pseudo-element to `.hero` with a bottom gradient vignette: `linear-gradient(to bottom, transparent 60%, #1a1612 100%)`. This smoothly transitions the hero image into the page background.

Add a `.hero-scroll-cue` element at the bottom of `.hero .container`:
```html
<div class="hero-scroll-cue" aria-hidden="true">
  <svg><!-- chevron-down --></svg>
</div>
```
Animated with a gentle `translateY` bob (2s infinite ease-in-out). Hidden via `@media (prefers-reduced-motion: reduce)`.

### 4c. Skills — Grouped by category (`pages/index.vue`)

**Problem:** 10 skills in a flat list — no clear signal of specialisation depth.

**Fix:** Replace the flat `.skills-grid` with three labelled groups:

| Group | Skills |
|-------|--------|
| **Core Stack** | Node.js, Vue.js, React, React Native, Flutter |
| **Languages** | Python, Go, C, C++ |
| **Database** | MongoDB |

Each group gets a `.skills-group-label` (Montserrat 10px, uppercase, letter-spacing 2px, color `#6b7280`) above its chip row. No other structural change — same `.skill-tag` and `.skill-tag.featured` classes.

Featured chips (gradient, larger): Node.js, Vue.js, MongoDB  
Standard chips: React, React Native, Flutter, Python, Go, C, C++

---

## Files Changed

| File | Changes |
|------|---------|
| `pages/index.vue` | Hero badge, scroll cue, skills grouping |
| `pages/projects/index.vue` | Dropdown filter (mobile), card monograms, subtitle colour, h1 clamp |
| `pages/projects/[id].vue` | Add `initials` field to project data |
| `pages/contact.vue` | Subtitle colour, h1 clamp |
| `assets/css/main.css` | `.card-monogram`, `.card-year`, `.hero-badge`, `.hero-scroll-cue`, `.skills-group-label`, `.filter-select`, `max-width: 70ch` on prose, `.hero::after` vignette |

---

## Out of Scope

- Project detail page hero images (no real images available)
- Contact form backend (currently mailto fallback — separate concern)
- New pages
- Animation library additions
- Dark/light mode toggle

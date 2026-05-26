<template>
  <div class="project-content">

    <!-- Overview -->
    <div class="detail-section">
      <h2>Overview</h2>
      <p>
        Proxcop is the public-facing showcase website for a private sneakers automation Discord community.
        The platform aggregates real-time stock intelligence from the most in-demand sneaker retailers —
        Nike, Adidas, SNKRS, Foot Locker, and more — and surfaces them to members as instant alerts.
        Beyond alerts, the site serves as the community's entry point: members learn what the group does,
        how it works, and how to subscribe via the integrated Whop storefront link.
      </p>
      <p>
        The site was designed to convert visitors quickly — one clear hero, feature proof points, social
        proof from real members, and a single CTA. Performance was a priority: static-site generation
        with Vite SSG, WebP images with lazy loading, and deployment on Cloudflare Workers keep load times
        well under a second globally.
      </p>
    </div>

    <!-- Screenshots -->
    <div class="detail-section">
      <h2>Screenshots</h2>
      <div class="screenshot-grid">
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Hero section — desktop</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Features grid</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Mobile view</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Key Features -->
    <div class="detail-section">
      <h2>Key Features</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Instant Stock Alerts</h3>
          <p>Real-time notifications the moment high-demand sneakers restock or drop on Nike, Adidas, Foot Locker, and more. Members are notified before the product page even loads for regular users.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📅</div>
          <h3>Release Calendars</h3>
          <p>Comprehensive upcoming release guides with dates, retail prices, and expected resale value. Members prepare their setups in advance and never miss a drop.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📈</div>
          <h3>Market Analysis</h3>
          <p>Historical data and live resale tracking from StockX, GOAT, and Vinted. Price evolution charts help members decide when to buy, hold, or sell their pairs.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🛒</div>
          <h3>Marketplace Automation</h3>
          <p>Monitors Vinted, Leboncoin, and eBay for mispriced listings. Members get alerts on price errors and below-market deals before the broader market notices.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🏪</div>
          <h3>In-Store Drop Coverage</h3>
          <p>Physical store drop information including location, queue time estimates, and staff allocations — critical for limited regional releases not available online.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">👥</div>
          <h3>Active Community</h3>
          <p>Private Discord server with moderators, verified buyers, and success channels. Members share wins, cooking advice, and early intel from physical stores.</p>
        </div>
      </div>
    </div>

    <!-- Tech Stack -->
    <div class="detail-section">
      <h2>Tech Stack</h2>
      <div class="tech-list">
        <div class="tech-item">
          <span class="tech-name">Vue 3</span>
          <span class="tech-desc">Composition API, defineAsyncComponent for code splitting, Suspense for async sections</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Vite + Vite SSG</span>
          <span class="tech-desc">Static site generation — pre-rendered HTML for instant first paint, no JS required to show content</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">SCSS</span>
          <span class="tech-desc">Custom design system with variables, responsive mixins (mobile / tablet / desktop / wide), and easing tokens</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Cloudflare Workers</span>
          <span class="tech-desc">Static asset hosting via wrangler — global edge CDN, &lt;50ms TTFB worldwide</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Intersection Observer</span>
          <span class="tech-desc">Custom useAnimation() composable triggers scroll-based entry animations without any animation library</span>
        </div>
      </div>
    </div>

    <!-- Architecture -->
    <div class="detail-section">
      <h2>Architecture Highlights</h2>
      <div class="arch-list">
        <div class="arch-item">
          <h3>Static-First Performance</h3>
          <p>
            Vite SSG pre-renders every page at build time. Visitors receive complete HTML immediately —
            no blank screens, no layout shift. Combined with Cloudflare's edge network, the site serves
            from the closest data center to each visitor globally.
          </p>
        </div>
        <div class="arch-item">
          <h3>Lazy-Loaded Sections</h3>
          <p>
            Below-the-fold sections (Success stories, Reviews, Terms modals) are loaded with
            <code>defineAsyncComponent()</code> and wrapped in Vue <code>&lt;Suspense&gt;</code>.
            Initial JS bundle is kept lean — users only download code for what they scroll to.
          </p>
        </div>
        <div class="arch-item">
          <h3>Zero-Dependency Animation</h3>
          <p>
            All scroll-triggered animations use a custom <code>useAnimation()</code> composable built on
            the native Intersection Observer API. No GSAP, no AOS, no external library — saving ~80KB
            from the bundle while achieving smooth, performant entrance animations on every element.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>
.project-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.detail-section h2 {
  font-family: 'Bungee', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2rem);
  letter-spacing: 2px;
  text-transform: uppercase;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

.detail-section h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 4px;
  background: var(--gradient-primary);
}

.detail-section p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
  max-width: 70ch;
}

/* Screenshots */
.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
  margin-top: 1rem;
}

.screenshot-placeholder {
  background: rgba(255,255,255,0.03);
  border: 2px dashed rgba(220, 38, 38, 0.3);
  border-radius: 8px;
  aspect-ratio: 16/10;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.3s, background 0.3s;
}

.screenshot-placeholder:hover {
  border-color: var(--primary-color);
  background: rgba(220, 38, 38, 0.05);
}

.screenshot-placeholder-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  color: rgba(220, 38, 38, 0.5);
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
  padding: 1rem;
}

/* Features */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-top: 1rem;
}

.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  transition: border-color 0.3s, transform 0.3s;
}

.feature-card:hover {
  border-color: var(--primary-color);
  transform: translateY(-3px);
}

.feature-icon {
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
}

.feature-card h3 {
  font-family: 'Bungee', sans-serif;
  font-size: 0.95rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  padding-left: 0;
}

.feature-card h3::before { display: none; }

.feature-card p {
  color: var(--text-secondary);
  font-size: 0.875rem;
  line-height: 1.7;
  margin: 0;
}

/* Tech Stack */
.tech-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
}

.tech-item {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-left: 3px solid var(--primary-color);
  border-radius: 0 6px 6px 0;
}

.tech-name {
  font-family: 'Bungee', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--primary-color);
  flex-shrink: 0;
  min-width: 140px;
}

.tech-desc {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Architecture */
.arch-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1rem;
}

.arch-item {
  padding: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.arch-item::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 4px; height: 100%;
  background: var(--gradient-primary);
}

.arch-item h3 {
  font-family: 'Bungee', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  padding-left: 0;
}

.arch-item h3::before { display: none; }

.arch-item p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin: 0;
}

.arch-item code {
  font-family: 'Courier New', monospace;
  font-size: 0.85em;
  background: rgba(220, 38, 38, 0.12);
  color: var(--primary-color);
  padding: 1px 5px;
  border-radius: 3px;
}

@media (max-width: 768px) {
  .tech-item {
    flex-direction: column;
    gap: 0.25rem;
  }
  .tech-name {
    min-width: unset;
  }
}
</style>

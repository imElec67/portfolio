<template>
  <div class="project-content">

    <div class="detail-section">
      <h2>Overview</h2>
      <p>
        Pokecop is the public-facing showcase for a private Pokémon TCG alert community. The site's
        tagline — <strong>"WE BIP, YOU COP"</strong> — captures the concept exactly: the service handles
        all the monitoring, members handle the purchase. The platform watches major French and international
        retailers for Pokémon booster boxes, One Piece packs, LEGO sets, and marketplace listings,
        then fires Discord notifications the instant something becomes available.
      </p>
      <p>
        The site converts visitors efficiently — animated hero with a Pokéball, eight feature sections,
        real member testimonials loaded from JSON, FAQ, and a single CTA pointing to the Whop
        subscription storefront. Built for speed: Vite SSG generates static HTML at build time and
        Cloudflare Workers serves it from the edge globally.
      </p>
    </div>

    <div class="detail-section">
      <h2>Screenshots</h2>
      <div class="screenshot-grid">
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Hero — "WE BIP, YOU COP"</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>8-feature grid</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Member reviews carousel</span>
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

    <div class="detail-section">
      <h2>Key Features</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Instant TCG Alerts</h3>
          <p>Real-time stock notifications for Pokémon booster boxes, ETBs, One Piece packs, and sealed product the moment they restock — faster than any manual refresh.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🛒</div>
          <h3>Marketplace Automation</h3>
          <p>Monitors Vinted, Leboncoin, and eBay for underpriced listings. Flash deal alerts give members a head start on below-market second-hand finds.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🏪</div>
          <h3>In-Store Drop Intel</h3>
          <p>Physical store release information including location, restock timelines, and quantities — essential for limited releases not available online.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🧸</div>
          <h3>Multi-Category Coverage</h3>
          <p>Beyond TCG — LEGO limited sets, Hot Wheels super treasure hunts, Funko exclusives, PS5 restocks. One community covering multiple collectible categories.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3>Market Analysis</h3>
          <p>Price trend analysis and value predictions. Data-driven insights on which sets are appreciating — helping members decide when to buy, hold, or flip.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💸</div>
          <h3>Price Error Hunting</h3>
          <p>Automated detection of retailer pricing mistakes and flash deals. These opportunities last minutes — automation is the difference between copping and missing.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📚</div>
          <h3>Guides & Education</h3>
          <p>Pedagogical content on grading, reselling strategy, authentication, and market timing. Structured onboarding for new members.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">👥</div>
          <h3>Active Community</h3>
          <p>Private Discord with dedicated channels, verified wins, and experienced moderators. Real testimonials from members surface on the landing page.</p>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Tech Stack</h2>
      <div class="tech-list">
        <div class="tech-item">
          <span class="tech-name">Vue 3</span>
          <span class="tech-desc">Composition API with defineAsyncComponent for code splitting and Suspense for lazy section loading</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Vite SSG</span>
          <span class="tech-desc">Static site generation — pre-rendered HTML for instant first paint and full SEO without client-side fetching</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">SCSS</span>
          <span class="tech-desc">Custom design system with CSS variables, responsive breakpoint mixins, and shared easing/animation tokens</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Cloudflare Workers</span>
          <span class="tech-desc">Edge deployment via wrangler — assets served from the closest PoP to each visitor, sub-50ms TTFB worldwide</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Intersection Observer</span>
          <span class="tech-desc">Custom useAnimation() / useMultiAnimation() composables for all scroll-triggered animations — no GSAP, no AOS</span>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Page Sections</h2>
      <div class="sections-list">
        <div class="section-row"><span class="section-badge">01</span><span class="section-name">Hero</span><span class="section-desc">Animated Pokéball, "WE BIP, YOU COP" tagline, CTA to Whop storefront</span></div>
        <div class="section-row"><span class="section-badge">02</span><span class="section-name">Features</span><span class="section-desc">8-card grid covering all alert and community capabilities</span></div>
        <div class="section-row"><span class="section-badge">03</span><span class="section-name">Platforms</span><span class="section-desc">Compatible retailer and marketplace logos</span></div>
        <div class="section-row"><span class="section-badge">04</span><span class="section-name">Success</span><span class="section-desc">Real member wins with proof of successful purchases (loaded async)</span></div>
        <div class="section-row"><span class="section-badge">05</span><span class="section-name">Reviews</span><span class="section-desc">Carousel of verified member reviews sourced from avis.json (loaded async)</span></div>
        <div class="section-row"><span class="section-badge">06</span><span class="section-name">FAQ</span><span class="section-desc">Accordion with the most common questions from prospects</span></div>
        <div class="section-row"><span class="section-badge">07</span><span class="section-name">Footer</span><span class="section-desc">Social links, legal modals (CGU, privacy, disclaimer, mentions légales)</span></div>
      </div>
    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>
.project-content { display: flex; flex-direction: column; gap: 3rem; }

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
.detail-section h2::after { content: ''; position: absolute; bottom: -8px; left: 0; width: 60px; height: 4px; background: var(--gradient-primary); }
.detail-section p { color: var(--text-secondary); line-height: 1.8; margin-bottom: 1rem; max-width: 70ch; }
.detail-section strong { color: var(--text-color); }

.screenshot-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; margin-top: 1rem; }
.screenshot-placeholder { background: rgba(255,255,255,0.03); border: 2px dashed rgba(220,38,38,0.3); border-radius: 8px; aspect-ratio: 16/10; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: border-color 0.3s, background 0.3s; }
.screenshot-placeholder:hover { border-color: var(--primary-color); background: rgba(220,38,38,0.05); }
.screenshot-placeholder-inner { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; color: rgba(220,38,38,0.5); font-family: 'Montserrat', sans-serif; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.5px; text-align: center; padding: 1rem; }

.feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin-top: 1rem; }
.feature-card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem; transition: border-color 0.3s, transform 0.3s; }
.feature-card:hover { border-color: var(--primary-color); transform: translateY(-3px); }
.feature-icon { font-size: 1.75rem; margin-bottom: 0.75rem; }
.feature-card h3 { font-family: 'Bungee', sans-serif; font-size: 0.9rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-color); margin-bottom: 0.5rem; padding-left: 0; }
.feature-card h3::before { display: none; }
.feature-card p { color: var(--text-secondary); font-size: 0.875rem; line-height: 1.7; margin: 0; }

.tech-list { display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem; }
.tech-item { display: flex; align-items: baseline; gap: 1rem; padding: 1rem 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-left: 3px solid var(--primary-color); border-radius: 0 6px 6px 0; }
.tech-name { font-family: 'Bungee', sans-serif; font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; color: var(--primary-color); flex-shrink: 0; min-width: 140px; }
.tech-desc { font-family: 'Montserrat', sans-serif; font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; }

.sections-list { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem; }
.section-row { display: flex; align-items: center; gap: 1rem; padding: 0.875rem 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 6px; transition: border-color 0.2s; }
.section-row:hover { border-color: var(--border-light); }
.section-badge { font-family: 'Bungee', sans-serif; font-size: 0.75rem; letter-spacing: 1px; color: var(--primary-color); flex-shrink: 0; width: 28px; }
.section-name { font-family: 'Montserrat', sans-serif; font-size: 0.875rem; font-weight: 700; color: var(--text-color); flex-shrink: 0; min-width: 100px; }
.section-desc { font-family: 'Montserrat', sans-serif; font-size: 0.85rem; color: var(--text-secondary); }

@media (max-width: 768px) {
  .tech-item { flex-direction: column; gap: 0.25rem; }
  .tech-name { min-width: unset; }
  .section-row { flex-wrap: wrap; }
}
</style>

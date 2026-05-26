<template>
  <div class="project-content">

    <div class="detail-section">
      <h2>Overview</h2>
      <p>
        The Monitors are a suite of specialized web scraping processes that form the intelligence engine
        behind the Proxcop and Pokecop communities. Each monitor is purpose-built for a specific target
        website, handling the unique page structure, anti-bot measures, and data extraction patterns
        of that site. When stock appears or changes, monitors fire Discord webhook notifications to
        community members within seconds.
      </p>
      <p>
        The system spans multiple languages — Go for high-performance polling monitors, Python for
        sites requiring browser emulation or advanced fingerprinting bypass, and Node.js for API-integrated
        monitors. All monitors share the same core loop: fetch → diff against known state → notify on
        change → persist new state.
      </p>
      <p>
        Reliability engineering is a first-class concern: exponential backoff on network failures,
        heartbeat pings to verify liveness, state persistence to disk to survive restarts without
        duplicate notifications, and PM2 process management for production uptime.
      </p>
    </div>

    <div class="detail-section">
      <h2>Screenshots</h2>
      <div class="screenshot-grid">
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Discord notification — new drop</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Discord notification — restock</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>PM2 process list — production</span>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Monitor Types</h2>

      <div class="monitor-card">
        <div class="monitor-header">
          <span class="lang-badge go">Go</span>
          <h3>Shopify Monitor</h3>
        </div>
        <p>
          Polls any Shopify store's public <code>products.json</code> endpoint and diffs it against persisted
          state to detect three event types: new products, new size variants, and restocks (variant going
          from unavailable → available). On first boot, state is silently initialized so existing products
          don't trigger false positives.
        </p>
        <div class="monitor-detail-grid">
          <div class="monitor-detail-item">
            <span class="detail-label">Detects</span>
            <span class="detail-value">New product · New variant · Restock</span>
          </div>
          <div class="monitor-detail-item">
            <span class="detail-label">Config</span>
            <span class="detail-value">SHOPIFY_URL, DISCORD_WEBHOOK_URL, INTERVAL_SECONDS, STATE_FILE</span>
          </div>
          <div class="monitor-detail-item">
            <span class="detail-label">Resilience</span>
            <span class="detail-value">Exponential backoff on errors (capped at 5 min), webhook URL normalization</span>
          </div>
          <div class="monitor-detail-item">
            <span class="detail-label">Production</span>
            <span class="detail-value">Each store runs as a separate PM2 process with its own .env</span>
          </div>
        </div>
      </div>

      <div class="monitor-card">
        <div class="monitor-header">
          <span class="lang-badge go">Go</span>
          <h3>Chrome Hearts Monitor</h3>
        </div>
        <p>
          Monitors the Chrome Hearts website sitemap for new product page URLs and redirect changes.
          A 302 redirect on a known URL signals a stock drop or availability change. The monitor
          differentiates between 301 permanent redirects (ignored) and 302 temporary redirects (notified).
          Optional keyword filtering limits alerts to relevant products.
        </p>
        <div class="monitor-detail-grid">
          <div class="monitor-detail-item">
            <span class="detail-label">Detects</span>
            <span class="detail-value">New sitemap URLs · 302 redirects (stock drops)</span>
          </div>
          <div class="monitor-detail-item">
            <span class="detail-label">Config</span>
            <span class="detail-value">WEBHOOK_URLS (comma-sep), KEYWORDS, POLL_INTERVAL</span>
          </div>
          <div class="monitor-detail-item">
            <span class="detail-label">Resilience</span>
            <span class="detail-value">Exponential backoff, heartbeat notifications, skip cycle on transient errors</span>
          </div>
          <div class="monitor-detail-item">
            <span class="detail-label">State</span>
            <span class="detail-value">JSON file persists seen URLs and redirect destinations across restarts</span>
          </div>
        </div>
      </div>

      <div class="monitor-card">
        <div class="monitor-header">
          <span class="lang-badge go">Go</span>
          <h3>Affluence Backend Monitor</h3>
        </div>
        <p>
          A generic monitor that polls the MonitorManager backend API to fetch configured products for
          one or more websites, then scrapes each product according to its configuration. Supports
          multiple sites in a single process run. Results are dispatched to per-product webhook URLs.
        </p>
        <div class="monitor-detail-grid">
          <div class="monitor-detail-item">
            <span class="detail-label">Config</span>
            <span class="detail-value">WEBSITE_NAME, COOK_GROUP, PRIVATE_KEY, API_BASE_URL</span>
          </div>
          <div class="monitor-detail-item">
            <span class="detail-label">Integration</span>
            <span class="detail-value">Reads product config from MonitorManager API — no hardcoded product lists</span>
          </div>
          <div class="monitor-detail-item">
            <span class="detail-label">Multi-site</span>
            <span class="detail-value">Comma-separated WEBSITE_NAME supports monitoring multiple sites in one process</span>
          </div>
        </div>
      </div>

      <div class="monitor-card">
        <div class="monitor-header">
          <span class="lang-badge python">Python</span>
          <span class="lang-badge node">Node.js</span>
          <h3>Extended Monitor Fleet</h3>
        </div>
        <p>
          Beyond the Go monitors, the system includes a fleet of Python and Node.js monitors targeting
          sites with more complex anti-bot defenses — browser fingerprint challenges, CAPTCHA, JS-rendered
          content, and session-based rate limiting. Python handles scraping logic requiring Selenium or
          Playwright for headless browser emulation. Node.js monitors integrate directly with platform
          APIs where available (Shopify Storefront API, brand webhook feeds).
        </p>
        <div class="monitor-detail-grid">
          <div class="monitor-detail-item">
            <span class="detail-label">Python targets</span>
            <span class="detail-value">JS-heavy sites, fingerprint bypass, session management, CAPTCHA handling</span>
          </div>
          <div class="monitor-detail-item">
            <span class="detail-label">Node.js targets</span>
            <span class="detail-value">API-integrated monitors, Storefront API polling, webhook ingestion</span>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Core Loop</h2>
      <div class="loop-steps">
        <div class="loop-step">
          <div class="loop-num">1</div>
          <div class="loop-content">
            <h3>Fetch</h3>
            <p>HTTP request to the target endpoint (products.json, sitemap, API). Headers mimic legitimate browser traffic. Retry with exponential backoff on network failures.</p>
          </div>
        </div>
        <div class="loop-step">
          <div class="loop-num">2</div>
          <div class="loop-content">
            <h3>Diff</h3>
            <p>Compare fetched data against state persisted to disk from the last cycle. New product IDs, new variant IDs, or availability changes trigger notifications.</p>
          </div>
        </div>
        <div class="loop-step">
          <div class="loop-num">3</div>
          <div class="loop-content">
            <h3>Notify</h3>
            <p>Build a rich Discord embed with product name, image, URL, variant details, and price. POST to all configured webhook URLs for that product.</p>
          </div>
        </div>
        <div class="loop-step">
          <div class="loop-num">4</div>
          <div class="loop-content">
            <h3>Persist</h3>
            <p>Write new state to the JSON state file. On the next cycle, this becomes the baseline for diffing. Restart-safe — no duplicate notifications after a process restart.</p>
          </div>
        </div>
        <div class="loop-step">
          <div class="loop-num">5</div>
          <div class="loop-content">
            <h3>Sleep</h3>
            <p>Wait for the configured interval (typically 10–60 seconds) before the next cycle. Interval tuned per target to balance freshness against rate limiting risk.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Tech Stack</h2>
      <div class="tech-list">
        <div class="tech-item">
          <span class="tech-name">Go</span>
          <span class="tech-desc">Primary language for polling monitors — goroutines for concurrent requests, minimal dependencies, single-binary deployment</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Python</span>
          <span class="tech-desc">Browser automation monitors using Playwright/Selenium for JS-rendered targets and fingerprint bypass</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Node.js</span>
          <span class="tech-desc">API-integrated monitors and notification pipeline integration with MonitorManager backend</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Discord Webhooks</span>
          <span class="tech-desc">Rich embed notifications with product images, variant details, and direct purchase links</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">PM2</span>
          <span class="tech-desc">Production process manager — auto-restart on crash, per-process .env files, log rotation</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">JSON State Files</span>
          <span class="tech-desc">Disk-persisted state ensures no duplicate notifications across process restarts or deployments</span>
        </div>
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

.screenshot-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; margin-top: 1rem; }
.screenshot-placeholder { background: rgba(255,255,255,0.03); border: 2px dashed rgba(220,38,38,0.3); border-radius: 8px; aspect-ratio: 16/10; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: border-color 0.3s, background 0.3s; }
.screenshot-placeholder:hover { border-color: var(--primary-color); background: rgba(220,38,38,0.05); }
.screenshot-placeholder-inner { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; color: rgba(220,38,38,0.5); font-family: 'Montserrat', sans-serif; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.5px; text-align: center; padding: 1rem; }

/* Monitor cards */
.monitor-card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem; margin-bottom: 1.25rem; }
.monitor-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
.monitor-header h3 { font-family: 'Bungee', sans-serif; font-size: 1rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-color); margin: 0; padding: 0; }
.monitor-header h3::before { display: none; }
.monitor-card > p { color: var(--text-secondary); font-size: 0.9rem; line-height: 1.75; margin-bottom: 1.25rem; max-width: none; }
.monitor-card > p code { font-family: 'Courier New', monospace; font-size: 0.85em; background: rgba(220,38,38,0.12); color: var(--primary-color); padding: 1px 5px; border-radius: 3px; }
.lang-badge { font-family: 'Bungee', sans-serif; font-size: 0.7rem; letter-spacing: 1px; padding: 3px 10px; border-radius: 3px; }
.lang-badge.go { background: rgba(0,173,216,0.15); color: #38bdf8; border: 1px solid rgba(0,173,216,0.3); }
.lang-badge.python { background: rgba(251,191,36,0.12); color: #fbbf24; border: 1px solid rgba(251,191,36,0.25); }
.lang-badge.node { background: rgba(134,197,94,0.12); color: #86efac; border: 1px solid rgba(134,197,94,0.25); }

.monitor-detail-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.5rem; }
.monitor-detail-item { display: flex; gap: 0.5rem; padding: 0.5rem 0; border-top: 1px solid rgba(220,38,38,0.08); }
.detail-label { font-family: 'Montserrat', sans-serif; font-size: 0.75rem; font-weight: 700; color: var(--text-light); text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; min-width: 80px; padding-top: 1px; }
.detail-value { font-family: 'Montserrat', sans-serif; font-size: 0.8rem; color: var(--text-secondary); line-height: 1.5; }

/* Loop steps */
.loop-steps { display: flex; flex-direction: column; gap: 0; margin-top: 1rem; }
.loop-step { display: flex; gap: 1.25rem; position: relative; }
.loop-step:not(:last-child)::before { content: ''; position: absolute; left: 20px; top: 44px; bottom: -8px; width: 2px; background: linear-gradient(to bottom, rgba(220,38,38,0.4), rgba(220,38,38,0.1)); }
.loop-num { width: 40px; height: 40px; border-radius: 50%; background: var(--gradient-primary); display: flex; align-items: center; justify-content: center; font-family: 'Bungee', sans-serif; font-size: 0.9rem; color: white; flex-shrink: 0; margin-top: 2px; }
.loop-content { flex: 1; padding-bottom: 1.5rem; }
.loop-content h3 { font-family: 'Bungee', sans-serif; font-size: 0.9rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-color); margin-bottom: 0.25rem; padding-left: 0; }
.loop-content h3::before { display: none; }
.loop-content p { font-family: 'Montserrat', sans-serif; font-size: 0.875rem; color: var(--text-secondary); line-height: 1.7; margin: 0; max-width: none; }

.tech-list { display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem; }
.tech-item { display: flex; align-items: baseline; gap: 1rem; padding: 1rem 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-left: 3px solid var(--primary-color); border-radius: 0 6px 6px 0; }
.tech-name { font-family: 'Bungee', sans-serif; font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; color: var(--primary-color); flex-shrink: 0; min-width: 140px; }
.tech-desc { font-family: 'Montserrat', sans-serif; font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; }

@media (max-width: 768px) {
  .tech-item { flex-direction: column; gap: 0.25rem; }
  .tech-name { min-width: unset; }
  .monitor-detail-grid { grid-template-columns: 1fr; }
}
</style>

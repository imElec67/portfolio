<template>
  <div class="project-content">

    <div class="detail-section">
      <h2>Overview</h2>
      <p>
        The Affluence Dashboard is the operational backbone of Affluence Store — a sneaker and
        collectibles resale business in Strasbourg. What started as a need to replace spreadsheets
        grew into a full business management platform covering every financial and inventory workflow:
        stock intake, in-store sales, depositor management, payouts, gift cards, till reconciliation,
        and customer receipts — all from a single authenticated web app.
      </p>
      <p>
        The platform serves two distinct user groups: <strong>store staff</strong> who process daily
        operations (sales, receipts, stock), and <strong>depositors</strong> — sellers who place their
        items for sale in the store — who each have their own view of their inventory, pricing, and
        earnings. Notifications flow automatically via Discord webhooks and email whenever a depositor's
        item sells.
      </p>
      <p>
        The backend manages <strong>20 MongoDB models</strong> across 12 route modules, integrates
        with WooCommerce for e-commerce sync, StockX for pricing data, and generates PDFs for
        receipts and gift cards on the fly using jsPDF.
      </p>
    </div>

    <div class="detail-section">
      <h2>Screenshots</h2>
      <div class="screenshot-grid">
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Dashboard home — overview</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Inventory management table</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Stats — Chart.js analytics</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Receipt PDF preview</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Till cash management</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Gift card generation</span>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Key Features</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">📦</div>
          <h3>Inventory Management</h3>
          <p>Full stock lifecycle tracking — intake, on-hold, sold, returned, withdrawn. Every state change is logged with timestamps and user attribution for a complete audit trail.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🧾</div>
          <h3>PDF Receipt Generation</h3>
          <p>In-store purchase receipts generated client-side with jsPDF. Branded templates with item details, price, date, and store information — ready to print or email instantly.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎁</div>
          <h3>Gift Card System</h3>
          <p>Issue, track, and redeem gift cards. Usage history is maintained per card. PDF gift cards with QR codes or codes generated on demand for print or digital delivery.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💰</div>
          <h3>Depositor Payouts</h3>
          <p>When a depositor's item sells, the system calculates their earnings based on agreed commission, marks the payout, and sends a Discord + email notification automatically.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🏧</div>
          <h3>Till Cash Management</h3>
          <p>Track register float, cash-in, cash-out, and end-of-day reconciliation. Verification history lets managers audit discrepancies without paper records.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3>Analytics & Stats</h3>
          <p>Chart.js-powered dashboards for sales volume, revenue trends, top-performing categories, and depositor performance. Data visualised across configurable time ranges.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔗</div>
          <h3>WooCommerce Sync</h3>
          <p>Bidirectional sync with the WooCommerce storefront via REST API. Products added in the dashboard are queued and pushed to the online store automatically.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💹</div>
          <h3>StockX Integration</h3>
          <p>Live pricing data pulled from StockX API with token caching. Staff can check current market value of any sneaker directly in the dashboard while processing stock.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📧</div>
          <h3>Email Notifications</h3>
          <p>Nodemailer SMTP for transactional emails — sale confirmations to depositors, account verification, and password reset flows. Branded HTML email templates.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3>PWA Support</h3>
          <p>Progressive Web App manifest and service worker — installable on iOS and Android for staff working on the shop floor without always opening a browser.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔐</div>
          <h3>Auth — Email + Discord</h3>
          <p>Email/password with verification flow, plus Discord OAuth. Password reset via email. JWT cookies secure all authenticated routes. Role-based access controls.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📋</div>
          <h3>StockX CSV Tool</h3>
          <p>Import/export utility for bulk listing preparation on StockX. Converts internal inventory data to the CSV format required by StockX's bulk listing tool.</p>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Tech Stack</h2>
      <div class="tech-list">
        <div class="tech-item">
          <span class="tech-name">Vue 3</span>
          <span class="tech-desc">Composition API; lazy-loaded dashboard shell with 12 feature components conditionally rendered based on sidebar selection</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Ant Design Vue 4</span>
          <span class="tech-desc">Tables, forms, modals, notifications, date pickers — consistent enterprise UI with minimal custom CSS overhead</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Chart.js + vue-chartjs</span>
          <span class="tech-desc">Line, bar, and doughnut charts for the stats dashboard — configured with responsive options and custom tooltips</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">jsPDF</span>
          <span class="tech-desc">Client-side PDF generation for receipts and gift cards — no server round-trip, no PDF library dependency on backend</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Node.js + Express 5</span>
          <span class="tech-desc">REST API with 12 route modules, JWT middleware, CORS configured per environment</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">MongoDB + Mongoose 9</span>
          <span class="tech-desc">20 models covering every business entity — products, transactions, payouts, gift cards, till state, WooCommerce sync queue</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">WooCommerce REST API</span>
          <span class="tech-desc">Product sync with the public e-commerce storefront via official WooCommerce REST client</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Nodemailer</span>
          <span class="tech-desc">SMTP email service for transactional emails with HTML templates for depositor notifications and auth flows</span>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Data Model</h2>
      <div class="models-grid">
        <div class="model-group">
          <div class="model-group-title">Core</div>
          <div class="model-tag">User</div>
          <div class="model-tag">Product</div>
          <div class="model-tag">Category</div>
        </div>
        <div class="model-group">
          <div class="model-group-title">Inventory States</div>
          <div class="model-tag">ProductSold</div>
          <div class="model-tag">ProductOnHold</div>
          <div class="model-tag">ProductReturn</div>
          <div class="model-tag">ProductWithdraw</div>
          <div class="model-tag">ProductEdit</div>
        </div>
        <div class="model-group">
          <div class="model-group-title">Financial</div>
          <div class="model-tag">Transaction</div>
          <div class="model-tag">Payout</div>
          <div class="model-tag">Purchase</div>
          <div class="model-tag">GiftCard</div>
          <div class="model-tag">GiftCardHistory</div>
        </div>
        <div class="model-group">
          <div class="model-group-title">Till / Register</div>
          <div class="model-tag">TillCash</div>
          <div class="model-tag">TillCashHistory</div>
          <div class="model-tag">TillCashVerification</div>
        </div>
        <div class="model-group">
          <div class="model-group-title">Integrations</div>
          <div class="model-tag">WcSyncQueue</div>
          <div class="model-tag">StockXData</div>
          <div class="model-tag">StockXToken</div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Architecture Highlights</h2>
      <div class="arch-list">
        <div class="arch-item">
          <h3>Single-Shell Dashboard Pattern</h3>
          <p>
            The authenticated area renders a single <code>/dashboard</code> shell component that
            conditionally mounts feature components based on the selected sidebar category. Code
            splitting via Vite's manual chunk configuration separates the dashboard, login, and
            vendor bundles — users only download what they navigate to.
          </p>
        </div>
        <div class="arch-item">
          <h3>Client-Side PDF Without a Server</h3>
          <p>
            Receipts and gift cards are generated entirely in the browser using jsPDF. This
            eliminates a server round-trip, removes any PDF rendering dependency from the backend,
            and allows offline generation once the PWA is installed. Templates are implemented as
            JS functions that draw directly onto the jsPDF canvas.
          </p>
        </div>
        <div class="arch-item">
          <h3>Notification Service Layer</h3>
          <p>
            All outbound notifications (email, Discord webhook) are abstracted into a
            <code>services/notification/</code> layer with separate modules for each channel.
            Discord embeds have dedicated admin and user template sets. Email uses HTML templates.
            Business logic calls the service, not the transport directly — swapping channels requires
            no changes to the feature code.
          </p>
        </div>
        <div class="arch-item">
          <h3>WooCommerce Sync Queue</h3>
          <p>
            Product updates to WooCommerce are queued in a MongoDB collection rather than fired
            synchronously. A background worker processes the queue and retries failed syncs.
            This prevents slow WooCommerce API responses from blocking the staff UI and ensures
            eventual consistency between the internal system and the online store.
          </p>
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
.detail-section strong { color: var(--text-color); }

.screenshot-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; margin-top: 1rem; }
.screenshot-placeholder { background: rgba(255,255,255,0.03); border: 2px dashed rgba(220,38,38,0.3); border-radius: 8px; aspect-ratio: 16/10; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: border-color 0.3s, background 0.3s; }
.screenshot-placeholder:hover { border-color: var(--primary-color); background: rgba(220,38,38,0.05); }
.screenshot-placeholder-inner { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; color: rgba(220,38,38,0.5); font-family: 'Montserrat', sans-serif; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.5px; text-align: center; padding: 1rem; }

.feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; margin-top: 1rem; }
.feature-card { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem; transition: border-color 0.3s, transform 0.3s; }
.feature-card:hover { border-color: var(--primary-color); transform: translateY(-3px); }
.feature-icon { font-size: 1.75rem; margin-bottom: 0.75rem; }
.feature-card h3 { font-family: 'Bungee', sans-serif; font-size: 0.85rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-color); margin-bottom: 0.5rem; padding-left: 0; }
.feature-card h3::before { display: none; }
.feature-card p { color: var(--text-secondary); font-size: 0.875rem; line-height: 1.7; margin: 0; }

.tech-list { display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem; }
.tech-item { display: flex; align-items: baseline; gap: 1rem; padding: 1rem 1.25rem; background: var(--bg-card); border: 1px solid var(--border-color); border-left: 3px solid var(--primary-color); border-radius: 0 6px 6px 0; }
.tech-name { font-family: 'Bungee', sans-serif; font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; color: var(--primary-color); flex-shrink: 0; min-width: 160px; }
.tech-desc { font-family: 'Montserrat', sans-serif; font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; }

/* Data models */
.models-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem; margin-top: 1rem; }
.model-group { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; padding: 1.25rem; }
.model-group-title { font-family: 'Montserrat', sans-serif; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-light); margin-bottom: 0.75rem; }
.model-tag { display: inline-block; font-family: 'Courier New', monospace; font-size: 0.78rem; background: rgba(220,38,38,0.1); color: var(--primary-color); border: 1px solid rgba(220,38,38,0.2); border-radius: 3px; padding: 2px 8px; margin: 2px 2px 2px 0; }

.arch-list { display: flex; flex-direction: column; gap: 1.25rem; margin-top: 1rem; }
.arch-item { padding: 1.5rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; position: relative; overflow: hidden; }
.arch-item::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: var(--gradient-primary); }
.arch-item h3 { font-family: 'Bungee', sans-serif; font-size: 0.9rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-color); margin-bottom: 0.5rem; padding-left: 0; }
.arch-item h3::before { display: none; }
.arch-item p { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.75; margin: 0; }
.arch-item code { font-family: 'Courier New', monospace; font-size: 0.85em; background: rgba(220,38,38,0.12); color: var(--primary-color); padding: 1px 5px; border-radius: 3px; }

@media (max-width: 768px) {
  .tech-item { flex-direction: column; gap: 0.25rem; }
  .tech-name { min-width: unset; }
}
</style>

<template>
  <div class="project-content">

    <div class="detail-section">
      <h2>Overview</h2>
      <p>
        Affluence Store is a French sneaker and streetwear resale e-commerce site targeting the
        Alsace region and the broader French market. The store sells authenticated second-hand and
        deadstock sneakers, clothing, and collectibles. The site is fully self-hosted on a VPS
        running a LEMP stack (Linux, Nginx, MySQL, PHP), giving full control over performance
        tuning, caching configuration, and server security.
      </p>
      <p>
        Built on WordPress with WooCommerce and the Nasa theme, the site was designed to deliver
        a premium retail experience: full-page hero sliders, product filtering, multi-carrier
        shipping checkout, three payment gateways, PDF invoice generation, and Google Review
        widgets for social proof. It integrates bidirectionally with the
        <strong>Affluence Dashboard</strong> — the internal admin tool — for inventory and
        product sync via WooCommerce's REST API.
      </p>
      <p>
        Pages are built with Elementor and Ultimate Addons for Elementor, and LiteSpeed Cache
        handles full-page caching, object caching, and asset optimization to keep page speed
        scores high on a shared-resource VPS.
      </p>
    </div>

    <div class="detail-section">
      <h2>Screenshots</h2>
      <div class="screenshot-grid">
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Homepage hero slider</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Product catalogue / shop page</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Product detail page</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Checkout — shipping selection</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>PDF invoice example</span>
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
          <div class="feature-icon">🛍️</div>
          <h3>WooCommerce Store</h3>
          <p>Full e-commerce product catalogue with categories, attributes, variable products (size, condition), inventory management, and order processing pipeline.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🚚</div>
          <h3>4-Carrier Shipping</h3>
          <p>Colissimo, Mondial Relay, InPost, and Chronopost all available at checkout via WCMultiShipping. Customers pick the carrier and service level that fits their needs. ParcelWILL provides live order tracking post-purchase.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💳</div>
          <h3>3 Payment Gateways</h3>
          <p>WooPayments (native), Stripe, and PayPal all configured at checkout. Redundancy ensures no lost sales from a single gateway outage. PCI-compliant flows for each.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🧾</div>
          <h3>Automatic PDF Invoices</h3>
          <p>PDF Invoices & Packing Slips for WooCommerce generates and emails a compliant PDF invoice with each order confirmation. Customers can re-download from their account area.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🌍</div>
          <h3>Multilingual (FR + EN)</h3>
          <p>TranslatePress handles front-end translation with a visual editor. The full site — product pages, checkout, emails, legal pages — is available in French and English.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⭐</div>
          <h3>Google Reviews Widget</h3>
          <p>Live Google Review feed displayed on the homepage and relevant pages. Real customer ratings as social proof without asking customers to leave a separate review on the site.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎞️</div>
          <h3>Slider Revolution</h3>
          <p>Hero and promotional sliders built in Slider Revolution — responsive, animated, and manageable without code. Used for seasonal campaigns and new arrivals.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📦</div>
          <h3>Order Tracking</h3>
          <p>ParcelWILL Order Tracking integrates carrier tracking numbers directly into the WooCommerce order — customers click one link in their confirmation email to see live parcel status.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">♿</div>
          <h3>Accessibility (RGAA)</h3>
          <p>Ally - Web Accessibility & Usability identifies and flags WCAG/RGAA compliance issues. Relevant for French e-commerce sites serving the public under accessibility obligations.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔒</div>
          <h3>Security Hardening</h3>
          <p>Kadence Security Basic provides login protection, file change monitoring, and hardening rules. Combined with Nginx-level configuration on the LEMP stack for defense in depth.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📧</div>
          <h3>Transactional Email</h3>
          <p>WP Mail SMTP routes all WordPress and WooCommerce transactional emails through a dedicated SMTP server — order confirmations, shipping notifications, and password resets arrive reliably.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔗</div>
          <h3>Dashboard Sync</h3>
          <p>The Affluence Dashboard pushes product updates to this store via WooCommerce's REST API. Stock counts, prices, and product availability stay in sync between the internal tool and the public storefront.</p>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Tech Stack</h2>
      <div class="tech-list">
        <div class="tech-item">
          <span class="tech-name">WordPress</span>
          <span class="tech-desc">CMS and plugin platform — all content, products, orders, customers, and configuration managed through WP admin</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">WooCommerce</span>
          <span class="tech-desc">Core e-commerce engine — product catalogue, cart, checkout, order management, REST API for external integrations</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Nasa Theme</span>
          <span class="tech-desc">Premium WooCommerce-native theme providing the base layout, product grid, and styling framework</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Elementor + UAE</span>
          <span class="tech-desc">Visual page builder with Ultimate Addons for Elementor — homepage, landing pages, and custom sections built without custom PHP</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">LEMP on VPS</span>
          <span class="tech-desc">Self-hosted: Linux + Nginx + MySQL + PHP. Full control over server config, caching headers, SSL, and performance tuning</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">LiteSpeed Cache</span>
          <span class="tech-desc">Full-page cache, object cache, CSS/JS minification and combination, image optimization, and CDN integration for fast load times on a VPS</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Slider Revolution</span>
          <span class="tech-desc">Animated hero sliders and promotional banners — responsive, touch-enabled, and manageable from WP admin</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">TranslatePress</span>
          <span class="tech-desc">Visual front-end translation editor for French and English — covers all dynamic content including WooCommerce checkout and email templates</span>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Plugin Stack</h2>
      <div class="plugin-grid">
        <div class="plugin-group">
          <div class="plugin-group-title">E-Commerce</div>
          <div class="plugin-item">
            <span class="plugin-name">WooCommerce</span>
            <span class="plugin-desc">Core store engine</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">WooPayments</span>
            <span class="plugin-desc">Native card payments</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">Stripe Gateway</span>
            <span class="plugin-desc">Stripe card processing</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">PayPal Payments</span>
            <span class="plugin-desc">PayPal checkout</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">Google for WooCommerce</span>
            <span class="plugin-desc">Google Shopping & Merchant Center sync</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">PDF Invoices & Packing Slips</span>
            <span class="plugin-desc">Automatic order PDF generation</span>
          </div>
        </div>
        <div class="plugin-group">
          <div class="plugin-group-title">Shipping & Tracking</div>
          <div class="plugin-item">
            <span class="plugin-name">WCMultiShipping</span>
            <span class="plugin-desc">Mondial Relay, InPost & Chronopost</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">Colissimo Shipping</span>
            <span class="plugin-desc">La Poste Colissimo carrier</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">ParcelWILL Tracking</span>
            <span class="plugin-desc">Live parcel tracking in order area</span>
          </div>
        </div>
        <div class="plugin-group">
          <div class="plugin-group-title">Design & Content</div>
          <div class="plugin-item">
            <span class="plugin-name">Elementor</span>
            <span class="plugin-desc">Visual drag-and-drop page builder</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">UAE (Ultimate Addons)</span>
            <span class="plugin-desc">Extended Elementor widget library</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">Nasa Core</span>
            <span class="plugin-desc">Theme core functionality plugin</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">Slider Revolution</span>
            <span class="plugin-desc">Hero & promotional sliders</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">SVG Support</span>
            <span class="plugin-desc">SVG uploads and inline rendering</span>
          </div>
        </div>
        <div class="plugin-group">
          <div class="plugin-group-title">Performance, Security & UX</div>
          <div class="plugin-item">
            <span class="plugin-name">LiteSpeed Cache</span>
            <span class="plugin-desc">Full-page cache, asset optimization</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">Kadence Security</span>
            <span class="plugin-desc">Login protection, file monitoring</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">Ally Accessibility</span>
            <span class="plugin-desc">WCAG / RGAA compliance scanning</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">TranslatePress</span>
            <span class="plugin-desc">FR / EN multilingual front-end</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">WP Mail SMTP</span>
            <span class="plugin-desc">Reliable transactional email delivery</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">Google Reviews Widget</span>
            <span class="plugin-desc">Live Google review feed on-site</span>
          </div>
          <div class="plugin-item">
            <span class="plugin-name">WPForms Lite</span>
            <span class="plugin-desc">Contact and inquiry forms</span>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Infrastructure</h2>
      <div class="arch-list">
        <div class="arch-item">
          <h3>Self-Hosted LEMP Stack</h3>
          <p>
            The site runs on a dedicated VPS with a LEMP stack (Linux, Nginx, MySQL, PHP).
            Self-hosting rather than managed WordPress gives full control over Nginx configuration
            — custom caching headers, gzip compression, HTTP/2, SSL termination, and rate limiting
            at the web server level before a request even reaches PHP.
          </p>
        </div>
        <div class="arch-item">
          <h3>LiteSpeed Cache Strategy</h3>
          <p>
            LiteSpeed Cache handles full-page HTML caching for anonymous visitors (returning cached
            pages without touching PHP or MySQL), object caching for database query results, automatic
            CSS and JavaScript minification and combination, and WebP image conversion. On a VPS with
            limited resources, this brings performance close to a CDN-fronted static site.
          </p>
        </div>
        <div class="arch-item">
          <h3>Dashboard Integration</h3>
          <p>
            The Affluence Dashboard pushes product changes to this store through WooCommerce's REST API.
            When staff add or update a product internally, a background sync queue processes the
            change and reflects it on the public store — keeping inventory counts and pricing in sync
            without double-entry. Order data flows back from WooCommerce to the dashboard for
            reporting and payout calculations.
          </p>
        </div>
        <div class="arch-item">
          <h3>Multi-Gateway Payment Resilience</h3>
          <p>
            Three independent payment gateways (WooPayments, Stripe, PayPal) are active simultaneously.
            Customers choose their preferred method at checkout. If one gateway has an outage, the
            others remain available — no lost sales during processor incidents. Each gateway runs its
            own PCI-compliant hosted payment flow with no raw card data touching the server.
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

/* Plugin stack */
.plugin-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; margin-top: 1rem; }
.plugin-group { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden; }
.plugin-group-title { font-family: 'Montserrat', sans-serif; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-light); padding: 0.75rem 1.25rem; background: rgba(251,191,36,0.06); border-bottom: 1px solid var(--border-color); }
.plugin-item { display: flex; flex-direction: column; gap: 2px; padding: 0.625rem 1.25rem; border-bottom: 1px solid rgba(220,38,38,0.07); }
.plugin-item:last-child { border-bottom: none; }
.plugin-name { font-family: 'Montserrat', sans-serif; font-size: 0.85rem; font-weight: 700; color: var(--text-color); }
.plugin-desc { font-family: 'Montserrat', sans-serif; font-size: 0.78rem; color: var(--text-secondary); }

.arch-list { display: flex; flex-direction: column; gap: 1.25rem; margin-top: 1rem; }
.arch-item { padding: 1.5rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; position: relative; overflow: hidden; }
.arch-item::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: var(--gradient-primary); }
.arch-item h3 { font-family: 'Bungee', sans-serif; font-size: 0.9rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-color); margin-bottom: 0.5rem; padding-left: 0; }
.arch-item h3::before { display: none; }
.arch-item p { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.75; margin: 0; }

@media (max-width: 768px) {
  .tech-item { flex-direction: column; gap: 0.25rem; }
  .tech-name { min-width: unset; }
}
</style>

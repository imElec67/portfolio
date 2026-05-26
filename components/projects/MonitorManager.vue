<template>
  <div class="project-content">

    <div class="detail-section">
      <h2>Overview</h2>
      <p>
        MonitorManager is the administrative control plane for the Proxcop and Pokecop monitoring
        ecosystems. Staff, moderators, and admins use it to define which websites to monitor,
        configure the products tracked on each site, manage Discord webhook destinations, and
        control who has access to the system.
      </p>
      <p>
        The system follows a clean hierarchy: <strong>Websites → Products → Webhooks</strong>.
        Each website is an independent monitoring target (e.g., a Shopify store or brand site).
        Each website contains products with their own configuration — keywords, URLs, variants.
        Webhook URLs determine where Discord notifications are sent when a monitor fires.
      </p>
      <p>
        Authentication is Discord OAuth-based — only users who are members of the correct Discord
        guild can log in, making access control automatic and tied to existing community membership.
        Real-time updates between the dashboard and monitors run over Socket.io.
      </p>
    </div>

    <div class="detail-section">
      <h2>Screenshots</h2>
      <div class="screenshot-grid">
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Login — Discord OAuth screen</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Dashboard — products table</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Create product modal</span>
          </div>
        </div>
        <div class="screenshot-placeholder">
          <div class="screenshot-placeholder-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Website management sidebar</span>
          </div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Key Features</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">🔐</div>
          <h3>Discord OAuth Auth</h3>
          <p>Login is gated to Discord guild members. No invite — no access. JWT cookies secure subsequent requests. No separate user database required.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🌐</div>
          <h3>Website Management</h3>
          <p>Full CRUD for monitoring targets. Each website is a named entity with its own product list, configuration, and webhook endpoints.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📦</div>
          <h3>Product Configuration</h3>
          <p>Per-product settings including target URLs, variant keywords, and size filters. Each product can have multiple webhook destinations for different channels.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔔</div>
          <h3>Webhook Management</h3>
          <p>Array input widget for managing multiple Discord webhook URLs per product. The MultipleInputWidget handles validation, addition, and deletion in one clean UI.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Real-Time Updates</h3>
          <p>Socket.io keeps the dashboard in sync with monitor processes. Product status changes, new detections, and configuration changes reflect instantly without page refresh.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📣</div>
          <h3>Discord Audit Log</h3>
          <p>Every CRUD operation (product created, edited, deleted) fires a Discord webhook notification to an admin channel. Full audit trail of who changed what, when.</p>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Tech Stack</h2>
      <div class="tech-list">
        <div class="tech-item">
          <span class="tech-name">Vue 3</span>
          <span class="tech-desc">Composition API; component-per-modal architecture — over 20 modal components for all CRUD interactions</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Ant Design Vue 4</span>
          <span class="tech-desc">Table, form, modal, notification, and layout components — consistent enterprise UI out of the box</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Socket.io-client</span>
          <span class="tech-desc">Real-time bidirectional events between dashboard and monitor processes</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Node.js + Express 5</span>
          <span class="tech-desc">REST API with JWT middleware; all routes protected except the OAuth flow</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">MongoDB + Mongoose 9</span>
          <span class="tech-desc">Website and product schemas; Mongoose validation enforced at model level</span>
        </div>
        <div class="tech-item">
          <span class="tech-name">Discord OAuth2</span>
          <span class="tech-desc">Guild membership check on every login — automatic access control tied to community membership</span>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>API Endpoints</h2>
      <div class="api-list">
        <div class="api-group">
          <div class="api-group-title">Auth</div>
          <div class="api-item"><span class="method post">POST</span><code>/user/discordLogin</code><span class="api-desc">Initiate Discord OAuth flow — returns redirect URL</span></div>
          <div class="api-item"><span class="method get">GET</span><code>/discord/callback</code><span class="api-desc">OAuth callback, exchange code for token, verify guild membership, issue JWT</span></div>
          <div class="api-item"><span class="method get">GET</span><code>/checkDiscordCookie</code><span class="api-desc">Validate JWT cookie before rendering protected routes</span></div>
        </div>
        <div class="api-group">
          <div class="api-group-title">Products</div>
          <div class="api-item"><span class="method get">GET</span><code>/product/list</code><span class="api-desc">Fetch all products for a given website (filtered by headers)</span></div>
          <div class="api-item"><span class="method post">POST</span><code>/product/add</code><span class="api-desc">Create product + fire Discord audit webhook</span></div>
          <div class="api-item"><span class="method put">PUT</span><code>/product/edit</code><span class="api-desc">Update product + fire Discord audit webhook</span></div>
          <div class="api-item"><span class="method del">DELETE</span><code>/product/delete</code><span class="api-desc">Remove product + fire Discord audit webhook</span></div>
        </div>
        <div class="api-group">
          <div class="api-group-title">Websites</div>
          <div class="api-item"><span class="method get">GET</span><code>/websites/list</code><span class="api-desc">Return all configured monitoring targets</span></div>
          <div class="api-item"><span class="method post">POST</span><code>/websites/add</code><span class="api-desc">Register a new website to monitor</span></div>
          <div class="api-item"><span class="method put">PUT</span><code>/websites/edit</code><span class="api-desc">Update website configuration</span></div>
          <div class="api-item"><span class="method del">DELETE</span><code>/websites/delete/:id</code><span class="api-desc">Remove website and all its products</span></div>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h2>Architecture Highlights</h2>
      <div class="arch-list">
        <div class="arch-item">
          <h3>Guild-Gated Access Control</h3>
          <p>
            Instead of a custom user management system, MonitorManager delegates access control entirely
            to Discord. When a user authenticates via Discord OAuth, the backend calls the Discord API
            to verify they are a member of the required guild. Non-members are rejected at the
            authentication layer — no admin UI needed to manage who has access.
          </p>
        </div>
        <div class="arch-item">
          <h3>Header-Based Multi-Tenancy</h3>
          <p>
            Products are scoped to websites using custom request headers (<code>privateKey</code>,
            <code>websiteName</code>, <code>cookGroup</code>). The same API instance serves multiple
            independent monitoring groups without separate deployments or databases.
          </p>
        </div>
        <div class="arch-item">
          <h3>Component-Per-Modal Pattern</h3>
          <p>
            Every CRUD action has its own dedicated modal component (<code>CreateProduct</code>,
            <code>EditProduct</code>, <code>DeleteProduct</code>, etc.). This avoids a single
            bloated form that handles all modes — each component has a single, clear purpose and
            can be modified without touching the others.
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
.tech-name { font-family: 'Bungee', sans-serif; font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; color: var(--primary-color); flex-shrink: 0; min-width: 160px; }
.tech-desc { font-family: 'Montserrat', sans-serif; font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; }

/* API */
.api-list { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 1rem; }
.api-group { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden; }
.api-group-title { font-family: 'Bungee', sans-serif; font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase; color: var(--text-light); padding: 0.75rem 1.25rem; background: rgba(251,191,36,0.06); border-bottom: 1px solid var(--border-color); }
.api-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1.25rem; border-bottom: 1px solid rgba(220,38,38,0.08); }
.api-item:last-child { border-bottom: none; }
.method { font-family: 'Bungee', sans-serif; font-size: 0.7rem; letter-spacing: 1px; padding: 2px 8px; border-radius: 3px; flex-shrink: 0; min-width: 56px; text-align: center; }
.method.get { background: rgba(34,197,94,0.15); color: #4ade80; }
.method.post { background: rgba(59,130,246,0.15); color: #60a5fa; }
.method.put { background: rgba(251,191,36,0.15); color: #fbbf24; }
.method.del { background: rgba(220,38,38,0.15); color: #f87171; }
.api-item code { font-family: 'Courier New', monospace; font-size: 0.8rem; color: var(--text-color); flex-shrink: 0; }
.api-desc { font-family: 'Montserrat', sans-serif; font-size: 0.8rem; color: var(--text-secondary); }

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
  .api-item { flex-wrap: wrap; gap: 0.5rem; }
  .api-desc { width: 100%; }
}
</style>

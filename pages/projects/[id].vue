<template>
  <div v-if="project">
    <!-- Hero Image - Full Width -->
    <div class="project-hero">
      <img 
        :src="project.heroImage || '/placeholder-hero.jpg'" 
        :alt="project.title"
        class="hero-image"
      />
    </div>

    <!-- Title and Description Section -->
    <section style="padding: 3rem 0;">
      <div class="container">
        <h1 style="font-size: 3rem; margin-bottom: 1rem; font-weight: 800; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          {{ project.title }}
        </h1>
        <p style="font-size: 1.25rem; color: var(--text-light); line-height: 1.8; max-width: 800px;">
          {{ project.description }}
        </p>
      </div>
    </section>

    <!-- Dynamic Project Content Component -->
    <section style="padding: 2rem 0 4rem;">
      <div class="container">
        <ProjectsAffluenceDashboard v-if="project.id === 'affluence-dashboard'" />
        <ProjectsAffluenceWebsite v-else-if="project.id === 'affluence-website'" />
        <ProjectsProxcop v-else-if="project.id === 'proxcop'" />
        <ProjectsPokecop v-else-if="project.id === 'pokecop'" />
        <ProjectsMonitors v-else-if="project.id === 'monitors'" />
        <ProjectsMonitorManager v-else-if="project.id === 'monitor-manager'" />
        <div v-else class="project-content-placeholder">
          <!-- Placeholder for projects without custom components -->
          <p style="color: var(--text-light); text-align: center; padding: 2rem;">
            Additional project content will be displayed here.
          </p>
        </div>
      </div>
    </section>

    <!-- Back Button -->
    <section style="padding: 2rem 0;">
      <div class="container" style="text-align: center;">
        <NuxtLink to="/projects" class="btn">← Back to Projects</NuxtLink>
      </div>
    </section>
  </div>

  <div v-else class="container" style="padding: 4rem 0; text-align: center;">
    <h1>Project Not Found</h1>
    <p>The project you're looking for doesn't exist.</p>
    <NuxtLink to="/projects" class="btn" style="margin-top: 2rem;">← Back to Projects</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()

const projects = [
  {
    id: 'affluence-dashboard',
    title: 'Affluence Dashboard',
    emoji: '📊',
    initials: 'AD',
    shortDescription: 'Full business management platform for a sneaker resale store — inventory, payouts, receipts, gift cards, till cash, WooCommerce sync, and StockX pricing.',
    description: 'The operational backbone of Affluence Store — a sneaker and collectibles resale business in Strasbourg. Manages inventory lifecycle (intake → sale → payout), generates PDF receipts and gift cards client-side with jsPDF, reconciles the till register, and syncs stock to WooCommerce automatically. Each depositor has a personal view of their inventory and earnings. Notifications fire over Discord and email when a depositor\'s item sells. Built with Vue 3, Ant Design Vue 4, Chart.js, Node.js Express, and MongoDB (20 models, 12 route modules).',
    url: 'https://affluencestore.fr',
    technologies: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB'],
    year: '2024',
    heroImage: '/projects/affluence-dashboard-hero.jpg'
  },
  {
    id: 'affluence-website',
    title: 'Affluence Website',
    emoji: '👕',
    initials: 'AW',
    shortDescription: 'WordPress WooCommerce e-commerce website for the seller platform.',
    description: 'The seller-facing e-commerce platform for Affluence Store, built with WordPress and WooCommerce. This website provides a complete online shopping experience for customers, integrated with the administrative dashboard for seamless inventory and order management.',
    url: 'https://affluencestore.fr',
    technologies: ['WordPress', 'WooCommerce', 'PHP'],
    year: '2024',
    heroImage: '/projects/affluence-website-hero.jpg'
  },
  {
    id: 'proxcop',
    title: 'Proxcop.com',
    emoji: '👟',
    initials: 'PR',
    shortDescription: 'Showcase website for a private sneakers automation community — real-time stock alerts, release guides, marketplace monitoring, and market analysis.',
    description: 'Conversion-focused landing page for a private sneakers automation Discord community. The site covers all alert types (Nike, Adidas, SNKRS, Foot Locker), marketplace automation (Vinted, Leboncoin, eBay), in-store drop intel, release calendars, and price-error hunting. Built with Vue 3, Vite SSG, SCSS, and deployed on Cloudflare Workers for sub-50ms global TTFB. Scroll animations run entirely through a custom Intersection Observer composable — no external animation library.',
    url: 'https://proxcop.com',
    technologies: ['Vue.js'],
    year: '2024',
    heroImage: '/projects/proxcop-hero.jpg'
  },
  {
    id: 'pokecop',
    title: 'Pokecop.com',
    emoji: '⚡',
    initials: 'PO',
    shortDescription: 'Landing page for a Pokémon TCG alert community — instant restock notifications, marketplace deal hunting, in-store drop intel, and market analysis.',
    description: 'Showcase site for a private Pokémon TCG and collectibles automation Discord community — tagline "WE BIP, YOU COP". The site covers instant alerts for TCG booster boxes and One Piece packs, marketplace automation on Vinted and Leboncoin, in-store drop information, LEGO and Funko coverage, price-error hunting, and market analysis. Member reviews are loaded from a JSON file. Built with Vue 3, Vite SSG, SCSS, and deployed on Cloudflare Workers. Below-the-fold sections lazy-load via defineAsyncComponent + Suspense. All animations use a custom composable built on Intersection Observer.',
    url: 'https://pokecop.com',
    technologies: ['Vue.js'],
    year: '2024',
    heroImage: '/projects/pokecop-hero.jpg'
  },
  {
    id: 'monitors',
    title: 'Monitors',
    emoji: '🔍',
    initials: 'MO',
    shortDescription: 'Multi-language scraping fleet (Go, Python, Node.js) that monitors Shopify stores, sitemaps, and brand websites for stock drops — notifying thousands of members via Discord in seconds.',
    description: 'A suite of purpose-built web scrapers powering the Proxcop and Pokecop alert networks. Each monitor runs an independent fetch → diff → notify → persist loop tailored to its target site. Go monitors handle Shopify products.json polling (detecting new products, new variants, and restocks) and sitemap monitoring (Chrome Hearts). Python handles JS-rendered targets requiring browser emulation and fingerprint bypass. Node.js integrates with platform APIs. All monitors use exponential backoff, disk-persisted state to prevent duplicate notifications, heartbeat pings for liveness verification, and PM2 for production process management.',
    url: '',
    technologies: ['Python', 'Node.js'],
    year: '2024',
    heroImage: '/projects/monitors-hero.jpg'
  },
  {
    id: 'monitor-manager',
    title: 'MonitorManager',
    emoji: '⚙️',
    initials: 'MM',
    shortDescription: 'Admin control plane for the Proxcop and Pokecop monitoring ecosystems — manage websites, products, and Discord webhook targets with Discord OAuth authentication.',
    description: 'Administrative dashboard for Proxcop and Pokecop staff to configure the monitoring infrastructure. Follows a clear hierarchy: Websites → Products → Webhooks. Staff define which sites to monitor, configure each product (URL, keywords, variants), and assign Discord webhook destinations per product. Access is gated to Discord guild members via OAuth — no separate user system needed. Every CRUD operation fires an audit webhook to an admin Discord channel. Real-time updates between the dashboard and monitor processes run over Socket.io. Built with Vue 3, Ant Design Vue 4, Node.js, Express 5, and MongoDB.',
    url: '',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    year: '2024',
    heroImage: '/projects/monitor-manager-hero.jpg'
  }
]

const project = computed(() => {
  return projects.find(p => p.id === route.params.id)
})


useHead({
  title: project.value ? `${project.value.title} - Projects` : 'Project Not Found',
  meta: [
    { name: 'description', content: project.value?.description || 'Project not found' }
  ]
})
</script>

<style scoped>
.project-hero {
  width: 100%;
  height: 500px;
  overflow: hidden;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-content-placeholder {
  min-height: 200px;
}
</style>
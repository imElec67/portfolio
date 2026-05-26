<template>
  <section style="padding: 4rem 0;">
    <div class="container">
      <h1>My Projects</h1>
      <p style="text-align: left; color: var(--text-secondary); margin-bottom: 2rem; font-size: 1.125rem;">
        A selection of projects I've worked on. Click on any project to see more details.
      </p>
      
      <!-- Technology Filter -->
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
          <button
            @click="selectedTech = null"
            :class="['filter-btn', { active: selectedTech === null }]"
          >
            All
          </button>
          <button
            v-for="tech in allTechnologies"
            :key="tech"
            @click="selectedTech = tech"
            :class="['filter-btn', { active: selectedTech === tech }]"
          >
            {{ tech }}
          </button>
        </div>
      </div>
      
      <TransitionGroup 
        name="project" 
        tag="div" 
        class="projects-grid"
      >
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="project-card"
          @click="navigateTo(`/projects/${project.id}`)"
        >
          <div class="project-card-image">
            <div class="card-monogram">{{ project.initials }}</div>
            <div class="card-year">{{ project.year }}</div>
          </div>
          <div class="project-card-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.shortDescription }}</p>
            <div class="project-tech">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup>
const selectedTech = ref(null)

const projects = [
  {
    id: 'affluence-dashboard',
    title: 'Affluence Dashboard',
    emoji: '📊',
    initials: 'AD',
    shortDescription: 'Full business management platform for a sneaker resale store — inventory, payouts, receipts, gift cards, till cash, WooCommerce sync, and StockX pricing.',
    description: 'The operational backbone of Affluence Store. Manages the complete product lifecycle (intake → sale → payout), generates PDF receipts and gift cards client-side with jsPDF, reconciles the till register, and syncs inventory to WooCommerce automatically. Depositors each have a personal view of their stock and earnings. Built with Vue 3, Ant Design Vue, Chart.js, Node.js, Express, and MongoDB (20 models across 12 route modules).',
    url: 'https://affluencestore.fr',
    technologies: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB'],
    year: '2024'
  },
  {
    id: 'affluence-website',
    title: 'Affluence Website',
    emoji: '👕',
    initials: 'AW',
    shortDescription: 'Self-hosted WordPress WooCommerce store on a LEMP VPS — multi-carrier shipping, 3 payment gateways, PDF invoices, multilingual FR/EN, and live sync with the Affluence Dashboard.',
    description: 'The customer-facing e-commerce store for Affluence Store, a French sneaker and streetwear resale shop. Built on WordPress + WooCommerce with the Elessi Theme and Elementor, hosted on a self-managed LEMP VPS with LiteSpeed Cache for full-page and object caching. Integrates Colissimo, Mondial Relay, InPost, and Chronopost for multi-carrier checkout, with Stripe, PayPal, and WooPayments for payment processing. PDF invoices generate automatically via the WooCommerce PDF Invoices & Packing Slips plugin. TranslatePress handles FR/EN localisation. Inventory and orders sync bidirectionally with the Affluence Dashboard over the WooCommerce REST API.',
    url: 'https://affluencestore.fr',
    technologies: ['WordPress', 'WooCommerce', 'PHP'],
    year: '2024'
  },
  {
    id: 'proxcop',
    title: 'Proxcop.com',
    emoji: '👟',
    initials: 'PR',
    shortDescription: 'Showcase website for a private sneakers automation community — real-time stock alerts, release guides, marketplace monitoring, and market analysis.',
    description: 'A showcase website for a sneakers automation Discord group. The platform monitors the biggest sneakers websites to notify users when the most demanding products are in stock. Features include release guides to help users see upcoming releases, market evolution tracking, and real-time stock alerts. Built with Vue.js.',
    url: 'https://proxcop.com',
    technologies: ['Vue.js'],
    year: '2024'
  },
  {
    id: 'pokecop',
    title: 'Pokecop.com',
    emoji: '⚡',
    initials: 'PO',
    shortDescription: 'Landing page for a Pokémon TCG alert community — instant restock notifications, marketplace deal hunting, in-store drop intel, and market analysis.',
    description: 'A dedicated platform for Pokemon collectors and enthusiasts, serving as the showcase website for a Pokemon products automation Discord community. The system continuously tracks major Pokemon merchandise retailers to alert users instantly when sought-after collectibles become available. The platform offers comprehensive release calendars, detailed guides for upcoming product launches, and analytics tools to track market trends and price evolution. Built with Vue.js.',
    url: 'https://pokecop.com',
    technologies: ['Vue.js'],
    year: '2024'
  },
  {
    id: 'monitors',
    title: 'Monitors',
    emoji: '🔍',
    initials: 'MO',
    shortDescription: 'Multi-language scraping fleet (Go, Python, Node.js) that monitors Shopify stores, sitemaps, and brand websites for stock drops — notifying thousands of members via Discord in seconds.',
    description: 'A comprehensive web scraping system designed for Proxcop and Pokecop platforms. The system monitors multiple e-commerce websites to track product availability and notify users when items come back in stock. Each monitor is specifically tailored to the website it tracks, handling different page structures, anti-bot measures, and data extraction methods. The system ensures real-time stock updates and reliable notifications for users. Built with Python for scraping logic and Node.js for API integration and notification management.',
    url: '',
    technologies: ['Python', 'Node.js'],
    year: '2024'
  },
  {
    id: 'monitor-manager',
    title: 'MonitorManager',
    emoji: '⚙️',
    initials: 'MM',
    shortDescription: 'Admin control plane for the Proxcop and Pokecop monitoring ecosystems — manage websites, products, and Discord webhook targets with Discord OAuth authentication.',
    description: 'A comprehensive administrative platform designed for admins, moderators, and staff of Pokecop and Proxcop to manage products and monitoring configurations. The system allows users to add, edit, and configure products for each website that needs to be monitored. Features include product management, monitor configuration, website settings, user management, and analytics. The platform provides an intuitive interface for managing the entire monitoring ecosystem efficiently. Built with Vue.js frontend, Node.js backend, and MongoDB database.',
    url: '',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    year: '2024'
  }
]

// Extract all unique technologies
const allTechnologies = computed(() => {
  const techSet = new Set()
  projects.forEach(project => {
    project.technologies.forEach(tech => techSet.add(tech))
  })
  return Array.from(techSet).sort()
})

// Filter projects based on selected technology
const filteredProjects = computed(() => {
  if (!selectedTech.value) {
    return projects
  }
  return projects.filter(project => 
    project.technologies.includes(selectedTech.value)
  )
})

useHead({
  title: 'Projects - Marius Ledig',
  meta: [
    { name: 'description', content: 'Explore the projects I\'ve built - from e-commerce platforms to mobile applications' }
  ]
})
</script>

<style scoped>
.filter-container {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.filter-btn {
  padding: 0.625rem 1.25rem;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-glass);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.filter-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
  border-color: var(--primary-color);
  background: var(--bg-hover);
  color: var(--primary-color);
}

.filter-btn.active {
  background: var(--gradient-primary);
  color: white;
  border: none;
  box-shadow: var(--shadow-lg);
}

.filter-btn.active:hover {
  transform: translateY(-2px) scale(1.05);
}

/* Project Animation Transitions */
.project-enter-active,
.project-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.project-enter-to {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.project-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.project-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(-20px);
}

.project-move {
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

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
</style>
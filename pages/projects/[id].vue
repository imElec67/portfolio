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
    shortDescription: 'Admin dashboard for stock management, receipt creation, and depositor management with live updates.',
    description: 'A comprehensive administrative dashboard for managing the Affluence Store operations. Features include stock management, in-store purchase receipt creation, and depositor management system. Each depositor has their own dashboard to view their stock, pricing information, and earnings. The system provides live updates and notifications (email and webhooks) when items they have in stock are sold. Built with Vue.js frontend, Node.js Express.js backend, and MongoDB database.',
    url: 'https://affluencestore.fr',
    technologies: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB'],
    year: '2024',
    heroImage: '/projects/affluence-dashboard-hero.jpg'
  },
  {
    id: 'affluence-website',
    title: 'Affluence Website',
    emoji: '👕',
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
    shortDescription: 'Website showcase for sneakers automation Discord group with stock monitoring and release guides.',
    description: 'A showcase website for a sneakers automation Discord group. The platform monitors the biggest sneakers websites to notify users when the most demanding products are in stock. Features include release guides to help users see upcoming releases, market evolution tracking, and real-time stock alerts. Built with Vue.js.',
    url: 'https://proxcop.com',
    technologies: ['Vue.js'],
    year: '2024',
    heroImage: '/projects/proxcop-hero.jpg'
  },
  {
    id: 'pokecop',
    title: 'Pokecop.com',
    emoji: '⚡',
    shortDescription: 'Website showcase for Pokemon products automation Discord group with stock monitoring and guides.',
    description: 'A dedicated platform for Pokemon collectors and enthusiasts, serving as the showcase website for a Pokemon products automation Discord community. The system continuously tracks major Pokemon merchandise retailers to alert users instantly when sought-after collectibles become available. The platform offers comprehensive release calendars, detailed guides for upcoming product launches, and analytics tools to track market trends and price evolution. Built with Vue.js.',
    url: 'https://pokecop.com',
    technologies: ['Vue.js'],
    year: '2024',
    heroImage: '/projects/pokecop-hero.jpg'
  },
  {
    id: 'monitors',
    title: 'Monitors',
    emoji: '🔍',
    shortDescription: 'Web scraping system for proxcop and pokecop to monitor websites and notify users about product stock.',
    description: 'A comprehensive web scraping system designed for Proxcop and Pokecop platforms. The system monitors multiple e-commerce websites to track product availability and notify users when items come back in stock. Each monitor is specifically tailored to the website it tracks, handling different page structures, anti-bot measures, and data extraction methods. The system ensures real-time stock updates and reliable notifications for users. Built with Python for scraping logic and Node.js for API integration and notification management.',
    url: '',
    technologies: ['Python', 'Node.js'],
    year: '2024',
    heroImage: '/projects/monitors-hero.jpg'
  },
  {
    id: 'monitor-manager',
    title: 'MonitorManager',
    emoji: '⚙️',
    shortDescription: 'Admin website for managing products and monitors for pokecop and proxcop platforms.',
    description: 'A comprehensive administrative platform designed for admins, moderators, and staff of Pokecop and Proxcop to manage products and monitoring configurations. The system allows users to add, edit, and configure products for each website that needs to be monitored. Features include product management, monitor configuration, website settings, user management, and analytics. The platform provides an intuitive interface for managing the entire monitoring ecosystem efficiently. Built with Vue.js frontend, Node.js backend, and MongoDB database.',
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
<template>
  <section style="padding: 4rem 0;">
    <div class="container">
      <h1 style="text-align: left; font-size: 3rem; margin-bottom: 1rem; font-weight: 800; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">My Projects</h1>
      <p style="text-align: left; color: var(--text-light); margin-bottom: 2rem; font-size: 1.125rem;">
        A selection of projects I've worked on. Click on any project to see more details.
      </p>
      
      <!-- Technology Filter -->
      <div class="filter-container">
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
            {{ project.emoji }}
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
    shortDescription: 'Admin dashboard for stock management, receipt creation, and depositor management with live updates.',
    description: 'A comprehensive administrative dashboard for managing the Affluence Store operations. Features include stock management, in-store purchase receipt creation, and depositor management system. Each depositor has their own dashboard to view their stock, pricing information, and earnings. The system provides live updates and notifications (email and webhooks) when items they have in stock are sold. Built with Vue.js frontend, Node.js Express.js backend, and MongoDB database.',
    url: 'https://affluencestore.fr',
    technologies: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB'],
    year: '2024'
  },
  {
    id: 'affluence-website',
    title: 'Affluence Website',
    emoji: '👕',
    shortDescription: 'WordPress WooCommerce e-commerce website for the seller platform.',
    description: 'The seller-facing e-commerce platform for Affluence Store, built with WordPress and WooCommerce. This website provides a complete online shopping experience for customers, integrated with the administrative dashboard for seamless inventory and order management.',
    url: 'https://affluencestore.fr',
    technologies: ['WordPress', 'WooCommerce', 'PHP'],
    year: '2024'
  },
  {
    id: 'proxcop',
    title: 'Proxcop.com',
    emoji: '👟',
    shortDescription: 'Website showcase for sneakers automation Discord group with stock monitoring and release guides.',
    description: 'A showcase website for a sneakers automation Discord group. The platform monitors the biggest sneakers websites to notify users when the most demanding products are in stock. Features include release guides to help users see upcoming releases, market evolution tracking, and real-time stock alerts. Built with Vue.js.',
    url: 'https://proxcop.com',
    technologies: ['Vue.js'],
    year: '2024'
  },
  {
    id: 'pokecop',
    title: 'Pokecop.com',
    emoji: '⚡',
    shortDescription: 'Website showcase for Pokemon products automation Discord group with stock monitoring and guides.',
    description: 'A dedicated platform for Pokemon collectors and enthusiasts, serving as the showcase website for a Pokemon products automation Discord community. The system continuously tracks major Pokemon merchandise retailers to alert users instantly when sought-after collectibles become available. The platform offers comprehensive release calendars, detailed guides for upcoming product launches, and analytics tools to track market trends and price evolution. Built with Vue.js.',
    url: 'https://pokecop.com',
    technologies: ['Vue.js'],
    year: '2024'
  },
  {
    id: 'monitors',
    title: 'Monitors',
    emoji: '🔍',
    shortDescription: 'Web scraping system for proxcop and pokecop to monitor websites and notify users about product stock.',
    description: 'A comprehensive web scraping system designed for Proxcop and Pokecop platforms. The system monitors multiple e-commerce websites to track product availability and notify users when items come back in stock. Each monitor is specifically tailored to the website it tracks, handling different page structures, anti-bot measures, and data extraction methods. The system ensures real-time stock updates and reliable notifications for users. Built with Python for scraping logic and Node.js for API integration and notification management.',
    url: '',
    technologies: ['Python', 'Node.js'],
    year: '2024'
  },
  {
    id: 'monitor-manager',
    title: 'MonitorManager',
    emoji: '⚙️',
    shortDescription: 'Admin website for managing products and monitors for pokecop and proxcop platforms.',
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
</style>
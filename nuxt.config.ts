// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Marius Ledig — Full Stack Developer & Entrepreneur',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Marius Ledig — Full Stack Developer and Entrepreneur based in Strasbourg, France. Master 2 from Epitech. Founder of Affluence Store. Specialized in Node.js, Vue.js, and MongoDB.'
        },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Marius Ledig — Full Stack Developer & Entrepreneur' },
        {
          property: 'og:description',
          content: 'Full Stack Developer and Entrepreneur based in Strasbourg. Founder of Affluence Store. Master 2 from Epitech.'
        },
        { property: 'og:locale', content: 'en_US' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Marius Ledig — Full Stack Developer & Entrepreneur' },
        {
          name: 'twitter:description',
          content: 'Full Stack Developer and Entrepreneur based in Strasbourg, France.'
        },
        // Technical
        { name: 'theme-color', content: '#1a1612' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Bungee&display=swap'
        }
      ],
      script: [
        {
          innerHTML: `(function(){try{document.documentElement.setAttribute('data-theme','dark')}catch(e){}})()`,
          type: 'text/javascript',
          tagPosition: 'head'
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Marius Ledig',
            jobTitle: 'Full Stack Developer',
            description: 'Full Stack Developer and Entrepreneur. Master 2 from Epitech. Founder of Affluence Store.',
            sameAs: [
              'https://github.com/imElec67',
              'https://www.linkedin.com/in/marius-ledig/'
            ],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Strasbourg',
              addressCountry: 'FR'
            },
            alumniOf: {
              '@type': 'EducationalOrganization',
              name: 'Epitech'
            },
            knowsAbout: ['Node.js', 'Vue.js', 'React', 'MongoDB', 'Python', 'Go', 'React Native', 'Flutter']
          })
        }
      ]
    }
  }
})
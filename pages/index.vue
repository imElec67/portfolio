<template>
  <div>
    <section class="hero" :style="{ backgroundImage: `url(${landscapeImage})` }">
      <div class="container">
        <div class="hero-badge">
          <span class="hero-badge-dot"></span>
          Open to opportunities
        </div>
        <h1>Marius Ledig</h1>
        <p>Full Stack Developer &amp; Entrepreneur</p>
        <p class="hero-subtitle">Strasbourg, France &bull; {{ age }} years old</p>
        <div class="hero-buttons">
          <NuxtLink to="/projects" class="btn btn-outline">View My Projects</NuxtLink>
          <NuxtLink to="/contact" class="btn">Get In Touch</NuxtLink>
        </div>
        <div class="hero-scroll-cue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
            <path d="M7 10l5 5 5-5"/>
          </svg>
        </div>
      </div>
    </section>

    <section class="resume-section">
      <div class="container">
        <div class="resume-content">
          <div class="resume-item reveal">
            <div class="about-me-content">
              <div class="about-me-text">
                <h2>About Me</h2>
                <p>
                  Full stack developer and entrepreneur with a Master 2 degree from Epitech.
                  Specialized in building modern web applications and managing complete digital ecosystems.
                  Passionate about creating efficient, scalable solutions from frontend to backend.
                </p>
              </div>
              <div class="about-me-image">
                <img
                  :src="myselfImage"
                  alt="Marius Ledig, Full Stack Developer"
                  width="200"
                  height="200"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          <div class="resume-item reveal">
            <h2>Skills</h2>

            <div class="skills-group-label">Core Stack</div>
            <div class="skills-grid" style="margin-bottom: 1.25rem;">
              <span class="skill-tag featured">Node.js</span>
              <span class="skill-tag featured">Vue.js</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">React Native</span>
              <span class="skill-tag">Flutter</span>
            </div>

            <div class="skills-group-label">Languages</div>
            <div class="skills-grid" style="margin-bottom: 1.25rem;">
              <span class="skill-tag">Python</span>
              <span class="skill-tag">Go</span>
              <span class="skill-tag">C</span>
              <span class="skill-tag">C++</span>
            </div>

            <div class="skills-group-label">Database</div>
            <div class="skills-grid">
              <span class="skill-tag featured">MongoDB</span>
            </div>
          </div>

          <div class="resume-item reveal">
            <h2>Experience</h2>
            <h3>Founder &amp; Full Stack Developer — Affluence Store</h3>
            <p style="color: var(--text-light); margin-bottom: 1rem;">Present</p>
            <p>
              Owner and developer of affluencestore.fr, a clothing e-commerce platform and a clothing store in Strasbourg, France.
              Designed and developed the entire ecosystem including:
            </p>
            <ul style="margin-top: 1rem;">
              <li>Customer-facing e-commerce website</li>
              <li>Administrative dashboard for business management</li>
              <li>Stock management system</li>
              <li>Seller platform integration</li>
            </ul>
            <p style="margin-top: 1rem;">
              Built using modern web technologies with focus on scalability, user experience, and business efficiency.
            </p>
          </div>

          <div class="resume-item reveal">
            <h2>Education</h2>
            <h3>Master 2 — Epitech</h3>
            <p style="color: var(--text-light);">5 years program (Grande École)</p>
            <p style="margin-top: 0.5rem;">
              <strong>Years 1–2:</strong> Mastery of fundamental programming languages (C, C++) forming the essential foundation for software engineering, AI, and cybersecurity careers.
            </p>
            <p style="margin-top: 0.5rem;">
              <strong>Year 3:</strong> Expanded learning to additional languages and technologies including Python, web security, mobile development, and frontend frameworks. Initiated the Innovation Project, a 3-year ambitious technical project.
            </p>
            <p style="margin-top: 0.5rem;">
              <strong>Year 4:</strong> International academic exchange at one of Epitech's European campuses or partner universities worldwide. Focused on app development and full stack applications.
            </p>
            <p style="margin-top: 0.5rem;">
              <strong>Year 5:</strong> Professionalization at Epitech Paris campus. Comprehensive curriculum covering backend development (Python, Node.js, Go), frontend frameworks (Vue, React), mobile development (React Native, Flutter), and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import landscapeImage from '~/assets/images/landscape.png'
import myselfImage from '~/assets/images/myself.jpeg'

const calculateAge = (birthDate) => {
  const birth = new Date(birthDate)
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) age--
  return age
}

const age = calculateAge('1999-05-14')

useHead({
  title: 'Marius Ledig — Full Stack Developer & Entrepreneur',
  meta: [
    {
      name: 'description',
      content: 'Marius Ledig — Full Stack Developer and Entrepreneur based in Strasbourg, France. Master 2 from Epitech. Founder of Affluence Store.'
    }
  ],
  link: [
    { rel: 'preload', as: 'image', href: landscapeImage, fetchpriority: 'high' }
  ]
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.hero {
  position: relative;
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}

.hero .container {
  position: relative;
  z-index: 1;
}

.about-me-content {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.about-me-text {
  flex: 1;
}

.about-me-image {
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 2px solid var(--border-color);
}

.about-me-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .about-me-content {
    flex-direction: column;
    align-items: center;
  }

  .about-me-image {
    width: 150px;
    height: 150px;
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(34, 197, 94, 0.25);
  border-radius: 20px;
  padding: 5px 14px;
  margin-bottom: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #9ca3af;
  text-transform: uppercase;
}

.hero-badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.7);
  flex-shrink: 0;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 6px rgba(34, 197, 94, 0.5); }
  50%       { box-shadow: 0 0 16px rgba(34, 197, 94, 0.9), 0 0 24px rgba(34, 197, 94, 0.35); }
}

.hero-scroll-cue {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  color: rgba(255, 255, 255, 0.3);
  animation: hero-bob 2s ease-in-out infinite;
}

@keyframes hero-bob {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(7px); }
}

@media (prefers-reduced-motion: reduce) {
  .hero-badge-dot { animation: none; }
  .hero-scroll-cue { animation: none; }
}

.skills-group-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #6b7280;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.skills-group-label:first-of-type {
  margin-top: 0.25rem;
}
</style>

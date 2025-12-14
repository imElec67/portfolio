<template>
  <div>
    <section class="hero" :style="{ backgroundImage: `url(${landscapeImage})` }">
      <div class="container">
        <h1>Marius Ledig</h1>
        <p>Full Stack Developer & Entrepreneur</p>
        <p class="hero-subtitle">Strasbourg, France • {{ age }} years old</p>
        <div class="hero-buttons">
          <NuxtLink to="/projects" class="btn btn-outline">View My Projects</NuxtLink>
          <NuxtLink to="/contact" class="btn">Get In Touch</NuxtLink>
        </div>
      </div>
    </section>

    <section class="resume-section">
      <div class="container">
        <div class="resume-content">
          <div class="resume-item">
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
                <img :src="myselfImage" alt="Marius Ledig" />
              </div>
            </div>
          </div>

          <div class="resume-item">
            <h2>Skills</h2>
            <div class="skills-grid">
              <span class="skill-tag featured">Node.js</span>
              <span class="skill-tag featured">Vue.js</span>
              <span class="skill-tag featured">MongoDB</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">C</span>
              <span class="skill-tag">C++</span>
              <span class="skill-tag">Python</span>
              <span class="skill-tag">Go</span>
              <span class="skill-tag">React Native</span>
              <span class="skill-tag">Flutter</span>
            </div>
          </div>

          <div class="resume-item">
            <h2>Experience</h2>
            <h3>Founder & Full Stack Developer - Affluence Store</h3>
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

          <div class="resume-item">
            <h2>Education</h2>
            <h3>Master 2 - Epitech</h3>
            <p style="color: var(--text-light);">5 years program (Grande École)</p>
            <p style="margin-top: 0.5rem;">
              <strong>Years 1-2:</strong> Mastery of fundamental programming languages (C, C++) forming the essential foundation for software engineering, AI, and cybersecurity careers.
            </p>
            <p style="margin-top: 0.5rem;">
              <strong>Year 3:</strong> Expanded learning to additional languages and technologies including Python, web security, mobile development, and frontend frameworks. Initiated the Innovation Project, a 3-year ambitious technical project developed throughout the remaining curriculum and presented in year 5.
            </p>
            <p style="margin-top: 0.5rem;">
              <strong>Year 4:</strong> International academic exchange at one of Epitech's European campuses or partner universities worldwide. Worked on numerous diverse projects, primarily focused on app development and full stack applications.
            </p>
            <p style="margin-top: 0.5rem;">
              <strong>Year 5:</strong> Professionalization at Epitech Paris campus, major selection (Data & AI, Cybersecurity, or Software Engineering), and leadership development. Comprehensive curriculum covering backend development (Python, Node.js, Go), frontend frameworks (Vue, React), mobile development (React Native, Flutter), and MongoDB database management.
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
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}

const age = calculateAge('1999-05-14')

useHead({
  title: 'Marius Ledig - Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio of Marius Ledig - Full Stack Developer and Founder of Affluence Store' }
  ]
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
</style>
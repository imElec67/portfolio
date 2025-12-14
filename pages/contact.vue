<template>
  <section class="contact-section" style="padding: 4rem 0;">
    <div class="container">
      <h1 style="text-align: center; font-size: 3rem; margin-bottom: 1rem; font-weight: 800; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Get In Touch</h1>
      <p style="text-align: center; color: var(--text-light); margin-bottom: 3rem; font-size: 1.125rem;">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      <div class="contact-form">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name"
              required 
              placeholder="Your name"
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              required 
              placeholder="your.email@example.com"
            />
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject"
              required 
              placeholder="What's this about?"
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              v-model="form.message"
              required 
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button type="submit" class="btn" style="width: 100%;">
            Send Message
          </button>
        </form>

        <div class="direct-contact">
          <h3 class="direct-contact-title">Or reach me directly</h3>
          
          <div class="contact-info-grid">
            <div class="contact-info-card">
              <div class="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div class="contact-info-content">
                <span class="contact-info-label">Email</span>
                <a :href="`mailto:${contactInfo.email}`" class="contact-info-value">
                  {{ contactInfo.email }}
                </a>
              </div>
            </div>

            <div class="contact-info-card">
              <div class="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div class="contact-info-content">
                <span class="contact-info-label">Location</span>
                <span class="contact-info-value">{{ contactInfo.location }}</span>
              </div>
            </div>
          </div>

          <div class="social-links">
            <a 
              :href="contactInfo.github" 
              target="_blank" 
              rel="noopener noreferrer"
              title="GitHub"
              class="social-link"
            >
              <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a 
              :href="contactInfo.linkedin" 
              target="_blank" 
              rel="noopener noreferrer"
              title="LinkedIn"
              class="social-link"
            >
              <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const contactInfo = {
  email: 'marius.ledig@gmail.com',
  location: 'Strasbourg, France',
  github: 'https://github.com/imElec67',
  linkedin: 'https://www.linkedin.com/in/marius-ledig/'
}

const handleSubmit = () => {
  // In a real application, you would send this to a backend API
  const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`
  window.location.href = mailtoLink
  
  // Reset form
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  
  alert('Opening your email client...')
}

useHead({
  title: 'Contact - Marius Ledig',
  meta: [
    { name: 'description', content: 'Get in touch with Marius Ledig - Full Stack Developer' }
  ]
})
</script>

<style scoped>
.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: var(--bg-glass);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9375rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-glass);
}

.social-link:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
  background: var(--bg-hover);
  color: var(--primary-color);
}

.social-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.social-link:hover .social-icon {
  transform: scale(1.1);
}

.direct-contact {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid var(--border-color);
  position: relative;
}

.direct-contact::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: var(--gradient-primary);
}

.direct-contact-title {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.contact-info-card {
  background: var(--bg-card);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow-glass);
  border: 2px solid var(--border-color);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}

.contact-info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
}

.contact-info-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
  background: var(--bg-hover);
}

.contact-info-icon {
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
}

.contact-info-icon svg {
  width: 24px;
  height: 24px;
}

.contact-info-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
}

.contact-info-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-info-value {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-info-value:hover {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .contact-info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
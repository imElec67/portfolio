<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/" class="logo">Marius Ledig</NuxtLink>
        <ul class="nav-links">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/projects">Projects</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          <li>
            <button 
              @click="toggleTheme" 
              class="theme-toggle"
              :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
              type="button"
            >
              <span class="theme-toggle-icon sun">☀</span>
              <span class="theme-toggle-icon moon">☾</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>&copy; {{ new Date().getFullYear() }} Marius Ledig. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
const isDark = ref(false)

onMounted(() => {
  if (process.client) {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // Default to dark mode
      isDark.value = prefersDark || true
    }
    updateTheme()
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
  if (process.client) {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
}

const updateTheme = () => {
  if (process.client) {
    if (isDark.value) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }
}
</script>
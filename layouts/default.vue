<template>
  <div class="layout-wrapper">
    <Particles />
    <div
      class="nav-overlay"
      :class="{ open: menuOpen }"
      aria-hidden="true"
      @click="menuOpen = false"
    />
    <header>
      <nav>
        <NuxtLink to="/" class="logo" @click="menuOpen = false">Marius Ledig</NuxtLink>
        <button
          class="nav-toggle"
          :class="{ open: menuOpen }"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation menu"
          @click="menuOpen = !menuOpen"
        >
          <span />
          <span />
          <span />
        </button>
        <ul class="nav-links" :class="{ open: menuOpen }">
          <li><NuxtLink to="/" @click="menuOpen = false">Home</NuxtLink></li>
          <li><NuxtLink to="/projects" @click="menuOpen = false">Projects</NuxtLink></li>
          <li><NuxtLink to="/contact" @click="menuOpen = false">Contact</NuxtLink></li>
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
const menuOpen = ref(false)
const route = useRoute()
watch(() => route.path, () => { menuOpen.value = false })
</script>

<style scoped>
.layout-wrapper {
  position: relative;
  min-height: 100vh;
}
</style>

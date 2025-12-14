<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/" class="logo">Marius Ledig</NuxtLink>
        <ul class="nav-links">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/projects">Projects</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
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
// Dojo theme - single dark mode
</script>
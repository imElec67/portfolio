<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Prevent FOUC - set theme immediately
if (process.client) {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = savedTheme === 'dark' || (!savedTheme && (prefersDark || true))
  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
}
</script>

<style>
  
</style>
<template>
  <div class="particles-container" aria-hidden="true">
    <div v-for="p in particles" :key="p.id" class="particle" :style="p.style" />
  </div>
</template>

<script setup>
const PARTICLE_COUNT = 45
const COLORS = ['#dc2626', '#b91c1c', '#f59e0b', '#d97706', '#ef4444', '#fbbf24']

const particles = ref([])

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  particles.value = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const size = Math.random() * 2 + 1
    const color = COLORS[i % COLORS.length]
    const drift = (Math.random() - 0.5) * 120

    return {
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 3}px ${color}`,
        animationName: i % 2 === 0 ? 'particle-float-right' : 'particle-float-left',
        animationDuration: `${Math.random() * 40 + 25}s`,
        animationDelay: `-${Math.random() * 35}s`,
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        '--drift': `${drift}px`,
      }
    }
  })
})
</script>

<style scoped>
.particles-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  border-radius: 50%;
  will-change: transform, opacity;
}

@keyframes particle-float-right {
  0% {
    transform: translateY(110vh) translateX(0) scale(0);
    opacity: 0;
  }
  8% { opacity: 0.85; }
  92% { opacity: 0.85; }
  100% {
    transform: translateY(-80px) translateX(var(--drift)) scale(1.2);
    opacity: 0;
  }
}

@keyframes particle-float-left {
  0% {
    transform: translateY(110vh) translateX(0) scale(0);
    opacity: 0;
  }
  8% { opacity: 0.85; }
  92% { opacity: 0.85; }
  100% {
    transform: translateY(-80px) translateX(calc(var(--drift) * -1)) scale(1.2);
    opacity: 0;
  }
}
</style>

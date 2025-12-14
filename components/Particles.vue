<template>
  <div class="particles-container">
    <div 
      v-for="i in particleCount" 
      :key="i"
      class="particle"
      :class="`particle-${i % 3}`"
      :style="getParticleStyle(i)"
    ></div>
  </div>
</template>

<script setup>
const particleCount = 100
const maxTop = ref(2000)

onMounted(() => {
  if (process.client) {
    const updateMaxTop = () => {
      // Get actual document height without particles
      const height = Math.max(
        document.body.scrollHeight || document.documentElement.scrollHeight,
        window.innerHeight
      )
      maxTop.value = height
    }
    
    nextTick(() => {
      updateMaxTop()
      // Use a small delay to ensure content is rendered
      setTimeout(updateMaxTop, 100)
      window.addEventListener('resize', updateMaxTop)
      
      onBeforeUnmount(() => {
        window.removeEventListener('resize', updateMaxTop)
      })
    })
  }
})

const getParticleStyle = (index) => {
  const colors = ['#dc2626', '#b91c1c', '#f59e0b', '#d97706', '#ef4444', '#fbbf24']
  const color = colors[index % colors.length]
  const size = Math.random() * 2 + 1
  const left = Math.random() * 100
  const startTop = Math.random() * maxTop.value
  const animationDuration = Math.random() * 40 + 30
  const animationDelay = Math.random() * 15
  const opacity = Math.random() * 0.5 + 0.4
  const horizontalDrift = (Math.random() - 0.5) * 80
  
  return {
    left: `${left}%`,
    top: `${startTop}px`,
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    boxShadow: `0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}`,
    animationDuration: `${animationDuration}s`,
    animationDelay: `${animationDelay}s`,
    opacity: opacity,
    '--drift': `${horizontalDrift}px`
  }
}
</script>

<style scoped>
.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  border-radius: 50%;
  animation: float infinite ease-in-out;
  will-change: transform;
}

@keyframes float {
  0% {
    transform: translateY(100vh) translateX(0) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) translateX(calc(var(--drift) * 100px)) scale(1.5);
    opacity: 0;
  }
}

.particle:nth-child(odd) {
  --drift: 0.5;
  animation-name: float-right;
}

.particle:nth-child(even) {
  --drift: -0.5;
  animation-name: float-left;
}

@keyframes float-right {
  0% {
    transform: translateY(calc(100vh)) translateX(0) scale(0) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  50% {
    transform: translateY(calc(50vh)) translateX(calc(var(--drift) * 0.3)) scale(1) rotate(45deg);
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateY(calc(-100px)) translateX(var(--drift)) scale(1.2) rotate(90deg);
    opacity: 0;
  }
}

@keyframes float-left {
  0% {
    transform: translateY(calc(100vh)) translateX(0) scale(0) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  50% {
    transform: translateY(calc(50vh)) translateX(calc(var(--drift) * 0.3)) scale(1) rotate(-45deg);
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateY(calc(-100px)) translateX(var(--drift)) scale(1.2) rotate(-90deg);
    opacity: 0;
  }
}

.particle-0 {
  animation-timing-function: ease-in-out;
}

.particle-1 {
  animation-timing-function: ease-in;
}

.particle-2 {
  animation-timing-function: ease-out;
}

/* Ember glow */
.particle::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  border-radius: 50%;
  background: radial-gradient(circle, currentColor 0%, transparent 70%);
  transform: translate(-50%, -50%);
  opacity: 0.3;
  animation: pulse 4s infinite ease-in-out;
}

.particle::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 80%);
  transform: translate(-50%, -50%);
  opacity: 0.3;
  animation: pulse 3s infinite ease-in-out reverse;
}

@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.2;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.4;
  }
}
</style>

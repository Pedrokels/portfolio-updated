<script setup>
import { useTheme } from '../../composables/useTheme'
import Icon from './Icon.vue'

const { isDark, toggle } = useTheme()
</script>

<template>
  <button
    type="button"
    class="relative inline-flex size-9 items-center justify-center rounded text-muted transition-colors duration-fast ease-out hover:bg-surface-2 hover:text-foreground"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
    :aria-pressed="isDark"
    @click="toggle"
  >
    <!-- Both icons stay mounted and cross-fade with a quarter turn. -->
    <Icon
      name="sun"
      class="absolute transition-[opacity,transform] duration-normal ease-out"
      :class="isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'"
    />
    <Icon
      name="moon"
      class="absolute transition-[opacity,transform] duration-normal ease-out"
      :class="isDark ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'"
    />
  </button>
</template>

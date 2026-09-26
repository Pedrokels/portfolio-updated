<script setup>
import { useTheme } from '../../composables/useTheme'
import Icon from './Icon.vue'

const { preference, setTheme } = useTheme()

const options = [
  { value: 'light', icon: 'sun', label: 'Light theme' },
  { value: 'system', icon: 'monitor', label: 'Match system theme' },
  { value: 'dark', icon: 'moon', label: 'Dark theme' }
]
</script>

<template>
  <div
    role="radiogroup"
    aria-label="Theme"
    class="inline-flex items-center gap-px rounded-full border border-border p-0.5"
  >
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      role="radio"
      :aria-checked="preference === option.value"
      :aria-label="option.label"
      :title="option.label"
      class="inline-flex size-7 items-center justify-center rounded-full transition-colors duration-fast ease-out hover:text-foreground"
      :class="preference === option.value ? 'bg-surface-2 text-foreground' : 'text-muted'"
      @click="setTheme(option.value, $event)"
    >
      <Icon :name="option.icon" :size="14" />
    </button>
  </div>
</template>

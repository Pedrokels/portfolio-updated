<script setup>
import { computed } from 'vue'
import Icon from './Icon.vue'

// One button for the whole site. Renders a router-link, an anchor, or a <button>
// depending on `to` / `href`, so every CTA shares identical sizing and motion.
const props = defineProps({
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  variant: { type: String, default: 'primary' }, // primary | secondary
  icon: { type: String, default: 'arrow-right' }, // any Icon name, or '' for none
  external: { type: Boolean, default: false }
})

const tag = computed(() => (props.to ? 'router-link' : props.href ? 'a' : 'button'))

const attrs = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) {
    return props.external ? { href: props.href, target: '_blank', rel: 'noopener noreferrer' } : { href: props.href }
  }
  return { type: 'button' }
})

const variants = {
  primary: 'bg-foreground text-background hover:bg-foreground/85',
  secondary: 'border border-border text-foreground hover:border-border-strong hover:bg-surface-2'
}

// Diagonal arrows nudge up-right; everything else nudges right.
const iconMotion = computed(() =>
  props.icon === 'arrow-up-right'
    ? 'group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5'
    : 'group-hover/btn:translate-x-1'
)
</script>

<template>
  <component
    :is="tag"
    v-bind="attrs"
    class="group/btn inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md px-5 text-sm font-medium transition-colors duration-fast ease-out"
    :class="variants[variant]"
  >
    <slot />
    <Icon
      v-if="icon"
      :name="icon"
      class="transition-transform duration-normal ease-out"
      :class="iconMotion"
    />
    <span v-if="external" class="sr-only">(opens in a new tab)</span>
  </component>
</template>

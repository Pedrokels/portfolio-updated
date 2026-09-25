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

// Hover adds the page's identity accent (see .accent-fsd / .accent-video) as a hairline ring
// on primary, and as border + icon color on secondary. Outside a scoped page it stays monochrome.
const variants = {
  primary:
    'bg-foreground text-background hover:bg-foreground/85 hover:shadow-[0_0_0_1px_rgb(var(--accent)/0.6),0_0_24px_-6px_rgb(var(--accent)/var(--accent-glow))]',
  secondary: 'border border-border text-foreground hover:border-accent/50 hover:bg-surface-2'
}

const iconColor = computed(() => (props.variant === 'secondary' ? 'group-hover/btn:text-accent' : ''))

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
    class="group/btn inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md px-5 text-sm font-medium transition-[color,background-color,border-color,box-shadow] duration-fast ease-out"
    :class="variants[variant]"
  >
    <slot />
    <Icon
      v-if="icon"
      :name="icon"
      class="transition-[transform,color] duration-normal ease-out"
      :class="[iconMotion, iconColor]"
    />
    <span v-if="external" class="sr-only">(opens in a new tab)</span>
  </component>
</template>

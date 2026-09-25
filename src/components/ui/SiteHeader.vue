<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { scrollToSection, useActiveSection } from '../../composables/useSectionNav'
import ThemeToggle from './ThemeToggle.vue'
import Icon from './Icon.vue'

const props = defineProps({
  brand: { type: String, required: true },
  brandTo: { type: String, default: '/' },
  back: { type: Boolean, default: false }, // show "← Home"
  // [{ label, id }] — in-page section links
  links: { type: Array, default: () => [] }
})

const route = useRoute()

// On its own page the brand scrolls to the top instead of being a no-op link.
function onBrand (event) {
  if (route.path !== props.brandTo) return
  event.preventDefault()
  scrollToSection('top')
}

const active = useActiveSection(props.links.map((link) => link.id))
const scrolled = ref(false)
const menuOpen = ref(false)
const menuButton = ref(null)

const onScroll = () => {
  scrolled.value = window.scrollY > 8
}

const onKeydown = (event) => {
  if (event.key === 'Escape' && menuOpen.value) {
    menuOpen.value = false
    menuButton.value?.focus()
  }
}

function go (id) {
  menuOpen.value = false
  scrollToSection(id)
}

// Close the mobile menu if the viewport grows past the breakpoint.
const desktop = window.matchMedia('(min-width: 768px)')
const onBreakpoint = (event) => {
  if (event.matches) menuOpen.value = false
}

watch(menuOpen, (open) => {
  if (open) scrolled.value = true
  else onScroll()
})

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  desktop.addEventListener('change', onBreakpoint)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  desktop.removeEventListener('change', onBreakpoint)
})
</script>

<template>
  <header
    class="intro-nav fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-normal ease-out"
    :class="scrolled ? 'border-border bg-background/80 backdrop-blur-md' : 'border-transparent bg-transparent'"
  >
    <div class="container-site flex h-16 items-center justify-between gap-6">
      <div class="flex min-w-0 items-center gap-4">
        <!-- Back to the role chooser. The arrow eases left on hover. -->
        <router-link
          v-if="back"
          to="/"
          class="group/back -ml-2 inline-flex h-9 shrink-0 items-center gap-1.5 rounded px-2 text-sm text-muted transition-colors duration-fast ease-out hover:text-foreground"
          aria-label="Back to home"
        >
          <Icon name="arrow-left" class="transition-transform duration-normal ease-out group-hover/back:-translate-x-1" />
          <span class="hidden sm:inline" aria-hidden="true">Home</span>
        </router-link>
        <span v-if="back" class="h-4 w-px shrink-0 bg-border" aria-hidden="true" />

        <router-link
          :to="brandTo"
          @click="onBrand"
          class="truncate text-sm font-semibold tracking-tight text-foreground transition-opacity duration-fast hover:opacity-70"
        >
          {{ brand }}
        </router-link>
      </div>

      <div class="flex items-center gap-2 md:gap-6">
        <nav v-if="links.length" aria-label="Primary" class="hidden md:block">
          <ul class="flex items-center gap-8">
            <li v-for="link in links" :key="link.id">
              <a
                :href="`#${link.id}`"
                class="relative text-sm transition-colors duration-fast ease-out hover:text-foreground"
                :class="active === link.id ? 'text-foreground' : 'text-muted'"
                :aria-current="active === link.id ? 'location' : undefined"
                @click.prevent="go(link.id)"
              >
                {{ link.label }}
                <span
                  class="absolute -bottom-1.5 left-0 h-px w-full origin-left bg-foreground transition-transform duration-normal ease-out"
                  :class="active === link.id ? 'scale-x-100' : 'scale-x-0'"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
        </nav>

        <slot name="actions" />
        <ThemeToggle />

        <button
          v-if="links.length"
          ref="menuButton"
          type="button"
          class="inline-flex h-9 items-center gap-2 rounded px-2 text-sm text-foreground transition-colors duration-fast hover:bg-surface-2 md:hidden"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          @click="menuOpen = !menuOpen"
        >
          <span>{{ menuOpen ? 'Close' : 'Menu' }}</span>
          <Icon :name="menuOpen ? 'close' : 'menu'" />
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition-[opacity,transform] duration-fast ease-out"
      leave-active-class="transition-[opacity,transform] duration-fast ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <nav
        v-if="menuOpen"
        id="mobile-menu"
        aria-label="Primary"
        class="border-t border-border md:hidden"
      >
        <ul class="container-site py-4">
          <li v-for="(link, i) in links" :key="link.id">
            <a
              :href="`#${link.id}`"
              class="flex items-baseline gap-4 py-3 text-2xl font-medium tracking-tight text-foreground"
              @click.prevent="go(link.id)"
            >
              <span class="tabular text-label text-faint" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { site } from '../data/profile'
import SiteHeader from '../components/ui/SiteHeader.vue'
import Icon from '../components/ui/Icon.vue'

const paths = [
  {
    key: 'developer',
    to: '/developer',
    icon: 'code',
    title: 'Full Stack Developer',
    description: 'Web applications, information systems, and software solutions.'
  },
  {
    key: 'creator',
    to: '/creator',
    icon: 'clapper',
    title: 'Video Editor & Content Creator',
    description: 'Reels, edits, and short-form storytelling.'
  }
]

// Identity marks floating on the grid, one per role. Positions are % of the hero.
const marks = [
  { key: 'developer', icon: 'code', style: { top: '20%', right: '22%', '--float': '17s' } },
  { key: 'creator', icon: 'clapper', style: { top: '44%', right: '9%', '--float': '21s', '--float-delay': '-7s' } }
]

// One shared interaction for both roles: selecting a row turns its icon (in the row
// and on the grid) exactly once. A turn already in progress is never restarted,
// so hovering back and forth can't make it spin continuously.
const active = ref(null)
const spinning = reactive({ developer: false, creator: false })

function spin (key) {
  if (spinning[key]) return
  spinning[key] = true
}

function select (key) {
  active.value = key
  spin(key)
}

function release (key) {
  if (active.value === key) active.value = null
}

// Touch screens have no hover: play each turn once when the rows arrive,
// and again on tap (pointerdown fires before the navigation starts).
let timers = []
onMounted(() => {
  if (!window.matchMedia('(hover: none)').matches) return
  timers = paths.map((path, i) => setTimeout(() => spin(path.key), 900 + i * 250))
})
onBeforeUnmount(() => timers.forEach(clearTimeout))

const year = new Date().getFullYear()
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <SiteHeader :brand="site.name" />

    <main id="main" class="relative flex flex-1 flex-col justify-center overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div class="grid-drift intro-fade pointer-events-none" style="--d: 750ms" aria-hidden="true">
        <div class="grid-lines" />
      </div>

      <!-- Decorative: the two identities, resting on the grid. -->
      <div class="intro-fade pointer-events-none absolute inset-0 hidden md:block" style="--d: 900ms" aria-hidden="true">
        <span
          v-for="mark in marks"
          :key="mark.key"
          class="mark-float absolute"
          :style="mark.style"
        >
          <span
            class="block transition-[color,scale] duration-slow ease-out"
            :class="[
              active === mark.key ? '[scale:1.1] text-muted' : 'text-faint',
              { 'spin-once': spinning[mark.key] }
            ]"
            @animationend="spinning[mark.key] = false"
          >
            <Icon :name="mark.icon" :size="56" :stroke-width="1" />
          </span>
        </span>
      </div>

      <div class="container-site relative">
        <p class="intro eyebrow flex flex-wrap items-center gap-x-3 gap-y-1" style="--d: 150ms">
          <span>Portfolio</span>
          <span class="text-faint" aria-hidden="true">/</span>
          <span>Also known as {{ site.alias }}</span>
        </p>

        <h1 class="intro mt-6 text-display font-semibold text-foreground" style="--d: 250ms">
          <span class="block">Peter John</span>
          <span class="block">Gerero</span>
        </h1>

        <p class="intro mt-8 max-w-prose text-lead md:mt-10" style="--d: 400ms">
          <span class="text-foreground">Two crafts, one person.</span>
          <span class="text-muted"> Pick the one that fits what you need.</span>
        </p>

        <nav aria-label="Portfolios" class="intro mt-16 md:mt-20" style="--d: 520ms">
          <ul class="border-b border-border">
            <li v-for="(path, i) in paths" :key="path.to" class="border-t border-border">
              <router-link
                :to="path.to"
                class="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-6 transition-colors duration-normal ease-out hover:bg-surface sm:gap-8 md:py-8 lg:grid-cols-12"
                @mouseenter="select(path.key)"
                @mouseleave="release(path.key)"
                @focus="select(path.key)"
                @blur="release(path.key)"
                @pointerdown="spin(path.key)"
              >
                <span class="tabular text-label text-faint lg:col-span-1 lg:pl-4" aria-hidden="true">
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
                <span class="flex items-start gap-4 sm:gap-6 lg:col-span-10">
                  <span
                    class="mt-0.5 shrink-0 transition-[color,scale] duration-normal ease-out"
                    :class="[
                      active === path.key ? '[scale:1.1] text-foreground' : 'text-muted',
                      { 'spin-once': spinning[path.key] }
                    ]"
                    aria-hidden="true"
                    @animationend="spinning[path.key] = false"
                  >
                    <Icon :name="path.icon" :size="24" />
                  </span>
                  <span>
                    <span class="block text-heading font-semibold text-foreground transition-transform duration-normal ease-out group-hover:translate-x-1">
                      {{ path.title }}
                    </span>
                    <span class="mt-1 block text-sm text-muted">{{ path.description }}</span>
                  </span>
                </span>
                <span class="flex justify-end lg:col-span-1 lg:pr-4">
                  <Icon name="arrow-right" :size="20" class="text-muted transition-[transform,color] duration-normal ease-out group-hover:translate-x-1 group-hover:text-foreground" />
                </span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </main>

    <footer class="intro-fade border-t border-border" style="--d: 620ms">
      <div class="container-site flex flex-col gap-2 py-6 text-sm text-muted sm:flex-row sm:justify-between">
        <p class="tabular">© {{ year }} {{ site.name }}</p>
        <a :href="`mailto:${site.email}`" class="link link-muted self-start">{{ site.email }}</a>
      </div>
    </footer>
  </div>
</template>

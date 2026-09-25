<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import Icon from '../ui/Icon.vue'

const props = defineProps({
  reel: { type: Object, required: true }, // { url, poster, views, reactions, shares, featured?, embeddable? }
  index: { type: Number, required: true }
})

const WIDTH = 340
const HEIGHT = 600

const src = computed(
  () =>
    `https://www.facebook.com/plugins/video.php?height=${HEIGHT}&href=${encodeURIComponent(props.reel.url)}&show_text=false&width=${WIDTH}&t=0`
)

// On real mobile browsers (iOS Safari/Chrome) Facebook's plugin often renders a
// black box because WebKit blocks the third-party cookies it needs. Desktop
// emulation doesn't reproduce this, so small screens get a tap-to-open card instead.
const small = ref(false)
const query = window.matchMedia('(max-width: 768px)')
const update = () => (small.value = query.matches)

onMounted(() => {
  update()
  query.addEventListener('change', update)
})
onBeforeUnmount(() => query.removeEventListener('change', update))

// Facebook blocks some reels from embedding (see profile.js); those always link out.
const blocked = computed(() => props.reel.embeddable === false)
const linkOnly = computed(() => blocked.value || small.value)

const stats = computed(() => [
  { label: 'Views', value: props.reel.views },
  { label: 'Reactions', value: props.reel.reactions },
  { label: 'Shares', value: props.reel.shares }
])

const label = computed(() => `Reel ${String(props.index + 1).padStart(2, '0')}`)
</script>

<template>
  <figure class="group">
    <div
      class="relative mx-auto aspect-[340/600] w-full max-w-[340px] overflow-hidden rounded-md border border-border bg-surface-2 transition-colors duration-normal ease-out group-hover:border-border-strong"
    >
      <!-- The reel's own thumbnail: the link-out face, and a backdrop while the player loads. -->
      <img
        v-if="reel.poster"
        :src="reel.poster"
        :alt="linkOnly ? `${label} thumbnail` : ''"
        width="680"
        height="1209"
        loading="lazy"
        decoding="async"
        class="shot absolute inset-0 size-full object-cover transition-[transform,filter] duration-slow ease-out group-hover:scale-[1.03]"
      >

      <iframe
        v-if="!linkOnly"
        :src="src"
        :title="`${label} — Facebook video`"
        :width="WIDTH"
        :height="HEIGHT"
        loading="lazy"
        scrolling="no"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        class="absolute inset-0 h-[120%] w-full border-0"
      />
      <a
        v-else
        :href="reel.url"
        target="_blank"
        rel="noopener noreferrer"
        class="absolute inset-0 flex items-end justify-center p-4"
      >
        <span class="inline-flex items-center gap-2 rounded bg-background/90 px-3 py-2 text-sm font-medium text-foreground">
          <Icon name="play" :size="14" />
          Watch on Facebook
          <Icon name="arrow-up-right" :size="14" class="transition-[transform,color] duration-normal ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </span>
        <span class="sr-only">{{ label }} (opens in a new tab)</span>
      </a>

      <span
        v-if="reel.featured"
        class="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-sm bg-background/90 px-2 py-1 text-label font-medium uppercase text-foreground"
      >
        <span class="size-1.5 rounded-full bg-accent" aria-hidden="true" />
        Top reel
      </span>
    </div>

    <figcaption class="mx-auto mt-4 flex max-w-[340px] items-start justify-between gap-4">
      <dl class="grid flex-1 grid-cols-3 gap-4">
        <div v-for="stat in stats" :key="stat.label">
          <dt class="text-label uppercase text-muted">{{ stat.label }}</dt>
          <dd class="tabular mt-1 text-sm font-medium text-foreground">{{ stat.value ?? '—' }}</dd>
        </div>
      </dl>
      <a
        :href="reel.url"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex size-9 shrink-0 items-center justify-center rounded text-muted transition-colors duration-fast hover:bg-surface-2 hover:text-accent"
        :aria-label="`Open ${label} on Facebook (opens in a new tab)`"
      >
        <Icon name="arrow-up-right" />
      </a>
    </figcaption>
    <p v-if="blocked" class="mx-auto mt-3 max-w-[340px] text-sm text-muted">
      Facebook doesn’t allow this reel to be embedded, so it opens there.
    </p>
  </figure>
</template>

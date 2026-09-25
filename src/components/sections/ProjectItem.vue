<script setup>
import DotList from '../ui/DotList.vue'
import { computed, ref } from 'vue'
import Icon from '../ui/Icon.vue'
import GalleryDialog from '../ui/GalleryDialog.vue'

const props = defineProps({
  project: { type: Object, required: true },
  index: { type: Number, required: true },
  reversed: { type: Boolean, default: false }
})

const number = computed(() => String(props.index + 1).padStart(2, '0'))
const hasImages = computed(() => props.project.images.length > 0)
const gallery = ref(null)
</script>

<template>
  <article
    class="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
    :aria-labelledby="`project-${project.slug}`"
  >
    <!-- Text -->
    <div v-reveal class="lg:col-span-5" :class="reversed ? 'lg:order-2 lg:col-start-8' : ''">
      <p class="eyebrow flex items-center gap-3">
        <span class="tabular text-accent" aria-hidden="true">{{ number }}</span>
        <span>{{ project.kind }}</span>
      </p>

      <h3 :id="`project-${project.slug}`" class="mt-4 text-heading font-semibold text-foreground">
        {{ project.name }}
      </h3>

      <p class="mt-4 text-base leading-7 text-foreground">{{ project.summary }}</p>
      <p class="mt-3 text-sm leading-6 text-muted">{{ project.detail }}</p>

      <DotList :items="project.tags" class="mt-6 text-sm text-muted" />

      <div class="mt-8">
        <button
          v-if="hasImages"
          type="button"
          class="group/cta inline-flex items-center gap-2 text-sm font-medium text-foreground"
          @click="gallery.open()"
        >
          <span class="link">View screenshots</span>
          <Icon name="arrow-right" class="transition-[transform,color] duration-normal ease-out group-hover/cta:translate-x-1 group-hover/cta:text-accent group-hover:translate-x-1" />
        </button>
        <p v-else class="text-sm text-muted">
          {{ project.role ? `${project.role} · ` : '' }}No public screenshots
        </p>
      </div>
    </div>

    <!-- Preview -->
    <div v-reveal="80" class="lg:col-span-7" :class="reversed ? 'lg:order-1 lg:col-start-1' : ''">
      <button
        v-if="hasImages"
        type="button"
        class="group/preview relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-md border border-border bg-surface p-6 transition-colors duration-normal ease-out group-hover:border-border-strong md:p-10"
        :aria-label="`Open ${project.name} screenshots`"
        @click="gallery.open()"
      >
        <!-- Screenshots sit inset and uncropped; the second cross-fades in on hover. -->
        <span class="relative block w-full overflow-hidden rounded-sm border border-border bg-background transition-transform duration-slow ease-out group-hover:-translate-y-1 group-hover:scale-[1.02]">
          <img
            :src="project.images[0].src"
            :alt="project.images[0].alt"
            width="1919"
            height="945"
            loading="lazy"
            decoding="async"
            class="shot block h-auto w-full"
          >
          <img
            v-if="project.images[1]"
            :src="project.images[1].src"
            alt=""
            loading="lazy"
            decoding="async"
            class="shot absolute inset-0 size-full object-cover object-top opacity-0 transition-[opacity,filter] duration-slow ease-out [@media(hover:hover)]:group-hover:opacity-100"
          >
        </span>
        <span class="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded bg-background/90 px-2.5 py-1.5 text-label font-medium text-foreground opacity-0 transition-opacity duration-normal ease-out group-hover:opacity-100 group-focus-visible/preview:opacity-100">
          <Icon name="expand" :size="12" />
          Expand
        </span>
      </button>

      <!-- No screenshots: a quiet placeholder that still holds the layout's rhythm. -->
      <div
        v-else
        class="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-md border border-border bg-surface transition-colors duration-normal ease-out group-hover:border-border-strong"
      >
        <div class="grid-backdrop absolute inset-0 opacity-70 [mask-image:none] [-webkit-mask-image:none]" aria-hidden="true" />
        <div class="relative text-center">
          <p class="text-heading font-semibold tracking-tight text-foreground">{{ project.name.split(' ')[0] }}</p>
          <p class="mt-2 text-sm text-muted">{{ project.kind }}</p>
        </div>
      </div>
    </div>

    <GalleryDialog v-if="hasImages" ref="gallery" :title="project.name" :images="project.images" />
  </article>
</template>

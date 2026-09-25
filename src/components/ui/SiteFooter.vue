<script setup>
import { site } from '../../data/profile'
import { scrollToSection } from '../../composables/useSectionNav'
import Icon from './Icon.vue'

defineProps({
  title: { type: String, default: site.name },
  subtitle: { type: String, default: site.role },
  links: { type: Array, default: () => [] } // [{ label, href }]
})

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border">
    <div class="container-site grid gap-12 py-12 md:py-16 lg:grid-cols-12 lg:gap-8">
      <div class="lg:col-span-3">
        <p class="text-sm font-semibold tracking-tight text-foreground">{{ title }}</p>
        <p class="mt-1 text-sm text-muted">{{ subtitle }}</p>
      </div>

      <nav aria-label="Social" class="lg:col-span-6">
        <ul class="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <li v-for="link in links" :key="link.label">
            <a :href="link.href" target="_blank" rel="noopener noreferrer" class="link link-muted">
              {{ link.label }}<span class="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a :href="`mailto:${site.email}`" class="link link-muted">Email</a>
          </li>
        </ul>
      </nav>

      <div class="flex items-start justify-between gap-6 text-sm text-muted lg:col-span-3 lg:flex-col lg:items-end">
        <p class="tabular">© {{ year }} {{ site.name }}</p>
        <a href="#top" class="link link-muted" @click.prevent="scrollToSection('top')">
          Back to top
          <Icon name="arrow-up" :size="14" />
        </a>
      </div>
    </div>
  </footer>
</template>

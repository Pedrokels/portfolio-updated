<script setup>
import Icon from './Icon.vue'

defineProps({
  resume: { type: Object, required: true } // from resumeLink()
})
</script>

<template>
  <a
    v-reveal
    :href="resume.href"
    v-bind="resume.attrs"
    class="group flex items-center justify-between gap-6 rounded-md border border-border p-6 transition-colors duration-normal ease-out hover:border-accent/40 hover:bg-surface md:p-8"
  >
    <span>
      <span class="block text-heading font-semibold text-foreground">Want the complete background?</span>
      <span class="mt-2 block text-sm text-muted">
        {{ resume.available ? 'Experience, projects, and skills in one document.' : 'I’ll send my latest résumé by email.' }}
      </span>
    </span>
    <span class="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground">
      <span class="hidden sm:inline">{{ resume.label }}</span>
      <Icon name="arrow-right" :size="20" class="transition-[transform,color] duration-normal ease-out group-hover:translate-x-1 group-hover:text-accent" />
    </span>
    <span v-if="resume.available" class="sr-only">(opens in a new tab)</span>
  </a>
</template>

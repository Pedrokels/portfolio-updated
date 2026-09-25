<script setup>
import { site } from '../../data/profile'
import AppButton from './AppButton.vue'

defineProps({
  number: { type: String, required: true },
  title: { type: String, default: 'Let’s work together.' },
  body: { type: String, required: true }
})
</script>

<template>
  <section id="contact" aria-labelledby="contact-title" class="py-24 outline-none md:py-32">
    <div class="container-site">
      <div v-reveal class="grid gap-6 border-t border-border pt-6 lg:grid-cols-12 lg:gap-8">
        <p class="eyebrow flex items-center gap-3 self-start lg:col-span-3 lg:pt-2">
          <span class="tabular text-accent" aria-hidden="true">{{ number }}</span>
          <span>Contact</span>
        </p>

        <div class="lg:col-span-9">
          <h2 id="contact-title" class="max-w-[14ch] text-display font-semibold text-foreground">
            {{ title }}
          </h2>
          <p class="mt-8 max-w-prose text-lead text-muted">{{ body }}</p>

          <div class="mt-10 flex flex-wrap gap-3">
            <AppButton :href="`mailto:${site.email}`">Email me</AppButton>
            <AppButton :href="site.whatsapp" variant="secondary" icon="arrow-up-right" external>
              WhatsApp me
            </AppButton>
          </div>

          <p class="mt-8 text-sm text-muted">
            Or write directly to
            <a :href="`mailto:${site.email}`" class="link">{{ site.email }}</a>
          </p>

          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Every content section shares this frame: hairline rule, numbered label in the
// left column, title in the right nine columns, then the body.
defineProps({
  id: { type: String, required: true },
  number: { type: String, required: true },
  label: { type: String, required: true },
  title: { type: String, default: '' }
})
</script>

<template>
  <section :id="id" :aria-labelledby="`${id}-title`" class="py-24 outline-none md:py-32">
    <div class="container-site">
      <header v-reveal class="grid gap-6 border-t border-border pt-6 lg:grid-cols-12 lg:gap-8">
        <p class="eyebrow flex items-center gap-3 self-start lg:col-span-3 lg:pt-2">
          <span class="tabular text-faint" aria-hidden="true">{{ number }}</span>
          <span>{{ label }}</span>
        </p>

        <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:col-span-9">
          <h2 :id="`${id}-title`" class="max-w-[18ch] text-title font-semibold text-foreground">
            <slot name="title">{{ title }}</slot>
          </h2>
          <div v-if="$slots.aside" class="shrink-0">
            <slot name="aside" />
          </div>
        </div>
      </header>

      <div class="mt-12 md:mt-16">
        <slot />
      </div>
    </div>
  </section>
</template>

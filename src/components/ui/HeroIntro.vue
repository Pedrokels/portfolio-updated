<script setup>
// Page hero with a staggered entrance:
// label → name → lead → actions → metadata → grid backdrop → identity illustration.
// Timings share one scale so every page opens the same way.
import DotList from './DotList.vue'
import IdentityMark from './IdentityMark.vue'

defineProps({
  labels: { type: Array, default: () => [] }, // short metadata above the name
  nameLines: { type: Array, required: true }, // the name, split for editorial line breaks
  lead: { type: String, required: true }, // first sentence, full contrast
  sub: { type: String, default: '' }, // continuation, muted
  metaLabel: { type: String, default: '' },
  meta: { type: Array, default: () => [] }, // short strings, joined with middots
  identity: { type: String, default: '' } // 'developer' | 'creator' — which side of the portfolio this is
})
</script>

<template>
  <section class="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48" aria-labelledby="hero-title">
    <!-- Same drifting grid as the homepage. -->
    <div class="grid-drift intro-fade pointer-events-none" style="--d: 750ms" aria-hidden="true">
      <div class="grid-lines" />
    </div>

    <div class="container-site relative">
      <!-- Desktop: the identity illustration sits in the open grid to the right of the text. -->
      <div
        v-if="identity"
        class="intro-fade pointer-events-none absolute right-12 top-16 hidden w-60 lg:block xl:w-[19rem]"
        style="--d: 900ms"
        aria-hidden="true"
      >
        <div class="identity-float">
          <IdentityMark :kind="identity" />
        </div>
      </div>

      <p
        v-if="labels.length"
        class="intro eyebrow flex flex-wrap items-center gap-x-3 gap-y-1"
        :class="{ 'lg:max-w-[calc(100%-18rem)] xl:max-w-[calc(100%-22rem)]': identity }"
        style="--d: 150ms"
      >
        <template v-for="(label, i) in labels" :key="label">
          <span v-if="i" class="text-faint" aria-hidden="true">/</span>
          <span>{{ label }}</span>
        </template>
      </p>

      <div class="relative mt-6">
        <h1 id="hero-title" class="intro text-display font-semibold text-foreground" style="--d: 250ms">
          <span v-for="line in nameLines" :key="line" class="block">{{ line }}</span>
        </h1>

        <!-- Phone / tablet: a smaller copy beside the name, where the line is short enough to leave room. -->
        <div
          v-if="identity"
          class="intro-fade pointer-events-none absolute right-0 top-1/2 w-16 -translate-y-1/2 sm:w-24 md:w-32 lg:hidden"
          style="--d: 900ms"
          aria-hidden="true"
        >
          <div class="identity-float">
            <IdentityMark :kind="identity" />
          </div>
        </div>
      </div>

      <p class="intro mt-8 max-w-prose text-lead md:mt-10" style="--d: 400ms">
        <span class="text-foreground">{{ lead }}</span>
        <template v-if="sub">
          {{ ' ' }}<span class="text-muted">{{ sub }}</span>
        </template>
      </p>

      <div class="intro mt-10 flex flex-wrap gap-3" style="--d: 520ms">
        <slot name="actions" />
      </div>

      <div
        v-if="meta.length"
        class="intro mt-20 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:gap-8 md:mt-24"
        style="--d: 620ms"
      >
        <p v-if="metaLabel" class="eyebrow sm:w-48 sm:shrink-0">{{ metaLabel }}</p>
        <DotList :items="meta" class="text-sm text-foreground" />
      </div>
    </div>
  </section>
</template>

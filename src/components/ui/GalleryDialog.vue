<script setup>
import { computed, ref, watch } from 'vue'
import Icon from './Icon.vue'

// Native <dialog>: focus trapping, Escape and inert background come for free.
const props = defineProps({
  title: { type: String, required: true },
  images: { type: Array, required: true } // [{ src, alt }]
})

const dialog = ref(null)
const index = ref(0)
const current = computed(() => props.images[index.value])

function open (start = 0) {
  index.value = start
  dialog.value?.showModal()
}

function close () {
  dialog.value?.close()
}

function step (delta) {
  const count = props.images.length
  index.value = (index.value + delta + count) % count
}

function onKeydown (event) {
  if (props.images.length < 2) return
  if (event.key === 'ArrowRight') step(1)
  if (event.key === 'ArrowLeft') step(-1)
}

// Clicking the backdrop (the dialog element itself) closes it.
function onClick (event) {
  if (event.target === dialog.value) close()
}

watch(() => props.images, () => (index.value = 0))

defineExpose({ open })
</script>

<template>
  <dialog
    ref="dialog"
    class="gallery m-auto w-[min(72rem,calc(100vw-2rem))] max-w-none rounded-md border border-border bg-background p-0 text-foreground"
    :aria-label="`${title} screenshots`"
    @keydown="onKeydown"
    @click="onClick"
  >
    <div class="flex items-center justify-between gap-4 border-b border-border px-4 py-3 md:px-6">
      <p class="truncate text-sm font-medium">{{ title }}</p>
      <div class="flex items-center gap-1">
        <template v-if="images.length > 1">
          <button type="button" class="inline-flex size-9 items-center justify-center rounded text-muted transition-colors duration-fast hover:bg-surface-2 hover:text-foreground" aria-label="Previous screenshot" @click="step(-1)">
            <Icon name="arrow-left" />
          </button>
          <span class="tabular w-12 text-center text-label text-muted" aria-live="polite">
            {{ index + 1 }} / {{ images.length }}
          </span>
          <button type="button" class="inline-flex size-9 items-center justify-center rounded text-muted transition-colors duration-fast hover:bg-surface-2 hover:text-foreground" aria-label="Next screenshot" @click="step(1)">
            <Icon name="arrow-right" />
          </button>
        </template>
        <button type="button" class="ml-2 inline-flex size-9 items-center justify-center rounded text-muted transition-colors duration-fast hover:bg-surface-2 hover:text-foreground" aria-label="Close" @click="close">
          <Icon name="close" />
        </button>
      </div>
    </div>

    <div class="bg-surface p-2 md:p-4">
      <img
        v-if="current"
        :key="current.src"
        :src="current.src"
        :alt="current.alt"
        class="gallery-image mx-auto max-h-[75vh] w-full rounded object-contain"
      >
    </div>
  </dialog>
</template>

<style scoped>
.gallery::backdrop {
  background: rgb(0 0 0 / 0.6);
}

.gallery[open] {
  animation: intro var(--duration-normal) var(--ease-out);
}

.gallery-image {
  animation: fade-in var(--duration-normal) var(--ease-out);
}
</style>

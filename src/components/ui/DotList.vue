<script setup>
// Inline list separated by middots. Every item carries a leading dot and the list is
// shifted left inside a clipping wrapper, so the dot at the start of each wrapped
// line is hidden — no separators left dangling at line ends.
defineProps({
  items: { type: Array, required: true }
})
</script>

<template>
  <div class="overflow-hidden">
    <ul class="-ml-6 flex flex-wrap gap-y-1">
      <li
        v-for="item in items"
        :key="item"
        class="relative pl-6 before:absolute before:left-2.5 before:text-faint before:content-['·'_/_'']"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

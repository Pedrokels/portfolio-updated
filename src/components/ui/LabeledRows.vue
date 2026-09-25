<script setup>
import DotList from './DotList.vue'
// Categorised text rows (tech stack, tools, gear). Plain typography, no logos or pills.
defineProps({
  rows: { type: Array, required: true } // [{ group, items: [] }]
})
</script>

<template>
  <dl class="border-b border-border">
    <div
      v-for="(row, i) in rows"
      :key="row.group"
      v-reveal="i * 60"
      class="grid gap-2 border-t border-border py-5 sm:grid-cols-[12rem_1fr] sm:gap-8"
    >
      <dt class="text-sm text-muted">{{ row.group }}</dt>
      <dd class="text-base text-foreground"><DotList :items="row.items" /></dd>
    </div>
  </dl>
</template>

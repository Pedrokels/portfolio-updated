<script setup>
// Period | role, organisation, detail — the career timeline style shared by both portfolios.
defineProps({
  items: { type: Array, required: true } // [{ period, role, org, note?, description? }]
})
</script>

<template>
  <ol class="border-b border-border">
    <li
      v-for="(item, i) in items"
      :key="item.role + item.period"
      v-reveal="i * 60"
      class="grid gap-2 border-t border-border py-8 sm:grid-cols-[12rem_1fr] sm:gap-8"
    >
      <p class="tabular text-sm text-muted">{{ item.period }}</p>
      <div>
        <h3 class="text-base font-medium text-foreground">{{ item.role }}</h3>
        <p class="mt-1 text-sm text-muted">{{ item.org }}</p>
        <p v-if="item.note" class="mt-1 text-sm text-muted">{{ item.note }}</p>
        <p v-if="item.description" class="mt-4 max-w-prose text-sm leading-6 text-muted">{{ item.description }}</p>
      </div>
    </li>
  </ol>
</template>

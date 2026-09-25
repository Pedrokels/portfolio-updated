<script setup>
// Page identity illustration: one figure — a person behind a laptop — in two variations.
//   developer → </> on the lid, a code panel floating beside
//   creator   → ▶ on the lid, an edit timeline floating beside
// Line art only: main strokes in foreground, details in muted, surfaces filled with the
// page background so the drifting grid passes *behind* the laptop rather than through it.
defineProps({
  kind: { type: String, required: true } // 'developer' | 'creator'
})
</script>

<template>
  <svg
    viewBox="0 0 240 220"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="block h-auto w-full overflow-visible text-foreground"
    aria-hidden="true"
    focusable="false"
  >
    <!-- Floating panel: drifts on its own, slightly out of phase with the figure. -->
    <g class="identity-float-panel">
      <rect x="160" y="14" width="68" height="50" rx="3" class="fill-background" vector-effect="non-scaling-stroke" />
      <path d="M160 24 H228" class="text-muted" vector-effect="non-scaling-stroke" />
      <g class="text-muted">
        <template v-if="kind === 'developer'">
          <path d="M168 33 H190 M174 41 H206 M174 49 H198 M168 57 H182" vector-effect="non-scaling-stroke" />
        </template>
        <template v-else>
          <path d="M168 32 H188 V39 H168 Z M192 32 H220 V39 H192 Z M168 45 H200 V52 H168 Z M204 45 H220 V52 H204 Z" vector-effect="non-scaling-stroke" />
        </template>
      </g>
      <path v-if="kind === 'creator'" d="M196 28 V58" vector-effect="non-scaling-stroke" />
    </g>

    <!-- Person -->
    <circle cx="120" cy="58" r="20" vector-effect="non-scaling-stroke" />
    <path d="M74 146 C74 112 95 94 120 94 C145 94 166 112 166 146" vector-effect="non-scaling-stroke" />

    <!-- Laptop, lid facing the viewer -->
    <rect x="70" y="110" width="100" height="66" rx="4" class="fill-background" vector-effect="non-scaling-stroke" />
    <path d="M58 176 H182 L190 186 H50 Z" class="fill-background" vector-effect="non-scaling-stroke" />
    <g class="text-muted">
      <path v-if="kind === 'developer'" d="M110 135 L102 143 L110 151 M130 135 L138 143 L130 151 M123 132 L117 154" vector-effect="non-scaling-stroke" />
      <path v-else d="M113 132 V154 L131 143 Z" vector-effect="non-scaling-stroke" />
    </g>

    <!-- Desk -->
    <path d="M20 200 H220" class="text-muted" vector-effect="non-scaling-stroke" />
  </svg>
</template>

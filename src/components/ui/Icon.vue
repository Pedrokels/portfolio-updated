<script setup>
// The site's only icon set: 24px grid, 1.5px stroke, round caps. 16px unless sized otherwise.
defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 16 },
  strokeWidth: { type: Number, default: 1.5 }
})

const paths = {
  'arrow-right': 'M5 12h14M13 6l6 6-6 6',
  'arrow-left': 'M19 12H5M11 18l-6-6 6-6',
  'arrow-up-right': 'M7 17 17 7M8 7h9v9',
  'arrow-up': 'M12 19V5M6 11l6-6 6 6',
  play: 'M8 5.5v13l10-6.5-10-6.5Z',
  // Identity marks: developer (code) and video editor (clapperboard).
  code: 'M17 16l4-4-4-4M7 8l-4 4 4 4M14.5 4l-5 16',
  clapper: 'M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8ZM20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3L20.2 6ZM6.2 5.3l3.1 3.9M12.4 3.4l3.1 4',
  menu: 'M4 8h16M4 16h16',
  close: 'M6 6l12 12M18 6 6 18',
  expand: 'M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7',
  monitor: 'M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1ZM8 20h8M12 16v4',
  moon:'M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5a8.5 8.5 0 1 0 10.6 10.6Z',
  sun: 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4'
}
</script>

<template>
  <svg
    class="shrink-0"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path :d="paths[name]" />
  </svg>
</template>

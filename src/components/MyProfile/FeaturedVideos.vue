<script setup>
import VideoEmbedCard from '../VideoEmbedCard.vue';
const props = defineProps({ reels: { type: Array, default: () => [] } });
</script>

<template>
  <div class="rounded-[24px] border border-neutral-800 bg-neutral-900 p-4 transition-colors duration-300 sm:p-5">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 text-white/90 shrink-0">
          <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"/>
        </svg>
        <h3 class="text-base font-semibold text-white">Featured Reels & Videos</h3>
      </div>
      <a class="text-sm text-zinc-400 hover:underline" href="#">Check All →</a>
    </div>

    <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <VideoEmbedCard v-for="(r, idx) in props.reels" :key="idx" :type="r.type" :url="r.url" />
    </div>
  </div>
</template>

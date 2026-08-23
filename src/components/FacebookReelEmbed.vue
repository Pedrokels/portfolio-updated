<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  reelUrl: {
    type: String,
    required: true
  },
  highlight: {
    type: Boolean,
    default: false
  },
  width: {
    type: [Number, String],
    default: null
  },
  height: {
    type: [Number, String],
    default: null
  },
  fill: {
    type: Boolean,
    default: true
  },
  // On real mobile browsers (iOS Safari/Chrome), Facebook's video plugin often
  // fails silently (renders black) because iOS blocks the third-party cookies
  // the plugin needs. Rather than show a broken black box, we show a tap-to-open
  // card instead on small screens. Set this to false if you want to always try
  // the embed regardless of screen size.
  mobileFallback: {
    type: Boolean,
    default: true
  }
});

// compute sizes: if explicit width/height provided use them; otherwise use defaults
const defaultWidth = computed(() => (props.width ? Number(props.width) : props.highlight ? 340 : 340));
const defaultHeight = computed(() => (props.height ? Number(props.height) : props.highlight ? 600 : 600));

const iframeSrc = computed(() => {
  const w = defaultWidth.value;
  const h = defaultHeight.value;
  return `https://www.facebook.com/plugins/video.php?height=${h}&href=${encodeURIComponent(props.reelUrl)}&show_text=false&width=${w}&t=0`;
});

const wrapperClasses = computed(() => {
  return [
    'relative overflow-hidden rounded-3xl border bg-white p-1 shadow-sm transition duration-300 dark:bg-zinc-950',
    props.highlight ? 'border-white/90 shadow-[0_0_0_4px_rgba(255,255,255,0.12)] dark:border-white/20 dark:shadow-[0_0_0_4px_rgba(255,255,255,0.08)]' : 'border-zinc-300/80 dark:border-zinc-800'
  ].join(' ');
});

// Expose a wrapper style with a fixed portrait aspect ratio so the card always matches the mobile shape
const wrapperStyle = computed(() => {
  return {
    maxWidth: defaultWidth.value + 'px',
    aspectRatio: `${defaultWidth.value}/${defaultHeight.value}`,
    width: '100%',
    minWidth: 0
  };
});

const iframeStyle = computed(() => {
  return {
    position: 'absolute',
    top: '0%',
    left: '0',
    width: '100%',
    height: '120%',
    border: 'none'
  };
});

// --- Mobile detection ---
// iOS Safari/Chrome (WebKit) block third-party cookies by default (Intelligent
// Tracking Prevention). Facebook's embed plugin needs those cookies to actually
// render the video, so on a real iPhone the iframe silently renders black
// instead of erroring. Desktop browsers and even desktop DevTools "mobile
// emulation" don't hit this because they're still running the desktop cookie
// policy under the hood. We can't fix Facebook's plugin, so on small screens
// we skip the iframe entirely and link straight to the real Facebook app/site.
const isSmallScreen = ref(false);
let mediaQuery = null;

function updateIsSmallScreen() {
  isSmallScreen.value = window.matchMedia('(max-width: 768px)').matches;
}

onMounted(() => {
  updateIsSmallScreen();
  mediaQuery = window.matchMedia('(max-width: 768px)');
  mediaQuery.addEventListener('change', updateIsSmallScreen);
});

onUnmounted(() => {
  if (mediaQuery) mediaQuery.removeEventListener('change', updateIsSmallScreen);
});

const showLinkFallback = computed(() => props.mobileFallback && isSmallScreen.value);
</script>

<template>
  <div :class="wrapperClasses" :style="wrapperStyle">
    <iframe
      v-if="!showLinkFallback"
      :src="iframeSrc"
      :width="defaultWidth"
      :height="defaultHeight"
      scrolling="no"
      frameborder="0"
      allowfullscreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      :style="iframeStyle"
      class="rounded-3xl bg-black"
    ></iframe>

    <a
      v-else
      :href="reelUrl"
      target="_blank"
      rel="noopener"
      class="absolute inset-0 flex items-center justify-center rounded-3xl bg-black"
    >
      <div class="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7-7 7V5z"/>
        </svg>
        Open on Facebook
      </div>
    </a>
  </div>
</template>
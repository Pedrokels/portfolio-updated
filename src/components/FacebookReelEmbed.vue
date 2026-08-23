<script setup>
import { computed } from 'vue';

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
</script>

<template>
  <div :class="wrapperClasses" :style="wrapperStyle">
    <iframe
      :src="iframeSrc"
      :width="defaultWidth"
      :height="defaultHeight"
      style="border:none"
      scrolling="no"
      frameborder="0"
      allowfullscreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      :style="iframeStyle"
      class="rounded-3xl bg-black"
    ></iframe>
  </div>
</template>
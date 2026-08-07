<script setup>
import { computed } from 'vue';
defineProps({ type: { type: String, required: true }, url: { type: String, required: true } });
</script>

<template>
  <div class="bg-neutral-900 rounded-2xl border border-neutral-800 p-4">
    <div v-if="$props.type === 'facebook'" class="flex justify-center overflow-hidden max-w-full">
      <!-- Facebook embed; keep iframe dimensions but responsive wrapper -->
      <iframe
        :src="`https://www.facebook.com/plugins/video.php?height=476&href=${encodeURIComponent($props.url)}&show_text=true&width=267&t=0`"
        width="267"
        height="591"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      <noscript class="text-sm text-zinc-400 mt-2">If this Facebook embed doesn't load, <a :href="$props.url" target="_blank" class="underline">view on Facebook</a>.</noscript>
    </div>

    <div v-if="$props.type === 'youtube'" class="aspect-video w-full">
      <iframe
        class="w-full h-full rounded-xl"
        :src="(function(){
          try {
            // convert watch?v=... to /embed/... optionally preserve t param
            const u = new URL($props.url);
            let id = u.searchParams.get('v');
            let start = u.searchParams.get('t') || u.searchParams.get('start');
            if (!id && u.pathname.includes('embed')) {
              id = u.pathname.split('/').pop();
            }
            if (!id && u.hostname.includes('youtu.be')) {
              id = u.pathname.slice(1);
            }
            let src = 'https://www.youtube.com/embed/' + id;
            if (start) src += '?start=' + start.replace(/s$/, '');
            return src;
          } catch (e) { return $props.url; }
        })()"
        title="YouTube video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

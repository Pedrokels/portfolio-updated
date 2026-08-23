<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Footer from './MyProfile/Footer.vue';
import MyProfileVideo from './MyProfile/myProfileVideo.vue';
import SocialsVideo from './MyProfile/SocialsVideo.vue';
import FacebookReelEmbed from './FacebookReelEmbed.vue';

const router = useRouter();
const activeReel = ref(null);

const reels = [
  {
    url: 'https://www.facebook.com/reel/28146508114942420/',
    views: '1.2M',
    reactions: '31K',
    shares: '2.8K',
    highlight: true,
    title: 'Top Reel'
  },
  {
    url: 'https://www.facebook.com/reel/1005962205537589/',
    views: '171K',
    reactions: '6.4K',
    shares: '627',
    title: 'Top Reel',
    
  },

  {
    url: 'https://www.facebook.com/reel/1021135663890266/',
    views: '67K',
    reactions: '2.2K',
    shares: '455',
    title: 'Top Reel',
    
  },

  
  {
    url: 'https://www.facebook.com/reel/1611058137110617/',
    views: '30K',
    reactions: '1.4K',
    shares: '—',
    title: 'Top Reel',

  },
  {
    url: 'https://www.facebook.com/reel/28235481439474379/',
    views: '81k',
    reactions: '1.3',
    shares: '290',
    title: 'Top Reel',
    forceLink: true,
  },
  {
    url: 'https://www.facebook.com/reel/2104513353835841/',
    views: '—',
    reactions: '—',
    shares: '—',
    title: 'Top Reel',
    forceLink: true,
  }
];

const openReel = (reel) => {
  activeReel.value = reel;
};

const closeReel = () => {
  activeReel.value = null;
};

// NOTE: embeddability can't be reliably checked from the deployed site itself —
// Facebook's plugin endpoint doesn't allow cross-origin reads of its response body,
// and a "check-embed" server only running on localhost is unreachable once this page
// is live. If a specific reel is confirmed to be blocked by Facebook, just add
// `forceLink: true` to that reel's entry above and it'll render as a link-out card
// instead of a broken embed.
</script>

<template>
  <div class="min-h-screen bg-transparent text-zinc-900 transition-colors duration-300 dark:bg-black dark:text-zinc-50">
    <div class="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-10 py-10">
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-8">
        <div class="lg:col-span-4 space-y-4">
        
          <my-profile-video />
          
          <div class="rounded-[24px] border border-zinc-300/80 bg-white/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.06)] backdrop-blur-sm transition duration-300 dark:border-zinc-800 dark:bg-[#141414]/95">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 text-zinc-900 dark:text-white">
                <path d="M12 3c1.103 0 2 .897 2 2v1.5a1.5 1.5 0 0 1-3 0V5c0-1.103.897-2 2-2Zm5 4.5c1.103 0 2 .897 2 2v1.5a1.5 1.5 0 0 1-3 0V9.5c0-1.103.897-2 2-2ZM7 5.5c1.103 0 2 .897 2 2v1.5a1.5 1.5 0 0 1-3 0V7.5c0-1.103.897-2 2-2Z" />
                <path d="M6 12.75c0-1.243 1.007-2.25 2.25-2.25h7.5C17.993 10.5 19 11.507 19 12.75v1.875c0 1.243-1.007 2.25-2.25 2.25H8.25c-1.243 0-2.25-1.007-2.25-2.25V12.75Zm-1.5 5.625A3.375 3.375 0 0 1 7.875 15h8.25A3.375 3.375 0 0 1 19.5 18.375v.75c0 1.243-1.007 2.25-2.25 2.25H8.25A2.25 2.25 0 0 1 6 19.125v-.75Z" />
              </svg>
              <h2 class="text-base font-semibold text-zinc-900 dark:text-white">Summary</h2>
            </div>
            <p class="mt-4 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
             I'm a nature and adventure content creator based in the Philippines, telling stories through short-form reels and edits. I turn travel, landscapes, and quiet in-between moments into videos that make people feel something. Editing is where I get to be creative and productive at once — it's the work that keeps me grounded and lets me share the places and stories that matter to me.
            <br>
                      <br>
                      Currently seeking video editing work especially projects involving travel, nature, or short-form storytelling. Open to freelance and collaboration opportunities.
            </p>
          </div>


          <socials-video />
            <!-- Inline stats: moved inside the Summary card as requested -->
       <div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
    <div class="animate__animated animate__fadeInUp rounded-[24px] border border-zinc-300/80 bg-white/90 p-4 pt-6 text-center shadow-[0_18px_45px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-zinc-800 dark:bg-[#141414]/95 sm:p-5">
      <div class="text-4xl font-bold leading-none text-zinc-950 dark:text-white sm:text-5xl">3</div>
      <div class="mt-3 text-xs font-medium text-zinc-600 dark:text-zinc-300 sm:text-sm"">Years of Editing</div>
    </div>
    <div class="animate__animated animate__fadeInUp rounded-[24px] border border-zinc-300/80 bg-white/90 p-4 pt-6 text-center shadow-[0_18px_45px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-zinc-800 dark:bg-[#141414]/95 sm:p-5">
      <div class="text-4xl font-bold leading-none text-zinc-950 dark:text-white sm:text-5xl">400+</div>
      <div class="mt-3 text-xs font-medium text-zinc-600 dark:text-zinc-300 sm:text-sm"">Videos Edited</div>
    </div>
    <div class="animate__animated animate__fadeInUp rounded-[24px] border border-zinc-300/80 bg-white/90 p-4 pt-6 text-center shadow-[0_18px_45px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-zinc-800 dark:bg-[#141414]/95 sm:p-5">
      <div class="text-4xl font-bold leading-none text-zinc-950 dark:text-white sm:text-5xl">30+</div>
      <div class="mt-3 text-xs font-medium text-zinc-600 dark:text-zinc-300 sm:text-sm">Projects Completed</div>
    </div>
  </div>
  <!-- Tools & Software -->
<div class="rounded-[24px] border border-zinc-300/80 bg-white/90 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-zinc-800 dark:bg-[#141414]/95">
  <h3 class="text-sm font-semibold text-zinc-900 dark:text-white">Editing Software</h3>
  <div class="mt-3 flex flex-wrap gap-2">
    <span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">CapCut</span>
    <span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">Adobe Premiere Pro</span>
    <span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">DaVinci Resolve</span>
    <span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">Filmora</span>
    <span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">Canva Video</span>
  </div>
</div>

<!-- Gear -->
<div class="rounded-[24px] border border-zinc-300/80 bg-white/90 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-zinc-800 dark:bg-[#141414]/95">
  <h3 class="text-sm font-semibold text-zinc-900 dark:text-white">Gear I Use</h3>
  <div class="mt-3 flex flex-wrap gap-2">
    <span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">DJI Osmo 360</span>
    <span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">DJI Mic Mini 2</span>
    <!-- <span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">MacBook Pro M3</span> -->
    <span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">DJI Osmo Action 5 Pro</span>
    <span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">iPhone 13 Pro</span>
    <span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">Tripod</span>
    <span class="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">DJI Osmo Gimbal</span>
  </div>
</div>
<!-- Testimonials -->
<div class="rounded-[24px] border border-zinc-300/80 bg-white/90 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.05)] backdrop-blur-sm dark:border-zinc-800 dark:bg-[#141414]/95">
  <h3 class="text-sm font-semibold text-zinc-900 dark:text-white">What People Say</h3>
  <div class="mt-4 space-y-4">
    <div class="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-900">
      <p class="text-sm leading-6 text-zinc-700 dark:text-zinc-300">"Quality Content and Nice Editing skills 🔥🫶🏽"</p>
      <div class="mt-3 flex items-center gap-2.5">
        <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-950 text-xs font-bold text-white shadow-sm dark:from-zinc-300 dark:to-zinc-500 dark:text-zinc-950">
          RJ
        </div>
        <div>
          <div class="text-xs font-semibold text-zinc-900 dark:text-white">Rovert Joshua</div>
          <div class="text-[11px] text-zinc-500 dark:text-zinc-400">Facebook Recommendation</div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>

        <div class="lg:col-span-8 space-y-4">

          <div class="rounded-[24px] border border-zinc-300/80 bg-white/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.06)] backdrop-blur-sm transition duration-300 dark:border-zinc-800 dark:bg-[#141414]/95">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-center gap-2">
                <span class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-white">🎬</span>
                <div>
                  <h2 class="text-lg font-semibold text-zinc-900 dark:text-white">Top Reels I've Created
</h2>
                  <p class="text-sm text-zinc-500 dark:text-zinc-400">A showcase of my best-performing Facebook reels, formatted for mobile.</p>
                </div>
              </div>
              <a href="https://www.facebook.com/pedrojuanders/reels" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-white">
                <span>Check All</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-4-4l4 4-4 4" />
                </svg>
              </a>
            </div>

            <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 justify-items-center">
              <div v-for="reel in reels" :key="reel.url" class="cursor-pointer w-full max-w-[340px]" @click="openReel(reel)">
                <div class="relative rounded-3xl border border-zinc-200 dark:border-zinc-800 p-1 bg-white/95 dark:bg-zinc-950 overflow-hidden" :class="reel.highlight ? 'shadow-[0_0_0_4px_rgba(255,255,255,0.08)] border-white/80 dark:border-white/20' : ''">
                 <template v-if="!reel.forceLink">
                   <FacebookReelEmbed :reelUrl="reel.url" :highlight="reel.highlight" :width="340" :height="600" />
                 </template>
                 <template v-else>
                   <!-- Fallback link card when embed is not available -->
                   <a :href="reel.url" target="_blank" rel="noopener" class="block w-full h-full" style="aspect-ratio:340/600;">
                     <div class="h-full w-full flex items-center justify-center bg-black/90 rounded-3xl">
                       <div class="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7-7 7V5z"/></svg>
                         Open on Facebook
                       </div>
                     </div>
                   </a>
                 </template>

                 <div v-if="reel.highlight" class="pointer-events-none absolute left-1/2 bottom-3 inline-flex -translate-x-1/2 items-center rounded-full bg-black/65 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm">Top Reel</div>

                 <!-- Open on Facebook button (fallback for embeds that show 'Unavailable') -->
                 <a :href="reel.url" target="_blank" rel="noopener" class="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900 hover:bg-white dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 14l11-11m0 0v7m0-7h-7"/></svg>
                   Open
                 </a>
                </div>
                             <div class="mt-2 flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400 gap-3">
                               <div class="text-center flex-1">
                                 <div class="font-semibold text-zinc-950 dark:text-white">{{ reel.views }}</div>
                                 <div class="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.3em]">Views</div>
                 </div>
                               <div class="text-center flex-1">
                                 <div class="font-semibold text-zinc-950 dark:text-white">{{ reel.reactions }}</div>
                                 <div class="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.3em]">Reactions</div>
                 </div>
                               <div class="text-center flex-1">
                                 <div class="font-semibold text-zinc-950 dark:text-white">{{ reel.shares }}</div>
                                 <div class="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-[0.3em]">Shares</div>
                 </div>
               </div>
              </div>
            </div>
          </div>
          <div v-if="activeReel" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8">
            <div class="relative w-full max-w-3xl rounded-[32px] border border-zinc-800 bg-zinc-950 p-4 shadow-2xl sm:p-6">
              <button @click="closeReel" class="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-white transition hover:bg-zinc-800">
                <span class="text-xl">×</span>
              </button>
              <div class="rounded-3xl overflow-hidden border border-zinc-800 bg-black">
                <FacebookReelEmbed :reelUrl="activeReel.url" />
              </div>
              <div class="mt-4 grid gap-3 sm:grid-cols-3 text-center text-sm text-zinc-300">
                <div>
                  <div class="font-semibold text-white">{{ activeReel.views }}</div>
                  <div class="uppercase tracking-[0.3em] text-zinc-500">Views</div>
                </div>
                <div>
                  <div class="font-semibold text-white">{{ activeReel.reactions }}</div>
                  <div class="uppercase tracking-[0.3em] text-zinc-500">Reactions</div>
                </div>
                <div>
                  <div class="font-semibold text-white">{{ activeReel.shares }}</div>
                  <div class="uppercase tracking-[0.3em] text-zinc-500">Shares</div>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-[24px] border border-zinc-300/80 bg-white/90 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.06)] backdrop-blur-sm transition duration-300 dark:border-zinc-800 dark:bg-[#141414]/95">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-center gap-2">
                <span class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-rose-400">▶</span>
                <div>
                  <h2 class="text-lg font-semibold text-zinc-900 dark:text-white">YouTube Videos</h2>
                  <p class="text-sm text-zinc-500 dark:text-zinc-400">Adventure Videos
Longer-form edits from my travels — the full stories behind the reels.`</p>
                </div>
              </div>
              <a href="https://www.youtube.com/@pedrojuanders" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-white">
                <span>Check All</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-4-4l4 4-4 4" />
                </svg>
              </a>
            </div>
            <div class="mt-6 grid gap-4 sm:grid-cols-2">
              <div class="rounded-3xl border border-zinc-300/80 bg-white/95 p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <div class="overflow-hidden rounded-3xl border border-zinc-200 bg-black h-[260px] md:h-[300px]">
                  <iframe
                    src="https://www.youtube.com/embed/HQa13rHWgcQ?si=yVLLIAPmO5Eac8FF"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    class="h-full w-full"
                  ></iframe>
                </div>
              </div>
              <div class="rounded-3xl border border-zinc-300/80 bg-white/95 p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <div class="overflow-hidden rounded-3xl border border-zinc-200 bg-black h-[260px] md:h-[300px]">
                  <iframe
                    src="https://www.youtube.com/embed/f6DFGTkRf-M?si=3akU3cHlzt1-In_3&amp;start=1010"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    class="h-full w-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="mt-8">
        <Footer />
      </footer>

      <div class="fixed right-4 bottom-4 z-50 rounded-full bg-transparent dark:bg-transparent ">
        <div class="flex flex-col gap-3 md:flex-row md:items-center">
          <button
            type="button"
            @click="router.push('/')"
            class="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <button
            type="button"
            @click="router.push('/developer')"
            class="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
          >
            <span>Check my Developer page</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-4-4l4 4-4 4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
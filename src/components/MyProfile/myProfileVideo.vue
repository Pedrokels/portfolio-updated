<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useDarkMode } from "../../useDarkMode";
const { isDarkMode, toggleDarkMode } = useDarkMode();
const isScrolled = ref(false);
const handleScroll = () => { isScrolled.value = window.scrollY > 50; };
onMounted(() => { window.addEventListener('scroll', handleScroll); });
onUnmounted(() => { window.removeEventListener('scroll', handleScroll); });
</script>

<template>
  <div class="animate__animated animate__fadeIn w-full">
    <div class="rounded-[24px] border border-zinc-300/80 bg-white/90 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-colors duration-300 dark:border-zinc-800 dark:bg-[#141414]/95 sm:p-5 md:p-6"
      :class="{ 'rounded-b-[24px]': isScrolled, 'rounded-[24px]': !isScrolled }">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-start">
        <img src="/src/assets/images/peter_video.jpg" alt="pedro.juan"
          class="h-28 w-28 rounded-2xl object-cover shadow-sm sm:h-32 sm:w-32 md:h-36 md:w-36">
        <div class="flex-1">
          <div class="flex flex-col gap-3 sm:gap-2">
            <div class="flex flex-wrap items-start justify-between gap-2">
              <div class="flex flex-col">
                <div class="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-2xl">Pedro Juan</div>
              </div>
                   <input id="toggle_dark_mode" class="theme-checkbox shrink-0" type="checkbox" v-model="isDarkMode"
                                @click="toggleDarkMode" />
            </div>

            <div class="space-y-2 text-zinc-700 dark:text-zinc-300">
              <span class="text-sm font-medium uppercase tracking-[0.3em] text-zinc-600 dark:text-zinc-400">VIDEO EDITOR / CONTENT CREATOR</span>
              <div class="flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span class="text-sm sm:text-[15px]">Bulan Sorsogon, Bicol Philippines</span>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 pt-1">
              <a href="mailto:peterjohngerero@gmail.com" class="flex items-center gap-2 rounded-full bg-zinc-950 px-3 py-2 text-xs font-medium text-white transition duration-300 hover:-translate-y-0.5 dark:bg-white dark:text-zinc-950 sm:px-4 sm:text-sm">
                <svg class="h-4 w-4 stroke-current sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Email
              </a>

              <a href="https://www.facebook.com/messages/e2ee/t/9339303586166954" target="_blank" class="flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-3 py-2 text-xs font-medium text-zinc-900 transition duration-300 hover:-translate-y-0.5 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white sm:px-4 sm:text-sm">
                <svg class="h-4 w-4 stroke-current sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

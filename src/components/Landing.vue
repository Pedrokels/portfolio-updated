<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="min-h-screen bg-[#0d0d0d] text-white px-4 py-10 flex items-center justify-center">
    <div class="mx-auto w-full max-w-5xl">
      <div class="text-center">
        <h1 class="text-5xl sm:text-6xl font-extrabold tracking-tight">Pedro Juan</h1>
        <p class="mt-4 text-base sm:text-lg text-zinc-400 uppercase tracking-[0.3em]">
          <span class="text-white">Full Stack Developer</span>
          <span class="mx-3 text-zinc-600">/</span>
          <span class="text-zinc-400">Video Editor & Content Creator</span>
        </p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <button
          type="button"
          @click="router.push('/developer')"
          class="group rounded-[28px] border border-zinc-800 bg-zinc-950 p-8 text-left shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 transform hover:-translate-y-1 hover:scale-[1.01] hover:border-indigo-400"
        >
          <div class="flex items-start gap-4">
            <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800 text-indigo-400 text-xl">&lt;/&gt;</span>
            <div>
              <div class="text-xl font-semibold text-white">Full Stack Developer</div>
              <div class="mt-2 text-sm text-zinc-400">Web apps, systems, and software solutions</div>
            </div>
          </div>
        </button>

        <button
          type="button"
          @click="router.push('/creator')"
          class="group rounded-[28px] border border-zinc-800 bg-zinc-950 p-8 text-left shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition duration-300 transform hover:-translate-y-1 hover:scale-[1.01] hover:border-rose-400"
        >
          <div class="flex items-start gap-4">
            <span class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800 text-rose-400 text-xl">▶</span>
            <div>
              <div class="text-xl font-semibold text-white">Video Editor & Content Creator</div>
              <div class="mt-2 text-sm text-zinc-400">Reels, video edits, and content creation</div>
            </div>
          </div>
        </button>
      </div>

      <div class="mt-10 text-center text-sm text-zinc-500">
Two crafts, one person — pick the one that fits what you need.</div>
    </div>
  </div>
</template>

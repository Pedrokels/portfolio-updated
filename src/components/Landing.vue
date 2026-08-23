<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const router = useRouter();

/* ---------------- NAME SCRAMBLE EFFECT ---------------- */
const ORIGINAL_NAME = 'Pedro Juan';
const ALT_NAME = 'Peter John Gerero';
const displayName = ref(ORIGINAL_NAME);

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}#;';
let scrambleInterval = null;
let isShowingAlt = false;

function scrambleTo(target) {
  clearInterval(scrambleInterval);
  const current = displayName.value;
  const maxLen = Math.max(current.length, target.length);
  const paddedCurrent = current.padEnd(maxLen, ' ');
  const paddedTarget = target.padEnd(maxLen, ' ');

  let frame = 0;
  const totalFrames = maxLen * 3;

  scrambleInterval = setInterval(() => {
    let result = '';
    for (let i = 0; i < maxLen; i++) {
      const revealFrame = i * 2.5;
      if (paddedTarget[i] === ' ') {
        result += ' ';
      } else if (frame >= revealFrame + 6) {
        result += paddedTarget[i];
      } else if (frame >= revealFrame) {
        result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      } else {
        result += paddedCurrent[i] ?? ' ';
      }
    }
    displayName.value = result.trimEnd();
    frame++;
    if (frame > totalFrames) {
      displayName.value = target;
      clearInterval(scrambleInterval);
    }
  }, 28);
}

function handleNameHover() {
  if (isShowingAlt) return;
  isShowingAlt = true;
  scrambleTo(ALT_NAME);
}
function handleNameLeave() {
  isShowingAlt = false;
  scrambleTo(ORIGINAL_NAME);
}

/* ---------------- FLOATING BOUNCING ICONS ---------------- */
const ICONS = [
  { symbol: '</>', type: 'code' },
  { symbol: '{ }', type: 'code' },
  { symbol: '#', type: 'code' },
  { symbol: '( )', type: 'code' },
  { symbol: ';', type: 'code' },
  { symbol: '▶', type: 'edit' },
  { symbol: '✂', type: 'edit' },
  { symbol: '🎬', type: 'edit' },
  { symbol: '🎞', type: 'edit' },
  { symbol: '⏱', type: 'edit' },
];

const floaters = ref([]);
let rafId = null;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function initFloaters() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  floaters.value = ICONS.map((icon) => ({
    ...icon,
    x: randomBetween(0, w),
    y: randomBetween(0, h),
    vx: randomBetween(-0.6, 0.6) || 0.3,
    vy: randomBetween(-0.6, 0.6) || 0.3,
    size: randomBetween(18, 34),
    rotation: randomBetween(0, 360),
    rotSpeed: randomBetween(-0.15, 0.15),
  }));
}

function tick() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  for (const f of floaters.value) {
    f.x += f.vx;
    f.y += f.vy;
    f.rotation += f.rotSpeed;

    if (f.x <= 0 || f.x >= w - f.size) {
      f.vx *= -1;
      f.x = Math.min(Math.max(f.x, 0), w - f.size);
    }
    if (f.y <= 0 || f.y >= h - f.size) {
      f.vy *= -1;
      f.y = Math.min(Math.max(f.y, 0), h - f.size);
    }
  }
  rafId = requestAnimationFrame(tick);
}

function handleResize() {
  initFloaters();
}

onMounted(() => {
  initFloaters();
  rafId = requestAnimationFrame(tick);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  cancelAnimationFrame(rafId);
  clearInterval(scrambleInterval);
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#0a0a0b] text-white px-4 py-10 flex items-center justify-center">

    <!-- Floating bouncing icons -->
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div
        v-for="(f, i) in floaters"
        :key="i"
        class="absolute select-none font-mono font-bold"
        :class="f.type === 'code' ? 'text-indigo-400/20' : 'text-rose-400/20'"
        :style="{
          left: f.x + 'px',
          top: f.y + 'px',
          fontSize: f.size + 'px',
          transform: `rotate(${f.rotation}deg)`,
        }"
      >
        {{ f.symbol }}
      </div>
    </div>

    <!-- Ambient glow background -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden z-0">
      <div class="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]"></div>
      <div class="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-rose-600/20 blur-[120px]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:32px_32px]"></div>
    </div>

    <div class="relative z-10 mx-auto w-full max-w-5xl">
      <div class="text-center">
        <span class="inline-block rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-zinc-400 backdrop-blur-sm">
          Welcome
        </span>

        <h1
          @mouseenter="handleNameHover"
          @mouseleave="handleNameLeave"
          class="mt-6 text-5xl sm:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent cursor-default whitespace-pre font-mono sm:font-sans"
        >
          {{ displayName }}
        </h1>

        <p class="mt-5 text-sm sm:text-base text-zinc-400 uppercase tracking-[0.3em]">
          <span class="text-white">Full Stack Developer</span>
          <span class="mx-3 text-zinc-700">/</span>
          <span class="text-zinc-400">Video Editor & Content Creator</span>
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2">
        <button
          type="button"
          @click="router.push('/developer')"
          class="group relative rounded-[28px] border border-zinc-800 bg-zinc-950/60 p-8 text-left backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-400/60 hover:shadow-[0_25px_70px_rgba(99,102,241,0.15)]"
        >
          <div class="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br group-hover:from-indigo-500/5 group-hover:to-transparent"></div>

          <div class="relative flex items-start gap-4">
            <span class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-indigo-500/5 text-indigo-400 text-xl ring-1 ring-indigo-500/20 transition-transform duration-300 group-hover:scale-110">
              &lt;/&gt;
            </span>
            <div>
              <div class="text-xl font-semibold text-white">Full Stack Developer</div>
              <div class="mt-2 text-sm text-zinc-400">Web apps, systems, and software solutions</div>
            </div>
          </div>

          <div class="relative mt-6 flex items-center gap-1.5 text-xs font-medium text-indigo-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
            Explore work
            <span aria-hidden="true">→</span>
          </div>
        </button>

        <button
          type="button"
          @click="router.push('/creator')"
          class="group relative rounded-[28px] border border-zinc-800 bg-zinc-950/60 p-8 text-left backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-400/60 hover:shadow-[0_25px_70px_rgba(244,63,94,0.15)]"
        >
          <div class="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br group-hover:from-rose-500/5 group-hover:to-transparent"></div>

          <div class="relative flex items-start gap-4">
            <span class="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500/20 to-rose-500/5 text-rose-400 text-xl ring-1 ring-rose-500/20 transition-transform duration-300 group-hover:scale-110">
              ▶
            </span>
            <div>
              <div class="text-xl font-semibold text-white">Video Editor & Content Creator</div>
              <div class="mt-2 text-sm text-zinc-400">Reels, video edits, and content creation</div>
            </div>
          </div>

          <div class="relative mt-6 flex items-center gap-1.5 text-xs font-medium text-rose-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
            View content
            <span aria-hidden="true">→</span>
          </div>
        </button>
      </div>

      <div class="mt-10 text-center text-sm text-zinc-500">
        Two crafts, one person — pick the one that fits what you need.
      </div>
    </div>
  </div>
</template>
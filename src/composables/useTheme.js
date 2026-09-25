import { readonly, ref } from 'vue'

const STORAGE_KEY = 'theme'
const root = document.documentElement

// Module-level state so every ThemeToggle on the page stays in sync.
// The initial class is set by the inline script in index.html (before first paint).
const isDark = ref(root.classList.contains('dark'))

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let transitionTimer = null

function apply (dark) {
  isDark.value = dark

  // Fade every token-driven surface together instead of snapping.
  if (!prefersReducedMotion()) {
    root.classList.add('theme-transition')
    clearTimeout(transitionTimer)
    transitionTimer = setTimeout(() => root.classList.remove('theme-transition'), 450)
  }

  root.classList.toggle('dark', dark)
}

function readStored () {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

// Follow the OS setting until the visitor makes an explicit choice.
const media = window.matchMedia('(prefers-color-scheme: dark)')
media.addEventListener('change', (event) => {
  if (!readStored()) apply(event.matches)
})

export function useTheme () {
  function toggle () {
    const next = !isDark.value
    apply(next)
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light')
    } catch {
      /* storage unavailable (private mode) — preference just won't persist */
    }
  }

  return { isDark: readonly(isDark), toggle }
}

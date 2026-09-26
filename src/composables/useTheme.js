import { readonly, ref } from 'vue'

const STORAGE_KEY = 'theme'
const PREFERENCES = ['light', 'system', 'dark']
const root = document.documentElement
const media = window.matchMedia('(prefers-color-scheme: dark)')

function readStored () {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return PREFERENCES.includes(value) ? value : 'system'
  } catch {
    return 'system'
  }
}

const resolve = (pref) => pref === 'dark' || (pref === 'system' && media.matches)

// Module-level state so every ThemeToggle on the page stays in sync.
// The initial class is set by the inline script in index.html (before first paint).
const preference = ref(readStored())
const isDark = ref(root.classList.contains('dark'))

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let transitionTimer = null

function setClass (dark) {
  isDark.value = dark
  root.classList.toggle('dark', dark)
}

// Fade every token-driven surface together instead of snapping.
function crossfade (dark) {
  if (prefersReducedMotion()) return setClass(dark)
  root.classList.add('theme-transition')
  clearTimeout(transitionTimer)
  transitionTimer = setTimeout(() => root.classList.remove('theme-transition'), 450)
  setClass(dark)
}

// Circular wipe of the new theme, growing out from the click point.
function reveal (dark, x, y) {
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  const transition = document.startViewTransition(() => setClass(dark))
  transition.ready
    .then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 540, easing: 'cubic-bezier(.32,.08,.24,1)', pseudoElement: '::view-transition-new(root)' }
      )
    })
    .catch(() => {})
}

// Follow the OS setting while the visitor is on "system".
media.addEventListener('change', (event) => {
  if (preference.value === 'system') crossfade(event.matches)
})

export function useTheme () {
  function setTheme (pref, event) {
    preference.value = pref
    try {
      localStorage.setItem(STORAGE_KEY, pref)
    } catch {
      /* storage unavailable (private mode) — preference just won't persist */
    }

    const dark = resolve(pref)
    if (dark === isDark.value) return

    if (prefersReducedMotion() || !document.startViewTransition) return crossfade(dark)

    // Keyboard activation has no pointer position; start from the button's centre.
    let x = event?.clientX
    let y = event?.clientY
    if (!x && !y && event?.currentTarget) {
      const rect = event.currentTarget.getBoundingClientRect()
      x = rect.left + rect.width / 2
      y = rect.top + rect.height / 2
    }
    reveal(dark, x ?? innerWidth, y ?? 0)
  }

  return { preference: readonly(preference), isDark: readonly(isDark), setTheme }
}

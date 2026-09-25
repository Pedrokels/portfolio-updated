import { onBeforeUnmount, onMounted, ref } from 'vue'

// In-page navigation without involving the router: re-clicking the same link
// still scrolls, and `scroll-margin-top` (style.css) clears the sticky header.
export function scrollToSection (id) {
  const el = document.getElementById(id)
  if (!el) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })

  // Move focus for keyboard and screen-reader users without a second jump.
  el.setAttribute('tabindex', '-1')
  el.focus({ preventScroll: true })
}

// Tracks which section currently sits in the upper-middle of the viewport.
export function useActiveSection (ids) {
  const active = ref(null)
  let observer = null

  onMounted(() => {
    if (!ids.length) return

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) active.value = entry.target.id
        }
      },
      { rootMargin: '-35% 0px -60% 0px' }
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onBeforeUnmount(() => observer?.disconnect())

  return active
}

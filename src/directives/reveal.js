// v-reveal — fade-up an element the first time it scrolls into view.
//
//   <div v-reveal>…</div>
//   <li v-for="(item, i) in items" v-reveal="i * 80">…</li>   // stagger in ms
//
// Styling lives in style.css (.reveal / .is-visible) and is disabled under
// prefers-reduced-motion, so this directive only toggles classes.

let observer = null

function getObserver () {
  if (observer) return observer

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
  )

  return observer
}

export const reveal = {
  mounted (el, binding) {
    if (!('IntersectionObserver' in window)) return

    el.classList.add('reveal')
    if (typeof binding.value === 'number') {
      el.style.setProperty('--reveal-delay', `${binding.value}ms`)
    }
    getObserver().observe(el)
  },

  unmounted (el) {
    observer?.unobserve(el)
  }
}

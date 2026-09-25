import { createRouter, createWebHistory } from 'vue-router'
import { site } from '../data/profile'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('../pages/LandingPage.vue'),
    meta: { title: `${site.name} — Developer & Creator` }
  },
  {
    path: '/developer',
    name: 'Home',
    component: () => import('../pages/DeveloperPage.vue'),
    meta: { title: `${site.name} — Full Stack Developer` }
  },
  {
    path: '/creator',
    name: 'Creator',
    component: () => import('../pages/CreatorPage.vue'),
    meta: { title: `${site.alias} — Video Editor & Content Creator` }
  },
  // Former standalone pages now live as sections of /developer. Keep the URLs working.
  { path: '/developer/my-projects', name: 'Projects', redirect: { name: 'Home', hash: '#work' } },
  { path: '/developer/tech-stack', name: 'TechStack', redirect: { name: 'Home', hash: '#stack' } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

// Matches the `page` transition in style.css so hash scrolling waits for the new page to mount.
const PAGE_TRANSITION_MS = 220
// Sticky header height (4rem) + breathing room.
const HASH_OFFSET = 88

const scrollMode = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) return savedPosition

    const samePage = to.path === from.path
    const delay = samePage ? 0 : PAGE_TRANSITION_MS

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          to.hash
            ? { el: to.hash, top: HASH_OFFSET, behavior: samePage ? scrollMode() : 'auto' }
            : { top: 0 }
        )
      }, delay)
    })
  }
})

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title
})

export default router

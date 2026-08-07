import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import HomeLayout from '../Layouts/HomeLayout.vue'

const routes = [
  {
    path: '',
    component: HomeLayout,
    children: [
      {
        path: '',
        name: 'Landing',
        component: () => import('../components/Landing.vue')
      },
      {
        path: 'creator',
        name: 'Creator',
        component: () => import('../components/VideoEditor.vue')
      }
    ]
  },
  {
    path: '/developer',
    component: HomeLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../components/DeveloperPage.vue')
      },
      {
        path: 'my-projects',
        name: 'Projects',
        component: () => import('../components/Projects.vue')
      },
      {
        path: 'tech-stack',
        name: 'TechStack',
        component: () => import('../components/TechStack.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior () {
    return { top: 0, left: 0 }
  }
})

export default router

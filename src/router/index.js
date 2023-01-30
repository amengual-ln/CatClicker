import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/twocats',
      name: 'twocats',
      component: () => import('../views/TwoCatsView.vue')
    },
    {
      path: '/morecats',
      name: 'morecats',
      component: () => import('../views/MoreCatsView.vue'),
      children: [
        {
          path: ':breed',
          name: 'breedDetails',
          component: () => import('../components/CatDetails.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: () => import('../views/BadUrlView.vue')
    }
  ]
})

export default router

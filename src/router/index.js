import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
       {
      path: '/card',
      name: 'card',
      component: () => import('../views/CardView.vue'),
    },
      {
      path: '/request',
      name: 'request',
      component: () => import('../views/RequestView.vue'),
    },
        {
      path: '/offer',
      name: 'offer',
      component: () => import('../views/OfferView.vue'),
    },
         {
      path: '/partner',
      name: 'partner',
      component: () => import('../views/PartnerView.vue'),
    },
          {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
          {
      path: '/finance',
      name: 'finance',
      component: () => import('../views/FinanceView.vue'),
    },



  ],
})

export default router

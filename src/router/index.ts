import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/FamilyFormView.vue'),
    },
    {
      path: '/preview',
      name: 'preview',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FamilyPreviewView.vue'),
    },
  ],
})

function translateRouteName(name: string): string {
  const translations: Record<string, string> = {
    home: 'Главная',
    preview: 'Превью',
  }
  return translations[name] || name
}

router.afterEach(() => {
  console.log('afterEach', router.currentRoute.value.name)
  document.title =
    router && router.currentRoute.value.name
      ? `${translateRouteName(String(router.currentRoute.value.name))} – Информация о себе`
      : 'Пусто'
})

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import PostListView from '../views/PostListView.vue'
import PostView from '../views/PostView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/post',
    name: 'postList',
    component: PostListView
  },
  { /* aqui indicamos que esta ruta recibira un parametro */
    path: '/post/:id',
    name: 'post',
    component: PostView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

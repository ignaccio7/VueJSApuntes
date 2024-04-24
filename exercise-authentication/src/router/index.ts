import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import NoteCreateView from '../views/NoteCreateView.vue'
import NoteListView from '../views/NoteListView.vue'

import useAuthStore from '@/store/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta:{
      requireAuth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta:{
      requireAuth: false
    }
  },
  {
    path: '/notec',
    name: 'noteCreate',
    component: NoteCreateView,
    meta:{
      requireAuth: true
    }
  },
  {
    path: '/notel',
    name: 'noteList',
    component: NoteListView,
    meta:{
      requireAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  //const authStore = useAuthStore();
  //let isAuth = authStore.token;
  const isAuth = true;
  //si la ruta necesita autenticacion y el token sea nulo no le dejaremos
  //if ((to.meta.requireAuth) && (isAuth == null)) {
  if (to.meta.requireAuth && !isAuth){
    next({ name:'login' });
    return
  }{
    next();
    return
  }

})

export default router

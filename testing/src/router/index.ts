import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import PostView from '@/views/PostView.vue'
import DetailView from '@/views/DetailView.vue'

import { useAuth } from '@/store/useAuth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      requireAuth:false
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta:{
      requireAuth:false
    }
  },
  {
    path:'/login',
    name:'login',
    component:LoginView,
    meta:{
      requireAuth:false
    }
  },
  {
    path:'/post',
    name:'post',
    component:PostView,
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/detail/:id',
    name:'detail',
    component:DetailView,
    meta:{
      requireAuth:true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{

  const store = useAuth();
  //el usuario no esta autenticado y quiere ir a una ruta que requiere autenticacion
  if (to.meta.requireAuth && !store.isAuth) {
    next('login');
  }else{
    next();
  }
})

export default router

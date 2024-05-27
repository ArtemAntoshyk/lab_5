import { createRouter, createWebHistory } from 'vue-router'
import toDo from '../pages/to-do.vue'
import about from '../pages/about.vue'
import login from '../pages/auth/login.vue'
import signup from '../pages/auth/signup.vue'

const routes = [
  { path: '/', component: toDo  },
  { path: '/about', component: about  },
  { path: '/auth/login', component: login },
  { path: '/auth/signup', component: signup }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeResolve((to, from, next) => {
  if (to.fullPath.startsWith('/auth')) {
    if (localStorage.getItem('user')) return next({ path: '/' })
    else return next()
  } else {
    if (localStorage.getItem('user')) return next()
    else return next({ path: '/auth/login' })
  }
})

export default router
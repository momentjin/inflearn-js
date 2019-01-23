import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'

// middleware
Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}` // rPath = return path
  isAuth ? next() : next(loginPath)
}

// mode: Hashmap vs History
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/b/:bid', component: Board, beforeEnter: requireAuth, children: [
      { path: 'c/:cid', component: Card, beforeEnter: requireAuth }
    ] },

    // none match
    { path: '*', component: NotFound }
  ]
})

export default router;
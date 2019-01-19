import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// middleware
Vue.use(VueRouter)

const Login = { template: '<div> Login Page </div>' }
const NotFound = { template: '<div> Page not found </div>' }

// mode: Hashmap vs History
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App },
    { path: '/login', component: Login },
    { path: '*', component: NotFound }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h({template: '<router-view></router-view>'})
})

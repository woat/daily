import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Logout from '@/components/Logout'
import Home from '@/components/Home'
import Navi from '@/components/Navi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

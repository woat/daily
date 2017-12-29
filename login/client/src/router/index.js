import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Logout from '@/components/Logout'
import Home from '@/components/Home'
import Navi from '@/components/Navi'
import store from '@/store'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        // If you are logged in, I do not want you to go to the login page
        if (store.getters.getLogged) return next('/home')
        next()
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      beforeEnter: (to, from, next) => {
        // If you are not logged in, I do not want you to go to the logout page
        if (!store.getters.getLogged) return next('/home')
        next()
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

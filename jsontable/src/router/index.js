import Vue from 'vue'
import Router from 'vue-router'
import jsonTable from '@/components/jsonTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'jsonTable',
      component: jsonTable
    }
  ]
})

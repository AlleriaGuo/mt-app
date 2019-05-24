import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: DefaultPage,
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: Index
      }]
    }, {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default.vue';
import blankPage from '@/layout/blank.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: DefaultPage
    },{
      path:'/blank',
      name:'blankPage',
      component:blankPage
    }
  ]
})

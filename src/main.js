import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import '@/assets/css/main.css'
import store from './store'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.directive('document-click', {
  bind (el, binding, vnode) { // 绑定的时候调用一次
    // console.log('---bind')
    document.addEventListener('click', binding.value, false)
  },
  inserted () { // 绑定元素插入到父节点时调用
    // console.log('---inserted')
  },
  update (el, binding) { // dom元素，节点发生变化时触发
    console.log('---update')
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')

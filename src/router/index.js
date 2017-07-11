import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/order-summary.vue'
// import Test from '@/components/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    // {
    //   path: '/test',
    //   name: 'Test',
    //   component: Test
    // }
  ]
})
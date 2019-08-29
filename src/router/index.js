import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/view/Test'
import Test01 from '@/view/Test01'
import Test02 from '@/view/Test02'
import Test03 from '@/view/Test03'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      component: Test
    },
    {
      path: '/blog',
      component: Test01
    },
    {
      path: '/blog2',
      component: Test02
    },
    {
      path: '/blog3',
      component: Test03
    }
  ]
})

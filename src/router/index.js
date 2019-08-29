import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/view/Test'
import Test01 from '@/view/Test01'
import Test02 from '@/view/Test02'
import Test03 from '@/view/Test03'
import Test04 from '@/view/Test04'
import Test05 from '@/view/Test05'
import Test06 from '@/view/Test06'

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
    },
    {
      path: '/blog4',
      component: Test04
    },
    {
      path: '/blog5',
      component: Test05
    },
    {
      path: '/blog6',
      component: Test06
    }
  ]
})

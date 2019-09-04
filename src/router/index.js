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
import Test07 from '@/view/Test07'
import Test08 from '@/view/Test08'
import Test09 from '@/view/Test09'
import Test10 from '@/view/Test10'
import Test11 from '@/view/Test11'
import Test12 from '@/view/Test12'
import Test13 from '@/view/Test13'
import Test14 from '@/view/Test14'
import Test15 from '@/view/Test15'
import Test16 from '@/view/Test16'
import page1 from '@/pages/Page1'
import page2 from '@/pages/Page2'

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
      component: Test01,
      children:[
        {path:'page1',component:page1},
        {path:'page2',component:page2}
      ]
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
    },
    {
      path: '/blog7',
      component: Test07
    },
    {
      path: '/blog8',
      component: Test08
    },
    {
      path: '/blog9',
      component: Test09
    },
    {
      path: '/blog10',
      component: Test10
    },
    {
      path: '/blog11',
      component: Test11
    },
    {
      path: '/blog12',
      component: Test12
    },
    {
      path: '/blog13',
      component: Test13
    },
    {
      path: '/blog14',
      component: Test14
    },
    {
      path: '/blog15',
      component: Test15
    },
    {
      path: '/blog16',
      component: Test16
    }
  ]
})

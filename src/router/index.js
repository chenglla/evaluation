import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const major_info = () => import('@/home/major_info')
const home = () => import('@/home/index')
const result = () => import('@/home/result')
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path: '/home',
      components: {
        default: home
      },
      name: 'home',
      meta: { tab: 'home', title: 'home' }
    },
    {
      path: '/result',
      components: {
        default: result
      },
      name: 'result',
      meta: { tab: 'result', title: 'result' }
    },
    {
      path: '/major_info',
      components: {
        default: major_info
      },
      name: 'major_info',
      meta: { tab: 'major_info', title: 'major_info' }
    }
  ]
})

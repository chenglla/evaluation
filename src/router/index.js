import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const majorInfo = () => import('@/home/major_info')
const home = () => import('@/home/index')
const result = () => import('@/home/result')
const homepage = () => import('@/home/homepage')
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path: '/homepage',
      components: {
        default: homepage
      },
      name: 'homepage',
      meta: { tab: 'homepage', title: 'homepage' }
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
        default: majorInfo
      },
      name: 'major_info',
      meta: { tab: 'major_info', title: 'major_info' }
    }
  ]
})

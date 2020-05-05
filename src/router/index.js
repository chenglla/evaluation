import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const majorInfo = () => import('@/home/major_info')
const home = () => import('@/home/index')
const result = () => import('@/home/result')
const homepage = () => import('@/home/homepage')
const huashi = () => import('@/type3/huashi')
const typeAnswer = () => import('@/type3/typeAnswer')
const personAssessment = () => import('@/personAssessment/index')
const personAssResult = () => import('@/personAssessment/result')
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
    { // 华东师范测评
      path: '/huashi',
      components: {
        default: huashi
      },
      name: 'huashi',
      meta: { tab: 'huashi', title: 'huashi' }
    },
    { // 华东师范测评结果
      path: '/typeAnswer',
      components: {
        default: typeAnswer
      },
      name: 'typeAnswer',
      meta: { tab: 'typeAnswer', title: 'typeAnswer' }
    },
    {
      path: '/result',
      components: {
        default: result
      },
      name: 'result',
      meta: { tab: 'result', title: 'result' }
    },
    { // 人格测试
      path: '/personAssessment',
      components: {
        default: personAssessment
      },
      name: 'personAssessment',
      meta: { tab: 'personAssessment', title: 'personAssessment' }
    },
    { // 人格测试结果
      path: '/personAssResult',
      components: {
        default: personAssResult
      },
      name: 'personAssResult',
      meta: { tab: 'personAssResult', title: 'personAssResult' }
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
